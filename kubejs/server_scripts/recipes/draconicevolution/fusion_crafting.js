ServerEvents.recipes((event) => {
    //龙箱
    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "catalyst": {"item": "ae2lt:overload_machine_frame"},
            "ingredients": [
                {"consume": true, "ingredient": {"item": "ae2lt:matter_warping_matrix_casing"}},
                {"consume": true, "ingredient": {"item": "ae2lt:matter_warping_matrix_casing"}},
                {"consume": true, "ingredient": {"item": "enderio_evolution:capacitor_melodic"}},
                {"consume": true, "ingredient": {"item": "enderio_evolution:capacitor_melodic"}},
                {"consume": true, "ingredient": {"item": "draconicevolution:draconium_core"}},
                {"consume": true, "ingredient": {"item": "draconicevolution:draconium_core"}},
                {"consume": true, "ingredient": {"item": "ae2lt:matter_warping_matrix_casing"}},
                {"consume": true, "ingredient": {"item": "ae2lt:matter_warping_matrix_casing"}}
            ],
            "result": {"count": 1, "id": "industrialforegoing:machine_frame_supreme"},
            "techLevel": "draconium",
            "totalEnergy": 2000000
        }
    )
})
