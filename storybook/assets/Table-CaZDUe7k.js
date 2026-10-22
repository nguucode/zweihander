import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-5QHvYkjw.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-DOZWi2yR.js";import{n as b,t as x}from"./Status-CsQCr1NL.js";import{_ as S,a as C,b as w,c as T,d as E,f as D,g as O,h as k,i as A,l as j,m as M,n as N,o as P,p as F,r as I,s as L,t as R,u as z,v as B,y as V}from"./Table.stories-BuiVoQ_v.js";function H(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(i,{of:B}),`
`,(0,W.jsx)(t.h1,{id:`table`,children:`Table`}),`
`,(0,W.jsxs)(u,{children:[(0,W.jsxs)(_,{value:`overview`,children:[(0,W.jsx)(t.p,{children:`Rows of records with the same fields, to scan and compare: projects,
invoices, members. Columns can sort, rows can be selected and expanded.`}),(0,W.jsx)(x,{of:B}),(0,W.jsx)(s,{of:D}),(0,W.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,W.jsx)(t.p,{children:`Any table takes any of these together: a selectable table can also expand
its rows and keep its header in view.`}),(0,W.jsxs)(t.table,{children:[(0,W.jsx)(t.thead,{children:(0,W.jsxs)(t.tr,{children:[(0,W.jsx)(t.th,{children:`Variant`}),(0,W.jsx)(t.th,{children:`Use for`})]})}),(0,W.jsxs)(t.tbody,{children:[(0,W.jsxs)(t.tr,{children:[(0,W.jsx)(t.td,{children:(0,W.jsx)(t.code,{children:`density="md"`})}),(0,W.jsx)(t.td,{children:`The default, 48px rows: most tables, and rows that hold a Tag or a button.`})]}),(0,W.jsxs)(t.tr,{children:[(0,W.jsx)(t.td,{children:(0,W.jsx)(t.code,{children:`density="sm"`})}),(0,W.jsx)(t.td,{children:`40px rows, for long lists of plain text where seeing more rows at once matters.`})]}),(0,W.jsxs)(t.tr,{children:[(0,W.jsx)(t.td,{children:(0,W.jsx)(t.code,{children:`isSelectable`})}),(0,W.jsx)(t.td,{children:`Acting on several rows at once: archive, export, assign.`})]}),(0,W.jsxs)(t.tr,{children:[(0,W.jsx)(t.td,{children:(0,W.jsx)(t.code,{children:`expandedContent`})}),(0,W.jsx)(t.td,{children:`Details that belong to one row but do not fit in a column: a description, a timeline, line items.`})]}),(0,W.jsxs)(t.tr,{children:[(0,W.jsx)(t.td,{children:(0,W.jsx)(t.code,{children:`hasStickyHeader`})}),(0,W.jsx)(t.td,{children:`Long tables that scroll inside a fixed height, so the column names stay in view.`})]}),(0,W.jsxs)(t.tr,{children:[(0,W.jsx)(t.td,{children:(0,W.jsx)(t.code,{children:`emptyState`})}),(0,W.jsx)(t.td,{children:`Saying why there are no rows, and what to do: clear a search, add the first one.`})]})]})]}),(0,W.jsx)(s,{of:C}),(0,W.jsx)(s,{of:N}),(0,W.jsx)(t.p,{children:`Rows with details open under themselves. Expansion is independent of
selection and survives sorting:`}),(0,W.jsx)(s,{of:z}),(0,W.jsx)(s,{of:S}),(0,W.jsx)(s,{of:T}),(0,W.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,W.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,W.jsx)(t.pre,{children:(0,W.jsx)(t.code,{className:`language-js`,children:`import { Table, type TableColumn } from 'zweihander/table'
`})}),(0,W.jsx)(t.pre,{children:(0,W.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/table.json
`})}),(0,W.jsxs)(t.ul,{children:[`
`,(0,W.jsxs)(t.li,{children:[`Source: `,(0,W.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/data-display/Table.tsx`,rel:`nofollow`,children:`src/components/data-display/Table.tsx`})]}),`
`,(0,W.jsxs)(t.li,{children:[`Spec: `,(0,W.jsx)(t.a,{href:`https://www.uiguideline.com/components/table`,rel:`nofollow`,children:`uiguideline.com/components/table`})]}),`
`,(0,W.jsxs)(t.li,{children:[`Behaviour: a native `,(0,W.jsx)(t.code,{children:`<table>`}),`; selection uses the kit's `,(0,W.jsx)(t.a,{href:`?path=/docs/components-controls-checkbox--docs`,children:`Checkbox`}),`, expansion its `,(0,W.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Button`})]}),`
`,(0,W.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,W.jsxs)(_,{value:`specs`,children:[(0,W.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,W.jsx)(y,{parts:V,children:(0,W.jsx)(a,{of:R})}),(0,W.jsxs)(t.p,{children:[`The table sits in a container that scrolls sideways on a narrow screen
rather than squeezing the columns. The selection column comes first, then
the expand column; a row whose `,(0,W.jsx)(t.code,{children:`expandedContent`}),` returns nothing leaves its
expand cell empty.`]}),(0,W.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,W.jsx)(t.p,{children:`Each density is a row height. Everything else is the same in both.`}),(0,W.jsx)(g,{caption:`md`,rows:[{part:`Row`,property:`Height`,token:`--row-height`},{part:`Header row`,property:`Height`,token:`--row-height`}]}),(0,W.jsx)(g,{caption:`sm`,rows:[{part:`Row`,property:`Height, minus --space-inline`,token:`--row-height`},{part:`Header row`,property:`Height, minus --space-inline`,token:`--row-height`}]}),(0,W.jsx)(g,{caption:`Every density`,rows:[{part:`Cell`,property:`Inline padding`,token:`--space-group`},{part:`Cell`,property:`Font size`,token:`--text-body`},{part:`Cell`,property:`Line height`,token:`--leading-body`},{part:`Header cell`,property:`Font size`,token:`--text-body-sm`},{part:`Header cell`,property:`Line height`,token:`--leading-body-sm`},{part:`Sort button`,property:`Block padding`,token:`--control-xs-gap`},{part:`Sort button`,property:`Inline padding`,token:`--control-sm-pad`},{part:`Sort button`,property:`Gap`,token:`--space-1`},{part:`Sort button`,property:`Corner radius`,token:`--radius-sm`},{part:`Sort icon`,property:`Size`,token:`--icon-md`},{part:`Selection and expand columns`,property:`Width`,token:`--space-10`},{part:`Expand column`,property:`Inline start padding`,token:`--space-inline`},{part:`Expand icon`,property:`Size`,token:`--icon-md`},{part:`Expanded row`,property:`Block start padding`,token:`--space-2`},{part:`Expanded row`,property:`Inline and block end padding`,token:`--space-4`},{part:`Caption`,property:`Block padding`,token:`--space-3`},{part:`Caption`,property:`Inline padding`,token:`--space-4`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset, inside the button`,token:`--focus-offset-inset`},{part:`Sort button`,property:`Hit area on touch screens`,token:`--target-coarse`}]}),(0,W.jsx)(t.p,{children:`Rows are divided by a 1px rule; the last row has none. The sort button
pulls itself out by its own inline padding, so its label lines up with the
cells below. Figures are tabular, so numbers line up column-wide.`}),(0,W.jsx)(t.h2,{id:`color`,children:`Color`}),(0,W.jsx)(t.p,{children:`Switch the theme and the accent in the toolbar: the values follow.`}),(0,W.jsx)(g,{caption:`Header`,rows:[{part:`Header row`,property:`Background`,token:`--surface-filled`},{part:`Header label`,property:`Colour`,token:`--muted-foreground`},{part:`Sort icon, sorted column`,property:`Colour`,token:`--foreground`}]}),(0,W.jsx)(g,{caption:`Row`,rows:[{part:`Container`,property:`Background`,token:`--card`},{part:`Cell`,property:`Colour`,token:`--card-foreground`},{part:`Divider`,property:`Colour`,token:`--border`}]}),(0,W.jsx)(g,{caption:`Hover`,rows:[{part:`Row`,property:`Background`,token:`--accent`},{part:`Sort button`,property:`Background`,token:`--accent`},{part:`Sort button`,property:`Colour`,token:`--accent-foreground`}]}),(0,W.jsx)(g,{caption:`Selected`,rows:[{part:`Row`,property:`Background`,token:`--primary-subtle`}]}),(0,W.jsx)(g,{caption:`Expanded`,rows:[{part:`Expanded row`,property:`Divider under it`,token:`--border`}]}),(0,W.jsx)(g,{caption:`Every part`,rows:[{part:`Focus ring`,property:`Colour`,token:`--ring`}]}),(0,W.jsxs)(t.ul,{children:[`
`,(0,W.jsx)(t.li,{children:`Rows are not striped: the dividers separate them.`}),`
`,(0,W.jsx)(t.li,{children:`The sort icon of a column that is not sorted is the label's colour at 60%
opacity.`}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.strong,{children:`Between two selected rows`}),` the divider is mixed from the tint:
`,(0,W.jsx)(t.code,{children:`--primary-subtle`}),` with a quarter of `,(0,W.jsx)(t.code,{children:`--primary-subtle-text`}),`. `,(0,W.jsx)(t.code,{children:`--border`}),`
is as light as the tint in light mode and would vanish.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.strong,{children:`An open row and its content read as one block`}),`: no divider between
them, and the content row shares its row's hover and selected tint.`]}),`
`]}),(0,W.jsx)(t.h2,{id:`states`,children:`States`}),(0,W.jsx)(v,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`}],children:(0,W.jsx)(a,{of:F})}),(0,W.jsx)(v,{states:[{label:`Focus`,pseudo:`focus-visible`},{label:`Pressed`,pseudo:`active`}],children:(0,W.jsx)(a,{of:F})}),(0,W.jsx)(v,{states:[{label:`Sorted`,content:(0,W.jsx)(a,{of:O})},{label:`Selected`,content:(0,W.jsx)(a,{of:k})}]}),(0,W.jsx)(v,{states:[{label:`Expanded`,content:(0,W.jsx)(a,{of:M})}]}),(0,W.jsx)(t.p,{children:`Each example forces the state on every row and button at once; on screen
it is the one under the pointer or the keyboard.`}),(0,W.jsxs)(t.ul,{children:[`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.strong,{children:`Hover`}),` tints the row with `,(0,W.jsx)(t.code,{children:`--accent`}),`, and the sort button too. The
content row of an open row takes no hover of its own, only its row's.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,W.jsx)(t.code,{children:`--ring`}),` outline, drawn 2px inside the sort button.
The checkboxes and the expand button keep
their own focus rings.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.strong,{children:`Pressed`}),` has no look of its own: the click sorts, selects or opens,
and that state's look follows.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.strong,{children:`Disabled`}),`: Table has none. A row that cannot be acted on is a row
without the control.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.strong,{children:`Sorted`}),` shows the column's icon at full colour, pointing up or down.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.strong,{children:`Selected`}),` tints the row with `,(0,W.jsx)(t.code,{children:`--primary-subtle`}),`.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.strong,{children:`Expanded`}),` turns the chevron to point down and opens the content row
under it.`]}),`
`]}),(0,W.jsx)(t.h2,{id:`api`,children:`API`}),(0,W.jsx)(`div`,{style:{overflowX:`auto`},children:(0,W.jsx)(o,{of:B})}),(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.code,{children:`TableColumn<Row>`}),` describes one column:`]}),(0,W.jsxs)(t.ul,{children:[`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.code,{children:`key`}),`: unique; also the row field shown when there is no `,(0,W.jsx)(t.code,{children:`cell`}),`.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.code,{children:`header`}),`: the column's label.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.code,{children:`cell`}),`: renders the cell; defaults to `,(0,W.jsx)(t.code,{children:`row[key]`}),`.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.code,{children:`sortable`}),`: adds a sort button to the header. It sorts by `,(0,W.jsx)(t.code,{children:`sortValue`}),`,
or by `,(0,W.jsx)(t.code,{children:`row[key]`}),`.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.code,{children:`align`}),`: `,(0,W.jsx)(t.code,{children:`start`}),`, `,(0,W.jsx)(t.code,{children:`center`}),` or `,(0,W.jsx)(t.code,{children:`end`}),`. `,(0,W.jsx)(t.code,{children:`end`}),` for numbers and dates, so the
digits line up.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.code,{children:`width`}),`: any CSS width, e.g. `,(0,W.jsx)(t.code,{children:`8rem`}),` or `,(0,W.jsx)(t.code,{children:`20%`}),`.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.code,{children:`isRowHeader`}),`: makes the column's cells `,(0,W.jsx)(t.code,{children:`<th scope="row">`}),`, the name a
row is known by. Usually the first column.`]}),`
`]}),(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.code,{children:`TableSort`}),` is `,(0,W.jsx)(t.code,{children:`{ key, direction }`}),`, with direction `,(0,W.jsx)(t.code,{children:`ascending`}),` or
`,(0,W.jsx)(t.code,{children:`descending`}),`.`]})]}),(0,W.jsxs)(_,{value:`guidelines`,children:[(0,W.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,W.jsxs)(t.p,{children:[`Use a Table for records that share their fields, when people compare them
or look one up: projects, invoices, members. Align numbers and dates to the
end, and mark the column a row is known by with `,(0,W.jsx)(t.code,{children:`isRowHeader`}),`.`]}),(0,W.jsx)(l,{do:(0,W.jsx)(a,{of:C}),doCaption:`Numbers and dates aligned to the end, in tabular figures: the digits line up column-wide.`,dont:(0,W.jsx)(a,{of:L}),dontCaption:`Aligned to the start, 9 sits under the 1 of 1,203, and the column cannot be compared at a glance.`}),(0,W.jsx)(l,{do:(0,W.jsx)(a,{of:D}),doCaption:`A row header names each row, so its checkbox reads “Select Atlas”.`,dont:(0,W.jsx)(a,{of:P}),dontCaption:`Without one, every checkbox is “Select row 1”, “Select row 2”: a screen reader user cannot tell what they select.`}),(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.strong,{children:`Sort cycles ascending, descending, off.`}),` The third click returns to the
original order, which is often the one that meant something. Uncontrolled,
the table sorts a copy: dates as dates, numbers as numbers, text by locale
with "file 2" before "file 10". Empty values sort last both ways.`]}),(0,W.jsx)(s,{of:j}),(0,W.jsxs)(t.p,{children:[`With server-side sorting, pass `,(0,W.jsx)(t.code,{children:`sort`}),` and `,(0,W.jsx)(t.code,{children:`onSortChange`}),` and hand back the
rows already sorted:`]}),(0,W.jsx)(s,{of:A}),(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.strong,{children:`Paging is not built in.`}),` Put a
`,(0,W.jsx)(t.a,{href:`?path=/docs/components-navigation-pagination--docs`,children:`Pagination`}),` under the
table and pass it one page of `,(0,W.jsx)(t.code,{children:`rows`}),`. With `,(0,W.jsx)(t.code,{children:`getRowId`}),`, selection keeps
working across pages: "Select all" adds or removes this page's rows only.`]}),(0,W.jsx)(s,{of:E}),(0,W.jsxs)(t.p,{children:[`Pass `,(0,W.jsx)(t.code,{children:`expandedIds`}),` to open rows from outside the table:`]}),(0,W.jsx)(s,{of:I}),(0,W.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,W.jsxs)(t.ul,{children:[`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.strong,{children:`For a whole list page`}),` with search, filters, bulk actions and paging.
Start from the
`,(0,W.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-data-table-page--docs`,children:`Data Table Page`}),`
pattern, which puts a Table together with them.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.strong,{children:`For records that do not share fields`}),`, or that are read one at a
time, like products in a shop. Use `,(0,W.jsx)(t.a,{href:`?path=/docs/components-data-display-card--docs`,children:`Cards`}),`.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.strong,{children:`For layout.`}),` A table announces rows and columns to a screen reader;
use CSS grid to place things side by side.`]}),`
`,(0,W.jsxs)(t.li,{children:[(0,W.jsx)(t.strong,{children:`For a spreadsheet`}),`, where arrow keys move between cells and cells
are edited in place. Table is a plain table, not an ARIA grid; the kit
has no data grid yet.`]}),`
`]}),(0,W.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,W.jsxs)(t.ul,{children:[`
`,(0,W.jsxs)(t.li,{children:[`A real `,(0,W.jsx)(t.code,{children:`<table>`}),` named by its `,(0,W.jsx)(t.code,{children:`<caption>`}),`, with `,(0,W.jsx)(t.code,{children:`<th scope="col">`}),`
headers and a `,(0,W.jsx)(t.code,{children:`<th scope="row">`}),` for the row header column: screen
readers announce the column and the row for every cell.`]}),`
`,(0,W.jsxs)(t.li,{children:[`Sortable headers carry `,(0,W.jsx)(t.code,{children:`aria-sort`}),` (`,(0,W.jsx)(t.code,{children:`ascending`}),`, `,(0,W.jsx)(t.code,{children:`descending`}),` or
`,(0,W.jsx)(t.code,{children:`none`}),`); the sort control is a button inside the header.`]}),`
`,(0,W.jsxs)(t.li,{children:[`Row checkboxes are named after the row header ("Select Atlas"), or
"Select row 1" without one, counted from `,(0,W.jsx)(t.code,{children:`rows`}),` so a sort does not
rename them. The header checkbox is "Select all rows" and reports
`,(0,W.jsx)(t.code,{children:`mixed`}),` when some are selected. A selected row has `,(0,W.jsx)(t.code,{children:`aria-selected`}),`.`]}),`
`,(0,W.jsxs)(t.li,{children:[`Each expand button is named after the row header ("Expand Atlas"),
reports `,(0,W.jsx)(t.code,{children:`aria-expanded`}),`, and while open points at the content cell with
`,(0,W.jsx)(t.code,{children:`aria-controls`}),`. Enter and Space toggle it. The name stays the same open
or closed; `,(0,W.jsx)(t.code,{children:`aria-expanded`}),` carries the state.`]}),`
`,(0,W.jsx)(t.li,{children:`A row with nothing to expand has no button.`}),`
`,(0,W.jsx)(t.li,{children:`The expand column's header is "Details", visually hidden, so the column
is announced like the others.`}),`
`,(0,W.jsx)(t.li,{children:`The content cell spans every column, so it is read as one cell under its
row.`}),`
`]})]})]})]})}function U(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,W.jsx)(t,{...e,children:(0,W.jsx)(H,{...e})}):H(e)}var W;function G(){return(G=e((()=>{W=t(),r(),c(),d(),p(),h(),f(),m(),b(),w()})))()}G();export{U as default};