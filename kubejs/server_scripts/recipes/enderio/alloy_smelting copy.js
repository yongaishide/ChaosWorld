ServerEvents.recipes((event) => {
    //强化黑曜石粉
    event.custom(
        {"type":"enderio:sag_milling",
            "bonus":"none",
            "energy":2400,
            "input":{"item":"mekanism:ingot_refined_obsidian"},
            "outputs":[
                {"item":{"count":1,"id":"mekanism:dust_refined_obsidian"}}
            ]}
    )
})
