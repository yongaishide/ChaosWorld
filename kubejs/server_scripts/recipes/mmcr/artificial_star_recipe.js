// 人造恒星 —— 机器配方（移植自 MMCR 官方示例 example/server_scripts/recipe/builtIn_java/人造恒星.js）
// 注意：0.1.2 的 item 需求字段必须是 Ingredient 对象；官方示例里的裸字符串 'minecraft:apple'
// 会抛 JsonParseException: Not a json array / Not a JSON object，这里已改成 { item: '...' } 形式。
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