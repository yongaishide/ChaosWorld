ServerEvents.recipes((event) => {
    //龙箱
    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "catalyst": {"item": "ae2lt:overload_machine_frame"},
            "ingredients": [
                {"consume": true, "ingredient": {"item": "draconicevolution:draconium_core"}},
                {"consume": true, "ingredient": {"item": "draconicevolution:draconium_core"}}
            ],
            "result": {"count": 1, "id": "industrialforegoing:machine_frame_supreme"},
            "techLevel": "draconium",
            "totalEnergy": 2000000
        }
    )
})
