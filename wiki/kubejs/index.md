# KubeJS 魔改说明

ChaosWorld 不只是「把模组装一起」，作者用 KubeJS 重写了很多东西。**这一页告诉你哪些内容被改过**，方便你判断哪些攻略还成立。

脚本位置：

| 目录 | 作用 |
| --- | --- |
| `kubejs/server_scripts/` | 服务端逻辑：配方增删、掉落、事件、商店、矿词 |
| `kubejs/startup_scripts/` | 启动时注册：物品、流体、多方块定义 |
| `kubejs/client_scripts/` | 客户端：tooltip、金币 HUD |
| `kubejs/assets/` | 语言文件与材质（中文补全、AE2 风格图标） |
| `kubejs/data/` | 数据包内容（配方、标签、进度等） |

## 1. 配方被大幅删改

- `server_scripts/删除并隐藏配方.js`（约 18 KB）——批量删除原版/模组配方，并**在 JEI 中隐藏**它们。这就是为什么你按 `R` 查不到某些老配方。
- `server_scripts/recipes/minecraft/` 下的 `remove_all.js` / `remove_ID.js` / `remove_recipes.js` 按不同粒度清理配方，`craftingtable.js`（约 12 KB）重新定义工作台配方。
- 被重写过配方的机器（每个文件对应一类机器）：

| 模组 | 被写入配方的机器 |
| --- | --- |
| 机械动力 Create | 粉碎、研磨、混合、辊压、物品应用 |
| 末影接口 EnderIO | 合金冶炼、SAG 研磨 |
| 通用机械 Mekanism | 组合、粉碎、富集、灌注、冶金灌注、核合成、涂装 |
| Mekanism 额外（`mekmm`） | 种植、冲压 |
| 沉浸工程 IE | 电弧炉、金属冲压、装瓶、蓝图、青铜合金、机器狼 |
| ExtendedAE | 水晶聚合、水晶装配 |
| 拓展合成 Extended Crafting | 通量合成（Flux Crafter） |
| 龙之进化 Draconic Evolution | 聚合合成（Fusion Crafting） |
| 合金冶炼炉（`alloy_smelter`） | 铜 / 铁 / 钻石冶炼 |
| 无尽贪婪 Re-Avaritia | 工作台转换配方（**约 118 KB，自动生成**） |
| `chaosworld_core` | 龙魂锻造（Dragon Soul Forging） |

::: tip 实战建议
**永远先查 JEI 再动手。** 整合包隐藏了被删除的配方，你查到的就是当前真正可用的配方。
:::

## 2. 矿词（Tag）调整

`server_scripts/矿词修改.js` 做了这些改动：

**新增**

| 矿词 | 加入的物品 |
| --- | --- |
| `ftbstuff:hammers` | `projecte:rm_hammer` |
| `naturesaura:ancient_logs` | `naturesaura:ancient_log`、`naturesaura:ancient_bark` |
| `iceandfire:dragonsteel_block` | 龙钢火/冰/雷方块 |

**移除**

- `c:ingots/uranium`、`c:raw_materials/uranium`、`c:storage_blocks/raw_uranium`、`forge:storage_blocks/uranium` 上的 Big Reactors 钇矿石相关物品。
- `enderio:copper_alloy_ingot` 被从铀矿词里剔除（避免统一矿词时串味）。

**暮色森林传送门**

- 清空 `twilightforest:portal/activator`，改为只接受 **`chaosworld_core:twilight_catalyst`**。

> 也就是说：原版暮色森林的激活方式在整合包中**不生效**，必须用自定义的暮色催化剂。相关任务在任务线里会给出。

## 3. 凋零额外掉落

`server_scripts/凋零锭掉落.js`：击杀**凋零（Wither）**时，除正常掉落外，额外按权重抽取 `50 + 抢夺等级 × 20` 次锭类物品。

| 物品 | 权重 |
| --- | --- |
| 铁锭 | 100 |
| 铜锭 | 80 |
| 金锭 | 60 |
| 绿宝石 | 20 |
| 钻石 | 20 |
| `avaritia:blaze_cube` | 20 |
| 远古残骸 | 20 |
| 下界合金锭 | 10 |
| `allthemodium:vibranium_ingot` | 1 |

权重总和 331。不带抢夺大约 **50 次抽取**，满抢夺（+3）可以到 **110 次**。这是中期快速攒金属的可靠途径。

## 4. 金币系统

`server_scripts/kubejs脚本/coins.js` —— 把 `coinsje` 的实体硬币兑换成 ViScriptShop 的虚拟货币，汇率与操作方式见 [核心系统 · 金币与商店](/gameplay/systems#_2-金币与商店)。客户端侧还有一个 `client_scripts/coins.js` 负责余额显示。

## 5. 自定义机械

- `startup_scripts/mmcr/kubejs_blast_furnace.js`（约 18 KB）+ `server_scripts/mmcr/kubejs_blast_furnace.js`（约 12 KB）——用 **MMCR（模块化机械）** 定义的自定义高炉多方块。
- `recipes/chaosworld_core/dragon_soul_forging.js` —— 龙魂锻造流程。
- `startup_scripts/chemicals.js` / `items.js` —— 注册自定义流体与物品。

## 6. 界面与文本

- `client_scripts/tooltip.js` 给一批物品加了中文说明：装配矩阵的框架/墙壁/玻璃、蜡烛、钻石、`ae2lt` 的「猪咪」系列（存储单元、分子装配室、样板供应器等）、拓展合成的工作台样板供应器、全能单元（按 Shift 显示字节/类型）。
- `kubejs/assets/**/lang/zh_cn.json` 提供了大量模组的中文补全（`alloy_smelter`、`allthecompressed`、`alltheores`、`coinsje`、`ftbfiltersystem`、`ftbultimine`、`industrialization_overdrive` 等）。
- `kubejs/教程/ftbstuff.md` 是作者留给自己的配方写法教程（FTB Stuff & Things 的钩子、洗矿槽、锤子、强化罐、熔融机等），**改配方时可以直接照抄格式**。

## 7. 作者彩蛋

`server_scripts/kubejs脚本/作者好奖励.js`：

- 在聊天栏发送 **`新手大礼包`** → 获得 1 钻石 + 2 铁锭（每个存档只能领一次）。
- 再发一次 → 被施加 100 tick、3 级的**漂浮**效果。作者原话：「你怎么这么贪心？我TM让你飞起来！」

## 8. 未启用 / 预留内容

`server_scripts/kubejs脚本/stages.js` 整份被注释掉了（`/* ... */`）。它的设计是配合 `astages_ftbquests` 做**暮色森林阶段限制**：没有 `twilight_forest` 阶段进入暮色森林会被传送回主世界。

> 当前版本这段逻辑**没有生效**，暮色森林没有阶段门槛；但矿词改动（见上文）已经让原版激活方式失效，仍需使用自定义暮色催化剂。

## 想自己改？

1. 修改 `kubejs/` 下的脚本。
2. 单人游戏里按 `F3 + T` 重载资源（客户端内容），或重启游戏（`startup_scripts` 里注册的物品/流体必须重启）。
3. 服务端脚本改动会在 `/reload` 后生效。
4. 改完记得按作者流程执行 `build-updater.ps1` 再发布（见 [安装与自动更新](/start/install#作者发布流程-给自己改包时参考)）。
