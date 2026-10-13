---
---

Playground: the device window is on the Stage as soon as it renders, not one frame later when a ResizeObserver first reports the Stage's size. Fixes Playground story tests failing at random in WebKit. Site only; the package does not change.
