import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-DsER1A51.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-I6SQLLHM.js";import{n as b,t as x}from"./Status-CNj0XQZL.js";import{a as S,c as C,i as w,l as T,n as E,o as D,r as O,s as k,t as A,u as j}from"./ConfirmDialog.stories-DfXi7bFm.js";function M(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(c,{of:E}),`
`,(0,P.jsx)(t.h1,{id:`confirm-dialog`,children:`Confirm Dialog`}),`
`,(0,P.jsxs)(u,{children:[(0,P.jsxs)(_,{value:`overview`,children:[(0,P.jsx)(t.p,{children:`Asks before something that cannot be undone: a warning, the action as a
question, what it will destroy, then Cancel or the action. A press outside
does nothing, so the reader has to choose.`}),(0,P.jsx)(x,{of:E}),(0,P.jsx)(s,{of:O}),(0,P.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`Variant`}),(0,P.jsx)(t.th,{children:`Use for`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:`Default`}),(0,P.jsx)(t.td,{children:`An everyday delete: a comment, a file, a saved view. One question, two buttons.`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsxs)(t.td,{children:[`Non-destructive (`,(0,P.jsx)(t.code,{children:`kind="default"`}),`)`]}),(0,P.jsx)(t.td,{children:`A decision that destroys nothing: sign out everywhere, leave without saving. No warning icon, and the action is a primary button.`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsxs)(t.td,{children:[`Type to confirm (`,(0,P.jsx)(t.code,{children:`confirmText`}),`)`]}),(0,P.jsx)(t.td,{children:`A large delete that cannot be undone: a workspace, an account, a project with its files. The action waits until the reader types the name.`})]})]})]}),(0,P.jsx)(s,{of:D}),(0,P.jsx)(s,{of:C}),(0,P.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,P.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,P.jsx)(t.pre,{children:(0,P.jsx)(t.code,{className:`language-js`,children:`import { ConfirmDialog } from 'zweihander/confirm-dialog'
`})}),(0,P.jsx)(t.pre,{children:(0,P.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/confirm-dialog.json
`})}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[`Source: `,(0,P.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/overlays/ConfirmDialog.tsx`,rel:`nofollow`,children:`src/components/overlays/ConfirmDialog.tsx`})]}),`
`,(0,P.jsxs)(t.li,{children:[`Spec: `,(0,P.jsx)(t.a,{href:`https://www.uiguideline.com/components/modal`,rel:`nofollow`,children:`uiguideline.com/components/modal`}),` (the alert dialog)`]}),`
`,(0,P.jsxs)(t.li,{children:[`Built on: `,(0,P.jsx)(t.a,{href:`?path=/docs/components-overlays-modal--docs`,children:`Modal`}),` with `,(0,P.jsx)(t.code,{children:`isAlert`}),`, on `,(0,P.jsx)(t.a,{href:`https://base-ui.com/react/components/alert-dialog`,rel:`nofollow`,children:`Base UI Alert Dialog`})]}),`
`,(0,P.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,P.jsxs)(_,{value:`specs`,children:[(0,P.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,P.jsx)(y,{parts:T,children:(0,P.jsx)(i,{of:A})}),(0,P.jsxs)(t.p,{children:[`The open dialogs on this tab and the next are pictures: rendered in a frame
with `,(0,P.jsx)(t.code,{children:`container`}),` and `,(0,P.jsx)(t.code,{children:`isModal={false}`}),`, inert, so they do not lock this page
or take its focus.`]}),(0,P.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,P.jsxs)(t.p,{children:[`It is a Modal at `,(0,P.jsx)(t.code,{children:`size="sm"`}),` (at most 400px wide): container, title,
body and footer take Modal's measurements, except the 16px from the title
to the description (8px in a Modal). Its own parts:`]}),(0,P.jsx)(g,{caption:`Icon and field`,rows:[{part:`Title to description`,property:`Gap`,token:`--space-group`},{part:`Warning icon`,property:`Width`,token:`--icon-md`},{part:`Icon to title`,property:`Gap`,token:`--space-inline`},{part:`Text to type`,property:`Font family`,token:`--font-mono`}]}),(0,P.jsx)(t.p,{children:`The icon is one line of the title tall, so it stays on the first line when
the title wraps.`}),(0,P.jsx)(t.h2,{id:`color`,children:`Color`}),(0,P.jsx)(g,{caption:`Its own parts`,rows:[{part:`Warning icon`,property:`Colour`,token:`--color-background-danger-bold`}]}),(0,P.jsxs)(t.p,{children:[`Everything else takes Modal's colours, and the buttons keep their own:
Cancel is `,(0,P.jsx)(t.code,{children:`secondary`}),` outlined, the action `,(0,P.jsx)(t.code,{children:`destructive`}),` (`,(0,P.jsx)(t.code,{children:`primary`}),` with
`,(0,P.jsx)(t.code,{children:`kind="default"`}),`, which has no warning icon).`]}),(0,P.jsx)(t.h2,{id:`states`,children:`States`}),(0,P.jsxs)(t.p,{children:[`The dialog is open or closed. With `,(0,P.jsx)(t.code,{children:`confirmText`}),`, the action is disabled
until the field matches, then enabled; without it, it is enabled from the
start.`]}),(0,P.jsx)(v,{states:[{label:`Waiting for the name`,content:(0,P.jsx)(i,{of:k})},{label:`Ready`,content:(0,P.jsx)(i,{of:w})}]}),(0,P.jsx)(t.h2,{id:`api`,children:`API`}),(0,P.jsx)(`div`,{style:{overflowX:`auto`},children:(0,P.jsx)(o,{of:E})}),(0,P.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Destructive by default.`}),` `,(0,P.jsx)(t.code,{children:`kind="default"`}),` drops the warning icon and
makes the action primary; for anything more custom, use a
`,(0,P.jsx)(t.a,{href:`?path=/docs/components-overlays-modal--docs`,children:`Modal`}),` with `,(0,P.jsx)(t.code,{children:`isAlert`}),`, where
you choose the buttons.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`No pending state.`}),` The dialog closes on confirm. If the delete can fail,
control `,(0,P.jsx)(t.code,{children:`open`}),` and keep it open until your request settles.`]}),`
`]})]}),(0,P.jsxs)(_,{value:`guidelines`,children:[(0,P.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,P.jsx)(t.p,{children:`Before an action that destroys something the reader cannot get back. Put
the object's name in the title, say in the description what goes with it,
and name the action button after what it does.`}),(0,P.jsx)(t.p,{children:`Type to confirm is for the few deletes that are both large and final. Used
on every delete, it becomes a chore readers do without reading.`}),(0,P.jsx)(l,{do:(0,P.jsx)(i,{of:w}),doCaption:`Ask once for an everyday delete, with the action on the button.`,dont:(0,P.jsx)(i,{of:S}),dontCaption:`Do not make the reader type for a small delete: it teaches them to type without reading.`}),(0,P.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`When the action can be undone.`}),` Do it, then offer Undo in a
`,(0,P.jsx)(t.a,{href:`?path=/docs/components-notifications-toast--docs`,children:`Toast`}),`: no question
is faster than a good one.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`For a decision that destroys nothing`}),`, such as Sign out or Leave
without saving. Use a `,(0,P.jsx)(t.a,{href:`?path=/docs/components-overlays-modal--docs`,children:`Modal`}),`
with `,(0,P.jsx)(t.code,{children:`isAlert`}),`.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`To show a warning.`}),` Use an
`,(0,P.jsx)(t.a,{href:`?path=/docs/components-notifications-inlinealert--docs`,children:`Inline Alert`}),`.`]}),`
`]}),(0,P.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.code,{children:`role="alertdialog"`}),`, named by the title (the icon is hidden from
assistive tech) and described by the consequence.`]}),`
`,(0,P.jsxs)(t.li,{children:[`Focus starts on Cancel, so Enter on open cannot delete. With
`,(0,P.jsx)(t.code,{children:`confirmText`}),` it starts in the field, which is named "To confirm, type"
and the name.`]}),`
`,(0,P.jsx)(t.li,{children:`The action stays disabled until the field matches exactly, case
included; spaces around the text are ignored. Enter in the field confirms
once it matches.`}),`
`,(0,P.jsx)(t.li,{children:`A press outside does nothing. Cancel and Escape close it without
confirming, and focus goes back to the trigger.`}),`
`,(0,P.jsx)(t.li,{children:`Reopened, the field starts empty.`}),`
`]})]})]})]})}function N(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;function F(){return(F=e((()=>{P=t(),r(),a(),d(),p(),h(),f(),m(),b(),j()})))()}F();export{N as default};