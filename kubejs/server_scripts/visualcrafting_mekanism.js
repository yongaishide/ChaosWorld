ServerEvents.recipes(event => {
  event.shaped(
    Item.of('mekanism:energized_smelter'),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'extendedcrafting:enhanced_redstone_ingot',
      B: 'mekanism:advanced_control_circuit',
      C: 'ironfurnaces:netherite_furnace',
      D: 'industrialforegoing:machine_frame_advanced'
    }
  );//添加有序合成"电力熔炼炉"配方
});
