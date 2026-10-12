---
"zweihander": minor
---

Breaking: the semantic token `--surface-subtle` is renamed `--surface-filled`. Same values (gray-50 in light, gray-800 in dark), same contrast guarantee for `--muted-foreground` on it. Find and replace `--surface-subtle` with `--surface-filled` in your CSS; the old name is no longer emitted in `tokens.css`.
