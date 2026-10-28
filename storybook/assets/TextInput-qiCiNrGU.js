import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{r as S,t as C}from"./TextInput-vfco79YG.js";import{a as w,c as T,d as E,f as D,i as O,l as k,m as A,n as j,o as M,p as N,r as P,s as F,t as I,u as L}from"./TextInput.stories-CUxAE00Q.js";function R(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(i,{of:L}),`
`,(0,B.jsx)(t.h1,{id:`text-input`,children:`Text Input`}),`
`,(0,B.jsxs)(u,{children:[(0,B.jsxs)(_,{value:`overview`,children:[(0,B.jsx)(t.p,{children:`A single line of text: a name, an email, a URL.`}),(0,B.jsx)(x,{of:L}),(0,B.jsx)(s,{of:P}),(0,B.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,B.jsx)(t.p,{children:`There is one appearance, the white outlined box. What changes is the
size, what sits beside the value, and the validation state.`}),(0,B.jsx)(s,{of:k}),(0,B.jsxs)(t.table,{children:[(0,B.jsx)(t.thead,{children:(0,B.jsxs)(t.tr,{children:[(0,B.jsx)(t.th,{children:`Size`}),(0,B.jsx)(t.th,{children:`Use for`})]})}),(0,B.jsxs)(t.tbody,{children:[(0,B.jsxs)(t.tr,{children:[(0,B.jsx)(t.td,{children:(0,B.jsx)(t.code,{children:`md`})}),(0,B.jsx)(t.td,{children:`Forms and dialogs: the default.`})]}),(0,B.jsxs)(t.tr,{children:[(0,B.jsx)(t.td,{children:(0,B.jsx)(t.code,{children:`sm`})}),(0,B.jsx)(t.td,{children:`Dense places: toolbars, table filters, inline edits.`})]})]})]}),(0,B.jsx)(s,{of:T}),(0,B.jsxs)(t.table,{children:[(0,B.jsx)(t.thead,{children:(0,B.jsxs)(t.tr,{children:[(0,B.jsx)(t.th,{children:`Affix`}),(0,B.jsx)(t.th,{children:`Use for`})]})}),(0,B.jsxs)(t.tbody,{children:[(0,B.jsxs)(t.tr,{children:[(0,B.jsx)(t.td,{children:(0,B.jsx)(t.code,{children:`prefix`})}),(0,B.jsx)(t.td,{children:`A fixed start the value continues: "https://", a currency sign, an icon that says what the field holds.`})]}),(0,B.jsxs)(t.tr,{children:[(0,B.jsx)(t.td,{children:(0,B.jsx)(t.code,{children:`suffix`})}),(0,B.jsx)(t.td,{children:`A unit the value is measured in: "kg", "%", "days".`})]})]})]}),(0,B.jsxs)(t.p,{children:[(0,B.jsx)(t.strong,{children:`Add-ons`}),` are filled segments joined to the edge of the box, divided
from the value by a hairline. Use them when the fixed part is long enough,
or important enough, to need its own place: a protocol and a domain, a
currency code, or an action attached to the field.`]}),(0,B.jsx)(s,{of:I}),(0,B.jsxs)(t.table,{children:[(0,B.jsx)(t.thead,{children:(0,B.jsxs)(t.tr,{children:[(0,B.jsx)(t.th,{children:`Add-on`}),(0,B.jsx)(t.th,{children:`Use for`})]})}),(0,B.jsxs)(t.tbody,{children:[(0,B.jsxs)(t.tr,{children:[(0,B.jsx)(t.td,{children:(0,B.jsx)(t.code,{children:`startAddon`})}),(0,B.jsx)(t.td,{children:`A fixed start that is part of the value people see: "https://", "USD".`})]}),(0,B.jsxs)(t.tr,{children:[(0,B.jsx)(t.td,{children:(0,B.jsx)(t.code,{children:`endAddon`})}),(0,B.jsxs)(t.td,{children:[`A fixed ending (".com"), or an attached `,(0,B.jsx)(t.code,{children:`TextInputButton`}),` that acts on the value: "Apply", "Check".`]})]})]})]}),(0,B.jsxs)(t.p,{children:[(0,B.jsx)(t.strong,{children:`Buttons in the field`}),` act on the value without leaving it: open a link,
reveal, clear. `,(0,B.jsx)(t.code,{children:`TextInputButton`}),` is an icon button sized to the field; put
it in `,(0,B.jsx)(t.code,{children:`suffix`}),` (or `,(0,B.jsx)(t.code,{children:`prefix`}),`), or in an add-on, where it fills the segment.`]}),(0,B.jsx)(s,{of:D}),(0,B.jsx)(s,{of:E}),(0,B.jsxs)(t.table,{children:[(0,B.jsx)(t.thead,{children:(0,B.jsxs)(t.tr,{children:[(0,B.jsx)(t.th,{children:`Validation state`}),(0,B.jsx)(t.th,{children:`Use for`})]})}),(0,B.jsxs)(t.tbody,{children:[(0,B.jsxs)(t.tr,{children:[(0,B.jsx)(t.td,{children:(0,B.jsx)(t.code,{children:`default`})}),(0,B.jsx)(t.td,{children:`Before anything is checked.`})]}),(0,B.jsxs)(t.tr,{children:[(0,B.jsx)(t.td,{children:(0,B.jsx)(t.code,{children:`error`})}),(0,B.jsxs)(t.td,{children:[`The value cannot be accepted. `,(0,B.jsx)(t.code,{children:`helperText`}),` says what to change.`]})]}),(0,B.jsxs)(t.tr,{children:[(0,B.jsx)(t.td,{children:(0,B.jsx)(t.code,{children:`success`})}),(0,B.jsx)(t.td,{children:`A value checked against the server and accepted, such as a free username. Not for every field that passes.`})]})]})]}),(0,B.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,B.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,B.jsx)(t.pre,{children:(0,B.jsx)(t.code,{className:`language-js`,children:`import { TextInput, TextInputButton } from 'zweihander/text-input'
`})}),(0,B.jsx)(t.pre,{children:(0,B.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/text-input.json
`})}),(0,B.jsxs)(t.ul,{children:[`
`,(0,B.jsxs)(t.li,{children:[`Source: `,(0,B.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/inputs/TextInput.tsx`,rel:`nofollow`,children:`src/components/inputs/TextInput.tsx`})]}),`
`,(0,B.jsxs)(t.li,{children:[`Spec: `,(0,B.jsx)(t.a,{href:`https://www.uiguideline.com/components/text-input`,rel:`nofollow`,children:`uiguideline.com/components/text-input`})]}),`
`,(0,B.jsxs)(t.li,{children:[`Behaviour: `,(0,B.jsx)(t.a,{href:`https://base-ui.com/react/components/field`,rel:`nofollow`,children:`Base UI Field`})]}),`
`,(0,B.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,B.jsxs)(_,{value:`specs`,children:[(0,B.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,B.jsx)(y,{parts:N,children:(0,B.jsx)(a,{of:j})}),(0,B.jsxs)(t.p,{children:[`The placeholder has no element of its own: it is the input's, shown in
`,(0,B.jsx)(t.code,{children:`--muted-foreground`}),` while the input is empty. With `,(0,B.jsx)(t.code,{children:`required`}),`, an
asterisk follows the label.`]}),(0,B.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,B.jsx)(t.p,{children:`Each size is a control tier (Foundations / Sizing). Fields take the normal
inline padding, not Button's spacious one, so the value lines up with the
label above it, and the field radius, which never becomes a pill.`}),(0,B.jsx)(g,{caption:`sm`,rows:[{part:`Container`,property:`Height`,token:`--control-sm`},{part:`Container`,property:`Inline padding`,token:`--control-sm-pad`},{part:`Container`,property:`Corner radius`,token:`--control-sm-radius-field`},{part:`Container`,property:`Gap`,token:`--control-sm-gap`},{part:`Prefix, suffix and button icon`,property:`Size`,token:`--icon-sm`},{part:`Add-on`,property:`Inline padding`,token:`--control-sm-pad`},{part:`Input`,property:`Font size`,token:`--text-body-sm`},{part:`Input`,property:`Line height`,token:`--leading-body-sm`}]}),(0,B.jsx)(g,{caption:`md`,rows:[{part:`Container`,property:`Height`,token:`--control-md`},{part:`Container`,property:`Inline padding`,token:`--control-md-pad`},{part:`Container`,property:`Corner radius`,token:`--control-md-radius-field`},{part:`Container`,property:`Gap`,token:`--control-md-gap`},{part:`Prefix, suffix and button icon`,property:`Size`,token:`--icon-md`},{part:`Add-on`,property:`Inline padding`,token:`--control-md-pad`},{part:`Input`,property:`Font size`,token:`--text-body`},{part:`Input`,property:`Line height`,token:`--leading-body`}]}),(0,B.jsx)(g,{caption:`Every size`,rows:[{part:`Label and helper text`,property:`Font size`,token:`--text-body`},{part:`Label and helper text`,property:`Line height`,token:`--leading-body`},{part:`Label, container, helper`,property:`Gap between`,token:`--control-sm-gap`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`}]}),(0,B.jsxs)(t.p,{children:[`The label and helper stay at body size in `,(0,B.jsx)(t.code,{children:`sm`}),` too: only the box gets
smaller. The field is 20rem wide, capped at its container; with
`,(0,B.jsx)(t.code,{children:`isFullWidth`}),` it fills the container. The edge is 1px. An add-on runs
the full height of the box, and its 1px divider takes the edge's colour,
so a field in the error state is red all round, divider included.`]}),(0,B.jsx)(t.h2,{id:`color`,children:`Color`}),(0,B.jsx)(t.p,{children:`The field has no colour variants. Its validation state changes the edge
and the helper text together. Switch the theme in the toolbar: the values
follow.`}),(0,B.jsx)(g,{caption:`default`,rows:[{part:`Container`,property:`Background`,token:`--card`},{part:`Container`,property:`Border`,token:`--field-border`},{part:`Container`,property:`Shadow`,token:`--shadow-2xs`},{part:`Label and input`,property:`Colour`,token:`--foreground`},{part:`Placeholder, prefix, suffix`,property:`Colour`,token:`--muted-foreground`},{part:`Add-on`,property:`Background`,token:`--surface-filled`},{part:`Add-on text`,property:`Colour`,token:`--muted-foreground`},{part:`Add-on button`,property:`Colour`,token:`--foreground`},{part:`Add-on button, hover`,property:`Background`,token:`--accent`},{part:`Helper text`,property:`Colour`,token:`--muted-foreground`},{part:`Required asterisk`,property:`Colour`,token:`--danger-text`},{part:`Focus ring`,property:`Colour`,token:`--ring`}]}),(0,B.jsx)(g,{caption:`error`,rows:[{part:`Container`,property:`Border`,token:`--danger-text`},{part:`Helper text`,property:`Colour`,token:`--danger-text`},{part:`Focus ring`,property:`Colour`,token:`--danger-text`}]}),(0,B.jsx)(g,{caption:`success`,rows:[{part:`Container`,property:`Border`,token:`--success-text`},{part:`Helper text`,property:`Colour`,token:`--success-text`}]}),(0,B.jsx)(g,{caption:`Read-only`,rows:[{part:`Container`,property:`Background`,token:`--surface-filled`}]}),(0,B.jsx)(t.h2,{id:`states`,children:`States`}),(0,B.jsx)(v,{states:[{label:`Enabled`},{label:`Focus`,pseudo:`focus`},{label:`Filled`,content:(0,B.jsx)(C,{label:`Name`,defaultValue:`Okami`})},{label:`Error`,content:(0,B.jsx)(C,{label:`Name`,validationState:`error`,helperText:`Enter a name.`,required:!0})},{label:`Read-only`,content:(0,B.jsx)(C,{label:`Name`,defaultValue:`Okami`,readOnly:!0})},{label:`Disabled`,content:(0,B.jsx)(C,{label:`Name`,defaultValue:`Okami`,disabled:!0})}],children:(0,B.jsx)(C,{label:`Name`,placeholder:`Your name`})}),(0,B.jsxs)(t.ul,{children:[`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.strong,{children:`Hover`}),` changes nothing: the field is already plainly a field, and the
cursor turns to a text cursor.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,B.jsx)(t.code,{children:`--ring`}),` outline, 2px outside the box, drawn on click
as well as from the keyboard, since that is where typing will go. In the
error state the ring is `,(0,B.jsx)(t.code,{children:`--danger-text`}),`.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.strong,{children:`Read-only`}),` fills the box with `,(0,B.jsx)(t.code,{children:`--surface-filled`}),`: it can be focused
and copied, not changed.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.strong,{children:`Disabled`}),` is the enabled look at 50% opacity.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.strong,{children:`A button in an add-on`}),` fills the segment: hover gives it `,(0,B.jsx)(t.code,{children:`--accent`}),`,
and its focus ring sits inside the segment, so the box's edge does not
cut it. An icon button in `,(0,B.jsx)(t.code,{children:`prefix`}),` or `,(0,B.jsx)(t.code,{children:`suffix`}),` turns `,(0,B.jsx)(t.code,{children:`--foreground`}),` on
hover. In a read-only field the box takes the add-on's fill, so only the
divider sets the add-on apart.`]}),`
`]}),(0,B.jsx)(t.h2,{id:`api`,children:`API`}),(0,B.jsx)(`div`,{style:{overflowX:`auto`},children:(0,B.jsx)(o,{of:L})}),(0,B.jsxs)(t.p,{children:[(0,B.jsx)(t.code,{children:`TextInputButton`}),` takes every `,(0,B.jsx)(t.code,{children:`<button>`}),` attribute; it is `,(0,B.jsx)(t.code,{children:`type="button"`}),`
by default and follows the field's `,(0,B.jsx)(t.code,{children:`disabled`}),`.`]}),(0,B.jsxs)(t.p,{children:[`Every other `,(0,B.jsx)(t.code,{children:`<input>`}),` attribute passes through to the input, including
`,(0,B.jsx)(t.code,{children:`ref`}),`, `,(0,B.jsx)(t.code,{children:`type`}),`, `,(0,B.jsx)(t.code,{children:`name`}),`, `,(0,B.jsx)(t.code,{children:`pattern`}),`, `,(0,B.jsx)(t.code,{children:`maxLength`}),`, `,(0,B.jsx)(t.code,{children:`inputMode`}),` and
`,(0,B.jsx)(t.code,{children:`autoComplete`}),`.`]}),(0,B.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,B.jsxs)(t.ul,{children:[`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsxs)(t.strong,{children:[`No `,(0,B.jsx)(t.code,{children:`filled`}),` appearance.`]}),` The spec's filled field (a tinted box with a bottom rule) was dropped to match the Claude apps, where every field is the white outlined box.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.strong,{children:`Two sizes, not three.`}),` `,(0,B.jsx)(t.code,{children:`sm`}),` (24px) and `,(0,B.jsx)(t.code,{children:`md`}),` (32px) only, the compact control scale of the Claude apps. The spec's larger steps were dropped; a big call to action is `,(0,B.jsx)(t.code,{children:`md`}),` with more room around it, not a taller box.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.strong,{children:`Native names`}),` for native attributes: `,(0,B.jsx)(t.code,{children:`disabled`}),`, `,(0,B.jsx)(t.code,{children:`required`}),`,
`,(0,B.jsx)(t.code,{children:`readOnly`}),` rather than `,(0,B.jsx)(t.code,{children:`isDisabled`}),`, `,(0,B.jsx)(t.code,{children:`isRequired`}),`, `,(0,B.jsx)(t.code,{children:`isReadOnly`}),`.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsxs)(t.strong,{children:[(0,B.jsx)(t.code,{children:`onChange`}),` is the native event`]}),`, not a value: the kit's rule for
components that wrap a real input, so it works with every form library
as-is.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.strong,{children:`Changed in 0.8:`}),` `,(0,B.jsx)(t.code,{children:`error`}),` became `,(0,B.jsx)(t.code,{children:`validationState="error"`}),` plus
`,(0,B.jsx)(t.code,{children:`helperText`}),`; `,(0,B.jsx)(t.code,{children:`forwardRef`}),` is gone (`,(0,B.jsx)(t.code,{children:`ref`}),` is a prop in React 19).`]}),`
`]})]}),(0,B.jsxs)(_,{value:`guidelines`,children:[(0,B.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,B.jsx)(t.p,{children:`Use a Text Input for short free text on one line: a name, an email
address, a URL, a title. Give every field a visible label, and use the
placeholder only for a hint of the format.`}),(0,B.jsx)(l,{do:(0,B.jsx)(a,{of:w}),doCaption:`A visible label names the field; the placeholder only hints at the format.`,dont:(0,B.jsx)(a,{of:F}),dontCaption:`A placeholder as the label disappears on the first keystroke, and with it what the field was for.`}),(0,B.jsxs)(t.p,{children:[(0,B.jsx)(t.strong,{children:`Errors`}),` say what to change, in the helper text, next to the field. The
red edge only points at the message.`]}),(0,B.jsx)(l,{do:(0,B.jsx)(a,{of:O}),doCaption:`The error says what is wrong and how to fix it.`,dont:(0,B.jsx)(a,{of:M}),dontCaption:`A red edge and 'Invalid' leave people guessing what to change.`}),(0,B.jsxs)(t.p,{children:[(0,B.jsx)(t.strong,{children:`Prefix or add-on.`}),` A prefix is a hint inside the box, read past
without stopping: an icon, a currency sign. An add-on is a segment of its
own, for a fixed part long enough to label the value ("https://", ".com")
or for an action attached to it. Use one start and one end at most; a
field with an add-on and a prefix on the same side has two things before
the value to read.`]}),(0,B.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,B.jsxs)(t.ul,{children:[`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.strong,{children:`For several lines.`}),` Use a
`,(0,B.jsx)(t.a,{href:`?path=/docs/components-inputs-textarea--docs`,children:`Textarea`}),`: Enter adds a
line instead of submitting.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.strong,{children:`For a quantity.`}),` Use a
`,(0,B.jsx)(t.a,{href:`?path=/docs/components-inputs-numberinput--docs`,children:`Number Input`}),`, which
steps and parses. For numbers that are identifiers (postcodes, card
numbers, phone numbers) keep the Text Input with `,(0,B.jsx)(t.code,{children:`inputMode="numeric"`}),`.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.strong,{children:`For a search query.`}),` Use `,(0,B.jsx)(t.a,{href:`?path=/docs/components-inputs-search--docs`,children:`Search`}),`,
which clears and is exposed as a searchbox.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.strong,{children:`To pick from a known list.`}),` Use a
`,(0,B.jsx)(t.a,{href:`?path=/docs/components-inputs-select--docs`,children:`Select`}),` or a
`,(0,B.jsx)(t.a,{href:`?path=/docs/components-inputs-combobox--docs`,children:`Combobox`}),`.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.strong,{children:`For a unit people choose`}),` (a currency, a country code). Add-ons take
text or a `,(0,B.jsx)(t.code,{children:`TextInputButton`}),`, not a Select: put a
`,(0,B.jsx)(t.a,{href:`?path=/docs/components-inputs-select--docs`,children:`Select`}),` beside the field.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.strong,{children:`For a date.`}),` Use a `,(0,B.jsx)(t.a,{href:`?path=/docs/components-inputs-datepicker--docs`,children:`Date Picker`}),`.`]}),`
`]}),(0,B.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,B.jsxs)(t.ul,{children:[`
`,(0,B.jsxs)(t.li,{children:[`The label is a real `,(0,B.jsx)(t.code,{children:`<label>`}),` for the input: clicking it focuses the
input, and it is the input's accessible name.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.code,{children:`helperText`}),` is the input's description (`,(0,B.jsx)(t.code,{children:`aria-describedby`}),`), so a
screen reader reads it after the name.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.code,{children:`validationState="error"`}),` sets `,(0,B.jsx)(t.code,{children:`aria-invalid="true"`}),` on the input.
Colour is never the only signal: the helper text carries the message.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.code,{children:`required`}),` sets the native `,(0,B.jsx)(t.code,{children:`required`}),`; the asterisk is `,(0,B.jsx)(t.code,{children:`aria-hidden`}),`, so
it is not read as "star".`]}),`
`,(0,B.jsxs)(t.li,{children:[`Do not rely on the placeholder as a label: it is not reliably announced
and disappears as soon as anyone types. Without a visible label, pass
`,(0,B.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`,(0,B.jsx)(t.li,{children:`Pressing the field's padding, a prefix or a text add-on focuses the
input, as a click anywhere on a native field does.`}),`
`,(0,B.jsxs)(t.li,{children:[`A `,(0,B.jsx)(t.code,{children:`TextInputButton`}),` is a native `,(0,B.jsx)(t.code,{children:`<button>`}),` after the input in the tab
order, pressed with Enter or Space. An icon-only one needs `,(0,B.jsx)(t.code,{children:`aria-label`}),`.
Pressing it does not move focus to the input.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsx)(t.code,{children:`TextInputButton`}),` is disabled with the field. In a read-only field it
stays enabled, since opening or copying a fixed value is what it is for.`]}),`
`,(0,B.jsxs)(t.li,{children:[(0,B.jsxs)(t.strong,{children:[`The edge is `,(0,B.jsx)(t.code,{children:`--field-border`}),`, about 1.5:1, a deliberate exception to
WCAG 1.4.11`]}),` (approved 2026-10-08), for the light hairline of the
Claude apps. The field is a white `,(0,B.jsx)(t.code,{children:`--card`}),` box with a faint drop on the
off-white page, and the label, placeholder and focus ring mark it too.
If your audience needs 3:1, set `,(0,B.jsx)(t.code,{children:`--field-border: var(--control-border)`}),`.`]}),`
`,(0,B.jsx)(t.li,{children:`Focus ring: 2px, 2px offset, on click and keyboard alike.`}),`
`,(0,B.jsx)(t.li,{children:`Heights are 24 and 32px, at or above WCAG 2.5.8's 24px minimum. The
label is part of the target, since clicking it focuses the input.`}),`
`]})]})]})]})}function z(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,B.jsx)(t,{...e,children:(0,B.jsx)(R,{...e})}):R(e)}var B;function V(){return(V=e((()=>{B=t(),r(),c(),d(),p(),h(),f(),m(),b(),S(),A()})))()}V();export{z as default};