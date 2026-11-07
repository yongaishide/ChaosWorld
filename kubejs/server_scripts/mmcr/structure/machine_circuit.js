// ============================================================
// 超精电路蚀刻机 —— MMCR 多方块结构（服务端，/reload 热重载）
// 结构直接来自游戏内导出：mmcr_structure_export/2026-11-04-10-40-02-多方块导出-1.js
// 尺寸：x 13 格、行 7 格、层 11 层（每个 .pattern() 是一层，层里每行沿 x，行沿 y）
//
// 端口位（导出里的 N/O/P/Q 四种仓）统一换成 R：
//   = 任意物品仓 / 任意流体仓 / 任意能量仓 / 任意化学品仓（输入、输出都算）/ 任意并行控制器，
//     或者用 mmcr:basic_casing 封死
// 配方按「能力」判定仓，所以每个位置放哪种仓由你决定；但配方本身要的
// 物品进、物品出、能量进、流体进 四种能力，机器上至少各要有一个对应仓。
// 并行控制器（普通/进阶/专业）放在 R 位上就能开并行，机器上限 16（启动脚本里的 maxParallelAmount）。
//
// 图例：
//   C = 控制器     R = 端口位（见上）     X = mmcr:basic_casing 基础机器框架
//   A = mekanism:structural_glass        B = mekanismgenerators:electromagnetic_coil
//   D = pneumaticcraft:reinforced_stone  E = enderio:energetic_alloy_block
//   F = powah:energized_steel_block      G = alltheores:silver_block
//   H/I/J = extendedae:assembler_matrix_frame（block / column_y / column_x）
//   K = mekanismsun:tungstensteel_casing L = astralsorcery:marble_bricks
//   M = pneumaticcraft:compressed_brick_slab
// ============================================================

MMCREvents.server(event => {
    const api = event.getAPI()

    // 端口位：物品仓、流体仓、能量仓、化学品仓（输入输出均算）、工厂控制器、8 档并行控制器，或者基础机器框架封死
    const PORT = api.anyOf(
        api.anyOfItemPorts(),
        api.anyOfFluidPorts(),
        api.anyOfEnergyPorts(),
        api.anyOfChemicalPorts(),
        api.anyOfRadioactiveChemicalPorts(),
        api.factoryController(),
        api.block('mmcr:parallel_controller_normal'),
        api.block('mmcr:parallel_controller_plus'),
        api.block('mmcr:parallel_controller_pro'),
        api.block('mmcr:parallel_controller_reinforced'),
        api.block('mmcr:parallel_controller_elite'),
        api.block('mmcr:parallel_controller_ultimate'),
        api.block('mmcr:parallel_controller_fantasy'),
        api.block('mmcr:parallel_controller_max'),
        api.block('mmcr:basic_casing')
    )

    event
        .createStructure('mmcr_kubejs:machine_circuit')
        .pattern('XXXXXXXXXXXXX', '             ', '             ', '             ', '             ', '             ', '             ') // z=0
        .pattern('XXXXXXXXXXXXX', ' XXXXXXXXXXX ', ' AAAAAAAAAAA ', '             ', '             ', '             ', '             ') // z=1
        .pattern('BXXXXXXXXXXXB', ' D         D ', ' AAAAAAAAAAA ', '  EEEEEEEEE  ', '             ', '             ', '             ') // z=2
        .pattern('BXXXXXXXXXXXB', ' D         D ', ' A         A ', '  E   F   E  ', '   AAAFAAA   ', '             ', '             ') // z=3
        .pattern('BXXXXXXXXXXXB', ' D         D ', ' G         G ', ' GE   F   EG ', ' GGGGGGGGGGG ', '      F      ', '             ') // z=4
        .pattern('BXXXXXXXXXXXB', ' D         D ', ' H         H ', ' IE   F   EI ', ' I         I ', ' HJJJJJJJJJH ', '      F      ') // z=5
        .pattern('BXXXXXXXXXXXB', ' D         D ', ' K         K ', ' KE   F   EK ', ' KKKKKKKKKKK ', '      F      ', '             ') // z=6
        .pattern('BXXXXXXXXXXXB', ' D         D ', ' X         X ', '  E   F   E  ', '   AAAFAAA   ', '             ', '             ') // z=7
        .pattern('BXXXXXXXXXXXB', ' DDDDDDDDDDD ', ' XLLLLLLLLLX ', '  EEEEEEEEE  ', '             ', '             ', '             ') // z=8
        .pattern('BXXXXXXXXXXXB', ' DMMMMMMMMMD ', ' X         X ', '  E          ', '             ', '             ', '             ') // z=9
        .pattern('XXX       XXX', 'RRC       RRR', 'RRR       RRR', '  E          ', '             ', '             ', '             ') // z=10 控制器层
        .set('X', api.block('mmcr:basic_casing'))
        .set('A', api.block('mekanism:structural_glass'))
        .set('B', api.block('mekanismgenerators:electromagnetic_coil'))
        .set('D', api.block('pneumaticcraft:reinforced_stone'))
        .set('E', api.block('enderio:energetic_alloy_block'))
        .set('F', api.block('powah:energized_steel_block'))
        .set('G', api.block('alltheores:silver_block'))
        .set('H', api.state('extendedae:assembler_matrix_frame[formed=false,powered=false,shape=block]'))
        .set('I', api.state('extendedae:assembler_matrix_frame[formed=false,powered=false,shape=column_y]'))
        .set('J', api.state('extendedae:assembler_matrix_frame[formed=false,powered=false,shape=column_x]'))
        .set('K', api.state('mekanismsun:tungstensteel_casing[active=false]'))
        .set('L', api.block('astralsorcery:marble_bricks'))
        .set('M', api.state('pneumaticcraft:compressed_brick_slab[type=bottom,waterlogged=false]'))
        .set('R', PORT)   // 端口位：任意物品/流体/能量仓，或用基础机器框架封死
        .controller('C')
        .build()
})
