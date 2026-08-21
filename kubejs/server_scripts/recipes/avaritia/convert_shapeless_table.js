ServerEvents.recipes(event => {
    event.remove({ type: 'avaritia:shapeless_table' })
    event.remove({ type: 'avaritia:infinity_catalyst' })

    // avaritia_expand:singularity_stew_eternal (2 ingredients)
    event.shapeless(
        Item.of('avaritia_expand:singularity_stew'),
        [
        'avaritia:neutron_nugget',
        'avaritia:eternal_singularity'
    ]
    )

    // minecraft:echo_shard (1 ingredients)
    event.shapeless(
        Item.of('minecraft:echo_shard'),
        [
        'minecraft:sculk'
    ]
    )

    // minecraft:torchflower_seeds (1 ingredients)
    event.shapeless(
        Item.of('minecraft:torchflower_seeds', 2),
        [
        'minecraft:torchflower'
    ]
    )

    // minecraft:pitcher_pod (1 ingredients)
    event.shapeless(
        Item.of('minecraft:pitcher_pod', 2),
        [
        'minecraft:pitcher_plant'
    ]
    )

    // avaritia:ultimate_stew (27 ingredients)
    event.custom({
        type: 'extendedcrafting:shapeless_table',
        ingredients: [
        { item: 'minecraft:apple' },
        { item: 'minecraft:golden_apple' },
        { item: 'minecraft:melon_slice' },
        { item: 'minecraft:glistering_melon_slice' },
        { item: 'minecraft:sweet_berries' },
        { item: 'minecraft:chorus_fruit' },
        { item: 'minecraft:carrot' },
        { item: 'minecraft:golden_carrot' },
        { item: 'minecraft:potato' },
        { item: 'minecraft:poisonous_potato' },
        { item: 'minecraft:beetroot' },
        { item: 'minecraft:kelp' },
        { item: 'minecraft:nether_wart' },
        { item: 'minecraft:cocoa_beans' },
        { item: 'minecraft:pitcher_pod' },
        { item: 'minecraft:honey_bottle' },
        { item: 'minecraft:cactus' },
        { item: 'minecraft:bamboo' },
        { item: 'minecraft:sugar_cane' },
        { item: 'minecraft:sea_pickle' },
        { item: 'minecraft:brown_mushroom' },
        { item: 'minecraft:red_mushroom' },
        { item: 'minecraft:crimson_fungus' },
        { item: 'minecraft:warped_fungus' },
        { item: 'minecraft:wheat' },
        { item: 'minecraft:pumpkin' },
        { item: 'avaritia:neutron_nugget' }
    ],
        result: { id: 'avaritia:ultimate_stew' }
    })

    // avaritia:cosmic_meatballs (13 ingredients)
    event.custom({
        type: 'extendedcrafting:shapeless_table',
        ingredients: [
        { item: 'minecraft:porkchop' },
        { item: 'minecraft:beef' },
        { item: 'minecraft:mutton' },
        { item: 'minecraft:cod' },
        { item: 'minecraft:salmon' },
        { item: 'minecraft:tropical_fish' },
        { item: 'minecraft:pufferfish' },
        { item: 'minecraft:rabbit' },
        { item: 'minecraft:chicken' },
        { item: 'minecraft:rotten_flesh' },
        { item: 'minecraft:spider_eye' },
        { tag: 'c:eggs' },
        { item: 'avaritia:neutron_nugget' }
    ],
        result: { id: 'avaritia:cosmic_meatballs' }
    })

    // avaritia:infinity_catalyst (7 ingredients)
    event.shapeless(
        Item.of('avaritia:infinity_catalyst'),
        [
        'minecraft:bedrock',
        'avaritia:crystal_matrix_ingot',
        'avaritia:neutron_ingot',
        'avaritia:cosmic_meatballs',
        'avaritia:ultimate_stew',
        'avaritia:endest_pearl',
        'avaritia:record_fragment'
    ]
    )

})

