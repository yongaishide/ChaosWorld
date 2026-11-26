MMCREvents.server(event => {
    var api = event.getAPI()

    var structure = event
        .createStructure('mmcr_kubejs:industrial_blast_furnace')
        .pattern(['XXX', 'AAA', 'AAA', 'XXX'])
        .pattern(['XXX', 'A A', 'A A', 'XXX'])
        .pattern(['XCX', 'AAA', 'AAA', 'XXX'])
        .set('X', api.anyOf(
            api.block('mmcr:basic_casing'),
            api.anyOfItemInput(),
            api.anyOfItemOutput(),
            api.anyOfFluidInput(),
            api.anyOfFluidOutput(),
            api.anyOfEnergyInput()
        ))
        .set('A', api.block('useless_mod:useless_coil_tier_1'))

    // A 位可换成 2~9 级线圈，激活对应等级的修饰符
    for (var tier = 2; tier <= 9; tier++) {
        structure.modifier(
            'A',
            api.modifierUse(
                'mmcr_kubejs:coil_tier_' + tier,
                api.block('useless_mod:useless_coil_tier_' + tier)
            )
        )
    }

    structure
        .controller('C')
        .build()
})
