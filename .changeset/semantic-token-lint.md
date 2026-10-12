---
"zweihander": patch
---

New tokens: `--scrim` (the dimmed layer behind Modal and the AppShell drawer, black at 50% in both appearances) and `--neutral-solid` / `--neutral-solid-foreground` (gray 600 with a gray 50 label, used by Avatar's neutral solid variant; the token build measures the label at 4.5:1 or more on every gray ramp). No visual changes: the values are the ones those components already used. If you restyled the Modal backdrop or a neutral solid Avatar by overriding the old literals, override these tokens instead.

Stylelint now checks colour: `color`, `background`, `border-*-color`, `outline-color`, `fill`, `stroke` and the other colour properties take a token, not a literal, and a new `zweihander/semantic-tokens` rule rejects `var()` reads of primitives (`--gray-*`, `--accent-solid-*` and the rest of the Theme plumbing) and of custom properties nothing declares.
