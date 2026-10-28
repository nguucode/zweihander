import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-CaB3w3bd.js";import{i as s,n as c,r as l,t as u}from"./TopBar.stories-BgBkQsIf.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h1,{id:`top-bar`,children:`Top Bar`}),`
`,(0,p.jsxs)(t.p,{children:[`The bar above the page: `,(0,p.jsx)(t.code,{children:`start`}),`, a middle and `,(0,p.jsx)(t.code,{children:`end`}),` slots, and `,(0,p.jsx)(t.code,{children:`TopBarNav`}),`
for navigation links across it. One of the three pieces the
`,(0,p.jsx)(t.a,{href:`?path=/docs/templates-application-ui-app-shell--docs`,children:`App Shell`}),` template places; inside
one it also shows the shell's `,(0,p.jsx)(t.code,{children:`brand`}),`. It was `,(0,p.jsx)(t.code,{children:`AppHeader`}),` (and
`,(0,p.jsx)(t.code,{children:`TopBarNav`}),` was `,(0,p.jsx)(t.code,{children:`AppNav`}),`).`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/top-bar.json
`})}),`
`,(0,p.jsx)(t.h2,{id:`search-and-actions`,children:`Search and actions`}),`
`,(0,p.jsx)(a,{of:u}),`
`,(0,p.jsx)(t.h2,{id:`top-navigation`,children:`Top navigation`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`TopBarNav`}),` takes `,(0,p.jsx)(t.code,{children:`items`}),` (`,(0,p.jsx)(t.code,{children:`{ label, href }[]`}),`) and `,(0,p.jsx)(t.code,{children:`currentHref`}),`. Links
that do not fit scroll sideways, so on a phone they stay in the bar.`]}),`
`,(0,p.jsx)(a,{of:l}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`Prop`}),(0,p.jsx)(t.th,{children:`Values`}),(0,p.jsx)(t.th,{children:`Default`}),(0,p.jsx)(t.th,{})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`start`})}),(0,p.jsx)(t.td,{children:`node`}),(0,p.jsx)(t.td,{children:`–`}),(0,p.jsx)(t.td,{children:`Breadcrumbs, or TopBarNav links.`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`children`})}),(0,p.jsx)(t.td,{children:`node`}),(0,p.jsx)(t.td,{children:`–`}),(0,p.jsx)(t.td,{children:`The middle, e.g. a wide search field.`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`end`})}),(0,p.jsx)(t.td,{children:`node`}),(0,p.jsx)(t.td,{children:`–`}),(0,p.jsx)(t.td,{children:`Search, notifications, the account menu.`})]})]})]}),`
`,(0,p.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`The bar is one row, `,(0,p.jsx)(t.code,{children:`--control-md`}),` plus two `,(0,p.jsx)(t.code,{children:`--space-cluster`}),` tall, so
it follows density. Its fill and edge come from the App Shell's top cell
(solid or transparent), not from the bar.`]}),`
`,(0,p.jsxs)(t.li,{children:[`In the shell's top-bar layout with a sidebar, the brand takes a cell as
wide as the sidebar (`,(0,p.jsx)(t.code,{children:`--sidebar-width`}),`), so the logo sits where it sits
in the sidebar layout.`]}),`
`,(0,p.jsx)(t.li,{children:`Breakpoints read the container, which in an app is the shell.`}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`The bar is a `,(0,p.jsx)(t.code,{children:`header`}),`; inside an App Shell it is the page's banner.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`TopBarNav`}),` is a `,(0,p.jsx)(t.code,{children:`nav`}),` named "Main"; the current page has
`,(0,p.jsx)(t.code,{children:`aria-current="page"`}),` and is shown by more than colour.`]}),`
`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),r(),o(),s()})))()}m();export{f as default};