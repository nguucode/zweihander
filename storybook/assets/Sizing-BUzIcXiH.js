import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-C4DQin6J.js";import{i as s,n as c,r as l,t as u}from"./Sizing.stories-l-YA-UsM.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h1,{id:`sizing`,children:`Sizing`}),`
`,(0,p.jsxs)(t.p,{children:[`Every control's geometry comes from two facts: its `,(0,p.jsx)(t.strong,{children:`size tier`}),` and its
`,(0,p.jsx)(t.strong,{children:`intent`}),`. The tier binds height, inline padding, the gap between icon and
label, the icon and the corner. The intent (control or field) decides two
things only: which padding it takes, and whether it becomes a pill at
`,(0,p.jsx)(t.code,{children:`radius="full"`}),`.`]}),`
`,(0,p.jsx)(a,{of:l}),`
`,(0,p.jsxs)(t.p,{children:[`The table reads each token back from the page, so it shows what the
current scaling and radius preset resolve to. Every length here, the
radius included, is multiplied by `,(0,p.jsx)(t.code,{children:`--scaling`}),`.`]}),`
`,(0,p.jsx)(t.h2,{id:`who-reads-which-tier`,children:`Who reads which tier`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`Tier`}),(0,p.jsx)(t.th,{children:`Height`}),(0,p.jsx)(t.th,{children:`Components`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`md`})}),(0,p.jsx)(t.td,{children:`32px`}),(0,p.jsx)(t.td,{children:`the default: Button, ToggleButton, every field (TextInput, Search, Select, Combobox, NumberInput, DatePicker, Textarea), Tabs, Pagination, Menu item`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`sm`})}),(0,p.jsx)(t.td,{children:`24px`}),(0,p.jsxs)(t.td,{children:[`the small inline size of the same components, and Tag `,(0,p.jsx)(t.code,{children:`size="md"`})]})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`xs`})}),(0,p.jsx)(t.td,{children:`20px`}),(0,p.jsxs)(t.td,{children:[`compact parts only: Tag `,(0,p.jsx)(t.code,{children:`size="sm"`}),`, Badge, the checkbox and radio box, the switch track, the slider thumb`]})]})]})]}),`
`,(0,p.jsxs)(t.p,{children:[`A component's `,(0,p.jsx)(t.code,{children:`size`}),` prop points at a tier; the names need not match.
Tag `,(0,p.jsx)(t.code,{children:`size="md"`}),` reads tier `,(0,p.jsx)(t.code,{children:`sm`}),`, because a tag sits in a line of text and
a 32px tag would push it apart.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsxs)(t.strong,{children:[`Buttons and fields have no `,(0,p.jsx)(t.code,{children:`xs`}),`.`]}),` 20px is below the 24px minimum
target of WCAG 2.5.8, and a user cannot add the missing spacing back
themselves. On touch screens every tier grows its hit area to
`,(0,p.jsx)(t.code,{children:`--target-coarse`}),` (44px) without growing the visible box.`]}),`
`,(0,p.jsx)(t.h2,{id:`intent`,children:`Intent`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Padding.`}),` Fields and rows take `,(0,p.jsx)(t.code,{children:`pad`}),`, because their text is left
aligned and has to line up with the label above it. Buttons take
`,(0,p.jsx)(t.code,{children:`pad-spacious`}),`: a centred label reads as cramped with less. The two only
differ at `,(0,p.jsx)(t.code,{children:`md`}),` (10 against 12px); at `,(0,p.jsx)(t.code,{children:`sm`}),` and `,(0,p.jsx)(t.code,{children:`xs`}),` there is no room to
spend.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Radius.`}),` The tier picks the step (`,(0,p.jsx)(t.code,{children:`--radius-sm`}),` for `,(0,p.jsx)(t.code,{children:`xs`}),` and `,(0,p.jsx)(t.code,{children:`sm`}),`,
`,(0,p.jsx)(t.code,{children:`--radius-md`}),` for `,(0,p.jsx)(t.code,{children:`md`}),`, so a short box does not read as a pill by
accident). The intent picks what happens at `,(0,p.jsx)(t.code,{children:`radius="full"`}),`:
`,(0,p.jsx)(t.code,{children:`--control-{tier}-radius`}),` becomes a pill, `,(0,p.jsx)(t.code,{children:`--control-{tier}-radius-field`}),`
stops one step up. At `,(0,p.jsx)(t.code,{children:`md`}),` these are exactly `,(0,p.jsx)(t.code,{children:`--radius-control`}),` and
`,(0,p.jsx)(t.code,{children:`--radius-field`}),`. See `,(0,p.jsx)(t.a,{href:`?path=/docs/foundations-radius--docs`,children:`Radius`}),`.`]}),`
`,(0,p.jsx)(a,{of:u}),`
`,(0,p.jsxs)(t.p,{children:[`A Button, a text field and a select at `,(0,p.jsx)(t.code,{children:`size="sm"`}),`: one height, one icon,
one corner, one type size. The story asserts all four.`]}),`
`,(0,p.jsx)(t.h2,{id:`why-these-gaps`,children:`Why these gaps`}),`
`,(0,p.jsxs)(t.p,{children:[`The gap grows with the tier: 4, 6, 8px. Before tiers each component chose
its own, and they disagreed at the small size: Button and the field put
8px between icon and label, Tag put 4px. `,(0,p.jsx)(t.code,{children:`md`}),` keeps the 8px every default
control already had, so the size most of an interface uses does not move.
`,(0,p.jsx)(t.code,{children:`sm`}),` takes the step between, 6px, which is the one change: small buttons
and fields tighten by 2px, and a medium Tag loosens by 2px.`]}),`
`,(0,p.jsx)(t.h2,{id:`the-one-exception`,children:`The one exception`}),`
`,(0,p.jsxs)(t.p,{children:[`NumberInput's stepper at `,(0,p.jsx)(t.code,{children:`sm`}),` is a 16px button inside the field, so its
chevron stays at `,(0,p.jsx)(t.code,{children:`--icon-xs`}),` (12px). A 14px chevron would fill it edge to
edge.`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),r(),o(),s()})))()}m();export{f as default};