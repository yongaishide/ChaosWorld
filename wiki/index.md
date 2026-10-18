---
layout: home

hero:
  name: ChaosWorld
  text: 整合包中文指南
  tagline: Minecraft 1.21.1 · NeoForge · KubeJS 深度魔改 · 315+ 任务节点
  image:
    src: /logo.svg
    alt: ChaosWorld
  actions:
    - theme: brand
      text: 从安装开始
      link: /start/install
    - theme: alt
      text: 看发展路线
      link: /gameplay/progression
    - theme: alt
      text: 模组清单
      link: /mods/list

features:
  - icon: 🏭
    title: 科技与魔法双体系
    details: 工业侧有通用机械、沉浸工程、气动工艺、机械动力、工业先锋；魔法侧有新生魔艺、星辉魔法、神秘学、自然灵气、神秘农业。两条线都能推到后期。
  - icon: 🔌
    title: AE2 是真正的主线
    details: 从工业时代开始，AE2 与它的十余个扩展模组（AdvancedAE、ExtendedAE、ae2lt、数据能源学、全能单元……）贯穿全程。
  - icon: 🧩
    title: 深度 KubeJS 魔改
    details: 231 个模组 + 大量自定义配方、矿词、掉落与多方块机械，发展路线被重新设计过，不要照抄原版模组的攻略。
  - icon: 📜
    title: 315 个任务节点
    details: FTB Quests 共 11 章、315 个任务节点引导推进，主线从「工业时代」一路到「无尽时代」与「新未来」。
  - icon: 🔄
    title: 内建自动更新
    details: 整合包基于 packwiz，Prism / MultiMC 实例可以启动前自动校验并更新模组与配置，不需要每次重下整包。
  - icon: 💰
    title: 金币与商店
    details: coinsje 硬币可以兑换成 ViScriptShop 虚拟币，在整合包内置商店里消费；拿时钟右键即可一键兑换。
---

## 这份指南是什么

这是 **ChaosWorld**（作者 `yongaishide`）整合包的中文说明站，内容全部对照整合包本体的真实文件整理：

- `pack.toml` —— 版本信息（Minecraft 1.21.1 / NeoForge 21.1.248 / 整合包 1.0.0）
- `config/ftbquests/quests/` —— 任务线的章节与任务节点
- `mods/` —— 231 个模组
- `kubejs/` —— 自定义配方、矿词、掉落与系统脚本

## 我该从哪里看起

| 你的情况 | 建议阅读顺序 |
| --- | --- |
| 完全没装过 | [安装与自动更新](/start/install) → [第一次进入游戏](/start/first-run) |
| 装好了但不知道干什么 | [发展路线总览](/gameplay/progression) → [核心系统](/gameplay/systems) |
| 想知道包里有哪些模组 | [模组总览与分类](/mods/) → [完整模组清单](/mods/list) |
| 想改配方 / 自己加东西 | [KubeJS 魔改说明](/kubejs/) |
| 出问题了 | [常见问题](/reference/faq) |

::: tip 关于攻略
整合包对配方做了大量改写（删除并隐藏原配方、重写机器配方、调整矿词），**网上针对单个模组的攻略不一定成立**。遇到不会做的物品，先在 JEI 里查它现在的真实配方。
:::
