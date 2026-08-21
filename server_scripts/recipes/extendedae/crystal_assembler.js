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
})