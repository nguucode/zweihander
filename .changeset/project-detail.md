---
"zweihander": patch
---

Add the Project Detail template (`project-detail-template` in the registry): an object page with a breadcrumb, a header with status and actions, tabs, an App Shell aside with the summary and activity, and an Edit drawer. The Projects template's activity list moves to `ProjectActivity.tsx`, which both templates ship; copy it again if you reinstall Projects. Breadcrumbs: a long crumb with no spaces now wraps instead of overflowing.
