AvaritiaEvents.singularity(event => {
    //删除所有奇点
    event.removeAll()
    //红石合金锭奇点
    event.register('chaosworld_core:redstone_alloy', s => {
        s.setDisplayName('singularity.chaos.redstone_alloy')
         .setColors(0xE05443, 0x732C27)
         .setCount(10240)
         .setTimeCost(200)
         .setIngredient('enderio:redstone_alloy_ingot')
    })
    //ATM锭奇点
    event.register('chaosworld_core:allthemodium', s => {
        s.setDisplayName('singularity.chaos.allthemodium')
         .setColors(0xFFA62B, 0x9A4A0F)
         .setCount(1024)
         .setTimeCost(200)
         .setIngredient('allthemodium:allthemodium_ingot')
    })
    //振金奇点
    event.register('chaosworld_core:vibranium', s => {
        s.setDisplayName('singularity.chaos.vibranium')
         .setColors(0x35C9BD, 0x0F5C7A)
         .setCount(512)
         .setTimeCost(200)
         .setIngredient('allthemodium:vibranium_ingot')
    })
    //难得素奇点
    event.register('chaosworld_core:unobtainium', s => {
        s.setDisplayName('singularity.chaos.unobtainium')
         .setColors(0xB05CF0, 0x432A94)
         .setCount(128)
         .setTimeCost(200)
         .setIngredient('allthemodium:unobtainium_ingot')
    })
    //数据水晶奇点
    event.register('chaosworld_core:data_crystal', s => {
        s.setDisplayName('singularity.chaos.data_crystal')
         .setColors(0x6FDCC8, 0x01444F)
         .setCount(10240)
         .setTimeCost(200)
         .setIngredient('data_energistics:data_crystal')
    })
    //元素符文奇点
    event.register('chaosworld_core:runes_1', s => {
        s.setDisplayName('singularity.chaos.runes_1')
         .setColors(0x63E63A, 0x3E3A28)
         .setCount(1024)
         .setTimeCost(200)
         .setIngredient('chaosworld_core:runes_1')
    })
    //无限符文奇点
    event.register('chaosworld_core:infinite_runes', s => {
        s.setDisplayName('singularity.chaos.infinite_runes')
         .setColors(0xFFDE7A, 0x5A4A20)
         .setCount(256)
         .setTimeCost(200)
         .setIngredient('chaosworld_core:infinite_runes')
    })
    //塑料奇点
    event.register('chaosworld_core:plastic', s => {
        s.setDisplayName('singularity.chaos.plastic')
         .setColors(0xC9CFD4, 0x525D65)
         .setCount(4096)
         .setTimeCost(200)
         .setIngredient('industrialforegoing:plastic')
    })
    //水晶矩阵锭奇点
    event.register('chaosworld_core:crystal_matrix_ingot', s => {
        s.setDisplayName('singularity.chaos.crystal_matrix_ingot')
         .setColors(0x6FE0BC, 0x1B5C58)
         .setCount(1024)
         .setTimeCost(200)
         .setIngredient('avaritia:crystal_matrix_ingot')
    })
    //暮色合金锭奇点
    event.register('chaosworld_core:twilight_alloy', s => {
        s.setDisplayName('singularity.chaos.twilight_alloy')
         .setColors(0x8E6BD6, 0x35244F)
         .setCount(3072)
         .setTimeCost(200)
         .setIngredient('chaosworld_core:ingot_twilight_alloy')
    })
    //觉醒龙锭奇点
    event.register('chaosworld_core:awakened_draconium', s => {
        s.setDisplayName('singularity.chaos.awakened_draconium')
         .setColors(0xF06A10, 0x9F0000)
         .setCount(512)
         .setTimeCost(200)
         .setIngredient('draconicevolution:awakened_draconium_ingot')
    })
    //量子合金奇点
    event.register('chaosworld_core:quantum_alloy', s => {
        s.setDisplayName('singularity.chaos.quantum_alloy')
         .setColors(0xC77BFF, 0x2A1650)
         .setCount(2048)
         .setTimeCost(200)
         .setIngredient('advanced_ae:quantum_alloy')
    })
})
