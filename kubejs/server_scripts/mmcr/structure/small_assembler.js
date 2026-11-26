MMCREvents.server(event => {
    const api = event.getAPI()

    event
        .createStructure('mmcr_kubejs:small_assembler')
        .pattern(['XXX', 'XAX', 'XXX']) // z=0 能量输入仓
        .pattern(['XXX', 'B D', 'XXX']) // z=1 物品输入总线 / 空腔 / 物品输出总线
        .pattern(['XXX', 'XCX', 'XXX']) // z=2 控制器
        .set('X', api.block('immersiveengineering:sheetmetal_steel'))
        .set('A', api.block('mmcr:energy_input_hatch_tiny'))
        .set('B', api.block('mmcr:item_input_bus_small'))
        .set('D', api.block('mmcr:item_output_bus_ludicrous'))
        .controller('C')
        .build()
})
