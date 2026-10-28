import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-CaB3w3bd.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./SignUp.stories-DFMbErbK.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:s}),`
`,(0,h.jsx)(t.h1,{id:`sign-up`,children:`Sign Up`}),`
`,(0,h.jsxs)(t.p,{children:[`A sign-up page: the logo and the title, single sign-on buttons if you have
them, then full name, email and a new password with its rules, the terms
and a link back to sign in. After shadcn/ui's sign-up blocks and Carbon's
login pattern. Built on the `,(0,h.jsx)(t.strong,{children:`Auth Layout`}),` (see
`,(0,h.jsx)(t.a,{href:`?path=/docs/templates-auth-sign-in--docs#auth-layout`,children:`Sign In`}),`) and the
kit's TextInput, Checkbox, Link, Alert and Button.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/sign-up-template.json
`})}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`what-works`,children:`What works`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Single sign-on`}),`: as on Sign In, a full-width button per provider,
then an "or" line, then the form. `,(0,h.jsx)(t.code,{children:`onProviderSelect`}),` gets the `,(0,h.jsx)(t.code,{children:`id`}),`.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`One name field`}),`, "Full name", not first and last: names do not split
the same way everywhere. `,(0,h.jsx)(t.code,{children:`autocomplete="name"`}),` and `,(0,h.jsx)(t.code,{children:`"email"`}),` let the
browser fill them.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`A new password with its rules`}),`: the rules are listed under the field
from the start and ticked off as the reader types. The default is one
rule, at least 12 characters, with no rules about kinds of characters
(after NIST SP 800-63B); pass your own `,(0,h.jsx)(t.code,{children:`passwordRules`}),`. There is no
"confirm password" field: Show lets the reader check what they typed.
`,(0,h.jsx)(t.code,{children:`autocomplete="new-password"`}),` lets a password manager suggest one.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Terms`}),`: pass `,(0,h.jsx)(t.code,{children:`terms`}),`, the label with its links, and a checkbox the
reader must tick appears above the button. Leave it out and there is
none; put a line in `,(0,h.jsx)(t.code,{children:`footer`}),` instead if your terms need no consent.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Checks before sending`}),`: an empty field, an email with no `,(0,h.jsx)(t.code,{children:`@`}),`, an unmet
rule or unticked terms is marked with a message saying what to do, and
the first one gets focus. Typing clears a field's message. Valid values
go to `,(0,h.jsx)(t.code,{children:`onSignUp`}),`.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`The account cannot be made`}),`: `,(0,h.jsx)(t.code,{children:`onSignUp`}),` returns (or resolves to) a
message. It shows above the form and is announced; what was typed stays.
If `,(0,h.jsx)(t.code,{children:`onSignUp`}),` throws or rejects, the page says "Something went wrong. Try
again."`]}),`
`]}),`
`,(0,h.jsx)(a,{of:l}),`
`,(0,h.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Card`}),` (default) and `,(0,h.jsx)(t.strong,{children:`plain`}),`, and `,(0,h.jsx)(t.strong,{children:`with a panel`}),` through `,(0,h.jsx)(t.code,{children:`aside`}),`,
exactly as on Sign In: they are the Auth Layout's. Plain here is also
without single sign-on or terms, the fewest parts.`]}),`
`,(0,h.jsx)(a,{of:c}),`
`,(0,h.jsx)(t.h2,{id:`make-it-yours`,children:`Make it yours`}),`
`,(0,h.jsxs)(t.p,{children:[`Replace `,(0,h.jsx)(t.code,{children:`onSignUp`}),` with a call to your API and return its error message;
on success, send the reader on (to verify their email, or into the app).
Whether to say "An account with this email already exists" is your call:
it tells anyone which emails have accounts. Where that matters, accept
the sign-up and email the address instead.`]}),`
`,(0,h.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Prop`}),(0,h.jsx)(t.th,{children:`Values`}),(0,h.jsx)(t.th,{children:`Default`}),(0,h.jsx)(t.th,{})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`title`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactNode`})}),(0,h.jsx)(t.td,{children:`"Create your account"`}),(0,h.jsxs)(t.td,{children:[`The page's `,(0,h.jsx)(t.code,{children:`h1`}),`.`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`providers`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`{ id, label, icon? }[]`})}),(0,h.jsx)(t.td,{children:`none`}),(0,h.jsx)(t.td,{children:`Single sign-on and social buttons above the form.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`onProviderSelect`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`(id) => void`})}),(0,h.jsx)(t.td,{}),(0,h.jsx)(t.td,{children:`A provider's button was pressed.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`passwordRules`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`{ label, test(password) }[]`})}),(0,h.jsx)(t.td,{children:`at least 12 characters`}),(0,h.jsx)(t.td,{children:`Listed under the password and ticked off; all must pass to send.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`terms`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactNode`})}),(0,h.jsx)(t.td,{children:`none`}),(0,h.jsx)(t.td,{children:`The label of a checkbox the reader must tick.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`onSignUp`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`(values) => string | void | Promise<…>`})}),(0,h.jsx)(t.td,{}),(0,h.jsxs)(t.td,{children:[`Gets `,(0,h.jsx)(t.code,{children:`{ name, email, password, acceptedTerms }`}),` once the fields pass. A returned message shows above the form; the button is busy while a promise is pending.`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`signInHref`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`string`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`"#sign-in"`})}),(0,h.jsx)(t.td,{children:`Where "Already have an account? Sign in" goes.`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`footer`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactNode`})}),(0,h.jsx)(t.td,{}),(0,h.jsx)(t.td,{children:`Under the sign-in line, outside the card.`})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[`Every other Auth Layout prop passes through. The rules come from
`,(0,h.jsx)(t.code,{children:`PasswordInput`}),`'s `,(0,h.jsx)(t.code,{children:`rules`}),` prop, so a reset-password page can list the same
ones.`]}),`
`,(0,h.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,h.jsxs)(t.p,{children:[`The Auth Layout's, as on `,(0,h.jsx)(t.a,{href:`?path=/docs/templates-auth-sign-in--docs#layout`,children:`Sign In`}),`:
a column about 25rem wide in the middle of the page, the full width less
the padding on a phone, and a panel beside it from 64rem with `,(0,h.jsx)(t.code,{children:`aside`}),`. A
long title, rule or terms label wraps; nothing scrolls sideways.`]}),`
`,(0,h.jsx)(a,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`The form is in a `,(0,h.jsx)(t.code,{children:`main`}),` landmark, and its one heading is the `,(0,h.jsx)(t.code,{children:`h1`}),`.`]}),`
`,(0,h.jsxs)(t.li,{children:[`Every field has a visible label. An invalid field has
`,(0,h.jsx)(t.code,{children:`aria-invalid="true"`}),` and its message as its description, and the first
invalid field gets focus.`]}),`
`,(0,h.jsx)(t.li,{children:`The password rules are the field's description, each followed by
"(met)" or "(not met)" for a screen reader, so they are read with the
field. Ticking one off is not announced as you type; the tick and the
colour show it on screen.`}),`
`,(0,h.jsxs)(t.li,{children:[`The message from `,(0,h.jsx)(t.code,{children:`onSignUp`}),` is an `,(0,h.jsx)(t.code,{children:`alert`}),`, so it is announced. The
Create account button is `,(0,h.jsx)(t.code,{children:`aria-busy`}),` while it waits, a second press
sends nothing, and the single sign-on buttons are disabled.`]}),`
`,(0,h.jsx)(t.li,{children:`The terms checkbox's links are inside its label; pressing a link opens
it, pressing the rest of the label ticks the box.`}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),o(),u()})))()}g();export{m as default};