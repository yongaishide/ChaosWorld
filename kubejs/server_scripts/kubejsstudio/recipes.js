// kubejsstudio recipes; re-apply merges by recipe id
ServerEvents.recipes(event => {
    event.shaped('mmcr:brick_alloy_furnace_controller', ['#A#', 'BCB', '#A#'], { '#': 'minecraft:bricks', 'A': 'alltheores:steel_plate', 'B': 'alltheores:iron_plate', 'C': 'minecraft:blast_furnace' }).id('kubejsstudio:brick_alloy_furnace_controller')
})
