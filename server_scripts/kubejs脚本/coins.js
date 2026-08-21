//感谢该网站的代码支持https://www.mcmod.cn/post/5952.html
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')
const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
 
// 定义货币物品ID与其对应的价值
const currency_value = {
  "coinsje:copper_coin": 1,
  "coinsje:iron_coin": 9,
  "coinsje:gold_coin": 81,
  "coinsje:diamond_coin": 729,
  "coinsje:emerald_coin": 6561,
  "coinsje:netherite_coin": 59049,
  "coinsje:copper_coin_pile": 9,
  "coinsje:iron_coin_pile": 81,
  "coinsje:gold_coin_pile": 729,
  "coinsje:diamond_coin_pile": 6561,
  "coinsje:emerald_coin_pile": 59049,
  "coinsje:netherite_coin_pile": 531441
}

// 右键[时钟]时将背包内的实体货币转换成VSS商店的虚拟货币
// 单独右键实体货币时转换成VSS商店的虚拟货币
ItemEvents.rightClicked(event => {
  const { player, server, item, level } = event
 
  // 潜行状态下不触发兑换功能
  if (player.isShiftKeyDown()) return
 
  let itemId = item.id
 
  // 只处理[时钟]或已定义的货币物品
  if (itemId !== "minecraft:clock" && !currency_value[itemId]) return
 
  // 获取玩家余额
  let balance = ViScriptShopUtil.getMoney(player)
 
  // 处理[时钟]右键：兑换背包内所有货币物品
  if (itemId === "minecraft:clock") {
    let coinValue = 0 // 货币总价值
    let inventory = player.inventory // 玩家背包物品栏
 
    // 收集要移除的物品信息
    let coinsToRemove = []
 
    // 遍历背包所有格子查找货币物品
    for (let i = 0; i < inventory.containerSize; i++) {
      let itemStack = inventory.getStackInSlot(i)
      // 检查物品是否为已定义的货币
      if (currency_value[itemStack.id] != null) {
        coinValue = coinValue + currency_value[itemStack.id] * itemStack.count
        coinsToRemove.push({ slot: i, count: itemStack.count })
      }
    }
 
    // 移除收集到的所有货币物品
    for (let itemInfo of coinsToRemove) {
      let item = inventory.getStackInSlot(itemInfo.slot)
      item.shrink(itemInfo.count)
    }
 
    // 未找到任何货币时的处理
    if (coinValue == 0) {
      player.swing()
      player.setStatusMessage(`当前余额：§e${balance}C`)
      return
    }
 
    // 兑换动画效果
    for (let i = 0; i <= 20; i += 1) {
      let k = i
      server.scheduleInTicks(k, ctx => {
        player.setStatusMessage(`当前余额：§e${balance + parseInt((coinValue / 20) * k)}C §7(+${coinValue}C)`)
      })
    }
 
    // 兑换完成效果
    player.swing()
    player.level.playSound(null, player.x, player.y, player.z, $SoundEvents.NOTE_BLOCK_BELL.value(), 'master', 1.0, 1.0)
    player.level.spawnParticles($ParticleTypes.HAPPY_VILLAGER, false, player.x, player.y + 1.0, player.z, 12, 0.5, 0.5, 0.5, 0.5)
 
    // 实际增加玩家余额
    ViScriptShopUtil.addMoney(player, coinValue)
  }
  // 处理货币物品右键：只兑换手中持有的货币
  else {
    // 获取手持物品信息
    let handItem = player.getMainHandItem()
    let count = handItem.count
    let coinValue = currency_value[itemId] * count // 计算总价值
 
    // 兑换动画效果
    for (let i = 0; i <= 20; i += 1) {
      let tick = i
      server.scheduleInTicks(tick, ctx => {
        player.setStatusMessage(`当前余额：§e${balance + parseInt((coinValue / 20) * tick)}C §7(+${coinValue}C)`)
      })
    }
 
    // 移除手中货币物品
    handItem.shrink(count)
 
    // 兑换完成效果
    player.swing()
    player.level.playSound(null, player.x, player.y, player.z, $SoundEvents.NOTE_BLOCK_BELL.value(), 'master', 1.0, 1.0)
    player.level.spawnParticles($ParticleTypes.HAPPY_VILLAGER, false, player.x, player.y + 1.0, player.z, 12, 0.5, 0.5, 0.5, 0.5)
 
 
    // 实际增加玩家余额
    ViScriptShopUtil.addMoney(player, coinValue)
  }
})
 
// 手持[时钟]右键容器时，将实体货币转换成VSS商店的虚拟货币
BlockEvents.rightClicked(event => {
  const { player, block, server, hand, level } = event
  const blockPos = block.pos // 获取方块位置
 
  // 检查条件：必须主手持[时钟]
  if (hand !== 'MAIN_HAND' || player.mainHandItem.id !== "minecraft:clock") {
    return
  }
 
  // 独立的条件检查
  if (block.inventory == null) return // 只处理有物品栏的方块
  if (!player.isShiftKeyDown()) return // 必须按住Shift键
 
  let inventory = block.inventory
  let balance = ViScriptShopUtil.getMoney(player)
  let coinValue = 0
 
  // 扫描容器内的所有货币物品
  for (let i = 0; i < inventory.getSlots(); i++) {
    let slotItem = inventory.getStackInSlot(i)
    if (currency_value[slotItem.id]) {
      coinValue += currency_value[slotItem.id] * slotItem.count
      inventory.extractItem(i, slotItem.count, false) // 从容器中移除货币
    }
  }
 
  // 容器内无货币时的处理
  if (coinValue === 0) {
    player.swing()
    player.setStatusMessage(`当前余额：§e${balance}C`)
    return
  }
 
  // 兑换动画效果
  for (let i = 0; i < 20; i += 1) {
    let tick = i
    server.scheduleInTicks(tick, ctx => {
      player.setStatusMessage(`当前余额：§e${balance + parseInt((coinValue / 20) * tick)}C §7(+${coinValue}C)`)
    })
  }

  // 在服务端 tick 中执行最终兑换，确保 ViScriptShopUtil.addMoney 正确生效
  server.scheduleInTicks(20, ctx => {
    player.setStatusMessage(`当前余额：§e${balance + coinValue}C §7(+${coinValue}C)`)
    player.swing()
    block.level.playSound(null, blockPos, $SoundEvents.NOTE_BLOCK_BELL.value(), 'blocks', 1.0, 1.0)
    block.level.spawnParticles($ParticleTypes.HAPPY_VILLAGER, false, block.x + 0.5, block.y + 1, block.z + 0.5, 12, 0.5, 0.5, 0.5, 0.5)
    ViScriptShopUtil.addMoney(player, coinValue)
  })
})