---
'zweihander': minor
---

Components follow the Figma file. Every remaining component is beta.

Breaking:
- `ButtonGroup` is a single-select toggle group (`type: 'separate' | 'joined'`, `value`, `defaultValue`, `onValueChange`, ToggleButton children). `ToggleGroup` and `multiple` are removed.
- `Card`: `size` is `xs | sm` (default `sm`); `appearance="surface"` and `hasBorder` are removed; elevated has no visible edge. Theme's `canvas` and `contentStyle` are removed.
- `Tooltip`: `HoverCard` is removed. `Toast` variant `default` is `neutral`, and Toast follows the page theme.
- `ChartLegend` loses `orientation`; chart legends sit centred below the plot. PieChart is vertical, default `size` 160, legend shows the share. Sparkline defaults to 96 × 24.
- `PasswordInput` no longer takes `suffix`. Calendar has no year buttons. ColumnChooser's popup is a list of checkbox rows with a "Reset columns" row.

Added: ChartLegend `marker`, chart `legendValue: 'none'`, Sparkline `appearance="bar"`, ConfirmDialog `kind`, Search `helperText` and `required`.

Changed measurements: field padding 10px, 16px select chevrons, 4px popup offset, Table cells padded 8px with 1px rules, Menubar without a frame, Menu inset 4px, ghost buttons 11px, Spinner ring 2.25px, bar charts with rounded tops, and the other values in each component's Specs tab.
