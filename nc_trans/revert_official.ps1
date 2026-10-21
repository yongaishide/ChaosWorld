$ErrorActionPreference = 'Stop'
$root  = 'D:\我的世界\.minecraft\versions\Chaos_world'
$lang  = "$root\kubejs\assets\nuclearcraftneohaul\lang"
$enP   = "$lang\en_us.json"
$zhP   = "$lang\zh_cn.json"
$jarP  = "$root\nc_trans\jar_zh_cn.json"

function Read-JsonMap([string]$path) {
    $t = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    $o = $t | ConvertFrom-Json
    $h = [ordered]@{}
    foreach ($p in $o.PSObject.Properties) { $h[$p.Name] = [string]$p.Value }
    return $h
}

function Esc([string]$s) {
    $sb = New-Object System.Text.StringBuilder
    foreach ($ch in $s.ToCharArray()) {
        switch ($ch) {
            '"'  { [void]$sb.Append('\"') }
            '\'  { [void]$sb.Append('\\') }
            "`n" { [void]$sb.Append('\n') }
            "`r" { [void]$sb.Append('\r') }
            "`t" { [void]$sb.Append('\t') }
            default {
                if ([int]$ch -lt 32) { [void]$sb.Append(('\u{0:x4}' -f [int]$ch)) } else { [void]$sb.Append($ch) }
            }
        }
    }
    return $sb.ToString()
}

$en = Read-JsonMap $enP
$zh = Read-JsonMap $zhP
$jz = Read-JsonMap $jarP

# 1) revert our normalization deviations back to official wording
$keepOurs = @('nuclearcraftneohaul.message.multitool.connected_component_info')
$reverted = 0
foreach ($k in $en.Keys) {
    if ($jz.Contains($k) -and $zh[$k] -ne $jz[$k] -and ($keepOurs -notcontains $k)) { $zh[$k] = $jz[$k]; $reverted++ }
}
Write-Host "reverted to official: $reverted"

# 2) add official keys that en_us.json does not contain
$added = 0
foreach ($k in $jz.Keys) {
    if (-not $zh.Contains($k)) { $zh[$k] = $jz[$k]; $added++ }
}
Write-Host "official-only keys added: $added"

# 3) official terminology alignment for the rest (our own translations)
$fixes = @(
    @('净化器', '净化仪'),
    @('末影合金', '末影'),
    @('下界砖', '地狱砖'),
    @('散热槽', '散热器'),
    @('辐射清洗剂', '清辐剂')
)
$termFixed = 0
foreach ($k in @($zh.Keys)) {
    if ($jz.Contains($k)) { continue }
    $v = $zh[$k]
    foreach ($pair in $fixes) { $v = $v.Replace($pair[0], $pair[1]) }
    if ($v -ne $zh[$k]) { $zh[$k] = $v; $termFixed++ }
}
Write-Host "our entries term-aligned: $termFixed"

# 4) write in en_us order, then official-only keys
$sb = New-Object System.Text.StringBuilder
[void]$sb.Append("{`n")
$first = $true
foreach ($k in $en.Keys) {
    if (-not $first) { [void]$sb.Append(",`n") }
    $first = $false
    [void]$sb.Append('  "').Append((Esc $k)).Append('": "').Append((Esc $zh[$k])).Append('"')
}
foreach ($k in $zh.Keys) {
    if ($en.Contains($k)) { continue }
    [void]$sb.Append(",`n")
    [void]$sb.Append('  "').Append((Esc $k)).Append('": "').Append((Esc $zh[$k])).Append('"')
}
[void]$sb.Append("`n}`n")

$out = "$root\nc_trans\zh_cn_final.json"
[System.IO.File]::WriteAllText($out, $sb.ToString(), (New-Object System.Text.UTF8Encoding($false)))
Write-Host "WROTE $out  keys=$($zh.Count)  bytes=$((Get-Item $out).Length)"
