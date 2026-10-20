---
"zweihander": minor
---

App Shell is a template, and its three pieces are patterns.

- **AppShell** moves to the templates (`src/components/templates/application-ui/AppShell.tsx`, registry `app-shell`, now listed as a template). Its props are unchanged.
- **TopBar** (new pattern, registry `top-bar`) replaces `AppHeader`; **TopBarNav** replaces `AppNav`. Same props.
- **NavSidebar** (pattern, registry `nav-sidebar`) replaces the **Sidebar** component, with the same props (`SidebarItem`, `SidebarGroup`, `SidebarEntry`, `SidebarProps` become `NavSidebar…`).
- **AppContent** (new pattern, registry `app-content`) is the page region the shell puts around its children.

Breaking:

- `zweihander/sidebar` is removed from the npm package, and the `sidebar` registry item is gone. Install `nav-sidebar` from the registry and import `NavSidebar`.
- Copy-source users: copy `AppShell.tsx` and `AppShell.module.css` from their new place, and add `TopBar`, `AppContent` and `NavSidebar` (`.tsx` and `.module.css` each). Rename `AppHeader` to `TopBar`, `AppNav` to `TopBarNav`, `Sidebar` to `NavSidebar`.
