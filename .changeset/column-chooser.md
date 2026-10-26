---
"zweihander": patch
---

Add `ColumnChooser` (`zweihander/column-chooser`): a "Columns" button that opens a popover listing a table's columns, each with a checkbox to show or hide it, and a Reset to the default set. It reports the shown keys; filter your Table's `columns` with them. Table gains `isResizable`, `columnWidths` and `onColumnWidthsChange`: a handle on each header's end edge (a focusable `role="separator"`) resizes the column by drag or arrow keys. Resizable tables use `table-layout: fixed`; tables without `isResizable` are unchanged.
