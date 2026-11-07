// Ender IO 合金炉配方 —— 只保留科技锭这几条，其余的自己往下加。
//
// 字段：inputs[] 每项 { item 或 tag, count }，output{ id, count }，energy 是总 FE，
// experience 是经验。id 用 kubejs: 前缀，避免和 Ender IO 自带的配方重名。
//
// 砖制合金炉（MMCR 机器）的配方另在：kubejs/server_scripts/recipes/mmcr/brick_alloy_furnace.js

ServerEvents.recipes(event => {
    // 科技锭 1：琥珀金 + 康铜 + 赛特斯石英粉
    event.custom({
        type: 'enderio:alloy_smelting',
        energy: 3200,
        experience: 0.3,
        inputs: [
            { item: 'alltheores:electrum_ingot', count: 1 },
            { item: 'alltheores:constantan_ingot', count: 1 },
            { item: 'ae2:certus_quartz_dust', count: 2 }
        ],
        output: { id: 'chaosworld_core:ingot_tech_1', count: 2 }
    }).id('kubejs:alloy_smelting/tech_1_ingot')

    // 科技锭 2：红石合金锭 + 粗钢锭 + 焦炭粉
    event.custom({
        type: 'enderio:alloy_smelting',
        energy: 3200,
        experience: 0.3,
        inputs: [
            { item: 'enderio:redstone_alloy_ingot', count: 1 },
            { item: 'enderio_evolution:crude_steel_ingot', count: 1 },
            { item: 'immersiveengineering:dust_coke', count: 1 }
        ],
        output: { id: 'chaosworld_core:ingot_tech_2', count: 2 }
    }).id('kubejs:alloy_smelting/tech_2_ingot')

    // 科技锭
    event.custom({
        type: 'enderio:alloy_smelting',
        energy: 3200,
        experience: 0.3,
        inputs: [
            { item: 'minecraft:netherite_scrap', count: 2 },
            { item: 'enderio:dark_steel_ingot', count: 3 },
            { item: 'pneumaticcraft:ingot_iron_compressed', count: 3 }
        ],
        output: { id: 'chaosworld_core:ingot_tech_3', count: 4 }
    }).id('kubejs:alloy_smelting/tech_3_ingot')

    // ---- 模块化合金 ----
    event.custom({
        type: 'enderio:alloy_smelting',
        energy: 3200,
        experience: 0.3,
        inputs: [
            { item: 'alltheores:bronze_ingot', count: 2 },
            { item: 'minecraft:iron_ingot', count: 1 },
            { item: 'extendedcrafting:redstone_ingot', count: 2 }
        ],
        output: { id: 'mmcr:modularium', count: 4 }
    }).id('kubejs:alloy_smelting/modularium')
})
