ServerEvents.recipes(event => {
    let recipeTypeshapeless = [
        'industrialforegoing:dissolution_chamber/xp_bottles',
        'megacells:cells/standard/radioactive_chemical_cell',
        'recipe_integration:create/milling/stellaris/venus_sandstone',
        'quark:building/crafting/compressed/charcoal_block',
        'mekanism:processing/netherite/scrap_to_dust',
        'minecraft:netherite_ingot',
        'enderio:alloy_smelting/redstone_alloy_ingot',
        'avaritia:ancient_debris_eight',
        'avaritia:eternal_singularity',
        'immersiveengineering:crafting/treated_wood_horizontal',
        'extendedcrafting:black_iron_ingot',
        'immersiveengineering:blueprint/electron_tube',
        'enderio:sag_milling/glass',
        'createaddition:mixing/bioethanol',
        'enderio:fire_crafting/bedrock_infinity',
        'enderio:ensouled_chassis',
        'enderio:void_chassis', 
        'enderio:fire_crafting/deepslate_infinity',
        'mekanism:steel_casing',
        'extendedcrafting:enhanced_redstone_ingot',
        'fluxnetworks:flux_controller',
        'fluxnetworks:flux_point',
        'fluxnetworks:flux_plug',
        "enderio:alloy_smelting/soularium_ingot",
        'extendedcrafting:luminessence',
        'alltheores:alloy_smelting/lumium_ingot',
        'extendedcrafting:ender_ingot',
        'extendedcrafting:ender_ingot_block_uncraft',
        'extendedcrafting:ender_ingot_recraft',
        'alltheores:arcfurnace/enderium/ingot',
        'alltheores:alloy_smelting/enderium_ingot',
        'mysticalagriculture:essence/enderio/copper_alloy_ingot',
        'mekanism:control_circuit/infused_advanced',
        'enderio:alloy_smelting/vibrant_alloy_ingot',
        'enderio_evolution:alloy_smelter/crystalline_alloy_ingot',
        'enderio_evolution:alloy_smelter/crystalline_alloy_ingot_from_vibrant',
        'ae2cs:aggregator/machine_frame_from_entro_ingot',
        'ae2cs:aggregator/machine_frame_from_pure_entro_crystal',
        'mekanism:chemical_conversion/diamond/from_dust',
        'mekanism:oxidizing/diamond/from_dust',
        'mekanism:control_circuit/infused_elite',
        'avaritia:diamond_lattice_normal',
        'ae2lt:silicon_block',
        'ae2cs:craft/shaped/silicon_block_from_silicon',
        'ae2cs:craft/shapeless/silicon_from_silicon_block',
        'ae2lt:silicon_decompress',
        'ae2:network/blocks/crystal_processing_charger',
        'ae2cs:mechanical_crafting/rose_quartz_seed',
        'mekanismgenerators:generator/wind',
        'ekmm:/replicator/ae2cs_certus_quartz_ore',
        'ekmm:/replicator/ae2cs_deepslate_certus_quartz_ore',
        'ekmm:/replicator/ae2cs_charged_certus_quartz_ore',
        'ekmm:/replicator/ae2cs_deepslate_charged_certus_quartz_ore'
    ]
    recipeTypeshapeless.forEach((item) => {
        event.remove({ id: item })
    })

    let removeByIdPattern = [
        'fluid_crafting_table', 
        
        
    ]
    event.forEachRecipe({ mod: 'industrialforegoing' }, recipe => {
        let rid = recipe.getId().toString()
        removeByIdPattern.forEach(pattern => {
            if (rid.includes(pattern)) {
                event.remove({ id: recipe.getId() })
            }
        })
    })
})