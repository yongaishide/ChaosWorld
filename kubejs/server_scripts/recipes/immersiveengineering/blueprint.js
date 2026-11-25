ServerEvents.recipes((event) => {
    event.custom(
        {"type":"immersiveengineering:blueprint",
            "category":"components",
            "inputs":[
                {"item":'immersiveengineering:insulating_glass'},
                {"tag":"c:plates/nickel"},
                {"tag":"c:wires/copper"},
                {"tag":"c:dusts/redstone"}
            ],
            "result":{"count":3,"id":"immersiveengineering:electron_tube"}}
    )
    event.custom(
    {"type":"immersiveengineering:blueprint",
        "category":"components",
        "inputs":[
            {
            "basePredicate": {
                "item": "powah:dielectric_paste"
            },
            "count": 6
            },
            {
            "basePredicate": {
                "item": "immersiveengineering:wire_copper"
            },
            "count": 2
            },
        ],
        "result":{"count":2,"id":"powah:dielectric_rod"}}
    )
    event.custom(
    {"type":"immersiveengineering:blueprint",
        "category":"components",
        "inputs":[
            {
            "basePredicate": {
                "item": "powah:dielectric_paste"
            },
            "count": 6
            },
            {
            "basePredicate": {
                "item": "immersiveengineering:wire_copper"
            },
            "count": 2
            },
        ],
        "result":{"count":2,"id":"powah:dielectric_rod_horizontal"}}
    )
})
