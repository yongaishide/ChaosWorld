# ChaosWorld 自动更新说明

本仓库同时作为整合包的 packwiz 自动更新源：玩家启动器读取仓库里的 `pack.toml` / `index.toml`，自动安装/更新 mod 与配置文件。

## 玩家安装（零配置，Prism / MultiMC）

1. 到发行版页面下载 `ChaosWorld-AutoUpdate-Patch.zip`：
   - Gitee：https://gitee.com/yongaishide/ChaosWorld/releases
   - GitHub：https://github.com/yongaishide/ChaosWorld/releases
2. 解压到已安装的整合包实例文件夹内（与 `instance.cfg` 同级的目录，覆盖同名文件）
3. 重新启动游戏：自动检查并安装更新；已是最新版本则直接正常启动

> 已安装的 mod 与最新版本一致时不会重复下载，只下载缺失或版本不同的文件；启动时会先校验一遍现有文件，属正常现象。
> 打补丁后实例的内存/Java 参数会恢复默认，可自行再调。
> 其他启动器（HMCL / PCL2 / CurseForge 官方版）不支持启动前自动更新，请使用单独发布的整合包安装包。

## 手动配置（可选，给高级玩家）

1. 从仓库下载 `packwiz-installer.jar`，放进实例的 `.minecraft` 目录
2. 编辑实例 → 设置 → 自定义命令 → 预启动命令：

   ```
   "$INST_JAVA" -jar packwiz-installer.jar https://gitee.com/yongaishide/ChaosWorld/raw/main/pack.toml
   ```

## 作者发布流程

1. 修改整合包（mod / 配置 / KubeJS 脚本）
2. 运行 `build-updater.ps1` 重新生成 `index.toml` / `pack.toml`
3. `git add` + `commit` + `push` 到 GitHub，然后 Gitee 仓库手动同步
4. 玩家下次启动即自动更新

## 规则说明

- mod 下载直链从 `minecraftinstance.json` 自动读取（CurseForge CDN）
- 没有直链的自定义 mod（如 `mods/chaosworld_core-1.0.0.jar`）必须提交进 git 仓库，玩家从仓库下载
- 配置/脚本只更新「已提交进 git 仓库」的文件（被 .gitignore 忽略的文件玩家下载不到，脚本会自动跳过并提示）
- 运行脚本后务必先 commit + push + 同步 Gitee，再让玩家启动，否则哈希不匹配会更新失败
- 更新 Gitee 后 raw 链接有几分钟缓存延迟，属正常现象
