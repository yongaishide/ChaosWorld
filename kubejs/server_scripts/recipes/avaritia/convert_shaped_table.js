ServerEvents.recipes(event => {
    event.remove({ type: 'avaritia:shaped_table' })
    event.remove({ type: 'avaritia:sculk_crafting_table' })
    
  event.custom({
    type: 'extendedcrafting:shaped_table',
    pattern: ['ABACA','CCCCB','ACDCA','BCCCC','ACABA'],
    key: ({
      A: { item: 'minecraft:obsidian' },
      B: { item: 'extendedcrafting:advanced_component' },
      C: { item: 'alltheores:lumium_plate' },
      D: { item: 'extendedcrafting:basic_catalyst' }
    }),
    result: { id: 'extendedcrafting:advanced_catalyst' }
     })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['ABACA','CCCCB','ACDCA','BCCCC','ACABA'],
        key: ({
        A: { item: 'minecraft:obsidian' },
        B: { item: 'extendedcrafting:advanced_component' },
        C: { item: 'alltheores:lumium_plate' },
        D: { item: 'extendedcrafting:basic_catalyst' }
        }),
        result: { id: 'extendedcrafting:advanced_catalyst' },
        show_notification: false
    })


    // avaritia_expand:blaze_boots
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['     ', ' B B ', ' B B ', 'CB BC', 'AA AA'],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:blaze_cube' },
            C: { item: 'minecraft:blaze_powder' }
        }),
        result: { id: 'avaritia_expand:blaze_boots' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['     ', ' B B ', ' B B ', 'CB BC', 'AA AA'],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:blaze_cube' },
            C: { item: 'minecraft:blaze_powder' }
        }),
        result: { id: 'avaritia_expand:blaze_boots' },
        show_notification: false
    })

    // avaritia_expand:blaze_chestplate
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['A   A', 'ABBBA', 'CABAC', 'CBBBC', ' BBB '],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:blaze_cube' },
            C: { item: 'minecraft:blaze_powder' }
        }),
        result: { id: 'avaritia_expand:blaze_chestplate' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['A   A', 'ABBBA', 'CABAC', 'CBBBC', ' BBB '],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:blaze_cube' },
            C: { item: 'minecraft:blaze_powder' }
        }),
        result: { id: 'avaritia_expand:blaze_chestplate' },
        show_notification: false
    })

    // avaritia_expand:blaze_helmet
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['A   A', 'ABBBA', 'CB BC', 'CBBBC', 'C   C'],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:blaze_cube' },
            C: { item: 'minecraft:blaze_powder' }
        }),
        result: { id: 'avaritia_expand:blaze_helmet' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['A   A', 'ABBBA', 'CB BC', 'CBBBC', 'C   C'],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:blaze_cube' },
            C: { item: 'minecraft:blaze_powder' }
        }),
        result: { id: 'avaritia_expand:blaze_helmet' },
        show_notification: false
    })

    // avaritia_expand:blaze_leggings
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['BBBBB', 'CBABC', 'AB BA', 'BA AB', 'BB BB'],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:blaze_cube' },
            C: { item: 'minecraft:blaze_powder' }
        }),
        result: { id: 'avaritia_expand:blaze_leggings' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['BBBBB', 'CBABC', 'AB BA', 'BA AB', 'BB BB'],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:blaze_cube' },
            C: { item: 'minecraft:blaze_powder' }
        }),
        result: { id: 'avaritia_expand:blaze_leggings' },
        show_notification: false
    })

    // avaritia_expand:blaze_portable_burner
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' EEE ', 'E A E', 'EADAE', 'EBBBE', ' CCC '],
        key: ({
            A: { item: 'minecraft:blaze_powder' },
            B: { item: 'minecraft:netherrack' },
            C: { item: 'minecraft:obsidian' },
            D: { item: 'avaritia:blaze_cube' },
            E: { item: 'minecraft:nether_brick' }
        }),
        result: { id: 'avaritia_expand:blaze_portable_burner' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' EEE ', 'E A E', 'EADAE', 'EBBBE', ' CCC '],
        key: ({
            A: { item: 'minecraft:blaze_powder' },
            B: { item: 'minecraft:netherrack' },
            C: { item: 'minecraft:obsidian' },
            D: { item: 'avaritia:blaze_cube' },
            E: { item: 'minecraft:nether_brick' }
        }),
        result: { id: 'avaritia_expand:blaze_portable_burner' },
        show_notification: false
    })

    // avaritia_expand:blaze_wind_charge
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['     ', ' AAA ', 'AADAA', ' AAA ', '     '],
        key: ({
            A: { item: 'minecraft:wind_charge' },
            D: { item: 'avaritia:blaze_cube' }
        }),
        result: { id: 'avaritia_expand:blaze_wind_charge' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['     ', ' AAA ', 'AADAA', ' AAA ', '     '],
        key: ({
            A: { item: 'minecraft:wind_charge' },
            D: { item: 'avaritia:blaze_cube' }
        }),
        result: { id: 'avaritia_expand:blaze_wind_charge' },
        show_notification: false
    })

    // avaritia_expand:crystal_boots
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['       ', ' CC CC ', ' DC CD ', ' DC CD ', 'BBC CBB', 'BAC CAB', '       '],
        key: ({
            A: { item: 'minecraft:nether_star' },
            B: { item: 'avaritia:crystal_matrix_ingot' },
            C: { item: 'avaritia:crystal_matrix' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:crystal_boots' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['       ', ' CC CC ', ' DC CD ', ' DC CD ', 'BBC CBB', 'BAC CAB', '       '],
        key: ({
            A: { item: 'minecraft:nether_star' },
            B: { item: 'avaritia:crystal_matrix_ingot' },
            C: { item: 'avaritia:crystal_matrix' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:crystal_boots' },
        show_notification: false
    })

    // avaritia_expand:crystal_chestplate
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['       ', 'BABCBAB', 'BCCCCCB', 'BCCACCB', ' BCCCB ', ' BCCCB ', ' C   C '],
        key: ({
            A: { item: 'minecraft:nether_star' },
            B: { item: 'avaritia:crystal_matrix_ingot' },
            C: { item: 'avaritia:crystal_matrix' }
        }),
        result: { id: 'avaritia_expand:crystal_chestplate' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['       ', 'BABCBAB', 'BCCCCCB', 'BCCACCB', ' BCCCB ', ' BCCCB ', ' C   C '],
        key: ({
            A: { item: 'minecraft:nether_star' },
            B: { item: 'avaritia:crystal_matrix_ingot' },
            C: { item: 'avaritia:crystal_matrix' }
        }),
        result: { id: 'avaritia_expand:crystal_chestplate' },
        show_notification: false
    })

    // avaritia_expand:crystal_helmet
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' BBBBB ', 'B BAB B', 'BCBBBCB', 'CDDDDDC', 'CBCCCBC', ' BDCDB ', '       '],
        key: ({
            A: { item: 'minecraft:nether_star' },
            B: { item: 'avaritia:crystal_matrix_ingot' },
            C: { item: 'avaritia:crystal_matrix' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:crystal_helmet' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' BBBBB ', 'B BAB B', 'BCBBBCB', 'CDDDDDC', 'CBCCCBC', ' BDCDB ', '       '],
        key: ({
            A: { item: 'minecraft:nether_star' },
            B: { item: 'avaritia:crystal_matrix_ingot' },
            C: { item: 'avaritia:crystal_matrix' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:crystal_helmet' },
        show_notification: false
    })

    // avaritia_expand:crystal_leggings
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' CCCCC ', ' CBBBC ', ' CBBBC ', ' CB BC ', ' CC CC ', ' DB BD '],
        key: ({
            B: { item: 'avaritia:crystal_matrix_ingot' },
            C: { item: 'avaritia:crystal_matrix' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:crystal_leggings' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' CCCCC ', ' CBBBC ', ' CBBBC ', ' CB BC ', ' CC CC ', ' DB BD '],
        key: ({
            B: { item: 'avaritia:crystal_matrix_ingot' },
            C: { item: 'avaritia:crystal_matrix' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:crystal_leggings' },
        show_notification: false
    })

    // avaritia_expand:crystal_rail
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' D   D ', ' D   D ', ' DD DD ', ' D D D ', ' DD DD ', ' D   D ', ' D   D '],
        key: ({
            D: { item: 'avaritia:crystal_matrix_ingot' }
        }),
        result: { id: 'avaritia_expand:crystal_rail', count: 64 }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' D   D ', ' D   D ', ' DD DD ', ' D D D ', ' DD DD ', ' D   D ', ' D   D '],
        key: ({
            D: { item: 'avaritia:crystal_matrix_ingot' }
        }),
        result: { id: 'avaritia_expand:crystal_rail', count: 64 },
        show_notification: false
    })

    // avaritia_expand:crystal_wind_charge
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['       ', '  AAA  ', ' AADAA ', 'AADDDAA', ' AADAA ', '  AAA  ', '       '],
        key: ({
            A: { item: 'minecraft:wind_charge' },
            D: { item: 'avaritia:crystal_matrix_ingot' }
        }),
        result: { id: 'avaritia_expand:crystal_wind_charge' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['       ', '  AAA  ', ' AADAA ', 'AADDDAA', ' AADAA ', '  AAA  ', '       '],
        key: ({
            A: { item: 'minecraft:wind_charge' },
            D: { item: 'avaritia:crystal_matrix_ingot' }
        }),
        result: { id: 'avaritia_expand:crystal_wind_charge' },
        show_notification: false
    })

    // avaritia_expand:infinity_book
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['         ', '         ', '         ', '         ', 'E   C   E', 'AEE   EEA', ' AAEAEAA ', '   A A   ', '         '],
        key: ({
            A: { item: 'avaritia:infinity_ingot' },
            C: { item: 'minecraft:grass_block' },
            E: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia_expand:infinity_book' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['         ', '         ', '         ', '         ', 'E   C   E', 'AEE   EEA', ' AAEAEAA ', '   A A   ', '         '],
        key: ({
            A: { item: 'avaritia:infinity_ingot' },
            C: { item: 'minecraft:grass_block' },
            E: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia_expand:infinity_book' },
        show_notification: false
    })

    // avaritia_expand:infinity_bottle
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['   ABA   ', '   ADA   ', '   A A   ', '  A   A  ', ' A  E  A ', ' ACCCCCA ', ' ACCCCCA ', ' AFFFFFA ', '  AAAAA  '],
        key: ({
            A: { item: 'minecraft:glass' },
            B: { item: 'avaritia:neutron' },
            C: { item: 'minecraft:experience_bottle' },
            D: { item: 'avaritia:neutron_ingot' },
            E: { item: 'avaritia:infinity_catalyst' },
            F: { item: 'minecraft:dragon_breath' }
        }),
        result: { id: 'avaritia_expand:infinity_bottle' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['   ABA   ', '   ADA   ', '   A A   ', '  A   A  ', ' A  E  A ', ' ACCCCCA ', ' ACCCCCA ', ' AFFFFFA ', '  AAAAA  '],
        key: ({
            A: { item: 'minecraft:glass' },
            B: { item: 'avaritia:neutron' },
            C: { item: 'minecraft:experience_bottle' },
            D: { item: 'avaritia:neutron_ingot' },
            E: { item: 'avaritia:infinity_catalyst' },
            F: { item: 'minecraft:dragon_breath' }
        }),
        result: { id: 'avaritia_expand:infinity_bottle' },
        show_notification: false
    })

    // avaritia_expand:infinity_shears
    event.shaped(
        Item.of('avaritia_expand:infinity_shears'),
        [' a', 'a '],
        ({
            a: { item: 'avaritia:infinity_ingot' }
        })
    )

    // avaritia_expand:infinity_tnt_block
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAACBCAAA', 'AAABEBAAA', 'AAACBCAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA'],
        key: ({
            A: { item: 'minecraft:tnt' },
            B: { item: 'avaritia:neutron_pile' },
            C: { item: 'avaritia:infinity_nugget' },
            E: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia_expand:infinity_tnt_block' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAACBCAAA', 'AAABEBAAA', 'AAACBCAAA', 'AAAAAAAAA', 'AAAAAAAAA', 'AAAAAAAAA'],
        key: ({
            A: { item: 'minecraft:tnt' },
            B: { item: 'avaritia:neutron_pile' },
            C: { item: 'avaritia:infinity_nugget' },
            E: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia_expand:infinity_tnt_block' },
        show_notification: false
    })

    // avaritia_expand:neutron_axe
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['  DDD  ', ' DAD   ', ' DDDDD ', ' D D D ', '  D    ', ' D     ', 'D      '],
        key: ({
            A: { item: 'avaritia:neutron' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_axe' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['  DDD  ', ' DAD   ', ' DDDDD ', ' D D D ', '  D    ', ' D     ', 'D      '],
        key: ({
            A: { item: 'avaritia:neutron' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_axe' },
        show_notification: false
    })

    // avaritia_expand:neutron_decompose
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['AAAEEEAAA', 'E ADDDA E', 'A  DDD  A', 'E  DDD  E', 'C  DDD  C', 'E  DBD  E', 'A DDDDD A', 'E       E', 'AAAEAEAAA'],
        key: ({
            A: { item: 'minecraft:iron_block' },
            B: { item: 'avaritia:neutron' },
            C: { item: 'minecraft:redstone_block' },
            D: { item: 'avaritia:neutron_ingot' },
            E: { item: 'avaritia:crystal_matrix_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_decompose' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['AAAEEEAAA', 'E ADDDA E', 'A  DDD  A', 'E  DDD  E', 'C  DDD  C', 'E  DBD  E', 'A DDDDD A', 'E       E', 'AAAEAEAAA'],
        key: ({
            A: { item: 'minecraft:iron_block' },
            B: { item: 'avaritia:neutron' },
            C: { item: 'minecraft:redstone_block' },
            D: { item: 'avaritia:neutron_ingot' },
            E: { item: 'avaritia:crystal_matrix_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_decompose' },
        show_notification: false
    })

    // avaritia_expand:neutron_hoe
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' DDDD A', '    DD ', '    DD ', '   D  D', '  D    ', ' D     ', 'D      '],
        key: ({
            A: { item: 'avaritia:neutron' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_hoe' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' DDDD A', '    DD ', '    DD ', '   D  D', '  D    ', ' D     ', 'D      '],
        key: ({
            A: { item: 'avaritia:neutron' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_hoe' },
        show_notification: false
    })

    // avaritia_expand:neutron_mace
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['    D  ', '   DBD ', '  DBABD', '   DBD ', '  D D  ', ' D     ', 'D      '],
        key: ({
            A: { item: 'minecraft:heavy_core' },
            B: { item: 'avaritia:neutron' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_mace' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['    D  ', '   DBD ', '  DBABD', '   DBD ', '  D D  ', ' D     ', 'D      '],
        key: ({
            A: { item: 'minecraft:heavy_core' },
            B: { item: 'avaritia:neutron' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_mace' },
        show_notification: false
    })

    // avaritia_expand:neutron_minecart
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['       ', '       ', '       ', 'DD   DD', 'DD   DD', 'DDDBDDD', 'DDDDDDD'],
        key: ({
            B: { item: 'avaritia:neutron' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_minecart' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['       ', '       ', '       ', 'DD   DD', 'DD   DD', 'DDDBDDD', 'DDDDDDD'],
        key: ({
            B: { item: 'avaritia:neutron' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_minecart' },
        show_notification: false
    })

    // avaritia_expand:neutron_mobile
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['A      ', 'DDD    ', 'DDD    ', 'DDD    ', 'DDDDDD ', ' DBCEDD', '  DDDD '],
        key: ({
            A: { item: 'minecraft:recovery_compass' },
            B: { item: 'minecraft:compass' },
            C: { item: 'minecraft:blaze_powder' },
            D: { item: 'avaritia:neutron_ingot' },
            E: { item: 'minecraft:ender_eye' }
        }),
        result: { id: 'avaritia_expand:neutron_mobile' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['A      ', 'DDD    ', 'DDD    ', 'DDD    ', 'DDDDDD ', ' DBCEDD', '  DDDD '],
        key: ({
            A: { item: 'minecraft:recovery_compass' },
            B: { item: 'minecraft:compass' },
            C: { item: 'minecraft:blaze_powder' },
            D: { item: 'avaritia:neutron_ingot' },
            E: { item: 'minecraft:ender_eye' }
        }),
        result: { id: 'avaritia_expand:neutron_mobile' },
        show_notification: false
    })

    // avaritia_expand:neutron_pickaxe
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' DDDD  ', '   DDA ', '    DDD', '   D DD', '  D   D', ' D    D', 'D      '],
        key: ({
            A: { item: 'avaritia:neutron' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_pickaxe' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' DDDD  ', '   DDA ', '    DDD', '   D DD', '  D   D', ' D    D', 'D      '],
        key: ({
            A: { item: 'avaritia:neutron' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_pickaxe' },
        show_notification: false
    })

    // avaritia_expand:neutron_shovel
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['    DDD', '   DDAD', '    DDD', '   D D ', '  D    ', ' D     ', 'D      '],
        key: ({
            A: { item: 'avaritia:neutron' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_shovel' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['    DDD', '   DDAD', '    DDD', '   D D ', '  D    ', ' D     ', 'D      '],
        key: ({
            A: { item: 'avaritia:neutron' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_shovel' },
        show_notification: false
    })

    // avaritia_expand:neutron_sword
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['     DD', '    DDD', ' D DDD ', ' DDAD  ', '  DD   ', ' D DD  ', 'D      '],
        key: ({
            A: { item: 'avaritia:neutron' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_sword' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['     DD', '    DDD', ' D DDD ', ' DDAD  ', '  DD   ', ' D DD  ', 'D      '],
        key: ({
            A: { item: 'avaritia:neutron' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_sword' },
        show_notification: false
    })

    // avaritia_expand:neutron_wind_charge
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['       ', '  AAA  ', ' ADDDA ', 'ADD DDA', ' ADDDA ', '  AAA  ', '       '],
        key: ({
            A: { item: 'minecraft:wind_charge' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_wind_charge' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['       ', '  AAA  ', ' ADDDA ', 'ADD DDA', ' ADDDA ', '  AAA  ', '       '],
        key: ({
            A: { item: 'minecraft:wind_charge' },
            D: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia_expand:neutron_wind_charge' },
        show_notification: false
    })

    // avaritia_expand:wither_star
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['  D  ', ' DCD ', 'DEEED', ' DED ', '  D  '],
        key: ({
            C: { item: 'avaritia:blaze_cube_block' },
            D: { item: 'avaritia:crystal_matrix_ingot' },
            E: { item: 'avaritia:neutron' }
        }),
        result: { id: 'avaritia_expand:wither_star' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['  D  ', ' DCD ', 'DEEED', ' DED ', '  D  '],
        key: ({
            C: { item: 'avaritia:blaze_cube_block' },
            D: { item: 'avaritia:crystal_matrix_ingot' },
            E: { item: 'avaritia:neutron' }
        }),
        result: { id: 'avaritia_expand:wither_star' },
        show_notification: false
    })

    // minecraft:music_disc_pigstep
    event.shaped(
        Item.of('minecraft:music_disc_pigstep'),
        ['a a', ' b ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' },
            b: { item: 'minecraft:nether_gold_ore' }
        })
    )

    // minecraft:sculk_sensor
    event.shaped(
        Item.of('minecraft:sculk_sensor'),
        ['a a'],
        ({
            a: { item: 'minecraft:echo_shard' }
        })
    )

    // minecraft:sculk_shrieker
    event.shaped(
        Item.of('minecraft:sculk_shrieker'),
        ['cac', ' b '],
        ({
            a: { item: 'minecraft:sculk_catalyst' },
            b: { item: 'minecraft:sculk_sensor' },
            c: { item: 'minecraft:bone_block' }
        })
    )

    // minecraft:cobweb
    event.shaped(
        Item.of('minecraft:cobweb'),
        ['a a', ' a ', 'a a'],
        ({
            a: { item: 'minecraft:string' }
        })
    )

    // minecraft:music_disc_mall
    event.shaped(
        Item.of('minecraft:music_disc_mall'),
        ['a a', ' b ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' },
            b: { item: 'minecraft:purple_dye' }
        })
    )

    // minecraft:music_disc_ward
    event.shaped(
        Item.of('minecraft:music_disc_ward'),
        ['a a', ' b ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' },
            b: { item: 'minecraft:cyan_dye' }
        })
    )

    // minecraft:music_disc_chirp
    event.shaped(
        Item.of('minecraft:music_disc_chirp'),
        ['a a', ' b ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' },
            b: { item: 'minecraft:red_dye' }
        })
    )

    // minecraft:dragon_egg
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['  ggg  ', ' gfefg ', 'gfbdbfg', 'gecaceg', 'gfbcbfg', 'ggfefgg', ' ggggg '],
        key: ({
            a: { item: 'minecraft:egg' },
            b: { item: 'minecraft:dragon_breath' },
            c: { item: 'minecraft:experience_bottle' },
            d: { item: 'minecraft:dragon_head' },
            e: { item: 'minecraft:ender_chest' },
            f: { item: 'minecraft:end_crystal' },
            g: { item: 'avaritia:neutron_pile' }
        }),
        result: { id: 'minecraft:dragon_egg' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['  ggg  ', ' gfefg ', 'gfbdbfg', 'gecaceg', 'gfbcbfg', 'ggfefgg', ' ggggg '],
        key: ({
            a: { item: 'minecraft:egg' },
            b: { item: 'minecraft:dragon_breath' },
            c: { item: 'minecraft:experience_bottle' },
            d: { item: 'minecraft:dragon_head' },
            e: { item: 'minecraft:ender_chest' },
            f: { item: 'minecraft:end_crystal' },
            g: { item: 'avaritia:neutron_pile' }
        }),
        result: { id: 'minecraft:dragon_egg' },
        show_notification: false
    })

    // minecraft:music_disc_strad
    event.shaped(
        Item.of('minecraft:music_disc_strad'),
        ['a a', ' b ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' },
            b: { item: 'minecraft:white_dye' }
        })
    )

    // minecraft:music_disc_11
    event.shaped(
        Item.of('minecraft:music_disc_11'),
        ['a a', ' a ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' }
        })
    )

    // minecraft:sculk
    event.shaped(
        Item.of('minecraft:sculk'),
        ['aa', 'aa'],
        ({
            a: { item: 'minecraft:echo_shard' }
        })
    )

    // minecraft:music_disc_otherside
    event.shaped(
        Item.of('minecraft:music_disc_otherside'),
        ['a a', ' b ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' },
            b: { item: 'minecraft:grass_block' }
        })
    )

    // minecraft:heart_of_the_sea
    event.shaped(
        Item.of('minecraft:heart_of_the_sea'),
        ['bdb', 'dcd', 'bdb'],
        ({
            b: { item: 'minecraft:prismarine_shard' },
            c: { item: 'minecraft:ender_eye' },
            d: { item: 'minecraft:nautilus_shell' }
        })
    )

    // minecraft:end_portal_frame
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['     ', 'fghgf', 'ecace', 'dcccd', 'bbbbb'],
        key: ({
            a: { item: 'minecraft:end_crystal' },
            b: { item: 'minecraft:end_stone_bricks' },
            c: { item: 'minecraft:end_stone' },
            d: { item: 'minecraft:end_stone_brick_wall' },
            e: { item: 'minecraft:emerald_block' },
            f: { item: 'avaritia:crystal_matrix_ingot' },
            g: { item: 'minecraft:ender_eye' },
            h: { item: 'minecraft:sculk_shrieker' }
        }),
        result: { id: 'minecraft:end_portal_frame' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['     ', 'fghgf', 'ecace', 'dcccd', 'bbbbb'],
        key: ({
            a: { item: 'minecraft:end_crystal' },
            b: { item: 'minecraft:end_stone_bricks' },
            c: { item: 'minecraft:end_stone' },
            d: { item: 'minecraft:end_stone_brick_wall' },
            e: { item: 'minecraft:emerald_block' },
            f: { item: 'avaritia:crystal_matrix_ingot' },
            g: { item: 'minecraft:ender_eye' },
            h: { item: 'minecraft:sculk_shrieker' }
        }),
        result: { id: 'minecraft:end_portal_frame' },
        show_notification: false
    })

    // minecraft:music_disc_13
    event.shaped(
        Item.of('minecraft:music_disc_13'),
        ['a a', ' b ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' },
            b: { item: 'minecraft:yellow_dye' }
        })
    )

    // minecraft:gilded_blackstone
    event.shaped(
        Item.of('minecraft:gilded_blackstone'),
        [' a ', 'aba', ' a '],
        ({
            a: { item: 'minecraft:gold_nugget' },
            b: { item: 'minecraft:blackstone' }
        })
    )

    // minecraft:music_disc_far
    event.shaped(
        Item.of('minecraft:music_disc_far'),
        ['a a', ' b ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' },
            b: { item: 'minecraft:lime_dye' }
        })
    )

    // minecraft:sculk_catalyst
    event.shaped(
        Item.of('minecraft:sculk_catalyst'),
        ['b', 'c'],
        ({
            b: { item: 'minecraft:sculk' },
            c: { item: 'minecraft:bone_block' }
        })
    )

    // minecraft:budding_amethyst
    event.shaped(
        Item.of('minecraft:budding_amethyst'),
        ['cac', 'aba', 'cac'],
        ({
            a: { item: 'avaritia:soul_farmland' },
            b: { item: 'minecraft:amethyst_block' },
            c: { item: 'minecraft:amethyst_cluster' }
        })
    )

    // minecraft:trident
    event.shaped(
        Item.of('minecraft:trident'),
        [' ba', ' cb', 'd  '],
        ({
            a: { item: 'minecraft:nautilus_shell' },
            b: { item: 'minecraft:prismarine_crystals' },
            c: { item: 'minecraft:heart_of_the_sea' },
            d: { item: 'minecraft:prismarine_shard' }
        })
    )

    // minecraft:music_disc_blocks
    event.shaped(
        Item.of('minecraft:music_disc_blocks'),
        ['a a', ' b ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' },
            b: { item: 'minecraft:orange_dye' }
        })
    )

    // minecraft:music_disc_relic
    event.shaped(
        Item.of('minecraft:music_disc_relic'),
        ['a a', ' b ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' },
            b: { item: 'minecraft:waxed_weathered_copper' }
        })
    )

    // minecraft:soul_sand
    event.shaped(
        Item.of('minecraft:soul_sand', 4),
        ['ab ', 'ba '],
        ({
            a: { item: 'minecraft:soul_soil' },
            b: { item: 'minecraft:sand' }
        })
    )

    // minecraft:dragon_head
    event.shaped(
        Item.of('minecraft:dragon_head'),
        [' a ', 'bcb', ' b '],
        ({
            a: { item: 'minecraft:wither_skeleton_skull' },
            b: { item: 'minecraft:end_crystal' },
            c: { item: 'minecraft:dragon_egg' }
        })
    )

    // minecraft:spore_blossom
    event.shaped(
        Item.of('minecraft:spore_blossom'),
        ['aba', 'bcb', 'aba'],
        ({
            a: { item: 'minecraft:bone_meal' },
            b: { item: 'minecraft:pink_petals' },
            c: { item: 'minecraft:torchflower_seeds' }
        })
    )

    // minecraft:music_disc_cat
    event.shaped(
        Item.of('minecraft:music_disc_cat'),
        ['a a', ' b ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' },
            b: { item: 'minecraft:green_dye' }
        })
    )

    // minecraft:sniffer_egg
    event.shaped(
        Item.of('minecraft:sniffer_egg'),
        ['aaa', 'dbd', 'ccc'],
        ({
            a: { item: 'minecraft:brick' },
            b: { item: 'minecraft:egg' },
            c: { item: 'minecraft:gravel' },
            d: { item: 'minecraft:sand' }
        })
    )

    // minecraft:crying_obsidian
    event.shaped(
        Item.of('minecraft:crying_obsidian'),
        ['bab', 'aba', 'bab'],
        ({
            a: { item: 'minecraft:amethyst_block' },
            b: { item: 'minecraft:obsidian' }
        })
    )

    // minecraft:music_disc_wait
    event.shaped(
        Item.of('minecraft:music_disc_wait'),
        ['a a', ' b ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' },
            b: { item: 'minecraft:light_blue_dye' }
        })
    )

    // minecraft:music_disc_mellohi
    event.shaped(
        Item.of('minecraft:music_disc_mellohi'),
        ['a a', ' b ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' },
            b: { item: 'minecraft:magenta_dye' }
        })
    )

    // minecraft:music_disc_stal
    event.shaped(
        Item.of('minecraft:music_disc_stal'),
        ['a a', ' b ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' },
            b: { item: 'minecraft:black_dye' }
        })
    )

    // minecraft:music_disc_5
    event.shaped(
        Item.of('minecraft:music_disc_5'),
        ['a a', ' b ', 'a a'],
        ({
            a: { item: 'avaritia:record_fragment' },
            b: { item: 'minecraft:echo_shard' }
        })
    )

    // minecraft:dragon_breath
    event.shaped(
        Item.of('minecraft:dragon_breath'),
        [' a ', 'a a', ' a '],
        ({
            a: { item: 'minecraft:end_crystal' }
        })
    )

    // minecraft:reinforced_deepslate
    event.shaped(
        Item.of('minecraft:reinforced_deepslate'),
        ['ada', 'cbc', 'aba'],
        ({
            a: { item: 'minecraft:obsidian' },
            b: { item: 'minecraft:deepslate' },
            c: { item: 'minecraft:dripstone_block' },
            d: { item: 'minecraft:sculk_catalyst' }
        })
    )

    // avaritia:side_config_card
    event.shaped(
        Item.of('avaritia:side_config_card'),
        ['iii', 'iai', ' b '],
        ({
            a: { item: 'avaritia:diamond_lattice' },
            b: { item: 'minecraft:gold_ingot' },
            i: { item: 'minecraft:iron_ingot' }
        })
    )

    // "bountifulbaubles:endless_pearl"
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['   EEE   ', ' EEPPPEE ', ' EPPPPPE ', 'EPPPNPPPE', 'EPPNSNPPE', 'EPPPNPPPE', ' EPPPPPE ', ' EEPPPEE ', '   EEE   '],
        key: ({
            E: { tag: 'c:end_stones' },
            N: { item: 'avaritia:neutron_ingot' },
            P: { tag: 'c:ender_pearls' },
            S: { item: "actuallyadditions:ender_star" }
        }),
        result: { id: "bountifulbaubles:endless_pearl" }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['   EEE   ', ' EEPPPEE ', ' EPPPPPE ', 'EPPPNPPPE', 'EPPNSNPPE', 'EPPPNPPPE', ' EPPPPPE ', ' EEPPPEE ', '   EEE   '],
        key: ({
            E: { tag: 'c:end_stones' },
            N: { item: 'avaritia:neutron_ingot' },
            P: { tag: 'c:ender_pearls' },
            S: { item: "actuallyadditions:ender_star" }
        }),
        result: { id: "bountifulbaubles:endless_pearl" },
        show_notification: false
    })

    // avaritia:upgrade_smithing_template
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' aaabaaa ', ' accecca ', ' acefeca ', 'dijkelmnd', 'dogphqgrd', 'dstufvwxd', ' acdfdca ', ' accecca ', ' aaabaaa '],
        key: ({
            a: { item: 'avaritia:crystal_matrix_ingot' },
            b: { item: 'avaritia:crystal_matrix' },
            c: { item: 'avaritia:neutron_ingot' },
            d: { item: 'avaritia:neutron_pile' },
            e: { item: 'avaritia:infinity_nugget' },
            f: { item: 'avaritia:infinity_ingot' },
            g: { item: 'avaritia:infinity_catalyst' },
            h: { item: 'minecraft:netherite_upgrade_smithing_template' },
            i: { item: 'minecraft:sentry_armor_trim_smithing_template' },
            j: { item: 'minecraft:dune_armor_trim_smithing_template' },
            k: { item: 'minecraft:coast_armor_trim_smithing_template' },
            l: { item: 'minecraft:wild_armor_trim_smithing_template' },
            m: { item: 'minecraft:ward_armor_trim_smithing_template' },
            n: { item: 'minecraft:eye_armor_trim_smithing_template' },
            o: { item: 'minecraft:vex_armor_trim_smithing_template' },
            p: { item: 'minecraft:tide_armor_trim_smithing_template' },
            q: { item: 'minecraft:snout_armor_trim_smithing_template' },
            r: { item: 'minecraft:rib_armor_trim_smithing_template' },
            s: { item: 'minecraft:spire_armor_trim_smithing_template' },
            t: { item: 'minecraft:wayfinder_armor_trim_smithing_template' },
            u: { item: 'minecraft:shaper_armor_trim_smithing_template' },
            v: { item: 'minecraft:silence_armor_trim_smithing_template' },
            w: { item: 'minecraft:raiser_armor_trim_smithing_template' },
            x: { item: 'minecraft:host_armor_trim_smithing_template' }
        }),
        result: { id: 'avaritia:upgrade_smithing_template' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' aaabaaa ', ' accecca ', ' acefeca ', 'dijkelmnd', 'dogphqgrd', 'dstufvwxd', ' acdfdca ', ' accecca ', ' aaabaaa '],
        key: ({
            a: { item: 'avaritia:crystal_matrix_ingot' },
            b: { item: 'avaritia:crystal_matrix' },
            c: { item: 'avaritia:neutron_ingot' },
            d: { item: 'avaritia:neutron_pile' },
            e: { item: 'avaritia:infinity_nugget' },
            f: { item: 'avaritia:infinity_ingot' },
            g: { item: 'avaritia:infinity_catalyst' },
            h: { item: 'minecraft:netherite_upgrade_smithing_template' },
            i: { item: 'minecraft:sentry_armor_trim_smithing_template' },
            j: { item: 'minecraft:dune_armor_trim_smithing_template' },
            k: { item: 'minecraft:coast_armor_trim_smithing_template' },
            l: { item: 'minecraft:wild_armor_trim_smithing_template' },
            m: { item: 'minecraft:ward_armor_trim_smithing_template' },
            n: { item: 'minecraft:eye_armor_trim_smithing_template' },
            o: { item: 'minecraft:vex_armor_trim_smithing_template' },
            p: { item: 'minecraft:tide_armor_trim_smithing_template' },
            q: { item: 'minecraft:snout_armor_trim_smithing_template' },
            r: { item: 'minecraft:rib_armor_trim_smithing_template' },
            s: { item: 'minecraft:spire_armor_trim_smithing_template' },
            t: { item: 'minecraft:wayfinder_armor_trim_smithing_template' },
            u: { item: 'minecraft:shaper_armor_trim_smithing_template' },
            v: { item: 'minecraft:silence_armor_trim_smithing_template' },
            w: { item: 'minecraft:raiser_armor_trim_smithing_template' },
            x: { item: 'minecraft:host_armor_trim_smithing_template' }
        }),
        result: { id: 'avaritia:upgrade_smithing_template' },
        show_notification: false
    })

    // avaritia:neutron_compressor
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['IIIHHHIII', 'C N   N C', 'I N   N I', 'C N   N C', 'RNN O NNR', 'C N   N C', 'I N   N I', 'C N   N C', 'IIICICIII'],
        key: ({
            C: { item: 'avaritia:crystal_matrix_ingot' },
            H: { item: 'minecraft:hopper' },
            I: { item: 'minecraft:iron_block' },
            N: { item: 'avaritia:neutron_ingot' },
            O: { item: 'avaritia:neutron' },
            R: { item: 'minecraft:redstone_block' }
        }),
        result: { id: 'avaritia:neutron_compressor' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['IIIHHHIII', 'C N   N C', 'I N   N I', 'C N   N C', 'RNN O NNR', 'C N   N C', 'I N   N I', 'C N   N C', 'IIICICIII'],
        key: ({
            C: { item: 'avaritia:crystal_matrix_ingot' },
            H: { item: 'minecraft:hopper' },
            I: { item: 'minecraft:iron_block' },
            N: { item: 'avaritia:neutron_ingot' },
            O: { item: 'avaritia:neutron' },
            R: { item: 'minecraft:redstone_block' }
        }),
        result: { id: 'avaritia:neutron_compressor' },
        show_notification: false
    })

    // avaritia:crystal_sword
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['     CA', '    CAC', ' C CAC ', ' CCAC  ', 'CAAC   ', ' BACC  ', 'A C    '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron' },
            C: { item: 'avaritia:crystal_matrix_ingot' }
        }),
        result: { id: 'avaritia:crystal_sword' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['     CA', '    CAC', ' C CAC ', ' CCAC  ', 'CAAC   ', ' BACC  ', 'A C    '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron' },
            C: { item: 'avaritia:crystal_matrix_ingot' }
        }),
        result: { id: 'avaritia:crystal_sword' },
        show_notification: false
    })

    // avaritia:infinity_crossbow
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['   IIIIIP', ' AC N  C ', ' CXN  C  ', 'I NIPC   ', 'IN PCN   ', 'I  CNIN  ', 'I C  NNA ', 'IC    AAN', 'P      NN'],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            P: { item: 'avaritia:neutron_pile' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_crossbow' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['   IIIIIP', ' AC N  C ', ' CXN  C  ', 'I NIPC   ', 'IN PCN   ', 'I  CNIN  ', 'I C  NNA ', 'IC    AAN', 'P      NN'],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            P: { item: 'avaritia:neutron_pile' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_crossbow' },
        show_notification: false
    })

    // avaritia:dense_neutron_compressor
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['AAC   CAA', 'AB     BA', 'C DEEED C', '  EGGGE  ', '  EGFGE  ', '  EGGGE  ', 'C DEEED C', 'AB     BA', 'AAC   CAA'],
        key: ({
            A: { item: 'minecraft:ender_pearl' },
            B: { item: 'minecraft:nether_star' },
            C: { item: 'avaritia:diamond_lattice' },
            D: { item: 'avaritia:neutron_ingot' },
            E: { item: 'minecraft:emerald_block' },
            F: { item: 'avaritia:endest_pearl' },
            G: { item: 'avaritia:neutron_compressor' }
        }),
        result: { id: 'avaritia:dense_neutron_compressor' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['AAC   CAA', 'AB     BA', 'C DEEED C', '  EGGGE  ', '  EGFGE  ', '  EGGGE  ', 'C DEEED C', 'AB     BA', 'AAC   CAA'],
        key: ({
            A: { item: 'minecraft:ender_pearl' },
            B: { item: 'minecraft:nether_star' },
            C: { item: 'avaritia:diamond_lattice' },
            D: { item: 'avaritia:neutron_ingot' },
            E: { item: 'minecraft:emerald_block' },
            F: { item: 'avaritia:endest_pearl' },
            G: { item: 'avaritia:neutron_compressor' }
        }),
        result: { id: 'avaritia:dense_neutron_compressor' },
        show_notification: false
    })

    // avaritia:crystal_pickaxe
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['CAAAA D', ' CCCC  ', '    CCA', '   B CA', '  B  CA', ' B   CA', 'A     C'],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron_ingot' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            D: { item: 'avaritia:neutron' }
        }),
        result: { id: 'avaritia:crystal_pickaxe' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['CAAAA D', ' CCCC  ', '    CCA', '   B CA', '  B  CA', ' B   CA', 'A     C'],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron_ingot' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            D: { item: 'avaritia:neutron' }
        }),
        result: { id: 'avaritia:crystal_pickaxe' },
        show_notification: false
    })

    // avaritia:blaze_hoe
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['DDCCA', ' DDAC', '  A D', ' E   ', 'B    '],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:diamond_lattice' },
            C: { item: 'avaritia:blaze_cube' },
            D: { item: 'minecraft:blaze_powder' },
            E: { item: 'minecraft:soul_soil' }
        }),
        result: { id: 'avaritia:blaze_hoe' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['DDCCA', ' DDAC', '  A D', ' E   ', 'B    '],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:diamond_lattice' },
            C: { item: 'avaritia:blaze_cube' },
            D: { item: 'minecraft:blaze_powder' },
            E: { item: 'minecraft:soul_soil' }
        }),
        result: { id: 'avaritia:blaze_hoe' },
        show_notification: false
    })

    // avaritia:star_fuel
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['         ', '  aaaaa  ', ' abbcbba ', ' abaaaba ', ' acadaca ', ' abaaaba ', ' abbcbba ', '  aaaaa  ', '         '],
        key: ({
            a: { item: 'minecraft:coal_block' },
            b: { item: 'minecraft:magma_block' },
            c: { item: 'minecraft:lava_bucket' },
            d: { item: 'avaritia:eternal_singularity' }
        }),
        result: { id: 'avaritia:star_fuel' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['         ', '  aaaaa  ', ' abbcbba ', ' abaaaba ', ' acadaca ', ' abaaaba ', ' abbcbba ', '  aaaaa  ', '         '],
        key: ({
            a: { item: 'minecraft:coal_block' },
            b: { item: 'minecraft:magma_block' },
            c: { item: 'minecraft:lava_bucket' },
            d: { item: 'avaritia:eternal_singularity' }
        }),
        result: { id: 'avaritia:star_fuel' },
        show_notification: false
    })

    // avaritia:record_fragment
    event.shaped(
        Item.of('avaritia:record_fragment', 4),
        [' a ', 'aba', ' a '],
        ({
            a: { item: 'avaritia:neutron_pile' },
            b: { tag: 'c:music_discs' }
        })
    )

    // avaritia:infinity_shield
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' MNNCNNM ', ' NCCDCCN ', ' NSIIISN ', ' NIAAAIN ', ' NIAXAIN ', ' NIAAAIN ', ' NSIIISN ', ' NCCDCCN ', ' MNNCNNM '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            D: { item: 'avaritia:diamond_lattice' },
            I: { item: 'avaritia:infinity_ingot' },
            M: { item: 'avaritia:neutron' },
            N: { item: 'avaritia:neutron_ingot' },
            S: { item: 'minecraft:shield' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_shield' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' MNNCNNM ', ' NCCDCCN ', ' NSIIISN ', ' NIAAAIN ', ' NIAXAIN ', ' NIAAAIN ', ' NSIIISN ', ' NCCDCCN ', ' MNNCNNM '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            D: { item: 'avaritia:diamond_lattice' },
            I: { item: 'avaritia:infinity_ingot' },
            M: { item: 'avaritia:neutron' },
            N: { item: 'avaritia:neutron_ingot' },
            S: { item: 'minecraft:shield' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_shield' },
        show_notification: false
    })

    // avaritia:infinity_bow
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['      III', '  AAIINNP', ' AXA   C ', ' AA   C  ', ' I   C   ', ' I  C    ', 'IN C     ', 'INC      ', 'IP       '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            P: { item: 'avaritia:neutron_pile' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_bow' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['      III', '  AAIINNP', ' AXA   C ', ' AA   C  ', ' I   C   ', ' I  C    ', 'IN C     ', 'INC      ', 'IP       '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            P: { item: 'avaritia:neutron_pile' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_bow' },
        show_notification: false
    })

    // avaritia:mek_creative_energy_cube
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['BBBCECBBB', 'BDDDADDDB', 'BDSDADSDB', 'CDDDIDDDC', 'EAAISIAAE', 'CDDDIDDDC', 'BDSDADSDB', 'BDDDADDDB', 'BBBCECBBB'],
        key: ({
            A: { item: 'mekanism:ultimate_energy_cube' },
            B: { item: "mekanismsun:advance_induction_casing" },
            C: { item: 'mekanism:induction_port' },
            D: { item: "mekanism_extras:infinite_induction_cell" },
            E: { item: "mekanism_extras:infinite_induction_provider" },
            I: { item: 'avaritia:infinity_ingot' },
            S: { item: "chaosworld_core:dimensional_catalyst" }
        }),
        result: { id: 'mekanism:creative_energy_cube' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['BBBCECBBB', 'BDDDADDDB', 'BDSDADSDB', 'CDDDIDDDC', 'EAAISIAAE', 'CDDDIDDDC', 'BDSDADSDB', 'BDDDADDDB', 'BBBCECBBB'],
        key: ({
            A: { item: 'mekanism:ultimate_energy_cube' },
            B: { item: "mekanismsun:advance_induction_casing" },
            C: { item: 'mekanism:induction_port' },
            D: { item: "mekanism_extras:infinite_induction_cell" },
            E: { item: "mekanism_extras:infinite_induction_provider" },
            I: { item: 'avaritia:infinity_ingot' },
            S: { item: "chaosworld_core:dimensional_catalyst" }
        }),
        result: { id: 'mekanism:creative_energy_cube' },
        show_notification: false
    })

    // avaritia:enhancement_core
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['   PPP   ', ' NPCCCPN ', ' PABBBAP ', 'PCBBXBBCP', 'PCBXEXBCP', 'PCBBXBBCP', ' PABBBAP ', ' NPCCCPN ', '   PPP   '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:infinity_nugget' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            E: { item: 'avaritia:endest_pearl' },
            N: { item: 'avaritia:neutron_ingot' },
            P: { item: 'avaritia:neutron_pile' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:enhancement_core' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['   PPP   ', ' NPCCCPN ', ' PABBBAP ', 'PCBBXBBCP', 'PCBXEXBCP', 'PCBBXBBCP', ' PABBBAP ', ' NPCCCPN ', '   PPP   '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:infinity_nugget' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            E: { item: 'avaritia:endest_pearl' },
            N: { item: 'avaritia:neutron_ingot' },
            P: { item: 'avaritia:neutron_pile' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:enhancement_core' },
        show_notification: false
    })

    // avaritia:refined_coal
    event.shaped(
        Item.of('avaritia:refined_coal'),
        ['aaa', 'aba', 'aaa'],
        ({
            a: { item: 'minecraft:coal' },
            b: { item: 'avaritia:neutron_nugget' }
        })
    )

    // avaritia:infinity_axe
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['    II   ', '   II  B ', '  IIIAA  ', '  IIAXA  ', '  I AAII ', '   N  II ', '  N      ', ' N       ', 'A        '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_axe' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['    II   ', '   II  B ', '  IIIAA  ', '  IIAXA  ', '  I AAII ', '   N  II ', '  N      ', ' N       ', 'A        '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_axe' },
        show_notification: false
    })

    // avaritia:blaze_sword
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['   DC', 'A DCD', 'ADCD ', ' ED  ', 'B AA '],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:diamond_lattice' },
            C: { item: 'avaritia:blaze_cube' },
            D: { item: 'minecraft:blaze_powder' },
            E: { item: 'minecraft:soul_soil' }
        }),
        result: { id: 'avaritia:blaze_sword' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['   DC', 'A DCD', 'ADCD ', ' ED  ', 'B AA '],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:diamond_lattice' },
            C: { item: 'avaritia:blaze_cube' },
            D: { item: 'minecraft:blaze_powder' },
            E: { item: 'minecraft:soul_soil' }
        }),
        result: { id: 'avaritia:blaze_sword' },
        show_notification: false
    })

    // avaritia:infinity_umbrella
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' IBNND  C', ' INENNNA ', ' XINNNBN ', '  INNFNND', '   INNNNN', '   NINNGN', '  N  IINB', ' B    XII', 'ACC      '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            D: { item: 'avaritia:neutron_nugget' },
            E: { item: 'minecraft:flint_and_steel' },
            F: { item: 'minecraft:water_bucket' },
            G: { item: 'minecraft:trident' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_nugget' }
        }),
        result: { id: 'avaritia:infinity_umbrella' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' IBNND  C', ' INENNNA ', ' XINNNBN ', '  INNFNND', '   INNNNN', '   NINNGN', '  N  IINB', ' B    XII', 'ACC      '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            D: { item: 'avaritia:neutron_nugget' },
            E: { item: 'minecraft:flint_and_steel' },
            F: { item: 'minecraft:water_bucket' },
            G: { item: 'minecraft:trident' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_nugget' }
        }),
        result: { id: 'avaritia:infinity_umbrella' },
        show_notification: false
    })

    // avaritia:infinity_trident
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['     I  I', '    I  I ', '   CAAI  ', '    AXA I', '    PAAI ', '   N  C  ', '  N      ', ' C       ', 'A        '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            P: { item: 'minecraft:heart_of_the_sea' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_trident' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['     I  I', '    I  I ', '   CAAI  ', '    AXA I', '    PAAI ', '   N  C  ', '  N      ', ' C       ', 'A        '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            P: { item: 'minecraft:heart_of_the_sea' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_trident' },
        show_notification: false
    })

    // avaritia:infinity_hoe
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' IIIIIIAA', '  IIIIAXA', '      AAI', '     N II', '    N    ', '   N     ', '  N      ', ' N       ', 'A        '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_hoe' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' IIIIIIAA', '  IIIIAXA', '      AAI', '     N II', '    N    ', '   N     ', '  N      ', ' N       ', 'A        '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_hoe' },
        show_notification: false
    })

    // avaritia:neutron_ring
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['  aaa  ', ' cbbbc ', 'ab d ba', 'abdedba', 'ab d ba', ' cbbbc ', '  aaa  '],
        key: ({
            a: { item: 'avaritia:neutron_ingot' },
            b: { item: 'avaritia:crystal_matrix_ingot' },
            c: { item: 'avaritia:diamond_lattice_block' },
            d: { item: 'avaritia:endest_pearl' },
            e: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:neutron_ring' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['  aaa  ', ' cbbbc ', 'ab d ba', 'abdedba', 'ab d ba', ' cbbbc ', '  aaa  '],
        key: ({
            a: { item: 'avaritia:neutron_ingot' },
            b: { item: 'avaritia:crystal_matrix_ingot' },
            c: { item: 'avaritia:diamond_lattice_block' },
            d: { item: 'avaritia:endest_pearl' },
            e: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:neutron_ring' },
        show_notification: false
    })

    // avaritia:blaze_shovel
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['   DC', '  DCD', '  AD ', ' E   ', 'B    '],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:diamond_lattice' },
            C: { item: 'avaritia:blaze_cube' },
            D: { item: 'minecraft:blaze_powder' },
            E: { item: 'minecraft:soul_soil' }
        }),
        result: { id: 'avaritia:blaze_shovel' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['   DC', '  DCD', '  AD ', ' E   ', 'B    '],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:diamond_lattice' },
            C: { item: 'avaritia:blaze_cube' },
            D: { item: 'minecraft:blaze_powder' },
            E: { item: 'minecraft:soul_soil' }
        }),
        result: { id: 'avaritia:blaze_shovel' },
        show_notification: false
    })

    // avaritia:crystal_shovel
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['    CCC', '   CCCC', '    CCC', '   B C ', '  B    ', ' B     ', 'A      '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron_ingot' },
            C: { item: 'avaritia:crystal_matrix_ingot' }
        }),
        result: { id: 'avaritia:crystal_shovel' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['    CCC', '   CCCC', '    CCC', '   B C ', '  B    ', ' B     ', 'A      '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron_ingot' },
            C: { item: 'avaritia:crystal_matrix_ingot' }
        }),
        result: { id: 'avaritia:crystal_shovel' },
        show_notification: false
    })

    // avaritia:infinity_ingot
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['NNNNNNNNN', 'NCXXCXXCN', 'NXCCXCCXN', 'NCXXCXXCN', 'NNNNNNNNN'],
        key: ({
            C: { item: 'avaritia:crystal_matrix_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_ingot' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['NNNNNNNNN', 'NCXXCXXCN', 'NXCCXCCXN', 'NCXXCXXCN', 'NNNNNNNNN'],
        key: ({
            C: { item: 'avaritia:crystal_matrix_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_ingot' },
        show_notification: false
    })

    // avaritia:neutron_collector
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['IIQQQQQII', 'I QQQQQ I', 'I  RRR  I', 'C RRRRR C', 'I RRCRR I', 'C RRRRR C', 'I  RRR  I', 'I       I', 'IIICICIII'],
        key: ({
            C: { item: 'avaritia:crystal_matrix_ingot' },
            I: { item: 'minecraft:iron_block' },
            Q: { item: 'minecraft:quartz_block' },
            R: { item: 'minecraft:redstone_block' }
        }),
        result: { id: 'avaritia:neutron_collector' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['IIQQQQQII', 'I QQQQQ I', 'I  RRR  I', 'C RRRRR C', 'I RRCRR I', 'C RRRRR C', 'I  RRR  I', 'I       I', 'IIICICIII'],
        key: ({
            C: { item: 'avaritia:crystal_matrix_ingot' },
            I: { item: 'minecraft:iron_block' },
            Q: { item: 'minecraft:quartz_block' },
            R: { item: 'minecraft:redstone_block' }
        }),
        result: { id: 'avaritia:neutron_collector' },
        show_notification: false
    })

    // avaritia:infinity_boots
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' NNN NNN ', ' NIN NIN ', ' NIN NIN ', 'NNIN NINN', 'NIIN NIIN', 'NNNN NNNN'],
        key: ({
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia:infinity_boots' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' NNN NNN ', ' NIN NIN ', ' NIN NIN ', 'NNIN NINN', 'NIIN NIIN', 'NNNN NNNN'],
        key: ({
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia:infinity_boots' },
        show_notification: false
    })

    // avaritia:blaze_bow
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' ABBA', 'ACDDC', 'BD E ', 'BDE  ', 'AC   '],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:blaze_cube' },
            C: { item: 'avaritia:diamond_lattice' },
            D: { item: 'minecraft:blaze_powder' },
            E: { item: 'minecraft:soul_soil' }
        }),
        result: { id: 'avaritia:blaze_bow' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' ABBA', 'ACDDC', 'BD E ', 'BDE  ', 'AC   '],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:blaze_cube' },
            C: { item: 'avaritia:diamond_lattice' },
            D: { item: 'minecraft:blaze_powder' },
            E: { item: 'minecraft:soul_soil' }
        }),
        result: { id: 'avaritia:blaze_bow' },
        show_notification: false
    })

    // avaritia:nether_crafting_table
    event.shaped(
        Item.of('avaritia:nether_crafting_table'),
        ['cbc', 'dad', 'efe'],
        ({
            a: { item: 'avaritia:double_compressed_crafting_table' },
            b: { item: 'minecraft:respawn_anchor' },
            c: { item: 'minecraft:wither_skeleton_skull' },
            d: { item: 'minecraft:netherrack' },
            e: { item: 'minecraft:netherite_ingot' },
            f: { item: 'minecraft:nether_star' }
        })
    )

    // avaritia:infinity_chestplate
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' NN   NN ', 'NNN   NNN', 'NNN   NNN', ' NIIIIIN ', ' NIIXIIN ', ' NIIIIIN ', ' NIIIIIN ', ' NIIIIIN ', '  NNNNN  '],
        key: ({
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:crystal_matrix' }
        }),
        result: { id: 'avaritia:infinity_chestplate' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' NN   NN ', 'NNN   NNN', 'NNN   NNN', ' NIIIIIN ', ' NIIXIIN ', ' NIIIIIN ', ' NIIIIIN ', ' NIIIIIN ', '  NNNNN  '],
        key: ({
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:crystal_matrix' }
        }),
        result: { id: 'avaritia:infinity_chestplate' },
        show_notification: false
    })

    // avaritia:infinity_sword
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['       II', '      III', '     III ', '  C III  ', 'CCAIII   ', ' CAXI    ', '  NAAC   ', ' N CC    ', 'A   C    '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_sword' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['       II', '      III', '     III ', '  C III  ', 'CCAIII   ', ' CAXI    ', '  NAAC   ', ' N CC    ', 'A   C    '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_sword' },
        show_notification: false
    })

    // avaritia:infinity_shovel
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['      III', '     IIII', '    CIIII', '    ACII ', '   AXAC  ', '   NA    ', '  N      ', ' N       ', 'A        '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_shovel' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['      III', '     IIII', '    CIIII', '    ACII ', '   AXAC  ', '   NA    ', '  N      ', ' N       ', 'A        '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_shovel' },
        show_notification: false
    })

    // avaritia:dense_neutron_collector
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['AAC   CAA', 'AB     BA', 'C DEEED C', '  EGGGE  ', '  EGFGE  ', '  EGGGE  ', 'C DEEED C', 'AB     BA', 'AAC   CAA'],
        key: ({
            A: { item: 'minecraft:ender_pearl' },
            B: { item: 'minecraft:nether_star' },
            C: { item: 'avaritia:diamond_lattice' },
            D: { item: 'avaritia:neutron_ingot' },
            E: { item: 'minecraft:emerald_block' },
            F: { item: 'avaritia:endest_pearl' },
            G: { item: 'avaritia:neutron_collector' }
        }),
        result: { id: 'avaritia:dense_neutron_collector' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['AAC   CAA', 'AB     BA', 'C DEEED C', '  EGGGE  ', '  EGFGE  ', '  EGGGE  ', 'C DEEED C', 'AB     BA', 'AAC   CAA'],
        key: ({
            A: { item: 'minecraft:ender_pearl' },
            B: { item: 'minecraft:nether_star' },
            C: { item: 'avaritia:diamond_lattice' },
            D: { item: 'avaritia:neutron_ingot' },
            E: { item: 'minecraft:emerald_block' },
            F: { item: 'avaritia:endest_pearl' },
            G: { item: 'avaritia:neutron_collector' }
        }),
        result: { id: 'avaritia:dense_neutron_collector' },
        show_notification: false
    })

    // avaritia:crystal_axe
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['  CCC  ', ' CAA D ', ' CAA   ', ' C  AC ', '  B CC ', ' B     ', 'A      '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron_ingot' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            D: { item: 'avaritia:neutron' }
        }),
        result: { id: 'avaritia:crystal_axe' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['  CCC  ', ' CAA D ', ' CAA   ', ' C  AC ', '  B CC ', ' B     ', 'A      '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron_ingot' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            D: { item: 'avaritia:neutron' }
        }),
        result: { id: 'avaritia:crystal_axe' },
        show_notification: false
    })

    // avaritia:blaze_pickaxe
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['DCCCA', ' DDAC', '  ADC', ' E DC', 'B   D'],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:diamond_lattice' },
            C: { item: 'avaritia:blaze_cube' },
            D: { item: 'minecraft:blaze_powder' },
            E: { item: 'minecraft:soul_soil' }
        }),
        result: { id: 'avaritia:blaze_pickaxe' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['DCCCA', ' DDAC', '  ADC', ' E DC', 'B   D'],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:diamond_lattice' },
            C: { item: 'avaritia:blaze_cube' },
            D: { item: 'minecraft:blaze_powder' },
            E: { item: 'minecraft:soul_soil' }
        }),
        result: { id: 'avaritia:blaze_pickaxe' },
        show_notification: false
    })

    // avaritia:infinity_upgrade
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' aaadaaa ', 'baeegeea ', 'baegggea ', 'bdiegeid ', 'bdfehefdc', ' diegeidc', ' aedgdeac', ' aeegeeac', ' aaadaaa '],
        key: ({
            a: { item: 'avaritia:neutron' },
            b: { item: 'avaritia:blaze_cube_block' },
            c: { item: 'avaritia:crystal_matrix_ingot' },
            d: { item: 'avaritia:neutron_ingot' },
            e: { item: 'avaritia:neutron_gear' },
            f: { item: 'avaritia:infinity_catalyst' },
            g: { item: 'avaritia:star_fuel' },
            h: { item: 'avaritia:eternal_singularity' },
            i: { item: 'avaritia:neutron_nugget' }
        }),
        result: { id: 'avaritia:infinity_upgrade' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' aaadaaa ', 'baeegeea ', 'baegggea ', 'bdiegeid ', 'bdfehefdc', ' diegeidc', ' aedgdeac', ' aeegeeac', ' aaadaaa '],
        key: ({
            a: { item: 'avaritia:neutron' },
            b: { item: 'avaritia:blaze_cube_block' },
            c: { item: 'avaritia:crystal_matrix_ingot' },
            d: { item: 'avaritia:neutron_ingot' },
            e: { item: 'avaritia:neutron_gear' },
            f: { item: 'avaritia:infinity_catalyst' },
            g: { item: 'avaritia:star_fuel' },
            h: { item: 'avaritia:eternal_singularity' },
            i: { item: 'avaritia:neutron_nugget' }
        }),
        result: { id: 'avaritia:infinity_upgrade' },
        show_notification: false
    })

    // avaritia:crystal_hoe
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['CAAAAA ', ' CCCA A', '     AA', '   B CA', '  B   C', ' B     ', 'A      '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron_ingot' },
            C: { item: 'avaritia:crystal_matrix_ingot' }
        }),
        result: { id: 'avaritia:crystal_hoe' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['CAAAAA ', ' CCCA A', '     AA', '   B CA', '  B   C', ' B     ', 'A      '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron_ingot' },
            C: { item: 'avaritia:crystal_matrix_ingot' }
        }),
        result: { id: 'avaritia:crystal_hoe' },
        show_notification: false
    })

    // avaritia:infinity_mace
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['     CC C', '    CIIC ', '    CIMIC', '     CIIC', '    N CC ', '   D     ', '  N      ', ' N       ', 'C        '],
        key: ({
            C: { item: 'avaritia:crystal_matrix_ingot' },
            D: { item: 'minecraft:breeze_rod' },
            I: { item: 'avaritia:infinity_nugget' },
            M: { item: 'minecraft:heavy_core' },
            N: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia:infinity_mace' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['     CC C', '    CIIC ', '    CIMIC', '     CIIC', '    N CC ', '   D     ', '  N      ', ' N       ', 'C        '],
        key: ({
            C: { item: 'avaritia:crystal_matrix_ingot' },
            D: { item: 'minecraft:breeze_rod' },
            I: { item: 'avaritia:infinity_nugget' },
            M: { item: 'minecraft:heavy_core' },
            N: { item: 'avaritia:neutron_ingot' }
        }),
        result: { id: 'avaritia:infinity_mace' },
        show_notification: false
    })

    // avaritia:infinity_helmet
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['  NNNNN  ', ' NIIIIIN ', ' N XIX N ', ' NIIIIIN ', ' NIIIIIN ', ' NI I IN ', '         ', '         ', '         '],
        key: ({
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_helmet' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['  NNNNN  ', ' NIIIIIN ', ' N XIX N ', ' NIIIIIN ', ' NIIIIIN ', ' NI I IN ', '         ', '         ', '         '],
        key: ({
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_helmet' },
        show_notification: false
    })

    // avaritia:infinity_pickaxe
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' IIIIII B', '    IIAA ', '     AXAI', '     AAII', '    N  II', '   N    I', '  N     I', ' N      I', 'A        '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_pickaxe' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' IIIIII B', '    IIAA ', '     AXAI', '     AAII', '    N  II', '   N    I', '  N     I', ' N      I', 'A        '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_pickaxe' },
        show_notification: false
    })

    // avaritia:extreme_smithing_table
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['aaaaaaaaa', 'bccfgfccb', 'bcdhhhdcb', 'lfhijihfl', 'eghjkjhge', 'lfhijihfl', 'bcdhhhdcb', 'bccfgfccb', 'bleeeeelb'],
        key: ({
            a: { item: 'avaritia:neutron' },
            b: { item: 'avaritia:neutron_ingot' },
            c: { item: 'avaritia:diamond_lattice' },
            d: { item: 'avaritia:blaze_cube' },
            e: { item: 'avaritia:crystal_matrix' },
            f: { item: 'avaritia:infinity_nugget' },
            g: { item: 'avaritia:infinity_ingot' },
            h: { item: 'avaritia:neutron_gear' },
            i: { item: 'avaritia:infinity_catalyst' },
            j: { item: 'minecraft:smithing_table' },
            k: { item: 'avaritia:extreme_crafting_table' },
            l: { item: 'avaritia:crystal_matrix_ingot' }
        }),
        result: { id: 'avaritia:extreme_smithing_table' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['aaaaaaaaa', 'bccfgfccb', 'bcdhhhdcb', 'lfhijihfl', 'eghjkjhge', 'lfhijihfl', 'bcdhhhdcb', 'bccfgfccb', 'bleeeeelb'],
        key: ({
            a: { item: 'avaritia:neutron' },
            b: { item: 'avaritia:neutron_ingot' },
            c: { item: 'avaritia:diamond_lattice' },
            d: { item: 'avaritia:blaze_cube' },
            e: { item: 'avaritia:crystal_matrix' },
            f: { item: 'avaritia:infinity_nugget' },
            g: { item: 'avaritia:infinity_ingot' },
            h: { item: 'avaritia:neutron_gear' },
            i: { item: 'avaritia:infinity_catalyst' },
            j: { item: 'minecraft:smithing_table' },
            k: { item: 'avaritia:extreme_crafting_table' },
            l: { item: 'avaritia:crystal_matrix_ingot' }
        }),
        result: { id: 'avaritia:extreme_smithing_table' },
        show_notification: false
    })

    // avaritia:blaze_axe
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['  DDA', ' DCA ', ' DACD', ' E DD', 'B    '],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:diamond_lattice' },
            C: { item: 'avaritia:blaze_cube' },
            D: { item: 'minecraft:blaze_powder' },
            E: { item: 'minecraft:soul_soil' }
        }),
        result: { id: 'avaritia:blaze_axe' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['  DDA', ' DCA ', ' DACD', ' E DD', 'B    '],
        key: ({
            A: { item: 'minecraft:bone_block' },
            B: { item: 'avaritia:diamond_lattice' },
            C: { item: 'avaritia:blaze_cube' },
            D: { item: 'minecraft:blaze_powder' },
            E: { item: 'minecraft:soul_soil' }
        }),
        result: { id: 'avaritia:blaze_axe' },
        show_notification: false
    })

    // avaritia:blaze_cube
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [' bcb ', 'byxyb', 'cxaxc', 'byxyb', ' bcb '],
        key: ({
            a: { item: 'minecraft:ancient_debris' },
            b: { item: "rainbowcompound:blazeite_ingot" },
            c: { item: 'minecraft:fire_charge' },
            x: { item: 'minecraft:blaze_rod' },
            y: { item: 'minecraft:bone' }
        }),
        result: { id: 'avaritia:blaze_cube' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [' bcb ', 'byxyb', 'cxaxc', 'byxyb', ' bcb '],
        key: ({
            a: { item: 'minecraft:ancient_debris' },
            b: { item: "rainbowcompound:blazeite_ingot" },
            c: { item: 'minecraft:fire_charge' },
            x: { item: 'minecraft:blaze_rod' },
            y: { item: 'minecraft:bone' }
        }),
        result: { id: 'avaritia:blaze_cube' },
        show_notification: false
    })

    // avaritia:infinity_pants
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['NNNNNNNNN', 'NIIIXIIIN', 'NINNXNNIN', 'NIN   NIN', 'NCN   NCN', 'NIN   NIN', 'NIN   NIN', 'NIN   NIN', 'NNN   NNN'],
        key: ({
            C: { item: 'avaritia:crystal_matrix_ingot' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_pants' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['NNNNNNNNN', 'NIIIXIIIN', 'NINNXNNIN', 'NIN   NIN', 'NCN   NCN', 'NIN   NIN', 'NIN   NIN', 'NIN   NIN', 'NNN   NNN'],
        key: ({
            C: { item: 'avaritia:crystal_matrix_ingot' },
            I: { item: 'avaritia:infinity_ingot' },
            N: { item: 'avaritia:neutron_ingot' },
            X: { item: 'avaritia:infinity_catalyst' }
        }),
        result: { id: 'avaritia:infinity_pants' },
        show_notification: false
    })

    // avaritia:crystal_bow
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: ['  CDAAC', '   CCCD', 'C A  B ', 'DC  B  ', 'AC B   ', 'ACB    ', 'CD     '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron_ingot' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            D: { item: 'avaritia:diamond_lattice' }
        }),
        result: { id: 'avaritia:crystal_bow' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: ['  CDAAC', '   CCCD', 'C A  B ', 'DC  B  ', 'AC B   ', 'ACB    ', 'CD     '],
        key: ({
            A: { item: 'avaritia:crystal_matrix' },
            B: { item: 'avaritia:neutron_ingot' },
            C: { item: 'avaritia:crystal_matrix_ingot' },
            D: { item: 'avaritia:diamond_lattice' }
        }),
        result: { id: 'avaritia:crystal_bow' },
        show_notification: false
    })
    //添加有序合成"苦难核心"配方
    event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            ' AA AA ',
            'ABCACCA',
            'ABCDCCA',
            'ABDEDCA',
            ' AFDFA ',
            '  AGA  ',
            '   A   '
        ],
        key: ({
            A: { item: 'chaosworld_core:ingot_tech_2' },
            B: { item: 'naturesaura:token_rage' },
            C: { item: 'twilightforest:fiery_ingot' },
            D: { item: "aoa3:wither_rune" },
            E: { item: 'naturesaura:fortress_finder' },
            F: { item: 'naturesaura:token_fear' },
            G: { item: 'avaritia_expand:blaze_totem' }
        }),
        result: { id: 'chaosworld_core:cryptid_core' }
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        pattern: [
            ' AA AA ',
            'ABCACCA',
            'ABCDCCA',
            'ABDEDCA',
            ' AFDFA ',
            '  AGA  ',
            '   A   '
        ],
        key: ({
            A: { item: 'chaosworld_core:ingot_tech_2' },
            B: { item: 'naturesaura:token_rage' },
            C: { item: 'twilightforest:fiery_ingot' },
            D: { item: "aoa3:wither_rune" },
            E: { item: 'naturesaura:fortress_finder' },
            F: { item: 'naturesaura:token_fear' },
            G: { item: 'avaritia_expand:blaze_totem' }
        }),
        result: { id: 'chaosworld_core:cryptid_core' },
        show_notification: false
    })
    //添加有序合成"反应仓"配方
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "ABCBA",
            "ADEDA",
            "FBGBF",
            "FFFFF"
        ],
        "key": {
            "A": {"item": "ae2:quartz_vibrant_glass"},
            "B": {"item": "mekanism:advanced_control_circuit"},
            "C": {"item": "ae2:crafting_unit"},
            "D": {"item": "mekanism:basic_fluid_tank"},
            "E": {"item": "industrialforegoing:machine_frame_simple"},
            "F": {"item": "neoecoae:energized_fluix_crystal_block"},
            "G": {"item": "ae2:energy_acceptor" }
        },
        "result": {"id": "advanced_ae:reaction_chamber"}
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        "pattern": [
            "AAAAA",
            "ABCBA",
            "ADEDA",
            "FBGBF",
            "FFFFF"
        ],
        key: ({
            "A": {"item": "ae2:quartz_vibrant_glass"},
            "B": {"item": "mekanism:advanced_control_circuit"},
            "C": {"item": "ae2:crafting_unit"},
            "D": {"item": "mekanism:basic_fluid_tank"},
            "E": {"item": "industrialforegoing:machine_frame_simple"},
            "F": {"item": "neoecoae:energized_fluix_crystal_block"},
            "G": {"item": "ae2:energy_acceptor" }
        }),
        result: { id: "advanced_ae:reaction_chamber" },
        show_notification: false
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "ABCBA",
            "ABDBA",
            "AEEEA",
            "AFFFA"
        ],
        "key": {
            "A": {"item": "chaosworld_core:tech_3_block"},
            "B": {"item": "extendedae:machine_frame"},
            "C": {"item": "chaosworld_core:microprocessor"},
            "D": {"item": "immersiveengineering:rs_engineering"},
            "E": {"item": "immersiveengineering:heavy_engineering"},
            "F": {"item": "immersiveengineering:drillhead_steel" }
        },
        "result": {"id": "chaosworld_core:vein_drill"}
        })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        "pattern": [
            "AAAAA",
            "ABCBA",
            "ABDBA",
            "AEEEA",
            "AFFFA"
        ],
        key: ({
            "A": {"item": "chaosworld_core:tech_3_block"},
            "B": {"item": "extendedae:machine_frame"},
            "C": {"item": "chaosworld_core:microprocessor"},
            "D": {"item": "immersiveengineering:rs_engineering"},
            "E": {"item": "immersiveengineering:heavy_engineering"},
            "F": {"item": "immersiveengineering:drillhead_steel" }
        }),
        result: { id: "chaosworld_core:vein_drill" },
        show_notification: false
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAAAA",
            "ABBCBBA",
            "ABDEDBA",
            "ACFGFCA",
            "ABDFDBA",
            "HBBCBBH",
            "HHHHHHH"
        ],
        "key": {
            "A": {"item": "mekanism:induction_casing"},
            "B": {"item": "minecraft:reinforced_deepslate"},
            "C": {"item": "ae2lt:dense_topological_lattice"},
            "D": {"item": "chaosworld_core:gear_tech_5"},
            "E": {"item": "minecraft:dragon_egg"},
            "F": {"item": "extendedae:crystal_assembler"},
            "G": {"item": "industrialforegoing:machine_frame_supreme"},
            "H": {"item": "ae2lt:tianshu_supercomputer_casing" }
        },
        "result": {"id": "ifeu:arcane_dragon_egg_forging"}
        })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        "pattern": [
            "AAAAAAA",
            "ABBCBBA",
            "ABDEDBA",
            "HCFGFCH",
            "ABDFDBA",
            "HBBCBBH",
            "HHHHHHH"
        ],
        key: ({
            "A": {"item": "mekanism:induction_casing"},
            "B": {"item": "minecraft:reinforced_deepslate"},
            "C": {"item": "ae2lt:dense_topological_lattice"},
            "D": {"item": "chaosworld_core:gear_tech_5"},
            "E": {"item": "minecraft:dragon_egg"},
            "F": {"item": "extendedae:crystal_assembler"},
            "G": {"item": "industrialforegoing:machine_frame_supreme"},
            "H": {"item": "ae2lt:tianshu_supercomputer_casing" }
        }),
        result: { id: "ifeu:arcane_dragon_egg_forging" },
        show_notification: false
    })
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "BDEDB",
            "CFGFC",
            "BDEDB",
            "ABCBA"
        ],
        "key": {
            "A": {"item": "actuallyadditions:iron_casing"},
            "B": {"item": "ae2:quartz_glass"},
            "C": {"item": "actuallyadditions:display_stand"},
            "D": {"item": "powah:dielectric_casing"},
            "E": {"item": "powah:dielectric_rod"},
            "F": {"item": "powah:dielectric_rod_horizontal"},
            "G": {"item": "actuallyadditions:empowerer" }
        },
        "result": {"id": "powah:energizing_orb"}
        })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        "pattern": [
            "ABCBA",
            "BDEDB",
            "CFGFC",
            "BDEDB",
            "ABCBA"
        ],
        "key": {
            "A": {"item": "actuallyadditions:iron_casing"},
            "B": {"item": "ae2:quartz_glass"},
            "C": {"item": "actuallyadditions:display_stand"},
            "D": {"item": "powah:dielectric_casing"},
            "E": {"item": "powah:dielectric_rod"},
            "F": {"item": "powah:dielectric_rod_horizontal"},
            "G": {"item": "actuallyadditions:empowerer" }
        },
        result: { id: "powah:energizing_orb" },
        show_notification: false
    })
    // chaosworld_core:twilight_catalyst
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "BCBCB",
            "BCDCB",
            "ABEBA",
            "AABAA"
        ],
        "key": {
            "A": {"item": "ars_nouveau:source_gem"},
            "B": {"item": "extendedcrafting:luminessence"},
            "C": {"item": "minecraft:diamond"},
            "D": {"item": "minecraft:ender_eye"},
            "E": {"item": "actuallyadditions:emeradic_crystal"}
        },
        "result": {"id": "chaosworld_core:twilight_catalyst"}
    })
    event.custom({
        type: 'create:mechanical_crafting',
        accept_mirrored: false,
        category: 'misc',
        "pattern": [
            "ABCBA",
            "BCBCB",
            "BCDCB",
            "ABEBA",
            "AABAA"
        ],
        key: ({
            "A": {"item": "ars_nouveau:source_gem"},
            "B": {"item": "extendedcrafting:luminessence"},
            "C": {"item": "minecraft:diamond"},
            "D": {"item": "minecraft:ender_eye"},
            "E": {"item": "actuallyadditions:emeradic_crystal"}
        }),
        result: { id: "chaosworld_core:twilight_catalyst" },
        show_notification: false
    })
})

