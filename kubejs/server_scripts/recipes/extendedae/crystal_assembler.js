ServerEvents.recipes((event) => {
    //四阶科技粉
    event.custom(
        {"type":"extendedae:crystal_assembler",
            "input_items":[
                {"amount":4,"ingredient":{"item":"chaosworld_core:dust_tech_3"}},
                {"amount":3,"ingredient":{"item":"enderio:grains_of_infinity"}},
                {"amount":2,"ingredient":{"item":"extendedae:entro_dust"}}
            ],
            "output":{"count":4,"id":"chaosworld_core:dust_tech_4"}}
    )

    //1k元件组件
    event.custom(
        {"type":"extendedae:crystal_assembler",
            "input_fluid":{"amount":100,"ingredient":{"fluid":"minecraft:water"}},
            "input_items":[
                {"amount":1,"ingredient":{"item":"ae2omnicells:omni_link_processor"}},
                {"amount":3,"ingredient":{"item":"ae2omnicells:ender_ingot"}},
                {"amount":2,"ingredient":{"item":"chaosworld_core:plate_tech_1"}}
            ],
            "output":{"count":1,"id":"ae2omnicells:omni_cell_component_1k"}}
    )
})