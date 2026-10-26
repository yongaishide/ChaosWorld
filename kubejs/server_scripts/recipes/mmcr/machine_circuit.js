// ============================================================
// 超精电路蚀刻机 —— 配方（服务端，/reload 生效）
// 机器：mmcr_kubejs:machine_circuit   配方池：mmcr_kubejs:machine_circuit
//
// 移植说明（相对 1.12.2 的 scripts/modularmachinery/machines/modular_main.zs）：
//   · circuit1/2/3 是「掩膜」，原脚本 .setChance(0) 表示不消耗 -> consume_chance: 0
//   · 原来的 immersiveengineering:material:27 = immersiveengineering:circuit_board
//   · plustic:osmiridiumingot 换成 mekanism:ingot_osmium（锇合金，同为锇系贵金属）
//   · 终极/大师配方里的 environmentaltech:pladium_crystal 在 1.21.1 无对应，已取消
//   · 终极配方里的液体液钠（liquid:nak）无对应流体，已取消；只保留固体输入
//   · 其它 ContentTweaker 物品由 startup_scripts/mmcr/machine_circuit.js 重建为 kubejs:*
// ============================================================

ServerEvents.recipes(event => {
    const POOL = 'mmcr_kubejs:machine_circuit'

    // ---- 需求构造小工具 ----
    /** 普通输入物品 */
    const item = (id, count) => ({
        type: 'minecraft:item', io: 'input', item: { item: id }, count: count || 1
    })
    /** 掩膜：不消耗 */
    const mask = (id) => ({
        type: 'minecraft:item', io: 'input', item: { item: id }, count: 1, consume_chance: 0
    })
    /** 输出物品 */
    const out = (id, count) => ({
        type: 'minecraft:item', io: 'output', stack: { id: id, count: count || 1 }
    })
    /** 输入流体（mB） */
    const fluid = (id, amount) => ({
        type: 'minecraft:fluid', io: 'input', fluid: { fluid: id }, amount: amount
    })
    /** 每秒消耗的 FE（不是每 tick） */
    const power = (fe) => ({
        type: 'neoforge:energy', io: 'input', fe_per_tick: fe
    })

    const recipe = (id, ticks, fe, requirements) => event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: POOL,
        tick_time: ticks,
        parallelized: true,
        requirements: [power(fe)].concat(requirements)
    }).id('mmcr_kubejs:etch_' + id)

    // ---------------- 基础集成电路 ----------------
    // 16384 FE/t | 掩膜 circuit1 | 电路板 + 压缩树脂板 -> 基础集成电路
    recipe('basic_circuit_31', 80, 16384, [
        mask('kubejs:circuit1'),
        item('immersiveengineering:circuit_board', 1),
        item('kubejs:compressedresinplate', 4),
        out('kubejs:basiccircuit', 4)
    ])
    recipe('basic_circuit_32', 40, 16384, [
        mask('kubejs:circuit2'),
        item('immersiveengineering:circuit_board', 1),
        item('kubejs:compressedresinplate', 4),
        out('kubejs:basiccircuit', 4)
    ])
    recipe('basic_circuit_33', 20, 16384, [
        mask('kubejs:circuit3'),
        item('immersiveengineering:circuit_board', 1),
        item('kubejs:compressedresinplate', 4),
        out('kubejs:basiccircuit', 4)
    ])

    // ---------------- 进阶集成电路 ----------------
    // 32768 FE/t | 掩膜 circuit1/2/3 | 加高阶电路板 + 锇合金
    recipe('advanced_circuit_31', 80, 32768, [
        mask('kubejs:circuit1'),
        item('immersiveengineering:circuit_board', 1),
        item('kubejs:advancedcircuitplate', 4),
        item('mekanism:ingot_osmium', 8),
        out('kubejs:advancedcircuit', 4)
    ])
    recipe('advanced_circuit_32', 40, 32768, [
        mask('kubejs:circuit2'),
        item('immersiveengineering:circuit_board', 1),
        item('kubejs:advancedcircuitplate', 4),
        item('mekanism:ingot_osmium', 8),
        out('kubejs:advancedcircuit', 4)
    ])
    recipe('advanced_circuit_33', 20, 32768, [
        mask('kubejs:circuit3'),
        item('immersiveengineering:circuit_board', 1),
        item('kubejs:advancedcircuitplate', 4),
        item('mekanism:ingot_osmium', 8),
        out('kubejs:advancedcircuit', 4)
    ])

    // ---------------- 高级控制电路 ----------------
    // 65536 FE/t | 掩膜 circuit2/3 | 基础控制电路 + 富集合金 -> 高级控制电路
    recipe('advanced_control_11', 80, 65536, [
        mask('kubejs:circuit2'),
        item('mekanism:basic_control_circuit', 4),
        item('mekanism:alloy_infused', 8),
        out('mekanism:advanced_control_circuit', 4)
    ])
    recipe('advanced_control_12', 40, 65536, [
        mask('kubejs:circuit3'),
        item('mekanism:basic_control_circuit', 4),
        item('mekanism:alloy_infused', 8),
        out('mekanism:advanced_control_circuit', 4)
    ])

    // ---------------- 精英控制电路 ----------------
    // 65536 FE/t | 掩膜 circuit2/3 | 高级控制电路 + 强化合金 -> 精英控制电路
    recipe('elite_control_11', 80, 65536, [
        mask('kubejs:circuit2'),
        item('mekanism:advanced_control_circuit', 2),
        item('mekanism:alloy_reinforced', 8),
        out('mekanism:elite_control_circuit', 4)
    ])
    recipe('elite_control_12', 40, 65536, [
        mask('kubejs:circuit3'),
        item('mekanism:advanced_control_circuit', 2),
        item('mekanism:alloy_reinforced', 8),
        out('mekanism:elite_control_circuit', 4)
    ])

    // ---------------- 精英集成电路 ----------------
    // 65536 FE/t | 掩膜 circuit2/3 | 史诗电路板 + 硼酸 -> 史诗集成电路
    recipe('epic_circuit_31', 80, 65536, [
        mask('kubejs:circuit2'),
        item('kubejs:epiccircuitplate', 2),
        fluid('nuclearcraftneohaul:boric_acid', 1000),
        out('kubejs:epiccircuit', 4)
    ])
    recipe('epic_circuit_32', 40, 65536, [
        mask('kubejs:circuit3'),
        item('kubejs:epiccircuitplate', 2),
        fluid('nuclearcraftneohaul:boric_acid', 1000),
        out('kubejs:epiccircuit', 4)
    ])

    // ---------------- 终极控制电路 ----------------
    // 131072 FE/t | 掩膜 circuit3 | 原子合金 + 精英控制电路
    // （原 pladium_crystal 与液钠无对应，已取消）
    recipe('ultimate_control_2', 40, 131072, [
        mask('kubejs:circuit3'),
        item('mekanism:alloy_atomic', 8),
        item('mekanism:elite_control_circuit', 4),
        out('mekanism:ultimate_control_circuit', 4)
    ])

    // ---------------- 大师集成电路 ----------------
    // 131072 FE/t | 掩膜 circuit3 | 大师电路板 + 氢氟酸 -> 大师集成电路
    recipe('master_circuit_2', 40, 131072, [
        mask('kubejs:circuit3'),
        item('kubejs:mastercircuitplate', 4),
        fluid('nuclearcraftneohaul:hydrofluoric_acid', 2000),
        out('kubejs:mastercircuit', 4)
    ])

    // ---------------- 极限集成电路 ----------------
    // 131072 FE/t | 掩膜 tech3 | 大师集成电路 + 魔法锭 + 极限电路板 + 氢氟酸
    recipe('extreme_circuit_1', 160, 131072, [
        mask('kubejs:tech3'),
        item('kubejs:mastercircuit', 2),
        item('kubejs:magicalingot', 1),
        item('kubejs:extremecircuitplate', 2),
        fluid('nuclearcraftneohaul:hydrofluoric_acid', 2000),
        out('kubejs:extremecircuit', 4)
    ])
})
