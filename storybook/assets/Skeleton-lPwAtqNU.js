import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,i as a,n as o,s}from"./blocks-BCmbfwq7.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./Skeleton.stories-CSN5jTKt.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:d}),`
`,(0,_.jsx)(t.h1,{id:`skeleton`,children:`Skeleton`}),`
`,(0,_.jsxs)(t.p,{children:[`A placeholder in the shape of content that is still loading, so the page
keeps its layout and the reader sees what is coming. Spec:
`,(0,_.jsx)(t.a,{href:`https://www.uiguideline.com/components/skeleton`,rel:`nofollow`,children:`uiguideline.com/components/skeleton`}),`.
A plain element.`]}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Part`}),(0,_.jsx)(t.th,{children:`What it is`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Bone`})}),(0,_.jsxs)(t.td,{children:[`One shape, `,(0,_.jsx)(t.code,{children:`--muted`}),`: a line of text, an avatar, an image.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Rows`})}),(0,_.jsxs)(t.td,{children:[`With `,(0,_.jsx)(t.code,{children:`rows`}),`, a stack of bones with the last one at 60%, like the end of a paragraph.`]})]})]})]}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Prop`}),(0,_.jsx)(t.th,{children:`Values`}),(0,_.jsx)(t.th,{children:`Default`}),(0,_.jsx)(t.th,{})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`width`})}),(0,_.jsx)(t.td,{children:`number or string`}),(0,_.jsx)(t.td,{children:`100% (circle 40px)`}),(0,_.jsx)(t.td,{children:`A number is px; a string any CSS length.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`height`})}),(0,_.jsx)(t.td,{children:`number or string`}),(0,_.jsx)(t.td,{children:`16px`}),(0,_.jsxs)(t.td,{children:[`Of each row, with `,(0,_.jsx)(t.code,{children:`rows`}),`. Ignored by a single circle.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`appearance`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`circle`}),`, `,(0,_.jsx)(t.code,{children:`square`}),`, `,(0,_.jsx)(t.code,{children:`rounded`})]}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`square`})}),(0,_.jsxs)(t.td,{children:[`A circle takes its height from its width; with `,(0,_.jsx)(t.code,{children:`rows`}),` it draws rounded bars.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`rows`})}),(0,_.jsx)(t.td,{children:`number`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{children:`Stacked lines, 8px apart.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`isFullWidth`})}),(0,_.jsx)(t.td,{children:`boolean`}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`false`})}),(0,_.jsxs)(t.td,{children:[`Overrides `,(0,_.jsx)(t.code,{children:`width`}),`.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`hasAnimation`})}),(0,_.jsx)(t.td,{children:`boolean`}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`false`})}),(0,_.jsx)(t.td,{children:`A slow pulse.`})]})]})]}),`
`,(0,_.jsxs)(t.p,{children:[`Any other prop goes to the outer `,(0,_.jsx)(t.code,{children:`<div>`}),`.`]}),`
`,(0,_.jsx)(a,{of:l}),`
`,(0,_.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsxs)(t.strong,{children:[(0,_.jsx)(t.code,{children:`hasAnimation`}),` is off by default.`]}),` A screen of pulsing shapes is
noise; animate the few that matter, or none.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsxs)(t.strong,{children:[(0,_.jsx)(t.code,{children:`rows`}),` shortens the last line`]}),`, which reads as text rather than as a
block.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(o,{of:m}),`
`,(0,_.jsxs)(t.p,{children:[`Match the shapes to the content that will replace them: same sizes,
same gaps. A skeleton that jumps to a different layout on load is worse
than a spinner. For content whose shape is unknown, use a
`,(0,_.jsx)(t.a,{href:`?path=/docs/components-loaders-spinner--docs`,children:`Spinner`}),`.`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`A skeleton is decoration`}),` and is `,(0,_.jsx)(t.code,{children:`aria-hidden`}),`. It says nothing to
a screen reader, so the region it stands in for has to: put
`,(0,_.jsx)(t.code,{children:`aria-busy="true"`}),` on it (as the CardPlaceholder story does) and remove
it when the content arrives.`]}),`
`,(0,_.jsx)(t.li,{children:`If the wait matters, announce it: a visually hidden status, or a
Spinner with a label.`}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`--muted`}),` is below any contrast floor on purpose. It is not content,
and should not compete with content that has arrived.`]}),`
`,(0,_.jsxs)(t.li,{children:[`The pulse stops under `,(0,_.jsx)(t.code,{children:`prefers-reduced-motion`}),`.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),i(),p()})))()}v();export{g as default};