// ============================================================
// MMCR 浇筑机 —— 阶段 2/3：多方块结构（服务端，可用 /reload 热重载）
//
// 结构由游戏内结构导出工具导出（mmcr_structure_export/2026-10-26-15-28-35-多方块导出-1.js），
// 只改了 createStructure 的机器 ID 和三个端口位（D/G/H）—— 方块、方块状态一律照抄。
// 尺寸：宽 3（x）× 高 6（y）× 深 5（z），即 5 层 .pattern()，每层 6 行，每行 3 格。
//   第 1 层 z=0   全黑石砖（底面）
//   第 2 层 z=1   第 3 行中间是 C = 控制器
//   第 3 层 z=2   y=1 一排 A（下半砖）、y=4 一排 B（上半砖），中间镂空
//   第 4 层 z=3   y=1 D 物品输入总线（mmcr:item_input_bus_tiny，放模具用）、
//                 y=3 E 注魔机、y=4 F 流体管道、y=5 G 任意档位流体输入仓
//   第 5 层 z=4   y=0 H 任意档位物品输出仓
//   X = 黑石砖（quark:blackstone_bricks）
//
// 注意：
//   * A/B/E/F 是**带方块状态的方块**，必须用 api.state('id[属性=值]') 精确匹配；
//     写成 api.block('id') 会把属性丢掉（比如 slab 的 type=bottom 就不再校验）。
//   * D 是普通方块，只认 mmcr:item_input_bus_tiny 这一种总线，换别的总线或档位都不成型。
//   * 同一 .pattern() 里的字符串是同一层里从上到下的一行，字符从左到右是 x，
//     连续 .pattern() 沿 z 叠；空格 = 该位置不校验方块（这里是机器内部的空腔）。
//   * .controller('C') 会自动绑定本机器控制器，不要再 .set('C', ...)，会冲突。
//   * 端口只有两个，且都是「任意档位任选其一」：G 流体输入仓、H 物品输出仓（anyOfFluidInput /
//     anyOfItemOutput）。好处是档位随便换；代价是这两个位置**必须真的装仓**，拿黑石砖封上不会成型。
//   * D 是物品输入总线：模具放这里，配方里再用 consume_chance: 0 把它当不消耗的催化剂。
//     这台机器没有热量仓，所以配方只能是「流体进 → 物品出」，不能加温度门槛。
//   * 改这个文件进游戏敲 /reload 即可生效，不用重启。
// ============================================================

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
