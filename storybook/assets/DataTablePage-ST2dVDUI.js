import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-CaB3w3bd.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./DataTablePage.stories-DCrEXw00.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(t.h1,{id:`data-table-page`,children:`Data Table Page`}),`
`,(0,h.jsxs)(t.p,{children:[`A list screen: search and filters above a `,(0,h.jsx)(t.a,{href:`?path=/docs/components-data-display-table--docs`,children:`Table`}),`,
what is shown and the pages below it, and, while rows are selected, what
you can do with them. Two pieces, `,(0,h.jsx)(t.code,{children:`TableToolbar`}),` (with
`,(0,h.jsx)(t.code,{children:`TableToolbarGroup`}),`) and `,(0,h.jsx)(t.code,{children:`TableFooter`}),`, around the kit's Table, Search,
Select and Pagination. Filtering, paging and the data are yours: the
stories show one way to wire them.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/data-table-page.json
`})}),`
`,(0,h.jsx)(t.h2,{id:`toolbar-and-pagination`,children:`Toolbar and pagination`}),`
`,(0,h.jsxs)(t.p,{children:[`The footer holds a Pagination given `,(0,h.jsx)(t.code,{children:`totalItems`}),`, so it shows the rows on
screen ("6–10 of 12") and a "Rows per page" select from
`,(0,h.jsx)(t.code,{children:`pageSizeOptions`}),`. Any lone child spans the footer, so Pagination's summary
leads and the pages end the bar; the wrapping inside is Pagination's own.`]}),`
`,(0,h.jsx)(a,{of:s}),`
`,(0,h.jsx)(t.h2,{id:`bulk-actions`,children:`Bulk actions`}),`
`,(0,h.jsxs)(t.p,{children:[`With `,(0,h.jsx)(t.code,{children:`selectedCount`}),` above zero the toolbar swaps its tools for the
selection's actions and a "Clear selection" button, on the accent
surface so the change of mode is visible.`]}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`empty-result`,children:`Empty result`}),`
`,(0,h.jsxs)(t.p,{children:[`When nothing matches, the Table's `,(0,h.jsx)(t.code,{children:`emptyState`}),` says so and offers the way
back; the footer goes away.`]}),`
`,(0,h.jsx)(a,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`TableToolbar`})}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Prop`}),(0,h.jsx)(t.th,{children:`Values`}),(0,h.jsx)(t.th,{children:`Default`}),(0,h.jsx)(t.th,{})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`children`})}),(0,h.jsx)(t.td,{children:`node`}),(0,h.jsx)(t.td,{children:`–`}),(0,h.jsx)(t.td,{children:`Search, filters, the primary action.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`selectedCount`})}),(0,h.jsx)(t.td,{children:`number`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`0`})}),(0,h.jsx)(t.td,{children:`From 1, the selection bar replaces the children.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`selectionActions`})}),(0,h.jsx)(t.td,{children:`node`}),(0,h.jsx)(t.td,{children:`–`}),(0,h.jsx)(t.td,{})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`onClearSelection`})}),(0,h.jsx)(t.td,{children:`function`}),(0,h.jsx)(t.td,{children:`–`}),(0,h.jsx)(t.td,{children:`Shows "Clear selection".`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`selectionLabel`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`(n) => string`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`"{n} selected"`})}),(0,h.jsx)(t.td,{})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`TableToolbarGroup`}),` wraps the part that should take the free space and
wrap first, usually the search and filters.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`TableFooter`}),` takes, as children, usually a Pagination with `,(0,h.jsx)(t.code,{children:`totalItems`}),`
and `,(0,h.jsx)(t.code,{children:`pageSizeOptions`}),`. Its own `,(0,h.jsx)(t.code,{children:`summary`}),` slot is for a footer without
Pagination's summary, such as "12 projects" on a list that fits one page;
do not pass both, or the count is shown twice.`]}),`
`,(0,h.jsx)(a,{of:c}),`
`,(0,h.jsx)(t.h2,{id:`behaviour-to-copy`,children:`Behaviour to copy`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Rows per page keeps the reader in place.`}),` Pagination moves to the page
holding the first row that was on screen and reports it through
`,(0,h.jsx)(t.code,{children:`onPageChange`}),`; keep `,(0,h.jsx)(t.code,{children:`page`}),` and `,(0,h.jsx)(t.code,{children:`pageSize`}),` in your state.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Filtering returns to page 1.`}),` A new query on page 3 would otherwise
show an empty page, or a page the reader never asked for.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Selection is by id`}),`, so it survives sorting and paging (Table's
`,(0,h.jsx)(t.code,{children:`getRowId`}),`), and an action clears it once it has been applied.`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`No breakpoints: both bars are flex rows that wrap, so they adapt to the
width of their container, not the viewport.`}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`TableToolbarGroup`}),` grows from 16rem and wraps first. On a phone the
search takes its own line and the filters and the primary action flow
under it, instead of anything shrinking below use.`]}),`
`,(0,h.jsx)(t.li,{children:`In selection mode the actions are pushed to the end of the bar and drop
under the count when they no longer fit.`}),`
`,(0,h.jsx)(t.li,{children:`The footer puts the summary at the start and the pages and rows-per-page
select at the end; when they do not fit, they wrap under the summary.`}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`The selection count is a polite status line that is always in the page,
so "2 selected" is announced as it changes, and silence when it clears.`}),`
`,(0,h.jsx)(t.li,{children:`The footer's "6–10 of 12" is Pagination's own status line, inside the
pages landmark ("Projects pages"), so a new page or page size is
announced too.`}),`
`,(0,h.jsx)(t.li,{children:`Search and the status filter are named ("Search projects", "Status")
without visible labels, since the table's caption and placeholder make
their purpose clear on screen.`}),`
`,(0,h.jsx)(t.li,{children:`The empty state is a heading inside the table's body, so a screen reader
reaching the table hears why it is empty.`}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),o(),u()})))()}g();export{m as default};