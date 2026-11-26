MMCREvents.startup(event => {
    event
        .createMachine('mmcr_kubejs:smelting_furnace')          // 全局机器 ID：命名空间:注册名
        .recipePool('mmcr_kubejs:smelting_furnace')             // 绑定配方池
        .displayNameKey('machine.mmcr_kubejs.smelting_furnace') // 显示名本地化键（中文名在 lang 文件里）
        .machineBasicBlock('quark:blackstone_bricks')           // 外观：整台机器按黑石砖方块继承（控制器也是黑石砖）
        .register()                                            // 提交定义，控制器方块在这一步生成
})
