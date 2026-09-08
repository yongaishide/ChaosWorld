ServerEvents.recipes((event) => {
    event.custom(
        {"type":"createaddition:rolling",
            "ingredients":[{"item":"allthemodium:allthemodium_ingot"}],
            "results":[{"count":2,"id":"allthemodium:allthemodium_rod"}]}
    )
    event.custom(
        {"type":"createaddition:rolling",
            "ingredients":[{"item":"allthemodium:vibranium_ingot"}],
            "results":[{"count":2,"id":"allthemodium:vibranium_rod"}]}
    )
    event.custom(
        {"type":"createaddition:rolling",
            "ingredients":[{"item":"allthemodium:unobtainium_ingot"}],
            "results":[{"count":2,"id":"allthemodium:unobtainium_rod"}]}
    )
})
