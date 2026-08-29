ServerEvents.recipes(event => {
    let recipeTypeall = [
        'extendedcrafting:redstone_ingot',
        '#c:plates',
        "minecraft:netherite_ingot",
        '#c:dusts',
        "extendedcrafting:advanced_catalyst",
        "immersiveengineering:blastbrick_reinforced",
        "industrialforegoing:machine_frame_pity",
        "pneumaticcraft:reinforced_stone",
        "pneumaticcraft:pressure_chamber_interface",
        "mekanism:metallurgic_infuser",
        "extendedcrafting:flux_crafter",
        "extendedcrafting:flux_alternator",
        "fluxnetworks:flux_core",
        "fluxnetworks:flux_block",
        "enderio:soul_binder",
        "extendedae:machine_frame",
        "extendedae:crystal_assembler",
        "extendedae:entro_seed",
        "ae2cs:crystal_growth_chamber",
        "extendedcrafting:elite_catalyst",
        "chaosworld_core:dark_matter",
        "data_energistics:data_reassembler",
        'ae2:charger',
        "ae2:inscriber",
        "mekanismgenerators:wind_generator",
        "mekanism:energy_tablet",
        "mekanism:basic_universal_cable",
        "mekanismgenerators:heat_generator",
        "ae2:crafting_terminal",
        "minecraft:ender_eye",
        "mekanism:energized_smelter",
        "advanced_ae:reaction_chamber",
        "powah:dielectric_paste",
        "ifeu:arcane_dragon_egg_forging"

        
        
    ]
    recipeTypeall.forEach((item) => {
        event.remove({ output: item, type: 'minecraft:crafting_shaped' })
        event.remove({ output: item, type: 'minecraft:crafting_shapeless' })
    })

    let recipeTypeshaped = [
        "mekanism:basic_fluid_tank",
        "enderio:pulsating_crystal",
        "ae2omnicells:omni_cell_component_1k",
        "ae2omnicells:omni_cell_component_4k",
        "ae2omnicells:omni_cell_component_16k",
        "ae2omnicells:omni_cell_component_64k",
        "ae2omnicells:omni_cell_component_256k",
        "powah:dielectric_rod",
        "powah:dielectric_rod_horizontal"
        
    ]
    recipeTypeshaped.forEach((item) => {
        event.remove({ output: item, type: 'minecraft:crafting_shaped' })
    })

    let coinItems = [
        'coinsje:copper_coin',
        'coinsje:iron_coin',
        'coinsje:gold_coin',
        'coinsje:diamond_coin',
        'coinsje:netherite_coin'
    ]
    coinItems.forEach((item) => {
        event.remove({ output: item, type: 'minecraft:smelting' })
        event.remove({ output: item, type: 'minecraft:blasting' })
    })
})