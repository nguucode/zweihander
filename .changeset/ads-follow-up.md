---
"zweihander": minor
---

The remaining sizes follow Atlassian. Avatar: `xs` 16px, `sm` 24, `md` 32 (the default, was 40), `lg` 40, and new `xl` 96 and `2xl` 128; each name is one step smaller than before, so move an explicit `size` up one step to keep its pixels (`xs` → `sm`, `sm` → default, `md` → `lg`); 48px is gone. Table has one size and no dividers between rows (the header keeps its 2px rule, the total row gets one above it); its `size` prop is deprecated along with `density`. Pagination has one size (32px); its `size` prop is deprecated. `--sidebar-width` is 320px (was 256); AppContent's aside and the Settings nav column keep 256px. Fixes: a Tag no longer makes its line 1px taller (a Table row holding one is 28px), and InlineEdit at `size="sm"` fits a 28px Table row while reading and makes the row 40px while editing.
