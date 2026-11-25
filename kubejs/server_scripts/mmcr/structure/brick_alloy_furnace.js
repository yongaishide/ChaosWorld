// ============================================================
// MMCR 砖制合金炉 —— 阶段 2/3：多方块结构（服务端，可用 /reload 热重载）
//
// 结构由游戏内结构导出工具原样导出（mmcr_structure_export/2026-11-06-09-57-46-多方块导出-1.js），
// 只改了 createStructure 的机器 ID。尺寸：3 层 z，每层 4 行 y，每行 3 格 x。
//   第 1 层（z=0）  XXX / XAX / " X " / " X "     A = 热量输入仓（第 1 行正中）
//   第 2 层（z=1）  XXX / "B D" / "X X" / "X X"   B = 物品输入总线（任意档位），D = 物品输出总线（任意档位）
//   第 3 层（z=2）  XXX / XCX / " X " / " X "     C = 控制器
//   X = 砖块（minecraft:bricks）
//
// 注意：
//   * 同一个 .pattern() 里每个字符串是同一层从上到下的一行，字符从左到右是 x；
//     行数、行宽必须一致，3 层都写出来才拼得出整台机器。
//   * 空格 = 不校验方块（炉膛中空）；想强制要求空气得写 api.air()。
//   * .controller('C') 会自动绑定本机器的控制器，绝对不要再 .set('C', ...)，同时存在会冲突。
//   * B / D 已放开成任意档位：只要是物品输入总线 / 物品输出总线（tiny、small、normal…ludicrous 都行）
//     就能成型。想再允许「用砖块把这个口封上」，改成：
//       .set('B', api.anyOf(api.anyOfItemInput(), api.block('minecraft:bricks')))
//     输出同理，和冶炼炉/浇筑机的写法一致。
//   * 改这个文件进游戏敲 /reload 即可生效，不用重启。
// ============================================================

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
