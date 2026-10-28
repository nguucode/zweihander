import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{C as S,S as C,_ as w,a as T,b as E,c as D,d as O,f as k,g as A,h as j,i as M,l as N,m as P,n as F,o as I,p as L,r as R,s as z,t as B,u as V,v as H,w as U,x as W,y as G}from"./Table.stories-rwvWwWQJ.js";function K(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(i,{of:W}),`
`,(0,J.jsx)(t.h1,{id:`table`,children:`Table`}),`
`,(0,J.jsxs)(u,{children:[(0,J.jsxs)(_,{value:`overview`,children:[(0,J.jsx)(t.p,{children:`Rows of records with the same fields, to scan and compare: projects,
invoices, members. Columns can sort, rows can be selected, expanded and
acted on, and a total row can sum them up.`}),(0,J.jsx)(x,{of:W}),(0,J.jsx)(s,{of:j}),(0,J.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,J.jsx)(t.p,{children:`Any table takes any of these together: a selectable table can also expand
its rows and keep its header in view.`}),(0,J.jsxs)(t.table,{children:[(0,J.jsx)(t.thead,{children:(0,J.jsxs)(t.tr,{children:[(0,J.jsx)(t.th,{children:`Variant`}),(0,J.jsx)(t.th,{children:`Use for`})]})}),(0,J.jsxs)(t.tbody,{children:[(0,J.jsxs)(t.tr,{children:[(0,J.jsx)(t.td,{children:(0,J.jsx)(t.code,{children:`density="md"`})}),(0,J.jsx)(t.td,{children:`The default, 48px rows: most tables, and rows that hold a Tag or a button.`})]}),(0,J.jsxs)(t.tr,{children:[(0,J.jsx)(t.td,{children:(0,J.jsx)(t.code,{children:`density="sm"`})}),(0,J.jsx)(t.td,{children:`40px rows, for long lists of plain text where seeing more rows at once matters.`})]}),(0,J.jsxs)(t.tr,{children:[(0,J.jsx)(t.td,{children:(0,J.jsx)(t.code,{children:`isSelectable`})}),(0,J.jsx)(t.td,{children:`Acting on several rows at once: archive, export, assign.`})]}),(0,J.jsxs)(t.tr,{children:[(0,J.jsx)(t.td,{children:(0,J.jsx)(t.code,{children:`expandedContent`})}),(0,J.jsx)(t.td,{children:`Details that belong to one row but do not fit in a column: a description, a timeline, line items.`})]}),(0,J.jsxs)(t.tr,{children:[(0,J.jsx)(t.td,{children:(0,J.jsx)(t.code,{children:`hasStickyHeader`})}),(0,J.jsx)(t.td,{children:`Long tables that scroll inside a fixed height, so the column names stay in view.`})]}),(0,J.jsxs)(t.tr,{children:[(0,J.jsx)(t.td,{children:(0,J.jsx)(t.code,{children:`rowActions`})}),(0,J.jsx)(t.td,{children:`Actions on one record (edit, duplicate, archive) that do not earn a column: a menu at the row's end.`})]}),(0,J.jsxs)(t.tr,{children:[(0,J.jsxs)(t.td,{children:[(0,J.jsx)(t.code,{children:`footer`}),` on a column`]}),(0,J.jsx)(t.td,{children:`A total row under the rows: sums, counts, averages.`})]}),(0,J.jsxs)(t.tr,{children:[(0,J.jsx)(t.td,{children:(0,J.jsx)(t.code,{children:`isResizable`})}),(0,J.jsx)(t.td,{children:`Tables whose columns hold text of unknown length (names, notes, emails), so people can widen what they read.`})]}),(0,J.jsxs)(t.tr,{children:[(0,J.jsx)(t.td,{children:(0,J.jsx)(t.code,{children:`emptyState`})}),(0,J.jsx)(t.td,{children:`Saying why there are no rows, and what to do: clear a search, add the first one.`})]})]})]}),(0,J.jsx)(s,{of:T}),(0,J.jsx)(s,{of:F}),(0,J.jsx)(t.p,{children:`Rows with details open under themselves. Expansion is independent of
selection and survives sorting:`}),(0,J.jsx)(s,{of:V}),(0,J.jsx)(t.p,{children:`A menu at the end of each row. A row with nothing to do gets no button:`}),(0,J.jsx)(s,{of:L}),(0,J.jsxs)(t.p,{children:[(0,J.jsx)(t.code,{children:`hasRowContextMenu`}),` also opens a row's `,(0,J.jsx)(t.code,{children:`rowActions`}),` at the pointer on
right click or long press, through `,(0,J.jsx)(t.a,{href:`?path=/docs/components-navigation-context-menu--docs`,children:`Context
Menu`}),`, as Stacked
List and Grid List do. It is off by default: the row then loses the
browser's own menu, so people can no longer copy a cell's text or open a
link in a cell in a new tab from it. Turn it on for tables people work
through record by record, not ones they read or copy from. A row with no
items, and an expanded row's details, keep the browser's menu.`]}),(0,J.jsx)(s,{of:P}),(0,J.jsxs)(t.p,{children:[`A total row under the rows, which sorting leaves at the bottom. The table
does not add anything up: you pass each column's `,(0,J.jsx)(t.code,{children:`footer`}),`, so you decide
whether it totals this page or every row.`]}),(0,J.jsx)(s,{of:C}),(0,J.jsxs)(t.p,{children:[`A handle on each header's end edge resizes its column, by dragging or by
the arrow keys. The table is then laid out by its header widths: give the
columns a starting `,(0,J.jsx)(t.code,{children:`width`}),`, and keep `,(0,J.jsx)(t.code,{children:`columnWidths`}),` if they should last.
Pair it with a `,(0,J.jsx)(t.a,{href:`?path=/docs/components-data-display-column-chooser--docs`,children:`Column Chooser`}),`
to hide columns as well.`]}),(0,J.jsx)(s,{of:k}),(0,J.jsx)(s,{of:E}),(0,J.jsx)(s,{of:D}),(0,J.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,J.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,J.jsx)(t.pre,{children:(0,J.jsx)(t.code,{className:`language-js`,children:`import { Table, type TableColumn } from 'zweihander/table'
`})}),(0,J.jsx)(t.pre,{children:(0,J.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/table.json
`})}),(0,J.jsxs)(t.ul,{children:[`
`,(0,J.jsxs)(t.li,{children:[`Source: `,(0,J.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/data-display/Table.tsx`,rel:`nofollow`,children:`src/components/data-display/Table.tsx`})]}),`
`,(0,J.jsxs)(t.li,{children:[`Spec: `,(0,J.jsx)(t.a,{href:`https://www.uiguideline.com/components/table`,rel:`nofollow`,children:`uiguideline.com/components/table`})]}),`
`,(0,J.jsxs)(t.li,{children:[`Behaviour: a native `,(0,J.jsx)(t.code,{children:`<table>`}),`; selection uses the kit's `,(0,J.jsx)(t.a,{href:`?path=/docs/components-controls-checkbox--docs`,children:`Checkbox`}),`, expansion its `,(0,J.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Button`}),`, row actions its `,(0,J.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`})]}),`
`,(0,J.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,J.jsxs)(_,{value:`specs`,children:[(0,J.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,J.jsx)(y,{parts:S,children:(0,J.jsx)(a,{of:B})}),(0,J.jsxs)(t.p,{children:[`The table sits in a container that scrolls sideways on a narrow screen
rather than squeezing the columns. The selection column comes first, then
the expand column; the actions column comes last. A row whose
`,(0,J.jsx)(t.code,{children:`expandedContent`}),` or `,(0,J.jsx)(t.code,{children:`rowActions`}),` returns nothing leaves that cell empty.
The total row is a `,(0,J.jsx)(t.code,{children:`<tfoot>`}),`, so it stays at the bottom whatever the sort.`]}),(0,J.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,J.jsx)(t.p,{children:`Each density is a row height. Everything else is the same in both.`}),(0,J.jsx)(g,{caption:`md`,rows:[{part:`Row`,property:`Height`,token:`--row-height`},{part:`Header row`,property:`Height`,token:`--row-height`}]}),(0,J.jsx)(g,{caption:`sm`,rows:[{part:`Row`,property:`Height, minus --space-inline`,token:`--row-height`},{part:`Header row`,property:`Height, minus --space-inline`,token:`--row-height`}]}),(0,J.jsx)(g,{caption:`Every density`,rows:[{part:`Cell`,property:`Inline padding`,token:`--space-group`},{part:`Cell`,property:`Font size`,token:`--text-body`},{part:`Cell`,property:`Line height`,token:`--leading-body`},{part:`Header cell`,property:`Font size`,token:`--text-body-sm`},{part:`Header cell`,property:`Line height`,token:`--leading-body-sm`},{part:`Sort button`,property:`Block padding`,token:`--control-xs-gap`},{part:`Sort button`,property:`Inline padding`,token:`--control-sm-pad`},{part:`Sort button`,property:`Gap`,token:`--space-1`},{part:`Sort button`,property:`Corner radius`,token:`--radius-sm`},{part:`Sort icon`,property:`Size`,token:`--icon-md`},{part:`Selection and expand columns`,property:`Width`,token:`--space-10`},{part:`Expand column`,property:`Inline start padding`,token:`--space-inline`},{part:`Expand icon`,property:`Size`,token:`--icon-md`},{part:`Actions column`,property:`Width`,token:`--space-10`},{part:`Actions column`,property:`Inline end padding`,token:`--space-inline`},{part:`Expanded row`,property:`Block start padding`,token:`--space-2`},{part:`Expanded row`,property:`Inline and block end padding`,token:`--space-4`},{part:`Caption`,property:`Block padding`,token:`--space-3`},{part:`Caption`,property:`Inline padding`,token:`--space-4`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset, inside the button`,token:`--focus-offset-inset`},{part:`Sort button`,property:`Hit area on touch screens`,token:`--target-coarse`}]}),(0,J.jsx)(g,{caption:`Resize handle (isResizable)`,rows:[{part:`Handle`,property:`Width`,token:`--box-2xs`},{part:`Handle line`,property:`Inset from the header edges`,token:`--space-2`},{part:`Handle line, hover and drag`,property:`Width`,token:`--focus-width`},{part:`Handle`,property:`Hit area on touch screens`,token:`--target-coarse`}]}),(0,J.jsx)(t.p,{children:`The handle line is 1px at rest, like the row dividers; no token covers
a hairline. Its strip is 16px wide (44px on touch screens), at the
header's end, over the header's own padding. A column is 48px to 1200px wide; the arrow
keys move it 16px at a time.`}),(0,J.jsx)(t.p,{children:`Rows are divided by a 1px rule; the last row has none. The sort button
pulls itself out by its own inline padding, so its label lines up with the
cells below. Figures are tabular, so numbers line up column-wide.`}),(0,J.jsx)(t.h2,{id:`color`,children:`Color`}),(0,J.jsx)(t.p,{children:`Switch the theme and the accent in the toolbar: the values follow.`}),(0,J.jsx)(g,{caption:`Header`,rows:[{part:`Header row`,property:`Background`,token:`--surface-filled`},{part:`Header label`,property:`Colour`,token:`--muted-foreground`},{part:`Sort icon, sorted column`,property:`Colour`,token:`--foreground`}]}),(0,J.jsx)(g,{caption:`Row`,rows:[{part:`Container`,property:`Background`,token:`--card`},{part:`Cell`,property:`Colour`,token:`--card-foreground`},{part:`Divider`,property:`Colour`,token:`--border`},{part:`Total row`,property:`Rule above it`,token:`--border`}]}),(0,J.jsx)(g,{caption:`Hover`,rows:[{part:`Row`,property:`Background`,token:`--accent`},{part:`Sort button`,property:`Background`,token:`--accent`},{part:`Sort button`,property:`Colour`,token:`--accent-foreground`}]}),(0,J.jsx)(g,{caption:`Selected`,rows:[{part:`Row`,property:`Background`,token:`--primary-subtle`}]}),(0,J.jsx)(g,{caption:`Expanded`,rows:[{part:`Expanded row`,property:`Divider under it`,token:`--border`}]}),(0,J.jsx)(g,{caption:`Resize handle`,rows:[{part:`Handle line`,property:`Colour`,token:`--border`},{part:`Handle line, hover and drag`,property:`Colour`,token:`--primary`}]}),(0,J.jsx)(g,{caption:`Every part`,rows:[{part:`Focus ring`,property:`Colour`,token:`--ring`}]}),(0,J.jsxs)(t.ul,{children:[`
`,(0,J.jsx)(t.li,{children:`Rows are not striped: the dividers separate them.`}),`
`,(0,J.jsx)(t.li,{children:`The sort icon of a column that is not sorted is the label's colour at 60%
opacity.`}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.strong,{children:`Between two selected rows`}),` the divider is mixed from the tint:
`,(0,J.jsx)(t.code,{children:`--primary-subtle`}),` with a quarter of `,(0,J.jsx)(t.code,{children:`--primary-subtle-text`}),`. `,(0,J.jsx)(t.code,{children:`--border`}),`
is as light as the tint in light mode and would vanish.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.strong,{children:`An open row and its content read as one block`}),`: no divider between
them, and the content row shares its row's hover and selected tint.`]}),`
`]}),(0,J.jsx)(t.h2,{id:`states`,children:`States`}),(0,J.jsx)(v,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`}],children:(0,J.jsx)(a,{of:A})}),(0,J.jsx)(v,{states:[{label:`Focus`,pseudo:`focus-visible`},{label:`Pressed`,pseudo:`active`}],children:(0,J.jsx)(a,{of:A})}),(0,J.jsx)(v,{states:[{label:`Sorted`,content:(0,J.jsx)(a,{of:G})},{label:`Selected`,content:(0,J.jsx)(a,{of:H})}]}),(0,J.jsx)(v,{states:[{label:`Expanded`,content:(0,J.jsx)(a,{of:w})}]}),(0,J.jsx)(t.p,{children:`Each example forces the state on every row and button at once; on screen
it is the one under the pointer or the keyboard.`}),(0,J.jsxs)(t.ul,{children:[`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.strong,{children:`Hover`}),` tints the row with `,(0,J.jsx)(t.code,{children:`--accent`}),`, and the sort button too. The
content row of an open row takes no hover of its own, only its row's.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,J.jsx)(t.code,{children:`--ring`}),` outline, drawn 2px inside the sort button.
The checkboxes and the expand button keep
their own focus rings.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.strong,{children:`Pressed`}),` has no look of its own: the click sorts, selects or opens,
and that state's look follows.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.strong,{children:`Resize handle`}),`: hover and drag thicken its line to 2px `,(0,J.jsx)(t.code,{children:`--primary`}),`;
focus draws the `,(0,J.jsx)(t.code,{children:`--ring`}),` outline inside the handle.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.strong,{children:`Disabled`}),`: Table has none. A row that cannot be acted on is a row
without the control.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.strong,{children:`Sorted`}),` shows the column's icon at full colour, pointing up or down.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.strong,{children:`Selected`}),` tints the row with `,(0,J.jsx)(t.code,{children:`--primary-subtle`}),`.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.strong,{children:`Expanded`}),` turns the chevron to point down and opens the content row
under it.`]}),`
`]}),(0,J.jsx)(t.h2,{id:`api`,children:`API`}),(0,J.jsx)(`div`,{style:{overflowX:`auto`},children:(0,J.jsx)(o,{of:W})}),(0,J.jsxs)(t.p,{children:[(0,J.jsx)(t.code,{children:`TableColumn<Row>`}),` describes one column:`]}),(0,J.jsxs)(t.ul,{children:[`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`key`}),`: unique; also the row field shown when there is no `,(0,J.jsx)(t.code,{children:`cell`}),`.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`header`}),`: the column's label.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`cell`}),`: renders the cell; defaults to `,(0,J.jsx)(t.code,{children:`row[key]`}),`.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`sortable`}),`: adds a sort button to the header. It sorts by `,(0,J.jsx)(t.code,{children:`sortValue`}),`,
or by `,(0,J.jsx)(t.code,{children:`row[key]`}),`.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`align`}),`: `,(0,J.jsx)(t.code,{children:`start`}),`, `,(0,J.jsx)(t.code,{children:`center`}),` or `,(0,J.jsx)(t.code,{children:`end`}),`. `,(0,J.jsx)(t.code,{children:`end`}),` for numbers and dates, so the
digits line up.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`width`}),`: any CSS width, e.g. `,(0,J.jsx)(t.code,{children:`8rem`}),` or `,(0,J.jsx)(t.code,{children:`20%`}),`.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`isRowHeader`}),`: makes the column's cells `,(0,J.jsx)(t.code,{children:`<th scope="row">`}),`, the name a
row is known by. Usually the first column.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`footer`}),`: this column's cell in the total row, e.g. a sum. Any column
with one adds the row; put the label ("Total") on the row header column.
Hidden while there are no rows.`]}),`
`]}),(0,J.jsxs)(t.p,{children:[(0,J.jsx)(t.code,{children:`TableSort`}),` is `,(0,J.jsx)(t.code,{children:`{ key, direction }`}),`, with direction `,(0,J.jsx)(t.code,{children:`ascending`}),` or
`,(0,J.jsx)(t.code,{children:`descending`}),`.`]}),(0,J.jsxs)(t.p,{children:[`With `,(0,J.jsx)(t.code,{children:`sort`}),` controlled, the table leaves the order to you. `,(0,J.jsx)(t.code,{children:`sortRows(rows, columns, sort)`}),` returns the rows in the order the table would sort them,
so you can sort every row before slicing out a page, as the
`,(0,J.jsx)(t.a,{href:`?path=/docs/templates-object-management-projects--docs`,children:`Projects`}),`
template does.`]})]}),(0,J.jsxs)(_,{value:`guidelines`,children:[(0,J.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,J.jsxs)(t.p,{children:[`Use a Table for records that share their fields, when people compare them
or look one up: projects, invoices, members. Align numbers and dates to the
end, and mark the column a row is known by with `,(0,J.jsx)(t.code,{children:`isRowHeader`}),`.`]}),(0,J.jsx)(l,{do:(0,J.jsx)(a,{of:T}),doCaption:`Numbers and dates aligned to the end, in tabular figures: the digits line up column-wide.`,dont:(0,J.jsx)(a,{of:z}),dontCaption:`Aligned to the start, 9 sits under the 1 of 1,203, and the column cannot be compared at a glance.`}),(0,J.jsx)(l,{do:(0,J.jsx)(a,{of:j}),doCaption:`A row header names each row, so its checkbox reads “Select Atlas”.`,dont:(0,J.jsx)(a,{of:I}),dontCaption:`Without one, every checkbox is “Select row 1”, “Select row 2”: a screen reader user cannot tell what they select.`}),(0,J.jsxs)(t.p,{children:[(0,J.jsx)(t.strong,{children:`Sort cycles ascending, descending, off.`}),` The third click returns to the
original order, which is often the one that meant something. Uncontrolled,
the table sorts a copy: dates as dates, numbers as numbers, text by locale
with "file 2" before "file 10". Empty values sort last both ways.`]}),(0,J.jsx)(s,{of:N}),(0,J.jsxs)(t.p,{children:[`With server-side sorting, pass `,(0,J.jsx)(t.code,{children:`sort`}),` and `,(0,J.jsx)(t.code,{children:`onSortChange`}),` and hand back the
rows already sorted:`]}),(0,J.jsx)(s,{of:M}),(0,J.jsxs)(t.p,{children:[(0,J.jsx)(t.strong,{children:`Paging is not built in.`}),` Put a
`,(0,J.jsx)(t.a,{href:`?path=/docs/components-navigation-pagination--docs`,children:`Pagination`}),` under the
table and pass it one page of `,(0,J.jsx)(t.code,{children:`rows`}),`. With `,(0,J.jsx)(t.code,{children:`getRowId`}),`, selection keeps
working across pages: "Select all" adds or removes this page's rows only.`]}),(0,J.jsx)(s,{of:O}),(0,J.jsxs)(t.p,{children:[`Pass `,(0,J.jsx)(t.code,{children:`expandedIds`}),` to open rows from outside the table:`]}),(0,J.jsx)(s,{of:R}),(0,J.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,J.jsxs)(t.ul,{children:[`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.strong,{children:`For a whole list page`}),` with search, filters, bulk actions and paging.
Start from the
`,(0,J.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-data-table-page--docs`,children:`Data Table Page`}),`
pattern, which puts a Table together with them.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.strong,{children:`For records that do not share fields`}),`, or that are read one at a
time, like products in a shop. Use `,(0,J.jsx)(t.a,{href:`?path=/docs/components-data-display-card--docs`,children:`Cards`}),`.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.strong,{children:`For layout.`}),` A table announces rows and columns to a screen reader;
use CSS grid to place things side by side.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.strong,{children:`For a spreadsheet`}),`, where arrow keys move between cells and cells
are edited in place. Table is a plain table, not an ARIA grid; the kit
has no data grid yet.`]}),`
`]}),(0,J.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,J.jsxs)(t.ul,{children:[`
`,(0,J.jsxs)(t.li,{children:[`A real `,(0,J.jsx)(t.code,{children:`<table>`}),` named by its `,(0,J.jsx)(t.code,{children:`<caption>`}),`, with `,(0,J.jsx)(t.code,{children:`<th scope="col">`}),`
headers and a `,(0,J.jsx)(t.code,{children:`<th scope="row">`}),` for the row header column: screen
readers announce the column and the row for every cell.`]}),`
`,(0,J.jsxs)(t.li,{children:[`Sortable headers carry `,(0,J.jsx)(t.code,{children:`aria-sort`}),` (`,(0,J.jsx)(t.code,{children:`ascending`}),`, `,(0,J.jsx)(t.code,{children:`descending`}),` or
`,(0,J.jsx)(t.code,{children:`none`}),`); the sort control is a button inside the header.`]}),`
`,(0,J.jsxs)(t.li,{children:[`Row checkboxes are named after the row header ("Select Atlas"), or
"Select row 1" without one, counted from `,(0,J.jsx)(t.code,{children:`rows`}),` so a sort does not
rename them. The header checkbox is "Select all rows" and reports
`,(0,J.jsx)(t.code,{children:`mixed`}),` when some are selected. A selected row has `,(0,J.jsx)(t.code,{children:`aria-selected`}),`.`]}),`
`,(0,J.jsxs)(t.li,{children:[`Each expand button is named after the row header ("Expand Atlas"),
reports `,(0,J.jsx)(t.code,{children:`aria-expanded`}),`, and while open points at the content cell with
`,(0,J.jsx)(t.code,{children:`aria-controls`}),`. Enter and Space toggle it. The name stays the same open
or closed; `,(0,J.jsx)(t.code,{children:`aria-expanded`}),` carries the state.`]}),`
`,(0,J.jsx)(t.li,{children:`A row with nothing to expand has no button.`}),`
`,(0,J.jsx)(t.li,{children:`The expand column's header is "Details", visually hidden, so the column
is announced like the others.`}),`
`,(0,J.jsx)(t.li,{children:`The content cell spans every column, so it is read as one cell under its
row.`}),`
`,(0,J.jsxs)(t.li,{children:[`Each row actions button is named after the row header ("Actions for
Atlas") and reports `,(0,J.jsx)(t.code,{children:`aria-haspopup="menu"`}),`. Enter opens the menu,
Escape closes it, and focus returns to the button. A row with no items
has no button.`]}),`
`,(0,J.jsx)(t.li,{children:`The actions column's header is "Actions", visually hidden.`}),`
`,(0,J.jsxs)(t.li,{children:[`With `,(0,J.jsx)(t.code,{children:`hasRowContextMenu`}),`, the right-click menu is a shortcut to the
same entries, never the only way in: the ⋯ button stays.`]}),`
`,(0,J.jsxs)(t.li,{children:[`When the table is wider than its box and nothing in it takes focus, the
scroll box becomes a tab stop with a focus ring: `,(0,J.jsx)(t.code,{children:`role="region"`}),` named by
the caption, which the browser scrolls with the arrow keys. A table that
fits, or whose cells hold a control (a sort button, a checkbox), gets no
extra tab stop.`]}),`
`,(0,J.jsxs)(t.li,{children:[`With `,(0,J.jsx)(t.code,{children:`isResizable`}),`, each column header holds a focusable
`,(0,J.jsx)(t.code,{children:`role="separator"`}),` with `,(0,J.jsx)(t.code,{children:`aria-orientation="vertical"`}),`, named "Resize"
and the header ("Resize Owner"), or the column's `,(0,J.jsx)(t.code,{children:`key`}),` when the header
is not plain text. Its `,(0,J.jsx)(t.code,{children:`aria-valuenow`}),` is the column's
width in px, between `,(0,J.jsx)(t.code,{children:`aria-valuemin`}),` 48 and `,(0,J.jsx)(t.code,{children:`aria-valuemax`}),` 1200.`]}),`
`,(0,J.jsx)(t.li,{children:`Arrow Right widens the column 16px and Arrow Left narrows it (mirrored
in right-to-left); Home sets the narrowest width and End the widest.
Dragging the handle does the same with a pointer.`}),`
`,(0,J.jsxs)(t.li,{children:[`The total row is in a `,(0,J.jsx)(t.code,{children:`<tfoot>`}),` with one cell per column, so each total
is announced under its column; the label column is its row header.`]}),`
`]})]})]})]})}function q(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,J.jsx)(t,{...e,children:(0,J.jsx)(K,{...e})}):K(e)}var J;function Y(){return(Y=e((()=>{J=t(),r(),c(),d(),p(),h(),f(),m(),b(),U()})))()}Y();export{q as default};