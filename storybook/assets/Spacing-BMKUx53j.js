import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-C4DQin6J.js";import{n as s,r as c,t as l}from"./Spacing.stories-BYzb0xTX.js";function u(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{of:s}),`
`,(0,f.jsx)(t.h1,{id:`spacing`,children:`Spacing`}),`
`,`
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
`,(0,f.jsxs)(t.p,{children:[`Spacing steps lay out the space `,(0,f.jsx)(t.em,{children:`between`}),` things: a label and its input,
cards in a grid, sections of a page.`]}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`Step`}),(0,f.jsx)(t.th,{children:`Used for`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`1.5`}),` (6px)`]}),(0,f.jsx)(t.td,{children:`gap between a field label, its input and its helper text`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsxs)(t.td,{children:[(0,f.jsx)(t.code,{children:`4`}),` (16px)`]}),(0,f.jsx)(t.td,{children:`padding inside a popover; gap between tabs and their panel`})]})]})]}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.strong,{children:`Inside a control, padding and gaps are not spacing steps.`}),` They belong
to the control's size tier, with two pad variants:`]}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{children:`Token`}),(0,f.jsx)(t.th,{children:(0,f.jsx)(t.code,{children:`xs`})}),(0,f.jsx)(t.th,{children:(0,f.jsx)(t.code,{children:`sm`})}),(0,f.jsx)(t.th,{children:(0,f.jsx)(t.code,{children:`md`})}),(0,f.jsx)(t.th,{children:`Used by`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--control-{tier}-pad`})}),(0,f.jsx)(t.td,{children:`6px`}),(0,f.jsx)(t.td,{children:`8px`}),(0,f.jsx)(t.td,{children:`10px`}),(0,f.jsx)(t.td,{children:`fields and rows: text lines up with the label above it`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--control-{tier}-pad-spacious`})}),(0,f.jsx)(t.td,{children:`6px`}),(0,f.jsx)(t.td,{children:`8px`}),(0,f.jsx)(t.td,{children:`12px`}),(0,f.jsx)(t.td,{children:`buttons: a centred label needs room either side`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`--control-{tier}-gap`})}),(0,f.jsx)(t.td,{children:`4px`}),(0,f.jsx)(t.td,{children:`6px`}),(0,f.jsx)(t.td,{children:`8px`}),(0,f.jsx)(t.td,{children:`between a control's icon and its label`})]})]})]}),`
`,(0,f.jsx)(t.p,{children:`A field's option list is inset by the field's own pad, so an option's text
starts where the field's value does.`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.strong,{children:`Control heights are tokens too`}),`, `,(0,f.jsx)(t.code,{children:`--control-xs`}),`, `,(0,f.jsx)(t.code,{children:`--control-sm`}),` and
`,(0,f.jsx)(t.code,{children:`--control-md`}),` at 20, 24 and 32px. One height per tier is what makes a
button, a text input, a tab and a select line up without anything being
nudged. See `,(0,f.jsx)(t.a,{href:`?path=/docs/foundations-sizing--docs`,children:`Sizing`}),` for the whole
tier and which component reads which.`]}),`
`,(0,f.jsx)(t.h2,{id:`customization`,children:`Customization`}),`
`,(0,f.jsxs)(t.p,{children:[`Change `,(0,f.jsx)(t.code,{children:`--spacing`}),` in `,(0,f.jsx)(t.code,{children:`src/tokens.css`}),` and the whole system rescales at
once. Setting it to `,(0,f.jsx)(t.code,{children:`0.2rem`}),` makes every gap, pad and control height in
the kit 20% tighter with no other edit.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Two cautions. The visible controls are below the 44px touch minimum on
purpose; on coarse pointers every control widens its hit area to 44px
without growing the box, so density does not cost touch users. And
because the base is in `,(0,f.jsx)(t.code,{children:`rem`}),`, every value inherits the user's root font
size; that is the behaviour you want, but it means "32px" is only 32px at
the default 16px root.`]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),r(),o(),c()})))()}p();export{d as default};