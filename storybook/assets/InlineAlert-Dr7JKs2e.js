import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,i as a,n as o,s}from"./blocks-BCmbfwq7.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./InlineAlert.stories-BZj9LB0H.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{of:p}),`
`,(0,v.jsx)(t.h1,{id:`inline-alert`,children:`Inline Alert`}),`
`,(0,v.jsxs)(t.p,{children:[`A one-line message that sits in the flow of a form or a section: "That
URL is taken", "Changes are saved automatically". No box, no title, no
close button. For a message about a whole page or region, use an
`,(0,v.jsx)(t.a,{href:`?path=/docs/components-notifications-alert--docs`,children:`Alert`}),`. Our own spec:
uiguideline.com has no page for it. A plain element.`]}),`
`,(0,v.jsx)(o,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Part`}),(0,v.jsx)(t.th,{children:`What it is`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Icon`})}),(0,v.jsxs)(t.td,{children:[`The variant's filled icon, one line tall. Replaceable, or `,(0,v.jsx)(t.code,{children:`false`}),` for none.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Message`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`children`}),`, in the variant's text colour.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Action`})}),(0,v.jsx)(t.td,{children:`Optional short link or button after the message.`})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Prop`}),(0,v.jsx)(t.th,{children:`Values`}),(0,v.jsx)(t.th,{children:`Default`}),(0,v.jsx)(t.th,{})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`variant`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`info`}),`, `,(0,v.jsx)(t.code,{children:`success`}),`, `,(0,v.jsx)(t.code,{children:`warning`}),`, `,(0,v.jsx)(t.code,{children:`danger`})]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`info`})}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`size`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`sm`}),`, `,(0,v.jsx)(t.code,{children:`md`})]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`md`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`body-sm`}),` or `,(0,v.jsx)(t.code,{children:`body`}),`.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`icon`})}),(0,v.jsxs)(t.td,{children:[`node or `,(0,v.jsx)(t.code,{children:`false`})]}),(0,v.jsx)(t.td,{children:`variant's icon`}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`action`})}),(0,v.jsx)(t.td,{children:`node`}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`isLive`})}),(0,v.jsx)(t.td,{children:`boolean`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})}),(0,v.jsx)(t.td,{children:`Announce it when it appears.`})]})]})]}),`
`,(0,v.jsxs)(t.p,{children:[`Every other `,(0,v.jsx)(t.code,{children:`<div>`}),` attribute passes through.`]}),`
`,(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`The whole line is in the variant's text colour.`}),` Alert can keep its
message in `,(0,v.jsx)(t.code,{children:`--foreground`}),` because the box carries the colour; an
inline alert has no box, so the text does. Every `,(0,v.jsx)(t.code,{children:`--*-text`}),` token is
4.5:1 on the page in both modes, so a message of any length stays
readable.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Alert or Inline Alert?`}),` Alert when the message is about a page or a
region and may need a title, an action row or dismissing; Inline Alert
when it is about the thing right above it.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsx)(o,{of:m}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(o,{of:c}),`
`,(0,v.jsxs)(t.p,{children:[`For an error on a single field, use the field's own `,(0,v.jsx)(t.code,{children:`validationState`}),`
and `,(0,v.jsx)(t.code,{children:`helperText`}),`: it is tied to the field with `,(0,v.jsx)(t.code,{children:`aria-describedby`}),`. Inline
Alert is for messages about a group of fields or a whole form.`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`A plain `,(0,v.jsx)(t.code,{children:`<div>`}),` by default, read in order with the page.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`isLive`}),` for a message that appears in response to something (a failed
submit): `,(0,v.jsx)(t.code,{children:`danger`}),` and `,(0,v.jsx)(t.code,{children:`warning`}),` become `,(0,v.jsx)(t.code,{children:`role="alert"`}),` and are read at
once, `,(0,v.jsx)(t.code,{children:`info`}),` and `,(0,v.jsx)(t.code,{children:`success`}),` become `,(0,v.jsx)(t.code,{children:`role="status"`}),` and wait.`]}),`
`,(0,v.jsxs)(t.li,{children:[`The icon is `,(0,v.jsx)(t.code,{children:`aria-hidden`}),`: the words have to carry the meaning.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),i(),l()})))()}y();export{_ as default};