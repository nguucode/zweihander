import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./EventCalendar.stories-DnQJMWFe.js";function v(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i,{of:u}),`
`,(0,b.jsx)(t.h1,{id:`event-calendar`,children:`Event Calendar`}),`
`,(0,b.jsx)(t.p,{children:`Events on a month, week, day or year view, with a header to move through
time and switch views: a team's schedule, bookings, deadlines. After
Tailwind UI Application UI, Data Display: Calendars.`}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/calendar-events.json
`})}),`
`,(0,b.jsxs)(t.p,{children:[`It owns no events: pass the ones you have, and it shows those that fall in
view. Picking a date is the `,(0,b.jsx)(t.a,{href:`?path=/docs/data-display-calendar--docs`,children:`Calendar`}),`
component; this pattern reuses its date helpers, and draws the year view
with it.`]}),`
`,(0,b.jsx)(t.h2,{id:`month`,children:`Month`}),`
`,(0,b.jsxs)(t.p,{children:[`The default view. Each day lists its events, all-day ones first, then by
start time with the time after the title. A day with more than three
lists two and "n more", which opens the day view (or picks the day for the
list below). An all-day or multi-day event shows on every day it covers.
`,(0,b.jsx)(t.code,{children:`actions`}),` takes the header's last slot, e.g. an "Add event" button.`]}),`
`,(0,b.jsx)(o,{of:c}),`
`,(0,b.jsx)(t.h2,{id:`week`,children:`Week`}),`
`,(0,b.jsx)(t.p,{children:`An hour grid, a column per day. Timed events sit by their start and end;
events that overlap share the width side by side. All-day events, and
timed events that cross midnight, go to a row above the hours. The grid
opens at the week's first timed event, or at 8:00.`}),`
`,(0,b.jsx)(o,{of:h}),`
`,(0,b.jsx)(t.h2,{id:`day`,children:`Day`}),`
`,(0,b.jsx)(t.p,{children:`The week's hour grid, one column wide.`}),`
`,(0,b.jsx)(o,{of:f}),`
`,(0,b.jsx)(t.h2,{id:`year`,children:`Year`}),`
`,(0,b.jsxs)(t.p,{children:[`Twelve small Calendars. Picking a day opens it in the day view (or the
month, when `,(0,b.jsx)(t.code,{children:`views`}),` leaves the day out).`]}),`
`,(0,b.jsx)(o,{of:d}),`
`,(0,b.jsx)(t.h2,{id:`the-selected-days-events`,children:`The selected day's events`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`hasEventList`}),` lists the selected day's events under the month, in full.
With `,(0,b.jsx)(t.code,{children:`views={['month']}`}),` the view switch is gone.`]}),`
`,(0,b.jsx)(o,{of:l}),`
`,(0,b.jsx)(t.h2,{id:`clickable-events`,children:`Clickable events`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.code,{children:`onEventClick`}),` makes events buttons, to open one in a
`,(0,b.jsx)(t.a,{href:`?path=/docs/overlays-drawer--docs`,children:`Drawer`}),` for example; an event with
`,(0,b.jsx)(t.code,{children:`href`}),` is a link.`]}),`
`,(0,b.jsx)(o,{of:g}),`
`,(0,b.jsx)(t.h2,{id:`empty`,children:`Empty`}),`
`,(0,b.jsx)(o,{of:m}),`
`,(0,b.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,b.jsx)(a,{of:u}),`
`,(0,b.jsxs)(t.p,{children:[`Every other `,(0,b.jsx)(t.code,{children:`<div>`}),` attribute passes through. Each event takes `,(0,b.jsx)(t.code,{children:`id`}),`,
`,(0,b.jsx)(t.code,{children:`title`}),`, `,(0,b.jsx)(t.code,{children:`start`}),`, and optionally `,(0,b.jsx)(t.code,{children:`end`}),` (exclusive for a timed event, the
last day for an all-day one), `,(0,b.jsx)(t.code,{children:`allDay`}),`, `,(0,b.jsx)(t.code,{children:`color`}),` (a Tag variant) and
`,(0,b.jsx)(t.code,{children:`href`}),`.`]}),`
`,(0,b.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`The header wraps.`}),` Title first; the arrows and Today, the view
switch and `,(0,b.jsx)(t.code,{children:`actions`}),` follow on the same row while it has room, then
drop under the title.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`A month under 40rem wide shows dots, not titles`}),`: one per event, up
to three, in the event's colour. The day's button still says how many.
Turn on `,(0,b.jsx)(t.code,{children:`hasEventList`}),` wherever the calendar can be that narrow, so the
titles are one tap away. It follows the calendar's own width, not the
viewport's.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`The week keeps each day at least 6rem`}),` and scrolls sideways under
that; the day view takes the full width. Both show ten hours and scroll
for the rest.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Long titles are cut with an ellipsis`}),` in the month; in the hour grid
they clip at the event's edge. The full title is in the event's
accessible name either way.`]}),`
`]}),`
`,(0,b.jsx)(o,{of:p}),`
`,(0,b.jsx)(t.h2,{id:`differences-from-the-spec`,children:`Differences from the spec`}),`
`,(0,b.jsx)(t.p,{children:`Tailwind UI's Calendars, and where this departs from them:`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`The view switch is a Select`}),`, as Tailwind's menu is, but it changes
only the view: "Add event" is yours to put in `,(0,b.jsx)(t.code,{children:`actions`}),`.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Multi-day events repeat on each day`}),` in the month, rather than one
bar across the week. Simpler, and it reads the same on a phone.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`The narrow week does not swap to a strip of days.`}),` It scrolls
sideways; pick the day view for a phone.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`No "current time" line`}),` in the week and day views.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`The year view marks no events.`}),` It is twelve Calendars, and Calendar
has no way to mark a day; its API stays as it is. Pick a day to see it.`]}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[`The title is a heading (`,(0,b.jsx)(t.code,{children:`headingLevel`}),`, 2 by default) and a polite live
region, so moving through time is announced. The event list's heading
is one level below.`]}),`
`,(0,b.jsxs)(t.li,{children:[`The month is a table named by the title, with a column header per
weekday. Each day is a button named by its full date and its number of
events, `,(0,b.jsx)(t.code,{children:`aria-pressed`}),` when selected and `,(0,b.jsx)(t.code,{children:`aria-current="date"`}),` on today.`]}),`
`,(0,b.jsx)(t.li,{children:`One day is a tab stop. The arrow keys move the selected day (across the
month's edge too, which turns the month) and focus follows; Tab goes
on to that day's events. Right to left, left and right follow the
screen.`}),`
`,(0,b.jsxs)(t.li,{children:[`Events are links with `,(0,b.jsx)(t.code,{children:`href`}),`, buttons with `,(0,b.jsx)(t.code,{children:`onEventClick`}),`, and text
otherwise. Their name is the title then the start time.`]}),`
`,(0,b.jsx)(t.li,{children:`In the week and day views each day is a list named by its full date,
and the all-day row's lists say "All day". The hour labels and the day
headings above the columns are hidden from assistive tech: the lists
carry the dates and the events their times. The scrolling hours are a
focusable group, so a keyboard can scroll them.`}),`
`,(0,b.jsx)(t.li,{children:`Previous and Next are named for the view's unit ("Next week"); their
arrows mirror right to left.`}),`
`]})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=t(),r(),s(),_()})))()}x();export{y as default};