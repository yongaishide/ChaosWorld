// ============================================================
// 冶炼炉 —— 配方（服务端，/reload 生效）
// 机器：mmcr_kubejs:smelting_furnace   配方池：mmcr_kubejs:smelting_furnace
//
// 内容：熔炼成熔融金属
//   · 金属锭     -> 1 锭      144 mB
//   · 粗矿 item  -> 1.5 锭   216 mB
//   · 粗矿块     -> 13.5 锭 1944 mB（就是一个块里的 9 个粗矿）
//   · 矿石方块   -> 2 锭      288 mB
//     （AllTheOres 的金属有石 / 深板岩 / 下界 / 末地 / other 五种变体；
//       原版的铁/金/铜只有原版那几种矿石，见文件末尾的「原版金属」段）
//   输出流体 id：NC 有的金属用 nuclearcraftneohaul:<金属>（铁/金/铜/铝/铅/镍/银/锡/铀/
//   钢/末影），其余用 alltheores:molten_<金属>；见下面的 fluidOf()。
//   文件末尾另有 NC 自己的 18 种锭（钆/铍/硼/镝/钬/锂/镁/锰/二氧化锰/氧化镍/钯/钍/锆等）
//   -> nuclearcraftneohaul:<金属>，这些金属 AllTheOres 没有。
//   Allthemodium 的 3 种金属锭 + 3 种合金锭 -> allthemodium:molten_*（同样 144 mB）。
//   1 锭 = 144 mB（熔融金属通用换算，1 个块的 9 锭 = 1296 mB）
//
// 只做「物品进 -> 流体出」：结构的 D/E 位可以装任意档位的物品输入仓 / 流体输出仓，
// 没有能量仓，也不加能量需求，免得机器缺仓永远跑不起来。
//
// 每条配方额外要求 1373 K 的温度（mekanism:temperature / io:input / value:1373）：
// 机器必须装热量输入仓（结构里的 A 位 mmcr:heat_input_hatch）才会跑。
// 注意 mekanism:heat 是「输出热量」，消耗侧要用 mekanism:temperature。
// 宝石类（cinnabar/fluorite/ruby/sapphire/salt/sulfur/peridot）没有熔融物，跳过。
// ============================================================

