import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./Avatar.stories-B4EBlTEf.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:p}),`
`,(0,g.jsx)(t.h1,{id:`avatar`,children:`Avatar`}),`
`,(0,g.jsxs)(t.p,{children:[`A picture of a person or account, with initials or a placeholder when
there is no picture. Spec:
`,(0,g.jsx)(t.a,{href:`https://www.uiguideline.com/components/avatar`,rel:`nofollow`,children:`uiguideline.com/components/avatar`}),`.`]}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Part`}),(0,g.jsx)(t.th,{children:`What it is`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Container`})}),(0,g.jsx)(t.td,{children:`The circle or square. Clips its content.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Image`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`imageSrc`}),`, cropped to fill (`,(0,g.jsx)(t.code,{children:`object-fit: cover`}),`).`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Initials`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`initials`}),`, shown when there is no image or it fails to load.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.strong,{children:`Placeholder`})}),(0,g.jsxs)(t.td,{children:[`The `,(0,g.jsx)(t.code,{children:`user`}),` icon, when there is neither.`]})]})]})]}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`size`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`xs`}),`, `,(0,g.jsx)(t.code,{children:`sm`}),`, `,(0,g.jsx)(t.code,{children:`md`}),`, `,(0,g.jsx)(t.code,{children:`lg`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`sm`})}),(0,g.jsx)(t.td,{children:`24, 32, 40, 48px.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`imageSrc`})}),(0,g.jsx)(t.td,{children:`string`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`imageAlt`})}),(0,g.jsx)(t.td,{children:`string`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Who this is. See Accessibility.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`initials`})}),(0,g.jsx)(t.td,{children:`string`}),(0,g.jsx)(t.td,{children:`–`}),(0,g.jsx)(t.td,{children:`Not in the spec's prop list; see below.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`appearance`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`circle`}),`, `,(0,g.jsx)(t.code,{children:`square`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`circle`})}),(0,g.jsx)(t.td,{})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`Every other `,(0,g.jsx)(t.code,{children:`<span>`}),` attribute passes through to the container.`]}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsxs)(t.strong,{children:[(0,g.jsx)(t.code,{children:`initials`}),` is added.`]}),` The spec's Anatomy has an Initials part but
its prop list has no way to set them. Pass the letters, not a name:
how to abbreviate a name depends on the language, and the kit should
not guess.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`A broken image falls back`}),` to initials or the placeholder instead
of showing the browser's broken-image icon. A new `,(0,g.jsx)(t.code,{children:`imageSrc`}),` is tried
again.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Circle ignores the radius preset`}),`; square follows it
(`,(0,g.jsx)(t.code,{children:`--radius-md`}),`).`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`imageAlt`}),` names the `,(0,g.jsx)(t.strong,{children:`whole avatar`}),`, not just the image, so the
image, the initials and the placeholder all announce the same person.
The inner `,(0,g.jsx)(t.code,{children:`<img>`}),` has `,(0,g.jsx)(t.code,{children:`alt=""`}),`.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Without `,(0,g.jsx)(t.code,{children:`imageAlt`}),` the avatar is `,(0,g.jsx)(t.strong,{children:`decorative`}),` and hidden. That is
right when the person's name is already printed next to it; announcing
it twice is noise.`]}),`
`,(0,g.jsx)(t.li,{children:`Initials are uppercased with CSS, so screen readers get the letters as
passed.`}),`
`,(0,g.jsxs)(t.li,{children:[`Initials are `,(0,g.jsx)(t.code,{children:`--secondary-foreground`}),` on `,(0,g.jsx)(t.code,{children:`--secondary`}),`, which meets
4.5:1 at the smallest size.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};