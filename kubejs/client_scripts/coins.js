ItemEvents.modifyTooltips(event => {
 
  const Tooltips = [
    {
      id: "minecraft:clock",
      tooltipKey: 'tooltip.coin.money_pouch'
    },
    {
      id: "coinsje:copper_coin",
      tooltipKey: 'tooltip.coin.copper_coin'
    },
    {
      id: "coinsje:iron_coin",
      tooltipKey: 'tooltip.coin.iron_coin'
    },
    {
      id: "coinsje:gold_coin",
      tooltipKey: 'tooltip.coin.gold_coin'
    },
    {
      id: "coinsje:diamond_coin",
      tooltipKey: 'tooltip.coin.diamond_coin'
    },
    {
      id: "coinsje:netherite_coin",
      tooltipKey: 'tooltip.coin.netherite_coin'
    },
    {
      id: "coinsje:emerald_coin",
      tooltipKey: 'tooltip.coin.emerald_coin'
    },
    {
      id: "coinsje:copper_coin_pile",
      tooltipKey: 'tooltip.coin.copper_coin_pile'
    },
    {
      id: "coinsje:iron_coin_pile",
      tooltipKey: 'tooltip.coin.iron_coin_pile'
    },
    {
      id: "coinsje:gold_coin_pile",
      tooltipKey: 'tooltip.coin.gold_coin_pile'
    },
    {
      id: "coinsje:diamond_coin_pile",
      tooltipKey: 'tooltip.coin.diamond_coin_pile'
    },
    {
      id: "coinsje:netherite_coin_pile",
      tooltipKey: 'tooltip.coin.netherite_coin_pile'
    },
    {
      id: "coinsje:emerald_coin_pile",
      tooltipKey: 'tooltip.coin.emerald_coin_pile'
    }
  ]
 
  // 遍历所有工具提示配置
  Tooltips.forEach(config => {
    // 处理包含多个工具提示的配置
    if (config.tooltips) {
      config.tooltips.forEach(tooltipConfig => {
        registerTooltip(config.id, tooltipConfig.type, tooltipConfig.tooltipKey)
      })
    } else {
      // 处理单个工具提示的配置，为第一个组提供默认类型
      let keyType = config.type || "normal" // 如果没有type，使用默认类型
      registerTooltip(config.id, keyType, config.tooltipKey)
    }
  })
 
  // 注册工具提示的核心函数
  function registerTooltip(id, keyType, tooltipKey) {
    // 如果 keyType 是 "normal"，则直接显示工具提示，不需要按键检测
    if (keyType === "normal") {
      event.modify(id, {}, tooltip => {
        // 插入具体内容：支持单个字符串或字符串数组
        if (Array.isArray(tooltipKey)) {
          // 如果是数组，插入多个工具提示行
          tooltipKey.forEach((key, index) => {
            tooltip.insert(1 + index, Text.translate(key))
          })
        } else {
          // 如果是单个字符串，插入一个工具提示行
          tooltip.insert(1, Text.translate(tooltipKey))
        }
      })
      return
    }
 
    // 当未按下指定按键时：显示按键提示
    const keyOptionsFalse = {}
    keyOptionsFalse[keyType] = false
    event.modify(id, keyOptionsFalse, tooltip => {
      tooltip.insert(1, Text.translate(`tooltip.text.${keyType}.false`))
    })
 
    // 当按下指定按键时：显示详细描述
    const keyOptionsTrue = {}
    keyOptionsTrue[keyType] = true
    event.modify(id, keyOptionsTrue, tooltip => {
      // 插入按键状态提示
      tooltip.insert(1, Text.translate(`tooltip.text.${keyType}.true`))
 
      // 插入具体内容：支持单个字符串或字符串数组
      if (Array.isArray(tooltipKey)) {
        // 如果是数组，插入多个工具提示行
        tooltipKey.forEach((key, index) => {
          tooltip.insert(2 + index, Text.translate(key))
        })
      } else {
        // 如果是单个字符串，插入一个工具提示行
        tooltip.insert(2, Text.translate(tooltipKey))
      }
    })
  }
})