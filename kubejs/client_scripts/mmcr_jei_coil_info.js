// 客户端脚本：读取配方需求里写的 min_coil_tier:N 标签，自动在 JEI 配方页画一行提示。
// 配方里写标签即可，不需要在这里逐条登记；没写标签的配方不显示这一行。
// 注意：本脚本会整体替换 MMCR 的「脚本侧 JEI 条目」列表，别的 addRecipeInfo 不要写在这儿。
var MIN_COIL_TAG = 'min_coil_tier:'
var INFO_KEY = 'info.mmcr_kubejs.industrial_blast_furnace.min_coil_tier'
var CN_NUM = ['一', '二', '三', '四', '五', '六', '七', '八', '九']

var Minecraft = Java.loadClass('net.minecraft.client.Minecraft')
var RecipeRegistry = Java.loadClass('cn.howxu.mmcr.api.recipe.RecipeRegistry')
var RecipeInfo = Java.loadClass('cn.howxu.mmcr.api.recipe.RecipeInformation')
var InfoRegistry = Java.loadClass('cn.howxu.mmcr.internal.client.RecipeInformationRegistry')
var InfoTarget = Java.loadClass('cn.howxu.mmcr.api.recipe.RecipeInformation$Target')
var ArrayList = Java.loadClass('java.util.ArrayList')

// 进世界后注册一次；之后每 600 tick 补一次，防止客户端脚本重载把条目清掉
var infoPending = true
var infoTicks = 0

function minCoilTierOf(recipe) {
    var best = 0
    var reqs = recipe.requirements()
    for (var i = 0; i < reqs.size(); i++) {
        var tags = reqs.get(i).tags()
        for (var j = 0; j < tags.size(); j++) {
            var tag = String(tags.get(j))
            if (tag.indexOf(MIN_COIL_TAG) !== 0) continue
            var tier = parseInt(tag.substring(MIN_COIL_TAG.length), 10)
            if (!isNaN(tier) && tier > best) best = tier
        }
    }
    return best
}

function rebuildRecipeInfo() {
    var recipes = RecipeRegistry.recipes()
    if (recipes.isEmpty()) return false
    var entries = new ArrayList()
    for (var i = 0; i < recipes.size(); i++) {
        var recipe = recipes.get(i)
        var tier = minCoilTierOf(recipe)
        if (tier >= 2) {
            var label = (tier >= 2 && tier <= 9) ? CN_NUM[tier - 1] : String(tier)
            var args = new ArrayList()
            args.add(label)
            entries.add(new RecipeInfo(InfoTarget.RECIPE, recipe.id(), INFO_KEY, args))
        }
    }
    InfoRegistry.replaceKubeJS(entries)
    return true
}

// 配方是进世界后才同步下来的，所以放在 tick 里等
ClientEvents.tick(event => {
    infoTicks++
    if (infoPending) {
        if (infoTicks % 20 !== 0) return
    } else if (infoTicks % 600 !== 0) {
        return
    }
    if (Minecraft.getInstance().level == null) return
    try {
        if (rebuildRecipeInfo()) infoPending = false
    } catch (err) {
    }
})
