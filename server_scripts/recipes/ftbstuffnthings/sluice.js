ServerEvents.recipes((event) => {
    const ftbstuff = event.recipes.ftbstuff

    function outputs(chance, tier, mul) {
        const scale = Math.pow(1.8, tier) * (mul || 1)
        const c = Math.round(4 * scale)
        return [
            { "item": { "id": "minecraft:flint", "count": Math.round(3 * scale) }, "chance": chance },
            { "item": { "id": "minecraft:lapis_lazuli", "count": Math.round(5 * scale) }, "chance": chance },
            { "item": { "id": "minecraft:diamond", "count": Math.round(2 * scale) }, "chance": chance },
            { "item": { "id": "minecraft:emerald", "count": Math.round(2 * scale) }, "chance": chance },
            { "item": { "id": "create:crushed_raw_iron", "count": c }, "chance": chance },
            { "item": { "id": "create:crushed_raw_gold", "count": c }, "chance": chance },
            { "item": { "id": "create:crushed_raw_copper", "count": c }, "chance": chance },
            { "item": { "id": "create:crushed_raw_zinc", "count": c }, "chance": chance },
            { "item": { "id": "create:crushed_raw_osmium", "count": c }, "chance": chance },
            { "item": { "id": "create:crushed_raw_platinum", "count": c }, "chance": chance },
            { "item": { "id": "create:crushed_raw_silver", "count": c }, "chance": chance },
            { "item": { "id": "create:crushed_raw_tin", "count": c }, "chance": chance },
            { "item": { "id": "create:crushed_raw_lead", "count": c }, "chance": chance },
            { "item": { "id": "create:crushed_raw_aluminum", "count": c }, "chance": chance },
            { "item": { "id": "create:crushed_raw_uranium", "count": c }, "chance": chance },
            { "item": { "id": "create:crushed_raw_nickel", "count": c }, "chance": chance }
        ]
    }

    ftbstuff.sluice(outputs(0.2, 0), "minecraft:gravel", Fluid.of("minecraft:water", 1000), ["cloth"])
    ftbstuff.sluice(outputs(0.4, 1), "minecraft:gravel", Fluid.of("minecraft:water", 1000), ["iron"])
    ftbstuff.sluice(outputs(0.6, 2), "minecraft:gravel", Fluid.of("minecraft:water", 1000), ["gold"])
    ftbstuff.sluice(outputs(0.8, 3), "minecraft:gravel", Fluid.of("minecraft:water", 1000), ["diamond"])

    ftbstuff.sluice(outputs(0.2, 0, 8), "ftbstuff:compressed_gravel", Fluid.of("minecraft:water", 1000), ["cloth"])
    ftbstuff.sluice(outputs(0.4, 1, 8), "ftbstuff:compressed_gravel", Fluid.of("minecraft:water", 1000), ["iron"])
    ftbstuff.sluice(outputs(0.6, 2, 8), "ftbstuff:compressed_gravel", Fluid.of("minecraft:water", 1000), ["gold"])
    ftbstuff.sluice(outputs(0.8, 3, 8), "ftbstuff:compressed_gravel", Fluid.of("minecraft:water", 1000), ["diamond"])
})
