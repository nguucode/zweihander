import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,n as a,s as o}from"./blocks-BCmbfwq7.js";import{a as s,i as c,n as l,r as u,t as d}from"./DataTablePage.stories-B4496wWm.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:l}),`
`,(0,m.jsx)(t.h1,{id:`data-table-page`,children:`Data Table Page`}),`
`,(0,m.jsxs)(t.p,{children:[`A list screen: search and filters above a `,(0,m.jsx)(t.a,{href:`?path=/docs/components-data-display-table--docs`,children:`Table`}),`,
what is shown and the pages below it, and, while rows are selected, what
you can do with them. Two pieces, `,(0,m.jsx)(t.code,{children:`TableToolbar`}),` (with
`,(0,m.jsx)(t.code,{children:`TableToolbarGroup`}),`) and `,(0,m.jsx)(t.code,{children:`TableFooter`}),`, around the kit's Table, Search,
Select and Pagination. Filtering, paging and the data are yours: the
stories show one way to wire them.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/data-table-page.json
`})}),`
`,(0,m.jsx)(t.h2,{id:`toolbar-and-pagination`,children:`Toolbar and pagination`}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`bulk-actions`,children:`Bulk actions`}),`
`,(0,m.jsxs)(t.p,{children:[`With `,(0,m.jsx)(t.code,{children:`selectedCount`}),` above zero the toolbar swaps its tools for the
selection's actions and a "Clear selection" button, on the accent
surface so the change of mode is visible.`]}),`
`,(0,m.jsx)(a,{of:d}),`
`,(0,m.jsx)(t.h2,{id:`empty-result`,children:`Empty result`}),`
`,(0,m.jsxs)(t.p,{children:[`When nothing matches, the Table's `,(0,m.jsx)(t.code,{children:`emptyState`}),` says so and offers the way
back; the footer goes away.`]}),`
`,(0,m.jsx)(a,{of:u}),`
`,(0,m.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,m.jsx)(t.p,{children:(0,m.jsx)(t.strong,{children:`TableToolbar`})}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Prop`}),(0,m.jsx)(t.th,{children:`Values`}),(0,m.jsx)(t.th,{children:`Default`}),(0,m.jsx)(t.th,{})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`children`})}),(0,m.jsx)(t.td,{children:`node`}),(0,m.jsx)(t.td,{children:`–`}),(0,m.jsx)(t.td,{children:`Search, filters, the primary action.`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`selectedCount`})}),(0,m.jsx)(t.td,{children:`number`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`0`})}),(0,m.jsx)(t.td,{children:`From 1, the selection bar replaces the children.`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`selectionActions`})}),(0,m.jsx)(t.td,{children:`node`}),(0,m.jsx)(t.td,{children:`–`}),(0,m.jsx)(t.td,{})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`onClearSelection`})}),(0,m.jsx)(t.td,{children:`function`}),(0,m.jsx)(t.td,{children:`–`}),(0,m.jsx)(t.td,{children:`Shows "Clear selection".`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`selectionLabel`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`(n) => string`})}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`"{n} selected"`})}),(0,m.jsx)(t.td,{})]})]})]}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`TableToolbarGroup`}),` wraps the part that should take the free space and
wrap first, usually the search and filters.`]}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`TableFooter`}),` takes `,(0,m.jsx)(t.code,{children:`summary`}),` ("Showing 1–5 of 12") and, as children,
usually a Pagination.`]}),`
`,(0,m.jsx)(t.h2,{id:`behaviour-to-copy`,children:`Behaviour to copy`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`Filtering returns to page 1.`}),` A new query on page 3 would otherwise
show an empty page, or a page the reader never asked for.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`Selection is by id`}),`, so it survives sorting and paging (Table's
`,(0,m.jsx)(t.code,{children:`getRowId`}),`), and an action clears it once it has been applied.`]}),`
`,(0,m.jsx)(t.li,{children:`Both bars wrap: on a phone the search takes its own line and the
filters and action flow under it.`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`The selection count is a polite status line that is always in the page,
so "2 selected" is announced as it changes, and silence when it clears.`}),`
`,(0,m.jsx)(t.li,{children:`Search and the status filter are named ("Search projects", "Status")
without visible labels, since the table's caption and placeholder make
their purpose clear on screen.`}),`
`,(0,m.jsx)(t.li,{children:`The empty state is a heading inside the table's body, so a screen reader
reaching the table hears why it is empty.`}),`
`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),r(),i(),s()})))()}h();export{p as default};