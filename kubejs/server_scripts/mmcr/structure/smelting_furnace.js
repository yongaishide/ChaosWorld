MMCREvents.server(event => {
    // 取结构 API，简化下面的谓词书写
    const api = event.getAPI()

    event
        .createStructure('mmcr_kubejs:smelting_furnace') // 与启动脚本里的机器 ID 一致
        .pattern(['XXAXX', 'XXXXX', 'XXXXX', 'XXXXX', 'XXXXX']) // z=0
        .pattern(['XXXXX', 'XBBBX', 'X   X', 'X   X', 'XDDDX']) // z=1
        .pattern(['XXXXX', 'XBBBX', 'X   X', 'X   X', 'XDDDX']) // z=2
        .pattern(['XXXXX', 'XBBBX', 'X   X', 'X   X', 'XDDDX']) // z=3
        .pattern(['XEEEX', 'XXCXX', 'XXXXX', 'XXXXX', 'XXXXX']) // z=4
        .set('X', api.block('quark:blackstone_bricks'))
        .set('A', api.block('mmcr:heat_input_hatch'))
        .set('B', api.block("allthecompressed:blaze_rod_block"))
        .set('D', api.anyOf(
            api.block('mmcr:item_input_bus_tiny'), // 只认小型物品输入总线（不放其它档位/仓）
            api.block('quark:blackstone_bricks')  // 或者用黑石砖把这个口封上
        ))
        .set('E', api.anyOf(
            api.anyOfFluidOutput(), // 任意档位的流体输出仓
            api.block('quark:blackstone_bricks') // 或者用黑石砖把这个口封上
        ))
        .controller('C')
        .build() // 结构构建器用 build() 提交，返回 void
})
