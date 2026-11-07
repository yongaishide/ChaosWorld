// 铁砧制板：锤子磨损 + 经验当场退回（配合 server_scripts/recipes/lychee/anvil_plate.js）
//
// Lychee 铁砧配方的执行顺序（反编译 AnvilMenuMixin / AnvilMenu 得到）：
//   1. 铁砧界面刷新时 assemble() 只算预览结果，不扣东西
//   2. 玩家取走产物时 onTake() 的 HEAD 先跑配方里的 post 动作（本文件在这里）
//   3. 再走原版铁砧逻辑：按 cost 扣经验、清空左槽、右槽按 material_cost 扣锭
//   4. 最后 Lychee 把 holder 里 consumption == 0 的槽位写回槽位
// 所以这里给锤子加 1 点损伤、把左槽 consumption 置 0（锤子留回左槽），
// 并在原版扣经验之前把这 1 级补回去，净消耗 0 级。
//
// 注意：原版 AnvilMenu.mayPickup 是
//   (player.hasInfiniteMaterials() || player.experienceLevel >= cost) && cost > 0
// 所以 level_cost 只能填 1；填 0 会变成"产物显示出来但拿不出来"。

const $ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
const $LootContextParams = Java.loadClass('net.minecraft.world.level.storage.loot.parameters.LootContextParams')

LycheeEvents.customAction('chaosworld_core:hammer_wear', event => {
    event.applyFunc = (recipe, ctx, times) => {
        // 0 号槽 = 铁砧左侧（锤子），1 号槽 = 右侧（锭），2 号槽 = 产物
        const holder = ctx.get(LycheeContextKey.ITEM).get(0)
        const hammer = holder.get()
        if (hammer == null || hammer.isEmpty()) return

        const maxDamage = hammer.getMaxDamage()
        if (maxDamage > 0) {
            // 有耐久的工具：扣 times 点，扣光则直接碎掉
            const damage = hammer.getDamageValue() + times
            if (damage >= maxDamage) {
                holder.set($ItemStack.EMPTY)
            } else {
                hammer.setDamageValue(damage)
                holder.set(hammer)
            }
        }
        // maxDamage <= 0：不可破坏的工具（例如 projecte 的红物质锤），原样留下

        // 消耗 0 件 → Lychee 会把锤子放回铁砧左槽
        holder.setConsumption(0)

        // 紧接着原版 onTake 会 giveExperienceLevels(-cost)，这里抢在它前面补回来
        if (times > 0) {
            try {
                const player = ctx.get(LycheeContextKey.LOOT_PARAMS).get($LootContextParams.THIS_ENTITY)
                if (player != null && !player.isCreative()) {
                    player.giveExperienceLevels(times)
                }
            } catch (e) {
                console.warn('[chaosworld_core] 铁砧制板：退还经验失败 ' + e)
            }
        }
    }
    // 推荐取消事件，避免被其他脚本再改
    event.cancel()
})
