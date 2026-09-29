ServerEvents.recipes(event => {
  event.shaped(
    Item.of('avaritia:diamond_lattice'),
    [
      'A A',
      ' B ',
      'A A'
    ],
    {
      A: 'minecraft:diamond',
      B: 'minecraft:netherite_scrap'
    }
  );//添加有序合成"钻石晶格"配方
});
