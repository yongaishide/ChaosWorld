// ============================================================
// 小型组装机 —— 配方（服务端，/reload 生效）
// 机器：mmcr_kubejs:small_assembler   配方池：mmcr_kubejs:small_assembler
//
// 结构里只有：能量输入仓（微型）+ 物品输入总线（小型）+ 物品输出总线（Ludicrous）
// 所以配方形态是「物品进 + 电 → 物品出」，没有流体、没有温度门槛。
// ============================================================

ServerEvents.recipes(event => {
    const POOL = 'mmcr_kubejs:small_assembler'

    /** 普通输入物品 */
    const item = (id, count) => ({
        type: 'minecraft:item', io: 'input', item: { item: id }, count: count || 1
    })
    /** 输出物品 */
    const out = (id, count) => ({
        type: 'minecraft:item', io: 'output', stack: { id: id, count: count || 1 }
    })
    /** 每 tick 消耗的 FE */
    const power = (fe) => ({
        type: 'neoforge:energy', io: 'input', fe_per_tick: fe
    })

    // 能量平板：32 FE/t，200 tick（10 秒）= 一共 640 FE
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: POOL,
        tick_time: 200,
        parallelized: false,
        requirements: [
            power(32),
            item('extendedcrafting:redstone_ingot', 4),
            item('mekanism:basic_universal_cable', 6),
            item('immersiveengineering:coil_lv', 2),
            out('mekanism:energy_tablet', 2)
        ]
    }).id('mmcr_kubejs:small_assembler_energy_tablet')
    // 泰拉凝聚板
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: POOL,
        tick_time: 400,   //400 tick
        parallelized: false,
        requirements: [
            power(32),    //32 FE/t
            item("actuallyadditions:palis_crystal_block", 3),
            item("botania:mana_quartz_block", 4),
            item("botania:rune_of_water", 1),
            item("botania:rune_of_fire", 1),
            item("botania:rune_of_earth", 1),
            item("botania:rune_of_air", 1),
            item("botania:rune_of_mana", 1),
            out("botania:terrestrial_agglomeration_plate", 1)
        ]
    }).id('mmcr_kubejs:terrestrial_agglomeration_plate_1')
    // 泰拉凝聚板
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: POOL,
        tick_time: 400,   //400 tick
        parallelized: false,
        requirements: [
            power(32),    //32 FE/t
            item("actuallyadditions:palis_crystal_block", 3),
            item("botania:mana_quartz_block", 4),
            item("chaosworld_core:runes_1", 1),
            item("botania:rune_of_mana", 1),
            out("botania:terrestrial_agglomeration_plate", 1)
        ]
    }).id('mmcr_kubejs:terrestrial_agglomeration_plate_2')
})
