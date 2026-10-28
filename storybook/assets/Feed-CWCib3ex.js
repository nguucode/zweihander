import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./Feed.stories-BP16JIVk.js";function _(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{of:f}),`
`,(0,y.jsx)(t.h1,{id:`feed`,children:`Feed`}),`
`,(0,y.jsx)(t.p,{children:`What happened to a record, or across many, as a list of sentences: who
did what to what, and when, with what they wrote under it. For a
record's history, a comment thread, or recent activity on a home page.
After Tailwind UI Application UI, Lists: Feeds.`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/feed.json
`})}),`
`,(0,y.jsx)(t.h2,{id:`simple`,children:`Simple`}),`
`,(0,y.jsxs)(t.p,{children:[`An Icon per kind of event, joined by a line. Each event is one
sentence: `,(0,y.jsx)(t.code,{children:`actor`}),` in bold, then `,(0,y.jsx)(t.code,{children:`action`}),`, the rest of it, then the time.
Build the sentence so it reads whole: "changed the status of Harbor
Lights from Active to On hold", not "Status: Active → On hold".`]}),`
`,(0,y.jsx)(o,{of:c}),`
`,(0,y.jsx)(t.h2,{id:`with-comments`,children:`With comments`}),`
`,(0,y.jsxs)(t.p,{children:[`An Avatar for an event a person made, an Icon for one the system made,
and what they wrote in a box under the sentence. The `,(0,y.jsx)(t.a,{href:`?path=/docs/templates-object-management-project-detail--docs`,children:`Project
Detail`}),`
template puts a status change's note there.`]}),`
`,(0,y.jsx)(o,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`without-the-line`,children:`Without the line`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`hasConnector={false}`}),` drops the line, for a short list where each event
stands alone.`]}),`
`,(0,y.jsx)(o,{of:l}),`
`,(0,y.jsx)(t.h2,{id:`with-a-comment-box`,children:`With a comment box`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`composer`}),` takes a form and puts it after the last event, lined up with
the sentences. The form is yours: a labelled
`,(0,y.jsx)(t.a,{href:`?path=/docs/components-inputs-textarea--docs`,children:`Textarea`}),` and a Button,
adding to the items you pass. A thread with a box lists oldest first,
so the newest sits by the box.`]}),`
`,(0,y.jsx)(o,{of:h}),`
`,(0,y.jsx)(t.h2,{id:`linked-and-unread`,children:`Linked and unread`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`href`}),` makes the sentence a link whose target is the whole row, and
`,(0,y.jsx)(t.code,{children:`isUnread`}),` ends the row with a dot; `,(0,y.jsx)(t.code,{children:`onClick`}),` runs when the link is
followed, to mark the item read. The `,(0,y.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-notification-center--docs`,children:`Notification
Center`}),`
lists its notifications this way. With `,(0,y.jsx)(t.code,{children:`href`}),`, keep links out of
`,(0,y.jsx)(t.code,{children:`actor`}),` and `,(0,y.jsx)(t.code,{children:`action`}),`: links cannot nest.`]}),`
`,(0,y.jsx)(o,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`empty`,children:`Empty`}),`
`,(0,y.jsxs)(t.p,{children:[`No items shows `,(0,y.jsx)(t.code,{children:`empty`}),`, "No activity yet." by default, in place of the
list. The composer still shows, so the first comment can be written.`]}),`
`,(0,y.jsx)(o,{of:g}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsxs)(t.p,{children:[`Every `,(0,y.jsx)(t.code,{children:`<div>`}),` attribute passes through to the root, so a page names the
feed with `,(0,y.jsx)(t.code,{children:`role="region"`}),` and `,(0,y.jsx)(t.code,{children:`aria-label`}),` when it has no heading of its
own.`]}),`
`,(0,y.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`The media column is as wide as a small Avatar; an Icon sits in a
filled circle of that size, and an Avatar covers it.`}),`
`,(0,y.jsx)(t.li,{children:`The line runs down the centre of that column, from one media to the
next, and stops at the last.`}),`
`,(0,y.jsx)(t.li,{children:`The time follows the sentence instead of taking a column at the end,
so the feed fits a narrow aside: it wraps whole, never mid-date.`}),`
`,(0,y.jsx)(t.li,{children:`Long names, links and comments break anywhere rather than overflow.`}),`
`]}),`
`,(0,y.jsx)(o,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Time`}),` follows the sentence instead of sitting at the end of the
row: the feed lives in asides and expanded rows as often as on a page.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Comment`}),` is a slot of the event, not a separate event type, so any
event can carry text: a status change keeps its reason.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Composer`}),`: Tailwind draws the box with the user's avatar beside it.
Here it lines up with the sentences and the form is yours.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`The events are an ordered list, so a screen reader announces how many
there are and where each one sits.`}),`
`,(0,y.jsx)(t.li,{children:`The media is hidden from assistive tech: the sentence names the
person and the event, so the avatar or icon adds nothing to hear.`}),`
`,(0,y.jsxs)(t.li,{children:[`Each time is a `,(0,y.jsx)(t.code,{children:`<time>`}),` element with the full ISO moment, whatever
`,(0,y.jsx)(t.code,{children:`formatTime`}),` shows.`]}),`
`,(0,y.jsxs)(t.li,{children:[`The feed has no landmark or heading of its own. Put it under a
heading, or pass `,(0,y.jsx)(t.code,{children:`role="region"`}),` and an `,(0,y.jsx)(t.code,{children:`aria-label`}),` when it stands
alone, as the Projects row does ("Harbor Lights activity").`]}),`
`,(0,y.jsxs)(t.li,{children:[`A row with `,(0,y.jsx)(t.code,{children:`href`}),` is one link, named by its sentence; the time and
comment sit outside it.`]}),`
`,(0,y.jsx)(t.li,{children:`The unread dot is an image named "Unread", so the state is heard as
well as seen.`}),`
`,(0,y.jsx)(t.li,{children:`The composer's field needs a visible label, such as "Add a comment".`}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),s(),d()})))()}b();export{v as default};