# 版本与更新记录

## 当前版本

来自整合包目录的 `pack.toml`：

```toml
name = "ChaosWorld"
author = "yongaishide"
version = "1.0.0"
pack-format = "packwiz:1.1.0"

[versions]
minecraft = "1.21.1"
neoforge = "21.1.248"
```

| 项目 | 值 |
| --- | --- |
| 整合包版本 | 1.0.0 |
| packwiz 格式 | 1.1.0 |
| Minecraft | 1.21.1 |
| NeoForge | 21.1.248 |
| 模组数量 | 231 |

## 1.0.0

本版本包含的内容（对照整合包文件整理）：

- **231 个模组**，科技（通用机械 / 末影接口 / 工业先锋 / 沉浸工程 / 机械动力 / 气动工艺）与魔法（新生魔艺 / 星辉魔法 / 神秘学 / 自然灵气 / 神秘农业）双体系。
- **AE2 生态扩展十余个**，并以「频道数量」作为任务奖励（2 倍 / 3 倍 / 4 倍 / 无限频道）。
- **FTB Quests 任务线 11 章、315 个任务节点**，主线 9 章 + 奖励章 2 章 + 游玩提示。
- **KubeJS 魔改**：批量删除并隐藏配方、重写机器配方（Create / EnderIO / Mekanism / 沉浸工程 / ExtendedAE / 拓展合成 / 龙之进化 / 无尽贪婪）、矿词调整、凋零额外掉落、金币兑换系统、自定义多方块高炉、龙魂锻造。
- **自定义内容**：`chaosworld_core`、`chaotic_energy_crystal`、`raishxcore`、`mmcr`、`ViScriptShop`、`quest_enhance`。
- **视觉与优化**：Iris + Complementary Reimagined r5.9.3（+ Euphoria Patches 1.10.5）、Sodium、ModernUI、ModernFix、FerriteCore 等。
- **packwiz 分发**：仓库即更新源，Prism / MultiMC 支持启动前自动校验更新。

## 如何记录后续版本

作者发布新版本的流程见 [安装与自动更新 · 作者发布流程](/start/install#作者发布流程-给自己改包时参考)。每次发布时建议在本页追加一段：

```markdown
## <版本号>

- **模组**：新增 / 移除 / 更新的模组
- **配方**：KubeJS 改动（改了什么配方、加了什么机器）
- **任务**：任务线新增章节 / 改动
- **修复**：修掉的问题
- **注意**：需要玩家手动处理的事项（例如配置被覆盖、需要删除某个文件）
```

::: tip 给玩家的提示
packwiz 会自动同步模组与配置，所以**版本差异主要影响 KubeJS 脚本和任务进度**。如果新版本删除了你正在用的某个配方，JEI 会实时反映，不需要手动清理缓存。
:::

## 与仓库文档的差异

仓库根目录的 `README.md` 里写的加载器版本与 `pack.toml` 不一致（README 提到 `NeoForge 4.0.43`，那实际对应加载器内层的 FancyModLoader 版本号）。**以 `pack.toml` 的 `neoforge = "21.1.248"` 为准**。
