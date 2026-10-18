# 模组总览与分类

ChaosWorld 一共装了 **231 个模组**（`mods/` 目录下的 jar 数量）。下面按用途分类，括号内是 jar 前缀，完整清单见 [完整模组清单](/mods/list)。

## 科技

整合包最重的一块，多条独立科技线并存，任务线也是按它们排的。

| 体系 | 模组 |
| --- | --- |
| 通用机械全家桶 | `Mekanism`、`MekanismGenerators`、`MekanismTools`、`mekanism_extras`、`mekmm`、`mekanism_magic`、`mekanisticrouters`、`mekenergistics`、`JustEnoughMekanismMultiblocks` |
| 末影接口 | `enderio`、`enderio_evolution`、`enderio_conduit_opt` |
| 工业先锋 | `industrialforegoing`、`ifeu`（额外升级）、`ifmup` |
| 沉浸工程 | `ImmersiveEngineering` |
| 机械动力 | `create`、`createaddition`、`CreateDragonsPlus`、`create-enchantment-industry`、`createjeicompat` |
| 气动工艺 | `pneumaticcraft-repressurized`、`appliedpneumatics` |
| 能源与电网 | `Powah`、`FluxNetworks`、`more_flux_storage`、`alternate_current`、`stellaris` |
| 其它设备模组 | `justdirethings`、`justdynathings`、`alloy_smelter`（分级冶炼炉）、`mmcr`（模块化机械）、`Multiblocked2`、`actuallyadditions`、`rftoolsbase`、`xnet`、`mob_grinding_utils`、`HostileNeuralNetworks` |

## AE2 生态

本包的核心主线，扩展数量非常多。

- 本体与基础扩展：`appliedenergistics2`、`AE2AddonLib`、`ae2wtlib`、`ae2utility`、`ae2jeiintegration`、`ae2cs`
- 大型扩展：`AdvancedAE`、`ExtendedAE`、`extendedae_plus`、`ae2lt`、`neoecoae`、`data_energistics`
- 存储单元：`ae2omnicells`、`Cell4`
- 跨模组桥接：`appliedpneumatics`、`AppliedFlux`、`mekenergistics`、`Applied-Mekanistics`、`applied_extended_crafting`、`merequester`、`PackagedAuto`、`PackagedDraconic`

## 魔法与冒险

| 体系 | 模组 |
| --- | --- |
| 魔法 | `ars_nouveau`（新生魔艺）、`AstralSorcery`（星辉魔法）、`occultism`（神秘学）、`NaturesAura`（自然灵气）、`mekanism_magic` |
| 农业 | `MysticalAgriculture`、`MysticalAgradditions`、`FarmersDelight`、`kaleidoscopecookery`、`avaritia_delight` |
| 生物与维度 | `iceandfire`（冰火传说）、`twilightforest`（暮色森林）、`AoA3`（虚无世界）、`L_Ender's Cataclysm`（灾变）、`NotEnoughTrials` |
| 战斗与刷怪 | `ApothicAttributes`、`ApothicEnchanting`、`ApothicSpawners`、`GatewaysToEternity`、`jei_gateways`、`bountifulbaubles`、`treasureenchant`、`lootintegrations` |
| 蜜蜂 | `productivebees`、`productivebeesgenesis`、`ModularBees` |

## 合成与终局

- **拓展合成**：`ExtendedCrafting`、`applied_extended_crafting`
- **无尽贪婪**：`Re-Avaritia`、`avaritia_expand`
- **等价交换**：`ProjectE`、`projectexpansion`、`ProjectE_Integration`
- **压缩与材料**：`allthecompressed`、`alltheores`、`allthemodium`、`alloy_smelter`
- **通用合成辅助**：`extendedae` 的装配矩阵、`Multiblocked2`、`mmcr`
- **堆叠与升级**：`staaaaaaaaaaaack`（堆叠上限）、`omni_upgrades`

## 存储与物流

`sophisticatedstorage` / `sophisticatedbackpacks` / `sophisticatedcore`、`functionalstorage`、`modular-routers`、`mekanisticrouters`、`pipez`、`laserio`、`xnet`、`EnderStorage`、`entangled`、`sophisticated_chest_optimized`、`pipez_optimizer`。

## 任务、引导与信息

- **任务线**：`ftb-quests`、`ftb-teams`、`ftb-library`、`quest_enhance`（任务书增强，支持翻页 / 文本 / 图片）
- **手册与图鉴**：`Patchouli`（`chaosworld_books` 指南书）、`guideme`、`modonomicon`
- **信息面板**：`jei`、`Jade`、`jeimultiblocks`、`JustEnoughMekanismMultiblocks`、`AdvancedCoreInfo`、`kilagraph`、`appleskin`、`better-advanced-tooltips`、`enchdesc`、`Searchables`
- **区块与传送**：`ftb-chunks`、`ftb-essentials`、`waystones`、`NaturesCompass`、`StructureCompass`

## 界面与体验

`ModernUI`、`Controlling`、`MouseTweaks`、`jecharacters`（中文拼音搜索）、`skinlayers3d`、`cullleaves`、`sophisticatedbackpacks`、`MultiBuilderTool`、`buildinggadgets2`、`compactmachines`、`touhoulittlemaid`（东方小女仆）、`MaidUseHandCrank`。

## 性能优化

| 模组 | 作用 |
| --- | --- |
| `sodium` + `sodium-extra` | 渲染优化 |
| `iris` + `EuphoriaPatcher` | 光影支持 |
| `ModernFix`、`ferritecore` | 内存占用 |
| `ImmediatelyFast`、`entityculling` | 界面与实体渲染 |
| `lithium` | 服务端逻辑优化 |
| `Clumps` | 合并经验球 |
| `cullleaves`、`accelerated-decay` | 树叶与树叶腐烂优化 |
| `jdttimeaccelerators` | 时间加速器（会让周边机器一起加速，注意性能） |

## 整合包自定义内容

这些是作者自己做的或为整合包专门改造的模组，也是本包和其它整合包最大的区别：

| 模组 | 说明 |
| --- | --- |
| `chaosworld_core` | 整合包核心：自定义材料（玄彩锭等）、龙钢 / 龙魂锻造、自定义多方块 |
| `chaotic_energy_crystal` | 混沌能量水晶 |
| `raishxcore` | 整合包自定义核心 |
| `mmcr` | 模块化机械，用来定义 KubeJS 多方块（自定义高炉） |
| `Visual Crafting` / `visualcrafting` / `visual_recipe_edit_*` | 可视化配方编辑 |
| `ViScriptShop` | 虚拟货币商店（金币系统后端） |
| `coinsje` | 硬币物品 |
| `quest_enhance` | 任务书增强 |
| `omni_upgrades`、`oneenoughitem`、`alloy_smelter`、`neoecoae`、`ae2lt`、`ufo`、`ifeu`、`ifmup` | 由作者集成 / 定制的扩展（中文名以游戏内为准） |

::: tip 中文名怎么查
上面用的是模组 id，不是游戏内中文名。想知道某个 id 对应中文名，打开游戏 → 模组列表（Mods）搜索，或者在整合包目录里搜 `kubejs/assets/<模组id>/lang/zh_cn.json`。
:::

## 下一步

- [完整模组清单](/mods/list)：231 个 jar 的逐条列表。
- [KubeJS 魔改说明](/kubejs/)：哪些配方被改了。
