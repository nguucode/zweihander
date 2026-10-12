---
"zweihander": patch
---

`tokens.css` now sets `color-scheme`: `light` on `:root` and `.light`, `dark` on `.dark`. Native UI the browser draws itself (scrollbars, date and select popups, autofill, the page canvas) now follows the appearance, so a dark page or `<Theme appearance="dark">` no longer shows light scrollbars or a white date picker. No API change. If your app sets `color-scheme` on `:root` itself, declare it after `tokens.css` or on a more specific selector to keep yours.
