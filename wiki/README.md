# ChaosWorld 指南（VitePress 站点）

ChaosWorld 整合包的中文指南，使用 [VitePress](https://vitepress.dev/) 构建的静态站点。

## 目录结构

```
wiki/
├─ .vitepress/
│  ├─ config.mts          # 站点配置（导航、侧边栏、搜索、页脚）
│  └─ theme/
│     ├─ index.ts         # 主题入口
│     └─ custom.css       # 配色与样式
├─ public/
│  └─ logo.svg
├─ index.md               # 首页（hero + 特性）
├─ start/                 # 开始：简介、安装与更新、第一次进入游戏
├─ gameplay/              # 玩法：发展路线、核心系统
├─ mods/                  # 模组：总览分类、完整清单（自动生成）
├─ kubejs/                # 魔改：KubeJS 改动说明
└─ reference/             # 参考：常见问题、版本记录
```

## 本地开发

```bash
pnpm install          # 首次
pnpm run docs:dev     # 开发服务器，默认 http://localhost:5173
pnpm run docs:build   # 构建到 .vitepress/dist
pnpm run docs:preview # 预览构建结果
```

> 没有 pnpm 也可以用 `npm install` / `npm run docs:dev`。

## 重新生成「完整模组清单」

`mods/list.md` 由脚本从整合包实例的 `mods/` 目录生成。整合包增减模组后，在整合包根目录执行：

```powershell
pwsh -File wiki/scripts/gen-mod-list.ps1
# 或指定实例路径
pwsh -File wiki/scripts/gen-mod-list.ps1 -InstancePath "D:\我的世界\.minecraft\versions\Chaos_world"
```

## 部署

构建产物是纯静态文件，扔到任何静态托管都能跑：

| 平台 | 说明 |
| --- | --- |
| Cloudflare Pages | 构建命令 `pnpm run docs:build`，输出目录 `wiki/.vitepress/dist` |
| GitHub Pages | 若部署在 `https://<user>.github.io/ChaosWorld/`，需要把 `config.mts` 里的 `base` 改成 `'/ChaosWorld/'` |
| Gitee Pages / 任意服务器 | 把 `dist/` 目录内容直接上传即可 |

::: tip 和 packwiz 仓库的关系
本目录位于整合包实例目录内。如果不想让它进入 packwiz 更新索引，把它加入实例仓库的 `.gitignore`，或把 `wiki/` 移到实例目录之外单独建仓库。
:::

## 内容维护建议

- 模组、任务线、KubeJS 脚本改动后，同步更新：
  - `start/index.md`（版本表）
  - `gameplay/progression.md`（章节表与任务数）
  - `mods/index.md`、`mods/list.md`
  - `kubejs/index.md`
  - `reference/changelog.md`（追加版本段落）
- 所有事实性内容都应能对应到整合包里的某个文件（`pack.toml`、`config/ftbquests/quests/`、`mods/`、`kubejs/`），避免凭记忆写。
