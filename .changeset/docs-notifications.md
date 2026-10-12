---
'zweihander': patch
---

`ToastProvider` takes a `container`: the element toasts render into, `document.body` by default. In an element with a `transform` they sit in its corner instead of the window's; in a size container (`container-type: inline-size`) they fit its width.

Alert, Inline Alert and Toast docs move to the Overview / Specs / Guidelines format, with every prop described in the API table and the Playground.
