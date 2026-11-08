// ============================================================
// MMCR 小型组装机 —— 阶段 1/3：机器定义（启动期，改完必须重启游戏，/reload 无效）
//
//   机器 ID      mmcr_kubejs:small_assembler
//   控制器方块   mmcr:small_assembler_controller
//   配方池       mmcr_kubejs:small_assembler
//   显示名键     machine.mmcr_kubejs.small_assembler
//
// 中文名「小型组装机」写在 kubejs/assets/mmcr/lang/{zh_cn,en_us}.json，四个键：
//   machine.mmcr_kubejs.small_assembler      机器名
//   block.mmcr.small_assembler_controller    控制器方块名
//   item.mmcr.small_assembler_controller     同上，作为物品时
//   recipe_pool.mmcr_kubejs.small_assembler  配方池名（JEI 分类）
//
// 外观：整台机器按 immersiveengineering:sheetmetal_steel 继承，和结构外壳一致。
// 不想要继承就删掉 machineBasicBlock 那行，回到默认的 mmcr:block/basic_casing。
//
// 配方池目前是空的。结构里有能量输入仓 + 物品输入总线 + 物品输出总线，
// 所以配方形态就是「物品进 → 物品出」，可能还带能量。
// ============================================================

MMCREvents.startup(event => {
    event
        .createMachine('mmcr_kubejs:small_assembler')
        .recipePool('mmcr_kubejs:small_assembler')
        .displayNameKey('machine.mmcr_kubejs.small_assembler')
        .machineBasicBlock('immersiveengineering:sheetmetal_steel')
        .register()
})
