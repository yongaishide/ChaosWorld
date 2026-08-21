ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:furnace'),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'minecraft:cobblestone',
      B: 'minecraft:coal_block'
    }
  );//添加有序合成"熔炉"配方
  event.shaped(
    Item.of("pneumaticcraft:pressure_chamber_interface"),
    [
      ' B ',
      'BCB',
      ' B '
    ],
    {
      B: "pneumaticcraft:pressure_chamber_wall",
      C: "industrialforegoing:machine_frame_pity"
    }
  );//添加有序合成"压力室接口"配方
  event.shaped(
    Item.of('actuallyadditions:iron_casing'),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'alltheores:iron_plate',
      B: 'immersiveengineering:stick_treated',
      C: 'actuallyadditions:black_quartz'
    }
  );//添加有序合成"铁制外壳"配方
  event.shaped(
    Item.of('immersiveengineering:blastbrick', 4),
    ['ABA', 'BCB', 'ABA'],
    {
      A: 'immersiveengineering:hempcrete',
      B: 'minecraft:nether_brick',
      C: 'minecraft:blaze_powder'
    }
  );//添加有序合成"高炉砖"配方
  event.shaped(
    Item.of('immersiveengineering:hempcrete', 4),
    ['ABA', 'BCB', 'ABA'],
    {
      A: 'minecraft:sand',
      B: 'immersiveengineering:hemp_fiber',
      C: 'minecraft:clay'
    }
  );//添加有序合成"汉麻混凝土"配方
  event.shaped(
    Item.of('immersiveengineering:cokebrick', 3),
    ['ABA', 'BCB', 'ABA'],
    {
      A: 'immersiveengineering:hempcrete',
      B: 'minecraft:brick',
      C: 'minecraft:blaze_powder'
    }
  );//添加有序合成"焦炉砖"配方
  event.shaped(
    Item.of('immersiveengineering:rs_engineering', 2),
    ['ABA', 'BCB', 'ABA'],
    {
      A: 'actuallyadditions:iron_casing',
      B: 'enderio:redstone_alloy_ingot',
      C: 'enderio_evolution:simple_machine_frame'
    }
  );//添加有序合成"红石工程块"配方
  event.shaped(
    Item.of('immersiveengineering:alloybrick', 8),
    ['ABA', 'BCB', 'ABA'],
    {
      A: 'minecraft:bricks',
      B: 'minecraft:sandstone',
      C: 'immersiveengineering:coke'
    }
  );//添加有序合成"窑砖"配方
  event.shaped(
    Item.of('ae2cs:crystal_growth_chamber'),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'ae2:growth_accelerator',
      B: 'enderio:conduit[enderio:conduit="enderio:me"]',
      C: 'ae2:quartz_glass',
      D: 'industrialforegoing:machine_frame_pity'
    }
  );//添加有序合成"晶体催生仓"配方
  event.shaped(
    Item.of('enderio:soul_binder'),
    [
      'ABA',
      'CDC',
      'AEA'
    ],
    {
      A: 'enderio:soularium_ingot',
      B: 'enderio:soul_vial',
      C: 'enderio:energized_gear',
      D: 'industrialforegoing:machine_frame_simple',
      E: 'enderio:z_logic_controller'
    }
  );//添加有序合成"灵魂绑定器"配方
  event.shaped(
    Item.of('extendedae:crystal_assembler'),
    [
      ' A ',
      'BCB',
      'DED'
    ],
    {
      A: 'ae2:crafting_terminal',
      B: 'ae2:logic_processor',
      C: 'industrialforegoing:machine_frame_pity',
      D: 'extendedae:machine_frame',
      E: 'mekanism:basic_fluid_tank'
    }
  );//添加有序合成"水晶装配器"配方
  event.shaped(
    Item.of('extendedcrafting:flux_alternator', 2),
    [
      ' A ',
      ' B ',
      'BBB'
    ],
    {
      A: 'enderio:energetic_alloy_ingot',
      B: 'extendedcrafting:enhanced_redstone_ingot'
    }
  );//添加有序合成"通量发电机"配方
  event.shaped(
    Item.of('extendedcrafting:flux_crafter'),
    [
      'AAA',
      'BCB',
      'BBB'
    ],
    {
      A: 'enderio:energetic_alloy_ingot',
      B: 'extendedcrafting:enhanced_redstone_ingot',
      C: 'industrialforegoing:machine_frame_simple'
    }
  );//添加有序合成"通量合成器"配方
  event.shaped(
    Item.of('industrialforegoing:mob_slaughter_factory'),
    [
      'ABA',
      'CDC',
      'EFE'
    ],
    {
      A: 'industrialforegoing:plastic',
      B: 'enderio:energized_gear',
      C: 'minecraft:diamond_sword',
      D: 'industrialforegoing:machine_frame_simple',
      E: 'minecraft:diamond_axe',
      F: 'ae2cs:redstone_crystal_block'
    }
  );//添加有序合成"生物屠宰厂"配方
});
