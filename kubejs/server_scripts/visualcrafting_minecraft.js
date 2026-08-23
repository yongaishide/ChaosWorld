ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:ender_eye'),
    [
      ' A ',
      'BCD',
      ' E '
    ],
    {
      A: 'minecraft:slime_ball',
      B: 'minecraft:magma_cream',
      C: 'minecraft:ender_pearl',
      D: 'minecraft:echo_shard',
      E: 'minecraft:prismarine_shard'
    }
  );//添加有序合成"末影之眼"配方
});
