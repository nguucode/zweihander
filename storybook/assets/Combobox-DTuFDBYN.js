import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-C4DQin6J.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-CmyhQ0nv.js";import{n as b,t as x}from"./Status-k1ODXqUs.js";import{a as S,c as C,d as w,f as T,h as E,i as D,l as O,m as k,n as A,o as j,p as M,r as N,s as P,t as F,u as I}from"./Combobox.stories-DZ2Io7-O.js";function L(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,z.jsxs)(z.Fragment,{children:[`
`,`
`,(0,z.jsx)(i,{of:N}),`
`,(0,z.jsx)(t.h1,{id:`combobox`,children:`Combobox`}),`
`,(0,z.jsxs)(u,{children:[(0,z.jsxs)(_,{value:`overview`,children:[(0,z.jsx)(t.p,{children:`A field you type into to filter a list of options, then choose one.`}),(0,z.jsx)(x,{of:N}),(0,z.jsx)(s,{of:D}),(0,z.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,z.jsx)(t.p,{children:`Two sizes, and the field's validation states. Typing filters the list and
marks the match; the chosen option carries a check.`}),(0,z.jsx)(s,{of:I}),(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`Size`}),(0,z.jsx)(t.th,{children:`Use for`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`md`})}),(0,z.jsx)(t.td,{children:`Forms and settings: the default.`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`sm`})}),(0,z.jsxs)(t.td,{children:[`Dense places: a toolbar filter, a table row, beside `,(0,z.jsx)(t.code,{children:`sm`}),` buttons.`]})]})]})]}),(0,z.jsx)(s,{of:w}),(0,z.jsx)(s,{of:A}),(0,z.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,z.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,z.jsx)(t.pre,{children:(0,z.jsx)(t.code,{className:`language-js`,children:`import { Combobox } from 'zweihander/combobox'
`})}),(0,z.jsx)(t.pre,{children:(0,z.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/combobox.json
`})}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[`Source: `,(0,z.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/inputs/Combobox.tsx`,rel:`nofollow`,children:`src/components/inputs/Combobox.tsx`})]}),`
`,(0,z.jsxs)(t.li,{children:[`Spec: `,(0,z.jsx)(t.a,{href:`https://www.uiguideline.com/components/combobox`,rel:`nofollow`,children:`uiguideline.com/components/combobox`})]}),`
`,(0,z.jsxs)(t.li,{children:[`Behaviour: `,(0,z.jsx)(t.a,{href:`https://base-ui.com/react/components/combobox`,rel:`nofollow`,children:`Base UI Combobox`})]}),`
`,(0,z.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,z.jsxs)(_,{value:`specs`,children:[(0,z.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,z.jsx)(y,{parts:T,children:(0,z.jsx)(a,{of:F})}),(0,z.jsx)(t.p,{children:`The options list opens under the field, at least as wide as it:`}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Option`}),`: the label, with the typed text marked by weight and
underline. Options are inset by the field's padding, so their text
starts where the input's does.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Check`}),`: before the chosen option's label, in a column kept for every
option so labels never shift.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Message`}),`: "No matches" (`,(0,z.jsx)(t.code,{children:`emptyText`}),`) when nothing matches,
"Loading…" while `,(0,z.jsx)(t.code,{children:`isLoading`}),`.`]}),`
`]}),(0,z.jsx)(s,{of:O}),(0,z.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,z.jsx)(t.p,{children:`Each size is a control tier (Foundations / Sizing). Fields take the normal
inline padding, so the value lines up with the label above it, and the
field radius, which never becomes a pill.`}),(0,z.jsx)(g,{caption:`sm`,rows:[{part:`Field`,property:`Height`,token:`--control-sm`},{part:`Field`,property:`Inline padding`,token:`--control-sm-pad`},{part:`Field`,property:`Corner radius`,token:`--control-sm-radius-field`},{part:`Field`,property:`Gap`,token:`--control-sm-gap`},{part:`Icons and buttons`,property:`Size`,token:`--icon-sm`},{part:`Input`,property:`Font size`,token:`--text-body-sm`},{part:`Input`,property:`Line height`,token:`--leading-body-sm`}]}),(0,z.jsx)(g,{caption:`md`,rows:[{part:`Field`,property:`Height`,token:`--control-md`},{part:`Field`,property:`Inline padding`,token:`--control-md-pad`},{part:`Field`,property:`Corner radius`,token:`--control-md-radius-field`},{part:`Field`,property:`Gap`,token:`--control-md-gap`},{part:`Icons and buttons`,property:`Size`,token:`--icon-md`},{part:`Input`,property:`Font size`,token:`--text-body`},{part:`Input`,property:`Line height`,token:`--leading-body`}]}),(0,z.jsx)(g,{caption:`Every size`,rows:[{part:`Label and helper`,property:`Gap to the field`,token:`--space-1-5`},{part:`Label and helper`,property:`Font size`,token:`--text-body`},{part:`Clear and open buttons`,property:`Gap between them`,token:`--space-1`},{part:`Options list`,property:`Block padding`,token:`--space-1`},{part:`Options list`,property:`Corner radius`,token:`--radius-field`},{part:`Option`,property:`Minimum height`,token:`--control-md`},{part:`Check`,property:`Size`,token:`--icon-md`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`},{part:`Option, buttons`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,z.jsxs)(t.p,{children:[`The field is 20rem wide unless `,(0,z.jsx)(t.code,{children:`isFullWidth`}),`; the list is at least as
wide as the field, 4px under it, and scrolls after 20rem (about ten
options).`]}),(0,z.jsx)(t.h2,{id:`color`,children:`Color`}),(0,z.jsx)(g,{caption:`Field`,rows:[{part:`Field`,property:`Background`,token:`--card`},{part:`Field`,property:`Border`,token:`--field-border`},{part:`Field`,property:`Shadow`,token:`--shadow-2xs`},{part:`Label, input`,property:`Colour`,token:`--foreground`},{part:`Placeholder, helper, icons`,property:`Colour`,token:`--muted-foreground`},{part:`Required asterisk`,property:`Colour`,token:`--danger-text`},{part:`Focus ring`,property:`Colour`,token:`--ring`}]}),(0,z.jsx)(g,{caption:`Validation and read-only`,rows:[{part:`Border, helper, focus ring, error`,property:`Colour`,token:`--danger-text`},{part:`Border, helper, success`,property:`Colour`,token:`--success-text`},{part:`Field, read-only`,property:`Background`,token:`--surface-filled`}]}),(0,z.jsx)(g,{caption:`Options list`,rows:[{part:`List`,property:`Background`,token:`--popover`},{part:`List`,property:`Border`,token:`--border`},{part:`List`,property:`Shadow`,token:`--shadow-md`},{part:`Option`,property:`Colour`,token:`--popover-foreground`},{part:`Option, highlighted`,property:`Background`,token:`--accent`},{part:`Option, highlighted`,property:`Colour`,token:`--accent-foreground`},{part:`Check`,property:`Colour`,token:`--primary-text`},{part:`No matches, Loading…`,property:`Colour`,token:`--muted-foreground`}]}),(0,z.jsx)(t.p,{children:`The field's edge is a light hairline, about 1.5:1, as in the Claude apps:
an approved exception to WCAG 1.4.11. The label, placeholder and focus
ring still mark the field. The matched text keeps the option's own colour,
so it holds full contrast on the highlighted row.`}),(0,z.jsx)(t.h2,{id:`states`,children:`States`}),(0,z.jsx)(v,{states:[{label:`Enabled`},{label:`Focus`,pseudo:`focus`},{label:`Filled`,content:(0,z.jsx)(B,{children:(0,z.jsx)(a,{of:A})})},{label:`Error`,content:(0,z.jsx)(B,{children:(0,z.jsx)(a,{of:w})})},{label:`Read-only`,content:(0,z.jsx)(B,{children:(0,z.jsx)(k,{label:`Team member`,options:[`Miya Burns`],defaultValue:`Miya Burns`,readOnly:!0})})},{label:`Disabled`,content:(0,z.jsx)(B,{children:(0,z.jsx)(a,{of:S})})},{label:`Loading`,content:(0,z.jsx)(B,{children:(0,z.jsx)(a,{of:C})})}],children:(0,z.jsx)(B,{children:(0,z.jsx)(a,{of:D})})}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,z.jsx)(t.code,{children:`--ring`}),` outline, 2px outside the field, drawn while
the input has focus, by pointer too: that is where typing goes. In the
error state the ring is `,(0,z.jsx)(t.code,{children:`--danger-text`}),`. The clear and open buttons draw
their own ring when tabbed to, so the field never shows two.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Hover`}),` changes nothing on the field; the clear and open buttons
darken from `,(0,z.jsx)(t.code,{children:`--muted-foreground`}),` to `,(0,z.jsx)(t.code,{children:`--foreground`}),`.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Error`}),` turns the edge and the helper `,(0,z.jsx)(t.code,{children:`--danger-text`}),` together; the
words are the message, the colour only points at it.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Read-only`}),` fills the field with `,(0,z.jsx)(t.code,{children:`--surface-filled`}),`; there is no clear
button.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Disabled`}),` is the enabled look at 50% opacity.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Loading`}),` adds a spinner before the buttons and says "Loading…" in the
list.`]}),`
`]}),(0,z.jsx)(t.h2,{id:`api`,children:`API`}),(0,z.jsx)(`div`,{style:{overflowX:`auto`},children:(0,z.jsx)(o,{of:N})}),(0,z.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Labels must be strings`}),`, not components: they are what is typed,
matched and shown in the input.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:(0,z.jsx)(t.code,{children:`emptyText`})}),` is added: an empty list needs to say why.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsxs)(t.strong,{children:[(0,z.jsx)(t.code,{children:`onValueChange`}),`, not `,(0,z.jsx)(t.code,{children:`onChange`})]}),`, and native names (`,(0,z.jsx)(t.code,{children:`disabled`}),`,
`,(0,z.jsx)(t.code,{children:`readOnly`}),`, `,(0,z.jsx)(t.code,{children:`required`}),`), as on Select.`]}),`
`]})]}),(0,z.jsxs)(_,{value:`guidelines`,children:[(0,z.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,z.jsx)(t.p,{children:`Use a Combobox to choose one option from a long list, when people already
know what they are looking for: a person, a country, a project. Typing a
few letters is faster than scrolling. It chooses from the list only; free
text that is not an option is not a value.`}),(0,z.jsx)(l,{do:(0,z.jsx)(a,{of:j}),doCaption:`A long list people know an entry of: type a few letters, pick it.`,dont:(0,z.jsx)(a,{of:P}),dontCaption:`Three options hidden behind typing. A Select or a radio group shows them all.`}),(0,z.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`For a handful of options.`}),` Under about seven, use a
`,(0,z.jsx)(t.a,{href:`?path=/docs/components-inputs-select--docs`,children:`Select`}),`, or a
`,(0,z.jsx)(t.a,{href:`?path=/docs/components-controls-radio--docs`,children:`Radio`}),` group when they
should all be visible.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`For free text.`}),` If any answer is valid, use a
`,(0,z.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),`; to filter
a page, use `,(0,z.jsx)(t.a,{href:`?path=/docs/components-inputs-search--docs`,children:`Search`}),`.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`For several values.`}),` It holds one; a multi-select is not built yet.`]}),`
`]}),(0,z.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[`The input has `,(0,z.jsx)(t.code,{children:`role="combobox"`}),`, `,(0,z.jsx)(t.code,{children:`aria-autocomplete="list"`}),` and
`,(0,z.jsx)(t.code,{children:`aria-expanded`}),`; the list is a `,(0,z.jsx)(t.code,{children:`listbox`}),` named by the field's label (or
`,(0,z.jsx)(t.code,{children:`aria-label`}),` when there is no visible label), as the input is.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Keyboard:`}),` typing opens and filters; the first match is highlighted
so Enter picks it; Up and Down move; Escape closes, then clears.`]}),`
`,(0,z.jsx)(t.li,{children:`The match is marked by weight and underline, not colour, so it keeps
the option's full contrast on the highlighted row.`}),`
`,(0,z.jsx)(t.li,{children:`The open button is named "Show options" and is out of the tab order
(the input already opens the list); the clear button is "Clear
selection".`}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.code,{children:`validationState="error"`}),` sets `,(0,z.jsx)(t.code,{children:`aria-invalid`}),`, and the helper text is
the input's description.`]}),`
`,(0,z.jsx)(t.li,{children:`Loading and empty states are announced from the list.`}),`
`,(0,z.jsx)(t.li,{children:`After an option is picked with the pointer, the input loses focus and the
field returns to rest (no caret, no ring). A keyboard pick keeps focus in
the input, so keyboard and screen reader users are not dropped to the page.`}),`
`,(0,z.jsxs)(t.li,{children:[`Options are 32px tall; on touch screens (`,(0,z.jsx)(t.code,{children:`pointer: coarse`}),`) they grow to
44px, and the clear and open buttons get a 44×44px hit area.`]}),`
`]})]})]})]})}function R(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,z.jsx)(t,{...e,children:(0,z.jsx)(L,{...e})}):L(e)}var z,B;function V(){return(V=e((()=>{z=t(),r(),c(),d(),p(),h(),f(),m(),b(),E(),M(),B=({children:e})=>(0,z.jsx)(`div`,{style:{inlineSize:`100%`,minInlineSize:0},children:e})})))()}V();export{B as Fit,R as default};