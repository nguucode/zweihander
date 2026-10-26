---
"zweihander": minor
---

**Breaking for the Projects template (copy-source):** it becomes the index page (list report), and its markup changes. Saved Views replace its tabs (filters, columns and sort saved per view, with Modified, Save and Save as new view), a Filter Bar adds Status and Health chips, a Column Chooser and pages sit with the table, and a Table / Chart switch shows the estimation by status. Add project moves up beside the title. The `projects` prop is unchanged; copy `Projects.tsx`, `Projects.module.css`, `ProjectActivity.tsx` and `ProjectDetail.tsx` again. Table also exports `sortRows(rows, columns, sort)`, the order it sorts in, to sort every row before slicing out a page.
