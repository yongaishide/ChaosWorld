ServerEvents.recipes((event) => {
    event.custom(
        {"type":"immersiveengineering:alloy",
            "input0":{"basePredicate":{"item":"minecraft:iron_ingot"},"count":1},
            "input1":{"basePredicate":{"item":"minecraft:redstone"},"count":2},
            "result":{"basePredicate":{"item":"extendedcrafting:redstone_ingot"},"count":1}}
    )
})
