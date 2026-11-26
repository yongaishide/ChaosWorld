ServerEvents.recipes(event => {
    // ------------------------------------------------------------
    // 燃料白名单：合并自 12 个 jar 的 data_maps/item/furnace_fuels.json
    //   justdirethings / ProjectE / Mekanism / AstralSorcery / actuallyadditions /
    //   occultism / twilightforest），已剔除 remove 列表里的项。
    // 由脚本自动生成，不要手改；mods 增删后重新生成即可。
    // ------------------------------------------------------------
    const FUEL_INGREDIENT = [
        { item: 'actuallyadditions:tiny_charcoal' },
        { item: 'actuallyadditions:tiny_coal' },
        { item: 'allthecompressed:blaze_rod_block' },
        { item: 'allthecompressed:blaze_rod_block_1x' },
        { item: 'allthecompressed:blaze_rod_block_2x' },
        { item: 'allthecompressed:blaze_rod_block_3x' },
        { item: 'allthecompressed:blaze_rod_block_4x' },
        { item: 'allthecompressed:blaze_rod_block_5x' },
        { item: 'allthecompressed:coal_block_1x' },
        { item: 'allthecompressed:coal_block_2x' },
        { item: 'allthecompressed:coal_block_3x' },
        { item: 'allthecompressed:coal_block_4x' },
        { item: 'allthecompressed:coal_block_5x' },
        { item: 'astralsorcery:infused_wood_slab' },
        { item: 'astralsorcery:infused_wood_stairs' },
        { item: 'create:blaze_cake' },
        { item: 'create:bound_cardboard_block' },
        { item: 'create:cardboard' },
        { item: 'create:cardboard_block' },
        { item: 'create:cardboard_boots' },
        { item: 'create:cardboard_chestplate' },
        { item: 'create:cardboard_helmet' },
        { item: 'create:cardboard_leggings' },
        { item: 'create:cardboard_sword' },
        { item: 'create:creative_blaze_cake' },
        { item: 'farmersdelight:bamboo_basket' },
        { item: 'farmersdelight:canvas' },
        { item: 'farmersdelight:canvas_rug' },
        { item: 'farmersdelight:cutting_board' },
        { item: 'farmersdelight:full_tatami_mat' },
        { item: 'farmersdelight:half_tatami_mat' },
        { item: 'farmersdelight:rope' },
        { item: 'farmersdelight:rope_fence' },
        { item: 'farmersdelight:rope_fence_gate' },
        { item: 'farmersdelight:safety_net' },
        { item: 'farmersdelight:straw' },
        { item: 'farmersdelight:straw_bale' },
        { item: 'farmersdelight:tatami' },
        { item: 'farmersdelight:tree_bark' },
        { item: 'farmersdelight:wooden_basket' },
        { item: 'justdirethings:charcoal' },
        { item: 'justdirethings:coal_t1' },
        { item: 'justdirethings:coal_t2' },
        { item: 'justdirethings:coal_t3' },
        { item: 'justdirethings:coal_t4' },
        { item: 'justdirethings:coalblock_t1' },
        { item: 'justdirethings:coalblock_t2' },
        { item: 'justdirethings:coalblock_t3' },
        { item: 'justdirethings:coalblock_t4' },
        { item: 'mekanism:bio_fuel' },
        { item: 'mekanism:block_bio_fuel' },
        { item: 'mekanism:block_charcoal' },
        { item: 'minecraft:azalea' },
        { item: 'minecraft:bamboo' },
        { item: 'minecraft:bamboo_mosaic' },
        { item: 'minecraft:bamboo_mosaic_slab' },
        { item: 'minecraft:bamboo_mosaic_stairs' },
        { item: 'minecraft:barrel' },
        { item: 'minecraft:blaze_rod' },
        { item: 'minecraft:bookshelf' },
        { item: 'minecraft:bow' },
        { item: 'minecraft:bowl' },
        { item: 'minecraft:cartography_table' },
        { item: 'minecraft:charcoal' },
        { item: 'minecraft:chest' },
        { item: 'minecraft:chiseled_bookshelf' },
        { item: 'minecraft:coal' },
        { item: 'minecraft:coal_block' },
        { item: 'minecraft:composter' },
        { item: 'minecraft:crafting_table' },
        { item: 'minecraft:crossbow' },
        { item: 'minecraft:daylight_detector' },
        { item: 'minecraft:dead_bush' },
        { item: 'minecraft:dried_kelp_block' },
        { item: 'minecraft:fishing_rod' },
        { item: 'minecraft:fletching_table' },
        { item: 'minecraft:flowering_azalea' },
        { item: 'minecraft:jukebox' },
        { item: 'minecraft:ladder' },
        { item: 'minecraft:lava_bucket' },
        { item: 'minecraft:lectern' },
        { item: 'minecraft:loom' },
        { item: 'minecraft:mangrove_roots' },
        { item: 'minecraft:note_block' },
        { item: 'minecraft:scaffolding' },
        { item: 'minecraft:smithing_table' },
        { item: 'minecraft:stick' },
        { item: 'minecraft:trapped_chest' },
        { item: 'minecraft:wooden_axe' },
        { item: 'minecraft:wooden_hoe' },
        { item: 'minecraft:wooden_pickaxe' },
        { item: 'minecraft:wooden_shovel' },
        { item: 'minecraft:wooden_sword' },
        { item: 'occultism:mining_dim_core' },
        { item: 'projecte:aeternalis_fuel' },
        { item: 'projecte:aeternalis_fuel_block' },
        { item: 'projecte:alchemical_coal' },
        { item: 'projecte:alchemical_coal_block' },
        { item: 'projecte:mobius_fuel' },
        { item: 'projecte:mobius_fuel_block' },
        { tag: 'astralsorcery:infused_woods' },
        { tag: 'farmersdelight:cabinets/wooden' },
        { tag: 'minecraft:bamboo_blocks' },
        { tag: 'minecraft:banners' },
        { tag: 'minecraft:boats' },
        { tag: 'minecraft:fence_gates' },
        { tag: 'minecraft:hanging_signs' },
        { tag: 'minecraft:logs' },
        { tag: 'minecraft:planks' },
        { tag: 'minecraft:saplings' },
        { tag: 'minecraft:signs' },
        { tag: 'minecraft:wooden_buttons' },
        { tag: 'minecraft:wooden_doors' },
        { tag: 'minecraft:wooden_fences' },
        { tag: 'minecraft:wooden_pressure_plates' },
        { tag: 'minecraft:wooden_slabs' },
        { tag: 'minecraft:wooden_stairs' },
        { tag: 'minecraft:wooden_trapdoors' },
        { tag: 'minecraft:wool' },
        { tag: 'minecraft:wool_carpets' },
        { tag: 'twilightforest:banisters' }
    ]

    // 配方 1：铁锭 -> 铁粒，允许被并行
    //   heat = 最低炉温，单位 K（MMCR 原生热量，1 °C = 273.15 K）
    event.custom({
        type: 'mmcr:machine_recipe',                       // 必须是该配方类型
        recipe_pool: 'mmcr_kubejs:kubejs_blast_furnace',   // 必须是机器声明过的配方池
        tick_time: 100,                                    // 耗时（tick），必须 >= 1
        parallelized: true,                                // 允许并行倍率
        requirements: [
            {
                type: 'mekanism:temperature',              // 需求类型：最低温度
                io: 'input',
                value: 673                                 // 673 K = 400 °C
            },
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'minecraft:iron_ingot' },    // Ingredient 对象
                count: 1
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: { id: 'minecraft:iron_nugget', count: 10 } // 输出用 ItemStack 对象
            }
        ]
    }).id('mmcr_kubejs:blast_furnace_1')

    // 配方 2：金锭 -> 金粒，未声明 parallelized，默认不允许并行
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'mmcr_kubejs:kubejs_blast_furnace',
        tick_time: 100,
        requirements: [
            { type: 'mekanism:temperature', io: 'input', value: 1073 },  // 1073 K = 800 °C
            { type: 'minecraft:item', io: 'input', item: { item: 'minecraft:gold_ingot' }, count: 1 },
            { type: 'minecraft:item', io: 'output', stack: { id: 'minecraft:gold_nugget', count: 10 } }
        ]
    }).id('mmcr_kubejs:blast_furnace_2')

    // 配方 3：燃料 —— 吃燃料、把热量输出给整台机器（炉温就是这些热量顶起来的），时长运行时改写
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'mmcr_kubejs:kubejs_blast_furnace',
        tick_time: 100,                                    // 占位值，beforeStart 会改写
        requirements: [
            {
                type: 'mekanism:heat',                     // 需求类型：热量输出
                io: 'output',
                value: 150                                  
            },
            {
                type: 'minecraft:item',
                io: 'input',
                item: FUEL_INGREDIENT,
                count: 1
            }
        ]
    }).id('mmcr_kubejs:blast_furnace_fuel')
})
