import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,i as a,n as o,s}from"./blocks-BCmbfwq7.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./Calendar.stories-HKj7XmdS.js";function _(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{of:g}),`
`,(0,y.jsx)(t.h1,{id:`calendar`,children:`Calendar`}),`
`,(0,y.jsxs)(t.p,{children:[`A month grid to pick one day from, or to show one: a booking page, the
inside of a Date Picker. Spec:
`,(0,y.jsx)(t.a,{href:`https://www.uiguideline.com/components/calendar`,rel:`nofollow`,children:`uiguideline.com/components/calendar`}),`.
A plain element, using `,(0,y.jsx)(t.code,{children:`Intl`}),` for names and the week's first day: no
date library.`]}),`
`,(0,y.jsx)(o,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Part`}),(0,y.jsx)(t.th,{children:`What it is`})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.strong,{children:`Header`})}),(0,y.jsx)(t.td,{children:`The short month and year ("Oct 2026") at the start, previous and next month buttons together at the end.`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.strong,{children:`Weekdays`})}),(0,y.jsx)(t.td,{children:`Two letters ("Mo"), or the narrow names ("T2") where the short ones are long; the locale's first day first.`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.strong,{children:`Day`})}),(0,y.jsxs)(t.td,{children:[`A 32px button (44px on touch), 4px apart. Days of the months either side are decoration: faded (`,(0,y.jsx)(t.code,{children:`--muted-foreground`}),` at 50%), hidden from assistive tech, not pickable, never selected or in a range. Arrow keys still cross into them by moving the month.`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.strong,{children:`Today`})}),(0,y.jsxs)(t.td,{children:[`An `,(0,y.jsx)(t.code,{children:`--orange`}),` disc with an `,(0,y.jsx)(t.code,{children:`--orange-foreground`}),` (white) figure, round where a selected day is square. White on orange is 3.4:1, under WCAG's 4.5:1: a deliberate choice; `,(0,y.jsx)(t.code,{children:`aria-current="date"`}),` carries it for assistive tech.`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.strong,{children:`Selected`})}),(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`--primary`}),` (the brand) behind `,(0,y.jsx)(t.code,{children:`--primary-foreground`}),`. Wins over today when they are the same day.`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.strong,{children:`Range`})}),(0,y.jsxs)(t.td,{children:[`With `,(0,y.jsx)(t.code,{children:`range`}),`: both ends selected, the days between on an `,(0,y.jsx)(t.code,{children:`--accent`}),` band as tall as a day, rounded where a week or the month starts or ends. Days of the months either side are not banded, so two months side by side never draw the same day twice.`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.strong,{children:`Unavailable`})}),(0,y.jsxs)(t.td,{children:[`Muted and struck through; before `,(0,y.jsx)(t.code,{children:`min`}),`, after `,(0,y.jsx)(t.code,{children:`max`}),`, or ruled out by `,(0,y.jsx)(t.code,{children:`isDateDisabled`}),`.`]})]})]})]}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsxs)(t.table,{children:[(0,y.jsx)(t.thead,{children:(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.th,{children:`Prop`}),(0,y.jsx)(t.th,{children:`Values`}),(0,y.jsx)(t.th,{children:`Default`}),(0,y.jsx)(t.th,{})]})}),(0,y.jsxs)(t.tbody,{children:[(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`value`}),`, `,(0,y.jsx)(t.code,{children:`defaultValue`}),`, `,(0,y.jsx)(t.code,{children:`onValueChange`})]}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`Date`})}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`null`})}),(0,y.jsx)(t.td,{children:`Local midnight; times are ignored.`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`month`}),`, `,(0,y.jsx)(t.code,{children:`defaultMonth`}),`, `,(0,y.jsx)(t.code,{children:`onMonthChange`})]}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`Date`})}),(0,y.jsx)(t.td,{children:`value's or today's`}),(0,y.jsx)(t.td,{children:`The month shown.`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsxs)(t.td,{children:[(0,y.jsx)(t.code,{children:`min`}),`, `,(0,y.jsx)(t.code,{children:`max`})]}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`Date`})}),(0,y.jsx)(t.td,{children:`–`}),(0,y.jsx)(t.td,{})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`isDateDisabled`})}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`(date) => boolean`})}),(0,y.jsx)(t.td,{children:`–`}),(0,y.jsx)(t.td,{children:`Rule out single days.`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`range`})}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`{ start, end }`})}),(0,y.jsx)(t.td,{children:`–`}),(0,y.jsxs)(t.td,{children:[`Shows a span instead of `,(0,y.jsx)(t.code,{children:`value`}),`. Clicks still report one day; the owner decides the span, as Date Range Picker does.`]})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`locale`})}),(0,y.jsx)(t.td,{children:`BCP 47 tag`}),(0,y.jsx)(t.td,{children:`the browser's`}),(0,y.jsx)(t.td,{children:`Month and weekday names.`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`weekStartsOn`})}),(0,y.jsx)(t.td,{children:`0–6`}),(0,y.jsx)(t.td,{children:`the locale's`}),(0,y.jsx)(t.td,{children:`0 is Sunday.`})]}),(0,y.jsxs)(t.tr,{children:[(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`autoFocus`})}),(0,y.jsx)(t.td,{children:`boolean`}),(0,y.jsx)(t.td,{children:(0,y.jsx)(t.code,{children:`false`})}),(0,y.jsx)(t.td,{children:`Focus the selected day, e.g. inside a popover.`})]})]})]}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.code,{children:`isSameDay`}),`, `,(0,y.jsx)(t.code,{children:`addDays`}),`, `,(0,y.jsx)(t.code,{children:`addMonths`}),`, `,(0,y.jsx)(t.code,{children:`startOfDay`}),` and `,(0,y.jsx)(t.code,{children:`firstDayOfWeek`}),`
are exported for working with the same plain dates.`]}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Six rows always.`}),` Months span four to six weeks; a fixed height
keeps a popover or a page from jumping as you page through them.`]}),`
`]}),`
`,(0,y.jsxs)(t.li,{children:[`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`The locale decides the week.`}),` `,(0,y.jsx)(t.code,{children:`vi-VN`}),` and `,(0,y.jsx)(t.code,{children:`en-GB`}),` start on Monday,
`,(0,y.jsx)(t.code,{children:`en-US`}),` on Sunday, read from `,(0,y.jsx)(t.code,{children:`Intl.Locale`}),` where the browser knows it
(Monday otherwise).`]}),`
`]}),`
`,(0,y.jsxs)(t.li,{children:[`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Month steps keep the day where they can.`}),` 31 January plus a month
is 28 February, not 3 March.`]}),`
`,(0,y.jsx)(o,{of:c}),`
`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,y.jsx)(o,{of:u}),`
`,(0,y.jsx)(o,{of:h}),`
`,(0,y.jsx)(o,{of:p}),`
`,(0,y.jsx)(o,{of:l}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`
`,(0,y.jsxs)(t.p,{children:[`A `,(0,y.jsx)(t.code,{children:`role="grid"`}),` named by the month and year, with column headers
carrying the full weekday name. The selected cell has
`,(0,y.jsx)(t.code,{children:`aria-selected`}),`, today's day `,(0,y.jsx)(t.code,{children:`aria-current="date"`}),`, and each day
button the full date as its name ("Friday 18 September 2026").`]}),`
`]}),`
`,(0,y.jsxs)(t.li,{children:[`
`,(0,y.jsx)(t.p,{children:`One tab stop: the selected day (or today). Arrows move a day or a
week, Home and End go to the week's ends, Page Up and Page Down move a
month and Shift+Page Up/Down a year, Enter or Space selects. Moving
past the month shows the next one.`}),`
`,(0,y.jsx)(o,{of:m}),`
`]}),`
`,(0,y.jsxs)(t.li,{children:[`
`,(0,y.jsx)(t.p,{children:`The month and year are a polite live region, so paging is announced.`}),`
`]}),`
`,(0,y.jsxs)(t.li,{children:[`
`,(0,y.jsxs)(t.p,{children:[`Unavailable days stay focusable with `,(0,y.jsx)(t.code,{children:`aria-disabled`}),`, so they are
found and announced as unavailable rather than skipped silently.`]}),`
`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),i(),d()})))()}b();export{v as default};