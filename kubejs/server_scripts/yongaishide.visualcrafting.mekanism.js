ServerEvents.recipes(event => {
  event.shaped(
    Item.of('mekanism:fuelwood_heater'),
    [
      'AAA',
      'BCB',
      'AAA'
    ],
    {
      A: 'alltheores:steel_ingot',
      B: 'ironfurnaces:iron_furnace',
      C: 'actuallyadditions:coal_generator'
    }
  );//添加有序合成"固体燃料加热器"配方
});
