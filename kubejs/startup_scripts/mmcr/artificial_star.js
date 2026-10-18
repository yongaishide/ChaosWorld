// 人造恒星 —— 移植自 MMCR 官方示例
// 官方来源: example/startup_scripts/video/人造恒星.js
// 机器 id: chaosworld_core:artificial_star
// 控制器方块由 MMCR 自动派生: mmcr:artificial_star_controller
MMCREvents.startup(event => {
    event
        .createMachine('chaosworld_core:artificial_star')
        .recipePool('chaosworld_core:artificial_star')
        .displayNameKey('machine.chaosworld_core.artificial_star')
        .register()
})
