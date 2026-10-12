---
"zweihander": minor
---

Table: rows can expand. Pass `expandedContent={(row) => …}` and each row that returns content gets an expand button (after the checkbox column, named "Expand <row header>", with `aria-expanded` and `aria-controls`); the content opens under the row in one cell spanning every column. Rows that return `null`, `undefined` or `false` get no button. Expansion is uncontrolled with `defaultExpandedIds`, or controlled with `expandedIds` and `onExpandedChange`, like selection. Ids come from `getRowId`, so sorting keeps the right rows open. Opt-in: tables without `expandedContent` render as before.
