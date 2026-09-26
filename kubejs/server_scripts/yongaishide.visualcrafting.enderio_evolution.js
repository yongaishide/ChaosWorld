ServerEvents.recipes(event => {
  event.shaped(
    Item.of('enderio_evolution:capacitor_melodic'),
    [
      'A A',
      'ABA',
      'C C'
    ],
    {
      A: 'enderio_evolution:melodic_alloy_ingot',
      B: 'powah:capacitor_basic',
      C: 'immersiveengineering:wire_copper'
    }
  );//添加有序合成"旋律合金电容"配方
});
