ServerEvents.recipes(event => {
  event.shaped(
    Item.of('chaosworld_core:mechanical_assembler'),
    [
      'ABA',
      'CDE',
      'ABA'
    ],
    {
      A: 'ae2lt:overload_alloy',
      B: "chaosworld_core:advanced_integrated",
      C: 'pneumaticcraft:assembly_laser',
      D: "industrialforegoing:machine_frame_simple",
      E: 'pneumaticcraft:assembly_drill'
    }
  );//添加有序合成"电路组装机"配方
});
