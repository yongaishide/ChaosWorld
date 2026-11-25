// 凋零额外掉落：原版锭，抽取 50 + 抢夺等级*20 次
const EnchantmentHelper = Java.loadClass('net.minecraft.world.item.enchantment.EnchantmentHelper')
const Enchantments = Java.loadClass('net.minecraft.world.item.enchantment.Enchantments')
const Registries = Java.loadClass('net.minecraft.core.registries.Registries')
const EntityType = Java.loadClass('net.minecraft.world.entity.EntityType')
const LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity')

const INGOTS = [
    { id: 'minecraft:iron_ingot', weight: 100 },
    { id: 'minecraft:copper_ingot', weight: 80 },
    { id: 'minecraft:gold_ingot', weight: 60 },
    { id: 'minecraft:emerald', weight: 20 },
    { id: 'minecraft:diamond', weight: 20 },
    { id: 'avaritia:blaze_cube', weight: 20 },
    { id: 'minecraft:ancient_debris', weight: 20 },
    { id: 'minecraft:netherite_ingot', weight: 10 },
    { id: 'allthemodium:vibranium_ingot', weight: 1 }
]
const TOTAL_WEIGHT = INGOTS.reduce((sum, entry) => sum + entry.weight, 0)

EntityEvents.drops(event => {
    if (event.entity.type !== EntityType.WITHER) return

    // 找击杀者（近战或弓箭等投射物）
    let attacker = event.source.entity
    if (attacker && attacker.owner) attacker = attacker.owner

    // 计算击杀者身上的抢夺附魔等级
    let looting = 0
    if (attacker instanceof LivingEntity) {
        const holder = attacker.level().holderLookup(Registries.ENCHANTMENT).getOrThrow(Enchantments.LOOTING)
        looting = EnchantmentHelper.getEnchantmentLevel(holder, attacker)
    }

    // 抽取 30 + 抢夺*10 次，按权重累计各锭数量
    const counts = {}
    const rolls = 50 + looting * 20
    for (let i = 0; i < rolls; i++) {
        let r = Math.random() * TOTAL_WEIGHT
        let ingot = INGOTS[0].id
        for (const entry of INGOTS) {
            r -= entry.weight
            if (r < 0) {
                ingot = entry.id
                break
            }
        }
        counts[ingot] = (counts[ingot] || 0) + 1
    }

    // 按堆叠上限分批掉落
    for (const [id, total] of Object.entries(counts)) {
        let left = total
        while (left > 0) {
            const n = Math.min(left, 64)
            event.addDrop(Item.of(id, n))
            left -= n
        }
    }
})
