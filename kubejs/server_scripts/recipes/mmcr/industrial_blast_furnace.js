ServerEvents.recipes(event => {
    const POOL = 'mmcr_kubejs:industrial_blast_furnace'

    /** 普通输入物品 */
    const item = (id, count) => ({
        type: 'minecraft:item', io: 'input', item: { item: id }, count: count || 1
    })
    /** 输出物品 */
    const out = (id, count) => ({
        type: 'minecraft:item', io: 'output', stack: { id: id, count: count || 1 }
    })
    /**
     * 给任意一条需求加「最低线圈等级」标签。
     * 机器脚本（startup 里的 industrial_blast_furnace.js）用它在开跑前拦下来，
     * 客户端脚本（client_scripts 里的 mmcr_jei_coil_info.js）用它在 JEI 配方页显示提示。
     * 没有能量需求的配方可以这样用：coil(item('...'), 4)
     */
    const coil = (req, minCoil) => {
        req.tags = ['min_coil_tier:' + minCoil]
        return req
    }
    /** 每 tick 消耗的 FE；给 minCoil 时就带上最低线圈等级 */
    const power = (fe, minCoil) => {
        const req = { type: 'neoforge:energy', io: 'input', fe_per_tick: fe }
        return minCoil != null ? coil(req, minCoil) : req
    }

    // 铝粉 → 铝锭
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: POOL,
        tick_time: 1000,        // 20 tick = 1 秒
        parallelized: true,    // 允许批量；实际并行倍率由结构里的并行控制器决定
        requirements: [
            power(256, 2),                                   // 256 FE/t，需要二阶及以上线圈
            item('alltheores:aluminum_dust', 1),             // 铝粉
            out('alltheores:aluminum_ingot', 1)              // 铝锭
        ]
    }).id('mmcr_kubejs:industrial_blast_furnace_aluminum')
    // 铁粉 → 铁锭
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: POOL,
        tick_time: 100,        // 20 tick = 1 秒
        parallelized: true,    // 允许批量；实际并行倍率由结构里的并行控制器决定
        requirements: [
            power(256, 1),                                   // 256 FE/t，需要二阶及以上线圈
            item("alltheores:iron_dust", 1),             // 铁粉
            out("minecraft:iron_ingot", 1)              // 铁锭
        ]
    }).id('mmcr_kubejs:industrial_blast_furnace_iron')
    // 金粉 → 金锭
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: POOL,
        tick_time: 100,        // 20 tick = 1 秒
        parallelized: true,    // 允许批量；实际并行倍率由结构里的并行控制器决定
        requirements: [
            power(256, 1),                                   // 256 FE/t，需要二阶及以上线圈
            item("alltheores:gold_dust", 1),             // 金粉
            out("minecraft:gold_ingot", 1)              // 金锭
        ]
    }).id('mmcr_kubejs:industrial_blast_furnace_gold')
    // 星辉矿粉 → 星辉金属锭
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: POOL,
        tick_time: 100,        // 20 tick = 1 秒
        parallelized: true,    // 允许批量；实际并行倍率由结构里的并行控制器决定
        requirements: [
            power(512, 3),                                   // 256 FE/t，需要二阶及以上线圈
            item("neovitae:starmetal_dust", 1),             // 金粉
            out("astralsorcery:starmetal_ingot", 1)              // 金锭
        ]
    }).id('mmcr_kubejs:industrial_blast_furnace_starmetal')
})
