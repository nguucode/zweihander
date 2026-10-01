import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./Pagination.stories-YqO0PcRc.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{of:c}),`
`,(0,v.jsx)(t.h1,{id:`pagination`,children:`Pagination`}),`
`,(0,v.jsxs)(t.p,{children:[`Moves through a long list one page at a time: previous, next, and the
page numbers around the current one. Spec:
`,(0,v.jsx)(t.a,{href:`https://www.uiguideline.com/components/pagination`,rel:`nofollow`,children:`uiguideline.com/components/pagination`}),`.
A plain element.`]}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Part`}),(0,v.jsx)(t.th,{children:`What it is`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Previous / Next`})}),(0,v.jsx)(t.td,{children:`Chevron buttons, disabled at either end.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Page`})}),(0,v.jsx)(t.td,{children:`A square ghost button with the number, tabular figures.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Current page`})}),(0,v.jsxs)(t.td,{children:[`The only solid: `,(0,v.jsx)(t.code,{children:`--primary`}),` behind `,(0,v.jsx)(t.code,{children:`--primary-foreground`}),`.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Ellipsis`})}),(0,v.jsx)(t.td,{children:`"…" where two or more pages are skipped. Decorative.`})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Prop`}),(0,v.jsx)(t.th,{children:`Values`}),(0,v.jsx)(t.th,{children:`Default`}),(0,v.jsx)(t.th,{})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`totalPages`})}),(0,v.jsx)(t.td,{children:`number`}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsx)(t.td,{children:`Required.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`page`}),`, `,(0,v.jsx)(t.code,{children:`defaultPage`}),`, `,(0,v.jsx)(t.code,{children:`onPageChange`})]}),(0,v.jsx)(t.td,{children:`number (1-based)`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`1`})}),(0,v.jsx)(t.td,{children:`Controlled or uncontrolled.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`siblingCount`})}),(0,v.jsx)(t.td,{children:`number`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`1`})}),(0,v.jsx)(t.td,{children:`Pages shown either side of the current one.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`boundaryCount`})}),(0,v.jsx)(t.td,{children:`number`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`1`})}),(0,v.jsx)(t.td,{children:`Pages always shown at each end.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`size`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`sm`}),`, `,(0,v.jsx)(t.code,{children:`md`})]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`md`})}),(0,v.jsx)(t.td,{children:`32 or 40px controls.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`getHref`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`(page) => string`})}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsx)(t.td,{children:`Render links instead of buttons.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`aria-label`})}),(0,v.jsx)(t.td,{children:`string`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`Pagination`})}),(0,v.jsx)(t.td,{children:`The landmark's name.`})]})]})]}),`
`,(0,v.jsxs)(t.p,{children:[`Every other `,(0,v.jsx)(t.code,{children:`<nav>`}),` attribute passes through. `,(0,v.jsx)(t.code,{children:`paginationItems(page, total, siblings, boundary)`}),` is exported too, for building your own.`]}),`
`,(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`The width stays put.`}),` First and last page are always shown, the
current page keeps a sibling each side, and a "…" appears only where
it hides two or more pages: a single hidden page is shown instead,
since "…" would take the same room. The number of controls stays the
same as you move through the middle, so the Next button does not jump.`]}),`
`,(0,v.jsx)(o,{of:f}),`
`]}),`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Links when pages have URLs.`}),` With `,(0,v.jsx)(t.code,{children:`getHref`}),` each page is an `,(0,v.jsx)(t.code,{children:`<a>`}),`,
so it can be opened in a new tab and shared; without it, buttons.`]}),`
`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(o,{of:m}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsx)(o,{of:p}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`A `,(0,v.jsx)(t.code,{children:`<nav>`}),` landmark named "Pagination", around a list.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Each page control is named "Page 3"; the current one has
`,(0,v.jsx)(t.code,{children:`aria-current="page"`}),`. Previous and next are named "Previous page" and
"Next page", and are disabled (or, as links, lose their `,(0,v.jsx)(t.code,{children:`href`}),`) at the
ends.`]}),`
`,(0,v.jsxs)(t.li,{children:[`The ellipsis is `,(0,v.jsx)(t.code,{children:`aria-hidden`}),`: the page names already say which
numbers are there.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Controls are 32px (`,(0,v.jsx)(t.code,{children:`sm`}),`) or 40px (`,(0,v.jsx)(t.code,{children:`md`}),`), and grow to 44px on coarse
pointers.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),i(),l()})))()}y();export{_ as default};