MMCREvents.startup(event => {
    event
        .createMachine('chaosworld_core:artificial_star')
        .recipePool('chaosworld_core:artificial_star')
        .displayNameKey('machine.chaosworld_core.artificial_star')
        .register()
})
