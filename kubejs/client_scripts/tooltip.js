// 中文翻译: assets\kubejs\lang\zh_cn.json
// English translation: assets\kubejs\lang\en_us.json
ItemEvents.modifyTooltips(event =>{
    event.add("extendedae:assembler_matrix_frame",Text.translate("tooltip.kubejs.assembler_matrix_frame"))
    event.add("extendedae:assembler_matrix_wall",Text.translate("tooltip.kubejs.assembler_matrix_wall"))
    event.add("extendedae:assembler_matrix_glass",Text.translate("tooltip.kubejs.assembler_matrix_glass"))
    event.add("#minecraft:candles",Text.translate("tooltip.kubejs.candle"))
    event.add("minecraft:diamond",Text.translate("tooltip.kubejs.diamond"))
    event.modify(["ae2lt:pigmee_storage_cell","ae2lt:pigmee_item_cell_housing","ae2lt:pigmee_storage_component","ae2lt:pigmee_core","ae2lt:pigmee_molecular_assembler","ae2lt:pigmee_pattern_provider","ae2lt:pigmee_mentalmath_unit"], builder =>{
        builder.insert(1,[Text.translate("tooltip.kubejs.pigmee_storage_cell").color("#FCA2A2")])
    })
    const omni_cells = /ae2omnicells:(portable_)?(complex_|quantum_)?omni_cell_\d+[km]/
    event.modify(omni_cells,{shift:false}, builder =>{
        builder.insert(1,[Text.translate("tooltip.kubejs.omni_cell.hint")])
    })
    event.modify(omni_cells,{shift:true}, builder =>{
        builder.insert(1,[Text.translate("tooltip.kubejs.omni_cell.bytes"),Text.translate("tooltip.kubejs.omni_cell.types")])
    })
    /*
    event.addAdvanced("extendedcrafting:legendary_table",(item,advanced,text) =>{
        text.add(1,Text.of("哪个神人会用这个工作台").obfuscated())
    })*/
    
    event.modify("extendedae:assembler_matrix_pattern", builder =>{
        builder.insert(1,[Text.red(Text.translate("tooltip.kubejs.install_at_least_one")).append(Text.translate("tooltip.kubejs.assembler_matrix_pattern.desc"))])
    })
    event.modify("extendedae:assembler_matrix_crafter", builder =>{
        builder.insert(1,[Text.red(Text.translate("tooltip.kubejs.install_at_least_one")).append(Text.translate("tooltip.kubejs.assembler_matrix_crafter.desc"))])
    })
    event.modify("extendedae:assembler_matrix_speed", builder =>{
        builder.insert(1,[Text.red(Text.translate("tooltip.kubejs.max_five")).append(Text.translate("tooltip.kubejs.assembler_matrix_speed.desc"))])
    })
    /** 
    event.addAdvanced("avaritia:infinity_sword",(item,advanced,text) =>{
        text.remove(0)
        text.add(0,Text.red("寰宇无限之剑"))
    })
    event.addAdvanced(Item.of('avaritia:infinity_totem', '{Damage:0}'),(item,advanced,text) =>{
        text.remove(0)
        text.add(0,Text.red("永恒之魂"))
    })
    event.addAdvanced(Item.of('avaritia:extreme_crafting_table', '{Damage:0}'),(item,advanced,text) =>{
        text.remove(0)
        text.add(0,Text.red("终焉工作台"))
    })
    */
})