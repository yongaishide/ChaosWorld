ServerEvents.recipes(event => {
  event.shaped(
    Item.of('mmcr:small_assembler_controller'),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'immersiveengineering:sheetmetal_steel',
      B: 'immersiveengineering:craftingtable'
    }
  );//添加有序合成"小型组装机控制器"配方
});
