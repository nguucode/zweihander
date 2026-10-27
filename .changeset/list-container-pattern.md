---
"zweihander": patch
---

Add the List Container pattern (`list-container`): the frame around a list, with a line between rows, flat, in a card or as separate cards, plus a footer and an empty state. Stacked List now renders through it and gains `appearance` (`flat` by default, so existing lists look the same). Copy-source users of `stacked-list` re-add it, which also pulls in `list-container`.
