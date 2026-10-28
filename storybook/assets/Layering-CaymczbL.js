import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-CaB3w3bd.js";import{n as s,r as c,t as l}from"./Layering.stories-65mfJJ_L.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(t.h1,{id:`layering`,children:`Layering`}),`
`,(0,f.jsx)(t.p,{children:`Four layers for everything that leaves the page flow. A component picks
the layer by what it is, never by trying a bigger number.`}),`
`,(0,f.jsx)(a,{of:s}),`
`,(0,f.jsx)(t.h2,{id:`one-layer-for-every-overlay`,children:`One layer for every overlay`}),`
`,(0,f.jsxs)(t.p,{children:[`Popovers, menus, listboxes, date pickers, modals and drawers all share
`,(0,f.jsx)(t.code,{children:`--layer-overlay`}),`. They are portalled to the end of `,(0,f.jsx)(t.code,{children:`<body>`}),`, so at an equal
z-index the one opened last paints on top: a Select opened inside a Modal
lands above the Modal without either knowing about the other. Giving the
Modal a higher layer would break exactly that case.`]}),`
`,(0,f.jsx)(t.p,{children:`Tooltips sit one layer up because they can belong to anything, including a
trigger inside an open overlay. Toasts sit above everything: a toast raised
while a modal is open still has to be read.`}),`
`,(0,f.jsx)(t.h2,{id:`local-z-index`,children:`Local z-index`}),`
`,(0,f.jsxs)(t.p,{children:[`A value used only to order parts inside one component (a table's sticky
header at `,(0,f.jsx)(t.code,{children:`1`}),`, the tab indicator at `,(0,f.jsx)(t.code,{children:`-1`}),`) is local and stays a plain number.
Keep these at single digits so they stay well below `,(0,f.jsx)(t.code,{children:`--layer-sticky`}),`.`]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),r(),o(),c()})))()}p();export{d as default};