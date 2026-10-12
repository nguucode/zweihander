---
"zweihander": minor
---

Table: rows can expand. Pass `expandedContent={(row) => …}` and each row that returns content gets an expand button (after the checkbox column, named "Expand <row header>", with `aria-expanded` and `aria-controls`); the content opens under the row in one cell spanning every column. Rows that return `null`, `undefined` or `false` get no button. Expansion is uncontrolled with `defaultExpandedIds`, or controlled with `expandedIds` and `onExpandedChange`, like selection. Ids come from `getRowId`, so sorting keeps the right rows open. Opt-in: tables without `expandedContent` render as before.

Also: when the row header is not plain text, a row's checkbox falls back to "Select row N" counted from `rows`, so sorting no longer renames it.

Selected rows' dividers now take a tint of the selection colour. In light mode `--border` was as light as `--primary-subtle`, so the line between two selected rows disappeared.
