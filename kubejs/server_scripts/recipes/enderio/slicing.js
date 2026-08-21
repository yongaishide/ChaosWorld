ServerEvents.recipes((event) => {
    event.custom(
        {"type":"enderio:slicing",
            "energy":20000,
            "inputs":[
                {"item":"mekanism:advanced_control_circuit"},
                {"item":"ae2:logic_processor"},
                {"item":"mekanism:advanced_control_circuit"},
                {"item":"chaosworld_core:plate_tech_4"},
                {"item":"chaosworld_core:microprocessor"},
                {"item":"chaosworld_core:plate_tech_4"}
            ],
            "output":{"count":1,"id":"chaosworld_core:circuit_processor"}}
    )
})