---
"zweihander": patch
---

Calendar: today's day now has a dark figure on its orange disc instead of a white one. White on `--orange` was 3.4:1, below WCAG AA's 4.5:1; the dark figure, a new `--orange-contrast` token (neutral 900), clears 4.9:1 in light and dark mode. Date Picker and Date Range Picker inherit the fix. No API change.
