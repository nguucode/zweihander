---
"zweihander": patch
---

Carousel: pressing previous, next or a dot while the track is still scrolling no longer reports a stray slide to `onIndexChange` in Firefox. Firefox fires `scrollend` where the interrupted scroll stopped, and the carousel read that as a swipe; it now waits for the scroll it started to land. No API change.
