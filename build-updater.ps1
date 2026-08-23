param(
    [string]$Version = "1.0.0",
    [string]$Name = "ChaosWorld",
    [string]$Author = "yongaishide"
)

$ErrorActionPreference = "Stop"
$RepoPath = $PSScriptRoot

[Console]::OutputEncoding = New-Object System.Text.UTF8Encoding($false)
$OutputEncoding = New-Object System.Text.UTF8Encoding($false)

function Escape-Toml([string]$s) {
    return $s.Replace('\', '/').Replace('"', '\"')
}

$tracked = @{}
foreach ($line in (& git -c core.quotepath=false ls-files)) {
    if ($line) { $tracked[$line] = $true }
}

$miText = [System.IO.File]::ReadAllText((Join-Path $RepoPath "minecraftinstance.json"), [System.Text.Encoding]::UTF8)
$mi = $miText | ConvertFrom-Json

$mcVersion = "1.21.1"
if ($mi.manifest.minecraft.version) { $mcVersion = $mi.manifest.minecraft.version }
$loaderVersion = $mi.baseModLoader.forgeVersion

$urlMap = @{}
foreach ($a in $mi.installedAddons) {
    if ($a.installedFile.downloadUrl) { $urlMap[$a.fileNameOnDisk] = $a.installedFile.downloadUrl }
}

$entries = New-Object System.Collections.ArrayList
$skipped = @()

$modsDir = Join-Path $RepoPath "mods"
foreach ($jar in Get-ChildItem -LiteralPath $modsDir -Filter "*.jar" -File) {
    $rel = "mods/" + $jar.Name
    $hash = (Get-FileHash -LiteralPath $jar.FullName -Algorithm SHA256).Hash.ToLower()
    $url = $urlMap[$jar.Name]
    if ($url) {
        [void]$entries.Add(@{ rel = $rel; hash = $hash; url = $url })
    } else {
        if (-not $tracked.ContainsKey($rel)) {
            $skipped += "no CDN url and not committed to git: $rel"
            continue
        }
        [void]$entries.Add(@{ rel = $rel; hash = $hash; url = $null })
    }
}

$overrideFolders = @("config", "defaultconfigs", "kubejs", "data", "datapacks", "patchouli_books")
foreach ($folder in $overrideFolders) {
    $srcDir = Join-Path $RepoPath $folder
    if (-not (Test-Path -LiteralPath $srcDir)) { continue }
    foreach ($f in Get-ChildItem -LiteralPath $srcDir -Recurse -File) {
        $rel = $f.FullName.Substring($RepoPath.Length + 1).Replace('\', '/')
        if (-not $tracked.ContainsKey($rel)) {
            $skipped += "not committed to git (players cannot download): $rel"
            continue
        }
        $hash = (Get-FileHash -LiteralPath $f.FullName -Algorithm SHA256).Hash.ToLower()
        [void]$entries.Add(@{ rel = $rel; hash = $hash; url = $null })
    }
}

$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine('hash-format = "sha256"')
[void]$sb.AppendLine('')
foreach ($e in ($entries | Sort-Object rel)) {
    [void]$sb.AppendLine('[[files]]')
    [void]$sb.AppendLine('file = "' + (Escape-Toml $e.rel) + '"')
    [void]$sb.AppendLine('hash = "' + $e.hash + '"')
    [void]$sb.AppendLine('metafile = false')
    if ($e.url) {
        [void]$sb.AppendLine('')
        [void]$sb.AppendLine('[files.download]')
        [void]$sb.AppendLine('mode = "url"')
        [void]$sb.AppendLine('url = "' + $e.url + '"')
    }
    [void]$sb.AppendLine('')
}

$indexPath = Join-Path $RepoPath "index.toml"
[System.IO.File]::WriteAllText($indexPath, $sb.ToString(), (New-Object System.Text.UTF8Encoding($false)))
$indexHash = (Get-FileHash -LiteralPath $indexPath -Algorithm SHA256).Hash.ToLower()

$packText = @"
name = "$Name"
author = "$Author"
version = "$Version"
pack-format = "packwiz:1.1.0"

[index]
file = "index.toml"
hash-format = "sha256"
hash = "$indexHash"

[versions]
minecraft = "$mcVersion"
neoforge = "$loaderVersion"
"@
[System.IO.File]::WriteAllText((Join-Path $RepoPath "pack.toml"), $packText, (New-Object System.Text.UTF8Encoding($false)))

Write-Host "entries: $($entries.Count) (mods via CDN: $(($entries | Where-Object url).Count), from repo: $(($entries | Where-Object { -not $_.url }).Count))"

if ($skipped.Count -gt 0) {
    Write-Host ""
    Write-Host "WARNING: $($skipped.Count) files skipped (players cannot download them):"
    $skipped | Select-Object -First 20 | ForEach-Object { Write-Host "  $_" }
}

$dirty = & git status --porcelain
if ($dirty) {
    Write-Host ""
    Write-Host "WARNING: repository has uncommitted changes. Commit + push + sync Gitee BEFORE players update, otherwise hash mismatch!"
}
