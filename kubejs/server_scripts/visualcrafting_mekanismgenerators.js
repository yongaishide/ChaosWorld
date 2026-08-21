ServerEvents.recipes(event => {
  event.shaped(
    Item.of('mekanismgenerators:heat_generator'),
    [
      'AAA',
      'BCB',
      'DED'
    ],
    {
      A: 'alltheores:iron_plate',
      B: 'mekanism:basic_universal_cable',
      C: 'immersiveengineering:light_engineering',
      D: 'immersiveengineering:component_iron',
      E: 'ironfurnaces:iron_furnace'
    }
  );//添加有序合成"热力发电机"配方
});
