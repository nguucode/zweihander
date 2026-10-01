import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,n as a,s as o}from"./blocks-DfpLWjEg.js";import{n as s,r as c,t as l}from"./Spacing.stories-DMTVUIvy.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{of:s}),`
`,(0,f.jsx)(t.h1,{id:`spacing`,children:`Spacing`}),`
`,(0,f.jsxs)(t.p,{children:[`The entire spacing system is `,(0,f.jsx)(t.strong,{children:`one number`}),`. `,(0,f.jsx)(t.code,{children:`--spacing`}),` is `,(0,f.jsx)(t.code,{children:`0.25rem`}),`
(4px), and every spacing utility multiplies it: `,(0,f.jsx)(t.code,{children:`p-4`}),` is
`,(0,f.jsx)(t.code,{children:`calc(var(--spacing) * 4)`}),` — 16px. There is no list of allowed values
anywhere in `,(0,f.jsx)(t.code,{children:`tokens.css`}),`, because there is no list.`]}),`
`,(0,f.jsx)(t.h2,{id:`the-scale-is-computed-not-enumerated`,children:`The scale is computed, not enumerated`}),`
`,(0,f.jsxs)(t.p,{children:[`This is the part that differs from most design systems. Where a scale is
a fixed map, `,(0,f.jsx)(t.code,{children:`p-13`}),` is an error because 13 is not in it. Here the value
is computed, so `,(0,f.jsx)(t.code,{children:`p-13`}),` (52px), `,(0,f.jsx)(t.code,{children:`p-4.5`}),` (18px) and `,(0,f.jsx)(t.code,{children:`p-[7px]`}),` all work.`]}),`
`,(0,f.jsxs)(t.p,{children:[`That has a real consequence: `,(0,f.jsx)(t.strong,{children:`the scale cannot enforce itself.`}),` Nothing
will stop a component from using `,(0,f.jsx)(t.code,{children:`gap-7`}),` where the rest of the kit uses
`,(0,f.jsx)(t.code,{children:`gap-6`}),`; there is no build error, no lint failure, and the result looks
almost right. The steps shown below are a convention the team keeps, not a
constraint the tooling applies.`]}),`
`,(0,f.jsx)(a,{of:l}),`
`,(0,f.jsxs)(t.p,{children:[`Steps below `,(0,f.jsx)(t.code,{children:`1`}),` exist and are worth knowing: `,(0,f.jsx)(t.code,{children:`0.5`}),` (2px) and `,(0,f.jsx)(t.code,{children:`1.5`}),` (6px)
are what you reach for between a label and its input, or an icon and its
label — gaps where a full 4px reads as a break rather than a pairing.`]}),`
`,(0,f.jsx)(t.h2,{id:`what-the-kit-uses`,children:`What the kit uses`}),`
`,(0,f.jsx)(t.p,{children:`Every component here stays on whole steps, and on a small set of them:`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`Step`}),(0,f.jsx)(t.th,{children:`Used for`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`1.5`}),` (6px)`]}),(0,f.jsx)(t.td,{children:`gap between a field label, its input and its helper text`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`2`}),` (8px)`]}),(0,f.jsx)(t.td,{children:`gap between a button's icon and its label`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`3`}),` (12px)`]}),(0,f.jsx)(t.td,{children:`horizontal padding, small button and all inputs`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`4`}),` (16px)`]}),(0,f.jsx)(t.td,{children:`horizontal padding, default button`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`6`}),` (24px)`]}),(0,f.jsx)(t.td,{children:`horizontal padding, large button`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`8`}),` / `,(0,f.jsx)(t.code,{children:`10`}),` / `,(0,f.jsx)(t.code,{children:`12`}),` (32 / 40 / 48px)`]}),(0,f.jsx)(t.td,{children:`the three control heights`})]})]})]}),`
`,(0,f.jsxs)(t.p,{children:[`The control heights are the load-bearing ones. A 40px default (`,(0,f.jsx)(t.code,{children:`h-10`}),`) is
what makes a button and a text input line up in a row without either
being nudged, and anything that should sit alongside them — a select, a
date picker — has to land on the same three heights rather than pick its
own.`]}),`
`,(0,f.jsx)(t.h2,{id:`customization`,children:`Customization`}),`
`,(0,f.jsxs)(t.p,{children:[`Change `,(0,f.jsx)(t.code,{children:`--spacing`}),` in `,(0,f.jsx)(t.code,{children:`src/tokens.css`}),` and the whole system rescales at
once. Setting it to `,(0,f.jsx)(t.code,{children:`0.2rem`}),` makes every gap, pad and control height in
the kit 20% tighter with no other edit.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Two cautions. Control heights rescale with everything else, so a tighter
`,(0,f.jsx)(t.code,{children:`--spacing`}),` shrinks the tap targets too — 40px is already close to the
44px minimum recommended for touch, and much below it becomes an
accessibility problem rather than a density preference. And because the
base is in `,(0,f.jsx)(t.code,{children:`rem`}),`, every value inherits the user's root font size; that is
the behaviour you want, but it means "40px" is only 40px at the default
16px root.`]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),r(),i(),c()})))()}p();export{d as default};