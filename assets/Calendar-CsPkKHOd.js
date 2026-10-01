import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Crmh4rpo.js";import{i as n,r}from"./react-ChU3Unfn.js";import{c as i,i as a,n as o,s}from"./blocks-DfpLWjEg.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./Calendar.stories-CE57_R0C.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{of:h}),`
`,(0,v.jsx)(t.h1,{id:`calendar`,children:`Calendar`}),`
`,(0,v.jsxs)(t.p,{children:[`A month grid to pick one day from, or to show one: a booking page, the
inside of a Date Picker. Spec:
`,(0,v.jsx)(t.a,{href:`https://www.uiguideline.com/components/calendar`,rel:`nofollow`,children:`uiguideline.com/components/calendar`}),`.
A plain element, using `,(0,v.jsx)(t.code,{children:`Intl`}),` for names and the week's first day: no
date library.`]}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Part`}),(0,v.jsx)(t.th,{children:`What it is`})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Header`})}),(0,v.jsx)(t.td,{children:`Previous and next month buttons around the month and year.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Weekdays`})}),(0,v.jsx)(t.td,{children:`Short names, the locale's first day first.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Day`})}),(0,v.jsx)(t.td,{children:`A 40px button (44px on touch). Days of the months either side are shown muted, and still pickable.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Today`})}),(0,v.jsx)(t.td,{children:`A ring and bold figure.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Selected`})}),(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`--primary`}),` behind `,(0,v.jsx)(t.code,{children:`--primary-foreground`}),`.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.strong,{children:`Unavailable`})}),(0,v.jsxs)(t.td,{children:[`Muted and struck through; before `,(0,v.jsx)(t.code,{children:`min`}),`, after `,(0,v.jsx)(t.code,{children:`max`}),`, or ruled out by `,(0,v.jsx)(t.code,{children:`isDateDisabled`}),`.`]})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Prop`}),(0,v.jsx)(t.th,{children:`Values`}),(0,v.jsx)(t.th,{children:`Default`}),(0,v.jsx)(t.th,{})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`value`}),`, `,(0,v.jsx)(t.code,{children:`defaultValue`}),`, `,(0,v.jsx)(t.code,{children:`onValueChange`})]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`Date`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`null`})}),(0,v.jsx)(t.td,{children:`Local midnight; times are ignored.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`month`}),`, `,(0,v.jsx)(t.code,{children:`defaultMonth`}),`, `,(0,v.jsx)(t.code,{children:`onMonthChange`})]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`Date`})}),(0,v.jsx)(t.td,{children:`value's or today's`}),(0,v.jsx)(t.td,{children:`The month shown.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsxs)(t.td,{children:[(0,v.jsx)(t.code,{children:`min`}),`, `,(0,v.jsx)(t.code,{children:`max`})]}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`Date`})}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsx)(t.td,{})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`isDateDisabled`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`(date) => boolean`})}),(0,v.jsx)(t.td,{children:`–`}),(0,v.jsx)(t.td,{children:`Rule out single days.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`locale`})}),(0,v.jsx)(t.td,{children:`BCP 47 tag`}),(0,v.jsx)(t.td,{children:`the browser's`}),(0,v.jsx)(t.td,{children:`Month and weekday names.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`weekStartsOn`})}),(0,v.jsx)(t.td,{children:`0–6`}),(0,v.jsx)(t.td,{children:`the locale's`}),(0,v.jsx)(t.td,{children:`0 is Sunday.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`autoFocus`})}),(0,v.jsx)(t.td,{children:`boolean`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`false`})}),(0,v.jsx)(t.td,{children:`Focus the selected day, e.g. inside a popover.`})]})]})]}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`isSameDay`}),`, `,(0,v.jsx)(t.code,{children:`addDays`}),`, `,(0,v.jsx)(t.code,{children:`addMonths`}),`, `,(0,v.jsx)(t.code,{children:`startOfDay`}),` and `,(0,v.jsx)(t.code,{children:`firstDayOfWeek`}),`
are exported for working with the same plain dates.`]}),`
`,(0,v.jsx)(a,{of:d}),`
`,(0,v.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Six rows always.`}),` Months span four to six weeks; a fixed height
keeps a popover or a page from jumping as you page through them.`]}),`
`]}),`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`The locale decides the week.`}),` `,(0,v.jsx)(t.code,{children:`vi-VN`}),` and `,(0,v.jsx)(t.code,{children:`en-GB`}),` start on Monday,
`,(0,v.jsx)(t.code,{children:`en-US`}),` on Sunday, read from `,(0,v.jsx)(t.code,{children:`Intl.Locale`}),` where the browser knows it
(Monday otherwise).`]}),`
`]}),`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Month steps keep the day where they can.`}),` 31 January plus a month
is 28 February, not 3 March.`]}),`
`,(0,v.jsx)(o,{of:c}),`
`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(o,{of:f}),`
`,(0,v.jsx)(o,{of:m}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsxs)(t.p,{children:[`A `,(0,v.jsx)(t.code,{children:`role="grid"`}),` named by the month and year, with column headers
carrying the full weekday name. The selected cell has
`,(0,v.jsx)(t.code,{children:`aria-selected`}),`, today's day `,(0,v.jsx)(t.code,{children:`aria-current="date"`}),`, and each day
button the full date as its name ("Friday 18 September 2026").`]}),`
`]}),`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsx)(t.p,{children:`One tab stop: the selected day (or today). Arrows move a day or a
week, Home and End go to the week's ends, Page Up and Page Down move a
month and Shift+Page Up/Down a year, Enter or Space selects. Moving
past the month shows the next one.`}),`
`,(0,v.jsx)(o,{of:p}),`
`]}),`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsx)(t.p,{children:`The month and year are a polite live region, so paging is announced.`}),`
`]}),`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsxs)(t.p,{children:[`Unavailable days stay focusable with `,(0,v.jsx)(t.code,{children:`aria-disabled`}),`, so they are
found and announced as unavailable rather than skipped silently.`]}),`
`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),i(),l()})))()}y();export{_ as default};