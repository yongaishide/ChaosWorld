ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('data_energistics:data_carrier'),
    [
      'data_energistics:data_carrier'
    ]
  );//添加无序合成"数据载体"配方
  event.shaped(
    Item.of('data_energistics:data_carrier'),
    [
      ' A ',
      'BCA',
      'DE '
    ],
    {
      A: 'ae2cs:purified_nether_quartz_crystal',
      B: 'ae2:engineering_processor',
      C: 'ae2omnicells:omni_cell_component_1k',
      D: 'minecraft:iron_nugget',
      E: 'ae2:calculation_processor'
    }
  );//添加有序合成"数据载体"配方
});
