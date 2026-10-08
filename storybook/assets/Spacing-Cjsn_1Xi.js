import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,n as a,s as o}from"./blocks-BCmbfwq7.js";import{n as s,r as c,t as l}from"./Spacing.stories-LUdEn0qs.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{of:s}),`
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
`,(0,f.jsx)(t.p,{children:`Every component here stays on a small set of steps:`}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`Step`}),(0,f.jsx)(t.th,{children:`Used for`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`1.5`}),` (6px)`]}),(0,f.jsx)(t.td,{children:`gap between a field label, its input and its helper text`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`2`}),` (8px)`]}),(0,f.jsx)(t.td,{children:`gap between a button's icon and its label`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`2`}),` (8px)`]}),(0,f.jsx)(t.td,{children:`horizontal padding, small button and small input`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`2.5`}),` (10px)`]}),(0,f.jsx)(t.td,{children:`horizontal padding, default input; its option list is inset to match`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`3`}),` (12px)`]}),(0,f.jsx)(t.td,{children:`horizontal padding, default button`})]})]})]}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.strong,{children:`Control heights are their own tokens`}),`, not spacing steps:
`,(0,f.jsx)(t.code,{children:`--control-sm`}),` and `,(0,f.jsx)(t.code,{children:`--control-md`}),` are 24 and 32px — two steps, as in
the Claude apps. A 32px default is what makes a button,
a text input, a tab and a sidebar row line up without either being
nudged, and anything that should sit alongside them — a select, a date
picker — has to land on the same heights rather than pick its own. They
scale with `,(0,f.jsx)(t.code,{children:`--scaling`}),` like everything else.`]}),`
`,(0,f.jsx)(t.h2,{id:`customization`,children:`Customization`}),`
`,(0,f.jsxs)(t.p,{children:[`Change `,(0,f.jsx)(t.code,{children:`--spacing`}),` in `,(0,f.jsx)(t.code,{children:`src/tokens.css`}),` and the whole system rescales at
once. Setting it to `,(0,f.jsx)(t.code,{children:`0.2rem`}),` makes every gap, pad and control height in
the kit 20% tighter with no other edit.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Two cautions. The visible controls are below the 44px touch minimum on
purpose; on coarse pointers every control widens its hit area to 44px
without growing the box, so density does not cost touch users. And
because the base is in `,(0,f.jsx)(t.code,{children:`rem`}),`, every value inherits the user's root font
size; that is the behaviour you want, but it means "32px" is only 32px at
the default 16px root.`]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),r(),i(),c()})))()}p();export{d as default};