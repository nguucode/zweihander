import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-5QHvYkjw.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-DOZWi2yR.js";import{n as b,t as x}from"./Status-CsQCr1NL.js";import{n as S,t as C}from"./Skeleton-DaxWbZcD.js";import{a as w,c as T,i as E,l as D,n as O,o as k,r as A,s as j,t as M}from"./Skeleton.stories-ZK8d3IUP.js";function N(e){let t={a:`a`,code:`code`,div:`div`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(i,{of:j}),`
`,`
`,`
`,(0,F.jsx)(t.h1,{id:`skeleton`,children:`Skeleton`}),`
`,(0,F.jsxs)(u,{children:[(0,F.jsxs)(_,{value:`overview`,children:[(0,F.jsx)(t.p,{children:`A placeholder in the shape of content that is still loading, so the page
keeps its layout and the reader sees what is coming.`}),(0,F.jsx)(x,{of:j}),(0,F.jsx)(s,{of:E}),(0,F.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`appearance`}),` sets the corners, to match what the shape stands in for. Any
appearance takes any size.`]}),(0,F.jsx)(s,{of:A}),(0,F.jsxs)(t.table,{children:[(0,F.jsx)(t.thead,{children:(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.th,{children:`Appearance`}),(0,F.jsx)(t.th,{children:`Use for`})]})}),(0,F.jsxs)(t.tbody,{children:[(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`circle`})}),(0,F.jsx)(t.td,{children:`An avatar or a round icon. Its height is its width.`})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`square`})}),(0,F.jsx)(t.td,{children:`The default: an image, a media block, anything with square corners.`})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`rounded`})}),(0,F.jsx)(t.td,{children:`Text, buttons and cards: anything with the kit's rounded corners.`})]})]})]}),(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`rows`}),` stacks lines of text, the last one shorter so it reads as a
paragraph rather than a block.`]}),(0,F.jsx)(s,{of:k}),(0,F.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,F.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-js`,children:`import { Skeleton } from 'zweihander/skeleton'
`})}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/skeleton.json
`})}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`Source: `,(0,F.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/loaders/Skeleton.tsx`,rel:`nofollow`,children:`src/components/loaders/Skeleton.tsx`})]}),`
`,(0,F.jsxs)(t.li,{children:[`Spec: `,(0,F.jsx)(t.a,{href:`https://www.uiguideline.com/components/skeleton`,rel:`nofollow`,children:`uiguideline.com/components/skeleton`})]}),`
`,(0,F.jsx)(t.li,{children:`Behaviour: a plain element; there is no behaviour here worth Base UI`}),`
`,(0,F.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,F.jsxs)(_,{value:`specs`,children:[(0,F.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,F.jsx)(y,{parts:T,children:(0,F.jsx)(a,{of:M})}),(0,F.jsx)(t.p,{children:`A skeleton is built from shapes like these, placed by the page in the
layout of the content that will replace them.`}),(0,F.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,F.jsxs)(t.p,{children:[`A skeleton has no sizes: `,(0,F.jsx)(t.code,{children:`width`}),` and `,(0,F.jsx)(t.code,{children:`height`}),` copy the content it stands
in for. These are the defaults, and the parts it sizes itself.`]}),(0,F.jsx)(g,{caption:`Every appearance`,rows:[{part:`Shape`,property:`Default height`,token:`--space-4`},{part:`Circle`,property:`Default width and height`,token:`--space-10`},{part:`Lines`,property:`Gap`,token:`--space-2`},{part:`Rounded`,property:`Corner radius`,token:`--radius-md`},{part:`Circle`,property:`Corner radius`,token:`--radius-pill`}]}),(0,F.jsxs)(t.p,{children:[`The default width is the container's. The last of several `,(0,F.jsx)(t.code,{children:`rows`}),` is 60%
of the width.`]}),(0,F.jsx)(t.h2,{id:`color`,children:`Color`}),(0,F.jsx)(t.p,{children:`Every shape is one colour, the same subtle surface as a hover. It is below
any contrast floor on purpose: a placeholder should read as "something
goes here", not compete with content that has arrived. Switch the theme in
the toolbar: the value follows.`}),(0,F.jsx)(g,{caption:`Every appearance`,rows:[{part:`Shape`,property:`Background`,token:`--muted`}]}),(0,F.jsx)(t.h2,{id:`states`,children:`States`}),(0,F.jsx)(t.p,{children:`A skeleton is not interactive: it has no hover, focus or pressed state.`}),(0,F.jsx)(v,{states:[{label:`Static`},{label:`Pulsing`,content:(0,F.jsx)(t.div,{style:I,children:(0,F.jsx)(C,{appearance:`rounded`,rows:3,height:12,width:200,hasAnimation:!0})})}],children:(0,F.jsx)(`div`,{style:I,children:(0,F.jsx)(C,{appearance:`rounded`,rows:3,height:12,width:200})})}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Static`}),` is the default.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Pulsing`}),`, with `,(0,F.jsx)(t.code,{children:`hasAnimation`}),`, fades to 50% and back every 1.6s. It
stops under `,(0,F.jsx)(t.code,{children:`prefers-reduced-motion`}),`.`]}),`
`]}),(0,F.jsx)(t.h2,{id:`api`,children:`API`}),(0,F.jsx)(`div`,{style:{overflowX:`auto`},children:(0,F.jsx)(o,{of:j})}),(0,F.jsxs)(t.p,{children:[`Every other `,(0,F.jsx)(t.code,{children:`<div>`}),` attribute passes through to the outer element.`]})]}),(0,F.jsxs)(_,{value:`guidelines`,children:[(0,F.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,F.jsx)(t.p,{children:`Use a Skeleton when you know the shape of what is loading: a list, a card,
a profile. Match the shapes to the content that will replace them, with
the same sizes and the same gaps.`}),(0,F.jsx)(l,{do:(0,F.jsx)(a,{of:E}),doCaption:`Shapes of the content that is coming: the layout holds when it arrives.`,dont:(0,F.jsx)(a,{of:w}),dontCaption:`One block for a whole card jumps to a different layout on load, which is worse than a spinner.`}),(0,F.jsxs)(t.p,{children:[`Animate the few shapes that matter, or none: `,(0,F.jsx)(t.code,{children:`hasAnimation`}),` is off by
default because a screen of pulsing shapes is noise.`]}),(0,F.jsx)(s,{of:O}),(0,F.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`When you do not know the shape of what is coming.`}),` Use a
`,(0,F.jsx)(t.a,{href:`?path=/docs/components-loaders-spinner--docs`,children:`Spinner`}),`.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For a long task with a known size.`}),` Use a
`,(0,F.jsx)(t.a,{href:`?path=/docs/components-loaders-progressbar--docs`,children:`Progress Bar`}),`.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For a load that is usually instant.`}),` A skeleton that flashes for
200ms is noise; show nothing, or a Spinner with a `,(0,F.jsx)(t.code,{children:`delay`}),`.`]}),`
`]}),(0,F.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`A skeleton is decoration`}),` and is `,(0,F.jsx)(t.code,{children:`aria-hidden`}),`, with its `,(0,F.jsx)(t.code,{children:`rows`}),`
hidden as one. It says nothing to a screen reader.`]}),`
`,(0,F.jsxs)(t.li,{children:[`The region it stands in for has to say it is loading: put
`,(0,F.jsx)(t.code,{children:`aria-busy="true"`}),` on it, as the CardPlaceholder story does, and remove
it when the content arrives.`]}),`
`,(0,F.jsx)(t.li,{children:`If the wait matters, announce it: a visually hidden status, or a Spinner
with a label.`}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`--muted`}),` is below 3:1 on the page in both modes, on purpose. It is not
content, and should not compete with content that has arrived.`]}),`
`,(0,F.jsxs)(t.li,{children:[`The pulse stops under `,(0,F.jsx)(t.code,{children:`prefers-reduced-motion`}),`.`]}),`
`]})]})]})]})}function P(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F,I;function L(){return(L=e((()=>{F=t(),r(),c(),d(),p(),h(),f(),m(),b(),S(),D(),I={background:`var(--background)`,padding:`var(--space-4)`,borderRadius:`var(--radius-lg)`}})))()}L();export{I as card,P as default};