ServerEvents.recipes(event => {
  event.shaped(
    Item.of('ae2cs:ember_seed', 9),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'cataclysm:dying_ember',
      B: 'aoa3:emberstone_ingot',
      C: 'allthecompressed:sand_1x'
    }
  );//添加有序合成"余烬水晶种子"配方
});
