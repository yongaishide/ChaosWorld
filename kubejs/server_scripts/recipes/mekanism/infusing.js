ServerEvents.recipes((event) => {
    event.custom(
        {"type":"mekanism:metallurgic_infusing",
            "chemical_input":{"amount":80,"tag":"mekanism:gold"},
            "item_input":{"count":1,"item":"extendedcrafting:redstone_ingot"},
            "output":{"count":1,"id":"extendedcrafting:enhanced_redstone_ingot"},
            "per_tick_usage":false}
    )
})
