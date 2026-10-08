import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,i as a,n as o,s}from"./blocks-BCmbfwq7.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./DescriptionList.stories-DL50bmOL.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:f}),`
`,(0,g.jsx)(t.h1,{id:`description-list`,children:`Description List`}),`
`,(0,g.jsx)(t.p,{children:`The fields of a record, as terms and their details: a profile, an order,
an application. It is read-only; its editable twin is a settings form in
Form Layouts.`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/description-list.json
`})}),`
`,(0,g.jsx)(t.h2,{id:`columns`,children:`Columns`}),`
`,(0,g.jsx)(t.p,{children:`Term and details side by side, a line between rows, and an optional
action at the end of each row ("Update").`}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`in-a-card`,children:`In a card`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`isCard`}),` puts the header in a top band and the list below it, inside one
border. With `,(0,g.jsx)(t.code,{children:`layout="grid"`}),`, fields run two to a row; `,(0,g.jsx)(t.code,{children:`isWide`}),` gives
long text and attachments the full width.`]}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`stacked`,children:`Stacked`}),`
`,(0,g.jsx)(t.p,{children:`Term over details, one field after another: for a sidebar or a narrow
panel.`}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`items`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`DescriptionItem[]`})}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsxs)(t.td,{children:[`Required. `,(0,g.jsx)(t.code,{children:`{ term, details, action?, isWide? }`})]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`title`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`description`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`actions`})}),(0,g.jsx)(t.td,{children:`node`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Buttons at the end of the header.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`layout`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`columns`}),`, `,(0,g.jsx)(t.code,{children:`grid`}),`, `,(0,g.jsx)(t.code,{children:`stacked`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`columns`})}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`isCard`})}),(0,g.jsx)(t.td,{children:`boolean`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`false`})}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`headingLevel`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`2`}),`, `,(0,g.jsx)(t.code,{children:`3`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`2`})}),(0,g.jsx)(t.td,{})]})]})]}),`
`,(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`It responds to its own width, not the viewport's.`}),` Columns and grid
are container queries: under 36rem of list width they stack, so the
same list works in a main column, a sidebar and a phone.`]}),`
`,(0,g.jsx)(o,{of:u}),`
`]}),`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsx)(t.p,{children:`Details wrap anywhere, so a long email address or URL never pushes the
layout wide.`}),`
`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`A real `,(0,g.jsx)(t.code,{children:`<dl>`}),`: a screen reader announces a list of terms and reads each
detail with its term.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Row actions sit in their own `,(0,g.jsx)(t.code,{children:`<dd>`}),` after the details. Give each one the
field it acts on ("Update Email address"), hidden if you like, so a
list of links is not six identical "Update"s.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};