ServerEvents.recipes((event) => {
    //流明精华
    event.custom(
        {"type":"mekanism:combining",
            "extra_input":{"count":1,"item":"alltheores:lumium_dust"},
            "main_input":{"count":1,"item":"mysticalagriculture:tertium_essence"},
            "output":{"count":1,"id":"extendedcrafting:luminessence"}}
    )
    //流明精华x64
    event.custom(
        {"type":"mekanism:combining",
            "extra_input":{"count":1,"item":"alltheores:lumium_dust"},
            "main_input":{"count":1,"item":"mysticalagriculture:supremium_essence"},
            "output":{"count":64,"id":"extendedcrafting:luminessence"}}
    )
})