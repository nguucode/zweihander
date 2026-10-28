import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-CaB3w3bd.js";import{i as s,n as c,r as l,t as u}from"./AppContent.stories-D20rkTt6.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`app-content`,children:`App Content`}),`
`,(0,p.jsxs)(t.p,{children:[`The page region of an app: the `,(0,p.jsx)(t.code,{children:`main`}),` landmark. One of the three pieces
the `,(0,p.jsx)(t.a,{href:`?path=/docs/templates-application-ui-app-shell--docs`,children:`App Shell`}),` template places;
the shell puts it around its children, so you rarely render it yourself.
It reads the shell's grid and canvas, so it is not used on its own.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/app-content.json
`})}),`
`,(0,p.jsx)(t.h2,{id:`flat`,children:`Flat`}),`
`,(0,p.jsxs)(t.p,{children:[`The Theme's `,(0,p.jsx)(t.code,{children:`contentStyle="flat"`}),` (the default): one card surface, inset
8px from the shell's edges at every density. Blocks inside are
`,(0,p.jsx)(t.a,{href:`?path=/docs/components-data-display-card--docs`,children:`Cards`}),` with
`,(0,p.jsx)(t.code,{children:`appearance="surface"`}),`, which become sections ruled off at the top.`]}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`on-the-canvas`,children:`On the canvas`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`contentStyle="card"`}),`: no surface; the page sits on the canvas and each
surface Card is raised.`]}),`
`,(0,p.jsx)(a,{of:l}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsxs)(t.p,{children:[`Any `,(0,p.jsx)(t.code,{children:`main`}),` attribute; the App Shell passes the `,(0,p.jsx)(t.code,{children:`id`}),` its skip link targets.
`,(0,p.jsx)(t.code,{children:`aside`}),` takes a column for beside the page, in an `,(0,p.jsx)(t.code,{children:`aside`}),` landmark named by
`,(0,p.jsx)(t.code,{children:`asideLabel`}),`; the App Shell passes both through
(`,(0,p.jsx)(t.a,{href:`?path=/docs/templates-application-ui-app-shell--docs`,children:`With an aside`}),`).`]}),`
`,(0,p.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Below 48rem the flat surface drops its inset, edge and rounding and goes
flush.`}),`
`,(0,p.jsxs)(t.li,{children:[`The page padding is `,(0,p.jsx)(t.code,{children:`--space-container`}),`, `,(0,p.jsx)(t.code,{children:`--space-section`}),` from 64rem.
App Content sets no maximum width: to cap and centre a page, put a
`,(0,p.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-container--docs`,children:`Container`}),` inside it.`]}),`
`,(0,p.jsx)(t.li,{children:`Only the page scrolls; the shell's other pieces stay put. With an aside,
from 80rem the page and the aside scroll on their own, side by side;
under 80rem the aside follows the page and they scroll as one.`}),`
`,(0,p.jsxs)(t.li,{children:[`The surface restates `,(0,p.jsx)(t.code,{children:`--background`}),` as `,(0,p.jsx)(t.code,{children:`--card`}),` (flat) or as the
canvas's solid colour (card), so components that draw "the surface under
me" match it.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`The `,(0,p.jsx)(t.code,{children:`main`}),` landmark, focusable (`,(0,p.jsx)(t.code,{children:`tabIndex={-1}`}),`) so the shell's skip
link can move focus to it.`]}),`
`,(0,p.jsxs)(t.li,{children:[`An aside is a `,(0,p.jsx)(t.code,{children:`complementary`}),` landmark after `,(0,p.jsx)(t.code,{children:`main`}),`, focusable so a
keyboard can scroll it.`]}),`
`,(0,p.jsxs)(t.li,{children:[`On a canvas, text takes the canvas text colours (the Theme's
`,(0,p.jsx)(t.code,{children:`canvas-foreground`}),` and `,(0,p.jsx)(t.code,{children:`canvas-muted-foreground`}),` tokens); the kit checks
them for its own canvases.`]}),`
`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),r(),o(),s()})))()}m();export{f as default};