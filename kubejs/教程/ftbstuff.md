# FTB Stuff & Things - KubeJS 配方教程

FTB Stuff & Things 是一个通用功能模组，添加了洗矿槽(Sluice)、罐子(Jar)、锤子(Hammer)、滴液器(Dripper)等实用设备。

## 获取配方实例

```js
const ftbstuff = event.recipes.ftbstuff;
```

---

## 钩子 (Crook)

用于破坏树叶等方块时获取额外掉落物。

```js
ftbstuff.crook(<输出列表>, <输入>)
ftbstuff.crook(<输出列表>, <输入>, <最大掉落数>, <替换原有掉落>)
```

参数说明：
- `<最大掉落数>`：单次破坏最多掉落物品数，默认 0(无限制)
- `<替换原有掉落>`：true 则完全替换方块原有掉落，默认 true

**示例：** 树叶有 50% 概率掉落 1 个金粒或 2 个铁粒（二选一），同时保留树木原有掉落：

```js
ftbstuff.crook([
    { "item": { "id": "minecraft:gold_nugget", "count": 2 }, "chance": 0.5 },
    { "item": "minecraft:iron_nugget", "chance": 0.5 }
], { "tag": "minecraft:leaves" }, 1, false)
```

---

## 洗矿槽 (Sluice)

用流体冲刷物品以获取额外产出，需要使用不同类型的筛网 (Mesh)。

```js
ftbstuff.sluice(<输出列表>, <输入>, <定量流体原料>, <筛网类型列表>, <最大产出数>, <处理时间倍率>)
```

参数说明：
- `<输出列表>`：`ItemWithChance` 数组，格式同钩子
- `<输入>`：可清洗的物品原料
- `<定量流体原料>`：所需流体，如 `Fluid.of("minecraft:water", 1000)`，可省略(无需流体)
- `<筛网类型列表>`：允许使用的筛网类型数组。可选值：`"empty"`, `"cloth"`, `"iron"`, `"gold"`, `"diamond"`, `"blazing"`
- `<最大产出数>`：单次操作最多产出物品数，默认 4
- `<处理时间倍率>`：处理时间乘数，默认 1.0

**示例：** 用 1000mB 水洗刷沙砾，使用铁筛网或金筛网时，有概率产出燧石或铁粒：

```js
ftbstuff.sluice([
    { "item": "minecraft:flint", "chance": 0.3 },
    { "item": "minecraft:iron_nugget", "chance": 0.1 }
], "minecraft:gravel", Fluid.of("minecraft:water", 1000), ["iron", "gold"])
```

---

## 锤子 (Hammer / Auto-Hammer)

用于将方块粉碎为更小的材料（如圆石→沙砾→沙子→粉尘）。

```js
ftbstuff.hammer(<物品堆叠结果列表>, <物品原料>)
```

**示例：** 用锤子破坏铁块掉落 9 个铁锭：

```js
ftbstuff.hammer(["9x minecraft:iron_ingot"], "minecraft:iron_block")
```

---

## 强化罐 (Tempered Jar)

用物品+流体合成新物品/流体，类似沉浸工程的搅拌机。

```js
ftbstuff.jar(<物品原料列表>, <流体原料列表>, <输出物品>, <输出流体>)
ftbstuff.jar(<物品原料列表>, <流体原料列表>, <输出物品>, <输出流体>, <温度>, <处理时间>, <可重复>, <阶段>)
```

参数说明：
- `<温度>`：`"normal"`(默认) / `"hot"` / `"superheated"` / `"chilled"`
- `<处理时间>`：tick，默认 200
- `<可重复>`：能否配合 Jar Automater 自动重复，默认 true
- `<阶段>`：游戏阶段锁，默认 ""

---

## 熔融机 (Fusing Machine)

将物品熔融为流体，消耗 FE。

```js
ftbstuff.fusing_machine(<输出流体>, <输入列表>, { "fe_per_tick": <FE/t>, "ticks_to_process": <时间> })
```

**示例：** 将 1 个糖转化为 1000mB LPG，70 FE/t，50 tick：

```js
ftbstuff.fusing_machine(Fluid.of("pneumaticcraft:lpg", 1000), ["minecraft:sugar"], { "fe_per_tick": 70, "ticks_to_process": 50 })
```

---

## 超冷凝器 (Super Cooler)

将物品+流体冷却为新产品。

```js
ftbstuff.supercooler(<物品结果>, <物品原料列表>, <定量流体原料>, { "fe_per_tick": <FE/t>, "ticks_to_process": <时间> })
```

**示例：** 1 泥土 + 1 粘土 + 1000mB 水 → 1 泥巴，50 FE/t，20 tick：

```js
ftbstuff.supercooler("minecraft:mud", ["minecraft:dirt", "minecraft:clay"], Fluid.of("minecraft:water", 1000), { "fe_per_tick": 50, "ticks_to_process": 20 })
```

---

## 温度源 (Temperature Source)

定义方块提供的温度类型，供强化罐配方使用。

```js
ftbstuff.temperature_source(<方块状态>, <温度>)
ftbstuff.temperature_source(<方块状态>, <温度>, <效率>, <显示物品>, <JEI隐藏>)
```

参数说明：
- `<温度>`：同强化罐的温度类型
- `<效率>`：配方速度倍率，默认 1.0
- `<显示物品>`：若方块无对应物品（如火焰），指定 JEI 显示用物品
- `<JEI隐藏>`：true 则在 JEI 中不显示

**注意：** KubeJS 有 bug，`<显示物品>` 参数必须显式指定。

**示例：** 点燃的营火作为"热"温度源：

```js
ftbstuff.temperature_source("minecraft:campfire[lit=true]", "hot", 1.0, "minecraft:campfire")
```

---

> 来源：https://github.com/FTBTeam/FTB-Stuff-Things
