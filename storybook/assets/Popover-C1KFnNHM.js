import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-DsER1A51.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-I6SQLLHM.js";import{n as b,t as x}from"./Status-CNj0XQZL.js";import{a as S,c as C,i as w,l as T,n as E,o as D,r as O,s as k,t as A,u as j}from"./Popover.stories-Cvapyb8r.js";function M(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(c,{of:C}),`
`,(0,P.jsx)(t.h1,{id:`popover`,children:`Popover`}),`
`,(0,P.jsxs)(u,{children:[(0,P.jsxs)(_,{value:`overview`,children:[(0,P.jsx)(t.p,{children:`A small panel anchored to a button, for content you interact with: a share
form, a filter, a set of options. It opens on click and stays until you
close it.`}),(0,P.jsx)(x,{of:C}),(0,P.jsx)(s,{of:k}),(0,P.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`Variant`}),(0,P.jsx)(t.th,{children:`Use for`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:`Non-modal (default)`}),(0,P.jsx)(t.td,{children:`Most popovers. Tab can leave it and the page stays usable while it is open.`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsxs)(t.td,{children:[`Modal (`,(0,P.jsx)(t.code,{children:`isModal`}),`)`]}),(0,P.jsx)(t.td,{children:`A popover that must be finished or closed first: focus stays inside, the page does not scroll and presses outside are blocked.`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`openOnHover`})}),(0,P.jsx)(t.td,{children:`A preview that also opens on hover, when what it holds must be reachable by click, keyboard and touch. A person or record preview on a link fits here too.`})]})]})]}),(0,P.jsxs)(t.p,{children:[`A title is optional. Without one, name the popover with `,(0,P.jsx)(t.code,{children:`aria-label`}),`:`]}),(0,P.jsx)(s,{of:O}),(0,P.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,P.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,P.jsx)(t.pre,{children:(0,P.jsx)(t.code,{className:`language-js`,children:`import { Popover } from 'zweihander/popover'
`})}),(0,P.jsx)(t.pre,{children:(0,P.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/popover.json
`})}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[`Source: `,(0,P.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/overlays/Popover.tsx`,rel:`nofollow`,children:`src/components/overlays/Popover.tsx`})]}),`
`,(0,P.jsxs)(t.li,{children:[`Spec: `,(0,P.jsx)(t.a,{href:`https://www.uiguideline.com/components/popover`,rel:`nofollow`,children:`uiguideline.com/components/popover`})]}),`
`,(0,P.jsxs)(t.li,{children:[`Behaviour: `,(0,P.jsx)(t.a,{href:`https://base-ui.com/react/components/popover`,rel:`nofollow`,children:`Base UI Popover`})]}),`
`,(0,P.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,P.jsxs)(_,{value:`specs`,children:[(0,P.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,P.jsx)(y,{parts:T,children:(0,P.jsx)(i,{of:A})}),(0,P.jsxs)(t.p,{children:[`The open popovers on this tab and the next are pictures: real popovers
rendered in place with `,(0,P.jsx)(t.code,{children:`container`}),` and inert, the popup laid out under the
trigger where it opens.`]}),(0,P.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,P.jsx)(g,{caption:`Container`,rows:[{part:`Container`,property:`Padding`,token:`--space-group`},{part:`Container`,property:`Corner radius`,token:`--radius-lg`},{part:`Container`,property:`Shadow`,token:`--shadow-overlay`},{part:`Title`,property:`Font size`,token:`--text-body`},{part:`Title`,property:`Line height`,token:`--leading-body`},{part:`Title to close button`,property:`Gap`,token:`--space-cluster`},{part:`Body`,property:`Gap above`,token:`--space-3`}]}),(0,P.jsx)(g,{caption:`Close button`,rows:[{part:`Close button`,property:`Corner radius`,token:`--radius-sm`},{part:`Icon`,property:`Size`,token:`--icon-md`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset-inset`},{part:`Hit area`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,P.jsxs)(t.p,{children:[`The container is as wide as its content, at most 22rem and never wider
than the room beside the trigger. It has no arrow: it opens 6px from the
trigger and lines up with it, which already ties the two. It has a 1px
border and a semibold title. The header stacks the title and the
description with no gap between them, and the close button sits beside
both, flush in the top-right corner of the padding. The 8px corner and the overlay shadow are
Atlassian's popup; the 16px padding and the 22rem cap are the kit's own. The close button is 20px: 2px around its icon,
one line of text tall. Popovers sit on the `,(0,P.jsx)(t.code,{children:`--layer-overlay`}),` layer and fade
in over `,(0,P.jsx)(t.code,{children:`--duration-fast`}),`.`]}),(0,P.jsx)(t.h2,{id:`color`,children:`Color`}),(0,P.jsx)(g,{caption:`Every popover`,rows:[{part:`Container`,property:`Background`,token:`--color-surface-overlay`},{part:`Container`,property:`Border`,token:`--color-border`},{part:`Title, body`,property:`Colour`,token:`--color-text`},{part:`Description`,property:`Colour`,token:`--color-text-subtlest`},{part:`Close button`,property:`Colour`,token:`--color-text-subtlest`},{part:`Close button, hover`,property:`Background`,token:`--color-background-neutral`},{part:`Close button, hover`,property:`Colour`,token:`--color-text`},{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,P.jsxs)(t.p,{children:[`Select and Combobox lists use the same surface: `,(0,P.jsx)(t.code,{children:`--color-surface-overlay`}),`, its border
and shadow.`]}),(0,P.jsx)(t.h2,{id:`states`,children:`States`}),(0,P.jsx)(t.p,{children:`The popover is open or closed. Opening fades it in and scales it up from
97%, from the trigger's side. The trigger keeps the states of its own
component (see Button); the close button is the only part with states of
its own:`}),(0,P.jsx)(v,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`}],children:(0,P.jsx)(i,{of:E})}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Hover`}),` fills the close button with `,(0,P.jsx)(t.code,{children:`--color-background-neutral`}),`.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,P.jsx)(t.code,{children:`--color-border-focused`}),` outline drawn inside the button.`]}),`
`]}),(0,P.jsx)(t.h2,{id:`api`,children:`API`}),(0,P.jsx)(`div`,{style:{overflowX:`auto`},children:(0,P.jsx)(o,{of:C})})]}),(0,P.jsxs)(_,{value:`guidelines`,children:[(0,P.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,P.jsx)(t.p,{children:`Use a Popover for a short task that belongs to the button that opens it:
share a file, set a filter, pick from a few options. It holds links,
inputs and buttons, which a Tooltip must not.`}),(0,P.jsx)(l,{do:(0,P.jsx)(i,{of:w}),doCaption:`A short task tied to its button: one field and one action.`,dont:(0,P.jsx)(i,{of:S}),dontCaption:`A whole form in a popover. It closes on a stray press outside and loses the work: use a Modal.`}),(0,P.jsxs)(t.p,{children:[`It opens below the trigger by default; `,(0,P.jsx)(t.code,{children:`side`}),` and `,(0,P.jsx)(t.code,{children:`align`}),` move it. When
that side has no room, it flips to the other one.`]}),(0,P.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`For a label or a hint`}),` on hover or focus. Use a
`,(0,P.jsx)(t.a,{href:`?path=/docs/components-overlays-tooltip--docs`,children:`Tooltip`}),`.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`For a list of actions or commands.`}),` Use a
`,(0,P.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`}),`: it has the
arrow-key navigation a list of commands needs.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`For a long form or a decision with consequences.`}),` Use a
`,(0,P.jsx)(t.a,{href:`?path=/docs/components-overlays-modal--docs`,children:`Modal`}),`.`]}),`
`]}),(0,P.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[`
`,(0,P.jsxs)(t.p,{children:[`The popup is a `,(0,P.jsx)(t.code,{children:`role="dialog"`}),` named by `,(0,P.jsx)(t.code,{children:`title`}),` (or `,(0,P.jsx)(t.code,{children:`aria-label`}),`) and
described by `,(0,P.jsx)(t.code,{children:`description`}),`. The trigger carries `,(0,P.jsx)(t.code,{children:`aria-expanded`}),` and
`,(0,P.jsx)(t.code,{children:`aria-haspopup`}),`.`]}),`
`]}),`
`,(0,P.jsxs)(t.li,{children:[`
`,(0,P.jsx)(t.p,{children:`Opening moves focus into the popup; Escape or a press outside closes it
and returns focus to the trigger.`}),`
`]}),`
`,(0,P.jsxs)(t.li,{children:[`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.strong,{children:`Non-modal by default:`}),` Tab can leave the popup, and the page stays
usable. `,(0,P.jsx)(t.code,{children:`isModal`}),` switches to Base UI's modal mode: focus is trapped,
page scroll is locked and presses outside are blocked.`]}),`
`]}),`
`,(0,P.jsxs)(t.li,{children:[`
`,(0,P.jsxs)(t.p,{children:[`Base UI only traps focus when the popup contains a close button, and a
touch screen reader needs one to get out. So a modal popover without
`,(0,P.jsx)(t.code,{children:`hasCloseButton`}),` still renders one: hidden until it has keyboard focus,
then shown in the corner, so focus is never invisible.`]}),`
`,(0,P.jsx)(s,{of:D}),`
`]}),`
`,(0,P.jsxs)(t.li,{children:[`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`openOnHover`}),` adds hover to click, it does not replace it: the content
stays reachable by keyboard and touch.`]}),`
`]}),`
`,(0,P.jsxs)(t.li,{children:[`
`,(0,P.jsx)(t.p,{children:`The close button has the 2px focus ring and a 44px hit area on touch
screens.`}),`
`]}),`
`]})]})]})]})}function N(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;function F(){return(F=e((()=>{P=t(),r(),a(),d(),p(),h(),f(),m(),b(),j()})))()}F();export{N as default};