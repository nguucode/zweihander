import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,i as a,n as o,s}from"./blocks-BCmbfwq7.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./DateRangePicker.stories-CW97lOs7.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:m}),`
`,(0,_.jsx)(t.h1,{id:`date-range-picker`,children:`Date Range Picker`}),`
`,(0,_.jsxs)(t.p,{children:[`A field for a span of days: a report period, a booking. Typed like
`,(0,_.jsx)(t.a,{href:`?path=/docs/components-inputs-datepicker--docs`,children:`Date Picker`}),`, or picked
from two months side by side. Shipped in the same file as Date Picker,
which it shares its field and popover with.`]}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Part`}),(0,_.jsx)(t.th,{children:`What it is`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Input`})}),(0,_.jsxs)(t.td,{children:[`Two dates in the locale's order, `,(0,_.jsx)(t.code,{children:`dd/mm/yyyy – dd/mm/yyyy`}),`. A click opens the calendars.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Presets`})}),(0,_.jsxs)(t.td,{children:[`With `,(0,_.jsx)(t.code,{children:`presets`}),`: whole periods beside the calendars, Today to Last year. Above them on a narrow screen.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.strong,{children:`Calendars`})}),(0,_.jsx)(t.td,{children:`Two months that page on their own, opening on the range's first and last months (this month and the next when empty). The left one always stays before the right: paging one past the other pushes the other along. One month on a screen narrower than 40rem.`})]})]})]}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Prop`}),(0,_.jsx)(t.th,{children:`Values`}),(0,_.jsx)(t.th,{children:`Default`}),(0,_.jsx)(t.th,{})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`value`}),`, `,(0,_.jsx)(t.code,{children:`defaultValue`}),`, `,(0,_.jsx)(t.code,{children:`onValueChange`})]}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`{ start, end } | null`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`null`})}),(0,_.jsxs)(t.td,{children:[`Both ends set, or `,(0,_.jsx)(t.code,{children:`null`}),`.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`presets`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`boolean | { label, start, end }[]`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`false`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`true`}),` for the built-in list. `,(0,_.jsx)(t.code,{children:`rangePresets(weekStartsOn)`}),` returns it, to extend.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`name`})}),(0,_.jsx)(t.td,{children:`string`}),(0,_.jsx)(t.td,{children:`–`}),(0,_.jsxs)(t.td,{children:[`Submitted as `,(0,_.jsx)(t.code,{children:`yyyy-mm-dd/yyyy-mm-dd`}),`, an ISO 8601 interval.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:`Others`}),(0,_.jsx)(t.td,{}),(0,_.jsx)(t.td,{}),(0,_.jsxs)(t.td,{children:[`As on Date Picker: `,(0,_.jsx)(t.code,{children:`label`}),`, `,(0,_.jsx)(t.code,{children:`helperText`}),`, `,(0,_.jsx)(t.code,{children:`size`}),`, `,(0,_.jsx)(t.code,{children:`min`}),`, `,(0,_.jsx)(t.code,{children:`max`}),`, `,(0,_.jsx)(t.code,{children:`isDateDisabled`}),`, `,(0,_.jsx)(t.code,{children:`locale`}),`, `,(0,_.jsx)(t.code,{children:`weekStartsOn`}),`…`]})]})]})]}),`
`,(0,_.jsx)(a,{of:u}),`
`,(0,_.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Either way round.`}),` The first click starts the range, the second
ends it; a second click before the first swaps them. So does typing
the later date first.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Presets are whole periods.`}),` "This month" is the 1st to the last
day, not the 1st to today, so a preset reads the same all month.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`No Cancel or Apply.`}),` A range applies, and the popover closes, once
both ends are in; Escape before the second click leaves the value as
it was.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`No hover preview.`}),` The band shows once both ends are in; add a
preview if testing shows people lose track of the first click.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsx)(o,{of:l}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`As Date Picker: a labelled text box, an error state with the expected
pattern, and the calendars in a dialog named "Choose dates".`}),`
`,(0,_.jsxs)(t.li,{children:[`Every day in the range has `,(0,_.jsx)(t.code,{children:`aria-selected`}),`, so the span is announced,
not only its ends.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Presets are toggle buttons in a group named "Presets"; the one that
matches the picked range is `,(0,_.jsx)(t.code,{children:`aria-pressed`}),`.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),i(),p()})))()}v();export{g as default};