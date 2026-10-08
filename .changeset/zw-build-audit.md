---
"zweihander": patch
---

Every component that uses hooks or Base UI now starts with `'use client'`, so it can be imported from a React Server Component tree without a wrapper. Table's sort buttons get a 44px hit area on touch screens; the header row keeps its height. Toast's enter offset now follows `--space-2` (8px at the default scaling). No API changes.

Cross-browser fixes found by running the story tests in Firefox and WebKit: Select's small trigger is 24px in Safari again (WebKit's default button padding made it 27px); Carousel reports the index once a smooth scroll ends in Firefox instead of a slide it passed on the way; ColorPicker's area no longer throws when the browser refuses pointer capture.
