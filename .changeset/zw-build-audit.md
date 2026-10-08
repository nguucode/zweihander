---
"zweihander": patch
---

Every component that uses hooks or Base UI now starts with `'use client'`, so it can be imported from a React Server Component tree without a wrapper. Table's sort buttons get a 44px hit area on touch screens; the header row keeps its height. Toast's enter offset now follows `--space-2` (8px at the default scaling). No API changes.
