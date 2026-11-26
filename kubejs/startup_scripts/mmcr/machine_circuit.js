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
