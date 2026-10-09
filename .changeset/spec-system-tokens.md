---
"zweihander": patch
---

New tokens for the values components used to type by hand: `--duration-fast`/`-base`/`-slow` for transitions, `--duration-spin` and `--duration-spin-reduced` for spinners, `--focus-width`, `--focus-offset` and `--focus-offset-inset` for the focus ring, `--layer-sticky`/`-overlay`/`-tooltip`/`-toast` for stacking, `--icon-xs`/`-sm`/`-md`, `--target-coarse` (44px) and `--radius-pill`. Under `prefers-reduced-motion: reduce` the three transition durations resolve to `0ms`, so every transition in the kit stops in one place. If you override any of these values, override the token.

Small visual changes: Button's and the field's loading spinner turn at 800ms like every other spinner (was 700ms); Popover opens at 100ms like Menu and Tooltip (was 120ms); the focus ring on close buttons (Alert, Toast, Modal, Popover), Tag's remove button and NumberInput's steppers is drawn inside the button instead of 1px outside. No API changes.
