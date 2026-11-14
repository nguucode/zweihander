import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-DsER1A51.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-I6SQLLHM.js";import{n as b,t as x}from"./Status-CNj0XQZL.js";import{a as S,c as C,d as w,f as T,i as E,l as D,n as O,o as k,p as A,r as j,s as M,t as N,u as P}from"./Modal.stories-CBS2xDQS.js";function F(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(c,{of:D}),`
`,(0,L.jsx)(t.h1,{id:`modal`,children:`Modal`}),`
`,(0,L.jsxs)(u,{children:[(0,L.jsxs)(_,{value:`overview`,children:[(0,L.jsx)(t.p,{children:`A dialog over the page that has to be dealt with before going back: a
short form, a confirmation, a decision. Everything behind it is dimmed and
out of reach until it closes.`}),(0,L.jsx)(x,{of:D}),(0,L.jsx)(s,{of:E}),(0,L.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Variant`}),(0,L.jsx)(t.th,{children:`Use for`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:`Dialog (default)`}),(0,L.jsx)(t.td,{children:`A short task on its own: edit a profile, invite people. A close button, Escape and a press on the backdrop all close it.`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsxs)(t.td,{children:[`Alert (`,(0,L.jsx)(t.code,{children:`isAlert`}),`)`]}),(0,L.jsx)(t.td,{children:`A decision with consequences: delete, discard, leave. No close button and a press on the backdrop does nothing, so it ends only through its own buttons or Escape.`})]})]})]}),(0,L.jsx)(s,{of:N}),(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`size`}),` sets the maximum width: `,(0,L.jsx)(t.code,{children:`sm`}),` (400px) for an alert, `,(0,L.jsx)(t.code,{children:`md`}),` (600px) for
a short form, `,(0,L.jsx)(t.code,{children:`lg`}),` (800px) for long content. Taller than the screen, the
body scrolls and the title and footer stay in view. On a screen under
480px wide the modal is the whole screen.`]}),(0,L.jsx)(s,{of:P}),(0,L.jsx)(s,{of:C}),(0,L.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,L.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-js`,children:`import { Modal, ModalClose } from 'zweihander/modal'
`})}),(0,L.jsx)(t.pre,{children:(0,L.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/modal.json
`})}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[`Source: `,(0,L.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/overlays/Modal.tsx`,rel:`nofollow`,children:`src/components/overlays/Modal.tsx`})]}),`
`,(0,L.jsxs)(t.li,{children:[`Spec: `,(0,L.jsx)(t.a,{href:`https://www.uiguideline.com/components/modal`,rel:`nofollow`,children:`uiguideline.com/components/modal`})]}),`
`,(0,L.jsxs)(t.li,{children:[`Behaviour: `,(0,L.jsx)(t.a,{href:`https://base-ui.com/react/components/dialog`,rel:`nofollow`,children:`Base UI Dialog`}),` and `,(0,L.jsx)(t.a,{href:`https://base-ui.com/react/components/alert-dialog`,rel:`nofollow`,children:`Alert Dialog`})]}),`
`,(0,L.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,L.jsxs)(_,{value:`specs`,children:[(0,L.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,L.jsx)(y,{parts:T,children:(0,L.jsx)(i,{of:O})}),(0,L.jsxs)(t.p,{children:[`The open modals on this tab and the next are pictures: real modals
rendered in a frame with `,(0,L.jsx)(t.code,{children:`container`}),`, not modal (`,(0,L.jsx)(t.code,{children:`isModal={false}`}),`) and
inert, so they do not lock this page or take its focus.`]}),(0,L.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,L.jsx)(g,{caption:`Container`,rows:[{part:`Container`,property:`Padding, from the outer edge`,token:`--space-container`},{part:`Container`,property:`Corner radius`,token:`--radius-panel`},{part:`Container`,property:`Shadow`,token:`--shadow-overlay`},{part:`Title`,property:`Font size`,token:`--text-heading-md`},{part:`Title`,property:`Line height`,token:`--leading-heading-md`},{part:`Title to close button`,property:`Gap`,token:`--space-group`},{part:`Title to description`,property:`Gap`,token:`--space-inline`},{part:`Body, footer`,property:`Gap above`,token:`--space-group`},{part:`Footer`,property:`Gap between actions`,token:`--space-inline`}]}),(0,L.jsx)(g,{caption:`Close button`,rows:[{part:`Close button`,property:`Padding`,token:`--control-xs-gap`},{part:`Close button`,property:`Corner radius`,token:`--radius-sm`},{part:`Icon`,property:`Size`,token:`--icon-md`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset-inset`},{part:`Hit area`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,L.jsxs)(t.p,{children:[`The gutter to the screen has no token: the spacing scale has no 60px
step, so the CSS adds two (`,(0,L.jsx)(t.code,{children:`--space-12`}),` and `,(0,L.jsx)(t.code,{children:`--space-3`}),`).`]}),(0,L.jsxs)(t.table,{children:[(0,L.jsx)(t.thead,{children:(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.th,{children:`Screen width`}),(0,L.jsx)(t.th,{children:`Gutter, each side`}),(0,L.jsx)(t.th,{children:`From the top`}),(0,L.jsx)(t.th,{children:`Width`}),(0,L.jsx)(t.th,{children:`Height`})]})}),(0,L.jsxs)(t.tbody,{children:[(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:`480px and up`}),(0,L.jsx)(t.td,{children:`60px`}),(0,L.jsx)(t.td,{children:`60px`}),(0,L.jsxs)(t.td,{children:[(0,L.jsx)(t.code,{children:`size`}),`, at most the screen less 120px`]}),(0,L.jsx)(t.td,{children:`Its content, at most the screen less 120px; then the body scrolls`})]}),(0,L.jsxs)(t.tr,{children:[(0,L.jsx)(t.td,{children:`Under 480px`}),(0,L.jsx)(t.td,{children:`0`}),(0,L.jsx)(t.td,{children:`0`}),(0,L.jsx)(t.td,{children:`The screen`}),(0,L.jsx)(t.td,{children:`The screen; the body scrolls, the footer sits at the bottom`})]})]})]}),(0,L.jsxs)(t.p,{children:[`"Screen" is the box the modal opens in: the window, or the `,(0,L.jsx)(t.code,{children:`container`}),`
when that contains layout. Under 480px the modal has no corner radius and
no shadow.`]}),(0,L.jsxs)(t.p,{children:[`Width is `,(0,L.jsx)(t.code,{children:`size`}),`: at most 400px (`,(0,L.jsx)(t.code,{children:`sm`}),`), 600px (`,(0,L.jsx)(t.code,{children:`md`}),`) or 800px (`,(0,L.jsx)(t.code,{children:`lg`}),`), set
in rem (25, 37.5, 50), and never wider than the screen less its gutter.
These are Atlassian's small, medium and large modals, with its 24px
padding, 12px corner and 20/24 semibold title, 16px from the title to the
body and from the body to the footer, and 8px between the footer's
buttons. The 8px from the title to the description is the kit's own:
Atlassian's header has no description. The 60px gutter, the 60px from
the top (the modal is not centred, so a body that grows does not move the
title) and the full screen under 480px are Atlassian's too. The header stacks the title and the description in one
column, with the close button beside both. The close button is a 24px box, as
tall as the title's line, flush with the padding. The border is 1px, and the padding counts it:
the content sits 24px from the modal's edge. Backdrop
and modal sit on the `,(0,L.jsx)(t.code,{children:`--layer-overlay`}),` layer and fade in over
`,(0,L.jsx)(t.code,{children:`--duration-base`}),`.`]}),(0,L.jsx)(t.h2,{id:`color`,children:`Color`}),(0,L.jsx)(g,{caption:`Every modal`,rows:[{part:`Backdrop`,property:`Background`,token:`--color-blanket`},{part:`Container`,property:`Background`,token:`--color-surface-overlay`},{part:`Container`,property:`Border`,token:`--color-border`},{part:`Title, body`,property:`Colour`,token:`--color-text`},{part:`Description`,property:`Colour`,token:`--color-text-subtlest`},{part:`Close button`,property:`Colour`,token:`--color-text-subtlest`},{part:`Close button, hover`,property:`Background`,token:`--color-background-neutral`},{part:`Close button, hover`,property:`Colour`,token:`--color-text`},{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,L.jsx)(t.p,{children:`Buttons in the footer keep their own colours: see Button.`}),(0,L.jsx)(t.h2,{id:`states`,children:`States`}),(0,L.jsx)(t.p,{children:`The modal is open or closed. Opening fades the backdrop in and scales the
container up from 97%; closing reverses it. The close button is the only
part with states of its own:`}),(0,L.jsx)(v,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`}],children:(0,L.jsx)(i,{of:j})}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`Hover`}),` fills the button with `,(0,L.jsx)(t.code,{children:`--color-background-neutral`}),`.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,L.jsx)(t.code,{children:`--color-border-focused`}),` outline drawn inside the button, so it is not
clipped at the container's corner.`]}),`
`]}),(0,L.jsx)(t.h2,{id:`api`,children:`API`}),(0,L.jsx)(`div`,{style:{overflowX:`auto`},children:(0,L.jsx)(o,{of:D})}),(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`ModalClose`}),` closes the modal it is in. Give it your own button with
`,(0,L.jsx)(t.code,{children:`render`}),`: `,(0,L.jsx)(t.code,{children:`<ModalClose render={<Button variant="secondary" />}>Cancel</ModalClose>`}),`.`]})]}),(0,L.jsxs)(_,{value:`guidelines`,children:[(0,L.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,L.jsxs)(t.p,{children:[`Reach for a modal last: it stops everything else. Use one when the task
must be finished or abandoned before going on, or for a decision with
consequences. For a decision, use `,(0,L.jsx)(t.code,{children:`isAlert`}),`, say exactly what will happen in
the description, and name the buttons after what they do. Before a delete
or anything else that cannot be undone, use a
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-overlays-confirm-dialog--docs`,children:`Confirm Dialog`}),`: it
is this alert with the warning, the focus on Cancel and type to confirm
built in.`]}),(0,L.jsx)(l,{do:(0,L.jsx)(i,{of:k}),doCaption:`Name the buttons after what they do: Delete, Keep project. The choice reads without the question.`,dont:(0,L.jsx)(i,{of:M}),dontCaption:`OK and Cancel make the reader go back to the question to know which one deletes.`}),(0,L.jsxs)(t.p,{children:[`Put the main action last in the footer, and dismiss actions (Cancel, Keep)
in the `,(0,L.jsx)(t.code,{children:`secondary`}),` variant.`]}),(0,L.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`For a small form tied to one button`}),`, such as Share or a filter. Use a
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-overlays-popover--docs`,children:`Popover`}),`: it opens beside
the button and leaves the page usable.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`For information`}),`: a success, a warning, a tip. Use an
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-notifications-inlinealert--docs`,children:`Inline Alert`}),` or a
`,(0,L.jsx)(t.a,{href:`?path=/docs/components-notifications-toast--docs`,children:`Toast`}),`; neither stops
the reader.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`For a long or many-step task.`}),` Give it a page of its own.`]}),`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.strong,{children:`Over another modal.`}),` Close the first, or move the second step into it.`]}),`
`]}),(0,L.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`role="dialog"`}),` (or `,(0,L.jsx)(t.code,{children:`alertdialog`}),`), named by the title and described by
the description.`]}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[`Opening moves focus to the first focusable element, or `,(0,L.jsx)(t.code,{children:`initialFocus`}),`,
and traps it inside. The page behind is `,(0,L.jsx)(t.code,{children:`aria-hidden`}),`, its pointer
events are blocked by the backdrop, and its scroll is locked. Closing
returns focus to the trigger.`]}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`isModal={false}`}),` drops the focus trap, the scroll lock and the hidden
page, but the backdrop still covers the page. It is for pictures of a
modal, such as the ones on these tabs: a real modal stays modal.`]}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[`Escape closes it, as does a press outside unless `,(0,L.jsx)(t.code,{children:`isAlert`}),` or
`,(0,L.jsx)(t.code,{children:`closeOnBackdropClick={false}`}),`. An alert dialog closes only through its
own buttons (and Escape).`]}),`
`,(0,L.jsx)(s,{of:S}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.strong,{children:`One layer with the popups.`}),` Modal, Popover, Select and Combobox all
sit at `,(0,L.jsx)(t.code,{children:`--layer-overlay`}),`. Each portals to the end of `,(0,L.jsx)(t.code,{children:`<body>`}),` when it
opens, so the most recent is on top: a Select opened inside a modal
lists its options above the modal, which a higher modal layer would
hide.`]}),`
`,(0,L.jsx)(s,{of:w}),`
`]}),`
`,(0,L.jsxs)(t.li,{children:[`
`,(0,L.jsxs)(t.p,{children:[`The close button is named `,(0,L.jsx)(t.code,{children:`Close`}),` (`,(0,L.jsx)(t.code,{children:`closeLabel`}),`), has the 2px focus ring
and a 44px hit area on touch screens.`]}),`
`]}),`
`]})]})]})]})}function I(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,L.jsx)(t,{...e,children:(0,L.jsx)(F,{...e})}):F(e)}var L;function R(){return(R=e((()=>{L=t(),r(),a(),d(),p(),h(),f(),m(),b(),A()})))()}R();export{I as default};