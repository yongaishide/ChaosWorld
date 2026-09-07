ServerEvents.recipes(event => {
  event.shaped(
    Item.of('draconicevolution:draconium_core'),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'allthemodium:vibranium_plate',
      B: 'enderio_evolution:melodic_alloy_ingot',
      C: 'mekanism:alloy_atomic'
    }
  );//添加有序合成"龙芯"配方
});
