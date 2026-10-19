---
"zweihander": minor
---

Density: `Theme` takes `density="default" | "compact"`. Six spacing roles (`--space-stack`, `--space-inline`, `--space-cluster`, `--space-group`, `--space-container`, `--space-section`), `--row-height`, the control tier, the type scale and component sizes (`--choice-box`, `--radio-dot-size`, `--switch-{sm,md,lg}-{w,h}`, `--progress-{sm,md,lg}`, `--avatar-{xs,sm,md,lg}`, `--badge-{sm,md}`, `--badge-dot-{sm,md}`) each have a Default and a Compact value, and every component reads them. Compact keeps every size and tightens each: md controls 32 to 28px, body text 14 to 13px, table rows 48 to 36px.

Default renders as before except: the page edge in AppShell (64rem and up) and the gap between form sections go from 32 to 24px, Alert padding from 10 to 12px, and the block padding of menu items and select options from 6 to 4px (their 32px height is unchanged).

Select, Combobox, DatePicker and DateRangePicker take `container` for their popup, like Popover and Menu, so a scope with its own density can hold the popup. Storybook has a Density toolbar.
