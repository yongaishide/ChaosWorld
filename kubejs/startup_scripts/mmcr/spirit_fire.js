MMCREvents.startup(event => {
    event
        .createMachine('mmcr_kubejs:spirit_fire')            // 全局机器 ID：命名空间:注册名
        .recipePool('mmcr_kubejs:spirit_fire')               // 绑定配方池（显式写出，免得日后改机器 ID 时配方全对不上）
        .displayNameKey('machine.mmcr_kubejs.spirit_fire')   // 显示名本地化键（中文名在 lang 文件里）
        .allowParallelism()                                  // 允许并行（真正的并行数看结构里的并行控制器）
        .maxParallelAmount(64)                               // 并行上限 64 份（只是天花板，不是并行数）
        .register()                                          // 提交定义，控制器方块在这一步生成
})
