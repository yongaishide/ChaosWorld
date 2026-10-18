// MMCR 官方示例：太空电梯（HOST + MODULE 模式）
// 来源：example/startup_scripts/A_Module_Machine.js
// 灵感来自 GTL 的太空电梯：主机（电梯）通过 .host(...) 接受模块（重组机），
// 模块通过 .module() 标记自己可被主机接纳。

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
