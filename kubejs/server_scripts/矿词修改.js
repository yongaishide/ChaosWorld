ServerEvents.tags('item', event => {
    //物品矿词添加
    event.add('ftbstuff:hammers', 'projecte:rm_hammer')
    event.add('naturesaura:ancient_logs', [
        'naturesaura:ancient_log',
        'naturesaura:ancient_bark'
    ])
    event.add('iceandfire:dragonsteel_block', [
        'iceandfire:dragonsteel_fire_block',
        "iceandfire:dragonsteel_ice_block",
        "iceandfire:dragonsteel_lightning_block"
    ])
    //移除物品矿词
    event.remove('c:ingots/uranium', 'bigreactors:yellorium_ingot')
    event.remove('c:raw_materials/uranium', 'bigreactors:raw_yellorium')
    event.remove('c:storage_blocks/raw_uranium', "bigreactors:raw_yellorium_block")
    event.remove('forge:storage_blocks/uranium', "bigreactors:yellorium_block")
    event.remove('forge:storage_blocks/uranium', "enderio:copper_alloy_ingot")
    //暮色森林传送门激活物品
    event.removeAll('twilightforest:portal/activator')
    event.add('twilightforest:portal/activator', 'chaosworld_core:twilight_catalyst')
})
