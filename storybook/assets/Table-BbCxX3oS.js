import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-DsER1A51.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-I6SQLLHM.js";import{n as b,t as x}from"./Status-CNj0XQZL.js";import{S,_ as C,a as w,b as T,c as E,d as D,f as O,g as k,h as A,i as j,l as M,m as N,n as P,o as F,p as I,r as L,s as R,t as z,u as B,v as V,x as H,y as U}from"./Table.stories-GW9bEtqI.js";function W(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(c,{of:U}),`
`,(0,K.jsx)(t.h1,{id:`table`,children:`Table`}),`
`,(0,K.jsxs)(u,{children:[(0,K.jsxs)(_,{value:`overview`,children:[(0,K.jsx)(t.p,{children:`Rows of records with the same fields, to scan and compare: projects,
invoices, members. Columns can sort, rows can be selected, expanded and
acted on, and a total row can sum them up.`}),(0,K.jsx)(x,{of:U}),(0,K.jsx)(s,{of:I}),(0,K.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,K.jsx)(t.p,{children:`Table has one size: 8px round each cell, so a row of text is
36px, and a row that holds a button or a field grows to fit it. Any table
takes any of these together: a selectable table can also expand its rows
and keep its header in view.`}),(0,K.jsxs)(t.table,{children:[(0,K.jsx)(t.thead,{children:(0,K.jsxs)(t.tr,{children:[(0,K.jsx)(t.th,{children:`Variant`}),(0,K.jsx)(t.th,{children:`Use for`})]})}),(0,K.jsxs)(t.tbody,{children:[(0,K.jsxs)(t.tr,{children:[(0,K.jsx)(t.td,{children:(0,K.jsx)(t.code,{children:`isSelectable`})}),(0,K.jsx)(t.td,{children:`Acting on several rows at once: archive, export, assign.`})]}),(0,K.jsxs)(t.tr,{children:[(0,K.jsx)(t.td,{children:(0,K.jsx)(t.code,{children:`expandedContent`})}),(0,K.jsx)(t.td,{children:`Details that belong to one row but do not fit in a column: a description, a timeline, line items.`})]}),(0,K.jsxs)(t.tr,{children:[(0,K.jsx)(t.td,{children:(0,K.jsx)(t.code,{children:`hasStickyHeader`})}),(0,K.jsx)(t.td,{children:`Long tables that scroll inside a fixed height, so the column names stay in view.`})]}),(0,K.jsxs)(t.tr,{children:[(0,K.jsx)(t.td,{children:(0,K.jsx)(t.code,{children:`rowActions`})}),(0,K.jsx)(t.td,{children:`Actions on one record (edit, duplicate, archive) that do not earn a column: a menu at the row's end.`})]}),(0,K.jsxs)(t.tr,{children:[(0,K.jsxs)(t.td,{children:[(0,K.jsx)(t.code,{children:`footer`}),` on a column`]}),(0,K.jsx)(t.td,{children:`A total row under the rows: sums, counts, averages.`})]}),(0,K.jsxs)(t.tr,{children:[(0,K.jsx)(t.td,{children:(0,K.jsx)(t.code,{children:`isResizable`})}),(0,K.jsx)(t.td,{children:`Tables whose columns hold text of unknown length (names, notes, emails), so people can widen what they read.`})]}),(0,K.jsxs)(t.tr,{children:[(0,K.jsx)(t.td,{children:(0,K.jsx)(t.code,{children:`emptyState`})}),(0,K.jsx)(t.td,{children:`Saying why there are no rows, and what to do: clear a search, add the first one.`})]})]})]}),(0,K.jsx)(s,{of:j}),(0,K.jsx)(t.p,{children:`Rows with details open under themselves. Expansion is independent of
selection and survives sorting:`}),(0,K.jsx)(s,{of:M}),(0,K.jsx)(t.p,{children:`A menu at the end of each row. A row with nothing to do gets no button:`}),(0,K.jsx)(s,{of:O}),(0,K.jsxs)(t.p,{children:[`A total row under the rows, which sorting leaves at the bottom. The table
does not add anything up: you pass each column's `,(0,K.jsx)(t.code,{children:`footer`}),`, so you decide
whether it totals this page or every row.`]}),(0,K.jsx)(s,{of:T}),(0,K.jsxs)(t.p,{children:[`A handle on each header's end edge resizes its column, by dragging or by
the arrow keys. The table is then laid out by its header widths: give the
columns a starting `,(0,K.jsx)(t.code,{children:`width`}),`, and keep `,(0,K.jsx)(t.code,{children:`columnWidths`}),` if they should last.
Pair it with a `,(0,K.jsx)(t.a,{href:`?path=/docs/components-data-display-column-chooser--docs`,children:`Column Chooser`}),`
to hide columns as well.`]}),(0,K.jsx)(s,{of:D}),(0,K.jsx)(s,{of:V}),(0,K.jsx)(s,{of:R}),(0,K.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,K.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,K.jsx)(t.pre,{children:(0,K.jsx)(t.code,{className:`language-js`,children:`import { Table, type TableColumn } from 'zweihander/table'
`})}),(0,K.jsx)(t.pre,{children:(0,K.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/table.json
`})}),(0,K.jsxs)(t.ul,{children:[`
`,(0,K.jsxs)(t.li,{children:[`Source: `,(0,K.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/data-display/Table.tsx`,rel:`nofollow`,children:`src/components/data-display/Table.tsx`})]}),`
`,(0,K.jsxs)(t.li,{children:[`Spec: `,(0,K.jsx)(t.a,{href:`https://www.uiguideline.com/components/table`,rel:`nofollow`,children:`uiguideline.com/components/table`})]}),`
`,(0,K.jsxs)(t.li,{children:[`Behaviour: a native `,(0,K.jsx)(t.code,{children:`<table>`}),`; selection uses the kit's `,(0,K.jsx)(t.a,{href:`?path=/docs/components-controls-checkbox--docs`,children:`Checkbox`}),`, expansion its `,(0,K.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Button`}),`, row actions its `,(0,K.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`})]}),`
`,(0,K.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,K.jsxs)(_,{value:`specs`,children:[(0,K.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,K.jsx)(y,{parts:H,children:(0,K.jsx)(i,{of:z})}),(0,K.jsxs)(t.p,{children:[`The table sits in a container that scrolls sideways on a narrow screen
rather than squeezing the columns. The selection column comes first, then
the expand column; the actions column comes last. A row whose
`,(0,K.jsx)(t.code,{children:`expandedContent`}),` or `,(0,K.jsx)(t.code,{children:`rowActions`}),` returns nothing leaves that cell empty.
The total row is a `,(0,K.jsx)(t.code,{children:`<tfoot>`}),`, so it stays at the bottom whatever the sort.`]}),(0,K.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,K.jsx)(t.p,{children:`A row has no height of its own: it is as tall as what its cells hold.`}),(0,K.jsxs)(t.table,{children:[(0,K.jsx)(t.thead,{children:(0,K.jsxs)(t.tr,{children:[(0,K.jsx)(t.th,{children:`What the row holds`}),(0,K.jsx)(t.th,{children:`Row height`})]})}),(0,K.jsxs)(t.tbody,{children:[(0,K.jsxs)(t.tr,{children:[(0,K.jsx)(t.td,{children:`One line of text (20px), or a Tag`}),(0,K.jsx)(t.td,{children:`36px`})]}),(0,K.jsxs)(t.tr,{children:[(0,K.jsx)(t.td,{children:`A checkbox, an expand button or an actions button (24px)`}),(0,K.jsx)(t.td,{children:`36px`})]}),(0,K.jsxs)(t.tr,{children:[(0,K.jsx)(t.td,{children:`A 24px button`}),(0,K.jsx)(t.td,{children:`40px`})]}),(0,K.jsxs)(t.tr,{children:[(0,K.jsx)(t.td,{children:`A 32px button or field`}),(0,K.jsx)(t.td,{children:`48px`})]}),(0,K.jsxs)(t.tr,{children:[(0,K.jsx)(t.td,{children:`Header (one 16px line)`}),(0,K.jsx)(t.td,{children:`32px`})]})]})]}),(0,K.jsx)(t.p,{children:`A body row is exactly that tall: there is no divider under it. The header
and the total row add their 1px rule, and a table that has rows adds one
more under its last row. The checkbox, expand and actions
columns take 2px less block padding than the other cells, so their 24px
buttons do not make a row of text taller.`}),(0,K.jsx)(g,{caption:`Every table`,rows:[{part:`Cell`,property:`Padding, all round`,token:`--space-2`},{part:`Header cell`,property:`Padding, all round`,token:`--space-2`},{part:`Header row`,property:`Rule under it`,token:`--border-width`},{part:`Total row`,property:`Rule above it`,token:`--border-width`},{part:`Table`,property:`Rule under it, with rows`,token:`--border-width`},{part:`Cell`,property:`Font size`,token:`--text-body`},{part:`Cell`,property:`Line height`,token:`--leading-body`},{part:`Header cell`,property:`Font size`,token:`--text-body-sm`},{part:`Header cell`,property:`Line height`,token:`--leading-body-sm`},{part:`Sort button`,property:`Block padding`,token:`--space-0-5`},{part:`Sort button`,property:`Inline padding`,token:`--space-1`},{part:`Sort button`,property:`Gap`,token:`--space-1`},{part:`Sort button`,property:`Corner radius`,token:`--radius-sm`},{part:`Sort icon`,property:`Size`,token:`--icon-md`},{part:`Selection column`,property:`Width`,token:`--box-md`},{part:`Expand column`,property:`Width`,token:`--box-lg`},{part:`Expand icon`,property:`Size`,token:`--icon-md`},{part:`Actions column`,property:`Width`,token:`--box-lg`},{part:`Expanded row`,property:`Block start padding`,token:`--space-2`},{part:`Expanded row`,property:`Block end padding`,token:`--space-4`},{part:`Caption`,property:`Block start padding`,token:`--space-6`},{part:`Caption`,property:`Block end padding`,token:`--space-2`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset, inside the button`,token:`--focus-offset-inset`},{part:`Sort button`,property:`Hit area on touch screens`,token:`--target-coarse`}]}),(0,K.jsx)(g,{caption:`Resize handle (isResizable)`,rows:[{part:`Handle`,property:`Width`,token:`--box-2xs`},{part:`Handle line`,property:`Inset from the header edges`,token:`--space-1`},{part:`Handle line, hover and drag`,property:`Width`,token:`--focus-width`},{part:`Handle`,property:`Hit area on touch screens`,token:`--target-coarse`}]}),(0,K.jsx)(t.p,{children:`The handle line is 1px at rest; no token covers a hairline. Its strip is 16px wide (44px on touch screens), at the
header's end, over the header's own padding. The last column's handle sits on the table's edge and shows its line
only on hover and drag. A column is 48px to 1200px wide; the arrow
keys move it 16px at a time.`}),(0,K.jsx)(t.p,{children:`Rows have no divider between them: the hover tint and the selection fill
tell them apart. The header ends on a 1px rule and its labels are
semibold; the total row sits under the same rule, so the sum reads as a
sum. A table that has rows closes on that rule too, as Atlassian's dynamic
table: under the last row, an open row's content or the total row,
whichever comes last. It is the table's own border, so under a sticky
header it scrolls with the rows, and whatever a page puts under the table
(a Pagination, a footer) keeps its own gap below the rule. An empty table
has no closing rule: the header's is the only one over the empty state.
The sort button pulls itself out
by its own padding, so its label lines up with the cells below and its
hover fill adds nothing to the header's height.`}),(0,K.jsxs)(t.p,{children:[(0,K.jsx)(t.strong,{children:`Every cell is padded 8px all round`}),`, the first and last of a row
included: the first column's text, the caption and an open row's content
all start 8px in from the table's left edge, and an end-aligned last
column ends 8px short of its right edge. The control columns are their
control with 8px either side: 32px for the 16px checkbox, 40px for the
24px expand and actions buttons. Focus rings in the control columns are
drawn inside the control, because the cell has no room for an outset
ring. Figures are tabular, so numbers line up column-wide.`]}),(0,K.jsx)(t.h2,{id:`color`,children:`Color`}),(0,K.jsx)(t.p,{children:`Switch the theme and the accent in the toolbar: the values follow.`}),(0,K.jsx)(g,{caption:`Header`,rows:[{part:`Header row`,property:`Background when sticky`,token:`--color-surface-raised`},{part:`Header label`,property:`Colour`,token:`--color-text`},{part:`Sort icon`,property:`Colour`,token:`--color-text-subtlest`},{part:`Sort icon, sorted column`,property:`Colour`,token:`--color-icon-brand`},{part:`Header row`,property:`Rule under it`,token:`--color-border`}]}),(0,K.jsx)(g,{caption:`Row`,rows:[{part:`Container`,property:`Background`,token:`--color-surface-raised`},{part:`Cell`,property:`Colour`,token:`--color-text`},{part:`Total row`,property:`Rule above it`,token:`--color-border`}]}),(0,K.jsx)(g,{caption:`Hover`,rows:[{part:`Row`,property:`Background`,token:`--color-background-neutral`},{part:`Sort button`,property:`Background`,token:`--color-background-neutral`},{part:`Sort button`,property:`Colour`,token:`--color-text`}]}),(0,K.jsx)(g,{caption:`Selected`,rows:[{part:`Row`,property:`Background`,token:`--color-background-brand-subtlest`}]}),(0,K.jsx)(g,{caption:`Resize handle`,rows:[{part:`Handle line`,property:`Colour`,token:`--color-border`},{part:`Handle line, hover and drag`,property:`Colour`,token:`--color-background-brand-bold`}]}),(0,K.jsx)(g,{caption:`Every part`,rows:[{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,K.jsxs)(t.ul,{children:[`
`,(0,K.jsxs)(t.li,{children:[`The header has no fill. With `,(0,K.jsx)(t.code,{children:`hasStickyHeader`}),` it takes the container's
own `,(0,K.jsx)(t.code,{children:`--color-surface-raised`}),`, only so the rows scroll under it.`]}),`
`,(0,K.jsx)(t.li,{children:`Rows are not striped, and have no divider: hover and selection tint
the row under the pointer or the checkbox, from edge to edge.`}),`
`,(0,K.jsxs)(t.li,{children:[`The sort icon of a column that is not sorted is `,(0,K.jsx)(t.code,{children:`--color-text-subtlest`}),`;
the sorted column's is the brand colour.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`Two selected rows next to each other`}),` read as one filled block;
each row's checkbox says which are in it.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`An open row and its content read as one block`}),`: the content row
shares its row's hover and selected tint, and its 16px block-end padding
sets the pair apart from the next row.`]}),`
`]}),(0,K.jsx)(t.h2,{id:`states`,children:`States`}),(0,K.jsx)(v,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`}],children:(0,K.jsx)(i,{of:N})}),(0,K.jsx)(v,{states:[{label:`Focus`,pseudo:`focus-visible`},{label:`Pressed`,pseudo:`active`}],children:(0,K.jsx)(i,{of:N})}),(0,K.jsx)(v,{states:[{label:`Sorted`,content:(0,K.jsx)(i,{of:C})},{label:`Selected`,content:(0,K.jsx)(i,{of:k})}]}),(0,K.jsx)(v,{states:[{label:`Expanded`,content:(0,K.jsx)(i,{of:A})}]}),(0,K.jsx)(t.p,{children:`Each example forces the state on every row and button at once; on screen
it is the one under the pointer or the keyboard.`}),(0,K.jsxs)(t.ul,{children:[`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`Hover`}),` tints the row with `,(0,K.jsx)(t.code,{children:`--color-background-neutral`}),`, and the sort button too. The
content row of an open row takes no hover of its own, only its row's.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,K.jsx)(t.code,{children:`--color-border-focused`}),` outline, drawn 2px inside the sort button.
The checkboxes and the expand button keep
their own focus rings.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`Pressed`}),` has no look of its own: the click sorts, selects or opens,
and that state's look follows.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`Resize handle`}),`: hover and drag thicken its line to 2px `,(0,K.jsx)(t.code,{children:`--color-background-brand-bold`}),`;
focus draws the `,(0,K.jsx)(t.code,{children:`--color-border-focused`}),` outline inside the handle.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`Disabled`}),`: Table has none. A row that cannot be acted on is a row
without the control.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`Sorted`}),` shows the column's icon at full colour, pointing up or down.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`Selected`}),` tints the row with `,(0,K.jsx)(t.code,{children:`--color-background-brand-subtlest`}),`.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`Expanded`}),` turns the chevron to point down and opens the content row
under it.`]}),`
`]}),(0,K.jsx)(t.h2,{id:`api`,children:`API`}),(0,K.jsx)(`div`,{style:{overflowX:`auto`},children:(0,K.jsx)(o,{of:U})}),(0,K.jsxs)(t.p,{children:[(0,K.jsx)(t.code,{children:`TableColumn<Row>`}),` describes one column:`]}),(0,K.jsxs)(t.ul,{children:[`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.code,{children:`key`}),`: unique; also the row field shown when there is no `,(0,K.jsx)(t.code,{children:`cell`}),`.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.code,{children:`header`}),`: the column's label.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.code,{children:`cell`}),`: renders the cell; defaults to `,(0,K.jsx)(t.code,{children:`row[key]`}),`.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.code,{children:`sortable`}),`: adds a sort button to the header. It sorts by `,(0,K.jsx)(t.code,{children:`sortValue`}),`,
or by `,(0,K.jsx)(t.code,{children:`row[key]`}),`.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.code,{children:`align`}),`: `,(0,K.jsx)(t.code,{children:`start`}),`, `,(0,K.jsx)(t.code,{children:`center`}),` or `,(0,K.jsx)(t.code,{children:`end`}),`. `,(0,K.jsx)(t.code,{children:`end`}),` for numbers and dates, so the
digits line up.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.code,{children:`width`}),`: any CSS width, e.g. `,(0,K.jsx)(t.code,{children:`8rem`}),` or `,(0,K.jsx)(t.code,{children:`20%`}),`.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.code,{children:`isRowHeader`}),`: makes the column's cells `,(0,K.jsx)(t.code,{children:`<th scope="row">`}),`, the name a
row is known by. Usually the first column.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.code,{children:`footer`}),`: this column's cell in the total row, e.g. a sum. Any column
with one adds the row; put the label ("Total") on the row header column.
Hidden while there are no rows.`]}),`
`]}),(0,K.jsxs)(t.p,{children:[(0,K.jsx)(t.code,{children:`TableSort`}),` is `,(0,K.jsx)(t.code,{children:`{ key, direction }`}),`, with direction `,(0,K.jsx)(t.code,{children:`ascending`}),` or
`,(0,K.jsx)(t.code,{children:`descending`}),`.`]}),(0,K.jsxs)(t.p,{children:[(0,K.jsx)(t.code,{children:`size`}),` and `,(0,K.jsx)(t.code,{children:`density`}),` are deprecated. Table has one size, as Atlassian's
does: `,(0,K.jsx)(t.code,{children:`size="sm"`}),` (and `,(0,K.jsx)(t.code,{children:`density="sm"`}),`) renders the same table as `,(0,K.jsx)(t.code,{children:`md`}),`.
Both are still accepted for one release; drop them. The kit's rule for a
deprecated prop: it warns in the development console when it is passed a
value that is not its documented default, and a renamed prop warns
whenever it is used. So `,(0,K.jsx)(t.code,{children:`size="sm"`}),` and any `,(0,K.jsx)(t.code,{children:`density`}),` warn, and
`,(0,K.jsx)(t.code,{children:`size="md"`}),`, the default written out, is silent.`]}),(0,K.jsxs)(t.p,{children:[`With `,(0,K.jsx)(t.code,{children:`sort`}),` controlled, the table leaves the order to you. `,(0,K.jsx)(t.code,{children:`sortRows(rows, columns, sort)`}),` returns the rows in the order the table would sort them,
so you can sort every row before slicing out a page.`]}),(0,K.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,K.jsx)(t.p,{children:`Cell sizing follows the Figma library: Atlassian's dynamic table with 8px
round every cell.`}),(0,K.jsxs)(t.ul,{children:[`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`No row height, and one size.`}),` A cell has 8px padding all round
and the row is as tall as its content; rows were a fixed 48px
and 40px before, picked by `,(0,K.jsx)(t.code,{children:`density`}),` and then `,(0,K.jsx)(t.code,{children:`size`}),`, which are
deprecated.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`No row dividers.`}),` Only the 1px rule under the header and the one
that closes a table with rows, as Atlassian draws them; rows are told
apart by the hover tint and the selection fill.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`The total row has a 1px rule above it.`}),` Atlassian's table has no
total row; the rule is the header's, turned over. The table's closing
rule then sits under the total row.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`No header fill, and padded edges.`}),` The header is its labels over the
rule, as Atlassian's dynamic table. Unlike Atlassian's, the first and
last cells keep their 8px at the table's edge. The hover and selection
tints run edge to edge.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`The caption`}),` sits 24px from the top and 8px above the table, 8px in
from the edge where the cells' text starts. Its type stays the cells' size,
semibold; Atlassian's is a 20px heading.`]}),`
`]})]}),(0,K.jsxs)(_,{value:`guidelines`,children:[(0,K.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,K.jsxs)(t.p,{children:[`Use a Table for records that share their fields, when people compare them
or look one up: projects, invoices, members. Align numbers and dates to the
end, and mark the column a row is known by with `,(0,K.jsx)(t.code,{children:`isRowHeader`}),`.`]}),(0,K.jsx)(l,{do:(0,K.jsx)(i,{of:j}),doCaption:`Numbers and dates aligned to the end, in tabular figures: the digits line up column-wide.`,dont:(0,K.jsx)(i,{of:F}),dontCaption:`Aligned to the start, 9 sits under the 1 of 1,203, and the column cannot be compared at a glance.`}),(0,K.jsx)(l,{do:(0,K.jsx)(i,{of:I}),doCaption:`A row header names each row, so its checkbox reads “Select Atlas”.`,dont:(0,K.jsx)(i,{of:w}),dontCaption:`Without one, every checkbox is “Select row 1”, “Select row 2”: a screen reader user cannot tell what they select.`}),(0,K.jsxs)(t.p,{children:[(0,K.jsx)(t.strong,{children:`Sort cycles ascending, descending, off.`}),` The third click returns to the
original order, which is often the one that meant something. Uncontrolled,
the table sorts a copy: dates as dates, numbers as numbers, text by locale
with "file 2" before "file 10". Empty values sort last both ways.`]}),(0,K.jsx)(s,{of:E}),(0,K.jsxs)(t.p,{children:[`With server-side sorting, pass `,(0,K.jsx)(t.code,{children:`sort`}),` and `,(0,K.jsx)(t.code,{children:`onSortChange`}),` and hand back the
rows already sorted:`]}),(0,K.jsx)(s,{of:L}),(0,K.jsxs)(t.p,{children:[(0,K.jsx)(t.strong,{children:`Paging is not built in.`}),` Put a
`,(0,K.jsx)(t.a,{href:`?path=/docs/components-navigation-pagination--docs`,children:`Pagination`}),` under the
table and pass it one page of `,(0,K.jsx)(t.code,{children:`rows`}),`. With `,(0,K.jsx)(t.code,{children:`getRowId`}),`, selection keeps
working across pages: "Select all" adds or removes this page's rows only.`]}),(0,K.jsx)(s,{of:B}),(0,K.jsxs)(t.p,{children:[`Pass `,(0,K.jsx)(t.code,{children:`expandedIds`}),` to open rows from outside the table:`]}),(0,K.jsx)(s,{of:P}),(0,K.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,K.jsxs)(t.ul,{children:[`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`For records that do not share fields`}),`, or that are read one at a
time, like products in a shop. Use `,(0,K.jsx)(t.a,{href:`?path=/docs/components-data-display-card--docs`,children:`Cards`}),`.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`For layout.`}),` A table announces rows and columns to a screen reader;
use CSS grid to place things side by side.`]}),`
`,(0,K.jsxs)(t.li,{children:[(0,K.jsx)(t.strong,{children:`For a spreadsheet`}),`, where arrow keys move between cells and cells
are edited in place. Table is a plain table, not an ARIA grid; the kit
has no data grid yet.`]}),`
`]}),(0,K.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,K.jsxs)(t.ul,{children:[`
`,(0,K.jsxs)(t.li,{children:[`A real `,(0,K.jsx)(t.code,{children:`<table>`}),` named by its `,(0,K.jsx)(t.code,{children:`<caption>`}),`, with `,(0,K.jsx)(t.code,{children:`<th scope="col">`}),`
headers and a `,(0,K.jsx)(t.code,{children:`<th scope="row">`}),` for the row header column: screen
readers announce the column and the row for every cell.`]}),`
`,(0,K.jsxs)(t.li,{children:[`Sortable headers carry `,(0,K.jsx)(t.code,{children:`aria-sort`}),` (`,(0,K.jsx)(t.code,{children:`ascending`}),`, `,(0,K.jsx)(t.code,{children:`descending`}),` or
`,(0,K.jsx)(t.code,{children:`none`}),`); the sort control is a button inside the header.`]}),`
`,(0,K.jsxs)(t.li,{children:[`Row checkboxes are named after the row header ("Select Atlas"), or
"Select row 1" without one, counted from `,(0,K.jsx)(t.code,{children:`rows`}),` so a sort does not
rename them. The header checkbox is "Select all rows" and reports
`,(0,K.jsx)(t.code,{children:`mixed`}),` when some are selected. A selected row has `,(0,K.jsx)(t.code,{children:`aria-selected`}),`.`]}),`
`,(0,K.jsxs)(t.li,{children:[`Each expand button is named after the row header ("Expand Atlas"),
reports `,(0,K.jsx)(t.code,{children:`aria-expanded`}),`, and while open points at the content cell with
`,(0,K.jsx)(t.code,{children:`aria-controls`}),`. Enter and Space toggle it. The name stays the same open
or closed; `,(0,K.jsx)(t.code,{children:`aria-expanded`}),` carries the state.`]}),`
`,(0,K.jsx)(t.li,{children:`A row with nothing to expand has no button.`}),`
`,(0,K.jsx)(t.li,{children:`The expand column's header is "Details", visually hidden, so the column
is announced like the others.`}),`
`,(0,K.jsx)(t.li,{children:`The content cell spans every column, so it is read as one cell under its
row.`}),`
`,(0,K.jsxs)(t.li,{children:[`Each row actions button is named after the row header ("Actions for
Atlas") and reports `,(0,K.jsx)(t.code,{children:`aria-haspopup="menu"`}),`. Enter opens the menu,
Escape closes it, and focus returns to the button. A row with no items
has no button.`]}),`
`,(0,K.jsx)(t.li,{children:`The actions column's header is "Actions", visually hidden.`}),`
`,(0,K.jsxs)(t.li,{children:[`When the table is wider than its box and nothing in it takes focus, the
scroll box becomes a tab stop with a focus ring: `,(0,K.jsx)(t.code,{children:`role="region"`}),` named by
the caption, which the browser scrolls with the arrow keys. A table that
fits, or whose cells hold a control (a sort button, a checkbox), gets no
extra tab stop.`]}),`
`,(0,K.jsxs)(t.li,{children:[`With `,(0,K.jsx)(t.code,{children:`isResizable`}),`, each column header holds a focusable
`,(0,K.jsx)(t.code,{children:`role="separator"`}),` with `,(0,K.jsx)(t.code,{children:`aria-orientation="vertical"`}),`, named "Resize"
and the header ("Resize Owner"), or the column's `,(0,K.jsx)(t.code,{children:`key`}),` when the header
is not plain text. Its `,(0,K.jsx)(t.code,{children:`aria-valuenow`}),` is the column's
width in px, between `,(0,K.jsx)(t.code,{children:`aria-valuemin`}),` 48 and `,(0,K.jsx)(t.code,{children:`aria-valuemax`}),` 1200.`]}),`
`,(0,K.jsx)(t.li,{children:`Arrow Right widens the column 16px and Arrow Left narrows it (mirrored
in right-to-left); Home sets the narrowest width and End the widest.
Dragging the handle does the same with a pointer.`}),`
`,(0,K.jsxs)(t.li,{children:[`The total row is in a `,(0,K.jsx)(t.code,{children:`<tfoot>`}),` with one cell per column, so each total
is announced under its column; the label column is its row header.`]}),`
`]})]})]})]})}function G(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,K.jsx)(t,{...e,children:(0,K.jsx)(W,{...e})}):W(e)}var K;function q(){return(q=e((()=>{K=t(),r(),a(),d(),p(),h(),f(),m(),b(),S()})))()}q();export{G as default};