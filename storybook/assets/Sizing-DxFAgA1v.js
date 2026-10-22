import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-5QHvYkjw.js";import{a as s,i as c,n as l,r as u,t as d}from"./Sizing.stories-DVmDXtlE.js";function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:u}),`
`,(0,m.jsx)(t.h1,{id:`sizing`,children:`Sizing`}),`
`,(0,m.jsxs)(t.p,{children:[`Every control's geometry comes from two facts: its `,(0,m.jsx)(t.strong,{children:`size tier`}),` and its
`,(0,m.jsx)(t.strong,{children:`intent`}),`. The tier binds height, inline padding, the gap between icon and
label, the icon and the corner. The intent (control or field) decides two
things only: which padding it takes, and whether it becomes a pill at
`,(0,m.jsx)(t.code,{children:`radius="full-rounded"`}),`.`]}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsxs)(t.p,{children:[`The table reads each token back from the page, so it shows what the
current scaling and radius preset resolve to. Every length here, the
radius included, is multiplied by `,(0,m.jsx)(t.code,{children:`--scaling`}),`.`]}),`
`,(0,m.jsx)(t.h2,{id:`the-box-ramp`,children:`The box ramp`}),`
`,(0,m.jsx)(t.p,{children:`Every element is a box, and every box with a fixed height or a fixed
square stands on a step of one ramp. The same role always takes the same
step, so a close button is 24px in a Modal and in a Toast, and a nav
item is as tall as the button beside it.`}),`
`,(0,m.jsx)(a,{of:d}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`md`}),` (32px) is the default. Density maps the whole ramp with one rule:
16 and 20 stay, every larger step drops one notch (24 to 22, 32 to 28,
40 to 36, 48 to 44). The control tiers below are the ramp's `,(0,m.jsx)(t.code,{children:`xs`}),`, `,(0,m.jsx)(t.code,{children:`sm`}),`
and `,(0,m.jsx)(t.code,{children:`md`}),` under another name.`]}),`
`,(0,m.jsx)(t.h3,{id:`which-step-a-role-takes`,children:`Which step a role takes`}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Role`}),(0,m.jsx)(t.th,{children:`Step`}),(0,m.jsx)(t.th,{children:`Default`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`The default control: field, button, tab, pagination and menu item, calendar day, an icon button in the app frame (sidebar toggle, drawer close, carousel arrows), a nav item`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`md`})}),(0,m.jsx)(t.td,{children:`32px`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`A small inline control; a close button inside a surface (Modal, Popover, Toast, Alert); the small Stepper marker; the medium spinner`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sm`})}),(0,m.jsx)(t.td,{children:`24px`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsxs)(t.td,{children:[`Small parts: Tag `,(0,m.jsx)(t.code,{children:`size="sm"`}),`, the slider thumb, the checkbox and radio box, Badge `,(0,m.jsx)(t.code,{children:`md`}),`, a file icon`]}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`xs`})}),(0,m.jsx)(t.td,{children:`20px`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsxs)(t.td,{children:[`A mark that sits with a glyph: Badge `,(0,m.jsx)(t.code,{children:`sm`}),`, the small slider thumb, the small spinner, a skeleton line`]}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`2xs`})}),(0,m.jsx)(t.td,{children:`16px`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsxs)(t.td,{children:[`A leading visual: Avatar `,(0,m.jsx)(t.code,{children:`md`}),`, the small EmptyState icon`]}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`lg`})}),(0,m.jsx)(t.td,{children:`40px`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsxs)(t.td,{children:[`A large visual: Avatar `,(0,m.jsx)(t.code,{children:`lg`}),`, the Stats icon, the EmptyState icon`]}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`xl`})}),(0,m.jsx)(t.td,{children:`48px`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`A glyph inside a control`}),(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`--icon-{tier}`})}),(0,m.jsx)(t.td,{children:`12 / 14 / 16px`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`A line of text, and an icon beside it`}),(0,m.jsxs)(t.td,{children:[(0,m.jsx)(t.code,{children:`--leading-*`}),` × `,(0,m.jsx)(t.code,{children:`--text-*`})]}),(0,m.jsx)(t.td,{children:`one line`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:`A table or list row`}),(0,m.jsxs)(t.td,{children:[(0,m.jsx)(t.code,{children:`box-md`}),` + 2 × `,(0,m.jsx)(t.code,{children:`--space-inline`})]}),(0,m.jsx)(t.td,{children:`48px`})]})]})]}),`
`,(0,m.jsx)(t.p,{children:`The rules that go with the table:`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`A component picks the step by role.`}),` Whoever uses the component
picks only its `,(0,m.jsx)(t.code,{children:`size`}),`, and `,(0,m.jsx)(t.code,{children:`size`}),` points at a step.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`Composite boxes take no free number.`}),` A row, a Tag or a top bar is
the box inside it plus a spacing role on each side: `,(0,m.jsx)(t.code,{children:`--row-height`}),` is
`,(0,m.jsx)(t.code,{children:`box-md`}),` plus `,(0,m.jsx)(t.code,{children:`--space-inline`}),` above and below (48 / 36px). Text boxes
are a line tall (`,(0,m.jsx)(t.code,{children:`--leading-*`}),` × `,(0,m.jsx)(t.code,{children:`--text-*`}),`); an icon beside text sits
in a box one line tall.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`A box that grows with its content`}),` uses `,(0,m.jsx)(t.code,{children:`min-block-size`}),` at a step,
never `,(0,m.jsx)(t.code,{children:`block-size`}),`.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsxs)(t.strong,{children:[`A box with a fixed size and padding or a border declares
`,(0,m.jsx)(t.code,{children:`box-sizing: border-box`}),` itself.`]}),` The kit ships no global reset, so
the app's own CSS decides the default.`]}),`
`]}),`
`,(0,m.jsxs)(t.p,{children:[`Off the ramp, each for a reason: 1–2px strokes, dots and bars under
12px (radio dot, Badge dot, progress bar), switch track widths, region
sizes (ColorPicker, a vertical Slider, overlay widths), the 44px touch
target and icons sized in `,(0,m.jsx)(t.code,{children:`em`}),` inside text. `,(0,m.jsx)(t.code,{children:`npm run tokens`}),` stops when a
control, size or row token leaves the ramp of its density without a
listed reason, and when `,(0,m.jsx)(t.code,{children:`--row-height`}),` stops being the sum above.`]}),`
`,(0,m.jsx)(t.h2,{id:`who-reads-which-tier`,children:`Who reads which tier`}),`
`,(0,m.jsxs)(t.table,{children:[(0,m.jsx)(t.thead,{children:(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.th,{children:`Tier`}),(0,m.jsx)(t.th,{children:`Height (Default / Compact)`}),(0,m.jsx)(t.th,{children:`Components`})]})}),(0,m.jsxs)(t.tbody,{children:[(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`md`})}),(0,m.jsx)(t.td,{children:`32 / 28px`}),(0,m.jsx)(t.td,{children:`the default: Button, ToggleButton, every field (TextInput, Search, Select, Combobox, NumberInput, DatePicker, Textarea), Tabs, Pagination, Menu item`})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`sm`})}),(0,m.jsx)(t.td,{children:`24 / 22px`}),(0,m.jsxs)(t.td,{children:[`the small inline size of the same components, and Tag `,(0,m.jsx)(t.code,{children:`size="md"`})]})]}),(0,m.jsxs)(t.tr,{children:[(0,m.jsx)(t.td,{children:(0,m.jsx)(t.code,{children:`xs`})}),(0,m.jsx)(t.td,{children:`20 / 20px`}),(0,m.jsxs)(t.td,{children:[`compact parts only: Tag `,(0,m.jsx)(t.code,{children:`size="sm"`}),`, the slider thumb`]})]})]})]}),`
`,(0,m.jsxs)(t.p,{children:[`Density keeps every tier and tightens each; see
`,(0,m.jsx)(t.a,{href:`?path=/docs/foundations-spacing--docs#density`,children:`Spacing`}),`. The checkbox and
radio box, the switch tracks, Badge and Avatar have their own size tokens
(`,(0,m.jsx)(t.code,{children:`--choice-box`}),`, `,(0,m.jsx)(t.code,{children:`--switch-md-w`}),`, `,(0,m.jsx)(t.code,{children:`--badge-md`}),`, `,(0,m.jsx)(t.code,{children:`--avatar-md`}),`), which follow
density too.`]}),`
`,(0,m.jsxs)(t.p,{children:[`A component's `,(0,m.jsx)(t.code,{children:`size`}),` prop points at a tier; the names need not match.
Tag `,(0,m.jsx)(t.code,{children:`size="md"`}),` reads tier `,(0,m.jsx)(t.code,{children:`sm`}),`, because a tag sits in a line of text and
a 32px tag would push it apart.`]}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsxs)(t.strong,{children:[`Buttons and fields have no `,(0,m.jsx)(t.code,{children:`xs`}),`.`]}),` A 20px button reads as a part,
not a control.`]}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`The 24px floor is for the hit area, not the drawn box.`}),` WCAG 2.5.8
asks for a 24×24px target. A box drawn smaller (Compact `,(0,m.jsx)(t.code,{children:`sm`}),` is 22px, the
checkbox 20px) keeps its look and widens its hit area to 24px with a
`,(0,m.jsx)(t.code,{children:`::before`}),`. On touch screens every tier grows its hit area to
`,(0,m.jsx)(t.code,{children:`--target-coarse`}),` (44px) the same way, without growing the visible box.`]}),`
`,(0,m.jsx)(t.h2,{id:`intent`,children:`Intent`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Padding.`}),` Fields and rows take `,(0,m.jsx)(t.code,{children:`pad`}),`, because their text is left
aligned and has to line up with the label above it. Buttons take
`,(0,m.jsx)(t.code,{children:`pad-spacious`}),`: a centred label reads as cramped with less. The two only
differ at `,(0,m.jsx)(t.code,{children:`md`}),` (10 against 12px); at `,(0,m.jsx)(t.code,{children:`sm`}),` and `,(0,m.jsx)(t.code,{children:`xs`}),` there is no room to
spend.`]}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Radius.`}),` The tier picks the step (`,(0,m.jsx)(t.code,{children:`--radius-sm`}),` for `,(0,m.jsx)(t.code,{children:`xs`}),` and `,(0,m.jsx)(t.code,{children:`sm`}),`,
`,(0,m.jsx)(t.code,{children:`--radius-md`}),` for `,(0,m.jsx)(t.code,{children:`md`}),`, so a short box does not read as a pill by
accident). The intent picks what happens at `,(0,m.jsx)(t.code,{children:`radius="full-rounded"`}),`:
`,(0,m.jsx)(t.code,{children:`--control-{tier}-radius`}),` becomes a pill, `,(0,m.jsx)(t.code,{children:`--control-{tier}-radius-field`}),`
stops one step up. At `,(0,m.jsx)(t.code,{children:`md`}),` these are exactly `,(0,m.jsx)(t.code,{children:`--radius-control`}),` and
`,(0,m.jsx)(t.code,{children:`--radius-field`}),`. See `,(0,m.jsx)(t.a,{href:`?path=/docs/foundations-radius--docs`,children:`Radius`}),`.`]}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsxs)(t.p,{children:[`A Button, a text field and a select at `,(0,m.jsx)(t.code,{children:`size="sm"`}),`: one height, one icon,
one corner, one type size. The story asserts all four.`]}),`
`,(0,m.jsx)(t.h2,{id:`why-these-gaps`,children:`Why these gaps`}),`
`,(0,m.jsxs)(t.p,{children:[`The gap grows with the tier: 4, 6, 8px. Before tiers each component chose
its own, and they disagreed at the small size: Button and the field put
8px between icon and label, Tag put 4px. `,(0,m.jsx)(t.code,{children:`md`}),` keeps the 8px every default
control already had, so the size most of an interface uses does not move.
`,(0,m.jsx)(t.code,{children:`sm`}),` takes the step between, 6px, which is the one change: small buttons
and fields tighten by 2px, and a medium Tag loosens by 2px.`]}),`
`,(0,m.jsx)(t.h2,{id:`the-one-exception`,children:`The one exception`}),`
`,(0,m.jsxs)(t.p,{children:[`NumberInput's stepper at `,(0,m.jsx)(t.code,{children:`sm`}),` is a 16px button inside the field, so its
chevron stays at `,(0,m.jsx)(t.code,{children:`--icon-xs`}),` (12px). A 14px chevron would fill it edge to
edge.`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),r(),o(),s()})))()}h();export{p as default};