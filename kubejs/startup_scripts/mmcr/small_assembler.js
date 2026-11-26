MMCREvents.startup(event => {
    event
        .createMachine('mmcr_kubejs:small_assembler')
        .recipePool('mmcr_kubejs:small_assembler')
        .displayNameKey('machine.mmcr_kubejs.small_assembler')
        .machineBasicBlock('immersiveengineering:sheetmetal_steel')
        .register()
})
