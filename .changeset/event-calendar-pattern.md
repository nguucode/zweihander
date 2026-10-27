---
"zweihander": patch
---

Add the Event Calendar pattern (`calendar-events`, registry only): events on a month, week, day or year view, with Previous, Next and Today, a view switch and an `actions` slot. Overlapping events sit side by side, all-day and multi-day events get their own row, a busy day says "n more", and `hasEventList` lists the selected day's events under the month (a narrow month shows dots). It reuses Calendar's date helpers and Calendar itself for the year view; Calendar's API does not change. Install with `npx shadcn@latest add https://ontheshore.biz/zweihander/r/calendar-events.json`.
