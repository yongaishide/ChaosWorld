ServerEvents.recipes(event => {
  event.shaped(
    Item.of('mekanism:enrichment_chamber'),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'mekanism:induction_casing',
      B: 'chaosworld_core:circuit_processor',
      C: 'neoecoae:aluminum_alloy_casing',
      D: 'industrialforegoing:machine_frame_simple'
    }
  );//添加有序合成"富集仓"配方
});
