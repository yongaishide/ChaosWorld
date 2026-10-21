ServerEvents.recipes(event => {
  event.shaped(
    Item.of('immersiveengineering:blueprint[immersiveengineering:blueprint="automatons"]'),
    [
      ' A ',
      'BBB',
      'CCC'
    ],
    {
      A: 'immersiveengineering:hammer',
      B: 'minecraft:blue_dye',
      C: 'minecraft:paper'
    }
  );//添加有序合成"工程师蓝图"配方
});
