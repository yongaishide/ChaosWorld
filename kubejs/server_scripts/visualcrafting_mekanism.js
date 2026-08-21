ServerEvents.recipes(event => {
  event.shaped(
    Item.of('mekanism:basic_universal_cable', 64),
    [
      'AAA',
      'BCB',
      'AAA'
    ],
    {
      A: 'enderio:conduit_binder',
      B: 'alltheores:steel_ingot',
      C: 'extendedcrafting:redstone_ingot'
    }
  );//添加有序合成"基础通用线缆"配方
  event.shaped(
    Item.of('mekanism:energy_tablet'),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'extendedcrafting:redstone_ingot',
      B: 'immersiveengineering:coil_lv',
      C: 'mekanism:basic_universal_cable',
      D: 'immersiveengineering:coil_hv'
    }
  );//添加有序合成"能量板"配方
});
