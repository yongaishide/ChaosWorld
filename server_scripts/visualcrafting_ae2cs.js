ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('ae2cs:rose_quartz_seed', 2),
    [
      'create:polished_rose_quartz',
      'minecraft:sand'
    ]
  );//添加无序合成"玫瑰石英种子"配方
});
