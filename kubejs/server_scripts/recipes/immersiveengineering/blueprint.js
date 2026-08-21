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
})