ServerEvents.recipes(event => {
    const POOL = 'mmcr_kubejs:smelting_furnace'
    const INGOT = 144
    const RAW_ORE = INGOT * 1.5   // 粗矿按 1.5 锭算 = 216 mB

    /** 输入物品 1 个 */
    const item = (id) => ({
        type: 'minecraft:item', io: 'input', item: { item: id }, count: 1
    })
    /** 输出流体（mB） */
    const molten = (id, amount) => ({
        type: 'minecraft:fluid', io: 'output', stack: { id: id, amount: amount }
    })
    // 温度门槛：每条配方 1373 K，需要热量输入仓
    const HEAT = 1373
    const heat = (value) => ({
        type: 'mekanism:temperature', io: 'input', value: value
    })

    // 熔融液 id：Nuclearcraft Neo Haul 有的金属优先用它的（nuclearcraftneohaul:<金属>），
    // 没有的继续用 AllTheOres 的（alltheores:molten_<金属>）。
    // NC 有：铝/铜/末影/金/铁/铅/镍/银/钢/锡/铀；黄铜/青铜/康铜/铂/锇/铱/荧石系/下界合金等它没有。
    const NC_MOLTEN = new Set(['aluminum', 'copper', 'enderium', 'gold', 'iron',
                               'lead', 'nickel', 'silver', 'steel', 'tin', 'uranium'])
    const fluidOf = (metal) => NC_MOLTEN.has(metal)
        ? 'nuclearcraftneohaul:' + metal
        : 'alltheores:molten_' + metal

    // 有熔融物的 10 种 AllTheOres 金属
    const METALS = ['aluminum', 'iridium', 'lead', 'nickel', 'osmium',
                    'platinum', 'silver', 'tin', 'uranium', 'zinc']
    // 矿石方块变体前缀（'' = 普通石头矿）
    const VARIANTS = ['', 'deepslate_', 'nether_', 'end_', 'other_']

    const recipe = (id, ticks, requirements) => event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: POOL,
        tick_time: ticks,
        parallelized: true,
        requirements: requirements.concat([heat(HEAT)])
    }).id('mmcr_kubejs:smelting_' + id)

    // ---- 锭 -> 1 锭的熔融物 ----
    // 合金/金属锭，加上 4 种用原版锭的（铜/金/铁/下界合金）。
    // 流体 id 由 fluidOf() 决定：NC 有的用 nuclearcraftneohaul:<金属>，其余 alltheores:molten_<金属>。
    const INGOT_ITEMS = [
        'alltheores:aluminum_ingot', 'alltheores:brass_ingot', 'alltheores:bronze_ingot',
        'alltheores:constantan_ingot', 'alltheores:electrum_ingot', 'alltheores:enderium_ingot',
        'alltheores:invar_ingot', 'alltheores:iridium_ingot', 'alltheores:lead_ingot',
        'alltheores:lumium_ingot', 'alltheores:nickel_ingot', 'alltheores:osmium_ingot',
        'alltheores:platinum_ingot', 'alltheores:signalum_ingot', 'alltheores:silver_ingot',
        'alltheores:steel_ingot', 'alltheores:tin_ingot', 'alltheores:uranium_ingot',
        'alltheores:zinc_ingot',
        'minecraft:copper_ingot', 'minecraft:gold_ingot', 'minecraft:iron_ingot',
        'minecraft:netherite_ingot'
    ]

    INGOT_ITEMS.forEach(itemId => {
        const metal = itemId.split(':')[1].replace('_ingot', '')
        recipe(metal + '_ingot', 100, [
            item(itemId),
            molten(fluidOf(metal), INGOT)
        ])
    })

    // ---- AllTheOres 自己的 10 种金属：粗矿 / 粗矿块 / 五种矿石变体 ----
    METALS.forEach(metal => {
        const fluidId = fluidOf(metal)

        // 粗矿 -> 1.5 锭
        recipe(metal + '_raw', 100, [
            item('alltheores:raw_' + metal),
            molten(fluidId, RAW_ORE)
        ])

        // 粗矿块 -> 9 个粗矿 = 13.5 锭
        recipe(metal + '_raw_block', 300, [
            item('alltheores:raw_' + metal + '_block'),
            molten(fluidId, RAW_ORE * 9)
        ])

        // 矿石方块（五种变体）-> 2 锭
        VARIANTS.forEach(variant => {
            recipe(metal + '_' + (variant || 'stone') + '_ore', 200, [
                item('alltheores:' + variant + metal + '_ore'),
                molten(fluidId, INGOT * 2)
            ])
        })
    })

    // ---- 原版金属：铁 / 金 / 铜 / 下界合金 ----
    // AllTheOres 不给这四种金属配矿石和粗矿（用的就是原版那几个），
    // 所以上面 METALS 循环覆盖不到它们，这里单独按同样的价目补一遍。
    // 结构：metal -> { 矿石: [...], 粗矿: id, 粗矿块: id }
    const VANILLA = {
        iron: {
            ores: ['minecraft:iron_ore', 'minecraft:deepslate_iron_ore'],
            raw: 'minecraft:raw_iron',
            rawBlock: 'minecraft:raw_iron_block'
        },
        gold: {
            ores: ['minecraft:gold_ore', 'minecraft:deepslate_gold_ore',
                   'minecraft:nether_gold_ore'],
            raw: 'minecraft:raw_gold',
            rawBlock: 'minecraft:raw_gold_block'
        },
        copper: {
            ores: ['minecraft:copper_ore', 'minecraft:deepslate_copper_ore'],
            raw: 'minecraft:raw_copper',
            rawBlock: 'minecraft:raw_copper_block'
        }
    }

    Object.keys(VANILLA).forEach(metal => {
        const set = VANILLA[metal]
        const fluidId = fluidOf(metal)

        set.ores.forEach(oreId => {
            const name = oreId.split(':')[1]          // iron_ore / deepslate_iron_ore ...
            recipe(name, 200, [
                item(oreId),
                molten(fluidId, INGOT * 2)
            ])
        })

        recipe(metal + '_raw', 100, [
            item(set.raw),
            molten(fluidId, RAW_ORE)
        ])

        recipe(metal + '_raw_block', 300, [
            item(set.rawBlock),
            molten(fluidId, RAW_ORE * 9)
        ])
    })

    // ---- Nuclearcraft Neo Haul 自己的锭 ----
    // 这些锭在 AllTheOres 里没有对应熔融物，但 NC 自带熔融液 nuclearcraftneohaul:<金属>，
    // 同样按 1 锭 = 144 mB。没有熔融液的锭（钴/铱/锰/钌/锡的氧化物、锆氧、石墨）跳过。
    const NC_INGOTS = ['aluminum', 'beryllium', 'boron', 'dysprosium', 'gadolinium',
                       'holmium', 'lead', 'lithium', 'magnesium', 'manganese',
                       'manganese_dioxide', 'nickel_oxide', 'palladium', 'silver',
                       'thorium', 'tin', 'uranium', 'zirconium']
    NC_INGOTS.forEach(metal => {
        recipe('nc_' + metal + '_ingot', 100, [
            item('nuclearcraftneohaul:' + metal + '_ingot'),
            molten('nuclearcraftneohaul:' + metal, INGOT)
        ])
    })

    // ---- Allthemodium：三种金属 + 三种合金 ----
    // 熔融液和锭都是 allthemodium 自己的（allthemodium:molten_*），同样 1 锭 = 144 mB。
    const ATM = [
        ['molten_allthemodium', 'allthemodium:allthemodium_ingot'],
        ['molten_vibranium',    'allthemodium:vibranium_ingot'],
        ['molten_unobtainium',  'allthemodium:unobtainium_ingot'],
        ['molten_atmvib',       'allthemodium:vibranium_allthemodium_alloy_ingot'],
        ['molten_vibunob',      'allthemodium:unobtainium_vibranium_alloy_ingot'],
        ['molten_atmunob',      'allthemodium:unobtainium_allthemodium_alloy_ingot']
    ]
    ATM.forEach(([fluid, itemId]) => {
        recipe('atm_' + fluid, 100, [
            item(itemId),
            molten('allthemodium:' + fluid, INGOT)
        ])
    })

    // 下界合金：远古残骸、下界合金碎片都不熔 —— 它们不是金属锭，走上古残骸 -> 高炉炼碎片 -> 原版合成锭。
    // 只有下界合金锭本身能熔（在 INGOT_ITEMS 里，1 锭 = 144 mB）。
})
