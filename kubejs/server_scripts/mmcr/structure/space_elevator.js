// MMCR 官方示例：太空电梯结构（HOST）+ 太空重组机结构（MODULE）
// 来源：example/server_scripts/structure/A_Module_Machine.js
// 两台机器都用 api.coupler() 声明耦合器位置，必须共享同一个世界坐标上的耦合器。

MMCREvents.server(event => {
    const api = event.getAPI()

    const space_elevator = event.createStructure("mmcr_kubejs:kubejs_space_elevator")

    space_elevator
        .pattern(['        X        ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 '])
        .pattern(['       XXX       ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 '])
        .pattern(['      XXXXX      ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 '])
        .pattern(['     XXAAAXX     ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 '])
        .pattern(['    XXXAAAXXX    ','        B        ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 '])
        .pattern(['   XXXXAAAXXXX   ','                 ','                 ','                 ','                 ','        X        ','                 ','                 ','                 ','                 ','                 ','                 '])
        .pattern(['  XXXXXXXXXXXXX  ','                 ','                 ','                 ','        X        ','       XXX       ','                 ','                 ','                 ','                 ','                 ','                 '])
        .pattern([' XXAAAXXXXXAAAXX ','       XXX       ','       DDD       ','       XXX       ','       XXX       ','      XXXXX      ','       XXX       ','       X X       ','                 ','                 ','                 ','                 '])
        .pattern(['XXXAAAXXXXXAAAXXX','    B  X X  B    ','       D D       ','       X X       ','      XX XX      ','     XXX XXX     ','       XXX       ','        X        ','        X        ','        X        ','        X        ','        X        '])
        .pattern([' XXAAAXXXXXAAAXX ','       XXX       ','       DED       ','       XXX       ','       XXX       ','      XXXXX      ','       XXX       ','       X X       ','                 ','                 ','                 ','                 '])
        .pattern(['  XXXXXXXXXXXXX  ','                 ','                 ','                 ','        X        ','       XXX       ','                 ','                 ','                 ','                 ','                 ','                 '])
        .pattern(['   XXXXXXXXXXX   ','                 ','                 ','                 ','                 ','        X        ','                 ','                 ','                 ','                 ','                 ','                 '])
        .pattern(['    XXXXXXXXX    ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 '])
        .pattern(['     XXXXXXX     ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 '])
        .pattern(['      XXXXX      ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 '])
        .pattern(['       XXX       ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 '])
        .pattern(['        X        ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 ','                 '])
        .set('X' ,api.block('minecraft:smooth_quartz'))
        .set('A' ,api.block('minecraft:amethyst_block'))
        // 用 api.coupler() 快速声明模块耦合器位置
        .set('B' ,api.coupler())
        .set('D' ,api.anyOf(
            api.block('minecraft:smooth_quartz'),
            api.anyOfItemInput(),
            api.anyOfItemOutput(),
            api.anyOfEnergyInput()
        ))
        .controller('E')
        .build()

    const space_reassembler = event.createStructure("mmcr_kubejs:kubejs_space_reassembler")

    space_reassembler
        .pattern(['AAA','XBX','XBX','XDX'])
        .pattern(['AAA','BEB','B B','DDD'])
        .pattern(['AAA','XFX','XBX','XDX'])
        .set('X',api.block('minecraft:quartz_pillar'))
        .set('A',api.block('minecraft:amethyst_block'))
        .set('B',api.anyOf(
            api.block('minecraft:smooth_quartz'),
            api.anyOfItemInput(),
            api.anyOfItemOutput(),
            api.anyOfEnergyInput(),
            api.block('mmcr:factory_controller')
        ))
        .set('D', api.block('minecraft:glass'))
        .set('E',api.coupler())
        .controller('F')
        .build()
})
