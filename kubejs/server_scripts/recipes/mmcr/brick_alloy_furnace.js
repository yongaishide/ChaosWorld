// ============================================================
// 砖制合金炉 —— 配方（服务端，/reload 生效）
// 机器：mmcr_kubejs:brick_alloy_furnace   配方池：mmcr_kubejs:brick_alloy_furnace
//
// 来源：kubejs/server_scripts/recipes/alloy_smelter/copper_iron_diamond.js
//   （alloy_smelter 模组 Brick Forge 的 9 条合金配方，每条按 requiredTier 1/2/3
//    各有一份，区别只有 smeltingTime 140/100/60 和 tier 门槛）
//
// 为什么搬过来：alloy_smelter 的配方里**根本没有温度字段**。
//   它的 recipe codec 只有 ingredients / result / smeltingTime / fuelPerTick / requiredTier
//   （javap sk.alloy_smelter.recipe.SmeltingRecipe$Serializer 证实；整个 mod 的 class 里
//    连一个 temperature 字样都没有）。所以“1370 K”只能由 MMCR 的热量需求来承担。
//
// 换算：
//   · 温度  每条 1370 K（mekanism:temperature / io:input / value:1370）
//           → 结构里的 A 位热量输入仓必须装上，否则配方不启动。
//   · 时间  统一 200 tick（源文件 tier 1/2/3 分别是 140/100/60，只在时间和 tier 上不同）。
//           MMCR 里同一组输入只能有一条配方（同输入多配方会互相抢，谁先命中看优先级），
//           所以不搬分档；要分档可以用端口等级门槛去区分。
//   · 燃料  fuelPerTick 是 alloy_smelter 自己烧燃料的概念，MMCR 没有对应项，丢弃。
//   · tier  requiredTier 在 MMCR 里没有等价物（结构/端口不分等级），丢弃。
//
// ============================================================

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
