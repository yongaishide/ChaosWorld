// ============================================================
// MMCR 灵火 —— 阶段 2/4：多方块结构（服务端，可用 /reload 热重载）
//
// 结构照抄游戏内结构导出工具导出的
//   mmcr_structure_export/2026-11-11-20-05-40-多方块导出-1.js
// 只改了 createStructure 的机器 ID，把三个口改成「接口族」，并让外壳 X 兼任并行器插槽。
// 尺寸：宽 3（x）× 高 1（y）× 深 3（z），3 层 .pattern()，每层 1 行，每行 3 格。
//   第 1 层 z=0   X X X                         全外壳（底面）
//   第 2 层 z=1   A B D                         A = 物品输入总线（任意档位）
//                                               B = 灵火 occultism:spirit_fire（任意颜色）
//                                               D = 物品输出总线（任意档位）
//   第 3 层 z=2   X C X                         C = 控制器
//   X = 基础机壳（mmcr:basic_casing）或任意档位的并行控制器
//
// 注意：
//   * 同一 .pattern() 里的每个字符串是同一层里从上到下的一行，字符串里的字符从左到右是 x；
//     连续 .pattern() 沿 z 叠。每层的行数、每行的宽度必须一致。
//   * 原导出把 A/D 写死成 mmcr:item_input_bus_tiny / mmcr:item_output_bus_tiny，
//     这里换成 api.anyOfItemInput() / api.anyOfItemOutput()：任意档位的物品输入/输出总线都能成型
//     （micro→ludicrous 全档位，微型当然也算）。档位往上换只影响容量，不影响配方。
//   * B 用 api.block('occultism:spirit_fire') 而不是 api.state('...[color=white]')：
//     api.block 不看方块属性，所以白/灰/彩虹/虚空……任意颜色的灵火都认；
//     想只认白色的那种，把它换成 api.state('occultism:spirit_fire[color=white]') 就行。
//   * 这个结构只有 3 格非外壳位置（A/B/D），要塞「灵火」就占掉了一格，
//     所以**没有能量输入仓的位置**，配方全部做成「物品进 → 物品出、不耗电」
//     （见 server_scripts/recipes/mmcr/spirit_fire.js）。想加电就得把结构做大一层再开一个口。
//   * .controller('C') 会自动绑定本机器的控制器，绝对不要再 .set('C', ...)，两者同时存在会冲突。
//   * X（外壳）同时兼任**并行控制器插槽**：填基础机壳或任意档位的 mmcr:parallel_controller_* 都成型。
//     并行器用「并行份数」说话，一块算一份、多块叠加，再被 startup 里的 maxParallelAmount(64) 卡住：
//       普通 4 / 高级 16 / 强化 64 / 专业 256 / 精英 1024 / 幻想 4096 / 极限 16384 / 终极 2147483647
//     所以这个结构有 5 个 X 位（z=0 三个 + z=2 左右各一个），全填机壳就是并行 1（不并行），
//     拿一块普通并行器换掉任意一格机壳 → 并行 4，两块 → 8，以此类推，上限 64。
//     配方还得写 parallelized: true 才会真的批量（见 recipes 脚本）。
//   * 改这个文件进游戏敲 /reload 即可生效，不用重启（改机器定义才要重启）。
// ============================================================

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
