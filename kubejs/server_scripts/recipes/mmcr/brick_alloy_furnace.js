ServerEvents.recipes(event => {
    const POOL = 'mmcr_kubejs:brick_alloy_furnace'
    const HEAT = 1370

    /** 输入物品 n 个 */
    const item = (id, n) => ({
        type: 'minecraft:item', io: 'input', item: { item: id }, count: n
    })
    /** 输出物品 n 个 */
    const out = (id, n) => ({
        type: 'minecraft:item', io: 'output', stack: { id: id, count: n }
    })
    /** 温度门槛 */
    const heat = value => ({
        type: 'mekanism:temperature', io: 'input', value: value
    })

    const recipe = (id, ticks, requirements) => event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: POOL,
        tick_time: ticks,
        parallelized: false,
        requirements: requirements.concat([heat(HEAT)])
    }).id('mmcr_kubejs:brick_alloy_' + id)

    // ---- 红石合金锭 ----
    recipe('redstone_alloy', 200, [
        item('extendedcrafting:redstone_ingot', 1),
        item('enderio_evolution:construction_alloy_ingot', 1),
        item('ae2:silicon', 2),
        out('enderio:redstone_alloy_ingot', 2)
    ])

    // ---- 一阶科技锭 ----
    recipe('tech_1', 200, [
        item('alltheores:electrum_ingot', 1),
        item('alltheores:constantan_ingot', 1),
        item('ae2:certus_quartz_dust', 2),
        out('chaosworld_core:ingot_tech_1', 2)
    ])

    // ---- 二阶科技锭 ----
    recipe('tech_2', 200, [
        item('enderio:redstone_alloy_ingot', 1),
        item('enderio_evolution:crude_steel_ingot', 1),
        item('immersiveengineering:dust_coke', 2),
        out('chaosworld_core:ingot_tech_2', 2)
    ])

    // ---- 模块化合金 ----
    recipe('modularium', 200, [
        item('alltheores:bronze_ingot', 2),
        item('minecraft:iron_ingot', 1),
        item('extendedcrafting:redstone_ingot', 2),
        out('mmcr:modularium', 4)
    ])
    // ---- 黄铜锭 ----
    recipe('copper_ingot', 200, [
        item("minecraft:copper_ingot", 1),
        item("alltheores:zinc_ingot", 1),
        out("alltheores:brass_ingot", 2)
    ])
    // ---- 导电合金锭 ----
    recipe('conductive_alloy', 200, [
        item("minecraft:copper_ingot", 1),
        item("minecraft:iron_ingot", 1),
        out("enderio:conductive_alloy_ingot", 2)
    ])
    // ---- 充能合金锭 ----
    recipe('energetic_alloy', 200, [
        item("minecraft:redstone", 1),
        item("enderio:conductive_alloy_ingot", 1),
        item("minecraft:gold_ingot", 1),
        out("enderio:energetic_alloy_ingot", 2)
    ])
})
