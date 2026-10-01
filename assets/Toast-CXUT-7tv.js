import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./Toast.stories-ChLO8wWk.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{of:c}),`
`,(0,v.jsx)(t.h1,{id:`toast`,children:`Toast`}),`
`,(0,v.jsxs)(t.p,{children:[`A short message in a corner of the screen about something that just
happened: saved, sent, moved, failed. It closes itself after a few
seconds and never blocks the page. Spec:
`,(0,v.jsx)(t.a,{href:`https://www.uiguideline.com/components/toast`,rel:`nofollow`,children:`uiguideline.com/components/toast`}),`.
Behaviour from Base UI's `,(0,v.jsx)(t.a,{href:`https://base-ui.com/react/components/toast`,rel:`nofollow`,children:`Toast`}),`.`]}),`
`,(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Part`}),(0,v.jsx)(t.th,{children:`What it is`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Icon`})}),(0,v.jsxs)(t.td,{children:[`The variant's icon in its text colour; none for `,(0,v.jsx)(t.code,{children:`default`}),`, a spinner while a promise is pending.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Title`})}),(0,v.jsx)(t.td,{children:`Semibold. What happened.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Description`})}),(0,v.jsxs)(t.td,{children:[`Optional, `,(0,v.jsx)(t.code,{children:`--muted-foreground`}),`.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Action`})}),(0,v.jsx)(t.td,{children:`Optional, one text button, e.g. "Undo".`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Close button`})}),(0,v.jsx)(t.td,{children:`Always there.`})]})]})]}),`
`,(0,v.jsxs)(t.p,{children:[`The surface is `,(0,v.jsx)(t.code,{children:`--popover`}),` with `,(0,v.jsx)(t.code,{children:`--shadow-lg`}),`, at most 24rem wide.`]}),`
`,(0,v.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,v.jsxs)(t.p,{children:[`Wrap the app once in `,(0,v.jsx)(t.code,{children:`ToastProvider`}),`, then call `,(0,v.jsx)(t.code,{children:`useToast()`}),` anywhere
inside it:`]}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`<ToastProvider placement="bottom-right">
  <App />
</ToastProvider>

const toast = useToast()
toast.add({ title: 'File moved to Trash', action: { label: 'Undo', onClick: restore } })
`})}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsxs)(t.th,{children:[(0,v.jsx)(t.code,{children:`ToastProvider`}),` prop`]}),(0,v.jsx)(t.th,{children:`Values`}),(0,v.jsx)(t.th,{children:`Default`}),(0,v.jsx)(t.th,{})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`placement`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`top-`}),` or `,(0,v.jsx)(t.code,{children:`bottom-`}),` + `,(0,v.jsx)(t.code,{children:`left`}),`, `,(0,v.jsx)(t.code,{children:`center`}),`, `,(0,v.jsx)(t.code,{children:`right`})]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`bottom-right`})}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`timeout`})}),(0,v.jsx)(t.td,{children:`number (ms)`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`5000`})}),(0,v.jsx)(t.td,{children:`Default time on screen.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`limit`})}),(0,v.jsx)(t.td,{children:`number`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`3`})}),(0,v.jsx)(t.td,{children:`Shown at once; the rest wait.`})]})]})]}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:(0,v.jsx)(t.code,{children:`useToast()`})}),(0,v.jsx)(t.th,{})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`add(options)`})}),(0,v.jsx)(t.td,{children:`Shows a toast, returns its id.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`update(id, options)`})}),(0,v.jsx)(t.td,{children:`Changes one in place.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`close(id?)`})}),(0,v.jsx)(t.td,{children:`Closes one, or all.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`promise(promise, { loading, success, error })`})}),(0,v.jsx)(t.td,{children:`A loading toast that becomes success or danger when the promise settles.`})]})]})]}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Option`}),(0,v.jsx)(t.th,{children:`Values`}),(0,v.jsx)(t.th,{})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`title`}),`, `,(0,v.jsx)(t.code,{children:`description`})]}),(0,v.jsx)(t.td,{children:`node`}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`variant`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`default`}),`, `,(0,v.jsx)(t.code,{children:`info`}),`, `,(0,v.jsx)(t.code,{children:`success`}),`, `,(0,v.jsx)(t.code,{children:`warning`}),`, `,(0,v.jsx)(t.code,{children:`danger`})]}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`action`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`{ label, onClick }`})}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`timeout`})}),(0,v.jsx)(t.td,{children:`number (ms)`}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`0`}),` keeps it until dismissed.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`priority`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`low`}),`, `,(0,v.jsx)(t.code,{children:`high`})]}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`high`}),` by default for `,(0,v.jsx)(t.code,{children:`danger`}),`.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`onClose`})}),(0,v.jsx)(t.td,{children:`function`}),(0,v.jsx)(t.td,{})]})]})]}),`
`,(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`The variant colours only the icon.`}),` The message stays in
`,(0,v.jsx)(t.code,{children:`--popover-foreground`}),`, the same as Alert's subtle and outlined
appearances: a toast is read in passing, and body text in an accent
colour reads worse.`]}),`
`]}),`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Above everything, at z-index 70`}),`, over popups (50) and tooltips
(60): a toast raised from inside a modal shows over the modal and is
not hidden from assistive tech by it.`]}),`
`,(0,v.jsx)(o,{of:d}),`
`]}),`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Swipe to dismiss`}),` toward the nearest edge on touch.`]}),`
`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,v.jsx)(o,{of:m}),`
`,(0,v.jsx)(o,{of:p}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(o,{of:f}),`
`,(0,v.jsx)(t.p,{children:`A toast disappears. Anything the reader must act on, or might need to
read twice, belongs in an Alert on the page or a Modal; the action on a
toast ("Undo") should also be reachable some other way.`}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`The viewport is a polite live region: new toasts are announced
without interrupting. `,(0,v.jsx)(t.code,{children:`danger`}),` toasts (and any with `,(0,v.jsx)(t.code,{children:`priority: 'high'`}),`)
are `,(0,v.jsx)(t.code,{children:`role="alertdialog"`}),` and announced assertively.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Each toast is a non-modal dialog named by its title, or by its
description when it has none (as `,(0,v.jsx)(t.code,{children:`promise()`}),` toasts do).`]}),`
`,(0,v.jsx)(t.li,{children:`Timers pause while the pointer is over the toasts or focus is in
them, so there is time to reach the action. F6 moves focus to the
toast region.`}),`
`,(0,v.jsxs)(t.li,{children:[`The close button is named `,(0,v.jsx)(t.code,{children:`Dismiss`}),` and has a 44px touch target on
coarse pointers.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),i(),l()})))()}y();export{_ as default};