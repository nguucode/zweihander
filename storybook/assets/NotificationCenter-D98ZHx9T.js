import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./NotificationCenter.stories-m9DHBVl_.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(t.h1,{id:`notification-center`,children:`Notification Center`}),`
`,(0,_.jsxs)(t.p,{children:[`What needs your attention across the app: a bell in the `,(0,_.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-top-bar--docs`,children:`Top
Bar`}),` with the unread
count on it, and a panel under it listing the notifications, newest
first, unread ones marked with a dot. After Catalyst Blocks,
Notifications.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/notification-center.json
`})}),`
`,(0,_.jsx)(t.h2,{id:`in-the-top-bar`,children:`In the Top Bar`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`NotificationCenter`}),` is the bell and the panel. The bell is a ghost icon
Button with a floating `,(0,_.jsx)(t.a,{href:`?path=/docs/components-atomic-elements-badge--docs`,children:`Badge`}),`
for the unread count, and opens the panel in a
`,(0,_.jsx)(t.a,{href:`?path=/docs/components-overlays-popover--docs`,children:`Popover`}),`. The rows are a
`,(0,_.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-feed--docs`,children:`Feed`}),` without the
connecting line: each is a sentence, `,(0,_.jsx)(t.code,{children:`href`}),` makes the whole row a link,
and `,(0,_.jsx)(t.code,{children:`isUnread`}),` puts a dot at its end and counts it.`]}),`
`,(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(t.h2,{id:`with-tabs`,children:`With tabs`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`hasTabs`}),` adds All and Unread tabs; Unread carries the count, and shows
`,(0,_.jsx)(t.code,{children:`emptyUnread`}),` once everything is read. `,(0,_.jsx)(t.code,{children:`NotificationPanel`}),` is the inside
on its own, for a `,(0,_.jsx)(t.a,{href:`?path=/docs/components-overlays-drawer--docs`,children:`Drawer`}),`
or a column of a page.`]}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`empty`,children:`Empty`}),`
`,(0,_.jsxs)(t.p,{children:[`No items shows `,(0,_.jsx)(t.code,{children:`empty`}),` in place of the list; the bell has no count and
Mark all as read is disabled.`]}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(a,{of:l}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`NotificationPanel`}),` takes the same props except `,(0,_.jsx)(t.code,{children:`label`}),`, `,(0,_.jsx)(t.code,{children:`side`}),`, `,(0,_.jsx)(t.code,{children:`align`}),`,
`,(0,_.jsx)(t.code,{children:`open`}),`, `,(0,_.jsx)(t.code,{children:`defaultOpen`}),`, `,(0,_.jsx)(t.code,{children:`onOpenChange`}),` and `,(0,_.jsx)(t.code,{children:`container`}),`, which belong to
the bell and its Popover. The pattern owns no data: `,(0,_.jsx)(t.code,{children:`onMarkAllRead`}),` is
where you set every `,(0,_.jsx)(t.code,{children:`isUnread`}),` to false, and an item's `,(0,_.jsx)(t.code,{children:`onClick`}),` runs
when its link is followed, to mark that one read.`]}),`
`,(0,_.jsxs)(t.p,{children:[`A notification that arrives while the panel is closed only changes the
count. When it needs attention now, also raise a
`,(0,_.jsx)(t.a,{href:`?path=/docs/components-notifications-toast--docs`,children:`Toast`}),`: the count is
not announced, and the bell is easy to miss.`]}),`
`,(0,_.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`The panel is as wide as a Popover goes (22rem), and narrower when the
window is.`}),`
`,(0,_.jsx)(t.li,{children:`It is no taller than the room under the bell. The list scrolls; the
header stays pinned at the top.`}),`
`,(0,_.jsx)(t.li,{children:`The header wraps: the actions drop under the heading when they do
not fit beside it.`}),`
`,(0,_.jsx)(t.li,{children:`The unread dot has a column of its own at the end of the row, so the
sentence never runs under it. Long names and file names break anywhere
rather than overflow.`}),`
`]}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Settings`}),` is not a built-in button: `,(0,_.jsx)(t.code,{children:`actions`}),` takes what the app
has, such as a More menu with View all and Notification settings.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Tabs`}),` are optional; a short list reads fine without them.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Time`}),` is the Feed's: pass a relative `,(0,_.jsx)(t.code,{children:`formatTime`}),` ("5 minutes ago")
as the stories do.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`The bell's name carries the count ("Notifications, 3 unread"); the
floating badge is hidden, so the count is said once.`}),`
`,(0,_.jsx)(t.li,{children:`The panel is a dialog named "Notifications". Opening it moves focus
inside; Escape closes it and returns focus to the bell.`}),`
`,(0,_.jsxs)(t.li,{children:[`A heading (level 2 by default, `,(0,_.jsx)(t.code,{children:`headingLevel`}),` to change it) names the
panel for heading navigation.`]}),`
`,(0,_.jsxs)(t.li,{children:[`The notifications are a list. A row with `,(0,_.jsx)(t.code,{children:`href`}),` is one link: the
sentence is its text, and the whole row is its target.`]}),`
`,(0,_.jsx)(t.li,{children:`An unread row ends with a dot named "Unread", so the state is heard
as well as seen.`}),`
`,(0,_.jsx)(t.li,{children:`Mark all as read is disabled when nothing is unread.`}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),s(),p()})))()}v();export{g as default};