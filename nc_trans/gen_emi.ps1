$ErrorActionPreference = 'Stop'
$root = 'D:\我的世界\.minecraft\versions\Chaos_world'

$jz = [System.IO.File]::ReadAllText("$root\nc_trans\zh_cn_final.json", [System.Text.Encoding]::UTF8) | ConvertFrom-Json
$php = @{}
foreach ($p in $jz.PSObject.Properties) { $php[$p.Name] = [string]$p.Value }

$emiEn = [System.IO.File]::ReadAllText("$root\nc_trans\emi_en_us.json", [System.Text.Encoding]::UTF8) | ConvertFrom-Json

$categoryManual = [ordered]@{
    'collector'                  = '收集器'
    'condenser'                  = '冷凝器'
    'condenser_dissipation'      = '冷凝器散热'
    'decay_pool_heat_source'     = '衰变池热源'
    'electrolyzer_anode'         = '电解池阳极'
    'electrolyzer_cathode'       = '电解池阴极'
    'fission_emergency_cooling'  = '裂变应急冷却'
    'fission_heating'            = '裂变排气加热'
    'fission_moderator'          = '裂变慢化剂'
    'fission_reflector'          = '裂变反射板'
    'gas_cooling'                = '球床冷却'
    'heat_exchanger'             = '热交换器'
    'infiltrator_pressure'       = '渗透器压力流体'
    'machine_diaphragm'          = '隔膜'
    'machine_sieve_assembly'     = '筛网组件'
    'multiblock_decay_pool'      = '多方块衰变池'
    'multiblock_distiller'       = '多方块蒸馏塔'
    'multiblock_electrolyzer'    = '多方块电解池'
    'multiblock_infiltrator'     = '多方块渗透器'
    'pebble_fission'             = '球床裂变'
    'salt_cooling'               = '熔盐冷却'
    'salt_fission'               = '熔盐裂变'
    'solid_fission'              = '固体燃料裂变'
    'turbine'                    = '涡轮机'
}

$matManual = [ordered]@{
    'alugentum'              = '铝钇合金'
    'c_mn_blend'             = '碳锰混合粉'
    'crystal_binder'         = '晶体黏合剂'
    'dimensional_blend'      = '维度混合粉'
    'energetic_blend'        = '高能混合粉'
    'hydroquinone'           = '对苯二酚'
    'potassium_hydroquinone' = '对苯二酚钾'
    'sodium_hydroquinone'    = '对苯二酚钠'
    'irradiated_borax'       = '辐照硼砂'
    'boron_arsenide'         = '砷化硼'
    'boron_nitride'          = '氮化硼'
    'rhodochrosite'          = '菱锰'
    'barite'                 = '重晶石'
    'nichromite'             = '镍铬矿'
    'silicon'                = '硅'
    'carobbiite'             = '方氟钾石'
    'villiaumite'            = '氟盐'
    'dysprholminite'         = '镝钬石'
    'fluorite'               = '氟石'
    'borax'                  = '硼砂'
    'graphite'               = '石墨'
    'zirconia'               = '二氧化锆'
    'end_stone'              = '末地石'
    'cobalt_oxide'           = '氧化钴'
    'iridium_oxide'          = '氧化铱'
    'manganese_dioxide'      = '二氧化锰'
    'manganese_oxide'        = '氧化锰'
    'nickel_oxide'           = '氧化镍'
    'ruthenium_oxide'        = '氧化钌'
    'tin_oxide'              = '氧化锡'
    'ammonium_bisulfate'     = '硫酸氢铵'
    'ammonium_persulfate'    = '过硫酸铵'
    'ammonium_sulfate'       = '硫酸铵'
    'barium_sulfide'         = '硫化钡'
    'calcium_sulfate'        = '硫酸钙'
    'potassium_fluoride'     = '氟化钾'
    'potassium_hydroxide'    = '氢氧化钾'
    'sodium_fluoride'        = '氟化钠'
    'sodium_hydroxide'       = '氢氧化钠'
    'aluminum'               = '铝'
    'arsenic'                = '砷'
    'beryllium'              = '铍'
    'boron'                  = '硼'
    'coal'                   = '煤'
    'cobalt'                 = '钴'
    'diamond'                = '钻石'
    'dysprosium'             = '镝'
    'gadolinium'             = '钆'
    'holmium'                = '钬'
    'iridium'                = '铱'
    'lead'                   = '铅'
    'lithium'                = '锂'
    'magnesium'              = '镁'
    'manganese'              = '锰'
    'nickel'                 = '镍'
    'obsidian'               = '黑曜石'
    'palladium'              = '钯'
    'potassium'              = '钾'
    'quartz'                 = '石英'
    'ruthenium'              = '钌'
    'silica'                 = '二氧化硅'
    'silver'                 = '银'
    'sodium'                 = '钠'
    'sulfur'                 = '硫'
    'thorium'                = '钍'
    'tin'                    = '锡'
    'uranium'                = '铀'
    'zirconium'              = '锆'
}

