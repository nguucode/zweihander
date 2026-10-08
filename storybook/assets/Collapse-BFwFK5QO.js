import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,i as a,n as o,s}from"./blocks-BCmbfwq7.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./Collapse.stories-CFAhAoqM.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:p}),`
`,(0,g.jsx)(t.h1,{id:`collapse`,children:`Collapse`}),`
`,(0,g.jsxs)(t.p,{children:[`One show/hide section: "Show details", "Advanced settings". A text button
with a chevron, and the content it reveals under it. For a list of
sections, use an `,(0,g.jsx)(t.a,{href:`?path=/docs/components-data-display-accordion--docs`,children:`Accordion`}),`.
Our own spec: uiguideline.com has no page for it. Behaviour from Base
UI's `,(0,g.jsx)(t.a,{href:`https://base-ui.com/react/components/collapsible`,rel:`nofollow`,children:`Collapsible`}),`.`]}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Part`}),(0,g.jsx)(t.th,{children:`What it is`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Trigger`})}),(0,g.jsx)(t.td,{children:`A medium-weight text button, underlined on hover, with a chevron that turns from right to down.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Panel`})}),(0,g.jsx)(t.td,{children:`The content, 8px under the trigger. Its height animates open and shut.`})]})]})]}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`label`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Required. The trigger's text.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`openLabel`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`label`})}),(0,g.jsx)(t.td,{children:`The trigger's text while open, e.g. "Hide details".`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`children`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Required.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`open`}),`, `,(0,g.jsx)(t.code,{children:`defaultOpen`}),`, `,(0,g.jsx)(t.code,{children:`onOpenChange`})]}),(0,g.jsx)(t.td,{}),(0,g.jsx)(t.td,{}),(0,g.jsx)(t.td,{children:`Controlled or uncontrolled.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`size`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`sm`}),`, `,(0,g.jsx)(t.code,{children:`md`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`md`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`body-sm`}),` or `,(0,g.jsx)(t.code,{children:`body`}),`.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`disabled`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`false`})}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`hiddenUntilFound`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`true`})}),(0,g.jsx)(t.td,{children:`Closed content stays findable.`})]})]})]}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`A text button, not a bar.`}),` Accordion items are full-width bars with
dividers because they are the page's structure; a Collapse is one
aside in running content, so its trigger reads like a link in a
sentence.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Findable when closed.`}),` By default closed content is kept as
`,(0,g.jsx)(t.code,{children:`hidden="until-found"`}),`: the browser's find-in-page still matches it and
opens the section. Turn it off only for content that is expensive to
render.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`The trigger is a `,(0,g.jsx)(t.code,{children:`<button>`}),` with `,(0,g.jsx)(t.code,{children:`aria-expanded`}),` and `,(0,g.jsx)(t.code,{children:`aria-controls`}),`
pointing at the panel.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Enter or Space toggles it. With `,(0,g.jsx)(t.code,{children:`openLabel`}),`, the button's name changes
with its state ("Show details" / "Hide details"), and `,(0,g.jsx)(t.code,{children:`aria-expanded`}),`
says it either way.`]}),`
`,(0,g.jsx)(t.li,{children:`The chevron is decorative. The trigger grows to a 44px target on
coarse pointers.`}),`
`,(0,g.jsxs)(t.li,{children:[`Under `,(0,g.jsx)(t.code,{children:`prefers-reduced-motion`}),` the panel and chevron change without
animating.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};