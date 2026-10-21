$ErrorActionPreference = 'Stop'
$lang = 'D:\我的世界\.minecraft\versions\Chaos_world\kubejs\assets\nuclearcraftneohaul\lang'
$src = Join-Path $lang 'zh_cn.json'
$tmp = 'D:\我的世界\.minecraft\versions\Chaos_world\nc_trans\zh_cn_normalized.json'

$raw = [System.IO.File]::ReadAllText($src, [System.Text.Encoding]::UTF8)
$before = $raw.Length

# global terminology normalization (values only contain these Chinese terms)
$raw = $raw.Replace('卡罗比石', '方氟钾石')
$raw = [regex]::Replace($raw, '(?<!方)氟钾石', '方氟钾石')
$raw = $raw.Replace('散热槽', '散热器')
$raw = $raw.Replace('凛冰之凝液', '凛冰')
$raw = $raw.Replace('地狱砖', '下界砖')
$raw = $raw.Replace('黏液', '史莱姆')
$raw = $raw.Replace('净化仪', '净化器')
$raw = $raw.Replace('辐射净化剂', '辐射清洗剂')
$raw = $raw.Replace('清辐剂', '辐射清洗剂')
$raw = $raw.Replace('萤石', '氟石')   # fluorite = 氟石 (glowstone stays 荧石)

# enderium must be 末影合金 (raw ender fluid stays 末影)
$raw = $raw.Replace('末影裂变', '末影合金裂变')
$raw = $raw.Replace('熔融末影"', '熔融末影合金"')
$raw = $raw.Replace('共晶钠钾-末影混合物', '共晶钠钾-末影合金混合物')
$raw = $raw.Replace('热共晶钠钾-末影混合物', '热共晶钠钾-末影合金混合物')
$raw = $raw.Replace('起效的末影加热器', '起效的末影合金加热器')
$raw = $raw.Replace('有效的末影散热器', '有效的末影合金散热器')
$raw = $raw.Replace(', 末影,', ', 末影合金,')
$raw = $raw.Replace(', 末影。', ', 末影合金。')

[System.IO.File]::WriteAllText($tmp, $raw, (New-Object System.Text.UTF8Encoding($false)))

# validation
$old = [System.IO.File]::ReadAllText($src, [System.Text.Encoding]::UTF8) | ConvertFrom-Json
$new = [System.IO.File]::ReadAllText($tmp, [System.Text.Encoding]::UTF8) | ConvertFrom-Json
$ok = $old.PSObject.Properties.Name
$nk = $new.PSObject.Properties.Name
Write-Host "keys old/new: $($ok.Count) / $($nk.Count)"
Write-Host "order identical: $((($ok -join '|') -eq ($nk -join '|')))"
$changed = 0
for ($i = 0; $i -lt $ok.Count; $i++) {
    if ($old.PSObject.Properties[$ok[$i]].Value -ne $new.PSObject.Properties[$ok[$i]].Value) { $changed++ }
}
Write-Host "values changed: $changed"
Write-Host "size $before -> $($raw.Length)"
$bytes = [System.IO.File]::ReadAllBytes($tmp)
Write-Host "first bytes: $($bytes[0..2] -join ',')"
