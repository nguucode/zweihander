---
"zweihander": minor
---

AppShell becomes a frame that only places its pieces, on a canvas set by the Theme.

- **Theme** takes `canvas` (`plain`, `neutral` default, `tinted`) and `contentStyle` (`flat` default, `card`). A custom canvas colour or gradient goes through `tokens={{ canvas, 'canvas-foreground', 'canvas-muted-foreground' }}`; its contrast is yours to check.
- **AppShell** takes `layout` (`sidebar` default, `top-bar`), `topBarSurface` and `sidebarSurface` (`solid` or `transparent`), and a `brand` slot for the logo, which it places in the same spot in both layouts.
- **Card** takes `appearance="surface"`: raised under `contentStyle="card"`, a section ruled off at the top under `flat`.
- New token `--sidebar-width` (16rem, 14rem in Compact); Sidebar reads it.

Breaking for AppShell (copy-source: copy `AppShell.tsx` and `AppShell.module.css` again, plus `Sidebar.module.css`):

- In the default `sidebar` layout there is no top bar on wide screens; the `header` only shows while the sidebar is in the drawer. Keep a top bar with `layout="top-bar"`, or move search and the account into the Sidebar's `header` and `footer`.
- The page is now one card surface inset 8px from the shell's edges (`contentStyle="flat"`), the sidebar sits on the canvas with no fill (`sidebarSurface="transparent"`), and the top bar is `--control-md` plus two `--space-cluster` tall (56px) instead of 64px.
- Pass the logo as `brand` rather than inside the Sidebar's `header` or the AppHeader's `start`.
