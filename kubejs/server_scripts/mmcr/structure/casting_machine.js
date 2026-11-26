MMCREvents.server(event => {
    // 取结构 API，简化下面的谓词书写
    const api = event.getAPI()

    event
        .createStructure('mmcr_kubejs:casting_machine') // 与启动脚本里的机器 ID 一致
        .pattern(['XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX']) // z=0 底面
        .pattern(['XXX', 'XXX', 'XCX', 'XXX', 'XXX', 'XXX']) // z=1 控制器嵌在正面中层
        .pattern(['XXX', 'AAA', '   ', '   ', 'BBB', 'XXX']) // z=2 下半砖/上半砖
        .pattern(['XXX', 'ADA', '   ', ' E ', 'BFB', 'XGX']) // z=3 物品输入总线/注魔机/管道/流体输入仓
        .pattern(['XHX', 'AAA', '   ', '   ', 'BBB', 'XXX']) // z=4 物品输出总线
        .set('X', api.block('quark:blackstone_bricks'))
        .set('A', api.state('quark:blackstone_bricks_slab[type=bottom,waterlogged=false]'))
        .set('B', api.state('quark:blackstone_bricks_slab[type=top,waterlogged=false]'))
        .set('D', api.block('mmcr:item_input_bus_tiny'))   // 只认这一种物品输入总线
        .set('E', api.state('create_enchantment_industry:infuser[facing=west]'))
        .set('F', api.state('immersiveengineering:fluid_pipe[waterlogged=false]'))
        .set('G', api.anyOfFluidInput())   // 任意档位的流体输入仓（不能空着，也不能拿砖封）
        .set('H', api.anyOfItemOutput())   // 任意档位的物品输出总线（同上）
        .controller('C')
        .build() // 结构构建器用 build() 提交，返回 void
})
