ServerEvents.recipes(event => {
  event.shaped(
    Item.of('extendedcrafting:elite_component'),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'avaritia:diamond_lattice',
      B: 'extendedcrafting:black_iron_slate',
      C: 'extendedcrafting:luminessence'
    }
  );//添加有序合成"精英合成组件"配方
  event.shaped(
    Item.of('extendedcrafting:ultimate_component'),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'actuallyadditions:empowered_emeradic_crystal',
      B: 'extendedcrafting:black_iron_slate',
      C: 'extendedcrafting:luminessence'
    }
  );//添加有序合成"终极合成组件"配方
});
