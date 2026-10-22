ServerEvents.recipes(event => {
  event.shaped(
    Item.of('mekanism:isotopic_centrifuge'),
    [
      'AAA',
      'BCB',
      'AAA'
    ],
    {
      A: 'enderio_evolution:stellar_alloy_ingot',
      B: 'mekanism_extras:absolute_control_circuit',
      C: 'mekanism:ultimate_chemical_tank'
    }
  );//添加有序合成"同位素离心机"配方
});
