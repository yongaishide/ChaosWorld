// ===========================================================================
// MMCR 高炉 · 机器定义（启动期）+ 燃料驱动 + 控制器界面信息
//
// 本文件属于 startup_scripts：改完必须重启游戏才生效，/reload 无效。
// 结构见 server_scripts/mmcr/structure/kubejs_blast_furnace.js
// 配方见 server_scripts/recipes/mmcr/kubejs_blast_furnace.js
//
// 炉温不再由脚本模拟，改用 MMCR 自带的（Mekanism）热量系统：
//   * 热量端口（mmcr:heat_input_hatch / mmcr:heat_output_hatch）自己存热量、
//     自己向环境散热，热容 300 J/K；温度用开尔文 K（MMCR 界面本来就用 K）。
//   * 冶炼配方带 mekanism:temperature 需求（单位 K），炉温不到就不启动，
//     由 MMCR 原生报「温度不足」，脚本管不着也不用管。
//   * 燃料配方带 mekanism:heat 输出（J/t），烧燃料 = 往机器里灌热。
//   * 热量分「输入向 / 输出向」两套端口，中间没有内部通道：
//     温度需求只认热量输入仓（炉温的出处），热量输出只进热量输出仓（烧燃料的落点）；
//     热量输出仓每 tick 只会把热传给「紧挨着」的热量处理器，所以两个仓必须相邻，
//     燃料烧出来的热才能变成炉温（结构里第 1 层的 (1,0)/(1,1) 就是为此留的相邻位）。
//   脚本只负责三件事：
//     ① 按燃烧值给燃料配方定长（燃烧值 / 10）；
//     ② 炉温高时把冶炼配方的 tick_time 缩短（最多 3 倍速）；
//     ③ 把这些数字写到控制器界面。
//
// 已经踩过的坑，写在最上面免得重犯：
//   1. tick 回调里的 ctx.dataStorage() 是 null —— 这台机器的结构里没有「数据存储」方块，
//      MMCR 只有在结构里带数据存储时才给 DataStorage，所以状态存脚本内存即可。
//   2. KubeJS 的 Rhino 对「嵌套块里的 const/let」会抛 TypeError: redeclaration of var xxx，
//      所以本文件一律用 var 并在函数顶部声明，循环也只用 var。
//   3. 文本必须用 Text.string(...)；Text.of(...) 的参数是 Component，直接喂字符串会炸。
//   4. ctx.ioView() 在结构没成形时可能是 null，读之前必须判空。
//   5. 千万不要用 ctx.cancel() 挡「温度不够」的配方：不启动就永不升温，永远死锁。
//      温度门槛交给原生需求，脚本只在没挡住时降速兜底。
//   6. 温度需求看不见热量输出仓 —— 只有「热量输入仓」的温度才算炉温。如果机器里
//      只有热量输出仓（没输入仓），或者两个仓不挨着，炉温永远是常温，界面要明说。
// ===========================================================================
MMCREvents.startup(event => {
    var api = event.getAPI()
    var SCOPE = api.screenScope()          // .CONTROLLER / .OPERATION
    var TEMP_LINE = api.id('mmcr_kubejs:furnace_temp')
    var HEAT_LINE = api.id('mmcr_kubejs:furnace_heat')
    var STATE_LINE = api.id('mmcr_kubejs:furnace_state')
    var FUEL_LINE = api.id('mmcr_kubejs:furnace_fuel')
    var SPEED_LINE = api.id('mmcr_kubejs:furnace_speed')
    var HINT_LINE = api.id('mmcr_kubejs:furnace_hint')

    // ---------------- 参数 ----------------
    var FUEL_RECIPE = 'mmcr_kubejs:blast_furnace_fuel'   // 升温专用配方
    var KELVIN = 273.15          // °C -> K 的偏移
    var AMBIENT_K = 300          // Mekanism 常温（约 27 °C），读不到热量时的兜底
    var BURN_DIVISOR = 10        // 燃料配方时长 = 燃烧值 / 10
    var MAX_FUEL_TICKS = 72000   // 时长上限 1 小时，防止压缩煤块那种超长配方钉死机器
    var DEFAULT_FUEL_TICKS = 100 // 读不到燃烧值时的兜底时长
    var MAX_SPEEDUP = 3.0        // 高温最多把冶炼耗时压到 1/3
    var WEAK_SPEED = 0.15        // 万一温度门槛没挡住，低温也慢速跑（约 6.7 倍耗时），绝不卡死

    // 冶炼配方温度区间（K）：min 必须与配方 JSON 里的 heat 一致，ideal 是满速温度
    var RECIPE_TEMP = {
        'mmcr_kubejs:blast_furnace_1': { min: 673, ideal: 1173 },    // 400 / 900 °C
        'mmcr_kubejs:blast_furnace_2': { min: 1073, ideal: 1873 }    // 800 / 1600 °C
    }
    var DEFAULT_TEMP = { min: 573, ideal: 1273 }

    // ==================== 运行时状态（脚本内存） ====================
    // key = 机器ID@x,y,z  →  上次读到的炉温 / 上次烧燃料的 tick / 当前燃料 / 冶炼速度
    var STATE = {}

    var keyOf = function (ctx) {
        var pos = ctx.controllerPos()
        return ctx.machineId().toString() + '@' + pos.getX() + ',' + pos.getY() + ',' + pos.getZ()
    }

    var stateOf = function (key) {
        var st = STATE[key]
        if (st == null) {
            st = {
                lastTemp: -1,      // 上一次读到的炉温（K），用来判断升温/降温
                state: '—',        // 升温中 / 降温中 / 恒温
                lastRun: -100000,  // 上一次「燃料配方在跑」的 gameTime
                fuelName: '—',     // 当前燃料显示名
                fuelTotal: 0,      // 当前燃料配方的总时长
                fuelNow: 0,        // 当前燃料配方已跑 tick
                speedPct: 100,     // 上一次算出的冶炼速度（%）
                speedRecipe: '',   // 那个配方的 id
                speedUntil: 0,     // 那个配方跑完的 gameTime（过期就不再显示）
                speedMin: 0,       // 那个配方的最低温度
                blockedMin: 0,     // 最近一次因温度不足被降速的门槛温度
                blockedUntil: 0,   // 该提示的显示截止 gameTime
                warnLogged: 0,
                errLogged: 0
            }
            STATE[key] = st
        }
        return st
    }

    var tempRangeOf = function (recipeId) {
        return RECIPE_TEMP[recipeId] || DEFAULT_TEMP
    }

    // -------- 读原生热量端口 --------
    // MMCR 的原生热量是「输入向 / 输出向」两套端口，中间没有内部通道：
    //   * 温度需求（mekanism:temperature）只读输入向端口 → 热量输入仓 = 炉温（温度计）；
    //   * 热量输出（mekanism:heat）只往输出向端口里灌 → 热量输出仓 = 燃烧室；
    //   * 二者之间只有「紧挨着」时才会传导（Mekanism 的 simulateAdjacent），所以要并排放。
    // 返回 { inHeat, inTemp, inCap, outHeat, outTemp, outCap }，读不到的字段是 -1。
    var portsOf = function (machine) {
        var r = { inHeat: -1, inTemp: -1, inCap: -1, outHeat: -1, outTemp: -1, outCap: -1 }
        var view, list, hs
        try {
            view = machine.ioView()
            if (view == null) return r
            list = view.heatInputs()
            if (list != null && list.size() > 0) {
                hs = list.get(0)
                if (hs != null) {
                    r.inHeat = hs.heat()
                    r.inTemp = hs.temperature()
                    r.inCap = hs.heatCapacity()
                }
            }
            list = view.heatOutputs()
            if (list != null && list.size() > 0) {
                hs = list.get(0)
                if (hs != null) {
                    r.outHeat = hs.heat()
                    r.outTemp = hs.temperature()
                    r.outCap = hs.heatCapacity()
                }
            }
        } catch (err) {
            return r
        }
        return r
    }

    // 配方门槛看的炉温 = 热量输入仓的温度（没有输入仓时拿输出仓兜底，只为了界面上有个数）
    var gateTemp = function (p) {
        if (p.inTemp >= 0) return p.inTemp
        return p.outTemp
    }

    // 从机器的物品输入里找出燃料，返回 { burn: 燃烧值(tick), name: 显示名 }
    var fuelOf = function (machine) {
        var view, list, stack, burn
        var best = { burn: 0, name: '—' }
        try {
            view = machine.ioView()
            if (view == null) return best
            list = view.itemInputs()
            if (list == null) return best
        } catch (err) {
            console.error('[mmcr_kubejs] 读取输入总线失败：' + err)
            return best
        }
        for (var idx = 0; idx < list.size(); idx++) {
            stack = null
            try {
                stack = list.get(idx).resource()
            } catch (err2) {
                continue
            }
            if (stack == null || stack.isEmpty()) continue
            burn = 0
            try {
                burn = stack.getBurnTime(null)
            } catch (err3) {
                burn = 0
            }
            if (burn > 0) {
                best.burn = burn
                try {
                    best.name = stack.getHoverName().getString()
                } catch (err4) {
                    best.name = '燃料'
                }
                return best
            }
        }
        return best
    }

    // ==================== 控制器界面：写/删行 ====================
    var put = function (st, ctx, lineId, str) {
        try {
            ctx.screenText().append(SCOPE.CONTROLLER, lineId, Text.string(str))
        } catch (err) {
            if (st != null && !st.errLogged) {
                st.errLogged = 1
                console.error('[mmcr_kubejs] 控制器界面写入失败：' + err)
            }
        }
    }

    var drop = function (ctx, lineId) {
        try {
            ctx.screenText().remove(SCOPE.CONTROLLER, lineId)
        } catch (err) {
            // 行本来就不存在时会抛，忽略即可
        }
    }

    // ==================== 小工具 ====================
    var fmtTemp = function (k) {
        if (k < 0) return '—'
        return Math.round(k) + ' K（' + Math.round(k - KELVIN) + ' °C）'
    }

    var fmtHeat = function (j) {
        if (j < 0) return '—'
        if (j >= 10000) return (Math.round(j / 100) / 10) + ' kJ'
        return Math.round(j) + ' J'
    }

    var shortId = function (id) {
        var i = id.indexOf(':')
        return i < 0 ? id : id.substring(i + 1)
    }

    // ==================== 每 tick：读炉温 + 刷新界面 ====================
    var onServerTick = function (ctx) {
        var key, st, now, firing, p, temp, remain, secs

        try {
            key = keyOf(ctx)
        } catch (err) {
            return
        }
        st = stateOf(key)
        now = ctx.gameTime()

        // 输入仓 = 炉温（配方门槛看的数）；输出仓 = 燃料烧出来的热
        p = portsOf(ctx)
        temp = gateTemp(p)
        if (temp >= 0) {
            if (st.lastTemp >= 0) {
                if (temp > st.lastTemp + 0.01) st.state = '升温中'
                else if (temp < st.lastTemp - 0.01) st.state = '降温中'
                else st.state = '恒温'
            } else {
                st.state = '恒温'
            }
            st.lastTemp = temp
        }

        // 「在烧燃料」判据：只有燃料配方的 recipeTick 会刷 lastRun
        firing = (now - st.lastRun) <= 2

        // ---------------- 控制器界面 ----------------
        // 热量分输入向 / 输出向两套端口，界面上把两边都写出来，缺哪边一眼就能看见
        if (p.inTemp < 0 && p.outTemp < 0) {
            put(st, ctx, TEMP_LINE, '炉温 —（结构里没有热量端口）')
            put(st, ctx, HEAT_LINE, '需要热量输入仓 + 热量输出仓（heat_input_hatch / heat_output_hatch）')
        } else if (p.inTemp < 0) {
            put(st, ctx, TEMP_LINE, '炉温 —（缺热量输入仓：配方读不到温度）')
            put(st, ctx, HEAT_LINE, '热源 ' + fmtTemp(p.outTemp) + ' · ' + fmtHeat(p.outHeat))
        } else {
            put(st, ctx, TEMP_LINE, '炉温 ' + fmtTemp(p.inTemp))
            if (p.outTemp < 0) {
                put(st, ctx, HEAT_LINE, '热源 —（缺热量输出仓：燃料烧出的热无处可去）')
            } else {
                put(st, ctx, HEAT_LINE, '热源 ' + fmtTemp(p.outTemp) + ' · ' + fmtHeat(p.outHeat))
            }
        }

        put(st, ctx, STATE_LINE, '状态 ' + (temp < 0 ? '—' : st.state))

        if (st.fuelTotal > 0 && firing) {
            remain = Math.max(0, st.fuelTotal - st.fuelNow)
            secs = Math.round(remain / 2) / 10          // tick → 秒，保留一位小数
            put(st, ctx, FUEL_LINE, '燃料 ' + st.fuelName + ' · 剩余 ' + secs + ' 秒')
        } else if (firing) {
            put(st, ctx, FUEL_LINE, '燃料 ' + st.fuelName + ' · 燃烧中')
        } else {
            put(st, ctx, FUEL_LINE, '燃料 无（放入有燃烧值的物品）')
        }

        if (now <= st.speedUntil) {
            put(st, ctx, SPEED_LINE, '冶炼速度 ' + st.speedPct + '% · ' + shortId(st.speedRecipe))
        } else {
            drop(ctx, SPEED_LINE)
        }

        if (now <= st.blockedUntil) {
            put(st, ctx, HINT_LINE, '温度不足，已降速：需要 ' + st.blockedMin +
                ' K（当前 ' + Math.round(temp) + ' K）')
        } else if (p.outTemp < 0) {
            put(st, ctx, HINT_LINE, '缺 mmcr:heat_output_hatch：燃料配方会被判「热量输出受阻」，炉子不会热')
        } else if (p.inTemp < 0) {
            put(st, ctx, HINT_LINE, '缺 mmcr:heat_input_hatch：温度需求读不到温度，冶炼配方不会启动')
        } else if (p.outTemp >= AMBIENT_K + 40 && p.inTemp <= AMBIENT_K + 10) {
            put(st, ctx, HINT_LINE, '热量输出仓已 ' + Math.round(p.outTemp) + ' K，热量输入仓还在常温：' +
                '两个仓没挨在一起（热只在相邻端口之间传导）')
        } else {
            drop(ctx, HINT_LINE)
        }

        // Jade 顶部提示（有就写，没有就算了）
        if (temp >= 0) {
            try {
                ctx.jadeText().append(TEMP_LINE, Text.string('炉温 ' + Math.round(temp) + ' K'))
            } catch (err3) {
                // 忽略
            }
        }
    }

    // ==================== 配方开始前：决定时长 ====================
    var onBeforeStart = function (ctx) {
        var machine, key, st, recipeId, range, p, temp, fuel, ticks
        var span, ratio, speed, dur

        machine = ctx.machineContext()
        key = keyOf(machine)
        st = stateOf(key)
        recipeId = ctx.recipeId().toString()

        // ---- 燃料配方：时长完全由燃烧值决定，不受炉温影响 ----
        if (recipeId === FUEL_RECIPE) {
            fuel = fuelOf(machine)
            if (fuel.burn <= 0 && !st.warnLogged) {
                st.warnLogged = 1
                console.error('[mmcr_kubejs] 燃料配方读不到燃烧值，本次按 ' + DEFAULT_FUEL_TICKS + ' tick 处理')
            }
            ticks = fuel.burn > 0
                ? Math.min(Math.max(1, Math.floor(fuel.burn / BURN_DIVISOR)), MAX_FUEL_TICKS)
                : DEFAULT_FUEL_TICKS
            st.fuelName = fuel.name
            st.fuelTotal = ticks
            st.fuelNow = 0
            ctx.setDuration(ticks)
            return
        }

        // ---- 冶炼配方：炉温越高越快；温度门槛由配方里的 mekanism:temperature 把关 ----
        range = tempRangeOf(recipeId)
        p = portsOf(machine)
        temp = gateTemp(p)
        if (temp < 0) temp = st.lastTemp
        if (temp < 0) temp = AMBIENT_K

        if (temp < range.min) {
            // 正常情况原生温度需求已经把配方挡住了，能走到这里说明没挡住；
            // 这里只降速，绝不 cancel()——cancel 会让炉子永远不启动、也永远不升温。
            st.blockedMin = range.min
            st.blockedUntil = machine.gameTime() + 40
            speed = WEAK_SPEED
        } else {
            span = range.ideal - range.min
            ratio = span <= 0 ? 1 : Math.min(Math.max((temp - range.min) / span, 0), 1)
            speed = 1 + (MAX_SPEEDUP - 1) * ratio
        }
        ctx.setDuration(Math.max(1, Math.round(ctx.duration() / speed)))
        dur = ctx.duration()

        st.speedPct = Math.round(speed * 100)
        st.speedRecipe = recipeId
        st.speedMin = range.min
        st.speedUntil = machine.gameTime() + dur
    }

    // ==================== 配方每 tick：标记「正在烧燃料」 ====================
    var onRecipeTick = function (ctx) {
        var machine, key, st

        // 只有燃料配方算「在烧」；冶炼配方运行时炉温靠端口自己散热
        if (ctx.recipe().id().toString() !== FUEL_RECIPE) return
        machine = ctx.machineContext()
        key = keyOf(machine)
        st = stateOf(key)
        st.lastRun = machine.gameTime()
        st.fuelTotal = ctx.totalTick()
        st.fuelNow = ctx.currentTick()
    }

    // ==================== 机器定义 ====================
    var builder = event
        .createMachine('mmcr_kubejs:kubejs_blast_furnace')            // 全局机器 ID
        .recipePool('mmcr_kubejs:kubejs_blast_furnace')               // 绑定配方池
        .displayNameKey('machine.mmcr_kubejs.kubejs_blast_furnace')   // 显示名本地化键

    builder
        .allowMultithreading()         // 允许工厂按多线程调度多个配方实例
        .allowParallelism()            // 允许配方并行倍率（配方还需 parallelized: true）
        .maxParallelAmount(2147483647) // 并行上限，缺省为 1

    // 两个挂载点
    builder.preServerTick(onServerTick)          // 每 tick 读炉温 + 刷新控制器界面
    builder.recipeBehavior(b => {
        b.beforeStart(onBeforeStart)             // 燃料时长 / 高温加速
        b.recipeTick(onRecipeTick)               // 记录「正在烧燃料」
    })

    // 提交注册（register() 返回 builder 自身）
    builder.register()
})
