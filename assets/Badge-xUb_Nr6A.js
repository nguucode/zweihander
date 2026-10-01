import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./Badge.stories-Cowe0hNv.js";function h(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:m}),`
`,(0,_.jsx)(t.h1,{id:`badge`,children:`Badge`}),`
`,(0,_.jsxs)(t.p,{children:[`A small count or dot that flags something new on another element: unread
messages on an inbox, a status on an avatar. Spec:
`,(0,_.jsx)(t.a,{href:`https://www.uiguideline.com/components/badge`,rel:`nofollow`,children:`uiguideline.com/components/badge`}),`.`]}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Part`}),(0,_.jsx)(t.th,{children:`What it is`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Container`})}),(0,_.jsx)(t.td,{children:`The pill. Always fully rounded, whatever the Theme's radius preset.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Count`})}),(0,_.jsxs)(t.td,{children:[`The number, in tabular figures so `,(0,_.jsx)(t.code,{children:`9`}),` and `,(0,_.jsx)(t.code,{children:`10`}),` keep their width.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Suffix "+"`})}),(0,_.jsxs)(t.td,{children:[`Added after `,(0,_.jsx)(t.code,{children:`maxCount`}),` when `,(0,_.jsx)(t.code,{children:`count`}),` is larger: `,(0,_.jsx)(t.code,{children:`99+`}),`.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Dot`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`isDot`}),`: the container with no count, for "something new" rather than "how many".`]})]})]})]}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Prop`}),(0,_.jsx)(t.th,{children:`Values`}),(0,_.jsx)(t.th,{children:`Default`}),(0,_.jsx)(t.th,{})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`count`})}),(0,_.jsx)(t.td,{children:`number`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsxs)(t.td,{children:[`Nothing renders without `,(0,_.jsx)(t.code,{children:`count`}),` or `,(0,_.jsx)(t.code,{children:`isDot`}),`.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`variant`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`primary`}),`, `,(0,_.jsx)(t.code,{children:`accent`}),`, `,(0,_.jsx)(t.code,{children:`secondary`}),`, `,(0,_.jsx)(t.code,{children:`destructive`})]}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`primary`})}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`size`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`sm`}),`, `,(0,_.jsx)(t.code,{children:`md`})]}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`md`})}),(0,_.jsx)(t.td,{children:`16px / 20px tall; dots are 6px / 8px.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`isDot`})}),(0,_.jsx)(t.td,{children:`boolean`}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`false`})}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`maxCount`})}),(0,_.jsx)(t.td,{children:`number`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`isFloating`})}),(0,_.jsx)(t.td,{children:`boolean`}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`false`})}),(0,_.jsxs)(t.td,{children:[`Pins the badge to a corner of `,(0,_.jsx)(t.code,{children:`children`}),`.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`floatingPlacement`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`top-start`}),`, `,(0,_.jsx)(t.code,{children:`top-end`}),`, `,(0,_.jsx)(t.code,{children:`bottom-start`}),`, `,(0,_.jsx)(t.code,{children:`bottom-end`})]}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`top-end`})}),(0,_.jsx)(t.td,{})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`children`})}),(0,_.jsx)(t.td,{children:`node`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsx)(t.td,{children:`The element a floating badge sits on.`})]})]})]}),`
`,(0,_.jsxs)(t.p,{children:[`Every other `,(0,_.jsx)(t.code,{children:`<span>`}),` attribute passes through to the badge.`]}),`
`,(0,_.jsx)(a,{of:u}),`
`,(0,_.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsxs)(t.strong,{children:[(0,_.jsx)(t.code,{children:`children`}),` is added.`]}),` A floating badge needs something to float on.
The badge wraps it in a `,(0,_.jsx)(t.code,{children:`position: relative`}),` span rather than asking
every consumer to position the anchor themselves.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsxs)(t.strong,{children:[(0,_.jsx)(t.code,{children:`accent`}),` is the inverted neutral.`]}),` The token set has one brand hue,
which `,(0,_.jsx)(t.code,{children:`primary`}),` already uses, so `,(0,_.jsx)(t.code,{children:`accent`}),` is foreground-on-background:
the strongest contrast available without inventing a colour.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsxs)(t.strong,{children:[(0,_.jsx)(t.code,{children:`floatingPlacement`}),` defaults to `,(0,_.jsx)(t.code,{children:`top-end`})]}),`, the usual notification
corner; the spec gives no default.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Start and end are physical`}),` (left and right). RTL pages would get
mirrored placement.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsxs)(t.p,{children:[`Use `,(0,_.jsx)(t.code,{children:`maxCount`}),` so a large number does not stretch the badge past its anchor.`]}),`
`,(0,_.jsx)(o,{of:l}),`
`,(0,_.jsx)(t.p,{children:`A floating badge gets a ring in the page background, so it separates from
whatever it overlaps.`}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`An `,(0,_.jsx)(t.strong,{children:`inline count`}),` is plain text and is read where it sits. Inside a
button it becomes part of the name ("Inbox 12").`]}),`
`,(0,_.jsxs)(t.li,{children:[`A `,(0,_.jsx)(t.strong,{children:`floating`}),` badge is hidden from assistive tech: it sits `,(0,_.jsx)(t.em,{children:`outside`}),`
the element it decorates, so it would be read as a stray number after
it. Put the meaning in that element's name instead:
`,(0,_.jsx)(t.code,{children:`aria-label="Notifications, 4 unread"`}),`.`]}),`
`,(0,_.jsxs)(t.li,{children:[`A `,(0,_.jsx)(t.strong,{children:`dot`}),` has no text and is hidden too.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Pass `,(0,_.jsx)(t.code,{children:`aria-label`}),` to any badge to expose it as an image with that name
instead, e.g. a status dot on an avatar: `,(0,_.jsx)(t.code,{children:`aria-label="Online"`}),`.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`count={0}`}),` shows "0". Hide the badge yourself if nothing new should
mean no badge.`]}),`
`,(0,_.jsx)(t.li,{children:`Colour is never the only signal: a destructive badge still needs words
somewhere that say what is wrong.`}),`
`,(0,_.jsx)(t.li,{children:`Contrast is checked by addon-a11y in error mode for every story.`}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),i(),p()})))()}v();export{g as default};