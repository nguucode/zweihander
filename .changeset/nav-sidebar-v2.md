---
"zweihander": minor
---

NavSidebar is laid out as in the Claude apps, and icons are drawn at weight 600.

- **`brand`** (new prop): the logo, in a top row with the collapse button, as tall as the App Shell's top bar so the logo sits where it does in the top-bar layout. In an App Shell's sidebar layout the shell passes its own `brand` here.
- **`NavSidebarButton`** (new export): a row that looks like an item, a button that can trigger a Menu or Popover. `appearance`: `ghost` (notifications with a `badge`, help, the account), `switcher` (a tenant switcher: medium weight, chevron right after the name, square avatar) or `field` (a search button drawn as an input). An Avatar in it is 20px in every density.
- **Categories**: a group takes `isCollapsible` with `defaultCollapsed` / `isCollapsed` / `onCollapsedChange`, `limit` ("Show more"), and an opt-in `action` (e.g. an add button, shown on hover and focus).
- **The rail** keeps the header and footer, as icons; items without an icon are left out of it. Resting the mouse on it previews the full sidebar over the page; "Keep sidebar open" docks it.
- **Look**: every leading visual is centred on the nav icons' line; items are 2px apart; a badge is red and follows its label; the scrollbar is a thin thumb against the sidebar's edge; the footer has no rule above it.
- **App Shell surfaces**: a `solid` sidebar marks the current item with `--primary-subtle`. A `transparent` sidebar on a canvas of your own reads the new Theme tokens `canvas-hover`, `canvas-selected`, `canvas-field`, `canvas-field-border`, `canvas-badge` and `canvas-badge-foreground`.
- **Icons**: every icon in `src/lib/icon.tsx` is Material Symbols Rounded at weight 600 (was 400); names are unchanged. New icons: `notifications`, `help`, `sidebar-collapse`, `sidebar-expand`.
- **Token**: `--space-0-5` (0.125rem).

Breaking (copy-source users copy again `NavSidebar.tsx`, `NavSidebar.module.css`, `TopBar.tsx`, `AppShell.tsx`, `AppShell.module.css`, and `src/lib/icon.tsx`):

- `header` is its own block under the top row, no longer beside the collapse button. Pass the logo as `brand`.
- The NavSidebar's `<nav>` is wrapped in a `<div>` (display: contents while expanded) that holds the rail's width for the preview.
- The footer is a column of rows with no rule above it.
- AppShell no longer draws the logo above a sidebar that is not a NavSidebar.
- Icon strokes are heavier everywhere.
