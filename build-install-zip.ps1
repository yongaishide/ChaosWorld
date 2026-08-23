param(
    [string]$InstancePath = "C:\Users\Admin\curseforge\minecraft\Instances\ChaosWorld-1.21.1",
    [string]$Name = "ChaosWorld",
    [string]$Url = "https://gitee.com/yongaishide/ChaosWorld/raw/main/pack.toml"
)

$ErrorActionPreference = "Stop"
$RepoPath = $PSScriptRoot
$Tmp = Join-Path $env:TEMP "packwiz-prism-$([guid]::NewGuid().ToString('N'))"

$miText = [System.IO.File]::ReadAllText((Join-Path $InstancePath "minecraftinstance.json"), [System.Text.Encoding]::UTF8)
$mi = $miText | ConvertFrom-Json
$mcVersion = "1.21.1"
if ($mi.manifest.minecraft.version) { $mcVersion = $mi.manifest.minecraft.version }
$loaderVersion = $mi.baseModLoader.forgeVersion

$root = Join-Path $Tmp $Name
$mcDir = Join-Path $root ".minecraft"
New-Item -ItemType Directory -Path $mcDir -Force | Out-Null

Copy-Item -LiteralPath (Join-Path $RepoPath "packwiz-installer.jar") -Destination (Join-Path $mcDir "packwiz-installer.jar") -Force

$utf8 = New-Object System.Text.UTF8Encoding($false)

$cfg = "name=$Name`nInstanceType=OneSix`nIntendedVersion=$mcVersion`nPreLaunchCommand=`"`$INST_JAVA`" -jar packwiz-installer.jar $Url`n"
[System.IO.File]::WriteAllText((Join-Path $root "instance.cfg"), $cfg, $utf8)

$mmcPack = @"
{
    "formatVersion": 1,
    "name": "$Name",
    "uid": "net.minecraft",
    "version": "$mcVersion",
    "components": [
        {
            "uid": "net.minecraft",
            "version": "$mcVersion",
            "important": true,
            "cachedName": "Minecraft",
            "cachedVersion": "$mcVersion",
            "cachedVolatile": true
        },
        {
            "uid": "net.neoforged",
            "version": "$loaderVersion",
            "cachedName": "NeoForge",
            "cachedVersion": "$loaderVersion"
        }
    ]
}
"@
[System.IO.File]::WriteAllText((Join-Path $root "mmc-pack.json"), $mmcPack, $utf8)

$mmcExport = @"
{
    "formatVersion": 1,
    "components": [
        {
            "cachedName": "Minecraft",
            "cachedVersion": "$mcVersion",
            "cachedVolatile": true,
            "dependencyOnly": false,
            "important": true,
            "uid": "net.minecraft",
            "version": "$mcVersion"
        },
        {
            "cachedName": "NeoForge",
            "cachedVersion": "$loaderVersion",
            "cachedVolatile": false,
            "dependencyOnly": false,
            "important": true,
            "uid": "net.neoforged",
            "version": "$loaderVersion"
        }
    ]
}
"@
[System.IO.File]::WriteAllText((Join-Path $root "mmc-export.json"), $mmcExport, $utf8)

Add-Type -AssemblyName System.IO.Compression.FileSystem
$zipPath = Join-Path $RepoPath "$Name-install.zip"
if (Test-Path -LiteralPath $zipPath) { Remove-Item -LiteralPath $zipPath -Force }
[System.IO.Compression.ZipFile]::CreateFromDirectory($Tmp, $zipPath, [System.IO.Compression.CompressionLevel]::Optimal, $false)

$patchRoot = Join-Path $Tmp "patch"
$patchMc = Join-Path $patchRoot ".minecraft"
New-Item -ItemType Directory -Path $patchMc -Force | Out-Null
[System.IO.File]::WriteAllText((Join-Path $patchRoot "instance.cfg"), $cfg, $utf8)
Copy-Item -LiteralPath (Join-Path $RepoPath "packwiz-installer.jar") -Destination (Join-Path $patchMc "packwiz-installer.jar") -Force
$patchZip = Join-Path $RepoPath "$Name-AutoUpdate-Patch.zip"
if (Test-Path -LiteralPath $patchZip) { Remove-Item -LiteralPath $patchZip -Force }
[System.IO.Compression.ZipFile]::CreateFromDirectory($patchRoot, $patchZip, [System.IO.Compression.CompressionLevel]::Optimal, $false)

Remove-Item -LiteralPath $Tmp -Recurse -Force

Write-Host "generated: $zipPath (new instance import)"
Write-Host "generated: $patchZip (unzip into existing instance folder)"
