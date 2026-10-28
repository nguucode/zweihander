import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{a as S,c as C,d as w,f as T,h as E,i as D,l as O,m as k,n as A,o as j,p as M,r as N,s as P,t as F,u as I}from"./Drawer.stories-t8VzeiAm.js";function L(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(i,{of:P}),`
`,(0,z.jsx)(t.h1,{id:`drawer`,children:`Drawer`}),`
`,(0,z.jsxs)(u,{children:[(0,z.jsxs)(_,{value:`overview`,children:[(0,z.jsx)(t.p,{children:`A panel that slides in from an edge of the screen, over the page, for work
that sits beside what the reader was doing: filters, a quick look at a
record, a short form.`}),(0,z.jsx)(x,{of:P}),(0,z.jsx)(s,{of:N}),(0,z.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`Side`}),(0,z.jsx)(t.th,{children:`Use for`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:`Right (default)`}),(0,z.jsx)(t.td,{children:`Details and editing: a quick look at a record from its list, a create or edit form, notifications.`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:`Left`}),(0,z.jsx)(t.td,{children:`Content tied to the left of the page, such as a panel for the list or tree beside it.`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:`Bottom`}),(0,z.jsx)(t.td,{children:`A short sheet as tall as its content: share, a few actions, a picker. Works best on a phone.`})]})]})]}),(0,z.jsx)(s,{of:M}),(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`size`}),` sets the width of a side drawer: `,(0,z.jsx)(t.code,{children:`sm`}),` (20rem) for filters, `,(0,z.jsx)(t.code,{children:`md`}),`
(28rem) for a form, `,(0,z.jsx)(t.code,{children:`lg`}),` (40rem) for a record with a lot to show. A side
drawer always leaves a touch target's width of backdrop, so on a phone it
is nearly full width and can still be tapped away. For short content on
a phone, pick `,(0,z.jsx)(t.code,{children:`bottom`}),` yourself: the side does not change with the
screen. Taller than the
screen, the body scrolls and the header and footer stay in view.`]}),(0,z.jsx)(s,{of:w}),(0,z.jsx)(t.p,{children:`On a touch screen it can also be swiped back towards its edge.`}),(0,z.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,z.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,z.jsx)(t.pre,{children:(0,z.jsx)(t.code,{className:`language-js`,children:`import { Drawer, DrawerClose } from 'zweihander/drawer'
`})}),(0,z.jsx)(t.pre,{children:(0,z.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/drawer.json
`})}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[`Source: `,(0,z.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/overlays/Drawer.tsx`,rel:`nofollow`,children:`src/components/overlays/Drawer.tsx`})]}),`
`,(0,z.jsxs)(t.li,{children:[`Spec: `,(0,z.jsx)(t.a,{href:`https://www.uiguideline.com/components/drawer`,rel:`nofollow`,children:`uiguideline.com/components/drawer`})]}),`
`,(0,z.jsxs)(t.li,{children:[`Behaviour: `,(0,z.jsx)(t.a,{href:`https://base-ui.com/react/components/drawer`,rel:`nofollow`,children:`Base UI Drawer`})]}),`
`,(0,z.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,z.jsxs)(_,{value:`specs`,children:[(0,z.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,z.jsx)(y,{parts:k,children:(0,z.jsx)(a,{of:F})}),(0,z.jsxs)(t.p,{children:[`The open drawers on this tab and the next are pictures: real drawers
rendered in a frame with `,(0,z.jsx)(t.code,{children:`container`}),`, not modal (`,(0,z.jsx)(t.code,{children:`isModal={false}`}),`) and
inert, so they do not lock this page or take its focus.`]}),(0,z.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,z.jsx)(g,{caption:`Container`,rows:[{part:`Header, body, footer`,property:`Padding`,token:`--space-group`},{part:`Container`,property:`Shadow`,token:`--shadow-xl`},{part:`Bottom sheet`,property:`Top corner radius`,token:`--radius-panel`},{part:`Backdrop left beside it`,property:`Minimum`,token:`--target-coarse`},{part:`Title`,property:`Font size`,token:`--text-heading-sm`},{part:`Title`,property:`Line height`,token:`--leading-heading-sm`},{part:`Title to close button`,property:`Gap`,token:`--space-group`},{part:`Title to description`,property:`Gap`,token:`--space-inline`},{part:`Footer`,property:`Gap between actions`,token:`--space-inline`}]}),(0,z.jsx)(g,{caption:`Close button`,rows:[{part:`Close button`,property:`Padding`,token:`--control-xs-gap`},{part:`Close button`,property:`Corner radius`,token:`--radius-sm`},{part:`Icon`,property:`Size`,token:`--icon-md`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset-inset`},{part:`Hit area`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,z.jsxs)(t.p,{children:[`A side drawer is full height and at most 20rem (`,(0,z.jsx)(t.code,{children:`sm`}),`), 28rem (`,(0,z.jsx)(t.code,{children:`md`}),`) or
40rem (`,(0,z.jsx)(t.code,{children:`lg`}),`) wide. A bottom sheet is full width and as tall as its content,
up to the screen less `,(0,z.jsx)(t.code,{children:`--target-coarse`}),`. Borders are 1px: on the edge that
faces the page, under the header and over the footer. Backdrop and drawer
sit on the `,(0,z.jsx)(t.code,{children:`--layer-overlay`}),` layer and slide in over `,(0,z.jsx)(t.code,{children:`--duration-base`}),`.`]}),(0,z.jsx)(t.h2,{id:`color`,children:`Color`}),(0,z.jsx)(g,{caption:`Every drawer`,rows:[{part:`Backdrop`,property:`Background`,token:`--scrim`},{part:`Container`,property:`Background`,token:`--popover`},{part:`Container, header, footer`,property:`Border`,token:`--border`},{part:`Title, body`,property:`Colour`,token:`--popover-foreground`},{part:`Description`,property:`Colour`,token:`--muted-foreground`},{part:`Close button`,property:`Colour`,token:`--muted-foreground`},{part:`Close button, hover`,property:`Background`,token:`--accent`},{part:`Close button, hover`,property:`Colour`,token:`--accent-foreground`},{part:`Focus ring`,property:`Colour`,token:`--ring`}]}),(0,z.jsx)(t.p,{children:`Buttons in the footer keep their own colours: see Button.`}),(0,z.jsx)(t.h2,{id:`states`,children:`States`}),(0,z.jsx)(t.p,{children:`The drawer is open or closed. Opening fades the backdrop in and slides the
container in from its edge; closing reverses it. During a swipe the
container follows the finger and the backdrop fades with it. The close
button is the only part with states of its own:`}),(0,z.jsx)(v,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`}],children:(0,z.jsx)(a,{of:A})}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Hover`}),` fills the button with `,(0,z.jsx)(t.code,{children:`--accent`}),`.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,z.jsx)(t.code,{children:`--ring`}),` outline drawn inside the button.`]}),`
`]}),(0,z.jsx)(t.h2,{id:`api`,children:`API`}),(0,z.jsx)(`div`,{style:{overflowX:`auto`},children:(0,z.jsx)(o,{of:P})}),(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`DrawerClose`}),` closes the drawer it is in. Give it your own button with
`,(0,z.jsx)(t.code,{children:`render`}),`: `,(0,z.jsx)(t.code,{children:`<DrawerClose render={<Button variant="secondary" />}>Cancel</DrawerClose>`}),`.`]}),(0,z.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`No push mode.`}),` A drawer always covers the page with a scrim. A panel
that pushes the page aside is part of the page's layout, not an overlay:
build it into the page.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`No top side.`}),` Nothing in a business app slides down from the top
that a Menu or a Toast does not already cover.`]}),`
`]})]}),(0,z.jsxs)(_,{value:`guidelines`,children:[(0,z.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,z.jsx)(t.p,{children:`Use a drawer when the reader needs the context behind it: a record looked
at from its list, filters for the table they are reading, a form that
fills in something on the page. The page stays visible, dimmed, at its
place.`}),(0,z.jsx)(l,{do:(0,z.jsx)(a,{of:S}),doCaption:`Show a record from its list in a drawer: the list stays in place behind it, where the reader left it.`,dont:(0,z.jsx)(a,{of:j}),dontCaption:`Do not ask a yes-or-no question at the edge of the screen. A decision belongs in a Modal with isAlert.`}),(0,z.jsxs)(t.p,{children:[`Put the main action last in the footer, and dismiss actions (Cancel,
Clear) in the `,(0,z.jsx)(t.code,{children:`secondary`}),` variant. A form that would lose its input sets
`,(0,z.jsx)(t.code,{children:`closeOnBackdropClick={false}`}),`.`]}),(0,z.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`For a decision or a confirmation.`}),` Use a
`,(0,z.jsx)(t.a,{href:`?path=/docs/components-overlays-modal--docs`,children:`Modal`}),` with `,(0,z.jsx)(t.code,{children:`isAlert`}),`, or a
`,(0,z.jsx)(t.a,{href:`?path=/docs/components-overlays-confirm-dialog--docs`,children:`Confirm Dialog`}),`
before a delete: it sits in the middle, where the reader is looking.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`For a small form tied to one button.`}),` Use a
`,(0,z.jsx)(t.a,{href:`?path=/docs/components-overlays-popover--docs`,children:`Popover`}),`: it opens beside
the button and leaves the page usable.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`For site navigation.`}),` Keep it in the sidebar; on a phone the sidebar
folds to its icon rail.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`For a long or many-step task.`}),` Give it a page of its own.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Over another drawer or a modal.`}),` Close the first, or move the second
step into it.`]}),`
`]}),(0,z.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`role="dialog"`}),`, named by the title and described by the description.`]}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsxs)(t.p,{children:[`Opening moves focus to the drawer itself, so its title and description
are read first and a phone does not pop up its keyboard; Tab then
reaches the close button. Focus is trapped inside. The page behind is `,(0,z.jsx)(t.code,{children:`aria-hidden`}),` and its scroll is
locked. Closing returns focus to the trigger.`]}),`
`,(0,z.jsx)(s,{of:N}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsx)(t.p,{children:`The body is a tab stop after the close button, so a keyboard can scroll
a long body of text.`}),`
`,(0,z.jsx)(s,{of:w}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`initialFocus`}),` sends focus to another element on open, such as the
first field of a form.`]}),`
`,(0,z.jsx)(s,{of:C}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsxs)(t.p,{children:[`Escape, a press outside the drawer and the close button each close it.
The close button is named `,(0,z.jsx)(t.code,{children:`Close`}),` (`,(0,z.jsx)(t.code,{children:`closeLabel`}),`). Swiping is never the
only way out.`]}),`
`,(0,z.jsx)(s,{of:D}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsxs)(t.p,{children:[`With `,(0,z.jsx)(t.code,{children:`closeOnBackdropClick={false}`}),`, a press outside does nothing;
Escape still closes it.`]}),`
`,(0,z.jsx)(s,{of:O}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsxs)(t.p,{children:[`A Select opened inside a drawer lists its options above it: both sit at
`,(0,z.jsx)(t.code,{children:`--layer-overlay`}),`, and the one opened last is on top.`]}),`
`,(0,z.jsx)(s,{of:I}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`side`}),` is physical: on a right-to-left page a right drawer is still on
the right, and swipes right to close.`]}),`
`,(0,z.jsx)(s,{of:T}),`
`]}),`
`]})]})]})]})}function R(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,z.jsx)(t,{...e,children:(0,z.jsx)(L,{...e})}):L(e)}var z;function B(){return(B=e((()=>{z=t(),r(),c(),d(),p(),h(),f(),m(),b(),E()})))()}B();export{R as default};