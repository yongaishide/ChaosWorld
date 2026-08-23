param(
    [string]$InstancePath = "C:\Users\Admin\curseforge\minecraft\Instances\ChaosWorld-1.21.1",
    [string]$Name = "ChaosWorld",
    [string]$Url = "https://gitee.com/yongaishide/ChaosWorld/raw/main/pack.toml"
)

$ErrorActionPreference = "Stop"
$RepoPath = $PSScriptRoot
$Tmp = Join-Path $env:TEMP "packwiz-patch-$([guid]::NewGuid().ToString('N'))"

$miText = [System.IO.File]::ReadAllText((Join-Path $InstancePath "minecraftinstance.json"), [System.Text.Encoding]::UTF8)
$mi = $miText | ConvertFrom-Json
$mcVersion = "1.21.1"
if ($mi.manifest.minecraft.version) { $mcVersion = $mi.manifest.minecraft.version }

$mcDir = Join-Path $Tmp ".minecraft"
New-Item -ItemType Directory -Path $mcDir -Force | Out-Null

Copy-Item -LiteralPath (Join-Path $RepoPath "packwiz-installer.jar") -Destination (Join-Path $mcDir "packwiz-installer.jar") -Force

$utf8 = New-Object System.Text.UTF8Encoding($false)
$cfg = "name=$Name`nInstanceType=OneSix`nIntendedVersion=$mcVersion`nPreLaunchCommand=`"`$INST_JAVA`" -jar packwiz-installer.jar $Url`n"
[System.IO.File]::WriteAllText((Join-Path $Tmp "instance.cfg"), $cfg, $utf8)

Add-Type -AssemblyName System.IO.Compression.FileSystem
$patchZip = Join-Path $RepoPath "$Name-AutoUpdate-Patch.zip"
if (Test-Path -LiteralPath $patchZip) { Remove-Item -LiteralPath $patchZip -Force }
[System.IO.Compression.ZipFile]::CreateFromDirectory($Tmp, $patchZip, [System.IO.Compression.CompressionLevel]::Optimal, $false)

Remove-Item -LiteralPath $Tmp -Recurse -Force

Write-Host "generated: $patchZip"
Write-Host "players unzip it into their instance folder, then launch - auto update runs automatically"
