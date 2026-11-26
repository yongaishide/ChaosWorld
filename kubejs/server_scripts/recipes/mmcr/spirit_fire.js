ServerEvents.recipes(event => {
    const POOL = 'mmcr_kubejs:spirit_fire'
    const TICKS = 10

    /** 输入物品 n 个 */
    const item = (id, n) => ({
        type: 'minecraft:item', io: 'input', item: { item: id }, count: n || 1
    })
    /** 输入物品标签 n 个（任意匹配该标签的物品都行） */
    const tag = (id, n) => ({
        type: 'minecraft:item', io: 'input', item: { tag: id }, count: n || 1
    })
    /** 输出物品 n 个 */
    const out = (id, n) => ({
        type: 'minecraft:item', io: 'output', stack: { id: id, count: n || 1 }
    })

    const recipe = (name, reqs, ticks) => event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: POOL,
        tick_time: ticks || TICKS,
        parallelized: true,   // 允许这条配方按并行数批量跑；实际并行数看结构里的并行控制器
        requirements: reqs
    }).id('mmcr_kubejs:spirit_fire_' + name)

    // ---- 岩石：安山岩 -> 异界石，闪长岩 -> 异界岩 ----
    recipe('otherstone', [item('minecraft:andesite'), out('occultism:otherstone')])
    recipe('otherrock', [item('minecraft:diorite'), out('occultism:otherrock')])

    // ---- 树苗：橡树苗 -> 自然异界树苗 ----
    recipe('otherworld_sapling', [item('minecraft:oak_sapling'), out('occultism:otherworld_sapling_natural')])

    // ---- 书：书 -> 禁忌之书 ----
    recipe('taboo_book', [item('minecraft:book'), out('occultism:taboo_book')])

    // ---- 灵体精华：魔鬼之梦精华 -> 异界精华 ----
    recipe('otherworld_essence', [item('occultism:demons_dream_essence'), out('occultism:otherworld_essence')])

    // ---- 粉笔提纯：杂色粉笔 -> 成品粉笔 ----
    // 除了金色的以外都是一一对应的 xxx_impure -> xxx。
    const CHALKS = ['black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_blue',
                    'light_gray', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'white']
    CHALKS.forEach(color => {
        recipe('chalk_' + color, [
            item('occultism:chalk_' + color + '_impure'),
            out('occultism:chalk_' + color)
        ])
    })
    // 金色的粉笔是例外：黄色的杂色粉笔（chalk_yellow_impure）烧出来是 chalk_gold。
    recipe('chalk_gold', [
        item('occultism:chalk_yellow_impure'),
        out('occultism:chalk_gold')
    ])

    // ---- 以下 6 条在原配方里用标签，不能写死成某个具体物品 ----

    // 钻石 -> 灵性水晶（灵火最出名的用法；c:gems/diamond 涵盖各模组的钻石）
    recipe('spirit_attuned_gem', [tag('c:gems/diamond'), out('occultism:spirit_attuned_gem')], 60)

    // 任意羽毛 -> 觉醒羽毛
    recipe('awakened_feather', [tag('c:feathers'), out('occultism:awakened_feather')])

    // 任意空白装订书 -> 空白绑定书
    recipe('book_of_binding_empty', [
        tag('occultism:books/books_for_empty'),
        out('occultism:book_of_binding_empty')
    ])

    // 任意花 -> 异界花
    recipe('otherflower', [tag('minecraft:flowers'), out('occultism:otherflower')])

    // 任意异界原木 -> 异界灰烬
    recipe('otherworld_ashes', [tag('occultism:otherworld_logs'), out('occultism:otherworld_ashes')])

    // 任意黑色染料 -> 净化墨水
    recipe('purified_ink', [tag('c:dyes/black'), out('occultism:purified_ink')])
})
