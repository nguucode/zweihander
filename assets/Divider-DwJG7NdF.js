import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./Divider.stories-JKFiKOMs.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:u}),`
`,(0,g.jsx)(t.h1,{id:`divider`,children:`Divider`}),`
`,(0,g.jsxs)(t.p,{children:[`A thin line that separates content into groups: sections of a card, items
in a toolbar, blocks of a page. Spec: `,(0,g.jsx)(t.a,{href:`https://www.uiguideline.com/components/divider`,rel:`nofollow`,children:`uiguideline.com/components/divider`}),`.`]}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsxs)(t.p,{children:[`One part: the `,(0,g.jsx)(t.strong,{children:`line`}),`. It is an `,(0,g.jsx)(t.code,{children:`<hr>`}),`, drawn with a border in the
`,(0,g.jsx)(t.code,{children:`--border`}),` color, so it follows light and dark mode without extra code.`]}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`orientation`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`horizontal`}),`, `,(0,g.jsx)(t.code,{children:`vertical`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`horizontal`})}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`inset`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`false`})}),(0,g.jsxs)(t.td,{children:[`Indents both ends by `,(0,g.jsx)(t.code,{children:`--space-4`}),` (horizontal) or `,(0,g.jsx)(t.code,{children:`--space-2`}),` (vertical).`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`size`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`sm`}),`, `,(0,g.jsx)(t.code,{children:`md`}),`, `,(0,g.jsx)(t.code,{children:`lg`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`sm`})}),(0,g.jsx)(t.td,{children:`Thickness: 1px, 2px, 4px.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`appearance`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`solid`}),`, `,(0,g.jsx)(t.code,{children:`dashed`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`solid`})}),(0,g.jsxs)(t.td,{children:[`uiguideline's `,(0,g.jsx)(t.code,{children:`variant`}),`. See below.`]})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`Every other `,(0,g.jsx)(t.code,{children:`<hr>`}),` attribute passes through, including `,(0,g.jsx)(t.code,{children:`ref`}),` and `,(0,g.jsx)(t.code,{children:`className`}),`.`]}),`
`,(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsxs)(t.strong,{children:[(0,g.jsx)(t.code,{children:`appearance`}),`, not `,(0,g.jsx)(t.code,{children:`variant`}),`.`]}),` In this kit `,(0,g.jsx)(t.code,{children:`variant`}),` always means a
color by intent (primary, destructive…) and `,(0,g.jsx)(t.code,{children:`appearance`}),` means a style.
Solid versus dashed is a style.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Thickness is raw px.`}),` The token layer has no border-width scale, and
a divider is the only component that needs three.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsxs)(t.p,{children:[`A `,(0,g.jsx)(t.strong,{children:`vertical`}),` divider has no fixed height: it stretches to its flex row,
which is where it almost always sits. Anywhere else, give it a height.`]}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsxs)(t.p,{children:[`Use `,(0,g.jsx)(t.strong,{children:`inset`}),` when the line sits inside a padded list and should align
with the text rather than run edge to edge.`]}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`<hr>`}),` is announced as a separator. Vertical dividers add
`,(0,g.jsx)(t.code,{children:`aria-orientation="vertical"`}),`; horizontal ones don't, because that is
already the default.`]}),`
`,(0,g.jsxs)(t.li,{children:[`If the line is purely decorative, e.g. between two icons that are
already grouped, pass `,(0,g.jsx)(t.code,{children:`aria-hidden`}),` so it isn't announced at all.`]}),`
`,(0,g.jsxs)(t.li,{children:[`The `,(0,g.jsx)(t.code,{children:`--border`}),` color is below 3:1 against the background on purpose: a
divider is decoration and is not required to meet the non-text contrast
ratio. Never let a divider be the only thing that tells groups apart.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};