import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-C4DQin6J.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-CmyhQ0nv.js";import{n as b,t as x}from"./Status-k1ODXqUs.js";import{a as S,c as C,d as w,i as T,l as E,n as D,o as O,r as k,s as A,t as j,u as M}from"./Tooltip.stories-z7_O2sEQ.js";function N(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(i,{of:E}),`
`,(0,F.jsx)(t.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,F.jsxs)(u,{children:[(0,F.jsxs)(_,{value:`overview`,children:[(0,F.jsx)(t.p,{children:`A short label that appears when you hover over or focus a control: the
name of an icon-only button, a keyboard shortcut, a one-line hint.`}),(0,F.jsx)(x,{of:E}),(0,F.jsx)(s,{of:A}),(0,F.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,F.jsxs)(t.p,{children:[`There is one tooltip. It opens on hover after a short delay and on
keyboard focus at once. Wrap a row of tooltips in `,(0,F.jsx)(t.code,{children:`TooltipGroup`}),` so that
once one has opened, moving to the next opens it without the delay:`]}),(0,F.jsx)(s,{of:O}),(0,F.jsx)(t.p,{children:`Only one tooltip is open at a time: opening one closes any other. Hover or
focus the triggers above to see them.`}),(0,F.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,F.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-js`,children:`import { Tooltip, TooltipGroup } from 'zweihander/tooltip'
`})}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/tooltip.json
`})}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`Source: `,(0,F.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/overlays/Tooltip.tsx`,rel:`nofollow`,children:`src/components/overlays/Tooltip.tsx`})]}),`
`,(0,F.jsxs)(t.li,{children:[`Spec: `,(0,F.jsx)(t.a,{href:`https://www.uiguideline.com/components/tooltip`,rel:`nofollow`,children:`uiguideline.com/components/tooltip`})]}),`
`,(0,F.jsxs)(t.li,{children:[`Behaviour: `,(0,F.jsx)(t.a,{href:`https://base-ui.com/react/components/tooltip`,rel:`nofollow`,children:`Base UI Tooltip`})]}),`
`,(0,F.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,F.jsxs)(_,{value:`specs`,children:[(0,F.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,F.jsx)(y,{parts:M,children:(0,F.jsx)(a,{of:j})}),(0,F.jsxs)(t.p,{children:[`The open tooltips on this tab and the next are pictures: real tooltips
held open and rendered in place with `,(0,F.jsx)(t.code,{children:`container`}),`, laid out above the
trigger where they open.`]}),(0,F.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,F.jsx)(g,{caption:`Container`,rows:[{part:`Container`,property:`Block padding`,token:`--space-1`},{part:`Container`,property:`Inline padding`,token:`--space-2`},{part:`Container`,property:`Corner radius`,token:`--radius-sm`},{part:`Text`,property:`Font size`,token:`--text-body-sm`},{part:`Text`,property:`Line height`,token:`--leading-body-sm`}]}),(0,F.jsxs)(t.p,{children:[`The container is as wide as its text, at most 20rem and never wider than
the room beside the trigger; longer text wraps. It opens 6px from the
trigger, on the `,(0,F.jsx)(t.code,{children:`--layer-tooltip`}),` layer, above popovers and modals, so a
tooltip on a control inside one still shows. It fades in over
`,(0,F.jsx)(t.code,{children:`--duration-fast`}),`.`]}),(0,F.jsx)(t.h2,{id:`color`,children:`Color`}),(0,F.jsx)(g,{caption:`Every tooltip`,rows:[{part:`Container`,property:`Background`,token:`--foreground`},{part:`Text`,property:`Colour`,token:`--background`}]}),(0,F.jsx)(t.p,{children:`Inverted in both modes: a tooltip is not part of the page, and the
dark-on-light (light-on-dark in dark mode) box says so, at the same
contrast as body text.`}),(0,F.jsx)(t.h2,{id:`states`,children:`States`}),(0,F.jsx)(v,{states:[{label:`Closed`,content:(0,F.jsx)(a,{of:D})},{label:`Open`,content:(0,F.jsx)(a,{of:C})}]}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Closed`}),` until the pointer rests on the trigger for `,(0,F.jsx)(t.code,{children:`delay`}),` (300ms), or
the trigger takes keyboard focus, which opens it at once.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Open`}),` until Escape, blur or the pointer leaves, after `,(0,F.jsx)(t.code,{children:`closeDelay`}),`.
Opening fades it in and scales it up from 96%.`]}),`
`,(0,F.jsx)(t.li,{children:`The trigger keeps the states of its own component; the tooltip has none
of its own.`}),`
`]}),(0,F.jsx)(t.h2,{id:`api`,children:`API`}),(0,F.jsx)(`div`,{style:{overflowX:`auto`},children:(0,F.jsx)(o,{of:E})}),(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`TooltipGroup`}),` is Base UI's `,(0,F.jsx)(t.code,{children:`Tooltip.Provider`}),`: tooltips inside it share
one delay.`]})]}),(0,F.jsxs)(_,{value:`guidelines`,children:[(0,F.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,F.jsx)(t.p,{children:`Use a Tooltip for a label or a hint: the name of an icon-only button, a
keyboard shortcut, one line on what a control does. 300ms before it opens
is quick enough to feel responsive and long enough that tooltips do not
flash as the pointer crosses a toolbar.`}),(0,F.jsx)(l,{do:(0,F.jsx)(a,{of:T}),doCaption:`A short label that repeats the icon-only button's name for sighted users.`,dont:(0,F.jsx)(a,{of:S}),dontCaption:`Rules the reader needs to fill the field. Touch cannot open a tooltip, and it hides as soon as focus moves on: put the rules under the field.`}),(0,F.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For anything a reader needs to finish a task.`}),` Put it on the page: a
tooltip cannot be reached by touch, and it disappears the moment you
look away.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For links, buttons or other interactive content.`}),` Hover and touch
cannot reach the tooltip. Use a
`,(0,F.jsx)(t.a,{href:`?path=/docs/components-overlays-popover--docs`,children:`Popover`}),`.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`On a disabled button.`}),` It is not focusable, so its tooltip never opens
by keyboard. Put the reason it is disabled in text next to it.`]}),`
`]}),(0,F.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`
`,(0,F.jsxs)(t.p,{children:[`It opens on hover after `,(0,F.jsx)(t.code,{children:`delay`}),` and on keyboard focus at once, and
closes on Escape, blur or pointer leave.`]}),`
`,(0,F.jsx)(s,{of:k}),`
`]}),`
`,(0,F.jsxs)(t.li,{children:[`
`,(0,F.jsxs)(t.p,{children:[`Base UI keeps tooltips out of the accessibility tree. This component
gives the popup `,(0,F.jsx)(t.code,{children:`role="tooltip"`}),` and, while it is open, points the
trigger's `,(0,F.jsx)(t.code,{children:`aria-describedby`}),` at it, so it is read as a description.`]}),`
`]}),`
`,(0,F.jsxs)(t.li,{children:[`
`,(0,F.jsxs)(t.p,{children:[`It is a `,(0,F.jsx)(t.strong,{children:`description, not a name.`}),` An icon-only button still needs its
own `,(0,F.jsx)(t.code,{children:`aria-label`}),`; the tooltip then shows that label to sighted users too.`]}),`
`]}),`
`,(0,F.jsxs)(t.li,{children:[`
`,(0,F.jsx)(t.p,{children:`The trigger must be focusable: a Button, a link, a field.`}),`
`]}),`
`,(0,F.jsxs)(t.li,{children:[`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`--background`}),` on `,(0,F.jsx)(t.code,{children:`--foreground`}),` reads at 16:1 or more in both modes.`]}),`
`]}),`
`]})]})]})]})}function P(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=t(),r(),c(),d(),p(),h(),f(),m(),b(),w()})))()}I();export{P as default};