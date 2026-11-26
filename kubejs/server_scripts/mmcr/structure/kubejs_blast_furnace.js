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
