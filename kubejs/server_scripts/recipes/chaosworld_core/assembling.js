ServerEvents.recipes((event) => {
    //装配
    //微型集群处理器
    event.custom(
        {"type": "chaosworld_core:assembling",
            "itemInputs": [
                {"ingredient":{"item":"chaosworld_core:circuit_processor"},"count":2},
                {"ingredient":{"item":"chaosworld_core:plate_tech_4"},"count":4},
                {"ingredient":{"item":"extendedae_plus:lattra_dust"},"count":16},
                {"ingredient":{"item":"extendedae:concurrent_processor"},"count":8},
                {"ingredient":{"item":"ae2:purple_glass_cable"},"count":32}
            ],
            "chemicalInput": {"chemical": "mekanism:osmium", "amount": 800},
            "fluidInputs": [
                {"fluid": "advanced_ae:quantum_infusion_source", "amount": 500}
            ],
            "output": {"id": "chaosworld_core:assembly"}}
    )
    //微型处理器
    event.custom(
        {"type": "chaosworld_core:assembling",
            "itemInputs": [
                {"ingredient":{"item":"mekanism:advanced_control_circuit"},"count":3},
                {"ingredient":{"item":"chaosworld_core:ingot_tech_3"},"count":4},
                {"ingredient":{"item":"extendedae_plus:lattra_dust"},"count":16},
                {"ingredient":{"item":"extendedae:concurrent_processor"},"count":8},
                {"ingredient":{"item":"ae2omnicells:omni_link_processor"},"count":8},
                {"ingredient":{"item":"ae2:purple_glass_cable"},"count":32}
            ],
            "chemicalInput": {"chemical": "mekanism:osmium", "amount": 800},
            "fluidInputs": [
                {"fluid": "advanced_ae:quantum_infusion_source", "amount": 500}
            ],
            "output": {"id": "chaosworld_core:circuit_processor"}}
    )
    //纳米集群处理器
    event.custom(
        {"type": "chaosworld_core:assembling",
            "itemInputs": [
                {"ingredient":{"item":"chaosworld_core:nano_processor"},"count":2},
                {"ingredient":{"item":"chaosworld_core:ingot_tech_5"},"count":4},
                {"ingredient":{"item":"neoecoae:energized_crystal_dust"},"count":16},
                {"ingredient":{"item":"ae2omnicells:complex_link_processor"},"count":8},
                {"ingredient":{"item":"ae2omnicells:multidimensional_expansion_circuit_print"},"count":8},
                {"ingredient":{"item":"ae2:purple_glass_cable"},"count":32}
            ],
            "chemicalInput": {"chemical": "mekanism:osmium", "amount": 800},
            "fluidInputs": [
                {"fluid": "advanced_ae:quantum_infusion_source", "amount": 500}
            ],
            "output": {"id": "chaosworld_core:nano_assembly"}}
    )
    //纳米超级计算机
    event.custom(
        {"type": "chaosworld_core:assembling",
            "itemInputs": [
                {"ingredient":{"item":"chaosworld_core:nano_assembly"},"count":4},
                {"ingredient":{"item":"chaosworld_core:ingot_tech_5"},"count":4},
                {"ingredient":{"item":"neoecoae:energized_crystal_dust"},"count":16},
                {"ingredient":{"item":"ae2omnicells:complex_link_processor"},"count":8},
                {"ingredient":{"item":"ae2omnicells:multidimensional_expansion_circuit_print"},"count":8},
                {"ingredient":{"item":"ae2:purple_glass_cable"},"count":32}
            ],
            "chemicalInput": {"chemical": "mekanism:osmium", "amount": 800},
            "fluidInputs": [
                {"fluid": "advanced_ae:quantum_infusion_source", "amount": 500}
            ],
            "output": {"id": "chaosworld_core:nano_computer"}}
    )
    //纳米主机
    event.custom(
        {"type": "chaosworld_core:assembling",
            "itemInputs": [
                {"ingredient":{"item":"chaosworld_core:nano_computer"},"count":1},
                {"ingredient":{"item":"chaosworld_core:ingot_tech_7"},"count":4},
                {"ingredient":{"item":"neoecoae:energized_crystal_dust"},"count":16},
                {"ingredient":{"item":"data_energistics:data_processor"},"count":32},
                {"ingredient":{"item":"ae2omnicells:multidimensional_expansion_processor"},"count":32},
                {"ingredient":{"tag":"ae2lt:overloaded_cable"},"count":32}
            ],
            "chemicalInput": {"chemical": "mekanism:osmium", "amount": 800},
            "fluidInputs": [
                {"fluid": "advanced_ae:quantum_infusion_source", "amount": 500}
            ],
            "output": {"id": "chaosworld_core:nano_mainframe"}}
    )
    //纳米处理器
    event.custom(
        {"type": "chaosworld_core:assembling",
            "itemInputs": [
                {"ingredient":{"item":"mekanism:elite_control_circuit"},"count":3},
                {"ingredient":{"item":"chaosworld_core:ingot_tech_5"},"count":4},
                {"ingredient":{"item":"neoecoae:energized_crystal_dust"},"count":16},
                {"ingredient":{"item":"ae2omnicells:complex_link_processor"},"count":8},
                {"ingredient":{"item":"ae2omnicells:multidimensional_expansion_circuit_print"},"count":8},
                {"ingredient":{"item":"ae2:purple_glass_cable"},"count":32}
            ],
            "chemicalInput": {"chemical": "mekanism:osmium", "amount": 800},
            "fluidInputs": [
                {"fluid": "advanced_ae:quantum_infusion_source", "amount": 500}
            ],
            "output": {"id": "chaosworld_core:nano_processor"}}
    )
    //微型超级计算机
    event.custom(
        {"type": "chaosworld_core:assembling",
            "itemInputs": [
                {"ingredient":{"item":"chaosworld_core:assembly"},"count":4},
                {"ingredient":{"item":"chaosworld_core:ingot_tech_4"},"count":4},
                {"ingredient":{"item":"extendedae_plus:lattra_dust"},"count":16},
                {"ingredient":{"item":"extendedae:concurrent_processor"},"count":8},
                {"ingredient":{"item":"ae2:purple_glass_cable"},"count":32}
            ],
            "chemicalInput": {"chemical": "mekanism:osmium", "amount": 800},
            "fluidInputs": [
                {"fluid": "advanced_ae:quantum_infusion_source", "amount": 500}
            ],
            "output": {"id": "chaosworld_core:workstation"}}
    )
    //量子处理器
    event.custom(
        {"type": "chaosworld_core:assembling",
            "itemInputs": [
                {"ingredient":{"item":"mekanism_extras:absolute_control_circuit"},"count":2},
                {"ingredient":{"item":"chaosworld_core:ingot_quantum"},"count":4},
                {"ingredient":{"item":"neoecoae:energized_superconductive_ingot"},"count":16},
                {"ingredient":{"item":"ae2omnicells:multidimensional_expansion_processor"},"count":8},
                {"ingredient":{"item":"ufo:obsidian_matrix"},"count":2},
                {"ingredient":{"item":"ae2:purple_glass_cable"},"count":32}
            ],
            "chemicalInput": {"chemical": "mekanism:osmium", "amount": 800},
            "fluidInputs": [
                {"fluid": "advanced_ae:quantum_infusion_source", "amount": 500}
            ],
            "output": {"id": "chaosworld_core:quantum_processor"}}
    )
    //量子集群处理器
    event.custom(
        {"type": "chaosworld_core:assembling",
            "itemInputs": [
                {"ingredient":{"item":"chaosworld_core:quantum_processor"},"count":2},
                {"ingredient":{"item":"chaosworld_core:ingot_quantum"},"count":4},
                {"ingredient":{"item":"neoecoae:energized_superconductive_ingot"},"count":16},
                {"ingredient":{"item":"ae2omnicells:multidimensional_expansion_processor"},"count":16},
                {"ingredient":{"item":"ufo:obsidian_matrix"},"count":2},
                {"ingredient":{"item":"ae2:purple_glass_cable"},"count":32}
            ],
            "chemicalInput": {"chemical": "mekanism:osmium", "amount": 800},
            "fluidInputs": [
                {"fluid": "advanced_ae:quantum_infusion_source", "amount": 500}
            ],
            "output": {"id": "chaosworld_core:quantum_assembly"}}
    )
    //量子超级计算机
    event.custom(
        {"type": "chaosworld_core:assembling",
            "itemInputs": [
                {"ingredient":{"item":"chaosworld_core:quantum_assembly"},"count":4},
                {"ingredient":{"item":"chaosworld_core:ingot_quantum"},"count":4},
                {"ingredient":{"item":"neoecoae:energized_superconductive_ingot"},"count":16},
                {"ingredient":{"item":"ae2omnicells:multidimensional_expansion_processor"},"count":32},
                {"ingredient":{"item":"ufo:obsidian_matrix"},"count":2},
                {"ingredient":{"item":"ae2:purple_glass_cable"},"count":32}
            ],
            "chemicalInput": {"chemical": "mekanism:osmium", "amount": 800},
            "fluidInputs": [
                {"fluid": "advanced_ae:quantum_infusion_source", "amount": 500}
            ],
            "output": {"id": "chaosworld_core:quantum_computer"}}
    )
    //量子主机
    event.custom(
        {"type": "chaosworld_core:assembling",
            "itemInputs": [
                {"ingredient":{"item":"chaosworld_core:quantum_computer"},"count":2},
                {"ingredient":{"item":"chaosworld_core:ingot_quantum"},"count":4},
                {"ingredient":{"item":"neoecoae:energized_superconductive_ingot"},"count":16},
                {"ingredient":{"item":"ae2omnicells:multidimensional_expansion_processor"},"count":64},
                {"ingredient":{"item":"ufo:obsidian_matrix"},"count":2},
                {"ingredient":{"item":"ae2:purple_glass_cable"},"count":32}
            ],
            "chemicalInput": {"chemical": "mekanism:osmium", "amount": 800},
            "fluidInputs": [
                {"fluid": "advanced_ae:quantum_infusion_source", "amount": 500}
            ],
            "output": {"id": "chaosworld_core:quantum_mainframe"}}
    )
    //晶体处理器
    event.custom(
        {"type": "chaosworld_core:assembling",
            "itemInputs": [
                {"ingredient":{"item":"mekanism_extras:supreme_control_circuit"},"count":1},
                {"ingredient":{"item":"chaosworld_core:ingot_wyvern_metal"},"count":4},
                {"ingredient":{"item":"draconicevolution:wyvern_core"},"count":1},
                {"ingredient":{"item":"ufo:dimensional_processor"},"count":8},
                {"ingredient":{"item":"ufo:obsidian_matrix"},"count":2},
                {"ingredient":{"item":"ae2:purple_glass_cable"},"count":32}
            ],
            "chemicalInput": {"chemical": "mekanism:osmium", "amount": 800},
            "fluidInputs": [
                {"fluid": "advanced_ae:quantum_infusion_source", "amount": 500},
                {"fluid": "ufo:source_liquid_starlight_fluid", "amount": 500}
            ],
            "output": {"id": "chaosworld_core:crystal_processor"}}
    )
    //晶体集群处理器
    event.custom(
        {"type": "chaosworld_core:assembling",
            "itemInputs": [
                {"ingredient":{"item":"chaosworld_core:crystal_processor"},"count":2},
                {"ingredient":{"item":"chaosworld_core:ingot_wyvern_metal"},"count":4},
                {"ingredient":{"item":"draconicevolution:wyvern_core"},"count":1},
                {"ingredient":{"item":"ufo:dimensional_processor"},"count":16},
                {"ingredient":{"item":"ufo:obsidian_matrix"},"count":2},
                {"ingredient":{"item":"ae2:purple_glass_cable"},"count":32}
            ],
            "chemicalInput": {"chemical": "mekanism:osmium", "amount": 800},
            "fluidInputs": [
                {"fluid": "advanced_ae:quantum_infusion_source", "amount": 500},
                {"fluid": "ufo:source_liquid_starlight_fluid", "amount": 500}
            ],
            "output": {"id": "chaosworld_core:crystal_assembly"}}
    )
    //晶体超级计算机
    event.custom(
        {"type": "chaosworld_core:assembling",
            "itemInputs": [
                {"ingredient":{"item":"chaosworld_core:crystal_assembly"},"count":4},
                {"ingredient":{"item":"chaosworld_core:ingot_wyvern_metal"},"count":4},
                {"ingredient":{"item":"draconicevolution:wyvern_core"},"count":2},
                {"ingredient":{"item":"ufo:dimensional_processor"},"count":32},
                {"ingredient":{"item":"ufo:obsidian_matrix"},"count":2},
                {"ingredient":{"item":"ae2:purple_glass_cable"},"count":32}
            ],
            "chemicalInput": {"chemical": "mekanism:osmium", "amount": 800},
            "fluidInputs": [
                {"fluid": "advanced_ae:quantum_infusion_source", "amount": 500},
                {"fluid": "ufo:source_liquid_starlight_fluid", "amount": 500}
            ],
            "output": {"id": "chaosworld_core:crystal_computer"}}
    )
    //晶体主机
    event.custom(
        {"type": "chaosworld_core:assembling",
            "itemInputs": [
                {"ingredient":{"item":"chaosworld_core:crystal_computer"},"count":4},
                {"ingredient":{"item":"chaosworld_core:ingot_wyvern_metal"},"count":4},
                {"ingredient":{"item":"draconicevolution:wyvern_core"},"count":2},
                {"ingredient":{"item":"ufo:dimensional_processor"},"count":64},
                {"ingredient":{"item":"ufo:obsidian_matrix"},"count":2},
                {"ingredient":{"item":"ae2:purple_glass_cable"},"count":32}
            ],
            "chemicalInput": {"chemical": "mekanism:osmium", "amount": 800},
            "fluidInputs": [
                {"fluid": "advanced_ae:quantum_infusion_source", "amount": 500},
                {"fluid": "ufo:source_liquid_starlight_fluid", "amount": 500}
            ],
            "output": {"id": "chaosworld_core:crystal_mainframe"}}
    )
});
