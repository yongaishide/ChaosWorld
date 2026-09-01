ServerEvents.recipes((event) => {
    //龙箱
    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "catalyst": {"item": "ae2omnicells:omni_cell_component_256k"},
            "ingredients": [
                {"consume": true, "ingredient": {"item": "mekanism:induction_casing"}},
                {"consume": true, "ingredient": {"item": "mekanism:induction_casing"}},
                {"consume": true, "ingredient": {"item": "ae2:quartz_vibrant_glass"}},
                {"consume": true, "ingredient": {"item": "ae2:quartz_vibrant_glass"}},
                {"consume": true, "ingredient": {"item": "draconicevolution:draconium_core"}},
                {"consume": true, "ingredient": {"item": "draconicevolution:draconium_core"}},
                {"consume": true, "ingredient": {"item": "ae2:quartz_vibrant_glass"}},
                {"consume": true, "ingredient": {"item": "ae2:quartz_vibrant_glass"}},
                {"consume": true, "ingredient": {"item": "mekanism:induction_casing"}},
                {"consume": true, "ingredient": {"item": "mekanism:induction_casing"}}
            ],
            "result": {"count": 1, "id": "data_energistics:radix_containment_sphere", "components": {"ae2:stored_energy": 50000.0}},
            "techLevel": "draconium",
            "totalEnergy": 2000000
        }
    )
})
