
PlayerEvents.chat(event => {
    if (event.message.trim() !== "新手大礼包") return

    let player = event.player
    if (player.persistentData.getBoolean("author_greeting_reward")) {
        player.tell("§c你怎么这么贪心？我TM让你飞起来！")
        player.potionEffects.add("minecraft:levitation", 100, 3)
        return
    }
    player.persistentData.putBoolean("author_greeting_reward", true)

    player.give(Item.of("minecraft:diamond", 1))
    player.give(Item.of("minecraft:iron_ingot", 2))
    player.tell("§a感谢支持！新手大礼包已发放")
})
