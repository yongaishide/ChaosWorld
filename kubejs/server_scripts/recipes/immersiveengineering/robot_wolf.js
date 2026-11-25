ServerEvents.recipes(event => {
    //轻型工程块
    event.custom({
        type: 'immersiveengineering:blueprint',
        category: 'automatons',
        inputs: [
            { item: "actuallyadditions:iron_casing" },
            { basePredicate: { item: "chaosworld_core:plate_tech_1" }, count: 2 },
            { basePredicate: { item: "immersiveengineering:component_iron" }, count: 2 }
        ],
        result: { id: "immersiveengineering:light_engineering" }
    })
    //重型工程块
    event.custom({
        type: 'immersiveengineering:blueprint',
        category: 'automatons',
        inputs: [
            { item: "actuallyadditions:iron_casing" },
            { basePredicate: { item: "chaosworld_core:plate_tech_2" }, count: 2 },
            { basePredicate: { item: "immersiveengineering:component_steel" }, count: 2 }
        ],
        result: { id: "immersiveengineering:heavy_engineering" }
    })
    //简陋机器框架
    event.custom({
        type: 'immersiveengineering:blueprint',
        category: 'automatons',
        inputs: [
            { item: "enderio_evolution:simple_machine_frame" },
            { basePredicate: { item: "actuallyadditions:wood_casing" }, count: 4 },
            { basePredicate: { item: "chaosworld_core:plate_tech_3" }, count: 2 },
            { item: "immersiveengineering:component_electronic_adv" },
        ],
        result: { id: "industrialforegoing:machine_frame_pity" }
    })
})
