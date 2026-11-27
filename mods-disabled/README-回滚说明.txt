
===== 2026-11-27 第三次回滚 =====
JEI 19.76.1.482 同时不兼容两个 mod：
- Data Energistics 3.4.0：5 参数 RecipeTransferService.transferRecipe(...) 被删除，@WrapMethod 找不到目标；
- Productive Bees Genesis 1.2.7：IngredientFilter.searchIndexDirty 字段不存在，@Shadow 失败。
已回滚：JEI 19.70.0.469（SHA1 363F10CE1D8918381A125CC1E8D800CAF1BCB40E）、PBG 1.2.6（SHA1 411B68A47D01876971EC098BF4CF584C2F9536D1）。
恢复方法：删除 mods 里的 19.70.0.469 与 1.2.6，把本目录的 19.76.1.482 与 1.2.7 移回 mods。
注意：Data Energistics/PBG 适配前不要升级 JEI；PBG 不要升到 1.2.7。

[2026-11-27 16:13 更新]
CurseForge 在 15:59:03 自动把 JEI 从 19.70.0.469 升级到了 19.76.1.482（之后磁盘上又出现 19.76.1.481），导致 15:56 的回滚失效。
现已重新放回：
  mods\jei-1.21.1-neoforge-19.70.0.469.jar  (4,784,333 B, SHA1 363F10CE1D8918381A125CC1E8D800CAF1BCB40E)
  mods\productivebeesgenesis-1.2.6.jar     (5,789,711 B, SHA1 411B68A47D01876971EC098BF4CF584C2F9536D1)
mods-disabled 里的 jei-19.76.1.481 / 19.76.1.482 与 productivebeesgenesis-1.2.7 只是备份。
务必在 CurseForge 中把 JEI 固定到 19.70.0.469、PBG 固定到 1.2.6（或关闭自动更新），否则启动时会被再次覆盖。