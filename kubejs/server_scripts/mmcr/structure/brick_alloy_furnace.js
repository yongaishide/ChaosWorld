MMCREvents.server(event => {
    const api = event.getAPI()

    event
        .createStructure('mmcr_kubejs:brick_alloy_furnace') // 与启动脚本里的机器 ID 一致
        .pattern(['XXX', 'XAX', ' X ', ' X ']) // z=0
        .pattern(['XXX', 'B D', 'X X', 'X X']) // z=1
        .pattern(['XXX', 'XCX', ' X ', ' X ']) // z=2
        .set('X', api.block('minecraft:bricks'))
        .set('A', api.block('mmcr:heat_input_hatch'))
        .set('B', api.anyOfItemInput())   // 任意档位的物品输入总线
        .set('D', api.anyOfItemOutput())  // 任意档位的物品输出总线
        .controller('C')
        .build() // 结构构建器用 build() 提交，返回 void
})
