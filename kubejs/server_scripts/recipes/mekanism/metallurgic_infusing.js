ServerEvents.recipes((event) => {
    //ATM
    event.custom({
        "type": "mekanism:chemical_conversion",
        "input": {"count": 1,"item": "allthemodium:allthemodium_ingot"},
        "output": {"amount": 80,"id": "kubejs:allthemodium"}}

    )
    event.custom({
        "type": "mekanism:oxidizing",
        "input": {"count": 1,"item": "allthemodium:allthemodium_ingot"},
        "output": {"amount": 80,"id": "kubejs:allthemodium"}}
    )
    //振金
    event.custom({
        "type": "mekanism:chemical_conversion",
        "input": {"count": 1,"item": "allthemodium:vibranium_ingot"},
        "output": {"amount": 80,"id": "kubejs:vibranium"}}

    )
    event.custom({
        "type": "mekanism:oxidizing",
        "input": {"count": 1,"item": "allthemodium:vibranium_ingot"},
        "output": {"amount": 80,"id": "kubejs:vibranium"}}
    )
    //难得素
    event.custom({
        "type": "mekanism:chemical_conversion",
        "input": {"count": 1,"item": "allthemodium:unobtainium_ingot"},
        "output": {"amount": 80,"id": "kubejs:unobtainium"}}

    )
    event.custom({
        "type": "mekanism:oxidizing",
        "input": {"count": 1,"item": "allthemodium:unobtainium_ingot"},
        "output": {"amount": 80,"id": "kubejs:unobtainium"}}
    )

})