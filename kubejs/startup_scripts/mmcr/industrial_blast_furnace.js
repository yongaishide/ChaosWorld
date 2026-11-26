MMCREvents.startup(event => {
    var api = event.getAPI()
    var SCOPE = api.screenScope()
    var HINT = api.id('mmcr_kubejs:coil_hint')
    var COIL_LINE = api.id('mmcr_kubejs:coil_line')
    var MIN_COIL_TAG = 'min_coil_tier:'
    var CN_NUM = ['一', '二', '三', '四', '五', '六', '七', '八', '九']

    // 当前提示里写着「需要几阶」，换成足够等级的线圈后自动擦掉
    var hintTier = 0

    // 控制器界面上「当前线圈等级」那一行，记录每台机器上次显示的是几阶（0 = 没显示）
    var coilLineState = {}

    // 线圈等级修饰符：N 级 = 时间 ×0.5^(N-1)、耗能 ×4^(N-1)
    for (var tier = 2; tier <= 9; tier++) {
        event.registerModifier(
            'mmcr_kubejs:coil_tier_' + tier,
            api.modifierDefinition([
                api.modifier('duration', 'input', Math.pow(0.5, tier - 1), 'multiply', false),
                api.modifier('energy', 'input', Math.pow(4, tier - 1), 'multiply', false)
            ])
        )
    }

    // 结构里最高的一圈线圈等级；结构没拼好时是 0
    var coilTier = function (machine) {
        for (var t = 9; t >= 1; t--) {
            if (machine.countStructureBlocks('useless_mod:useless_coil_tier_' + t) > 0) return t
        }
        return 0
    }

    // 控制器界面常驻一行「当前线圈等级」；结构没拼好或等级没变就不重复写
    var refreshCoilLine = function (machine) {
        var pos = machine.controllerPos()
        var key = machine.machineId().toString() + '@' + pos.getX() + ',' + pos.getY() + ',' + pos.getZ()
        var tier = coilTier(machine)
        if (coilLineState[key] === tier) return
        coilLineState[key] = tier

        try {
            machine.screenText().remove(SCOPE.CONTROLLER, COIL_LINE)
        } catch (err) { }

        if (tier >= 1) {
            try {
                machine.screenText().append(SCOPE.CONTROLLER, COIL_LINE,
                    Text.string('当前线圈等级：' + CN_NUM[tier - 1] + '阶线圈'))
            } catch (err) { }
        }
    }

    // 门槛写在配方里：requirements 任意一条的 tags 加 'min_coil_tier:N' 即可
    var minCoilTier = function (ctx) {
        var reqs = ctx.requirements()
        for (var i = 0; i < reqs.size(); i++) {
            var tags = reqs.get(i).tags()
            for (var j = 0; j < tags.size(); j++) {
                var tag = String(tags.get(j))
                if (tag.indexOf(MIN_COIL_TAG) === 0) {
                    var found = parseInt(tag.substring(MIN_COIL_TAG.length), 10)
                    if (found > 1) return found
                }
            }
        }
        return 1
    }

    var clearHint = function (machine) {
        hintTier = 0
        try {
            machine.screenText().remove(SCOPE.CONTROLLER, HINT)
        } catch (err) { }
    }

    var showHint = function (machine, required) {
        hintTier = required
        var idx = Math.max(1, Math.min(9, required)) - 1
        try {
            machine.screenText().append(SCOPE.CONTROLLER, HINT,
                Text.string('需要' + CN_NUM[idx] + '阶及以上线圈'))
        } catch (err) { }
    }

    // 每个配方开跑前，按配方自己声明的门槛检查线圈等级
    var onBeforeStart = function (ctx) {
        var required = minCoilTier(ctx)
        var machine = ctx.machineContext()

        if (coilTier(machine) >= required) {
            clearHint(machine)
            return
        }
        showHint(machine, required)
        ctx.cancel()
    }

    // 闲置时把过期的提示擦掉（换好线圈后不用等下一次尝试）
    var onServerTick = function (ctx) {
        refreshCoilLine(ctx)
        if (hintTier > 0 && coilTier(ctx) >= hintTier) clearHint(ctx)
    }

    var builder = event
        .createMachine('mmcr_kubejs:industrial_blast_furnace')
        .recipePool('mmcr_kubejs:industrial_blast_furnace')
        .displayNameKey('machine.mmcr_kubejs.industrial_blast_furnace')

    builder
        .allowMultithreading()
        .allowParallelism()
        .maxParallelAmount(2147483647)
        .allowModifiers()

    builder.preServerTick(onServerTick)
    builder.recipeBehavior(b => {
        b.beforeStart(onBeforeStart)
    })

    builder.register()
})
