import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./Modal.stories-Q9CblA_N.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:c}),`
`,(0,_.jsx)(t.h1,{id:`modal`,children:`Modal`}),`
`,(0,_.jsxs)(t.p,{children:[`A dialog over the page that has to be dealt with before going back: a
short form, a confirmation, a decision. Everything behind it is dimmed
and out of reach until it closes. Spec:
`,(0,_.jsx)(t.a,{href:`https://www.uiguideline.com/components/modal`,rel:`nofollow`,children:`uiguideline.com/components/modal`}),`.
Behaviour from Base UI's `,(0,_.jsx)(t.a,{href:`https://base-ui.com/react/components/dialog`,rel:`nofollow`,children:`Dialog`}),`
and `,(0,_.jsx)(t.a,{href:`https://base-ui.com/react/components/alert-dialog`,rel:`nofollow`,children:`Alert Dialog`}),`.`]}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Part`}),(0,_.jsx)(t.th,{children:`What it is`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Backdrop`})}),(0,_.jsx)(t.td,{children:`A black scrim at 50% over the whole page.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Popup`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`--popover`}),` surface, `,(0,_.jsx)(t.code,{children:`--shadow-xl`}),`, `,(0,_.jsx)(t.code,{children:`--radius-panel`}),`, 24px padding, centred.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Title`})}),(0,_.jsxs)(t.td,{children:[`Required. `,(0,_.jsx)(t.code,{children:`heading-md`}),`, semibold. Names the dialog.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Close button`})}),(0,_.jsxs)(t.td,{children:[`Top right. On by default, off for `,(0,_.jsx)(t.code,{children:`isAlert`}),`.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Description`})}),(0,_.jsxs)(t.td,{children:[`Optional, `,(0,_.jsx)(t.code,{children:`--muted-foreground`}),`.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Body`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`children`}),`. Scrolls when the modal is taller than the screen.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Footer`})}),(0,_.jsx)(t.td,{children:`Actions, right-aligned, the main one last.`})]})]})]}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Prop`}),(0,_.jsx)(t.th,{children:`Values`}),(0,_.jsx)(t.th,{children:`Default`}),(0,_.jsx)(t.th,{})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`title`})}),(0,_.jsx)(t.td,{children:`node`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{children:`Required.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`trigger`})}),(0,_.jsx)(t.td,{children:`element`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsxs)(t.td,{children:[`Omit when `,(0,_.jsx)(t.code,{children:`open`}),` is controlled from elsewhere.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`description`})}),(0,_.jsx)(t.td,{children:`node`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`children`})}),(0,_.jsx)(t.td,{children:`node`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`footer`})}),(0,_.jsx)(t.td,{children:`node`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`size`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`sm`}),`, `,(0,_.jsx)(t.code,{children:`md`}),`, `,(0,_.jsx)(t.code,{children:`lg`})]}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`md`})}),(0,_.jsx)(t.td,{children:`Max width 24, 32, 48rem.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`hasCloseButton`})}),(0,_.jsx)(t.td,{children:`boolean`}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`!isAlert`})}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`closeLabel`})}),(0,_.jsx)(t.td,{children:`string`}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`Close`})}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`isAlert`})}),(0,_.jsx)(t.td,{children:`boolean`}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`false`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`role="alertdialog"`}),`, no backdrop dismissal.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`closeOnBackdropClick`})}),(0,_.jsx)(t.td,{children:`boolean`}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`true`})}),(0,_.jsxs)(t.td,{children:[`Ignored when `,(0,_.jsx)(t.code,{children:`isAlert`}),`.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`initialFocus`})}),(0,_.jsx)(t.td,{children:`ref`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{children:`By default, the first focusable element.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`open`}),`, `,(0,_.jsx)(t.code,{children:`defaultOpen`}),`, `,(0,_.jsx)(t.code,{children:`onOpenChange`})]}),(0,_.jsx)(t.td,{}),(0,_.jsx)(t.td,{}),(0,_.jsx)(t.td,{children:`Controlled or uncontrolled.`})]})]})]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`ModalClose`}),` closes the modal it is in. Give it your own button with
`,(0,_.jsx)(t.code,{children:`render`}),`: `,(0,_.jsx)(t.code,{children:`<ModalClose render={<Button />}>Cancel</ModalClose>`}),`.`]}),`
`,(0,_.jsx)(a,{of:u}),`
`,(0,_.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`One layer with the popups.`}),` Modal, Popover, Select and Combobox all
sit at z-index 50. Each portals to the end of `,(0,_.jsx)(t.code,{children:`<body>`}),` when it opens,
so the most recent is on top: a Select opened inside a modal lists its
options above the modal, which a higher modal layer would hide. The
`,(0,_.jsx)(t.code,{children:`WithSelect`}),` story checks it.`]}),`
`,(0,_.jsx)(o,{of:d}),`
`]}),`
`,(0,_.jsxs)(t.li,{children:[`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`The body scrolls, not the page.`}),` Title and footer stay on screen
however long the content is.`]}),`
`,(0,_.jsx)(o,{of:l}),`
`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsxs)(t.p,{children:[`For a decision with consequences, use `,(0,_.jsx)(t.code,{children:`isAlert`}),` and say exactly what
will happen in the description. Name the buttons after what they do
("Delete", "Keep project"), not "OK" and "Cancel".`]}),`
`,(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(t.p,{children:`Reach for a modal last: it stops everything else. A Popover suits a
small form tied to one button; an inline message suits information.`}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`role="dialog"`}),` (or `,(0,_.jsx)(t.code,{children:`alertdialog`}),`), named by the title and described
by the description.`]}),`
`]}),`
`,(0,_.jsxs)(t.li,{children:[`
`,(0,_.jsxs)(t.p,{children:[`Opening moves focus to the first focusable element, or `,(0,_.jsx)(t.code,{children:`initialFocus`}),`,
and traps it inside. The page behind is `,(0,_.jsx)(t.code,{children:`aria-hidden`}),`, its pointer
events are blocked by the backdrop, and its scroll is locked. Closing
returns focus to the trigger.`]}),`
`]}),`
`,(0,_.jsxs)(t.li,{children:[`
`,(0,_.jsxs)(t.p,{children:[`Escape closes it, as does a press outside unless `,(0,_.jsx)(t.code,{children:`isAlert`}),` or
`,(0,_.jsx)(t.code,{children:`closeOnBackdropClick={false}`}),`. An alert dialog closes only through its
own buttons (and Escape).`]}),`
`,(0,_.jsx)(o,{of:f}),`
`]}),`
`,(0,_.jsxs)(t.li,{children:[`
`,(0,_.jsxs)(t.p,{children:[`The close button is named `,(0,_.jsx)(t.code,{children:`Close`}),`, has the 2px focus ring and a 44px
touch target on coarse pointers.`]}),`
`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),i(),p()})))()}v();export{g as default};