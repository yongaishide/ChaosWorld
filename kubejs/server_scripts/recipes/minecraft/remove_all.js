ServerEvents.recipes(event => {
    //删除所有配方
    let recipeTypeallremove = [
        'structurecompass:structure_compass',
        'avaritia:sculk_crafting_table',
        'avaritia:nether_crafting_table',
        'avaritia:end_crafting_table',
        "avaritia:nether_crafting_table",
        'avaritia:extreme_crafting_table',
        "avaritia:upgrade_smithing_template",
        "extendedae:mddyue",
        "minecraft:furnace",
        'extendedcrafting:basic_table', 
        'extendedcrafting:advanced_table', 
        'extendedcrafting:elite_table', 
        'extendedcrafting:ultimate_table',
        "avaritia_expand:singularity_stew",
        "avaritia:eternal_singularity",
        'immersiveengineering:cokebrick',
        'immersiveengineering:hempcrete',
        'immersiveengineering:blastbrick',
        'immersiveengineering:alloybrick',
        'immersiveengineering:rs_engineering',
        'immersiveengineering:heavy_engineering',
        'immersiveengineering:light_engineering',
        'actuallyadditions:iron_casing',
        "actuallyadditions:lens_of_the_miner",
        "industrialforegoing:mob_crusher",
        "industrialforegoing:mob_slaughter_factory",
        "data_energistics:data_carrier",
        "appliedas:lumen_cell_housing"
    ]

    // 注意：不能只写 { output: item }。
    // 这样 KubeJS 要对每一条配方解析产物，碰到 Tinkers 浇筑配方（产物是标签优选
    // TagPreference）时会去读 Mantle 配置，抛出
    //   java.lang.IllegalStateException: Cannot get config value before config is loaded.
    // 整次 remove（以及这个脚本后面的内容）都会被中断。
    // 所以一律用「配方类型 + 产物」过滤，让 KubeJS 在算产物之前就按类型筛掉浇筑配方。
    const CRAFTING_TYPES = [
        'minecraft:crafting_shaped',
        'minecraft:crafting_shapeless',
        'minecraft:smelting',
        'minecraft:blasting',
        'minecraft:smoking',
        'minecraft:campfire_cooking',
        'minecraft:stonecutting',
        'minecraft:smithing_transform',
        'minecraft:smithing_trim'
    ]

	recipeTypeallremove.forEach((item) => {
        CRAFTING_TYPES.forEach((type) => {
            event.remove({ type: type, output: item })
        })
	})
})
