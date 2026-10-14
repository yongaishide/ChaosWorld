// ============================================================
// MMCR 高炉 —— 阶段 2/3：多方块结构（服务期，可用 /reload 热重载）
// 结构（3 层 z，每层 3 行 y，每行 3 格 x）：
//   第 1 层  AIA / X I X / XXX   ← 最上面中间那格（1,0）与它正下方那格（1,1）是上下相邻的
//   第 2 层  XXX / I   I / XBX      两个「热量仓位」：热量输出仓和热量输入仓必须放在这里
//   第 3 层  AXA / X C X / XXX       （放别的端口也行，但这两个相邻位是给热量仓留的）
//   X = 基础机器外壳   A = 铁块/石头/普通并行器/工厂控制器/热量输出仓
//   I = 物品输入/输出总线、热量输入仓/热量输出仓（api.anyOfHeatPorts()）
//   B = 天然原木（主世界原木 + 下界菌柄）   C = 控制器
//
// 2026/10 改造：炉温改用 MMCR 自带的（Mekanism）热量系统。三个必须记住的点：
//   ① 冶炼配方用 mekanism:temperature 需求，MMCR 只拿「输入向」热量端口的温度来判断
//      —— 也就是只有 mmcr:heat_input_hatch（热量输入仓）能当温度计；
//   ② 燃料配方用 mekanism:heat 把热量「输出」出去，MMCR 只往「输出向」热量端口里灌
//      —— 也就是必须有 mmcr:heat_output_hatch（热量输出仓）。一个输出仓都没有的话，
//      燃料配方直接判 heat_output_blocked（热量输出受阻），炉子永远不会热；
//   ③ 这两类端口之间没有内部通道：热量输出仓每 tick 只会把热传导给「紧挨着」的热量处理器
//      （Mekanism 的 simulateAdjacent），所以热量输出仓必须紧贴热量输入仓放 ——
//      第 1 层的 (1,0) 与 (1,1) 就是为此留出来的相邻位。
//   两个热量仓都是无等级的（不像能量/物品/流体仓有七八个等级）。
// ============================================================

MMCREvents.server(event => {
    // 取结构 API，简化下面的谓词书写
    const api = event.getAPI()

    event
        .createStructure('mmcr_kubejs:kubejs_blast_furnace') // 与启动脚本中的机器 ID 一致
        .pattern(['AIA', 'XIX', 'XXX']) // 顶行中间的 I 与它下面那格的 I 上下相邻：热量输出仓贴这里
        .pattern(['XXX', 'I I', 'XBX'])
        .pattern(['AXA', 'XCX', 'XXX'])
        .set('X', api.block('mmcr:basic_casing'))
        .set('A', api.anyOf(
            api.block('minecraft:iron_block'),
            api.block('minecraft:stone'),
            api.block('mmcr:parallel_controller_normal'),
            api.block('mmcr:factory_controller'),
            // 燃料配方要往外输出热量，需要至少一个热量输出仓
            api.block('mmcr:heat_output_hatch')
        ))
        .set('I', api.anyOf(
            api.block('mmcr:item_input_bus'),
            api.block('mmcr:item_output_bus'),
            // 冶炼配方要用外部的热量把炉子烧到 673 K 以上，所以这里要求热量输入仓
            api.anyOfHeatPorts()
        ))
        // 注意：维基原例用的是 c:natural_logs，那个标签在 1.21.1 的 NeoForge 里不存在，
        // 会导致 B 谁都匹配不上、机器拼不出来，所以这里换成原版的天然原木标签 + 下界菌柄。
        .set('B', api.anyOf(
            api.tag('minecraft:overworld_natural_logs'),
            api.tag('minecraft:crimson_stems'),
            api.tag('minecraft:warped_stems')
        ))
        .controller('C')
        .build() // 结构构建器以 build() 提交，返回 void
})
