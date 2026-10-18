# 整合包简介

**ChaosWorld** 是一个面向 Minecraft **1.21.1 / NeoForge** 的大型科技与魔法整合包，把工业体系（沉浸工程、通用机械、工业先锋、机械动力、气动工艺）与魔法体系（新生魔艺、星辉魔法、神秘学、自然灵气、神秘农业）放进同一条发展曲线里，用 FTB Quests 串成一条线性的推进路线。

| 项目 | 内容 |
| --- | --- |
| 整合包名称 | ChaosWorld |
| 作者 | `yongaishide` |
| 版本 | 1.0.0（packwiz:1.1.0 格式） |
| Minecraft | 1.21.1 |
| 加载器 | NeoForge 21.1.248 |
| 模组数量 | 231 个 |
| 任务系统 | FTB Quests，11 章、315 个任务节点 |
| 许可 | GNU GPL v3.0 |
| 仓库 | [github.com/yongaishide/ChaosWorld](https://github.com/yongaishide/ChaosWorld) · Gitee 同名仓库 |

## 整合包定位

> 前期以 AE2 自动化与拓展合成矩阵为发展核心，后期解锁 ProjectE 等价交换与无尽合成。

- **深度 KubeJS 魔改**：自定义配方、物品与任务，科技发展路线被重新设计。
- **多阶段任务线**：FTB Quests 引导玩家逐步解锁内容，主线共 9 章。
- **自动化扩展**：AE2、模块化机械（MMCR）、集成动力学、激光 IO 等自动化方案可选。
- **资源转化**：等价交换（ProjectE）、无尽合成（Avaritia）与 All The Compressed 的压缩方块，让资源获取有多种路径。
- **自定义指南书**：帕秋莉手册 `chaosworld_books`（游戏内《ChaosWorld 指南》，目前仍在补充中）。
- **视觉强化**：Iris 光影（附带 Complementary Reimagined + Euphoria Patches）、Sodium、ModernUI。

## 目录结构（整合包实例内）

| 目录 / 文件 | 说明 |
| --- | --- |
| `mods/` | 模组文件，231 个 jar |
| `config/` | 模组配置（含 `config/ftbquests/quests/` 任务线） |
| `defaultconfigs/` | 新世界默认配置 |
| `kubejs/` | KubeJS 脚本与数据：配方修改、矿词、掉落、任务奖励等 |
| `resourcepacks/` | 资源包（AE2 风格包、汉化包等） |
| `shaderpacks/` | 光影包 |
| `patchouli_books/` | 帕秋莉手册 `chaosworld_books` |
| `pack.toml` / `index.toml` | packwiz 更新清单 |
| `options.txt` | 游戏设置与按键绑定 |

## 下一步

- [安装与自动更新](/start/install)：把整合包装起来，并让它以后自动更新。
- [第一次进入游戏](/start/first-run)：进游戏后先做的几件事。
