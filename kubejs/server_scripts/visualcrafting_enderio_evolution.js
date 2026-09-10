ServerEvents.recipes(event => {
  event.shaped(
    Item.of('enderio_evolution:capacitor_melodic'),
    [
      'ABA',
      'ACA',
      'D D'
    ],
    {
      A: 'enderio_evolution:melodic_alloy_ingot',
      B: 'enderio:grains_of_infinity',
      C: 'enderio:basic_capacitor',
      D: 'chaosworld_core:nugget_tech_4'
    }
  );//添加有序合成"旋律合金电容"配方
});
