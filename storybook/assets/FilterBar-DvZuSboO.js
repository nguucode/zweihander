import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./FilterBar.stories-B-GpYpnD.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(t.h1,{id:`filter-bar`,children:`Filter Bar`}),`
`,(0,_.jsx)(t.p,{children:`Search and filters above a list or table, with the filters in force shown
as chips that each remove on their own, and Clear all. After SAP Fiori List
Report (filter bar), Carbon Filtering and Polaris Index table.`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/filter-bar.json
`})}),`
`,(0,_.jsxs)(t.p,{children:[`The pattern owns no data: it lays out the controls you pass and renders the
`,(0,_.jsx)(t.code,{children:`applied`}),` list you keep. Choose how each filter applies with the component
you put in `,(0,_.jsx)(t.code,{children:`filters`}),`.`]}),`
`,(0,_.jsx)(t.h2,{id:`applied-at-once`,children:`Applied at once`}),`
`,(0,_.jsxs)(t.p,{children:[`A button per field opens a `,(0,_.jsx)(t.a,{href:`?path=/docs/navigation-menu--docs`,children:`Menu`}),` of
checkbox items; each tick applies straight away and adds a chip. Use it for
the few fields people filter by most, with short lists of values.`]}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`applied-in-a-batch`,children:`Applied in a batch`}),`
`,(0,_.jsxs)(t.p,{children:[`More filters opens a `,(0,_.jsx)(t.a,{href:`?path=/docs/overlays-drawer--docs`,children:`Drawer`}),` holding a
draft: nothing changes until Apply, and Cancel drops the draft. Use it for
the long tail of fields, or when each change is slow to run (a server query
over a large ledger).`]}),`
`,(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`empty`,children:`Empty`}),`
`,(0,_.jsx)(t.p,{children:`With nothing applied there is no chip row and no Clear all.`}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`in-a-table-toolbar`,children:`In a table toolbar`}),`
`,(0,_.jsxs)(t.p,{children:[`Put it first inside a `,(0,_.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-data-table-page--docs`,children:`TableToolbar`}),`:
it takes the free space, the page's main action stays at the end, and the
toolbar swaps it for the selection's actions while rows are selected.`]}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(a,{of:l}),`
`,(0,_.jsxs)(t.p,{children:[`Every other `,(0,_.jsx)(t.code,{children:`<div>`}),` attribute passes through.`]}),`
`,(0,_.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Two rows.`}),` The controls on top; the chips and Clear all under them,
only while something is applied.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Everything wraps, nothing squeezes.`}),` On a phone the search takes its
own line and the field buttons flow under it; chips wrap onto more lines.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`A long value truncates inside its chip`}),` with an ellipsis, rather than
widen the page. The remove button keeps the full name.`]}),`
`]}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`The bar is a `,(0,_.jsx)(t.code,{children:`search`}),` landmark named "Filters"; pass `,(0,_.jsx)(t.code,{children:`aria-label`}),` to
name it after what it filters, e.g. "Invoice filters", when a page has
more than one.`]}),`
`,(0,_.jsx)(t.li,{children:`The chips are a list named "Applied filters", so a screen reader says how
many are in force. Each remove button is named after its chip, e.g.
"Remove Status: Overdue".`}),`
`,(0,_.jsx)(t.li,{children:`Removing a chip moves focus to the chip that takes its place, or the one
before; removing the last one, or Clear all, moves it to the first
control, usually the search. Focus never drops to the page.`}),`
`,(0,_.jsx)(t.li,{children:`Field buttons say only the field ("Status"); what is chosen is read from
the chips and from the checked items in the menu.`}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),s(),p()})))()}v();export{g as default};