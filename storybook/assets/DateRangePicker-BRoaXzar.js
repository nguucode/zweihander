import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-C4DQin6J.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-CmyhQ0nv.js";import{n as b,t as x}from"./Status-k1ODXqUs.js";import{n as S,r as C}from"./DatePicker-PvSuWU6g.js";import{a as w,c as T,i as E,l as D,n as O,o as k,r as A,s as j,t as M,u as N}from"./DateRangePicker.stories-rz_nRiPZ.js";function P(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(i,{of:O}),`
`,(0,I.jsx)(t.h1,{id:`date-range-picker`,children:`Date Range Picker`}),`
`,(0,I.jsxs)(u,{children:[(0,I.jsxs)(_,{value:`overview`,children:[(0,I.jsxs)(t.p,{children:[`A field for a span of days: a report period, a booking. Typed like
`,(0,I.jsx)(t.a,{href:`?path=/docs/components-inputs-datepicker--docs`,children:`Date Picker`}),`, or picked
from two months side by side.`]}),(0,I.jsx)(x,{of:O}),(0,I.jsx)(s,{of:A}),(0,I.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,I.jsxs)(t.p,{children:[`Two sizes, `,(0,I.jsx)(t.code,{children:`sm`}),` and `,(0,I.jsx)(t.code,{children:`md`}),`, and the field's validation states, as on Date
Picker. With `,(0,I.jsx)(t.code,{children:`presets`}),`, whole periods sit beside the calendars.`]}),(0,I.jsxs)(t.table,{children:[(0,I.jsx)(t.thead,{children:(0,I.jsxs)(t.tr,{children:[(0,I.jsx)(t.th,{children:`Option`}),(0,I.jsx)(t.th,{children:`Use for`})]})}),(0,I.jsxs)(t.tbody,{children:[(0,I.jsxs)(t.tr,{children:[(0,I.jsx)(t.td,{children:`No presets`}),(0,I.jsx)(t.td,{children:`Ranges that rarely line up with a calendar period: a booking, a leave request.`})]}),(0,I.jsxs)(t.tr,{children:[(0,I.jsx)(t.td,{children:(0,I.jsx)(t.code,{children:`presets`})}),(0,I.jsx)(t.td,{children:`Reports and filters, where people mostly want "Last month" or "This year".`})]})]})]}),(0,I.jsx)(s,{of:j}),(0,I.jsx)(s,{of:T}),(0,I.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,I.jsx)(t.p,{children:`Shipped in the same file as Date Picker, which it shares its field and
popover with. From npm, or copied into your project through the registry:`}),(0,I.jsx)(t.pre,{children:(0,I.jsx)(t.code,{className:`language-js`,children:`import { DateRangePicker } from 'zweihander/date-picker'
`})}),(0,I.jsx)(t.pre,{children:(0,I.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/date-picker.json
`})}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[`Source: `,(0,I.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/inputs/DatePicker.tsx`,rel:`nofollow`,children:`src/components/inputs/DatePicker.tsx`})]}),`
`,(0,I.jsxs)(t.li,{children:[`Spec: `,(0,I.jsx)(t.a,{href:`https://www.uiguideline.com/components/date-picker`,rel:`nofollow`,children:`uiguideline.com/components/date-picker`})]}),`
`,(0,I.jsxs)(t.li,{children:[`Behaviour: `,(0,I.jsx)(t.a,{href:`https://base-ui.com/react/components/popover`,rel:`nofollow`,children:`Base UI Popover`}),`, and the kit's `,(0,I.jsx)(t.a,{href:`?path=/docs/components-data-display-calendar--docs`,children:`Calendar`})]}),`
`,(0,I.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,I.jsxs)(_,{value:`specs`,children:[(0,I.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,I.jsx)(y,{parts:D,children:(0,I.jsx)(a,{of:M})}),(0,I.jsx)(t.p,{children:`The popover holds:`}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Presets`}),`, with `,(0,I.jsx)(t.code,{children:`presets`}),`: whole periods, Today to Last year, in a
column beside the calendars, or a row above them on a narrow screen.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Calendars`}),`: two months that page on their own, opening on the
range's first and last months (this month and the next when empty). The
left one always stays before the right: paging one past the other
pushes the other along. One month on a screen narrower than 40rem.`]}),`
`]}),(0,I.jsx)(s,{of:k}),(0,I.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,I.jsx)(t.p,{children:`The field is Date Picker's: each size is a control tier, with the normal
inline padding and the field radius.`}),(0,I.jsx)(g,{caption:`sm`,rows:[{part:`Field`,property:`Height`,token:`--control-sm`},{part:`Field`,property:`Inline padding`,token:`--control-sm-pad`},{part:`Field`,property:`Corner radius`,token:`--control-sm-radius-field`},{part:`Calendar button`,property:`Icon size`,token:`--icon-sm`},{part:`Input`,property:`Font size`,token:`--text-body-sm`}]}),(0,I.jsx)(g,{caption:`md`,rows:[{part:`Field`,property:`Height`,token:`--control-md`},{part:`Field`,property:`Inline padding`,token:`--control-md-pad`},{part:`Field`,property:`Corner radius`,token:`--control-md-radius-field`},{part:`Calendar button`,property:`Icon size`,token:`--icon-md`},{part:`Input`,property:`Font size`,token:`--text-body`}]}),(0,I.jsx)(g,{caption:`Popover, every size`,rows:[{part:`Popover`,property:`Corner radius`,token:`--radius-panel`},{part:`Each month`,property:`Padding`,token:`--space-3`},{part:`Presets`,property:`Padding`,token:`--space-2`},{part:`Preset`,property:`Minimum height`,token:`--space-8`},{part:`Preset`,property:`Corner radius`,token:`--radius-control`},{part:`Preset`,property:`Font size`,token:`--text-body-sm`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`}]}),(0,I.jsxs)(t.p,{children:[`Presets are 2px apart and at least 7rem wide in the column. The field is
20rem wide unless `,(0,I.jsx)(t.code,{children:`isFullWidth`}),`; a range is longer than one date, so give
it room or `,(0,I.jsx)(t.code,{children:`isFullWidth`}),`.`]}),(0,I.jsx)(t.h2,{id:`color`,children:`Color`}),(0,I.jsx)(g,{caption:`Field`,rows:[{part:`Field`,property:`Background`,token:`--card`},{part:`Field`,property:`Border`,token:`--field-border`},{part:`Label, input`,property:`Colour`,token:`--foreground`},{part:`Placeholder, helper, calendar icon`,property:`Colour`,token:`--muted-foreground`},{part:`Border, helper, error`,property:`Colour`,token:`--danger-text`},{part:`Focus ring`,property:`Colour`,token:`--ring`}]}),(0,I.jsx)(g,{caption:`Popover`,rows:[{part:`Panel`,property:`Background`,token:`--popover`},{part:`Panel`,property:`Border`,token:`--border`},{part:`Panel`,property:`Shadow`,token:`--shadow-md`},{part:`Dividers between presets and months`,property:`Colour`,token:`--border`},{part:`Preset`,property:`Colour`,token:`--foreground`},{part:`Preset, hover and pressed`,property:`Background`,token:`--accent`},{part:`Preset, hover and pressed`,property:`Colour`,token:`--accent-foreground`}]}),(0,I.jsxs)(t.p,{children:[`The days and the band between the range's ends are the
`,(0,I.jsx)(t.a,{href:`?path=/docs/components-data-display-calendar--docs`,children:`Calendar`}),`'s colours.`]}),(0,I.jsx)(t.h2,{id:`states`,children:`States`}),(0,I.jsx)(v,{states:[{label:`Empty`,content:(0,I.jsx)(S,{label:`Period`,locale:`en-GB`})},{label:`Filled`},{label:`Focus`,pseudo:`focus`},{label:`Error`,content:(0,I.jsx)(S,{label:`Period`,locale:`en-GB`,validationState:`error`,helperText:`Choose both ends.`})},{label:`Disabled`,content:(0,I.jsx)(S,{label:`Period`,locale:`en-GB`,defaultValue:{start:new Date(2026,8,7),end:new Date(2026,8,13)},disabled:!0})}],children:(0,I.jsx)(S,{label:`Period`,locale:`en-GB`,defaultValue:{start:new Date(2026,8,7),end:new Date(2026,8,13)}})}),(0,I.jsxs)(t.p,{children:[`The field's states are Date Picker's: a `,(0,I.jsx)(t.code,{children:`--ring`}),` outline while the input
has focus, `,(0,I.jsx)(t.code,{children:`--danger-text`}),` in error (also while the typed text is not a
range), 50% opacity when disabled. A preset matching the picked range
stays in its pressed look.`]}),(0,I.jsx)(t.h2,{id:`api`,children:`API`}),(0,I.jsx)(`div`,{style:{overflowX:`auto`},children:(0,I.jsx)(o,{of:O})}),(0,I.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Either way round.`}),` The first click starts the range, the second
ends it; a second click before the first swaps them. So does typing
the later date first.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Presets are whole periods.`}),` "This month" is the 1st to the last
day, not the 1st to today, so a preset reads the same all month.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`No Cancel or Apply.`}),` A range applies, and the popover closes, once
both ends are in; Escape before the second click leaves the value as
it was.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`No hover preview.`}),` The band shows once both ends are in; add a
preview if testing shows people lose track of the first click.`]}),`
`]})]}),(0,I.jsxs)(_,{value:`guidelines`,children:[(0,I.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,I.jsxs)(t.p,{children:[`Use a Date Range Picker when the two dates are one thing: a period to
report on, a stay, a sprint. Both ends are set together, start never after
end, and the value is complete or `,(0,I.jsx)(t.code,{children:`null`}),`.`]}),(0,I.jsx)(l,{do:(0,I.jsx)(a,{of:E}),doCaption:`One field for one period: it cannot be half filled or set back to front.`,dont:(0,I.jsx)(a,{of:w}),dontCaption:`Two Date Pickers for one period: here the end is before the start, and nothing stops it.`}),(0,I.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`For one date.`}),` Use a
`,(0,I.jsx)(t.a,{href:`?path=/docs/components-inputs-datepicker--docs`,children:`Date Picker`}),`.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`When one end is optional`}),`, such as a contract with no end date. The
range needs both ends; use two Date Pickers and check their order
yourself.`]}),`
`]}),(0,I.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsx)(t.li,{children:`As Date Picker: a labelled text box, an error state with the expected
pattern, and the calendars in a dialog named "Choose dates".`}),`
`,(0,I.jsx)(t.li,{children:`The calendar button is named "Choose dates", with the current range
when there is one.`}),`
`,(0,I.jsxs)(t.li,{children:[`Every day in the range has `,(0,I.jsx)(t.code,{children:`aria-selected`}),`, so the span is announced,
not only its ends.`]}),`
`,(0,I.jsx)(t.li,{children:`A day of the month either side is decoration: hidden from assistive
tech and not pickable, so each day is one button.`}),`
`,(0,I.jsxs)(t.li,{children:[`Presets are toggle buttons in a group named "Presets"; the one that
matches the picked range is `,(0,I.jsx)(t.code,{children:`aria-pressed`}),`.`]}),`
`,(0,I.jsx)(t.li,{children:`After both ends are in the field goes back to rest, as Date Picker's
does after a pick.`}),`
`]})]})]})]})}function F(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,I.jsx)(t,{...e,children:(0,I.jsx)(P,{...e})}):P(e)}var I;function L(){return(L=e((()=>{I=t(),r(),c(),d(),p(),h(),f(),m(),b(),C(),N()})))()}L();export{F as default};