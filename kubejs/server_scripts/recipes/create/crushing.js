ServerEvents.recipes((event) => {
    event.custom(
        {"type":"create:crushing",
            "ingredients":[{"item":"ae2cs:purified_meteor_crystal"}],
            "processing_time":150,
            "results":[
                {"count":1,"id":"ae2:sky_dust"}
            ]}
    )
})