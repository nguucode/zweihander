import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-C4DQin6J.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-CmyhQ0nv.js";import{n as b,t as x}from"./Status-k1ODXqUs.js";import{r as S,t as C}from"./DatePicker-PvSuWU6g.js";import{a as w,c as T,i as E,l as D,n as O,o as k,r as A,s as j,t as M,u as N}from"./DatePicker.stories-DZPu5B0u.js";function P(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(i,{of:O}),`
`,(0,I.jsx)(t.h1,{id:`date-picker`,children:`Date Picker`}),`
`,(0,I.jsxs)(u,{children:[(0,I.jsxs)(_,{value:`overview`,children:[(0,I.jsx)(t.p,{children:`A date field: type the date, or pick it from a calendar.`}),(0,I.jsx)(x,{of:O}),(0,I.jsx)(s,{of:A}),(0,I.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,I.jsxs)(t.p,{children:[`Two sizes, `,(0,I.jsx)(t.code,{children:`sm`}),` and `,(0,I.jsx)(t.code,{children:`md`}),`, and the field's validation states, as on
`,(0,I.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),`. The typed
order follows `,(0,I.jsx)(t.code,{children:`locale`}),`: day first in `,(0,I.jsx)(t.code,{children:`en-GB`}),` and `,(0,I.jsx)(t.code,{children:`vi-VN`}),`, month first in
`,(0,I.jsx)(t.code,{children:`en-US`}),`. The form always gets `,(0,I.jsx)(t.code,{children:`yyyy-mm-dd`}),`.`]}),(0,I.jsxs)(t.table,{children:[(0,I.jsx)(t.thead,{children:(0,I.jsxs)(t.tr,{children:[(0,I.jsx)(t.th,{children:`Locale`}),(0,I.jsx)(t.th,{children:`Typed as`})]})}),(0,I.jsxs)(t.tbody,{children:[(0,I.jsxs)(t.tr,{children:[(0,I.jsxs)(t.td,{children:[(0,I.jsx)(t.code,{children:`en-GB`}),`, `,(0,I.jsx)(t.code,{children:`vi-VN`})]}),(0,I.jsx)(t.td,{children:(0,I.jsx)(t.code,{children:`dd/mm/yyyy`})})]}),(0,I.jsxs)(t.tr,{children:[(0,I.jsx)(t.td,{children:(0,I.jsx)(t.code,{children:`en-US`})}),(0,I.jsx)(t.td,{children:(0,I.jsx)(t.code,{children:`mm/dd/yyyy`})})]})]})]}),(0,I.jsx)(s,{of:j}),(0,I.jsx)(s,{of:T}),(0,I.jsxs)(t.p,{children:[(0,I.jsx)(t.code,{children:`min`}),`, `,(0,I.jsx)(t.code,{children:`max`}),` and `,(0,I.jsx)(t.code,{children:`isDateDisabled`}),` limit what can be picked or typed:`]}),(0,I.jsx)(s,{of:k}),(0,I.jsxs)(t.p,{children:[`For a span of days, see
`,(0,I.jsx)(t.a,{href:`?path=/docs/components-inputs-daterangepicker--docs`,children:`Date Range Picker`}),`.`]}),(0,I.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,I.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,I.jsx)(t.pre,{children:(0,I.jsx)(t.code,{className:`language-js`,children:`import { DatePicker } from 'zweihander/date-picker'
`})}),(0,I.jsx)(t.pre,{children:(0,I.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/date-picker.json
`})}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[`Source: `,(0,I.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/inputs/DatePicker.tsx`,rel:`nofollow`,children:`src/components/inputs/DatePicker.tsx`})]}),`
`,(0,I.jsxs)(t.li,{children:[`Spec: `,(0,I.jsx)(t.a,{href:`https://www.uiguideline.com/components/date-picker`,rel:`nofollow`,children:`uiguideline.com/components/date-picker`})]}),`
`,(0,I.jsxs)(t.li,{children:[`Behaviour: `,(0,I.jsx)(t.a,{href:`https://base-ui.com/react/components/popover`,rel:`nofollow`,children:`Base UI Popover`}),`, and the kit's `,(0,I.jsx)(t.a,{href:`?path=/docs/components-data-display-calendar--docs`,children:`Calendar`})]}),`
`,(0,I.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,I.jsxs)(_,{value:`specs`,children:[(0,I.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,I.jsx)(y,{parts:D,children:(0,I.jsx)(a,{of:M})}),(0,I.jsxs)(t.p,{children:[`The calendar opens in a popover 4px under the field, aligned to its
start: a `,(0,I.jsx)(t.a,{href:`?path=/docs/components-data-display-calendar--docs`,children:`Calendar`}),`
in a panel. Its days, header and paging buttons are specified there.`]}),(0,I.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,I.jsx)(t.p,{children:`The field is the kit's field: each size is a control tier, with the
normal inline padding and the field radius.`}),(0,I.jsx)(g,{caption:`sm`,rows:[{part:`Field`,property:`Height`,token:`--control-sm`},{part:`Field`,property:`Inline padding`,token:`--control-sm-pad`},{part:`Field`,property:`Corner radius`,token:`--control-sm-radius-field`},{part:`Field`,property:`Gap`,token:`--control-sm-gap`},{part:`Calendar button`,property:`Icon size`,token:`--icon-sm`},{part:`Input`,property:`Font size`,token:`--text-body-sm`},{part:`Input`,property:`Line height`,token:`--leading-body-sm`}]}),(0,I.jsx)(g,{caption:`md`,rows:[{part:`Field`,property:`Height`,token:`--control-md`},{part:`Field`,property:`Inline padding`,token:`--control-md-pad`},{part:`Field`,property:`Corner radius`,token:`--control-md-radius-field`},{part:`Field`,property:`Gap`,token:`--control-md-gap`},{part:`Calendar button`,property:`Icon size`,token:`--icon-md`},{part:`Input`,property:`Font size`,token:`--text-body`},{part:`Input`,property:`Line height`,token:`--leading-body`}]}),(0,I.jsx)(g,{caption:`Every size`,rows:[{part:`Label and helper`,property:`Gap to the field`,token:`--space-1-5`},{part:`Label and helper`,property:`Font size`,token:`--text-body`},{part:`Popover`,property:`Padding`,token:`--space-3`},{part:`Popover`,property:`Corner radius`,token:`--radius-panel`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`},{part:`Calendar button`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,I.jsxs)(t.p,{children:[`The field is 20rem wide unless `,(0,I.jsx)(t.code,{children:`isFullWidth`}),`. The popover never grows
wider than the screen less 16px a side.`]}),(0,I.jsx)(t.h2,{id:`color`,children:`Color`}),(0,I.jsx)(g,{caption:`Field`,rows:[{part:`Field`,property:`Background`,token:`--card`},{part:`Field`,property:`Border`,token:`--field-border`},{part:`Field`,property:`Shadow`,token:`--shadow-2xs`},{part:`Label, input`,property:`Colour`,token:`--foreground`},{part:`Placeholder, helper, calendar icon`,property:`Colour`,token:`--muted-foreground`},{part:`Required asterisk`,property:`Colour`,token:`--danger-text`},{part:`Focus ring`,property:`Colour`,token:`--ring`}]}),(0,I.jsx)(g,{caption:`Validation`,rows:[{part:`Border, helper, focus ring, error`,property:`Colour`,token:`--danger-text`},{part:`Border, helper, success`,property:`Colour`,token:`--success-text`}]}),(0,I.jsx)(g,{caption:`Popover`,rows:[{part:`Panel`,property:`Background`,token:`--popover`},{part:`Panel`,property:`Colour`,token:`--popover-foreground`},{part:`Panel`,property:`Border`,token:`--border`},{part:`Panel`,property:`Shadow`,token:`--shadow-md`}]}),(0,I.jsx)(t.p,{children:`The field's edge is a light hairline, about 1.5:1: an approved exception
to WCAG 1.4.11, as on every kit field. The calendar's own colours are on
its page.`}),(0,I.jsx)(t.h2,{id:`states`,children:`States`}),(0,I.jsx)(v,{states:[{label:`Empty`,content:(0,I.jsx)(C,{label:`Start date`,locale:`en-GB`})},{label:`Filled`},{label:`Focus`,pseudo:`focus`},{label:`Error`,content:(0,I.jsx)(C,{label:`Start date`,locale:`en-GB`,validationState:`error`,helperText:`Enter a date as dd/mm/yyyy.`})},{label:`Disabled`,content:(0,I.jsx)(C,{label:`Start date`,locale:`en-GB`,defaultValue:new Date(2026,8,18),disabled:!0})}],children:(0,I.jsx)(C,{label:`Start date`,locale:`en-GB`,defaultValue:new Date(2026,8,18)})}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,I.jsx)(t.code,{children:`--ring`}),` outline, 2px outside the field, drawn while
the input has focus, by pointer too. In the error state the ring is
`,(0,I.jsx)(t.code,{children:`--danger-text`}),`. The calendar button draws its own ring when tabbed to.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Error`}),` turns the edge and the helper `,(0,I.jsx)(t.code,{children:`--danger-text`}),`. It is also
shown on its own while the typed text is not a date, or is outside
`,(0,I.jsx)(t.code,{children:`min`}),` and `,(0,I.jsx)(t.code,{children:`max`}),`: the helper then gives the expected pattern.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Hover`}),` changes nothing on the field; the calendar icon darkens from
`,(0,I.jsx)(t.code,{children:`--muted-foreground`}),` to `,(0,I.jsx)(t.code,{children:`--foreground`}),`.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Disabled`}),` is the enabled look at 50% opacity; the calendar button is
disabled with it.`]}),`
`]}),(0,I.jsx)(t.h2,{id:`api`,children:`API`}),(0,I.jsx)(`div`,{style:{overflowX:`auto`},children:(0,I.jsx)(o,{of:O})}),(0,I.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Typing is first-class.`}),` Many people type a known date faster than
they can page to it. Any separator works (`,(0,I.jsx)(t.code,{children:`3.10.26`}),`, `,(0,I.jsx)(t.code,{children:`3/10/2026`}),`); the
field reformats on blur or Enter.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`An impossible date is kept, not guessed.`}),` `,(0,I.jsx)(t.code,{children:`31/02/2026`}),` stays as
typed, the field turns to its error state and the helper shows the
expected pattern; nothing is reported until it is a real date.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`A click in the input opens the calendar, and keeps focus there.`}),`
Typing carries on with the month in view; the calendar button and
Alt+Down move focus into the calendar instead.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`The form gets ISO.`}),` Whatever the display order, `,(0,I.jsx)(t.code,{children:`name`}),` submits
`,(0,I.jsx)(t.code,{children:`yyyy-mm-dd`}),`, so the server never has to guess the locale.`]}),`
`]}),(0,I.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsxs)(t.strong,{children:[(0,I.jsx)(t.code,{children:`onValueChange`}),`, not `,(0,I.jsx)(t.code,{children:`onChange`})]}),`, with a `,(0,I.jsx)(t.code,{children:`Date`}),` or `,(0,I.jsx)(t.code,{children:`null`}),`, as the
kit's other value fields.`]}),`
`]})]}),(0,I.jsxs)(_,{value:`guidelines`,children:[(0,I.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,I.jsxs)(t.p,{children:[`Use a Date Picker for one date: a start date, a due date, a booking. Let
people type it when they know it, and pick it when they want to see the
week around it. Set `,(0,I.jsx)(t.code,{children:`min`}),`, `,(0,I.jsx)(t.code,{children:`max`}),` or `,(0,I.jsx)(t.code,{children:`isDateDisabled`}),` so a date that cannot
be used cannot be chosen, rather than refusing it after submit.`]}),(0,I.jsx)(l,{do:(0,I.jsx)(a,{of:E}),doCaption:`The empty field shows the pattern to type, in the locale's order.`,dont:(0,I.jsx)(a,{of:w}),dontCaption:`An example date as the placeholder reads as a value already filled in.`}),(0,I.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`For a span of days.`}),` Use a
`,(0,I.jsx)(t.a,{href:`?path=/docs/components-inputs-daterangepicker--docs`,children:`Date Range Picker`}),`:
one field, both ends, never back to front.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`To show a month on the page.`}),` Use a
`,(0,I.jsx)(t.a,{href:`?path=/docs/components-data-display-calendar--docs`,children:`Calendar`}),` inline.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`For a time of day.`}),` The picker holds a date only.`]}),`
`]}),(0,I.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[`The input is a labelled text box with `,(0,I.jsx)(t.code,{children:`inputmode="numeric"`}),` for a
number keypad; while the text is not a valid date it has
`,(0,I.jsx)(t.code,{children:`aria-invalid`}),` and the helper explains the format.`]}),`
`,(0,I.jsx)(t.li,{children:`The calendar button is named "Choose date", with the current date when
there is one. Alt+Down in the input opens it too.`}),`
`,(0,I.jsx)(t.li,{children:`The calendar opens as a dialog named "Choose date" with focus on the
selected day; Escape closes it without a change.`}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`After a pick the field goes back to rest.`}),` Picked with the pointer,
focus leaves the field (no caret, no ring), as in Combobox. Picked with
the keyboard, focus returns to where it came from (the button, or the
input), so keyboard and screen reader users are not dropped to the page.`]}),`
`,(0,I.jsx)(t.li,{children:`The field and calendar's own labels ("Choose date", "Previous month")
are in English, like the rest of the kit's built-in labels.`}),`
`,(0,I.jsxs)(t.li,{children:[`On touch screens (`,(0,I.jsx)(t.code,{children:`pointer: coarse`}),`) the calendar button gets a 44×44px
hit area without the field growing.`]}),`
`]})]})]})]})}function F(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,I.jsx)(t,{...e,children:(0,I.jsx)(P,{...e})}):P(e)}var I;function L(){return(L=e((()=>{I=t(),r(),c(),d(),p(),h(),f(),m(),b(),S(),N()})))()}L();export{F as default};