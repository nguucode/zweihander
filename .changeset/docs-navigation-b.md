---
"zweihander": minor
---

Docs: Menu, Sidebar and Stepper pages in the three-tab format (Overview, Specs, Guidelines). Menu gains `isModal` (default `true`) and `container`, passed to Base UI: `isModal={false}` leaves the page scrollable and clickable while the menu is open, and `container` renders the popup somewhere other than `<body>`, such as an element in fullscreen.
