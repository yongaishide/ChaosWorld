ServerEvents.recipes((event) => {
    event.custom(
        {"type":"mekmm:planting",
            "chemical_input":{"amount":1,"chemical":"mekmm:nutrient_solution"},
            "item_input":{"count":1,"item":"farmersdelight:rice"},
            "main_output":{"count":5,"id":"farmersdelight:rice_panicle"},
            "secondary_output":{"count":1,"id":"farmersdelight:rice"},
            "secondary_chance":0.8,
            "per_tick_usage":true}
    )
})
