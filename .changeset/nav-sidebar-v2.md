---
"zweihander": minor
---

NavSidebar is laid out as in the Claude apps.

- **`brand`** (new prop): the logo, in a top row with the collapse button, as tall as the App Shell's top bar so the logo sits where it does in the top-bar layout. In an App Shell's sidebar layout the shell passes its own `brand` here.
- **`NavSidebarButton`** (new export): a row that looks like an item (icon, label, optional `description` and `end`), a button that can trigger a Menu or Popover. `appearance="field"` draws it as an input, for a search button. Use it in `header` (tenant switcher, search) and `footer` (account).
- **Categories**: a group takes `action` (e.g. an add button, shown on hover and focus), `isCollapsible` with `defaultCollapsed` / `isCollapsed` / `onCollapsedChange`, and `limit` ("Show more").
- **The rail** keeps the header and footer, as icons. Items without an icon are left out of it, instead of every item needing one.
- New icons: `notifications`, `help`, `sidebar-collapse`, `sidebar-expand`.

Breaking (copy-source users copy again `NavSidebar.tsx`, `NavSidebar.module.css`, `TopBar.tsx`, `AppShell.tsx`, `AppShell.module.css`, and `src/lib/icon.tsx`):

- `header` is its own block under the top row, no longer beside the collapse button. Pass the logo as `brand`.
- The footer has no rule above it.
- The collapse button shows the sidebar icons instead of chevrons.
- AppShell no longer draws the logo above a sidebar that is not a NavSidebar.
