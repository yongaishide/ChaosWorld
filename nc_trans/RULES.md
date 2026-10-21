# 翻译任务规则（Minecraft 模组 Nuclearcraft: Neohaul 语言文件）

## 任务
读取指定的 chunkNN.json（格式：`{"翻译键": "英文原文", ...}`），把**每一个英文值**翻译成简体中文，
写入同目录的 `transNN.json`（与 chunk 同编号），格式完全相同的 `{"翻译键": "中文译文", ...}`。

## 硬性要求
1. **键名一律原样保留**，一个都不能少、不能多、不能改。chunk 里有多少个键，trans 里就有多少个键。
2. **只翻译值**，不要翻译键名里的英文。
3. 严格保留原文中的技术占位符与格式符：`%s` `%d` `%1$d` `%2$s` `.1f` `\n` 等，位置和写法不能改。
   颜色/格式控制符 `§a` `§b` 等原样保留。
4. 数值、化学式、同位素编号原样保留：`U-238` `MOX-239` `HEU-235` `LEU-233` `Cf-252` `10 kRF/t` `1,000 mB`。
5. 输出必须是**合法 UTF-8 JSON 对象**（无 BOM），用 Write 工具写文件。中文用全角标点（，。：；）但句末不要多加句号，
   除非英文原文有句号。
6. 名词性物品/方块名用**短名**，不加"一个/的"。例：`Uranium Ingot` → `铀锭`，`Fission Reactor Casing` → `裂变反应堆外壳`。
7. 描述性句子（tooltip / desc / 提示）译成自然的游戏中文，可读性优先，不必逐字直译。
8. 专有名词、模组名、作者名、音乐名、成就梗标题：保留英文或音译，不要硬译成怪中文（成就标题本来就玩梗，
   可意译成有趣的中文短语，保持简短）。

## 统一术语表（必须遵守）
- Ingot 锭 / Dust 粉 / Plate 板 / Gear 齿轮 / Nugget 粒 / Block 块 / Ore 矿石 / Deepslate Ore 深层…矿石
- Casing 外壳 / Port 端口 / Controller 控制器 / Frame 框架 / Chassis 框架 / Terminal 端子
- Fuel 燃料 / Fuel Pellet 燃料丸 / Depleted 枯竭 / Enriched 浓缩 / Fissile 易裂变 / Fertile 增殖
- Fission 裂变 / Fusion 聚变 / Molten Salt 熔盐 / Reactor 反应堆 / Turbine 涡轮机
- RTG 放射性热电发电机 / Moderator 减速剂 / Reflector 中子反射器 / Shield 防护屏 / Coolant 冷却剂
- Assembler 组合机 / Separator 分离器 / Decay Hastener 衰变加速器 / Fuel Reprocessor 燃料再处理机
- Alloy Furnace 合金炉 / Fluid Infuser 流体注入器 / Melter 熔化机 / Supercooler 超冷却机
- Electrolyzer 电解池 / Ingot Former 铸锭机 / Pressurizer 加压机 / Chemical Reactor 化学反应器
- Fluid Mixer 流体混合器 / Crystallizer 结晶器 / Fluid Enricher 流体富集器 / Fluid Extractor 流体提取器
- Centrifuge 离心机 / Rock Crusher 岩石粉碎机 / Electric Furnace 电熔炉 / Manufactory 小制造机
- Machine Interface 机器控制界面 / Energy Storage 储能 / Capacitor 电容 / Motor 马达 / Servo 伺服器
- Heat Exchanger 热交换器 / Condenser 冷凝器 / Distiller 蒸馏器 / Sieve Assembly 筛网组件
- Hastelloy 哈司镍基合金 / Boron 硼 / Silver 银 / Tin 锡 / Lead 铅 / Magnesium 镁 / Lithium 锂
- Beryllium 铍 / Thorium 钍 / Uranium 铀 / Neptunium 镎 / Plutonium 钚 / Americium 镅 / Curium 锔
- Berkelium 锫 / Californium 锎 / Arsenic 砷 / Alugentum 银铝 / Steel 钢 / Graphite 石墨
- Multiblock 多方块结构 / Neutron 中子 / Radiation 辐射 / Irradiator 辐照器 / Turbine 涡轮机
- Wrench 扳手 / Screwdriver 螺丝刀 / Config 配置 / Tooltip 提示

## 完成标准
写完后自查：键数量与 chunk 相同；无残留英文句子（专有名词除外）；JSON 可被解析。
