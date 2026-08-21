ServerEvents.recipes((event) => {
    event.custom(
        {"type":"mekanism:crushing",
            "input":{"count":1,"item":"enderio:ender_crystal"},
            "output":{"count":1,"id":"enderio:ender_crystal_powder"}}
    )
    event.custom(
        {"type":"mekanism:crushing",
            "input":{"count":1,"item":"create:rose_quartz"},
            "output":{"count":1,"id":"create:polished_rose_quartz"}}
    )
    event.custom(
        {"type":"mekanism:crushing",
            "input":{"count":1,"item":"ae2cs:purified_rose_quartz"},
            "output":{"count":2,"id":"create:polished_rose_quartz"}}
    )
})