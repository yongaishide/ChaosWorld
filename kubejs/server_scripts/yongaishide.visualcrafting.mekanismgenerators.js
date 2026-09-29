ServerEvents.recipes(event => {
  event.shaped(
    Item.of('mekanismgenerators:fission_reactor_port', 4),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'mekanismgenerators:fission_reactor_casing',
      B: 'mekanism_extras:absolute_control_circuit',
      C: 'chaosworld_core:stellar_alloy_core'
    }
  );//添加有序合成"裂变反应堆端口"配方
});
