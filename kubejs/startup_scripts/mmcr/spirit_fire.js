// ============================================================
// MMCR 灵火 —— 阶段 1/4：机器定义（启动期，改完必须重启游戏，/reload 无效）
//
// 注册这一处，MMCR 就会自动生成一个专属控制器方块：
//   机器 ID      mmcr_kubejs:spirit_fire
//   控制器方块   mmcr:spirit_fire_controller   ← 注册在 MMCR 自己的命名空间里
//   配方池       mmcr_kubejs:spirit_fire       ← 配方 JSON 用 recipe_pool 字段认它
//   显示名键     machine.mmcr_kubejs.spirit_fire
//
// 中文名「灵火」来自神秘学（Occultism）的方块 occultism:spirit_fire
// （Occultism 自带的 zh_cn 里 block.occultism.spirit_fire = 灵火），
// 这台机器就是把「把东西丢进灵火里烧一下」这件事自动化：
// 结构中心那格必须摆真正的灵火方块，配方全是灵火在神秘学里本来就有的那些转换。
//
// 四个翻译键写在 kubejs/assets/mmcr/lang/{zh_cn,en_us}.json（放哪个命名空间都行，键名才要紧）：
//   machine.mmcr_kubejs.spirit_fire      机器名（JEI、控制器界面、Jade）
//   block.mmcr.spirit_fire_controller    控制器方块名（创造栏里那个方块）
//   item.mmcr.spirit_fire_controller     同一个方块作为物品时的名字
//   recipe_pool.mmcr_kubejs.spirit_fire  配方池名（JEI 分类、控制器界面）
//
// 外观：不写 .machineBasicBlock(...)，整台机器就用 MMCR 默认的 mmcr:basic_casing，
// 和结构里 X 位摆的外壳是同一块砖，控制器、成型端口都会跟着变成一样的外观。
// 想换外观就接一行，例如：
//   .machineBasicBlock('occultism:otherrock')   // 整机按异界岩方块继承（控制器也是异界岩）
// 注意只对「完整方块」生效，楼梯/台阶/火把之类会静默回退成默认外观。
//
// 并行（重要，0.1.7 的真实规则和直觉不一样）：
//   MMCR 的有效并行数 = min( 本行 maxParallelAmount , 结构里并行控制器方块提供的并行值之和 )，
//   两者都为 0/1 时就是 1。也就是说：
//     · allowParallelism()  只是「这台机器允许并行」的开关（默认 false）；
//     · maxParallelAmount() 只是**上限**，不是并行数本身（默认 1）；
//     · 真正的并行数来自结构里塞的 mmcr:parallel_controller_*（普通 4 / 高级 16 / 强化 64 /
//       专业 256 / 精英 1024 / 幻想 4096 / 极限 16384 / 终极 2147483647），一块算一份，可以叠；
//     · 只写 allowParallelism + maxParallelAmount、结构里一块并行控制器都不放 → 并行永远是 1。
//   所以这里只给「上限 64」，并行多少由玩家在结构里插几块并行器决定（见 structure 脚本的 X 位）。
//   配方那边还必须写 parallelized: true，否则即使并行数够也只会一份一份跑。
//   多线程（allowMultithreading）是另一套东西：工厂控制器的独立配方槽位，这里不开。
// ============================================================

MMCREvents.startup(event => {
    event
        .createMachine('mmcr_kubejs:spirit_fire')            // 全局机器 ID：命名空间:注册名
        .recipePool('mmcr_kubejs:spirit_fire')               // 绑定配方池（显式写出，免得日后改机器 ID 时配方全对不上）
        .displayNameKey('machine.mmcr_kubejs.spirit_fire')   // 显示名本地化键（中文名在 lang 文件里）
        .allowParallelism()                                  // 允许并行（真正的并行数看结构里的并行控制器）
        .maxParallelAmount(64)                               // 并行上限 64 份（只是天花板，不是并行数）
        .register()                                          // 提交定义，控制器方块在这一步生成
})
