// 暮色森林阶段限制 - 配合 astages_ftbquests 使用
// FTB任务完成时奖励 astages:twilight_forest 即可自动授予阶段
/*
// ========== 1. 阶段自定义（标题/图标/聊天提示） ==========
AStages.customizeStage("twilight_forest")
    .titleOnAdd(twilight_forest => Component.literal("§5暮色森林"))
    .subTitleOnAdd(twilight_forest => Component.literal("§f传送门已解锁"))
    .chatMessageOnAdd(twilight_forest => Component.literal("§5暮色森林的传送门已经可以激活了！将暮色催化剂丢入水中即可。"))
    .titleOnRemove(twilight_forest => Component.literal("§5暮色森林"))
    .subTitleOnRemove(twilight_forest => Component.literal("§f传送门已关闭"))
    .chatMessageOnRemove(twilight_forest => Component.literal("§c暮色森林的传送门已经关闭。"))
    .fadeIn(20)
    .fadeOut(20)
    .stay(60)
    .icon("twilightforest:twilight_portal_miniature_structure")

// ========== 2. 暮色森林维度限制 ==========
PlayerEvents.tick(event => {
    let { player, level } = event
    if (player.age % 100 !== 0) return

    let dim = level.dimension.toString()
    if (dim === "twilightforest:twilight_forest" && !player.stages.has("twilight_forest")) {
        player.teleportTo("minecraft:overworld", player.x, 256, player.z)
        player.tell("§c你还没有资格进入暮色森林。")
    }
})

// ========== 3. 调试命令 ==========
ServerEvents.commandRegistry(event => {
    let { commands: Commands, arguments: Arguments } = event
    event.register(
        Commands.literal("stage")
            .then(Commands.literal("add")
                .then(Commands.argument("stage", Arguments.STRING.create(event))
                    .executes(ctx => {
                        let player = ctx.source.player
                        let stage = Arguments.STRING.getResult(ctx, "stage")
                        player.stages.add(stage)
                        player.tell(`§a阶段 §e${stage} §a已添加。`)
                        return 1
                    })
                )
            )
            .then(Commands.literal("remove")
                .then(Commands.argument("stage", Arguments.STRING.create(event))
                    .executes(ctx => {
                        let player = ctx.source.player
                        let stage = Arguments.STRING.getResult(ctx, "stage")
                        player.stages.remove(stage)
                        player.tell(`§c阶段 §e${stage} §c已移除。`)
                        return 1
                    })
                )
            )
            .then(Commands.literal("check")
                .then(Commands.argument("stage", Arguments.STRING.create(event))
                    .executes(ctx => {
                        let player = ctx.source.player
                        let stage = Arguments.STRING.getResult(ctx, "stage")
                        let has = player.stages.has(stage)
                        player.tell(`§e${stage}§f: §b${has}`)
                        return 1
                    })
                )
            )
    )
})
*/