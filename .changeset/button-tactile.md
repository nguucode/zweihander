---
"zweihander": patch
---

Contained Button (and a pressed contained ToggleButton) is now lit from above: a lighter top, an edge highlight, a darker bottom edge, a hairline border and a `--shadow-xs` drop shadow. Hover adds a 1px ring standing off the button where the focus ring sits; pressed looks pushed in. Inside a ButtonGroup the hover ring is left out. No API, size or colour token changed, so no code changes are needed. Outlined and ghost are unchanged.
