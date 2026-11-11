---
"zweihander": minor
---

Foundations follow Atlassian's scale; token names are unchanged. Radius is now six steps cut from `--radius` (6px): `--radius-xs` 2, `-sm` 4, `-md` 6, `-lg` 8, `-xl` 12, `-2xl` 16, so controls and fields are 6px (were 8), small controls 4px (were 6) and panels 12px (were 14). Elevation has two levels, `--shadow-raised` and `--shadow-overlay`; `--shadow-2xs` to `--shadow-sm` now read raised and `--shadow-md` to `--shadow-2xl` read overlay. `--text-body-xs` is 12px (was 11px) and deprecated: use `--text-body-sm`. Headings are weight 600. New tokens: `--space-5`, `--space-16`, `--space-20`, `--border-width`, `--border-width-selected`. If you set `--radius` yourself, it now names the `md` step: 0.625rem before is 0.375rem now.
