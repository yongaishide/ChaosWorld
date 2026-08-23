# ChaosWorld 自动更新说明

本仓库同时作为整合包的 packwiz 自动更新源：玩家启动器读取仓库里的 `pack.toml` / `index.toml`，自动安装/更新 mod 与配置文件。

## 玩家使用（Prism Launcher）

1. 从仓库下载 `packwiz-installer.jar`，放进实例的 `.minecraft` 目录（与 `options.txt` 同级）
2. Prism 新建实例：Minecraft 1.21.1 + NeoForge
3. 编辑实例 → 设置 → 自定义命令 → 勾选「自定义命令」，预启动命令填：

   ```
   "$INST_JAVA" -jar packwiz-installer.jar https://gitee.com/yongaishide/ChaosWorld/raw/main/pack.toml
   ```

4. 之后每次启动游戏自动检查更新（mod 从 CurseForge CDN 下载，配置/脚本从本仓库下载）

> 其他启动器（HMCL / PCL2 / CurseForge 官方版）请使用单独发布的整合包安装包（zip/mrpack），导入一次即可，更新需重新导入。

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
