# 安装与自动更新

ChaosWorld 用 **packwiz** 做分发：整合包本体（模组、配置、脚本）放在 Git 仓库里，启动器读取仓库中的 `pack.toml` / `index.toml` 自动比对文件哈希，只下载缺失或版本不一致的部分。所以正常情况下你**装一次，之后只需要启动游戏**。

## 方式一：Prism / MultiMC 自动更新（推荐）

1. 先安装好整合包实例（使用作者发布的整合包安装包，或用 `ChaosWorld-AutoUpdate-Patch.zip`）。
2. 下载更新补丁 `ChaosWorld-AutoUpdate-Patch.zip`：
   - Gitee：`https://gitee.com/yongaishide/ChaosWorld/releases`
   - GitHub：`https://github.com/yongaishide/ChaosWorld/releases`
3. 解压到整合包实例文件夹内（与 `instance.cfg` 同级的目录），覆盖同名文件。
4. 重新启动游戏：启动前会自动检查并安装更新；已是最新版本则直接正常启动。

::: warning 注意
- 补丁**会重置实例的内存 / Java 参数**为默认值，覆盖后记得自己再调一次。
- 已安装的模组与最新版本一致时不会重复下载，但每次启动都会先校验一遍现有文件，属于正常现象。
:::

## 方式二：手动配置 packwiz-installer（高级玩家）

1. 从仓库下载 `packwiz-installer.jar`，放进实例的 `.minecraft` 目录。
2. 打开实例 → 设置 → 自定义命令 → 预启动命令：

```text
"$INST_JAVA" -jar packwiz-installer.jar https://gitee.com/yongaishide/ChaosWorld/raw/main/pack.toml
```

## 方式三：其他启动器

HMCL / PCL2 / CurseForge 官方版**不支持启动前自动更新**，请直接使用作者单独发布的整合包安装包，更新时重新导入新版本。

## 手动安装时需要注意的版本

| 组件 | 版本 |
| --- | --- |
| Minecraft | 1.21.1 |
| NeoForge | 21.1.248 |
| Java | 21 或更高（1.21.1 的 NeoForge 要求 Java 21+） |
| 内存 | 建议 6 GB 起步，装有光影 / 大量机器时 8–12 GB |

## 作者发布流程（给自己改包时参考）

1. 修改整合包（mod / 配置 / KubeJS 脚本）。
2. 运行 `build-updater.ps1`，重新生成 `index.toml` / `pack.toml`。
3. `git add` + `commit` + `push` 到 GitHub，然后 Gitee 仓库手动同步。
4. 玩家下次启动即自动更新。

规则说明（来自仓库 `PACKWIZ.md`）：

- mod 下载直链从 `minecraftinstance.json` 自动读取（CurseForge CDN）。
- 没有直链的自定义 mod（例如 `mods/chaosworld_core-*.jar`）必须提交进 git 仓库，玩家从仓库下载。
- 配置 / 脚本只更新「已提交进 git 仓库」的文件；被 `.gitignore` 忽略的文件玩家下载不到，脚本会跳过并提示。
- 运行脚本后务必先 commit + push + 同步 Gitee，再让玩家启动，否则哈希不匹配会更新失败。
- Gitee 的 raw 链接有几分钟缓存延迟，属正常现象。

::: tip 更新失败了怎么办
先确认作者的仓库确实已经推送（Gitee 同步可能滞后几分钟），再删掉实例里的 `packwiz-installer-bootstrap` 缓存目录重试。如果是哈希不匹配的报错，通常等几分钟再启动就好。
:::
