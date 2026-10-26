---
"zweihander": patch
---

Date Picker and Date Range Picker take `readOnly`: the field is filled, stays focusable and copyable, submits its value, and shows the calendar icon without a button, so the calendar never opens. The Field docs now cover the read-only state across every field, with a reason in `helperText` instead of `disabled`.
