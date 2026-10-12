---
'zweihander': patch
---

Docs: Breadcrumbs, Link, Pagination and Tabs pages in the three-tab format (Overview, Specs, Guidelines), with every prop described in the API table and the Playground.

Pagination: with `getHref`, a disabled Previous or Next link now keeps `role="link"`. Without its `href` it had no role, so its `aria-label` was not allowed and screen readers did not announce it as a link.
