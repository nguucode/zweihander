---
"zweihander": patch
---

App Shell: add an `aside` slot (and `asideLabel`) for a third column right of the page, a summary, status or activity, in a `complementary` landmark. From 80rem of shell width it sits beside the page, as wide as the expanded sidebar, and each column scrolls on its own; under 80rem it follows the page. AppContent takes the same two props. Copy-source users: copy `AppShell.tsx`, `AppContent.tsx` and `AppContent.module.css` again.
