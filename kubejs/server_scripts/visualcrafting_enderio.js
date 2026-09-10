ServerEvents.recipes(event => {
  event.shaped(
    Item.of('enderio:vibrant_gear'),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'enderio:vibrant_alloy_nugget',
      B: 'enderio:vibrant_alloy_ingot',
      C: 'alltheores:netherite_gear'
    }
  );//添加有序合成"振动合金双金属齿轮"配方
});
