// ============================================================
// MMCR 小型组装机 —— 阶段 2/3：多方块结构（服务端，可以用 /reload 热重载）
//
// 结构照抄游戏内导出的 mmcr_structure_export/小型组装机.js，只换了 createStructure 的机器 ID。
// 尺寸：宽 3（x）× 高 3（y）× 深 3（z），即 3 层 .pattern()，每层 3 行，每行 3 格。
//   第 1 层 z=0   A = 能量输入仓（微型）
//   第 2 层 z=1   B = 物品输入总线（小型）、D = 物品输出总线（Ludicrous），中间镂空
//   第 3 层 z=2   C = 控制器
//   X = 镀锌钢板（immersiveengineering:sheetmetal_steel）
//
// 注意：
//   * 端口 A/B/D 都写死成导出时的具体档位（普通方块，只认这一种），换档位不会成型；
//     想放开成任意档位就把对应 .set 换成 api.anyOfEnergyInput() / anyOfItemInput() / anyOfItemOutput()。
//   * .controller('C') 会自动绑定本机器控制器，不要再 .set('C', ...)。
//   * 空格 = 该位置不校验方块（这里是机器内部的空腔）。
//   * 改这个文件进游戏敲 /reload 即可生效，不用重启。
// ============================================================

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
