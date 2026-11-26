MMCREvents.startup(event => {
    event
        .createMachine('mmcr_kubejs:casting_machine')            // 全局机器 ID：命名空间:注册名
        .recipePool('mmcr_kubejs:casting_machine')               // 绑定配方池（这里显式写出免得日后改名漂移）
        .displayNameKey('machine.mmcr_kubejs.casting_machine')   // 显示名本地化键（中文名在 lang 文件里）
        .machineBasicBlock('quark:blackstone_bricks')            // 外观：整台机器按黑石砖方块继承
        .register()                                              // 提交定义，控制器方块在这一步生成
})
