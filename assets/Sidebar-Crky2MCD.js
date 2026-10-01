import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,i as l,n as u,r as d,t as f}from"./Sidebar.stories-CV3cu-s_.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:l}),`
`,(0,h.jsx)(t.h1,{id:`sidebar`,children:`Sidebar`}),`
`,(0,h.jsxs)(t.p,{children:[`The app's main navigation, down the side of the screen: a header,
links in named groups, and a footer. It can collapse to an icon rail.
Our own spec: uiguideline.com has no page for it. A plain element; the
rail's labels use `,(0,h.jsx)(t.a,{href:`?path=/docs/components-overlays-tooltip--docs`,children:`Tooltip`}),`.`]}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Part`}),(0,h.jsx)(t.th,{children:`What it is`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.strong,{children:`Header`})}),(0,h.jsx)(t.td,{children:`Optional: the product name, a workspace switcher. The collapse button sits here.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.strong,{children:`Item`})}),(0,h.jsx)(t.td,{children:`Icon, label and optional badge, a 40px row (44px on touch).`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.strong,{children:`Current item`})}),(0,h.jsxs)(t.td,{children:[`Lifted onto `,(0,h.jsx)(t.code,{children:`--background`}),` with a `,(0,h.jsx)(t.code,{children:`--control-border`}),` edge and medium weight, like a selected pill tab.`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.strong,{children:`Group`})}),(0,h.jsx)(t.td,{children:`A small muted label over its items. In the rail, a rule.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.strong,{children:`Footer`})}),(0,h.jsx)(t.td,{children:`Optional, pinned to the bottom: the signed-in user, help. Hidden in the rail.`})]})]})]}),`
`,(0,h.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Prop`}),(0,h.jsx)(t.th,{children:`Values`}),(0,h.jsx)(t.th,{children:`Default`}),(0,h.jsx)(t.th,{})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`items`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`SidebarEntry[]`})}),(0,h.jsx)(t.td,{children:`–`}),(0,h.jsxs)(t.td,{children:[`Required. Items `,(0,h.jsx)(t.code,{children:`{ label, href, icon?, badge?, render? }`}),` and groups `,(0,h.jsx)(t.code,{children:`{ type: 'group', label, items }`}),`.`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`currentHref`})}),(0,h.jsx)(t.td,{children:`string`}),(0,h.jsx)(t.td,{children:`–`}),(0,h.jsxs)(t.td,{children:[`That item gets `,(0,h.jsx)(t.code,{children:`aria-current="page"`}),`.`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`header`}),`, `,(0,h.jsx)(t.code,{children:`footer`})]}),(0,h.jsx)(t.td,{children:`node`}),(0,h.jsx)(t.td,{children:`–`}),(0,h.jsx)(t.td,{})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`isCollapsed`}),`, `,(0,h.jsx)(t.code,{children:`defaultCollapsed`}),`, `,(0,h.jsx)(t.code,{children:`onCollapsedChange`})]}),(0,h.jsx)(t.td,{children:`boolean`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`false`})}),(0,h.jsx)(t.td,{children:`Controlled or uncontrolled.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`isCollapsible`})}),(0,h.jsx)(t.td,{children:`boolean`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`false`})}),(0,h.jsx)(t.td,{children:`Show the collapse button.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`aria-label`})}),(0,h.jsx)(t.td,{children:`string`}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`Main`})}),(0,h.jsx)(t.td,{children:`The landmark's name.`})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`render`}),` on an item replaces its `,(0,h.jsx)(t.code,{children:`<a>`}),`, e.g. with a router's link. Every
other `,(0,h.jsx)(t.code,{children:`<nav>`}),` attribute passes through.`]}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`The current page is lifted, not just tinted.`}),` The sidebar sits on
`,(0,h.jsx)(t.code,{children:`--surface-subtle`}),`, one grey step from a hover fill, so the current
item gets the selected-pill treatment used by Tabs: background, edge
and weight.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Group names are labels, not headings.`}),` They name their list
("Projects, list, 3 items") without adding `,(0,h.jsx)(t.code,{children:`<h2>`}),`s that would compete
with the page's own outline.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`The rail needs an icon on every item.`}),` Collapsed, the label moves
into a tooltip on hover and focus, and stays the link's name.`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(o,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`A `,(0,h.jsx)(t.code,{children:`<nav>`}),` landmark named "Main". The current item has
`,(0,h.jsx)(t.code,{children:`aria-current="page"`}),`.`]}),`
`,(0,h.jsxs)(t.li,{children:[`Each group's label names its list through `,(0,h.jsx)(t.code,{children:`aria-labelledby`}),`, and
keeps doing so in the rail, where it is only visually hidden.`]}),`
`,(0,h.jsxs)(t.li,{children:[`In the rail each link keeps its name through `,(0,h.jsx)(t.code,{children:`aria-label`}),`, badge
included ("Inbox, 12"), and a tooltip shows the same text on hover
and keyboard focus.`]}),`
`,(0,h.jsxs)(t.li,{children:[`The collapse button is named "Collapse sidebar" / "Expand sidebar"
and carries `,(0,h.jsx)(t.code,{children:`aria-expanded`}),`.`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),i(),c()})))()}g();export{m as default};