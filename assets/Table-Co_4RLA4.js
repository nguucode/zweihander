import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./Table.stories-6hqnGyK9.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{of:m}),`
`,(0,v.jsx)(t.h1,{id:`table`,children:`Table`}),`
`,(0,v.jsxs)(t.p,{children:[`Rows of records with the same fields, to scan and compare: projects,
invoices, members. Columns can sort, rows can be selected. Spec:
`,(0,v.jsx)(t.a,{href:`https://www.uiguideline.com/components/table`,rel:`nofollow`,children:`uiguideline.com/components/table`}),`.
A native `,(0,v.jsx)(t.code,{children:`<table>`}),`; selection uses the kit's Checkbox.`]}),`
`,(0,v.jsx)(o,{of:c}),`
`,(0,v.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Part`}),(0,v.jsx)(t.th,{children:`What it is`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Caption`})}),(0,v.jsxs)(t.td,{children:[`Names the table. Visually hidden unless `,(0,v.jsx)(t.code,{children:`showCaption`}),`.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Header row`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`--surface-subtle`}),`, small muted labels. Sortable headers are buttons with a sort icon.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Row`})}),(0,v.jsxs)(t.td,{children:[`48px (40px at `,(0,v.jsx)(t.code,{children:`sm`}),`), divided by `,(0,v.jsx)(t.code,{children:`--border`}),`.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Row header`})}),(0,v.jsxs)(t.td,{children:[`The column marked `,(0,v.jsx)(t.code,{children:`isRowHeader`}),`, medium weight: the name a row is known by.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Selection column`})}),(0,v.jsx)(t.td,{children:`Optional checkboxes; the header one selects all and shows "mixed".`})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Prop`}),(0,v.jsx)(t.th,{children:`Values`}),(0,v.jsx)(t.th,{children:`Default`}),(0,v.jsx)(t.th,{})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`columns`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`TableColumn[]`})}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsxs)(t.td,{children:[`Required. `,(0,v.jsx)(t.code,{children:`{ key, header, cell?, sortable?, sortValue?, align?, width?, isRowHeader? }`})]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`rows`})}),(0,v.jsx)(t.td,{children:`array`}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsx)(t.td,{children:`Required.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`caption`})}),(0,v.jsx)(t.td,{children:`node`}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsx)(t.td,{children:`Required.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`showCaption`})}),(0,v.jsx)(t.td,{children:`boolean`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`getRowId`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`(row, index) => string`})}),(0,v.jsx)(t.td,{children:`index`}),(0,v.jsx)(t.td,{children:`Needed for selection that survives re-sorting and paging.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`sort`}),`, `,(0,v.jsx)(t.code,{children:`defaultSort`}),`, `,(0,v.jsx)(t.code,{children:`onSortChange`})]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`{ key, direction } | null`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`null`})}),(0,v.jsx)(t.td,{children:`Controlled sort leaves the sorting to you.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`isSelectable`})}),(0,v.jsx)(t.td,{children:`boolean`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`selectedIds`}),`, `,(0,v.jsx)(t.code,{children:`defaultSelectedIds`}),`, `,(0,v.jsx)(t.code,{children:`onSelectionChange`})]}),(0,v.jsx)(t.td,{children:`string[]`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`[]`})}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`density`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`sm`}),`, `,(0,v.jsx)(t.code,{children:`md`})]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`md`})}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`hasStickyHeader`})}),(0,v.jsx)(t.td,{children:`boolean`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})}),(0,v.jsx)(t.td,{children:`Header stays in view while the container scrolls.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`emptyState`})}),(0,v.jsx)(t.td,{children:`node`}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsx)(t.td,{children:`Shown when there are no rows.`})]})]})]}),`
`,(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Numbers align to the end, in tabular figures,`}),` so digits line up
column-wide. Set `,(0,v.jsx)(t.code,{children:`align: 'end'`}),` on every numeric or date column.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Sort cycles ascending, descending, off.`}),` The third click returns to
the original order, which is often the one that meant something.
Uncontrolled, the table sorts a copy: dates as dates, numbers as
numbers, text by locale with "file 2" before "file 10".`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Paging is not built in.`}),` Put a Pagination under the table and pass
it one page of `,(0,v.jsx)(t.code,{children:`rows`}),`; with `,(0,v.jsx)(t.code,{children:`getRowId`}),`, selection keeps working across
pages.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,v.jsx)(o,{of:p}),`
`,(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(o,{of:f}),`
`,(0,v.jsxs)(t.p,{children:[`With server-side sorting, pass `,(0,v.jsx)(t.code,{children:`sort`}),` and `,(0,v.jsx)(t.code,{children:`onSortChange`}),` and hand back
the rows already sorted:`]}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`A real `,(0,v.jsx)(t.code,{children:`<table>`}),` with a `,(0,v.jsx)(t.code,{children:`<caption>`}),`, `,(0,v.jsx)(t.code,{children:`<th scope="col">`}),` headers and a
`,(0,v.jsx)(t.code,{children:`<th scope="row">`}),` for the row header column: screen readers announce
the column and row for every cell.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Sortable headers carry `,(0,v.jsx)(t.code,{children:`aria-sort`}),` (`,(0,v.jsx)(t.code,{children:`ascending`}),`, `,(0,v.jsx)(t.code,{children:`descending`}),` or
`,(0,v.jsx)(t.code,{children:`none`}),`); the sort control is a button inside the header.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Row checkboxes are named after the row header ("Select Atlas"); the
header checkbox is "Select all rows" and reports `,(0,v.jsx)(t.code,{children:`mixed`}),` when some are
selected.`]}),`
`,(0,v.jsx)(t.li,{children:`The table scrolls sideways inside its container on narrow screens
instead of squeezing columns.`}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),i(),l()})))()}y();export{_ as default};