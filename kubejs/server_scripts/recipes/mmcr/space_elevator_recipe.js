// MMCR 官方示例：太空电梯配方（wiki 原文面向 MMCR 26.1.2，按 0.1.2 / 1.21.1 适配）
// 与 26.1.2 的两处差异：
//   1) item 字段：26.1.2 可写裸字符串 item: 'minecraft:potion'；1.21.1 的 ItemRequirement
//      用原版 Ingredient codec 解析，必须是对象 { item: '...' }（或对象数组）。
//   2) components 字段（需求侧）：26.1.2 直接写 { 'minecraft:potion_contents': { potion: '...' } }；
//      0.1.2 的 DataComponentPredicateSet 用带 type 标签的 ComponentPredicate codec，
//      须写成 { type: 'exact', value: { potion: '...' } }（或 { type: 'map', values: { potion: { type: 'exact', value: '...' } } }）。
//      输出 stack 里的 components 走原版 ItemStack codec，保持 wiki 写法即可。

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