$result = [ordered]@{}
$missing = @()
foreach ($p in $emiEn.PSObject.Properties) {
    $key = $p.Name
    if ($key -like 'emi.category.nuclearcraftneohaul.*') {
        $cat = $key.Substring('emi.category.nuclearcraftneohaul.'.Length)
        $val = $null
        foreach ($prefix in @('block.', 'item.')) {
            $bk = $prefix + 'nuclearcraftneohaul.' + $cat
            if ($php.ContainsKey($bk) -and $php[$bk]) { $val = $php[$bk]; break }
        }
        if (-not $val -and $categoryManual.Contains($cat)) { $val = $categoryManual[$cat] }
        if (-not $val) { $missing += $key; continue }
        $result[$key] = $val
        continue
    }
    if ($key -like 'tag.item.c.*') {
        $rest = $key.Substring('tag.item.c.'.Length)
        $parts = $rest -split '\.'
        $family = $parts[0]
        $plural = $parts[1]
        $isRaw = $plural.StartsWith('raw_')
        $singular = $plural
        if ($isRaw) { $singular = $singular.Substring(4) }
        if ($singular.EndsWith('s')) { $singular = $singular.Substring(0, $singular.Length - 1) }
        $mat = $null
        foreach ($suffix in @('_dust', '_ingot', '_nugget', '_gem', '_ore')) {
            $k = "item.nuclearcraftneohaul.$($singular)$($suffix)"
            if ($php.ContainsKey($k)) {
                $v = $php[$k]
                foreach ($strip in @('粉', '粉末', '锭', '粒', '矿石')) { $v = $v -replace ($strip + '$'), '' }
                if ($v) { $mat = $v; break }
            }
        }
        if (-not $mat -and $matManual.Contains($singular)) { $mat = $matManual[$singular] }
        if (-not $mat) { $missing += $key; continue }
        switch ($family) {
            'dusts'          { $val = "$($mat)粉" }
            'ingots'         { $val = "$($mat)锭" }
            'nuggets'        { $val = "$($mat)粒" }
            'gems'           { $val = "$($mat)" }
            'ores'           { $val = "$($mat)矿石" }
            'raw_materials'  { $val = "粗$($mat)" }
            'storage_blocks' {
                if ($isRaw) { $val = "粗$($mat)块" } else { $val = "$($mat)块" }
            }
            default { $val = $null }
        }
        if (-not $val) { $missing += $key; continue }
        $result[$key] = $val
        continue
    }
    $missing += $key
}

$overrides = [ordered]@{
    'tag.item.c.dusts.alugentums'         = '银铝粉'
    'tag.item.c.dusts.c_mn_blends'        = '碳锰混合物'
    'tag.item.c.dusts.dimensional_blends' = '维度混合物'
    'tag.item.c.dusts.energetic_blends'   = '充能混合物'
    'tag.item.c.dusts.crystal_binders'    = '晶体粘合剂'
}
foreach ($ok in $overrides.Keys) { $result[$ok] = $overrides[$ok] }

Write-Host "translated: $($result.Count) / $($emiEn.PSObject.Properties.Name.Count)"
Write-Host "missing: $($missing.Count)"
$missing | ForEach-Object { "  MISSING $_" }
$out = [ordered]@{}
foreach ($k in ($emiEn.PSObject.Properties.Name)) { if ($result.Contains($k)) { $out[$k] = $result[$k] } }
$json = ($out | ConvertTo-Json -Depth 3)
$json = $json -replace "`r`n", "`n"
$emiDir = "$root\kubejs\assets\emi\lang"
New-Item -ItemType Directory -Force -Path $emiDir | Out-Null
[System.IO.File]::WriteAllText("$emiDir\zh_cn.json", $json, (New-Object System.Text.UTF8Encoding($false)))
[System.IO.File]::WriteAllText("$root\nc_trans\emi_zh_cn.json", $json, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "--- draft ---"
foreach ($k in $out.Keys) { "$k = $($out[$k])" }
