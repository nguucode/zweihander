import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-DsER1A51.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-I6SQLLHM.js";import{n as b,t as x}from"./Status-CNj0XQZL.js";import{a as S,t as C}from"./Calendar-Cok6MzMb.js";import{a as w,c as T,d as E,f as D,i as O,l as k,n as A,o as j,p as M,r as N,s as P,t as F,u as I}from"./Calendar.stories-jD_L0CDn.js";function L(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(c,{of:A}),`
`,(0,z.jsx)(t.h1,{id:`calendar`,children:`Calendar`}),`
`,(0,z.jsxs)(u,{children:[(0,z.jsxs)(_,{value:`overview`,children:[(0,z.jsxs)(t.p,{children:[`A month grid to pick one day from, or to show one: a booking page, the
inside of a `,(0,z.jsx)(t.a,{href:`?path=/docs/components-inputs-datepicker--docs`,children:`Date Picker`}),`.`]}),(0,z.jsx)(x,{of:A}),(0,z.jsx)(s,{of:N}),(0,z.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,z.jsx)(t.p,{children:`Calendar has one look and one size. What changes is what it shows.`}),(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`Variant`}),(0,z.jsx)(t.th,{children:`Use for`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsxs)(t.td,{children:[`One day (`,(0,z.jsx)(t.code,{children:`value`}),`)`]}),(0,z.jsx)(t.td,{children:`Picking or showing a single day: a delivery date, a booking.`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsxs)(t.td,{children:[`A span (`,(0,z.jsx)(t.code,{children:`range`}),`)`]}),(0,z.jsx)(t.td,{children:`Showing a stay or a report period. Clicks still report one day; Date Range Picker decides the span.`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsxs)(t.td,{children:[`Limits (`,(0,z.jsx)(t.code,{children:`min`}),`, `,(0,z.jsx)(t.code,{children:`max`}),`)`]}),(0,z.jsx)(t.td,{children:`Booking windows: nothing before tomorrow, nothing after the season ends.`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsxs)(t.td,{children:[`Ruled-out days (`,(0,z.jsx)(t.code,{children:`isDateDisabled`}),`)`]}),(0,z.jsx)(t.td,{children:`Weekends, holidays, days already booked.`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsxs)(t.td,{children:[`Locale (`,(0,z.jsx)(t.code,{children:`locale`}),`, `,(0,z.jsx)(t.code,{children:`weekStartsOn`}),`)`]}),(0,z.jsx)(t.td,{children:`Month and weekday names in the reader's language, and their first day of the week.`})]})]})]}),(0,z.jsx)(s,{of:I}),(0,z.jsx)(s,{of:P}),(0,z.jsx)(s,{of:k}),(0,z.jsxs)(t.p,{children:[`The locale decides the week: `,(0,z.jsx)(t.code,{children:`vi-VN`}),` and `,(0,z.jsx)(t.code,{children:`en-GB`}),` start on Monday, `,(0,z.jsx)(t.code,{children:`en-US`}),`
on Sunday, read from `,(0,z.jsx)(t.code,{children:`Intl.Locale`}),` where the browser knows it (Monday
otherwise). The grid is always Gregorian, so a locale whose own calendar is
not (Persian) still gets Gregorian days, in its own digits.`]}),(0,z.jsx)(s,{of:E}),(0,z.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,z.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,z.jsx)(t.pre,{children:(0,z.jsx)(t.code,{className:`language-js`,children:`import { Calendar } from 'zweihander/calendar'
`})}),(0,z.jsx)(t.pre,{children:(0,z.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/calendar.json
`})}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[`Source: `,(0,z.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/data-display/Calendar.tsx`,rel:`nofollow`,children:`src/components/data-display/Calendar.tsx`})]}),`
`,(0,z.jsxs)(t.li,{children:[`Spec: `,(0,z.jsx)(t.a,{href:`https://www.uiguideline.com/components/calendar`,rel:`nofollow`,children:`uiguideline.com/components/calendar`})]}),`
`,(0,z.jsxs)(t.li,{children:[`Behaviour: a plain element, using `,(0,z.jsx)(t.code,{children:`Intl`}),` for names and the week's first day: no date library`]}),`
`,(0,z.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,z.jsxs)(_,{value:`specs`,children:[(0,z.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,z.jsx)(y,{parts:D,children:(0,z.jsx)(i,{of:F})}),(0,z.jsx)(t.p,{children:`The grid always has six rows. Months span four to six weeks; a fixed height
keeps a popover or a page from jumping as you page through them.`}),(0,z.jsxs)(t.p,{children:[`Two more looks sit on the days: `,(0,z.jsx)(t.strong,{children:`today`}),`, an orange fill with the
control's corners, as a selected day has; and with `,(0,z.jsx)(t.code,{children:`range`}),`, the `,(0,z.jsx)(t.strong,{children:`band`}),`, as tall as a day,
one unbroken strip behind the days from one end to the other. Under the
two ends it covers only the half that faces the range, so each end keeps
its own corners on the outside. The band rounds off where a week or
the month starts or ends. Days of the months either side are never banded,
so two months side by side never draw the same day twice.`]}),(0,z.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,z.jsxs)(t.p,{children:[`Calendar has one size, after `,(0,z.jsx)(t.code,{children:`@atlaskit/calendar`}),`. Days are 40px wide and
32px tall and touch: the whole cell is the day's target, and a range's
band runs unbroken from cell to cell. The weekday row is 32px tall, 8px
round a 16px line of bold 12px. The header keeps 8px at each end and sits
12px above the grid; its arrows are 24px round a 12px chevron. In a Date
Picker the panel adds 16px round all of it.`]}),(0,z.jsx)(t.p,{children:`The header is one row: previous month at the start, the month and year
centred, in the 14px heading size, and next month at the end. There are
no year buttons; Shift+Page Up and Shift+Page Down page by year. The kit
keeps its own looks for today and the selected day.`}),(0,z.jsx)(g,{caption:`Header`,rows:[{part:`Header`,property:`Inline padding`,token:`--space-inline`},{part:`Month`,property:`Font size`,token:`--text-heading-xs`},{part:`Month`,property:`Line height`,token:`--leading-heading-xs`},{part:`Previous and next`,property:`Size`,token:`--control-sm`},{part:`Previous and next`,property:`Minimum on touch screens`,token:`--target-coarse`},{part:`Previous and next`,property:`Corner radius`,token:`--radius-control`},{part:`Previous and next`,property:`Icon size`,token:`--icon-xs`},{part:`Header to grid`,property:`Gap`,token:`--space-3`}]}),(0,z.jsx)(g,{caption:`Grid`,rows:[{part:`Weekdays`,property:`Padding`,token:`--space-2`},{part:`Weekdays`,property:`Minimum width`,token:`--box-lg`},{part:`Weekdays`,property:`Font size`,token:`--text-body-sm`},{part:`Weekdays`,property:`Line height`,token:`--leading-body-sm`},{part:`Day`,property:`Width`,token:`--box-lg`},{part:`Day`,property:`Height`,token:`--control-md`},{part:`Day`,property:`Width and height on touch screens`,token:`--target-coarse`},{part:`Day`,property:`Corner radius`,token:`--radius-control`},{part:`Day`,property:`Font size`,token:`--text-body`},{part:`Day`,property:`Line height`,token:`--leading-body`},{part:`Today`,property:`Corner radius`,token:`--radius-control`},{part:`Range band`,property:`End corner radius`,token:`--radius-control`}]}),(0,z.jsx)(g,{caption:`Every part`,rows:[{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`}]}),(0,z.jsxs)(t.p,{children:[`Figures are tabular, so the columns of dates line up. On touch screens
(`,(0,z.jsx)(t.code,{children:`pointer: coarse`}),`) days grow to 44px square, the touch target: they
touch, so a larger invisible area would lie over the next day. The
previous and next buttons stay 24px and grow an invisible 44px area
instead. The header makes room for them: it pads 10px (half of 44px less
24px) and the month keeps 10px clear at each side, so the areas lie over
neither the month nor the calendar's edge.`]}),(0,z.jsx)(t.h2,{id:`color`,children:`Color`}),(0,z.jsx)(t.p,{children:`One table per kind of day. Switch the theme and the accent in the toolbar:
the values follow.`}),(0,z.jsx)(g,{caption:`Header and weekdays`,rows:[{part:`Month`,property:`Colour`,token:`--color-text`},{part:`Previous and next`,property:`Colour`,token:`--color-text`},{part:`Weekdays`,property:`Colour`,token:`--color-text-subtlest`}]}),(0,z.jsx)(g,{caption:`Day`,rows:[{part:`Day`,property:`Colour`,token:`--color-text`}]}),(0,z.jsx)(g,{caption:`Selected`,rows:[{part:`Day`,property:`Background`,token:`--color-background-brand-bold`},{part:`Day`,property:`Colour`,token:`--color-text-brand-inverse`}]}),(0,z.jsx)(g,{caption:`Today`,rows:[{part:`Day`,property:`Background`,token:`--color-background-accent-orange-bolder`},{part:`Day`,property:`Colour`,token:`--color-text-accent-orange-contrast`}]}),(0,z.jsx)(g,{caption:`Range`,rows:[{part:`Band`,property:`Background`,token:`--color-background-neutral`},{part:`Days between`,property:`Colour`,token:`--color-text`},{part:`Today, between`,property:`Colour`,token:`--color-text-accent-orange-contrast`}]}),(0,z.jsx)(g,{caption:`Outside the month and unavailable`,rows:[{part:`Outside day`,property:`Colour, at 50%`,token:`--color-text-subtlest`},{part:`Unavailable day`,property:`Colour, at 60% opacity`,token:`--color-text-subtlest`}]}),(0,z.jsx)(g,{caption:`Every part`,rows:[{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Day`}),` has no fill at rest.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Today's figure`}),` is `,(0,z.jsx)(t.code,{children:`--color-text-accent-orange-contrast`}),`, semibold:
near-black on `,(0,z.jsx)(t.code,{children:`--color-background-accent-orange-bolder`}),`, 4.9:1 in both
modes. White would be 3.4:1 in light, under the 4.5:1 a 14px figure
needs. A selected today shows as selected.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Days between`}),` the ends of a range are `,(0,z.jsx)(t.code,{children:`--color-text`}),`, regular weight.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Outside days`}),` are `,(0,z.jsx)(t.code,{children:`--color-text-subtlest`}),` mixed 50% with transparent,
about 2:1. No token is lighter, and WCAG allows it for decoration: they
are hidden from assistive tech and cannot be picked.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Unavailable days`}),` are struck through as well as faded, so they do not
rely on colour.`]}),`
`]}),(0,z.jsx)(t.h2,{id:`states`,children:`States`}),(0,z.jsx)(v,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`}],children:(0,z.jsx)(i,{of:N})}),(0,z.jsx)(v,{states:[{label:`Focus`,pseudo:`focus-visible`},{label:`Pressed`,pseudo:`active`}],children:(0,z.jsx)(i,{of:N})}),(0,z.jsx)(v,{states:[{label:`Disabled`,content:(0,z.jsx)(i,{of:P})},{label:`Today`,content:(0,z.jsx)(C,{locale:`en-GB`,weekStartsOn:1})}]}),(0,z.jsx)(v,{states:[{label:`Selected range`,content:(0,z.jsx)(i,{of:I})}]}),(0,z.jsx)(t.p,{children:`Each example forces the state on every day at once; on screen it is the
one under the pointer or the keyboard.`}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Hover`}),` fills a day, or the previous and next buttons, with `,(0,z.jsx)(t.code,{children:`--color-background-neutral`}),`
behind `,(0,z.jsx)(t.code,{children:`--color-text`}),`. The selected day and today keep their own
colours; unavailable and outside days do not react.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,z.jsx)(t.code,{children:`--color-border-focused`}),` outline, 2px outside the day. The days
touch, so the focused day is lifted above its neighbours and the ring
is drawn whole over their edges.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Pressed`}),` has no look of its own: the click selects the day, and the
selected look follows.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Disabled`}),` is per day: before `,(0,z.jsx)(t.code,{children:`min`}),`, after `,(0,z.jsx)(t.code,{children:`max`}),`, or ruled out by
`,(0,z.jsx)(t.code,{children:`isDateDisabled`}),`. The previous and next buttons
disable in the month of `,(0,z.jsx)(t.code,{children:`min`}),` or `,(0,z.jsx)(t.code,{children:`max`}),`, at 50% opacity.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Selected`}),` is the brand fill, with the control's corners; `,(0,z.jsx)(t.strong,{children:`today`}),` is
the orange fill, with the same corners. With `,(0,z.jsx)(t.code,{children:`range`}),`, both ends are selected and the days between are
banded.`]}),`
`]}),(0,z.jsx)(t.h2,{id:`api`,children:`API`}),(0,z.jsx)(`div`,{style:{overflowX:`auto`},children:(0,z.jsx)(o,{of:A})}),(0,z.jsxs)(t.p,{children:[`Also exported, for working with the same plain dates: `,(0,z.jsx)(t.code,{children:`isSameDay`}),`,
`,(0,z.jsx)(t.code,{children:`addDays`}),`, `,(0,z.jsx)(t.code,{children:`addMonths`}),`, `,(0,z.jsx)(t.code,{children:`startOfDay`}),`, `,(0,z.jsx)(t.code,{children:`firstDayOfWeek`}),` and the `,(0,z.jsx)(t.code,{children:`DateRange`}),`
type. Every date is local midnight; times are ignored.`]}),(0,z.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,z.jsxs)(t.p,{children:[`The header follows `,(0,z.jsx)(t.code,{children:`@atlaskit/calendar`}),` in the size of its buttons and
the centred month and year, without its year buttons: Shift+Page Up and
Shift+Page Down page by year.`]}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsxs)(t.strong,{children:[`The buttons disable at `,(0,z.jsx)(t.code,{children:`min`}),` and `,(0,z.jsx)(t.code,{children:`max`}),`.`]}),` Atlassian's stay enabled and
page into months with nothing to pick.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Fixed button names.`}),` "Previous month" and "Next month", in English
like the kit's other built-in labels. Atlassian takes them as props and
adds the month they lead to ("Previous month, August 2026").`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`The month is not a heading.`}),` Atlassian's is one, with a level prop; a
calendar can sit anywhere in a page's outline, so here it is a plain
live region, and the grid is named with the same text.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Always a live region.`}),` Atlassian turns `,(0,z.jsx)(t.code,{children:`aria-live`}),` on after the first
press of a header button; here it is there from the start, which
announces nothing until the month changes.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Semibold is 600`}),`, as the kit's other headings; Atlassian's heading
weight is 653.`]}),`
`]})]}),(0,z.jsxs)(_,{value:`guidelines`,children:[(0,z.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,z.jsxs)(t.p,{children:[`Use a Calendar where the day is picked by looking at the month: a booking
page, a delivery slot, a few weeks either side of today. Rule out the days
that cannot be picked with `,(0,z.jsx)(t.code,{children:`min`}),`, `,(0,z.jsx)(t.code,{children:`max`}),` and `,(0,z.jsx)(t.code,{children:`isDateDisabled`}),`, rather than
refusing the choice after it is made.`]}),(0,z.jsx)(l,{do:(0,z.jsx)(i,{of:O}),doCaption:`A date close to now, where seeing the week matters: unavailable days are struck through before anyone picks them.`,dont:(0,z.jsx)(i,{of:w}),dontCaption:`A date of birth is decades away: paging back a month, or even a year, at a time is slow. Type it in a Date Picker.`}),(0,z.jsx)(t.p,{children:`Month steps keep the day where they can: 31 January plus a month is 28
February, not 3 March.`}),(0,z.jsx)(s,{of:T}),(0,z.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`For a date far from today`}),`, or one people know by heart, like a date
of birth. Use a `,(0,z.jsx)(t.a,{href:`?path=/docs/components-inputs-datepicker--docs`,children:`Date Picker`}),`:
it takes the date typed, and opens this calendar when wanted.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`For a span inside a form.`}),` Use a
`,(0,z.jsx)(t.a,{href:`?path=/docs/components-inputs-daterangepicker--docs`,children:`Date Range Picker`}),`:
it owns the two clicks that make a span and shows it here.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`For a schedule of events.`}),` A day here holds a number, not content.
List the events in a `,(0,z.jsx)(t.a,{href:`?path=/docs/components-data-display-table--docs`,children:`Table`}),`.`]}),`
`]}),(0,z.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsxs)(t.p,{children:[`A `,(0,z.jsx)(t.code,{children:`role="grid"`}),` named by the month and year ("September 2026"), with
column headers that carry the full weekday name in `,(0,z.jsx)(t.code,{children:`abbr`}),`.`]}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsxs)(t.p,{children:[`Each day is a button named by its full date ("Friday 18 September
2026"). The selected cell has `,(0,z.jsx)(t.code,{children:`aria-selected`}),`, and with `,(0,z.jsx)(t.code,{children:`range`}),` every
cell from one end to the other does. Today has `,(0,z.jsx)(t.code,{children:`aria-current="date"`}),`.`]}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsx)(t.p,{children:`One tab stop: the selected day, or today when nothing is selected.`}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsx)(t.p,{children:`Arrow keys move a day or a week, Home and End go to the week's ends,
Page Up and Page Down move a month, and Shift+Page Up and Shift+Page
Down a year. Enter or Space selects. Moving past the month shows the
next one.`}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsx)(t.p,{children:`Right to left, the arrows follow the screen (ArrowLeft is the next day)
and the previous and next chevrons are mirrored.`}),`
`,(0,z.jsx)(s,{of:j}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsx)(t.p,{children:`The month and year are a polite live region, so paging is announced,
by a month or by a year.`}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsx)(t.p,{children:`The header's buttons are ordinary buttons in the tab order, before the
grid: "Previous month", then after the month "Next month".`}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsxs)(t.p,{children:[`Both are disabled at the limits: previous in the month of `,(0,z.jsx)(t.code,{children:`min`}),`, next
in the month of `,(0,z.jsx)(t.code,{children:`max`}),`.`]}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsxs)(t.p,{children:[`Unavailable days stay focusable with `,(0,z.jsx)(t.code,{children:`aria-disabled`}),`, so they are found
and announced as unavailable rather than skipped. Enter on one does
nothing.`]}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsx)(t.p,{children:`Days of the months either side are not buttons and are hidden from
assistive tech.`}),`
`]}),`
`,(0,z.jsxs)(t.li,{children:[`
`,(0,z.jsxs)(t.p,{children:[`Today's figure should measure at least 4.5:1 on its fill, in both modes,
on its own and inside a range. The `,(0,z.jsx)(t.code,{children:`Today`}),` story measures it.`]}),`
`]}),`
`]})]})]})]})}function R(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,z.jsx)(t,{...e,children:(0,z.jsx)(L,{...e})}):L(e)}var z;function B(){return(B=e((()=>{z=t(),r(),a(),d(),p(),h(),f(),m(),b(),S(),M()})))()}B();export{R as default};