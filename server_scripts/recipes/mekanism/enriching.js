ServerEvents.recipes((event) => {
    event.custom(
        {"type":"mekanism:enriching",
            "input":{"count":1,"item":"immersiveengineering:ingot_hop_graphite"},
            "output":{"count":1,"id":"immersiveengineering:graphite_electrode"}}
    )
    event.custom(
        {"type":"mekanism:enriching",
            "input":{"count":1,"item":"immersiveengineering:dust_hop_graphite"},
            "output":{"count":1,"id":"immersiveengineering:ingot_hop_graphite"}}
    )
    event.custom(
        {"type":"mekanism:enriching",
            "input":{"count":1,"item":"enderio_evolution:construction_alloy_ingot"},
            "output":{"count":1,"id":"extendedcrafting:black_iron_ingot"}}
    )
})
