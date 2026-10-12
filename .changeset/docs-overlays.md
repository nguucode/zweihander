---
"zweihander": patch
---

Docs: Modal, Popover and Tooltip pages in the three-tab format (Overview, Specs, Guidelines).

Modal, Popover and Tooltip take a `container` prop: the element they render into instead of `<body>`, for example an element in fullscreen. Modal also takes `isModal` (default `true`): `false` drops the focus trap, the scroll lock and the hidden page (the backdrop still covers it), for pictures of a modal; an alert is always modal. No other API change.
