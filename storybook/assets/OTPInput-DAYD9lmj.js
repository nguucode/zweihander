import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{n as S,t as C}from"./OTPInput-CGzMRN34.js";import{a as w,c as T,i as E,l as D,n as O,o as k,r as A,s as j,t as M}from"./OTPInput.stories-DRIoraje.js";function N(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(i,{of:w}),`
`,(0,F.jsx)(t.h1,{id:`otp-input`,children:`OTP Input`}),`
`,(0,F.jsxs)(u,{children:[(0,F.jsxs)(_,{value:`overview`,children:[(0,F.jsx)(t.p,{children:`A short one-time code, typed or pasted into a row of single-character
cells: the code from a text message, an email or an authenticator app.`}),(0,F.jsx)(x,{of:w}),(0,F.jsx)(s,{of:O}),(0,F.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,F.jsx)(t.p,{children:`One appearance, a row of small outlined boxes. What changes is the size,
whether the cells are grouped, and whether there is a resend button.`}),(0,F.jsx)(s,{of:j}),(0,F.jsxs)(t.table,{children:[(0,F.jsx)(t.thead,{children:(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.th,{children:`Size`}),(0,F.jsx)(t.th,{children:`Use for`})]})}),(0,F.jsxs)(t.tbody,{children:[(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`md`})}),(0,F.jsx)(t.td,{children:`Sign-in, verification and confirmation screens: the default.`})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`sm`})}),(0,F.jsx)(t.td,{children:`A code asked for inside a dense panel or a table row.`})]})]})]}),(0,F.jsx)(s,{of:k}),(0,F.jsxs)(t.table,{children:[(0,F.jsx)(t.thead,{children:(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.th,{children:`Setting`}),(0,F.jsx)(t.th,{children:`Use for`})]})}),(0,F.jsxs)(t.tbody,{children:[(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`groupSize`})}),(0,F.jsxs)(t.td,{children:[`A code people read in chunks: `,(0,F.jsx)(t.code,{children:`3`}),` shows six digits as 3 – 3, `,(0,F.jsx)(t.code,{children:`4`}),` an eight-character backup code as 4 – 4.`]})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`onResend`})}),(0,F.jsxs)(t.td,{children:[`A code that was sent and may not arrive. The button waits `,(0,F.jsx)(t.code,{children:`resendCooldown`}),` seconds, showing the time left. Return a promise: a failed send starts no cooldown.`]})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`validationType`})}),(0,F.jsxs)(t.td,{children:[(0,F.jsx)(t.code,{children:`numeric`}),` for codes from texts and apps; `,(0,F.jsx)(t.code,{children:`alphanumeric`}),` for backup and recovery codes.`]})]}),(0,F.jsxs)(t.tr,{children:[(0,F.jsx)(t.td,{children:(0,F.jsx)(t.code,{children:`mask`})}),(0,F.jsx)(t.td,{children:`A code that should not be read over someone's shoulder.`})]})]})]}),(0,F.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,F.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-js`,children:`import { OTPInput } from 'zweihander/otp-input'
`})}),(0,F.jsx)(t.pre,{children:(0,F.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/otp-input.json
`})}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`Source: `,(0,F.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/inputs/OTPInput.tsx`,rel:`nofollow`,children:`src/components/inputs/OTPInput.tsx`})]}),`
`,(0,F.jsxs)(t.li,{children:[`Spec: none on uiguideline.com; the reference is `,(0,F.jsx)(t.a,{href:`https://ui.shadcn.com/docs/components/input-otp`,rel:`nofollow`,children:`shadcn/ui Input OTP`})]}),`
`,(0,F.jsxs)(t.li,{children:[`Behaviour: `,(0,F.jsx)(t.a,{href:`https://base-ui.com/react/components/otp-field`,rel:`nofollow`,children:`Base UI OTP Field`})]}),`
`,(0,F.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,F.jsxs)(_,{value:`specs`,children:[(0,F.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,F.jsx)(y,{parts:T,children:(0,F.jsx)(a,{of:M})}),(0,F.jsx)(t.p,{children:`Each cell is its own box with the field's edge, fill and radius, so the
row reads as several small fields that belong together. The label and
helper text are Text Input's.`}),(0,F.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,F.jsx)(t.p,{children:`Each size is a control tier, as on Text Input, and a cell is a square of
that tier.`}),(0,F.jsx)(g,{caption:`sm`,rows:[{part:`Cell`,property:`Width and height`,token:`--control-sm`},{part:`Cell`,property:`Corner radius`,token:`--control-sm-radius-field`},{part:`Cell`,property:`Font size`,token:`--text-body-sm`}]}),(0,F.jsx)(g,{caption:`md`,rows:[{part:`Cell`,property:`Width and height`,token:`--control-md`},{part:`Cell`,property:`Corner radius`,token:`--control-md-radius-field`},{part:`Cell`,property:`Font size`,token:`--text-body`}]}),(0,F.jsx)(g,{caption:`Every size`,rows:[{part:`Cells and separator`,property:`Gap`,token:`--space-2`},{part:`Resend button`,property:`Pulled back to line up with the cells`,token:`--control-sm-pad`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`},{part:`Cell`,property:`Height on touch screens`,token:`--target-coarse`}]}),(0,F.jsxs)(t.p,{children:[`The characters use tabular figures, centred in the cell. The resend
button is a small ghost `,(0,F.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Button`}),`.`]}),(0,F.jsx)(t.h2,{id:`color`,children:`Color`}),(0,F.jsx)(g,{caption:`default`,rows:[{part:`Cell`,property:`Background`,token:`--card`},{part:`Cell`,property:`Border`,token:`--field-edge`},{part:`Cell`,property:`Shadow`,token:`--shadow-2xs`},{part:`Character`,property:`Colour`,token:`--foreground`},{part:`Caret`,property:`Colour`,token:`--ring`},{part:`Group separator`,property:`Colour`,token:`--muted-foreground`},{part:`Focus ring`,property:`Colour`,token:`--ring`}]}),(0,F.jsx)(g,{caption:`error`,rows:[{part:`Focus ring`,property:`Colour`,token:`--danger-text`}]}),(0,F.jsx)(g,{caption:`Read-only`,rows:[{part:`Cell`,property:`Background`,token:`--surface-filled`}]}),(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`--field-edge`}),` is the shared field's edge colour: `,(0,F.jsx)(t.code,{children:`--field-border`}),` by
default, `,(0,F.jsx)(t.code,{children:`--danger-text`}),` on error and `,(0,F.jsx)(t.code,{children:`--success-text`}),` on success, so every
cell and the helper text change together.`]}),(0,F.jsx)(t.h2,{id:`states`,children:`States`}),(0,F.jsx)(v,{states:[{label:`Enabled`},{label:`Focus`,pseudo:`focus`},{label:`Filled`,content:(0,F.jsx)(C,{label:`Code`,length:4,defaultValue:`4821`})},{label:`Error`,content:(0,F.jsx)(C,{label:`Code`,length:4,defaultValue:`4821`,validationState:`error`,helperText:`That code is wrong.`})},{label:`Disabled`,content:(0,F.jsx)(C,{label:`Code`,length:4,defaultValue:`48`,disabled:!0})}],children:(0,F.jsx)(C,{label:`Code`,length:4})}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Hover`}),` changes nothing: a cell is a text field, and the caret shows
where typing goes.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Focus`}),` rings only the cell being typed into, in `,(0,F.jsx)(t.code,{children:`--danger-text`}),` when
invalid.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Error`}),` turns every cell's edge and the helper text `,(0,F.jsx)(t.code,{children:`--danger-text`}),`.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Read-only`}),` fills the cells with `,(0,F.jsx)(t.code,{children:`--surface-filled`}),`; typing does
nothing.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Disabled`}),` dims the cells to 50% and disables the resend button.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Cooling down`}),`, the resend button is disabled and shows the time left
as `,(0,F.jsx)(t.code,{children:`m:ss`}),`.`]}),`
`]}),(0,F.jsx)(t.h2,{id:`api`,children:`API`}),(0,F.jsx)(`div`,{style:{overflowX:`auto`},children:(0,F.jsx)(o,{of:w})}),(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`ref`}),` goes to the first cell. `,(0,F.jsx)(t.code,{children:`id`}),` and `,(0,F.jsx)(t.code,{children:`className`}),` are passed through too;
no other attributes are.`]}),(0,F.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,F.jsx)(t.p,{children:`There is no uiguideline.com spec for this component; the reference is shadcn/ui Input OTP.`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`One component, flat props.`}),` shadcn composes `,(0,F.jsx)(t.code,{children:`InputOTP`}),`, `,(0,F.jsx)(t.code,{children:`InputOTPGroup`}),`,
`,(0,F.jsx)(t.code,{children:`InputOTPSlot`}),` and `,(0,F.jsx)(t.code,{children:`InputOTPSeparator`}),`; Zweihänder takes `,(0,F.jsx)(t.code,{children:`length`}),` and
`,(0,F.jsx)(t.code,{children:`groupSize`}),`, as the API conventions ask for flat props before 1.0.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Resend is built in.`}),` shadcn leaves it to the page. Every screen that
sends a code needs the same button and countdown, so it lives here.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Real inputs, one per cell`}),`, from Base UI, not one hidden input under
drawn slots: each cell is focusable and named.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsxs)(t.strong,{children:[(0,F.jsx)(t.code,{children:`label`}),`, `,(0,F.jsx)(t.code,{children:`helperText`}),`, `,(0,F.jsx)(t.code,{children:`validationState`})]}),` are added from the shared field.`]}),`
`]})]}),(0,F.jsxs)(_,{value:`guidelines`,children:[(0,F.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,F.jsxs)(t.p,{children:[`Use an OTP Input for a short code someone copies from another place: a
text message, an email, an authenticator app. Say where the code was sent
in `,(0,F.jsx)(t.code,{children:`helperText`}),`, and give a way to send another.`]}),(0,F.jsx)(l,{do:(0,F.jsx)(a,{of:A}),doCaption:`Six digits, labelled, with where the code went and a way to resend it.`,dont:(0,F.jsx)(a,{of:E}),dontCaption:`Sixteen cells are too many to scan or correct. A long key is one Text Input.`}),(0,F.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For codes longer than about 8 characters`}),`, licence keys or recovery
phrases. Use a `,(0,F.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),`.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For a PIN or password people make up themselves.`}),` Use a
`,(0,F.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),` with
`,(0,F.jsx)(t.code,{children:`type="password"`}),`: cells suggest a code that was sent.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`For a number people adjust.`}),` Use a
`,(0,F.jsx)(t.a,{href:`?path=/docs/components-inputs-numberinput--docs`,children:`Number Input`}),`.`]}),`
`]}),(0,F.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`The cells sit in a `,(0,F.jsx)(t.code,{children:`group`}),` named by the label; the label also names the
first cell, and each later cell is named by `,(0,F.jsx)(t.code,{children:`slotLabel`}),`, "Character 2 of 6"
by default.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.strong,{children:`Keyboard:`}),` the group is one tab stop: only the cell to type into is in
the tab order. Typing a character fills the cell and moves to the next;
Backspace clears the cell before and moves back; Left and Right move
between cells.`]}),`
`,(0,F.jsxs)(t.li,{children:[`Characters `,(0,F.jsx)(t.code,{children:`validationType`}),` does not allow are dropped, so letters cannot
enter a numeric code.`]}),`
`,(0,F.jsx)(t.li,{children:`Pasting the whole code into any cell fills every cell; spaces are ignored.`}),`
`,(0,F.jsxs)(t.li,{children:[`The first cell has `,(0,F.jsx)(t.code,{children:`autocomplete="one-time-code"`}),`, so phones offer the code
from a text message.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`helperText`}),` is the group's description and `,(0,F.jsx)(t.code,{children:`validationState="error"`}),` sets
`,(0,F.jsx)(t.code,{children:`aria-invalid`}),` on every cell.`]}),`
`,(0,F.jsxs)(t.li,{children:[`The resend button is disabled during the cooldown and its name carries the
time left. After a send, focus moves to the first cell, so it is not lost
with the disabled button; while a send is pending the button stays
focusable and is marked `,(0,F.jsx)(t.code,{children:`aria-busy`}),`. The countdown is not a live region, so it does not interrupt
every second.`]}),`
`]})]})]})]})}function P(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=t(),r(),c(),d(),p(),h(),f(),m(),b(),S(),D()})))()}I();export{P as default};