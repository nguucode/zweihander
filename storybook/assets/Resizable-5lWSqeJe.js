import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{a as S,c as C,d as w,i as T,l as E,n as D,o as O,r as k,s as A,t as j,u as M}from"./Resizable.stories-DWoYUaYM.js";function N(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(i,{of:O}),`
`,(0,F.jsx)(t.h1,{id:`resizable`,children:`Resizable`}),`
`,(0,F.jsxs)(u,{children:[(0,F.jsxs)(_,{value:`overview`,children:[(0,F.jsx)(t.p,{children:`Two panes split by a handle that people drag, or move with the arrow keys,
to give one pane more room: a list beside its detail, a query above its
results.`}),(0,F.jsx)(x,{of:O}),(0,F.jsx)(t.p,{children:`Resizable is outside the 1.0 component list, so it starts as experimental.`}),(0,F.jsx)(s,{of:D}),(0,F.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,F.jsxs)(t.table,{children:[(0,F.jsx)(t.thead,{children:(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.th,{children:`Orientation`}),(0,F.jsx)(t.th,{children:`Use for`})]})}),(0,F.jsxs)(t.tbody,{children:[(0,F.jsxs)(t.tr,{children:[(0,F.jsxs)(t.td,{children:[(0,F.jsx)(t.code,{children:`horizontal`}),` (default)`]}),(0,F.jsx)(t.td,{children:`Panes side by side: a list and the record picked from it, a file tree and the file.`})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`vertical`})}),(0,F.jsx)(t.td,{children:`Panes stacked: an editor over its output, a chart over its table.`})]})]})]}),(0,F.jsx)(s,{of:A}),(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`minSize`}),` and `,(0,F.jsx)(t.code,{children:`maxSize`}),` keep the first pane between two sizes, in percent
of the whole, so neither pane can be dragged out of sight.`]}),(0,F.jsx)(s,{of:S}),(0,F.jsx)(t.p,{children:`For three panes, put a Resizable in a pane of another.`}),(0,F.jsx)(s,{of:k}),(0,F.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,F.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-js`,children:`import { Resizable } from 'zweihander/resizable'
`})}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/resizable.json
`})}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`Source: `,(0,F.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/data-display/Resizable.tsx`,rel:`nofollow`,children:`src/components/data-display/Resizable.tsx`})]}),`
`,(0,F.jsxs)(t.li,{children:[`Spec: none on uiguideline.com; after `,(0,F.jsx)(t.a,{href:`https://ui.shadcn.com/docs/components/resizable`,rel:`nofollow`,children:`shadcn/ui Resizable`}),` and the `,(0,F.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/`,rel:`nofollow`,children:`APG window splitter`})]}),`
`,(0,F.jsx)(t.li,{children:`Base UI: none; Base UI has no splitter`}),`
`,(0,F.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,F.jsxs)(_,{value:`specs`,children:[(0,F.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,F.jsx)(y,{parts:C,children:(0,F.jsx)(a,{of:j})}),(0,F.jsxs)(t.p,{children:[`The limits, `,(0,F.jsx)(t.code,{children:`minSize`}),` and `,(0,F.jsx)(t.code,{children:`maxSize`}),`, have no element of their own: they
are where the handle stops.`]}),(0,F.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,F.jsx)(g,{caption:`Every orientation`,rows:[{part:`Handle`,property:`Hit area across the line`,token:`--box-sm`},{part:`Handle`,property:`Hit area on touch screens`,token:`--target-coarse`},{part:`Handle`,property:`Line on hover and drag`,token:`--focus-width`},{part:`Handle`,property:`Focus outline offset`,token:`--focus-offset`}]}),(0,F.jsx)(t.p,{children:`The line is 1px; its hit area reaches past it on both sides, and grows
to 44px on touch screens without the line getting wider. The panes have no padding of their own: what goes in
them sets it. Sizes are percentages of the whole, so the split holds
when the window changes size.`}),(0,F.jsx)(t.h2,{id:`color`,children:`Color`}),(0,F.jsx)(g,{caption:`Handle`,rows:[{part:`Handle`,property:`Line`,token:`--border`},{part:`Handle`,property:`Line on hover and drag`,token:`--primary`},{part:`Handle`,property:`Focus outline`,token:`--ring`}]}),(0,F.jsx)(t.h2,{id:`states`,children:`States`}),(0,F.jsx)(v,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`},{label:`Dragging`,pseudo:`active`}],children:(0,F.jsx)(`div`,{style:{blockSize:80,inlineSize:160,border:`1px solid var(--border)`},children:(0,F.jsx)(M,{start:null,end:null})})}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Hover`}),` and `,(0,F.jsx)(t.strong,{children:`Dragging`}),` thicken the line to 2px `,(0,F.jsx)(t.code,{children:`--primary`}),`, as on
Table's column resize handle. The cursor turns to a resize arrow.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,F.jsx)(t.code,{children:`--ring`}),` outline, 2px outside the line.`]}),`
`,(0,F.jsx)(t.li,{children:`There is no disabled state: a split that should not move is two plain
boxes.`}),`
`]}),(0,F.jsx)(t.h2,{id:`api`,children:`API`}),(0,F.jsx)(`div`,{style:{overflowX:`auto`},children:(0,F.jsx)(o,{of:O})}),(0,F.jsx)(t.p,{children:`Resizable fills its parent: give the parent a height for side-by-side
panes, and both a height for stacked ones.`}),(0,F.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,F.jsxs)(t.p,{children:[`shadcn's Resizable is a group of any number of panels and handles
(`,(0,F.jsx)(t.code,{children:`ResizablePanelGroup`}),`, `,(0,F.jsx)(t.code,{children:`ResizablePanel`}),`, `,(0,F.jsx)(t.code,{children:`ResizableHandle`}),`). Zweihänder
takes flat props and two panes, `,(0,F.jsx)(t.code,{children:`start`}),` and `,(0,F.jsx)(t.code,{children:`end`}),`, as its API conventions
ask; nest one for three panes. There is no collapse on Enter and no saved
layout: store `,(0,F.jsx)(t.code,{children:`onSizeChange`}),` to keep the split.`]})]}),(0,F.jsxs)(_,{value:`guidelines`,children:[(0,F.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,F.jsx)(t.p,{children:`Use Resizable where people need to trade room between two things they
look at together, and the right split depends on the content: a long name
in a list, a wide table in the detail.`}),(0,F.jsx)(l,{do:(0,F.jsx)(a,{of:k}),doCaption:`Each handle is named after the pane it sizes: “Resize folders”, “Resize inbox”.`,dont:(0,F.jsx)(a,{of:T}),dontCaption:`Both handles keep the default name, so a screen reader hears “Resize” twice and cannot tell them apart.`}),(0,F.jsxs)(t.p,{children:[`Keep `,(0,F.jsx)(t.code,{children:`minSize`}),` above zero (the default is 10%), so a pane cannot be
dragged out of sight with its content still in the tab order.`]}),(0,F.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For a fixed sidebar beside the page.`}),` Use the App Shell template:
its Nav Sidebar has a set width and collapses.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For a panel that slides over the page.`}),` Use Drawer.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For a column of a table.`}),` Use Table's `,(0,F.jsx)(t.code,{children:`isResizable`}),`.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For layouts that only change with the window.`}),` Use the
Multi-column layout template: Resizable is for people, not
breakpoints.`]}),`
`]}),(0,F.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`The handle is a focusable `,(0,F.jsx)(t.code,{children:`role="separator"`}),`, after the APG window
splitter. Side by side it is `,(0,F.jsx)(t.code,{children:`aria-orientation="vertical"`}),`; stacked it
is `,(0,F.jsx)(t.code,{children:`"horizontal"`}),`.`]}),`
`,(0,F.jsxs)(t.li,{children:[`Its name is `,(0,F.jsx)(t.code,{children:`handleLabel`}),` and `,(0,F.jsx)(t.code,{children:`aria-controls`}),` points at the first pane.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`aria-valuenow`}),` is the first pane's size in percent, between
`,(0,F.jsx)(t.code,{children:`aria-valuemin`}),` (`,(0,F.jsx)(t.code,{children:`minSize`}),`) and `,(0,F.jsx)(t.code,{children:`aria-valuemax`}),` (`,(0,F.jsx)(t.code,{children:`maxSize`}),`).`]}),`
`,(0,F.jsxs)(t.li,{children:[`Side by side, Arrow Right moves the handle 16px right and Arrow Left
16px left; in right-to-left text the first pane is on the right, so
Arrow Left grows it. Stacked, Arrow Down and Arrow Up do the same.
Home moves it to `,(0,F.jsx)(t.code,{children:`minSize`}),`, End to `,(0,F.jsx)(t.code,{children:`maxSize`}),`. These are the keys and
the step of Table's column resize handle.`]}),`
`,(0,F.jsx)(t.li,{children:`Dragging the handle moves it by the distance dragged, never past the
limits.`}),`
`]})]})]})]})}function P(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=t(),r(),c(),d(),p(),h(),f(),m(),b(),w(),E()})))()}I();export{P as default};