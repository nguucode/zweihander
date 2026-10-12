---
"zweihander": minor
---

Size tiers: every control now takes its height, inline padding, icon-to-label gap, icon and corner from one tier (`xs` 20px, `sm` 24px, `md` 32px). New tokens: `--control-xs`, `--control-{xs,sm,md}-pad`, `-pad-spacious`, `-gap`, `-radius` and `-radius-field`. See Foundations/Sizing.

Radius steps (`--radius-sm` … `--radius-xl`, and the intents built on them) are now multiplied by `--scaling`, like padding, so corners shrink and grow with the rest of a scaled Theme. The `small` radius preset is 0.75 of the default (was 0.5).

Visual changes, no API changes:
- Small Button, ToggleButton and fields (TextInput, Search, Select, Combobox, NumberInput, DatePicker, Textarea): 6px between icon and label (was 8px); field icons are 14px (was 16px), the same as a small Button's.
- Small Select draws its value at the small text size (it inherited 14px).
- Tabs: small tabs take 8px padding, 14px icons and the small corner; pills chips are their track's corner minus the 2px inset.
- Pagination: chevrons follow the tier icon (16px, 14px small) and previous/next stay square; small controls take the small corner.
- Menu: items take 10px padding (was 8px) and a 4px corner nested in the popup (was 6px).
- Tag: `md` takes 14px icons (was 16px), a 6px gap (was 4px) and the small corner; `sm` takes the small corner.

If you override any of these sizes, override the tier token rather than the component.
