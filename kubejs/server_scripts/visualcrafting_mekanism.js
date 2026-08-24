ServerEvents.recipes(event => {
  event.shaped(
    Item.of('mekanism:basic_fluid_tank'),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'extendedcrafting:redstone_ingot',
      B: 'alltheores:iron_plate',
      C: 'ae2:sky_stone_tank'
    }
  );//添加有序合成"基础流体储罐"配方
});
