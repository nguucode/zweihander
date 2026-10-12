---
"zweihander": minor
---

Body type: `--text-body-sm` is 12px on a 16px line (was 13 / 16) and `--text-body-xs` is 11px on a 16px line (was 10 / 14). Every body line height is now a multiple of 4px at 100% scaling. Token names are unchanged, so no code change is needed, but every small control label (Button, fields, Tabs, Tag and the other `sm` sizes), Menu shortcuts, Tooltip, captions and Badge counts render one pixel smaller or larger. If you relied on the old sizes, override the two tokens.
