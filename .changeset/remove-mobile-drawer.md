---
"zweihander": minor
---

AppShell has no mobile drawer any more: the sidebar stays beside the page at every width, and below 64rem it is the NavSidebar's icon rail.

Breaking (copy-source: copy `AppShell.tsx`, `AppShell.module.css`, `TopBar.tsx`, `TopBar.module.css`, `NavSidebar.tsx`, `DataTablePage.module.css`, `Projects.tsx` and `Projects.module.css` again):

- AppShell drops `mobileNavigation` and `navigationLabel`. There is no menu button, drawer or scrim.
- Inside an AppShell under 64rem, NavSidebar is always the rail and hides its collapse button. In the `sidebar` layout the top bar still shows there; pass search and the account in `header` too, since the rail hides the NavSidebar's header and footer.
- TopBarNav links no longer hide below 48rem: they stay in the bar and scroll sideways when they do not fit.
- `ShellContext` loses `hasDrawer`, `drawerHolds`, `isOpen`, `open` and `label`, and gains `isNarrow`. TopBar's header loses `data-drawer`.

Also: the DataTablePage toolbar group can shrink below its 20rem search field instead of widening a narrow page.
