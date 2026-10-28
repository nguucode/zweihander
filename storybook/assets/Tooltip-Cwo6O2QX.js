import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{i as S,t as C}from"./Tooltip-C5EQMDXx.js";import{a as w,c as T,d as E,f as D,g as O,h as k,i as A,l as j,m as M,n as N,o as P,p as F,r as I,s as L,t as R,u as z}from"./Tooltip.stories-DXaT7zDv.js";function B(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(i,{of:F}),`
`,(0,H.jsx)(t.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,H.jsxs)(u,{children:[(0,H.jsxs)(_,{value:`overview`,children:[(0,H.jsxs)(t.p,{children:[`A short label that appears when you hover over or focus a control: the
name of an icon-only button, a keyboard shortcut, a one-line hint. Its
sibling `,(0,H.jsx)(t.code,{children:`HoverCard`}),` previews a person or record behind a link.`]}),(0,H.jsx)(x,{of:F}),(0,H.jsx)(s,{of:E}),(0,H.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,H.jsxs)(t.table,{children:[(0,H.jsx)(t.thead,{children:(0,H.jsxs)(t.tr,{children:[(0,H.jsx)(t.th,{children:`Variant`}),(0,H.jsx)(t.th,{children:`When to use`})]})}),(0,H.jsxs)(t.tbody,{children:[(0,H.jsxs)(t.tr,{children:[(0,H.jsx)(t.td,{children:`Tooltip`}),(0,H.jsx)(t.td,{children:`A label or a one-line hint on a control.`})]}),(0,H.jsxs)(t.tr,{children:[(0,H.jsx)(t.td,{children:`Hover card`}),(0,H.jsx)(t.td,{children:`A preview of a person or record on a link to it: avatar, name, meta and an optional action.`})]})]})]}),(0,H.jsxs)(t.p,{children:[`The tooltip opens on hover after a short delay and on keyboard focus at
once. Wrap a row of tooltips in `,(0,H.jsx)(t.code,{children:`TooltipGroup`}),` so that
once one has opened, moving to the next opens it without the delay:`]}),(0,H.jsx)(s,{of:P}),(0,H.jsx)(t.p,{children:`Only one tooltip is open at a time: opening one closes any other. Hover or
focus the triggers above to see them.`}),(0,H.jsx)(t.h3,{id:`hover-card`,children:`Hover card`}),(0,H.jsxs)(t.p,{children:[(0,H.jsx)(t.code,{children:`HoverCard`}),` opens after 600ms of hover or focus on a link and stays open
for 300ms after the pointer leaves, so the pointer can cross to it. It is
drawn like a Popover, a raised surface, not an inverted label:`]}),(0,H.jsx)(s,{of:z}),(0,H.jsx)(t.p,{children:`Hover the name to open the real one:`}),(0,H.jsx)(s,{of:j}),(0,H.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,H.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,H.jsx)(t.pre,{children:(0,H.jsx)(t.code,{className:`language-js`,children:`import { HoverCard, Tooltip, TooltipGroup } from 'zweihander/tooltip'
`})}),(0,H.jsx)(t.pre,{children:(0,H.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/tooltip.json
`})}),(0,H.jsxs)(t.ul,{children:[`
`,(0,H.jsxs)(t.li,{children:[`Source: `,(0,H.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/overlays/Tooltip.tsx`,rel:`nofollow`,children:`src/components/overlays/Tooltip.tsx`})]}),`
`,(0,H.jsxs)(t.li,{children:[`Spec: `,(0,H.jsx)(t.a,{href:`https://www.uiguideline.com/components/tooltip`,rel:`nofollow`,children:`uiguideline.com/components/tooltip`})]}),`
`,(0,H.jsxs)(t.li,{children:[`Behaviour: `,(0,H.jsx)(t.a,{href:`https://base-ui.com/react/components/tooltip`,rel:`nofollow`,children:`Base UI Tooltip`}),`, `,(0,H.jsx)(t.a,{href:`https://base-ui.com/react/components/preview-card`,rel:`nofollow`,children:`Base UI Preview Card`})]}),`
`,(0,H.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,H.jsxs)(_,{value:`specs`,children:[(0,H.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,H.jsx)(y,{parts:M,children:(0,H.jsx)(a,{of:R})}),(0,H.jsxs)(t.p,{children:[`The open tooltips on this tab and the next are pictures: real tooltips
held open and rendered in place with `,(0,H.jsx)(t.code,{children:`container`}),`, laid out above the
trigger where they open.`]}),(0,H.jsx)(t.p,{children:`The hover card, open under its link:`}),(0,H.jsx)(y,{parts:k,children:(0,H.jsx)(a,{of:L})}),(0,H.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,H.jsx)(g,{caption:`Container`,rows:[{part:`Container`,property:`Block padding`,token:`--space-stack`},{part:`Container`,property:`Inline padding`,token:`--space-inline`},{part:`Container`,property:`Corner radius`,token:`--radius-sm`},{part:`Text`,property:`Font size`,token:`--text-body-sm`},{part:`Text`,property:`Line height`,token:`--leading-body-sm`}]}),(0,H.jsxs)(t.p,{children:[`The container is as wide as its text, at most 20rem and never wider than
the room beside the trigger; longer text wraps. It opens 6px from the
trigger, on the `,(0,H.jsx)(t.code,{children:`--layer-tooltip`}),` layer, above popovers and modals, so a
tooltip on a control inside one still shows. It fades in over
`,(0,H.jsx)(t.code,{children:`--duration-fast`}),`.`]}),(0,H.jsx)(g,{caption:`Hover card`,rows:[{part:`Container`,property:`Padding`,token:`--space-group`},{part:`Container`,property:`Corner radius`,token:`--radius-panel`},{part:`Container`,property:`Shadow`,token:`--shadow-md`},{part:`Avatar to text`,property:`Gap`,token:`--space-cluster`},{part:`Text to action`,property:`Gap`,token:`--space-3`},{part:`Name`,property:`Font size`,token:`--text-body`},{part:`Meta`,property:`Font size`,token:`--text-body-sm`}]}),(0,H.jsxs)(t.p,{children:[`The hover card is as wide as its content, at most 20rem. It opens 6px
under the link, start-aligned, on the `,(0,H.jsx)(t.code,{children:`--layer-overlay`}),` layer with
Popover, below tooltips.`]}),(0,H.jsx)(t.h2,{id:`color`,children:`Color`}),(0,H.jsx)(g,{caption:`Every tooltip`,rows:[{part:`Container`,property:`Background`,token:`--foreground`},{part:`Text`,property:`Colour`,token:`--background`}]}),(0,H.jsx)(g,{caption:`Hover card`,rows:[{part:`Container`,property:`Background`,token:`--popover`},{part:`Container`,property:`Border`,token:`--border`},{part:`Name`,property:`Colour`,token:`--popover-foreground`},{part:`Meta`,property:`Colour`,token:`--muted-foreground`}]}),(0,H.jsx)(t.p,{children:`The tooltip is inverted in both modes: a tooltip is not part of the page, and the
dark-on-light (light-on-dark in dark mode) box says so, at the same
contrast as body text.`}),(0,H.jsx)(t.h2,{id:`states`,children:`States`}),(0,H.jsx)(v,{states:[{label:`Closed`,content:(0,H.jsx)(a,{of:N})},{label:`Open`,content:(0,H.jsx)(a,{of:D})}]}),(0,H.jsxs)(t.ul,{children:[`
`,(0,H.jsxs)(t.li,{children:[(0,H.jsx)(t.strong,{children:`Closed`}),` until the pointer rests on the trigger for `,(0,H.jsx)(t.code,{children:`delay`}),` (300ms), or
the trigger takes keyboard focus, which opens it at once.`]}),`
`,(0,H.jsxs)(t.li,{children:[(0,H.jsx)(t.strong,{children:`Open`}),` until Escape, blur or the pointer leaves, after `,(0,H.jsx)(t.code,{children:`closeDelay`}),`.
Opening fades it in and scales it up from 96%.`]}),`
`,(0,H.jsx)(t.li,{children:`The trigger keeps the states of its own component; the tooltip has none
of its own.`}),`
`,(0,H.jsxs)(t.li,{children:[`The hover card has the same two states, after `,(0,H.jsx)(t.code,{children:`delay`}),` (600ms) of hover
or focus and `,(0,H.jsx)(t.code,{children:`closeDelay`}),` (300ms) after the pointer leaves both the link
and the card.`]}),`
`]}),(0,H.jsx)(t.h2,{id:`api`,children:`API`}),(0,H.jsx)(`div`,{style:{overflowX:`auto`},children:(0,H.jsx)(o,{of:F})}),(0,H.jsxs)(t.p,{children:[(0,H.jsx)(t.code,{children:`TooltipGroup`}),` is Base UI's `,(0,H.jsx)(t.code,{children:`Tooltip.Provider`}),`: tooltips inside it share
one delay.`]}),(0,H.jsx)(t.h3,{id:`hovercard`,children:`HoverCard`}),(0,H.jsx)(`div`,{style:{overflowX:`auto`},children:(0,H.jsx)(o,{of:C})})]}),(0,H.jsxs)(_,{value:`guidelines`,children:[(0,H.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,H.jsx)(t.p,{children:`Use a Tooltip for a label or a hint: the name of an icon-only button, a
keyboard shortcut, one line on what a control does. 300ms before it opens
is quick enough to feel responsive and long enough that tooltips do not
flash as the pointer crosses a toolbar.`}),(0,H.jsx)(l,{do:(0,H.jsx)(a,{of:A}),doCaption:`A short label that repeats the icon-only button's name for sighted users.`,dont:(0,H.jsx)(a,{of:w}),dontCaption:`Rules the reader needs to fill the field. Touch cannot open a tooltip, and it hides as soon as focus moves on: put the rules under the field.`}),(0,H.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,H.jsxs)(t.ul,{children:[`
`,(0,H.jsxs)(t.li,{children:[(0,H.jsx)(t.strong,{children:`For anything a reader needs to finish a task.`}),` Put it on the page: a
tooltip cannot be reached by touch, and it disappears the moment you
look away.`]}),`
`,(0,H.jsxs)(t.li,{children:[(0,H.jsx)(t.strong,{children:`For links, buttons or other interactive content.`}),` Hover and touch
cannot reach the tooltip. Use a
`,(0,H.jsx)(t.a,{href:`?path=/docs/components-overlays-popover--docs`,children:`Popover`}),`.`]}),`
`,(0,H.jsxs)(t.li,{children:[(0,H.jsx)(t.strong,{children:`For a rich preview.`}),` A tooltip holds text only. To preview a person
or record behind a link, use `,(0,H.jsx)(t.code,{children:`HoverCard`}),`. Its action is a shortcut, so
the linked page must offer the same action.`]}),`
`,(0,H.jsxs)(t.li,{children:[(0,H.jsx)(t.strong,{children:`On a disabled button.`}),` It is not focusable, so its tooltip never opens
by keyboard. Put the reason it is disabled in text next to it.`]}),`
`]}),(0,H.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,H.jsxs)(t.ul,{children:[`
`,(0,H.jsxs)(t.li,{children:[`
`,(0,H.jsxs)(t.p,{children:[`It opens on hover after `,(0,H.jsx)(t.code,{children:`delay`}),` and on keyboard focus at once, and
closes on Escape, blur or pointer leave.`]}),`
`,(0,H.jsx)(s,{of:I}),`
`]}),`
`,(0,H.jsxs)(t.li,{children:[`
`,(0,H.jsxs)(t.p,{children:[`Base UI keeps tooltips out of the accessibility tree. This component
gives the popup `,(0,H.jsx)(t.code,{children:`role="tooltip"`}),` and, while it is open, points the
trigger's `,(0,H.jsx)(t.code,{children:`aria-describedby`}),` at it, so it is read as a description.`]}),`
`]}),`
`,(0,H.jsxs)(t.li,{children:[`
`,(0,H.jsxs)(t.p,{children:[`It is a `,(0,H.jsx)(t.strong,{children:`description, not a name.`}),` An icon-only button still needs its
own `,(0,H.jsx)(t.code,{children:`aria-label`}),`; the tooltip then shows that label to sighted users too.`]}),`
`]}),`
`,(0,H.jsxs)(t.li,{children:[`
`,(0,H.jsx)(t.p,{children:`The trigger must be focusable: a Button, a link, a field.`}),`
`]}),`
`,(0,H.jsxs)(t.li,{children:[`
`,(0,H.jsxs)(t.p,{children:[(0,H.jsx)(t.code,{children:`--background`}),` on `,(0,H.jsx)(t.code,{children:`--foreground`}),` reads at 16:1 or more in both modes.`]}),`
`]}),`
`]}),(0,H.jsx)(t.h3,{id:`hover-card-1`,children:`Hover card`}),(0,H.jsxs)(t.ul,{children:[`
`,(0,H.jsxs)(t.li,{children:[`
`,(0,H.jsx)(t.p,{children:`The trigger is a link to what the card previews. Hover or keyboard focus
on it opens the card; Escape closes it.`}),`
`,(0,H.jsx)(s,{of:T}),`
`]}),`
`,(0,H.jsxs)(t.li,{children:[`
`,(0,H.jsx)(t.p,{children:`The card is a visual preview, not a dialog: focus stays on the link and
Tab moves past the card, its action included. Touch has no hover, so
everything on it must be on the page the link opens.`}),`
`]}),`
`]})]})]})]})}function V(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,H.jsx)(t,{...e,children:(0,H.jsx)(B,{...e})}):B(e)}var H;function U(){return(U=e((()=>{H=t(),r(),c(),d(),p(),h(),f(),m(),b(),O(),S()})))()}U();export{V as default};