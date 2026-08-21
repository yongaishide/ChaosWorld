ServerEvents.recipes((event) => {
    event.custom(
        {"neoforge:conditions":[{"type":"neoforge:mod_loaded","modid":"immersiveengineering"}],
            "type":"immersiveengineering:metal_press",
            "energy":51200,
            "input":{"basePredicate":{"item":"immersiveengineering:dust_hop_graphite"},"count":6},
            "mold":"immersiveengineering:mold_rod",
            "result":{"basePredicate":{"item":'immersiveengineering:graphite_electrode'},"count":1}}
    )
})