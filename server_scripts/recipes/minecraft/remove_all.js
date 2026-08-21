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
        "industrialforegoing:mob_slaughter_factory"
    ]

	recipeTypeallremove.forEach((item) => {
        event.remove({ output: item })
	})
})
