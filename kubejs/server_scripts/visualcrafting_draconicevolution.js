ServerEvents.recipes(event => {
  event.shaped(
    Item.of('draconicevolution:draconic_energy_core', 2),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'chaosworld_core:ingot_draconic_metal',
      B: 'draconicevolution:wyvern_energy_core',
      C: 'draconicevolution:draconium_core'
    }
  );//添加有序合成"神龙能量核心"配方
});
