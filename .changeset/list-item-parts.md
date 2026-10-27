---
"zweihander": patch
---

Stacked List and Grid List now share their media, heading, link and actions code through an internal `ListItemParts.tsx` and `ListItemParts.module.css`, shipped with the `stacked-list` registry item. Their output and props do not change. If you copied either pattern, copy `StackedList.*`, `GridList.*` and the new `ListItemParts.*` again together (or re-run `shadcn add` for `stacked-list` and `grid-list`).
