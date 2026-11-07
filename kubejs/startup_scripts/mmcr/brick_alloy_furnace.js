// ============================================================
// MMCR 砖制合金炉 —— 阶段 1/3：机器定义（启动期，改完必须重启游戏，/reload 无效）
//
// 注册后 MMCR 自动生成专属控制器方块：
//   机器 ID      mmcr_kubejs:brick_alloy_furnace
//   控制器方块   mmcr:brick_alloy_furnace_controller   ← 注册在 MMCR 自己的命名空间里
//   配方池       mmcr_kubejs:brick_alloy_furnace       ← 配方 JSON 用 recipe_pool 字段认它
//   显示名键     machine.mmcr_kubejs.brick_alloy_furnace
//
// 中文名「砖制合金炉」在 lang 文件里：
//   kubejs/assets/mmcr/lang/zh_cn.json
//     machine.mmcr_kubejs.brick_alloy_furnace      机器名（JEI / 控制器界面 / Jade）
//     block.mmcr.brick_alloy_furnace_controller    控制器方块名（创造栏里那个方块）
//     item.mmcr.brick_alloy_furnace_controller     同一个方块作为物品时的名字
//     recipe_pool.mmcr_kubejs.brick_alloy_furnace  配方池名（JEI 分类、控制器界面）
//   en_us.json 里同名键配英文。
//
// 注意：
//   · displayNameKey() 只是翻译键，不是名字本身；没有 lang 条目会直接显示键名。
//   · 机器定义只认启动期窗口：控制器方块重启后才出现；结构（阶段 2）和配方（阶段 3）可以 /reload 热重载。
//   · 想让它吃「并行控制器 / 工厂多线程」，在 register() 之前接：
//     .allowMultithreading().allowParallelism().maxParallelAmount(64)
//     （配方那边还得写 parallelized: true 才会真的并行，两个开关互不影响。）
//
// 外观（按方块继承，不往资源包里放 png）：
//   .machineBasicBlock('minecraft:bricks')
//   → 控制器六面、成型端口、外壳的外观都从 minecraft:bricks 取，控制器因此就是「砖块」的样子。
//     「砖制」的壳子是砖块，控制器跟着一样最协调；不想要这一行就删掉，会退回默认
//     mmcr:block/basic_casing。只对完整方块生效（楼梯/台阶之类会静默回退默认外观）。
// ============================================================

MMCREvents.startup(event => {
    event
        .createMachine('mmcr_kubejs:brick_alloy_furnace')          // 全局机器 ID：命名空间:注册名
        .recipePool('mmcr_kubejs:brick_alloy_furnace')             // 绑定配方池
        .displayNameKey('machine.mmcr_kubejs.brick_alloy_furnace') // 显示名本地化键（中文名在 lang 文件里）
        .machineBasicBlock('minecraft:bricks')                     // 外观：整台机器按砖块方块继承
        .register()                                               // 提交定义，控制器方块在这一步生成
})
