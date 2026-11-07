// 铁砧制板（Lychee）
//   玩法一 lychee:anvil_crafting：把锤子放左槽、2 个锭放右槽，取产物时锤子 -1 耐久
//   玩法二 lychee:block_crushing：把 2 个锭放在锻造台上，铁砧从上方砸下来 → 直接掉板
//
//   铁砧左槽：矿词 chaosworld_core:hammers 的工具（锤子）
//   铁砧右槽：2 个任意锭（矿词 c:ingots/<metal>）
//   产物：对应的板
//   每次取走产物，锤子消耗 1 点耐久并留在铁砧上（见 kubejs/startup_scripts/lychee_anvil_hammer.js）
//   经验：原版 AnvilMenu.mayPickup 要求 cost > 0 才准取件，所以 level_cost 只能填 1，
//         取走时由 post 动作在原版扣经验之前补回（净消耗 0 级，但取件那一刻身上要有 1 级）
//
// 想只保留某几种金属，删掉下表里对应的行即可。
// 锭全部走 c:ingots/<metal> 标签，所以不同模组的同种锭都能用。
ServerEvents.recipes(event => {
    const HAMMER = { tag: 'chaosworld_core:hammers' }
    const WEAR_ACTION = 'chaosworld_core:hammer_wear'

    /** 金属名（c:ingots 标签后缀）, 板物品 id */
    const METALS = [
        ['allthemodium', 'allthemodium:allthemodium_plate'],
        ['aluminum', 'alltheores:aluminum_plate'],
        ['atmium', 'chaosworld_core:plate_atmium'],
        ['brass', 'alltheores:brass_plate'],
        ['bronze', 'alltheores:bronze_plate'],
        ['chaotic_metal', 'chaosworld_core:plate_chaotic_metal'],
        ['constantan', 'alltheores:constantan_plate'],
        ['copper', 'alltheores:copper_plate'],
        ['draconic_metal', 'chaosworld_core:plate_draconic_metal'],
        ['electrum', 'alltheores:electrum_plate'],
        ['enderium', 'alltheores:enderium_plate'],
        ['holy_gold', 'chaosworld_core:plate_holy_gold'],
        ['hop_graphite', 'immersiveengineering:plate_hop_graphite'],
        ['ice', 'chaosworld_core:plate_ice'],
        ['invar', 'alltheores:invar_plate'],
        ['iridium', 'alltheores:iridium_plate'],
        ['iron', 'alltheores:iron_plate'],
        ['lead', 'alltheores:lead_plate'],
        ['lich', 'chaosworld_core:plate_lich'],
        ['lumium', 'alltheores:lumium_plate'],
        ['nickel', 'alltheores:nickel_plate'],
        ['osmium', 'alltheores:osmium_plate'],
        ['platinum', 'alltheores:platinum_plate'],
        ['quantum', 'chaosworld_core:plate_quantum'],
        ['shadow', 'ifmup:shadow_plate'],
        ['shadow_rose', 'ifmup:shadow_rose_plate'],
        ['signalum', 'alltheores:signalum_plate'],
        ['silver', 'alltheores:silver_plate'],
        ['stainless_steel', 'chaosworld_core:plate_stainless_steel'],
        ['star_ether_alloy', 'ifmup:star_ether_alloy_plate'],
        ['steel', 'alltheores:steel_plate'],
        ['tech_1', 'chaosworld_core:plate_tech_1'],
        ['tech_2', 'chaosworld_core:plate_tech_2'],
        ['tech_3', 'chaosworld_core:plate_tech_3'],
        ['tech_4', 'chaosworld_core:plate_tech_4'],
        ['tech_5', 'chaosworld_core:plate_tech_5'],
        ['tech_6', 'chaosworld_core:plate_tech_6'],
        ['tech_7', 'chaosworld_core:plate_tech_7'],
        ['tech_8', 'chaosworld_core:plate_tech_8'],
        ['tech_9', 'chaosworld_core:plate_tech_9'],
        ['thaumium', 'thaumaturge:plate_thaumium'],
        ['tin', 'alltheores:tin_plate'],
        ['twilight_alloy', 'chaosworld_core:plate_twilight_alloy'],
        ['unknown_magic', 'ifmup:unknown_magic_plate'],
        ['unobtainium', 'allthemodium:unobtainium_plate'],
        ['uranium', 'alltheores:uranium_plate'],
        ['vibranium', 'allthemodium:vibranium_plate'],
        ['void_metal', 'thaumaturge:plate_void'],
        ['wyvern_metal', 'chaosworld_core:plate_wyvern_metal'],
        ['zinc', 'alltheores:zinc_plate'],
    ]

    METALS.forEach(([metal, plate]) => {
        event.custom({
            type: 'lychee:anvil_crafting',
            item_in: [
                HAMMER,
                { tag: 'c:ingots/' + metal },
            ],
            item_out: { id: plate, count: 1 },
            level_cost: 1,   // 不能填 0：原版要求 cost > 0 才准取件，1 级会在 post 动作里退回
            material_cost: 2,
            post: [{ type: 'custom', id: WEAR_ACTION }],
        }).id('chaosworld_core:anvil_plate/' + metal)
    })

    // 玩法二：不用铁砧界面 —— 把 2 个锭丢在锻造台上，让铁砧砸下来，锭就变成板
    // （lychee:block_crushing：下落方块落在物品实体上；默认铁砧砸完照常落地，不会被吃掉）
    METALS.forEach(([metal, plate]) => {
        event.custom({
            type: 'lychee:block_crushing',
            item_in: { tag: 'c:ingots/' + metal, count: 2 },
            // 只有砸在锻造台上才算数；想改成任意方块就删掉这一行，想换方块就改 id
            landing_block: 'minecraft:smithing_table',
            post: [{ type: 'drop_item', id: plate, count: 1 }],
        }).id('chaosworld_core:anvil_crushing/' + metal)
    })
})
