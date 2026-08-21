ServerEvents.recipes((event) => {
    event.custom(
        {"type":"ae2cs:crystal_aggregator_recipe_serializer",
            "energy_cost":16000,
            "input_a":{"count":4,"tag":"c:ingots/infused_entro"},
            "input_b":{"count":2,"item":"ae2:quartz_glass"},
            "input_c":{"count":2,"item":"chaosworld_core:plate_tech_3"},
            "result":{"count":1,"id":"extendedae:machine_frame"}}
    )
    event.custom(
        {"type":"ae2cs:crystal_aggregator_recipe_serializer",
            "energy_cost":16000,
            "input_a":{"count":4,"item":"chaosworld_core:dust_tech_3"},
            "input_b":{"count":3,"item":"enderio:grains_of_infinity"},
            "input_c":{"count":2,"item":"extendedae:entro_dust"},
            "result":{"count":4,"id":"chaosworld_core:dust_tech_4"}}
    )
})