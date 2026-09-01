StartupEvents.registry("mekanism:chemical", (event) => {
    //基础拓扑物质
    event.create("kubejs:basic_topological_matter").tint("#862856")
    //致密拓扑物质
    event.create("kubejs:dense_topological_matter").tint("#4B1931")
    //纠缠拓扑物质
    event.create("kubejs:entangled_topological_matter").tint("#85459E")
    //超维拓扑物质
    event.create("kubejs:superdimensional_topological_matter").tint("#454B9E")
    //数据水晶
    event.create("kubejs:data_crystal").tint("#78EFD0")
})