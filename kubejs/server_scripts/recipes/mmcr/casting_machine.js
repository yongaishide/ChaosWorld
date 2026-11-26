ServerEvents.recipes(event => {
    const POOL = 'mmcr_kubejs:casting_machine'
    const INGOT = 144          // 1 锭 = 144 mB

    // 熔融液 id：Nuclearcraft Neo Haul 有的金属优先用它的（nuclearcraftneohaul:<金属>），
    // 没有的继续用 AllTheOres 的（alltheores:molten_<金属>）。
    // NC 有：铝/铜/末影/金/铁/铅/镍/银/钢/锡/铀；黄铜/青铜/康铜/铂/锇/铱/荧石系/下界合金等它没有。
    const NC_MOLTEN = new Set(['aluminum', 'copper', 'enderium', 'gold', 'iron',
                               'lead', 'nickel', 'silver', 'steel', 'tin', 'uranium',
                               'beryllium', 'boron', 'dysprosium', 'gadolinium', 'holmium',
                               'lithium', 'magnesium', 'manganese', 'manganese_dioxide',
                               'nickel_oxide', 'palladium', 'thorium', 'zirconium'])
    const fluidOf = (metal) => NC_MOLTEN.has(metal)
        ? 'nuclearcraftneohaul:' + metal
        : 'alltheores:molten_' + metal

    /** 输入流体（mB）—— 输入必须用 fluid+amount，不能写 stack（stack 是输出用的）*/
    const molten = (id, amount) => ({
        type: 'minecraft:fluid', io: 'input', fluid: { fluid: id }, amount: amount
    })
    /** 输出物品 1 个 */
    const ingot = (id) => ({
        type: 'minecraft:item', io: 'output', stack: { id: id, count: 1 }
    })
    /** 模具：物品输入，1 个，consume_chance 0 = 只检测不消耗 */
    const MOLD = {
        type: 'minecraft:item', io: 'input',
        item: { item: 'immersiveengineering:mold_bullet_casing' },
        count: 1,
        consume_chance: 0
    }

    // [熔融液里的金属名, 产出锭的物品 id]
    const METALS = [
        ['aluminum',   'alltheores:aluminum_ingot'],
        ['brass',      'alltheores:brass_ingot'],
        ['bronze',     'alltheores:bronze_ingot'],
        ['constantan', 'alltheores:constantan_ingot'],
        ['electrum',   'alltheores:electrum_ingot'],
        ['enderium',   'alltheores:enderium_ingot'],
        ['invar',      'alltheores:invar_ingot'],
        ['iridium',    'alltheores:iridium_ingot'],
        ['lead',       'alltheores:lead_ingot'],
        ['lumium',     'alltheores:lumium_ingot'],
        ['nickel',     'alltheores:nickel_ingot'],
        ['osmium',     'alltheores:osmium_ingot'],
        ['platinum',   'alltheores:platinum_ingot'],
        ['signalum',   'alltheores:signalum_ingot'],
        ['silver',     'alltheores:silver_ingot'],
        ['steel',      'alltheores:steel_ingot'],
        ['tin',        'alltheores:tin_ingot'],
        ['uranium',    'alltheores:uranium_ingot'],
        ['zinc',       'alltheores:zinc_ingot'],
        ['copper',     'minecraft:copper_ingot'],
        ['gold',       'minecraft:gold_ingot'],
        ['iron',       'minecraft:iron_ingot'],
        ['netherite',  'minecraft:netherite_ingot']
    ]

    METALS.forEach(([metal, itemId]) => {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: POOL,
            tick_time: 100,        // 5 秒
            parallelized: false,   // 这台机器没开并行，写了也不生效，显式写清楚
            requirements: [
                molten(fluidOf(metal), INGOT),
                ingot(itemId),
                MOLD
            ]
        }).id('mmcr_kubejs:casting_' + metal + '_ingot')
    })

    // NC 独有的金属：AllTheOres 没有这些金属的锭，熔融液和锭都取 NC 的
    const NC_ONLY = ['beryllium', 'boron', 'dysprosium', 'gadolinium', 'holmium',
                     'lithium', 'magnesium', 'manganese', 'manganese_dioxide',
                     'nickel_oxide', 'palladium', 'thorium', 'zirconium']
    NC_ONLY.forEach(metal => {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: POOL,
            tick_time: 100,
            parallelized: false,
            requirements: [
                molten(fluidOf(metal), INGOT),
                ingot('nuclearcraftneohaul:' + metal + '_ingot'),
                MOLD
            ]
        }).id('mmcr_kubejs:casting_nc_' + metal + '_ingot')
    })

    // Allthemodium：熔融液和锭都是它自己的（allthemodium:molten_*）
    // 只列真正注册了流体的 3 种金属；3 种合金锭（vibranium_allthemodium /
    // unobtainium_vibranium / unobtainium_allthemodium）没有 molten_atmvib /
    // molten_vibunob / molten_atmunob 这几个流体，加进来会解析失败，不要补。
    const ATM = [
        ['molten_allthemodium', 'allthemodium:allthemodium_ingot'],
        ['molten_vibranium',    'allthemodium:vibranium_ingot'],
        ['molten_unobtainium',  'allthemodium:unobtainium_ingot']
    ]
    ATM.forEach(([fluid, itemId]) => {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: POOL,
            tick_time: 100,
            parallelized: false,
            requirements: [
                molten('allthemodium:' + fluid, INGOT),
                ingot(itemId),
                MOLD
            ]
        }).id('mmcr_kubejs:casting_atm_' + fluid.replace('molten_', '') + '_ingot')
    })
})
