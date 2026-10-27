---
"zweihander": patch
---

Add Context Menu: a right click or long press on an area (a row, a card, an object) opens a Menu at the pointer, with the same `items` as Menu. The area is the one element you pass as `children`, its props merged, so a `<tr>` or `<li>` stays valid markup; it is outlined while its menu is open. Import from `zweihander/context-menu`, or install with `npx shadcn@latest add https://ontheshore.biz/zweihander/r/context-menu.json`.
