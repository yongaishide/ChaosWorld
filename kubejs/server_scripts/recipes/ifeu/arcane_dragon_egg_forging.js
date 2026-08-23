ServerEvents.recipes((event) => {
    //龙蛋复制
    event.custom(
        {
            "neoforge:conditions": [{"type": "neoforge:item_exists", "item": "minecraft:egg"}],
            "type": "ifeu:arcane_dragon_egg_forging",
            "input": {"count": 1, "id": "ae2lt:lightning_collapse_matrix"},
            "inputFluid1": {"amount": 1000, "id": "advanced_ae:quantum_infusion_source"},
            "inputFluid2": {"amount": 1000, "id": "minecraft:water"},
            "output": {"count": 1, "id": "data_energistics:radix_containment_sphere", "components": {"ae2:stored_energy": 1000.0}},
            "processingTime": 200
        }
    )
})
