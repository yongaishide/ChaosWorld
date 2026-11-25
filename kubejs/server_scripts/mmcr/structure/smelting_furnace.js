// ============================================================
// MMCR 冶炼炉 —— 阶段 2/3：多方块结构（服务端，可用 /reload 热重载）
//
// 结构由游戏内结构导出工具原样导出（mmcr_structure_export/2026-10-24-14-19-43-多方块导出-1.js），
// 只改了 createStructure 的机器 ID。尺寸：5 层 z，每层 5 行 y，每行 5 格 x。
//   第 1 层（最下面）  XXAXX / XXXXX / XXXXX / XXXXX / XXXXX     A = 热量输入仓
//   第 2~4 层          XXXXX / XBBBX / X   X / X   X / XDDDX     B = 烈焰网   D = 小型物品输入总线或黑石砖
//   第 5 层（最上面）  XEEEX / XXCXX / XXXXX / XXXXX / XXXXX     E = 流体输出仓（任意等级）或黑石砖   C = 控制器
//   X = 黑石砖（quark:blackstone_bricks）
//
// 注意：
//   * 同一 .pattern() 里的每个字符串是同一层里从上到下的一行，字符串里的字符从左到右是 x；
//     每层的行数、每行的宽度必须一致，5 层都写出来才拼得出整台机器。
//   * 空格 = 该位置不校验方块（这里就是炉膛镂空）；想强制要求是空气得写 api.air()。
//   * .controller('C') 会自动绑定本机器的控制器，绝对不要再 .set('C', ...)，两者同时存在会冲突。
//   * D 是「二选一」：**只认 mmcr:item_input_bus_tiny（小型物品输入总线）**，别的档位或其它方块都不成型；
//     或者一块黑石砖（= 把这个口封上）。E 则是任意档位的流体输出仓或黑石砖，每个位置独立判定。
//     但整组全用砖封死也能成型——那样这台炉子就没有输入/输出口，配方跑不起来。
//   * A 仍固定为普通热量输入仓（MMCR 只有这一种热量输入仓，没有档位）。
//   * 改这个文件进游戏敲 /reload 即可生效，不用重启。
// ============================================================

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
