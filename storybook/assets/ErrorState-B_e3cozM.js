import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,i as a,n as o,s}from"./blocks-BCmbfwq7.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./ErrorState.stories-PCA_YT-C.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:f}),`
`,(0,_.jsx)(t.h1,{id:`error-state`,children:`Error State`}),`
`,(0,_.jsxs)(t.p,{children:[`What a list, a panel or a page shows when loading it failed: what went
wrong, and a way forward, usually "Try again". Our own spec:
uiguideline.com has no page for it. Built on
`,(0,_.jsx)(t.a,{href:`?path=/docs/components-states-emptystate--docs`,children:`Empty State`}),`, in the
danger tone.`]}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,_.jsx)(t.p,{children:`Empty State's parts (icon disc, title, description, action), plus:`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Part`}),(0,_.jsx)(t.th,{children:`What it is`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Icon disc`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`--danger-subtle`}),` behind the `,(0,_.jsx)(t.code,{children:`danger`}),` icon in `,(0,_.jsx)(t.code,{children:`--danger-text`}),`.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Details`})}),(0,_.jsx)(t.td,{children:`Optional, under the description: an error code or request id, monospaced and selectable in one click.`})]})]})]}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsxs)(t.p,{children:[`Every Empty State prop (`,(0,_.jsx)(t.code,{children:`icon`}),`, `,(0,_.jsx)(t.code,{children:`description`}),`, `,(0,_.jsx)(t.code,{children:`action`}),`, `,(0,_.jsx)(t.code,{children:`size`}),`,
`,(0,_.jsx)(t.code,{children:`headingLevel`}),`), and:`]}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Prop`}),(0,_.jsx)(t.th,{children:`Values`}),(0,_.jsx)(t.th,{children:`Default`}),(0,_.jsx)(t.th,{})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`title`})}),(0,_.jsx)(t.td,{children:`node`}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`Something went wrong`})}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`details`})}),(0,_.jsx)(t.td,{children:`node`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`isLive`})}),(0,_.jsx)(t.td,{children:`boolean`}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`false`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`role="alert"`}),`.`]})]})]})]}),`
`,(0,_.jsx)(a,{of:m}),`
`,(0,_.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Say what failed and that nothing is lost.`}),` "Couldn’t load projects.
Your projects are safe" beats "Error". The default title is the last
resort, for failures you cannot describe.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Details are for support, not for the reader.`}),` Keep them small and
selectable so they can be pasted into a message.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`
`,(0,_.jsx)(t.p,{children:`The title is a heading, as on Empty State.`}),`
`]}),`
`,(0,_.jsxs)(t.li,{children:[`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`isLive`}),` makes it a `,(0,_.jsx)(t.code,{children:`role="alert"`}),`: use it when the error replaces
content that was loading, so a screen reader hears that it failed.`]}),`
`,(0,_.jsx)(o,{of:l}),`
`]}),`
`,(0,_.jsxs)(t.li,{children:[`
`,(0,_.jsxs)(t.p,{children:[`The icon is `,(0,_.jsx)(t.code,{children:`aria-hidden`}),`; the title says it.`]}),`
`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),i(),p()})))()}v();export{g as default};