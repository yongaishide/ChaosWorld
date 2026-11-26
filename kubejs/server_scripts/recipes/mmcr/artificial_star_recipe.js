ServerEvents.recipes(event => {
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'chaosworld_core:artificial_star',
        tick_time: 300,
        requirements: [
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'chaosworld_core:paradox_matter_sphere' },
                count: 1,
                consume_chance: 0
            },
            {
                type: 'neoforge:energy',
                io: 'output',
                fe_per_tick: 9223372036854775807
            }
        ]
    })
})
