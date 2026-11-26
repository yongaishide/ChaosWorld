ServerEvents.recipes(event => {
    // 模块（重组机）配方：必须有太空电梯主机连接才能跑
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'mmcr_kubejs:kubejs_space_reassembler',
        tick_time: 100,
        parallelized: true,
        required_host_ids: [
            "mmcr_kubejs:kubejs_space_elevator"
        ],
        requirements: [
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'minecraft:potion' },
                components: {
                    'minecraft:potion_contents': {
                        type: 'exact',
                        value: { potion: 'minecraft:water' }
                    }
                },
                count: 1
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'minecraft:potion',
                    count: 1,
                    components: {
                        'minecraft:potion_contents': { potion: 'minecraft:healing' }
                    }
                }
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 100
            }
        ]
    })

    // 主机（电梯）自己的配方
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'mmcr_kubejs:kubejs_space_elevator',
        tick_time: 1000,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'minecraft:apple' },
                count: 1
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'minecraft:golden_apple',
                    count: 12
                }
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 100
            }
        ]
    })
})
