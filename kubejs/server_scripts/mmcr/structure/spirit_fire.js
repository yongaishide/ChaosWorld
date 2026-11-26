MMCREvents.server(event => {
    // 取结构 API，简化下面的谓词书写
    const api = event.getAPI()

    // 外壳：基础机壳，或者任意档位的并行控制器（插并行器 = 开并行）
    const SHELL = api.anyOf(
        api.block('mmcr:basic_casing'),
        api.block('mmcr:parallel_controller_normal'),
        api.block('mmcr:parallel_controller_plus'),
        api.block('mmcr:parallel_controller_reinforced'),
        api.block('mmcr:parallel_controller_pro'),
        api.block('mmcr:parallel_controller_elite'),
        api.block('mmcr:parallel_controller_fantasy'),
        api.block('mmcr:parallel_controller_max'),
        api.block('mmcr:parallel_controller_ultimate')
    )

    event
        .createStructure('mmcr_kubejs:spirit_fire') // 与启动脚本里的机器 ID 一致
        .pattern(['XXX'])                           // z=0 底面
        .pattern(['ABD'])                           // z=1 物品进 / 灵火 / 物品出
        .pattern(['XCX'])                           // z=2 控制器（中层）
        .set('X', SHELL)                  // 机壳 / 并行控制器，二选一
        .set('A', api.anyOfItemInput())   // 任意档位的物品输入总线（不能空着，也不能拿机壳封）
        .set('B', api.block('occultism:spirit_fire'))  // 灵火：任意颜色都认
        .set('D', api.anyOfItemOutput())  // 任意档位的物品输出总线（同上）
        .controller('C')
        .build() // 结构构建器用 build() 提交，返回 void
})
