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
