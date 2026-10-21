$ErrorActionPreference = 'Stop'
$WRITE = ($env:NC_WRITE -eq '1')
$lang = "D:\我的世界\.minecraft\versions\Chaos_world\kubejs\assets\nuclearcraftneohaul\lang"
$dir  = "D:\我的世界\.minecraft\versions\Chaos_world\nc_trans"

function Read-JsonMap([string]$path) {
    $raw = [System.IO.File]::ReadAllText($path)
    $o = $raw | ConvertFrom-Json
    $h = @{}
    foreach ($p in $o.PSObject.Properties) { $h[$p.Name] = [string]$p.Value }
    return $h
}

$enKeys = New-Object System.Collections.Generic.List[string]
$enMap  = @{}
$enRaw  = [System.IO.File]::ReadAllText((Join-Path $lang 'en_us.json'))
$enObj  = $enRaw | ConvertFrom-Json
foreach ($p in $enObj.PSObject.Properties) { $enKeys.Add($p.Name); $enMap[$p.Name] = [string]$p.Value }

$zhMap = Read-JsonMap (Join-Path $lang 'zh_cn.json')

$newMap = @{}
$dup = 0
Get-ChildItem $dir -Filter 'trans*.json' | ForEach-Object {
    $t = Read-JsonMap $_.FullName
    foreach ($k in $t.Keys) {
        if (-not $enMap.ContainsKey($k)) { Write-Host "!! unknown key in $($_.Name): $k"; continue }
        if ($newMap.ContainsKey($k)) { $dup++ }
        $newMap[$k] = $t[$k]
    }
}
Write-Host "translated new entries: $($newMap.Count)  (dup collisions: $dup)"

# apply manual overrides last
$ovPath = Join-Path $dir 'overrides.json'
if (Test-Path $ovPath) {
    $ovRaw = [System.IO.File]::ReadAllText($ovPath) | ConvertFrom-Json
    foreach ($p in $ovRaw.PSObject.Properties) { $zhMap[$p.Name] = [string]$p.Value; $newMap.Remove($p.Name) }
    Write-Host "overrides applied: $($ovRaw.PSObject.Properties.Name.Count)"
}
# ---- coverage check ----
$missing = @()
foreach ($k in $enKeys) { if (-not $newMap.ContainsKey($k) -and -not $zhMap.ContainsKey($k)) { $missing += $k } }
Write-Host "still missing after merge: $($missing.Count)"
$missing | ForEach-Object { Write-Host "  MISSING $_" }

# ---- placeholder check ----
function Get-Placeholders([string]$s) {
    $m = [regex]::Matches($s, '(%(?:\d+\$)?[-#+0-9.]*[sdfxXeEgGc])|(\\n)|(§[0-9a-fk-or])')
    return ($m | ForEach-Object { ($_.Value -replace '^%(\d+)?\`$', '%') } | Sort-Object) -join '|'
}
$badPlace = 0
foreach ($k in $enKeys) {
    $val = if ($newMap.ContainsKey($k)) { $newMap[$k] } elseif ($zhMap.ContainsKey($k)) { $zhMap[$k] } else { $null }
    if ($null -eq $val) { continue }
    $a = Get-Placeholders $enMap[$k]
    $b = Get-Placeholders $val
    if ($a -ne $b) { $badPlace++; Write-Host "PLACEHOLDER MISMATCH: $k`n   EN: $($enMap[$k])`n   ZH: $val" }
}
Write-Host "placeholder mismatches: $badPlace"

# ---- suspicion: value still contains long ascii words (untranslated) ----
$sus = 0
foreach ($k in $newMap.Keys) {
    $v = $newMap[$k]
    if ($v -match '[A-Za-z]{4,}' -and $v -notmatch '[\u4e00-\u9fff]') { $sus++; Write-Host "SUSPECT-EN: $k => $v" }
    elseif ($v -match '[A-Za-z]{4,}' -and $v -match '[\u4e00-\u9fff]') { $sus++; Write-Host "SUSPECT-MIX: $k => $v" }
}
Write-Host "suspicious entries: $sus"

if (-not $WRITE) { Write-Host "DRY RUN - nothing written"; exit 0 }

# ---- emit ----
function Esc([string]$s) {
    $sb = New-Object System.Text.StringBuilder
    foreach ($ch in $s.ToCharArray()) {
        $code = [int]$ch
        if ($code -eq 34) { [void]$sb.Append('\"') }
        elseif ($code -eq 92) { [void]$sb.Append('\\') }
        elseif ($code -eq 10) { [void]$sb.Append('\n') }
        elseif ($code -eq 13) { [void]$sb.Append('\r') }
        elseif ($code -eq 9) { [void]$sb.Append('\t') }
        elseif ($code -lt 32) { [void]$sb.Append(('\u{0:x4}' -f $code)) }
        else { [void]$sb.Append($ch) }
    }
    return $sb.ToString()
}

$sb = New-Object System.Text.StringBuilder
[void]$sb.Append("{`n")
for ($i = 0; $i -lt $enKeys.Count; $i++) {
    $k = $enKeys[$i]
    $val = if ($newMap.ContainsKey($k)) { $newMap[$k] } elseif ($zhMap.ContainsKey($k)) { $zhMap[$k] } else { $null }
    if ($null -eq $val) { throw "no value for $k" }
    $line = '  "' + (Esc $k) + '": "' + (Esc $val) + '"'
    if ($i -lt $enKeys.Count - 1) { $line += ',' }
    [void]$sb.Append($line).Append("`n")
}
[void]$sb.Append("}`n")

$out = if ($env:NC_OUT) { $env:NC_OUT } else { Join-Path $lang 'zh_cn.json' }
Copy-Item (Join-Path $lang 'zh_cn.json') (Join-Path $dir 'zh_cn.backup.json') -Force
[System.IO.File]::WriteAllText($out, $sb.ToString(), (New-Object System.Text.UTF8Encoding($false)))
Write-Host "WROTE $out ($([System.IO.File]::ReadAllBytes($out).Length) bytes)"
