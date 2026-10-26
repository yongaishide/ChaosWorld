// ============================================================
// MMCR 冶炼炉 —— 阶段 1/3：机器定义（启动期，改完必须重启游戏，/reload 无效）
//
// 注册这一处，MMCR 就会自动生成一个专属控制器方块：
//   机器 ID      mmcr_kubejs:smelting_furnace
//   控制器方块   mmcr:smelting_furnace_controller   ← 注册在 MMCR 自己的命名空间里
//   配方池       mmcr_kubejs:smelting_furnace       ← 配方 JSON 用 recipe_pool 字段认它
//   显示名键     machine.mmcr_kubejs.smelting_furnace
//
// 三个容易搞混的点（官方文档 https://mmcr-wiki.howxu.cn/zh-cn/getting-started/kubejs.html）：
//   ① displayNameKey() 只是「翻译键」，不是名字本身。要真的显示成「冶炼炉」，得有 lang 文件
//      kubejs/assets/mmcr/lang/{zh_cn,en_us}.json（放哪个命名空间都行，键名才要紧）：
//        machine.mmcr_kubejs.smelting_furnace      机器名（JEI、控制器界面、Jade）
//        block.mmcr.smelting_furnace_controller    控制器方块名（创造栏里那个方块）
//        item.mmcr.smelting_furnace_controller     同一个方块作为物品时的名字
//        recipe_pool.mmcr_kubejs.smelting_furnace  配方池名（JEI 分类、控制器界面）
//   ② recipePool() 省略时默认跟机器 ID 同名。这里显式写出来，免得以后只改机器 ID 时
//      配方池悄悄跟着变、已有配方全部对不上。
//   ③ 机器定义只认启动期窗口：控制器方块在重启后才会出现；结构和配方则可以 /reload 热重载。
//
// 以后想让这台机器吃「并行控制器 / 工厂多线程」，就在 register() 之前接上：
//   .allowMultithreading().allowParallelism().maxParallelAmount(64)
// （配方那边还得自己写 parallelized: true 才会真的并行，两个开关互不影响。）
//
// 外观（直接按方块继承，不往资源包里放 png）：
//   .machineBasicBlock('quark:blackstone_bricks')
//   → 整台机器（控制器六面、成型端口、外壳）的外观都从 quark:blackstone_bricks 这个方块身上取，
//     控制器方块因此就是「黑石砖」的样子，无需再单独指定贴图。
//   想换外观就把这个 ID 换成别的方块（例如 minecraft:deepslate_bricks）；不写这一行则用默认
//   mmcr:block/basic_casing。
//   注意两点：
//     · 成型后的端口（热量/物品/流体仓）也会跟着继承这个方块的外观（formedPortTextureSource）。
//     · 只对「完整方块」生效：AppearanceStateResolver 会检查该方块默认形状是不是满方块，
//       楼梯/台阶/火把之类不是满方块的会静默回退成默认外观。
//     · 一旦设了 controllerBaseTexture / formedPortBaseTexture（overrideTexture），继承就被绕过。
//   原来那几张 kubejs:block/smelting_furnace_*.png 已不再被引用，留着无害，想删可以删。
//   贴图属于资源，改方块后 F3+T 重载资源即可看到；但这行是启动期注册，增删行仍需重启。
// ============================================================

MMCREvents.startup(event => {
    event
        .createMachine('mmcr_kubejs:smelting_furnace')          // 全局机器 ID：命名空间:注册名
        .recipePool('mmcr_kubejs:smelting_furnace')             // 绑定配方池
        .displayNameKey('machine.mmcr_kubejs.smelting_furnace') // 显示名本地化键（中文名在 lang 文件里）
        .machineBasicBlock('quark:blackstone_bricks')           // 外观：整台机器按黑石砖方块继承（控制器也是黑石砖）
        .register()                                            // 提交定义，控制器方块在这一步生成
})
