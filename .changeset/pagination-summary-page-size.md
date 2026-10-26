---
"zweihander": patch
---

Pagination: `totalItems` shows a "21–40 of 340" summary (announced as a status) and can replace `totalPages`, which is now optional; `pageSizeOptions` adds a "Rows per page" select (`pageSize`, `defaultPageSize`, `onPageSizeChange`) that keeps the first row shown in view when the size changes. When `totalItems` is set it decides the page count and `totalPages` is ignored. Existing props are unchanged; the `<nav>` is now a wrapping flex row (the page list sits at its start as before).
