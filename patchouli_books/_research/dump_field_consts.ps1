param([string]$Jar,[string]$Entry)
Add-Type -AssemblyName System.IO.Compression.FileSystem
$z=[System.IO.Compression.ZipFile]::OpenRead($Jar)
$e=$z.GetEntry($Entry)
$s=$e.Open(); $ms=New-Object System.IO.MemoryStream; $s.CopyTo($ms); $s.Dispose(); $bytes=$ms.ToArray(); $ms.Dispose(); $z.Dispose()
$ms2=New-Object System.IO.MemoryStream
$ms2.Write($bytes,0,$bytes.Length); $ms2.Position=0
$br=New-Object System.IO.BinaryReader $ms2
function U1 { return [int]$br.ReadByte() }
function U2 { $b=$br.ReadBytes(2); return ([int]$b[0] -shl 8) -bor [int]$b[1] }
function U4 { $b=$br.ReadBytes(4); return ([int64]$b[0] -shl 24) -bor ([int64]$b[1] -shl 16) -bor ([int64]$b[2] -shl 8) -bor [int64]$b[3] }
function Sk([int64]$n){ if($n -gt 0){ [void]$br.ReadBytes([int]$n) } }
[void](U4); [void](U2); [void](U2)
$cpCount=U2
$utf8=@{}; $ints=@{}
for($i=1;$i -lt $cpCount;$i++){
  $tag=U1
  switch($tag){
    1 { $len=U2; $utf8[$i]=[System.Text.Encoding]::UTF8.GetString($br.ReadBytes($len)) }
    3 { $ints[$i]=[int](U4) }
    4 { Sk 4 }
    5 { Sk 8; $i++ }
    6 { Sk 8; $i++ }
    7 { Sk 2 }
    8 { Sk 2 }
    9 { Sk 4 }
    10 { Sk 4 }
    11 { Sk 4 }
    12 { Sk 4 }
    15 { Sk 3 }
    16 { Sk 2 }
    17 { Sk 4 }
    18 { Sk 4 }
    19 { Sk 2 }
    20 { Sk 2 }
    default { Write-Output "UNKNOWN TAG $tag at $i"; return }
  }
}
Sk 6
$ifCount=U2; Sk (2*$ifCount)
$fCount=U2
Write-Output "== fields ($fCount) =="
for($f=0;$f -lt $fCount;$f++){
  [void](U2)
  $nameIdx=U2; $descIdx=U2
  $aCount=U2
  $name=$utf8[$nameIdx]; $val=$null
  for($a=0;$a -lt $aCount;$a++){
    $anIdx=U2; $aLen=U4
    $an=$utf8[$anIdx]
    if($an -eq 'ConstantValue'){ $cvIdx=U2; $val=$ints[$cvIdx] }
    else { Sk $aLen }
  }
  if($null -ne $val){ Write-Output ("  " + $name + " = " + $val) }
}
$br.Dispose()
