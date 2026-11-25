// ============================================================
// MMCR 浇筑机 —— 阶段 1/3：机器定义（启动期，改完必须重启游戏，/reload 无效）
//
// 注册这一处，MMCR 就会自动生成一个专属控制器方块：
//   机器 ID      mmcr_kubejs:casting_machine
//   控制器方块   mmcr:casting_machine_controller   ← 注册在 MMCR 自己的命名空间里
//   配方池       mmcr_kubejs:casting_machine       ← 配方 JSON 用 recipe_pool 字段认它
//   显示名键     machine.mmcr_kubejs.casting_machine
//
// 中文名「浇筑机」写在 kubejs/assets/mmcr/lang/{zh_cn,en_us}.json，四个键：
//   machine.mmcr_kubejs.casting_machine      机器名（JEI、控制器界面、Jade）
//   block.mmcr.casting_machine_controller    控制器方块名
//   item.mmcr.casting_machine_controller     同一个方块作为物品时的名字
//   recipe_pool.mmcr_kubejs.casting_machine  配方池名（JEI 分类）
//
// 外观：和冶炼炉一样，整台机器按 quark:blackstone_bricks 方块继承
//   （控制器、成型端口都变成黑石砖的样子）。不想要继承就删掉 machineBasicBlock 那行，
//   回到默认的 mmcr:block/basic_casing。
//
// 这台机器目前没有配方：配方池是空的。写配方时 recipe_pool 填 mmcr_kubejs:casting_machine，
// 结构里只有流体输入仓和物品输出总线，所以配方形态是「流体进 → 物品出」。
// ============================================================

MMCREvents.startup(event => {
    event
        .createMachine('mmcr_kubejs:casting_machine')            // 全局机器 ID：命名空间:注册名
        .recipePool('mmcr_kubejs:casting_machine')               // 绑定配方池（这里显式写出免得日后改名漂移）
        .displayNameKey('machine.mmcr_kubejs.casting_machine')   // 显示名本地化键（中文名在 lang 文件里）
        .machineBasicBlock('quark:blackstone_bricks')            // 外观：整台机器按黑石砖方块继承
        .register()                                              // 提交定义，控制器方块在这一步生成
})
