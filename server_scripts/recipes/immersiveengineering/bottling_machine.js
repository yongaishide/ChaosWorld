ServerEvents.recipes((event) => {
    event.custom(
        {"type":"immersiveengineering:bottling_machine",
            "fluid":{"amount":125,"tag":"c:creosote"},
            "input":{"tag":'minecraft:planks'},
            "results":[{"id":"immersiveengineering:treated_wood_horizontal"}]}
    )
})
