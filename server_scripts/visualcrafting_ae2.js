ServerEvents.recipes(event => {
  event.shaped(
    Item.of('ae2:inscriber'),
    [
      'ABA',
      'ACA',
      'ABA'
    ],
    {
      A: 'alltheores:iron_plate',
      B: 'create:mechanical_press',
      C: 'immersiveengineering:light_engineering'
    }
  );//添加有序合成"压印器"配方
});
