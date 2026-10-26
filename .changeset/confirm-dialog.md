---
"zweihander": patch
---

Add `ConfirmDialog` (`zweihander/confirm-dialog`): an alert dialog that asks before a destructive action, with a warning icon, the action as a question, its consequence, Cancel focused and a destructive button. `confirmText` adds type to confirm: the button stays disabled until the reader types that text exactly. The Settings template's Delete account now uses it and asks for the username.

Modal: a focused field in the body now shows its whole focus ring; the scrolling body used to clip it at the sides.
