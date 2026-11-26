MMCREvents.startup(event => {
    const space_elevator = event
        .createMachine("mmcr_kubejs:kubejs_space_elevator")
        .displayNameKey("machine.mmcr_kubejs.kubejs_space_elevator")
        .recipePool("mmcr_kubejs:kubejs_space_elevator")
        .appearance('minecraft:smooth_quartz')
        .controllerBaseTexture('minecraft:block/quartz_block_bottom') // 平滑石英没有标准方块贴图，手动指定
        .formedPortBaseTexture('minecraft:block/quartz_block_bottom')
        .host("mmcr_kubejs:kubejs_space_reassembler")

    const space_reassembler = event
        .createMachine("mmcr_kubejs:kubejs_space_reassembler")
        .displayNameKey("machine.mmcr_kubejs.kubejs_space_reassembler")
        .recipePool("mmcr_kubejs:kubejs_space_reassembler")
        .appearance('minecraft:quartz_pillar')
        .module()

    space_elevator.register()
    space_reassembler.register()
})
