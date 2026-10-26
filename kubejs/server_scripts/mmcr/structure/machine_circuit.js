// ============================================================
// 超精电路蚀刻机 —— MMCR 多方块结构（服务端，/reload 热重载）
// 由 1.12.2 Modular Machinery 的 ohxihh-超精电路蚀刻机.json 转换而来
// ============================================================
//
// 结构尺寸：x 13 格、z 11 格、y 6 格（控制器在结构内部 (0,0,0) 那一格）
//
// 下面的 GRID 是按原 json 的绝对坐标逐格翻译过来的（已用脚本与原文 333 个方块位
// 逐一比对过，0 处差异）：
//     GRID[y 由下到上][z 由小到大][x 由小到大]
// 每个 .pattern(...) 是一个「层」，层里每一行是 z，行里的字符是 x。
// 默认把 y 当作「层」的方向（LAYER_ON_Z = false）。
// 如果进游戏发现结构不成形（骨架对不上、控制器位置错位），只有一种可能：
// 这个版本的 MMCR 把「层」当成 z。把下面 LAYER_ON_Z 改成 true 再 /reload 即可，
// 脚本会自己把同一份 GRID 转置成「层 = z、行 = y」的形式。
//
// 记号：
//   C = 控制器（mmcr:machine_circuit_controller，放在这一格）
//   A = mmcr:basic_casing        主外壳（原 blockcasing@0/@3/@4/@5，共 170 格）
//   B = mekanism:steel_casing    原 NuclearCraft 聚变电磁铁（18 格）
//   G = mekanism:structural_glass 原透明电磁铁（31 格）
//   H = immersiveengineering:sheetmetal_steel  原 EnderIO block_decoration1（30 格）
//   I = minecraft:gold_block     原 Thermal storage@2（15 格）
//   J = minecraft:polished_deepslate 原 Thermal storage@3（15 格）
//   K = minecraft:iron_block     原 Thermal storage_alloy（13 格）
//   L = minecraft:polished_andesite  原 stone@6（9 格）
//   M = minecraft:dark_prismarine 原 quark world_stone_pavement（9 格）
//   N = minecraft:smooth_stone_slab  原 stone_slab（9 格）
//   O = minecraft:end_rod        原 end_rod（5 格）
//   S = quark:iron_plate         原 quark:iron_plate（4 格）
//   Q = 物品输入仓   R = 物品输出仓   T = 流体输入仓   U = 能量输入仓
//   P = 并行控制器（普通/进阶/专业）或外壳，任选其一
//
// 端口位置（用 /mmcr build 或手动摆时对照）：
//   物品输入总线 (2,0,0) 上方  |  物品输出总线 (-10,0,0) 平层
//   流体输入仓 (2,-1,0)        |  能量输入仓 (2,1,0)       |  并行控制器 (-10,0,0)
// ============================================================

MMCREvents.server(event => {
    const api = event.getAPI()

    // 层方向：false = 每层是水平切片（层 = y，行 = z）；true = 层 = z，行 = y
    const LAYER_ON_Z = false

    // GRID[y][z][x]，y 从 -1 到 4（共 6 层），z 从 0 到 10（每层 11 行），x 从 -10 到 2（每行 13 字符）
    const GRID = [
        // y = -1（最下层）
        [
            "RAA       AAT",
            "BAAAAAAAAAAAB",
            "BAAAAAAAAAAAB",
            "BAAAAAAAAAAAB",
            "BAAAAAAAAAAAB",
            "BAAAAAAAAAAAB",
            "BAAAAAAAAAAAB",
            "BAAAAAAAAAAAB",
            "BAAAAAAAAAAAB",
            "BAAAAAAAAAAAB",
            "AAAAAAAAAAAAA"
        ],
        // y = 0（控制器层）
        [
            "PAA       CAQ",
            " ANNNNNNNNNA ",
            " ALLLLLLLLLA ",
            " S         S ",
            " A         A ",
            " A         A ",
            " S         S ",
            " A         A ",
            " A         A ",
            " AAAAAAAAAAA ",
            "             "
        ],
        // y = 1
        [
            "AAA       AAU",
            " A         A ",
            " AMMMMMMMMMA ",
            "  G   O   G  ",
            " JG       GJ ",
            " AG O O O GA ",
            " IG       GI ",
            "  G   O   G  ",
            "  GGGGGGGGG  ",
            "             ",
            "             "
        ],
        // y = 2
        [
            "          H  ",
            "          H  ",
            "  HHHHHHHHH  ",
            "  H   K   H  ",
            " JH   K   HJ ",
            " AH KKKKK HA ",
            " IH   K   HI ",
            "  H   K   H  ",
            "  HHHHHHHHH  ",
            "             ",
            "             "
        ],
        // y = 3
        [
            "             ",
            "             ",
            "             ",
            "   GGGKGGG   ",
            " JJJJJJJJJJJ ",
            " A    A    A ",
            " IIIIIIIIIII ",
            "   GGGKGGG   ",
            "             ",
            "             ",
            "             "
        ],
        // y = 4（最上层）
        [
            "             ",
            "             ",
            "             ",
            "             ",
            "      K      ",
            " AAAAAAAAAAA ",
            "      K      ",
            "             ",
            "             ",
            "             ",
            "             "
        ]
    ]

    const builder = event.createStructure('mmcr_kubejs:machine_circuit')

    // 顺序不能反：MMCR 的 set() 会当场检查「这个符号出现过没有」，
    // 先 set 后 pattern 会抛 IllegalStateException: Pattern symbol is absent from the current pattern: A
    if (!LAYER_ON_Z) {
        // 层 = y：每个 pattern 是一层水平切片，行 = z
        for (var y = 0; y < 6; y++) {
            builder.pattern(
                GRID[y][0], GRID[y][1], GRID[y][2], GRID[y][3],
                GRID[y][4], GRID[y][5], GRID[y][6], GRID[y][7],
                GRID[y][8], GRID[y][9], GRID[y][10]
            )
        }
    } else {
        // 层 = z：每层是竖直切片，行 = y（从上往下排，第一行是最上层）
        for (var z = 0; z < 11; z++) {
            builder.pattern(
                GRID[5][z], GRID[4][z], GRID[3][z],
                GRID[2][z], GRID[1][z], GRID[0][z]
            )
        }
    }

    builder
        .set('A', api.block('mmcr:basic_casing'))
        .set('B', api.block('mekanism:steel_casing'))
        .set('G', api.block('mekanism:structural_glass'))
        .set('H', api.block('immersiveengineering:sheetmetal_steel'))
        .set('I', api.block('minecraft:gold_block'))
        .set('J', api.block('minecraft:polished_deepslate'))
        .set('K', api.block('minecraft:iron_block'))
        .set('L', api.block('minecraft:polished_andesite'))
        .set('M', api.block('minecraft:dark_prismarine'))
        .set('N', api.block('minecraft:smooth_stone_slab'))
        .set('O', api.block('minecraft:end_rod'))
        .set('S', api.block('quark:iron_plate'))
        .set('Q', api.anyOfItemInput())
        .set('R', api.anyOfItemOutput())
        .set('T', api.anyOfFluidInput())
        .set('U', api.anyOfEnergyInput())
        .set('P', api.anyOf(
            api.block('mmcr:basic_casing'),
            api.block('mmcr:parallel_controller_normal'),
            api.block('mmcr:parallel_controller_plus'),
            api.block('mmcr:parallel_controller_pro')
        ))

    builder.controller('C').build()
})
