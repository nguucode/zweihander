import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,i as a,n as o,s}from"./blocks-BCmbfwq7.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./Popover.stories-2RUS9zcq.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:c}),`
`,(0,g.jsx)(t.h1,{id:`popover`,children:`Popover`}),`
`,(0,g.jsxs)(t.p,{children:[`A small panel anchored to a button, for content you interact with: a
share form, a filter, a set of options. It opens on click, stays until
you close it, and holds links, inputs and buttons, which a Tooltip must
not. Spec:
`,(0,g.jsx)(t.a,{href:`https://www.uiguideline.com/components/popover`,rel:`nofollow`,children:`uiguideline.com/components/popover`}),`.
Behaviour from Base UI's `,(0,g.jsx)(t.a,{href:`https://base-ui.com/react/components/popover`,rel:`nofollow`,children:`Popover`}),`.`]}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Part`}),(0,g.jsx)(t.th,{children:`What it is`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Trigger`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`trigger`}),`: one button. Popover merges its props onto it.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Popup`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`--popover`}),` surface, 1px `,(0,g.jsx)(t.code,{children:`--border`}),`, `,(0,g.jsx)(t.code,{children:`--shadow-md`}),`, `,(0,g.jsx)(t.code,{children:`--radius-panel`}),`, 16px padding, at most 22rem wide.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Title`})}),(0,g.jsx)(t.td,{children:`Optional. Names the dialog.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Description`})}),(0,g.jsxs)(t.td,{children:[`Optional, `,(0,g.jsx)(t.code,{children:`--muted-foreground`}),`. Describes the dialog.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Body`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`children`}),`.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Close button`})}),(0,g.jsx)(t.td,{children:`Optional, in the corner.`})]})]})]}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`trigger`})}),(0,g.jsx)(t.td,{children:`element`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Required.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`title`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsxs)(t.td,{children:[`Or `,(0,g.jsx)(t.code,{children:`aria-label`}),` when there is none.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`description`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`children`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`side`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`top`}),`, `,(0,g.jsx)(t.code,{children:`right`}),`, `,(0,g.jsx)(t.code,{children:`bottom`}),`, `,(0,g.jsx)(t.code,{children:`left`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`bottom`})}),(0,g.jsx)(t.td,{children:`Flips if there is no room.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`align`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`start`}),`, `,(0,g.jsx)(t.code,{children:`center`}),`, `,(0,g.jsx)(t.code,{children:`end`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`center`})}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`hasCloseButton`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`false`})}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`closeLabel`})}),(0,g.jsx)(t.td,{children:`string`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`Close`})}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`openOnHover`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`false`})}),(0,g.jsx)(t.td,{children:`Also opens on hover, for previews.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`isModal`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`false`})}),(0,g.jsx)(t.td,{children:`See Accessibility.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`open`}),`, `,(0,g.jsx)(t.code,{children:`defaultOpen`}),`, `,(0,g.jsx)(t.code,{children:`onOpenChange`})]}),(0,g.jsx)(t.td,{}),(0,g.jsx)(t.td,{}),(0,g.jsx)(t.td,{children:`Controlled or uncontrolled.`})]})]})]}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Same surface as the Select list.`}),` Popover, Select and Combobox
popups share the `,(0,g.jsx)(t.code,{children:`--popover`}),` colour, border and shadow, and the same
z-index layer (50); tooltips sit above them at 60.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`No arrow.`}),` The popup opens 6px from its trigger and lines up with
it; the gap and alignment already tie it to the trigger.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsxs)(t.p,{children:[`The popup is a `,(0,g.jsx)(t.code,{children:`role="dialog"`}),` named by `,(0,g.jsx)(t.code,{children:`title`}),` (or `,(0,g.jsx)(t.code,{children:`aria-label`}),`) and
described by `,(0,g.jsx)(t.code,{children:`description`}),`. The trigger carries `,(0,g.jsx)(t.code,{children:`aria-expanded`}),` and
`,(0,g.jsx)(t.code,{children:`aria-haspopup`}),`.`]}),`
`]}),`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsx)(t.p,{children:`Opening moves focus into the popup; Escape or a click outside closes
it and returns focus to the trigger.`}),`
`]}),`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Non-modal by default:`}),` Tab can leave the popup, and the page stays
usable. `,(0,g.jsx)(t.code,{children:`isModal`}),` switches to Base UI's modal mode: focus is trapped,
page scroll is locked and clicks outside are blocked.`]}),`
`]}),`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsxs)(t.p,{children:[`Base UI only traps focus when the popup contains a close button, and a
touch screen reader needs one to get out. So a modal popover without
`,(0,g.jsx)(t.code,{children:`hasCloseButton`}),` still renders one: hidden until it has keyboard focus,
then shown in the corner, so focus is never invisible.`]}),`
`,(0,g.jsx)(o,{of:f}),`
`]}),`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`openOnHover`}),` adds hover to click, it does not replace it: the content
stays reachable by keyboard and touch.`]}),`
`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};