import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,i as a,n as o,s}from"./blocks-BCmbfwq7.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./Breadcrumbs.stories-Caocrm7u.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:p}),`
`,(0,g.jsx)(t.h1,{id:`breadcrumbs`,children:`Breadcrumbs`}),`
`,(0,g.jsxs)(t.p,{children:[`The trail from the top of a hierarchy down to the current page, each
step a link back up. Spec:
`,(0,g.jsx)(t.a,{href:`https://www.uiguideline.com/components/breadcrumbs`,rel:`nofollow`,children:`uiguideline.com/components/breadcrumbs`}),`.
A plain element.`]}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Part`}),(0,g.jsx)(t.th,{children:`What it is`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Link`})}),(0,g.jsxs)(t.td,{children:[`Each level above the current page, `,(0,g.jsx)(t.code,{children:`--muted-foreground`}),`, underlined on hover.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Separator`})}),(0,g.jsx)(t.td,{children:`A chevron (or any node), decorative.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Current page`})}),(0,g.jsxs)(t.td,{children:[`The last item, `,(0,g.jsx)(t.code,{children:`--foreground`}),`, medium weight, not a link.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Ellipsis`})}),(0,g.jsxs)(t.td,{children:[`With `,(0,g.jsx)(t.code,{children:`maxItems`}),`, a button standing in for the collapsed middle.`]})]})]})]}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`items`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`{ label, href?, render? }[]`})}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Required. Top level first; the last is the current page.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`maxItems`})}),(0,g.jsx)(t.td,{children:`number (2 or more)`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Collapse the middle beyond this many.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`separator`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`chevron`}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`size`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`sm`}),`, `,(0,g.jsx)(t.code,{children:`md`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`md`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`body-sm`}),` or `,(0,g.jsx)(t.code,{children:`body`}),`.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`aria-label`})}),(0,g.jsx)(t.td,{children:`string`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`Breadcrumb`})}),(0,g.jsx)(t.td,{children:`The landmark's name.`})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`render`}),` on an item replaces its `,(0,g.jsx)(t.code,{children:`<a>`}),`, e.g. with a router's link. Every
other `,(0,g.jsx)(t.code,{children:`<nav>`}),` attribute passes through.`]}),`
`,(0,g.jsx)(a,{of:l}),`
`,(0,g.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Muted links, underlined on hover.`}),` The trail is obviously a row of
links, so it can drop the permanent underline that links in running
text keep; the current page stands out by colour and weight instead.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`The current page is not a link.`}),` A link to the page you are on does
nothing useful and reads as one more place to go.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`A `,(0,g.jsx)(t.code,{children:`<nav>`}),` landmark named "Breadcrumb", around an ordered list: screen
readers announce "list, 4 items" and the position of each.`]}),`
`,(0,g.jsxs)(t.li,{children:[`The last item has `,(0,g.jsx)(t.code,{children:`aria-current="page"`}),`.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Separators are `,(0,g.jsx)(t.code,{children:`aria-hidden`}),`, so they are not read between items.`]}),`
`,(0,g.jsx)(t.li,{children:`The ellipsis is a button named "Show 3 more". Pressing it expands the
trail and moves focus to the first item it revealed.`}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};