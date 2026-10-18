# 从整合包实例的 mods/ 目录重新生成 wiki/mods/list.md
# 用法：在整合包根目录（本文件上上级目录的上一级）执行
#   pwsh -File wiki/scripts/gen-mod-list.ps1
# 或在任意位置指定实例路径：
#   pwsh -File wiki/scripts/gen-mod-list.ps1 -InstancePath "D:\...\Chaos_world"

param(
    [string]$InstancePath = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
)

$ErrorActionPreference = 'Stop'

$modsDir = Join-Path $InstancePath 'mods'
$outFile = Join-Path $InstancePath 'wiki\mods\list.md'

if (-not (Test-Path $modsDir)) { throw "找不到模组目录: $modsDir" }

$jars = Get-ChildItem $modsDir -Filter *.jar | Select-Object -ExpandProperty BaseName | Sort-Object

$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine('# 完整模组清单')
[void]$sb.AppendLine()
[void]$sb.AppendLine("共 **$($jars.Count)** 个模组。本页由脚本从整合包实例的 ``mods/`` 目录自动生成；新增或删除模组后重新生成即可。")
[void]$sb.AppendLine()
[void]$sb.AppendLine('::: info 说明')
[void]$sb.AppendLine('下列名称是 **jar 文件名**（去掉 `.jar` 后缀），不是游戏内中文名；大部分条目本身已经带上了版本号。')
[void]$sb.AppendLine(':::')
[void]$sb.AppendLine()

$groups = $jars | Group-Object {
    if ($_.Substring(0, 1) -match '[A-Za-z]') { $_.Substring(0, 1).ToUpper() } else { '#' }
} | Sort-Object Name

foreach ($g in $groups) {
    [void]$sb.AppendLine("## $($g.Name)")
    [void]$sb.AppendLine()
    foreach ($n in ($g.Group | Sort-Object)) { [void]$sb.AppendLine("- ``$n``") }
    [void]$sb.AppendLine()
}

Set-Content -Path $outFile -Value $sb.ToString() -Encoding utf8 -NoNewline
Write-Host "已生成 $outFile（$($jars.Count) 个模组）"
