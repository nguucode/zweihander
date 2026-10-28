import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,u as c}from"./blocks-CaB3w3bd.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./States-COwIDKmw.js";import{n as b,t as x}from"./Status-Bh5ZRJmX.js";import{n as S,r as C,t as w}from"./PasswordInput-CBpNGzdF.js";import{a as T,c as E,i as D,l as O,n as k,o as A,r as j,s as M,t as N}from"./PasswordInput.stories-DGKKIya2.js";function P(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(i,{of:T}),`
`,(0,I.jsx)(t.h1,{id:`password-input`,children:`Password Input`}),`
`,(0,I.jsxs)(u,{children:[(0,I.jsxs)(_,{value:`overview`,children:[(0,I.jsx)(t.p,{children:`A password field with a Show / Hide button and, where a password is being
chosen, the rules it must meet, ticked off as the reader types.`}),(0,I.jsx)(x,{of:T}),(0,I.jsx)(s,{of:k}),(0,I.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,I.jsx)(t.p,{children:`One appearance, Text Input's. What changes is whether the password is
being typed or chosen.`}),(0,I.jsxs)(t.table,{children:[(0,I.jsx)(t.thead,{children:(0,I.jsxs)(t.tr,{children:[(0,I.jsx)(t.th,{children:`Use`}),(0,I.jsx)(t.th,{children:`Setting`})]})}),(0,I.jsxs)(t.tbody,{children:[(0,I.jsxs)(t.tr,{children:[(0,I.jsx)(t.td,{children:`Signing in, or confirming who you are before a change`}),(0,I.jsxs)(t.td,{children:[`The default: `,(0,I.jsx)(t.code,{children:`autoComplete="current-password"`}),`, no rules.`]})]}),(0,I.jsxs)(t.tr,{children:[(0,I.jsx)(t.td,{children:`Choosing a password: sign up, reset, change`}),(0,I.jsxs)(t.td,{children:[(0,I.jsx)(t.code,{children:`autoComplete="new-password"`}),` and `,(0,I.jsx)(t.code,{children:`rules`}),`, so password managers suggest one and the reader sees what it needs.`]})]})]})]}),(0,I.jsx)(s,{of:M}),(0,I.jsx)(s,{of:A}),(0,I.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,I.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,I.jsx)(t.pre,{children:(0,I.jsx)(t.code,{className:`language-js`,children:`import { PasswordInput, defaultPasswordRules } from 'zweihander/password-input'
`})}),(0,I.jsx)(t.pre,{children:(0,I.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/password-input.json
`})}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[`Source: `,(0,I.jsx)(t.a,{href:`https://github.com/nguucode/zweihander/blob/main/src/components/inputs/PasswordInput.tsx`,rel:`nofollow`,children:`src/components/inputs/PasswordInput.tsx`})]}),`
`,(0,I.jsxs)(t.li,{children:[`Spec: none on uiguideline.com; the rules follow `,(0,I.jsx)(t.a,{href:`https://pages.nist.gov/800-63-4/sp800-63b.html`,rel:`nofollow`,children:`NIST SP 800-63B`}),` (length over character kinds)`]}),`
`,(0,I.jsxs)(t.li,{children:[`Built on: `,(0,I.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),` and its `,(0,I.jsx)(t.code,{children:`TextInputButton`})]}),`
`,(0,I.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,I.jsxs)(_,{value:`specs`,children:[(0,I.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,I.jsx)(y,{parts:E,children:(0,I.jsx)(a,{of:N})}),(0,I.jsx)(t.p,{children:`The field, label, helper text and button are Text Input's; this
component adds the rules and the button's behaviour.`}),(0,I.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,I.jsx)(t.p,{children:`Field sizes are Text Input's. The rules sit in its helper text, one per
line.`}),(0,I.jsx)(g,{caption:`Every size`,rows:[{part:`Rule`,property:`Gap between tick and text`,token:`--space-inline`},{part:`Tick`,property:`Width and height`,token:`--icon-sm`}]}),(0,I.jsx)(t.h2,{id:`color`,children:`Color`}),(0,I.jsx)(g,{caption:`default`,rows:[{part:`Met rule`,property:`Colour`,token:`--success-text`}]}),(0,I.jsx)(t.p,{children:`A rule not yet met takes the helper text's colour. A met rule stays
green when the field is in error: it is done.`}),(0,I.jsx)(t.h2,{id:`states`,children:`States`}),(0,I.jsx)(v,{states:[{label:`Enabled`},{label:`Focus`,pseudo:`focus`},{label:`Rules met`,content:(0,I.jsx)(w,{label:`New password`,rules:S,defaultValue:`correct horse battery`})},{label:`Error`,content:(0,I.jsx)(w,{validationState:`error`,helperText:`That password is wrong.`,defaultValue:`hunter2`})},{label:`Disabled`,content:(0,I.jsx)(w,{disabled:!0,defaultValue:`hunter2`})}],children:(0,I.jsx)(w,{})}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Hover and focus`}),` are Text Input's; the Show button has the add-on
button's hover and focus.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Shown`}),`, the field is `,(0,I.jsx)(t.code,{children:`type="text"`}),` and the button reads Hide. It goes
back to dots when the form is sent.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Error`}),` colours the edge and the helper text `,(0,I.jsx)(t.code,{children:`--danger-text`}),`; met
rules stay green.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`Disabled`}),` dims the field and disables the button.`]}),`
`]}),(0,I.jsx)(t.h2,{id:`api`,children:`API`}),(0,I.jsx)(`div`,{style:{overflowX:`auto`},children:(0,I.jsx)(o,{of:T})}),(0,I.jsxs)(t.p,{children:[`Every other Text Input prop and input attribute passes through, except
`,(0,I.jsx)(t.code,{children:`type`}),` and `,(0,I.jsx)(t.code,{children:`endAddon`}),`, which the component owns. `,(0,I.jsx)(t.code,{children:`ref`}),` points at the
input. `,(0,I.jsx)(t.code,{children:`defaultPasswordRules`}),` and the `,(0,I.jsx)(t.code,{children:`PasswordRule`}),` type are exported
with it.`]}),(0,I.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,I.jsx)(t.p,{children:`There is no uiguideline.com spec for this component. It moved here from
the auth templates, where it was a template file, when Settings became its
first use outside sign-in.`})]}),(0,I.jsxs)(_,{value:`guidelines`,children:[(0,I.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,I.jsxs)(t.p,{children:[`Use it for every password field: sign in, sign up, reset, and change
password in Settings. Give a new password `,(0,I.jsx)(t.code,{children:`rules`}),` so the reader knows what
it needs before sending, not after.`]}),(0,I.jsx)(l,{do:(0,I.jsx)(a,{of:j}),doCaption:`A new password, hidden, with its rule and a Show button.`,dont:(0,I.jsx)(a,{of:D}),dontCaption:`A plain Text Input shows the password to anyone nearby and tells the reader nothing about what it needs.`}),(0,I.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`For a code that was sent`}),`, such as a sign-in code. Use an
`,(0,I.jsx)(t.a,{href:`?path=/docs/components-inputs-otpinput--docs`,children:`OTP Input`}),`.`]}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.strong,{children:`For an API key or token`}),` the reader copies. Use a
`,(0,I.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),` that is
read-only, with a copy button.`]}),`
`]}),(0,I.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsx)(t.li,{children:`The field is named by its label. The Show / Hide button's name says
what it does next and to which field ("Show password", "Hide new
password"), and its visible text is the start of that name.`}),`
`,(0,I.jsx)(t.li,{children:`The rules are part of the field's description, each ending "(met)" or
"(not met)", so they are read when the field gets focus; ticking one off
is not announced on every keystroke.`}),`
`,(0,I.jsx)(t.li,{children:`When the form is sent the field goes back to dots, so the browser does
not keep the password as plain text in its form history.`}),`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.code,{children:`autoComplete`}),` is `,(0,I.jsx)(t.code,{children:`current-password`}),` by default and should be
`,(0,I.jsx)(t.code,{children:`new-password`}),` where a password is chosen, so password managers fill or
suggest the right one.`]}),`
`,(0,I.jsx)(t.li,{children:`A disabled field disables its button too.`}),`
`]})]})]})]})}function F(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,I.jsx)(t,{...e,children:(0,I.jsx)(P,{...e})}):P(e)}var I;function L(){return(L=e((()=>{I=t(),r(),c(),d(),p(),h(),f(),m(),b(),C(),O()})))()}L();export{F as default};