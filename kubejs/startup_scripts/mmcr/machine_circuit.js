// ============================================================
// 超精电路蚀刻机 —— 机器注册 + ContentTweaker 老物品的重建（启动期）
// 启动期脚本改完必须重启游戏（/reload 不会重新注册机器和物品）
// ============================================================
//
// 机器 ID：mmcr_kubejs:machine_circuit（配方池同名，控制器方块由 MMCR 自动注册）
//   · 并行上限 16 —— 对应原 MachineModifier.setMaxParallelism("machine_circuit", 16)
//   · 允许工厂控制器多线程调度
//
// 物品：1.12.2 用 ContentTweaker 注册的那批物品在 1.21.1 没有对应物，
//   这里用 KubeJS 按原 id 重建到 kubejs: 命名空间下：
//     contenttweaker:circuit1            -> kubejs:circuit1
//     contenttweaker:compressedresinplate -> kubejs:compressedresinplate
//     contenttweaker:basiccircuit        -> kubejs:basiccircuit   ……以此类推
//   整套电路体系（掩膜/研究类、树脂板、9 档基板、9 档集成电路、蕴魔合金锭）全部重建，
//   共 27 个；蚀刻机只用其中 15 个，其余留给将来的超导/量子机器。
//   贴图：已从 1.12.2 的
//     versions\模块化科技：探索\resources\contenttweaker\textures\items\<同名>.png
//   复制到 kubejs\assets\kubejs\textures\item\（15 个贴图全部与源文件 SHA256 一致），
//   模型由 .texture() 自动生成，不用再手写 models\item\*.json。
//
// 注意：原配方里作为「掩膜」的 circuit1/2/3 不消耗，靠配方里的 consume_chance: 0 实现，
//   见 server_scripts/recipes/mmcr/machine_circuit.js。
// ============================================================

MMCREvents.startup(event => {
    event.createMachine('mmcr_kubejs:machine_circuit')
        .recipePool('mmcr_kubejs:machine_circuit')
        .displayNameKey('machine.mmcr_kubejs.machine_circuit')
        .allowMultithreading()
        .allowParallelism()
        .maxParallelAmount(16)
        .register()
})

StartupEvents.registry('item', event => {
    // 贴图已从 1.12.2 的 contenttweaker 资源里复制到
    //   kubejs\assets\kubejs\textures\item\<同名>.png
    // .texture() 会让 KubeJS 自动生成 models\item\<同名>.json（parent = item/generated）
    //
    // 这里把蚀刻机用到的、以及同一套电路体系里的物品全部重建（共 27 个），
    // 剧情/难度上暂时用不到的量子、寰宇、无尽几档也一并注册，
    // 将来做超导/量子那几台机器时可以直接用，不用再改 startup。
    var IDS = [
        // 掩膜 / 研究类（原 ContentTweaker 里 maxStackSize = 1）
        'circuit1', 'circuit2', 'circuit3',
        'tech1', 'tech2', 'tech3',

        // 树脂板
        'resinplate', 'compressedresinplate',

        // 各档电路基板
        'basiccircuitplate', 'advancedcircuitplate', 'epiccircuitplate',
        'mastercircuitplate', 'extremecircuitplate', 'quantumcircuitplate',
        'superquantumcircuitplate', 'cosmiccircuitplate', 'infinitecircuitplate',

        // 各档集成电路
        'basiccircuit', 'advancedcircuit', 'epiccircuit',
        'mastercircuit', 'extremecircuit', 'quantumcircuit',
        'superquantumcircuit', 'cosmiccircuit', 'infinitecircuit',

        // 材料
        'magicalingot'
    ]

    IDS.forEach(function (id) {
        event.create('kubejs:' + id).texture('kubejs:item/' + id)
    })
})
