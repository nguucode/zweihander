import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,i as l,n as u,r as d,t as f}from"./VerticalNav.stories-D48MSCPh.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(t.h1,{id:`vertical-nav`,children:`Vertical Nav`}),`
`,(0,h.jsxs)(t.p,{children:[`Secondary navigation inside a page: the sections of Settings, or the
parts of a long record, as a column of links beside the content. The
app's own navigation is the `,(0,h.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-nav-sidebar--docs`,children:`Nav Sidebar`}),`;
this one has no rail, no collapse and no fill, and sits on the page.
After Tailwind UI Application UI, Navigation: Vertical navigation.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/vertical-nav.json
`})}),`
`,(0,h.jsx)(t.h2,{id:`with-icons`,children:`With icons`}),`
`,(0,h.jsxs)(t.p,{children:[`An icon before each label helps when the reader comes back often and
scans by shape. Use icons on every item or on none. A count after the
label is information (how many members), so it is a secondary
`,(0,h.jsx)(t.a,{href:`?path=/docs/atomic-elements-badge--docs`,children:`Badge`}),`, not the Nav Sidebar's
red one for unread items.`]}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.h2,{id:`grouped`,children:`Grouped`}),`
`,(0,h.jsx)(t.p,{children:`Past seven or so sections, name groups of them. Ungrouped items before
the first group form a list of their own.`}),`
`,(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsx)(a,{of:d}),`
`,(0,h.jsxs)(t.p,{children:[`Every other `,(0,h.jsx)(t.code,{children:`<nav>`}),` attribute passes through.`]}),`
`,(0,h.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`No width of its own.`}),` It fills the column the page gives it; the
page decides the column's width and what happens on a narrow screen
(the Settings template stacks it above the content).`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Long labels wrap`}),` rather than truncate: a cut-off section name hides
which section it is. A word with no spaces breaks anywhere.`]}),`
`,(0,h.jsxs)(t.li,{children:[`Rows are `,(0,h.jsx)(t.code,{children:`--control-md`}),` tall at least, as in the Nav Sidebar, and
`,(0,h.jsx)(t.code,{children:`--target-coarse`}),` under a coarse pointer.`]}),`
`]}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`It is a `,(0,h.jsx)(t.code,{children:`nav`}),` landmark and needs an `,(0,h.jsx)(t.code,{children:`aria-label`}),` ("Settings"): the
app's own navigation is already a navigation landmark, so the two need
different names.`]}),`
`,(0,h.jsxs)(t.li,{children:[`The current section has `,(0,h.jsx)(t.code,{children:`aria-current="page"`}),` as well as the selected
fill and medium weight, so it is not shown by color alone.`]}),`
`,(0,h.jsx)(t.li,{children:`A group label names its list ("Workspace, list, 4 items") and is not a
heading, so it cannot break the page's heading outline.`}),`
`,(0,h.jsx)(t.li,{children:`A count joins the link's name after a comma ("Members, 12").
Icons are decorative and hidden from assistive tech.`}),`
`,(0,h.jsx)(t.li,{children:`Tab moves down the links in order; there are no other stops.`}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),s(),c()})))()}g();export{m as default};