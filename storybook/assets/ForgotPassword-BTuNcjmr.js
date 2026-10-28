import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-CaB3w3bd.js";import{a as s,i as c,n as l,r as u,t as d}from"./ForgotPassword.stories-BNW5IA1C.js";import{a as f,i as p,n as m,t as h}from"./ResetPassword.stories-C48F4b4e.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{of:l}),`
`,(0,v.jsx)(t.h1,{id:`forgot-password`,children:`Forgot Password`}),`
`,(0,v.jsxs)(t.p,{children:[`Two pages for a forgotten password. `,(0,v.jsx)(t.strong,{children:`Forgot Password`}),` asks for the
email, then says to check it. `,(0,v.jsx)(t.strong,{children:`Reset Password`}),` is the page the emailed
link opens: a new password with its rules, then "Password changed". After
Carbon's login pattern. Built on the `,(0,v.jsx)(t.strong,{children:`Auth Layout`}),` (see
`,(0,v.jsx)(t.a,{href:`?path=/docs/templates-auth-sign-in--docs#auth-layout`,children:`Sign In`}),`), the
`,(0,v.jsx)(t.code,{children:`PasswordInput`}),` Sign Up uses, and the kit's TextInput, Link, Alert and
Button.`]}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/forgot-password-template.json
`})}),`
`,(0,v.jsx)(a,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`what-works`,children:`What works`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Step 1, the email`}),`: one field and Send reset link. An empty or
malformed email is marked with a message and keeps focus. The email,
trimmed, goes to `,(0,v.jsx)(t.code,{children:`onRequest`}),`.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Step 2, check your email`}),`: "If an account exists for …, we sent it a
link". It never says whether one does, so the page cannot be used to
find out who has an account. Focus moves to the new title.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Resend link`}),`: disabled for `,(0,v.jsx)(t.code,{children:`resendCooldown`}),` seconds (30 by default),
showing the time left, then sends to the same email and says so. A
failed resend shows why and starts no cooldown. It is the same button
as OTP Input's Resend code.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`No single sign-on buttons`}),`: an account that signs in with a provider
has no password here to reset.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Use a different email`}),` goes back to step 1 with the email filled in.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Step 3, a new password`}),` (Reset Password): the rules are listed under
the field and ticked off as the reader types, at least 12 characters by
default, as on Sign Up; pass your own `,(0,v.jsx)(t.code,{children:`passwordRules`}),`. There is no
"confirm password" field: Show lets the reader check what they typed.
Pass `,(0,v.jsx)(t.code,{children:`email`}),` to name the account and to let a password manager save the
new password under it.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Password changed`}),`: the form gives way to the title, a line and a Sign
in button; focus moves to the title.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`When it fails`}),`: `,(0,v.jsx)(t.code,{children:`onRequest`}),` and `,(0,v.jsx)(t.code,{children:`onChangePassword`}),` return (or resolve
to) a message, such as too many requests or an expired link. It shows
above the form and is announced. If they throw or reject, the page says
"Something went wrong. Try again."`]}),`
`]}),`
`,(0,v.jsx)(a,{of:c}),`
`,(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(a,{of:m}),`
`,(0,v.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Card`}),` (default) and `,(0,v.jsx)(t.strong,{children:`plain`}),`, and `,(0,v.jsx)(t.strong,{children:`with a panel`}),` through `,(0,v.jsx)(t.code,{children:`aside`}),`,
exactly as on Sign In: they are the Auth Layout's.`]}),`
`,(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(t.h2,{id:`make-it-yours`,children:`Make it yours`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`onRequest`}),` calls your API, which emails a link with a single-use token
when the account exists and does nothing when it does not; return a
message only for what the reader can act on (too many requests). Mount
`,(0,v.jsx)(t.code,{children:`ResetPassword`}),` on the page the link opens, read the token from the URL,
and send it with the password in `,(0,v.jsx)(t.code,{children:`onChangePassword`}),`; return a message
when the token is expired or used. A code instead of a link? Build step 2
with OTP Input, which has the same resend button.`]}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(t.h3,{id:`forgotpassword`,children:`ForgotPassword`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Prop`}),(0,v.jsx)(t.th,{children:`Values`}),(0,v.jsx)(t.th,{children:`Default`}),(0,v.jsx)(t.th,{})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`onRequest`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`(values) => string | void | Promise<…>`})}),(0,v.jsx)(t.td,{}),(0,v.jsxs)(t.td,{children:[`Gets `,(0,v.jsx)(t.code,{children:`{ email }`}),`, from the form and from Resend link. A returned message shows above the form and keeps the step; the button is busy while a promise is pending.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`resendCooldown`})}),(0,v.jsx)(t.td,{children:`seconds`}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`30`})}),(0,v.jsx)(t.td,{children:`Before Resend link is allowed, after each send.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`signInHref`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`string`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`"#sign-in"`})}),(0,v.jsx)(t.td,{children:`Where "Back to sign in" goes.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`footer`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`ReactNode`})}),(0,v.jsx)(t.td,{}),(0,v.jsx)(t.td,{children:`Under the Back to sign in link, outside the card.`})]})]})]}),`
`,(0,v.jsx)(t.h3,{id:`resetpassword`,children:`ResetPassword`}),`
`,(0,v.jsxs)(t.table,{children:[(0,v.jsx)(t.thead,{children:(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.th,{children:`Prop`}),(0,v.jsx)(t.th,{children:`Values`}),(0,v.jsx)(t.th,{children:`Default`}),(0,v.jsx)(t.th,{})]})}),(0,v.jsxs)(t.tbody,{children:[(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`email`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`string`})}),(0,v.jsx)(t.td,{}),(0,v.jsx)(t.td,{children:`The account the link is for: named under the title and given to password managers.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`passwordRules`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`{ label, test(password) }[]`})}),(0,v.jsx)(t.td,{children:`at least 12 characters`}),(0,v.jsx)(t.td,{children:`Listed under the password and ticked off; all must pass to send.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`onChangePassword`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`(values) => string | void | Promise<…>`})}),(0,v.jsx)(t.td,{}),(0,v.jsxs)(t.td,{children:[`Gets `,(0,v.jsx)(t.code,{children:`{ password }`}),` once the rules pass. A returned message shows above the form; otherwise the page says the password changed.`]})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`signInHref`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`string`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`"#sign-in"`})}),(0,v.jsx)(t.td,{children:`Where "Back to sign in" and Sign in go.`})]}),(0,v.jsxs)(t.tr,{children:[(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`footer`})}),(0,v.jsx)(t.td,{children:(0,v.jsx)(t.code,{children:`ReactNode`})}),(0,v.jsx)(t.td,{}),(0,v.jsx)(t.td,{children:`Under the form, outside the card.`})]})]})]}),`
`,(0,v.jsxs)(t.p,{children:[`The title and the line under it change with the step, so neither takes
`,(0,v.jsx)(t.code,{children:`title`}),` or `,(0,v.jsx)(t.code,{children:`description`}),`. Every other Auth Layout prop passes through.`]}),`
`,(0,v.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,v.jsxs)(t.p,{children:[`The Auth Layout's, as on `,(0,v.jsx)(t.a,{href:`?path=/docs/templates-auth-sign-in--docs#layout`,children:`Sign In`}),`.
A long email wraps; nothing scrolls sideways.`]}),`
`,(0,v.jsx)(a,{of:u}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`The form is in a `,(0,v.jsx)(t.code,{children:`main`}),` landmark, and its one heading is the `,(0,v.jsx)(t.code,{children:`h1`}),`.`]}),`
`,(0,v.jsxs)(t.li,{children:[`When a step replaces the form (Check your email, Password changed), focus
moves to the new `,(0,v.jsx)(t.code,{children:`h1`}),`, so a screen reader reads the page from there and
focus is not left on a button that is gone. Use a different email puts
focus back in the email field.`]}),`
`,(0,v.jsxs)(t.li,{children:[`An invalid field has `,(0,v.jsx)(t.code,{children:`aria-invalid="true"`}),` and its message as its
description, and gets focus.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Resend link is disabled during the cooldown and its name carries the time
left. After a resend, "We sent another link" is a `,(0,v.jsx)(t.code,{children:`status`}),`, announced
politely, and focus moves to the `,(0,v.jsx)(t.code,{children:`h1`}),` because the button is disabled
again.`]}),`
`,(0,v.jsxs)(t.li,{children:[`The password rules are the field's description, each followed by "(met)"
or "(not met)". The message from `,(0,v.jsx)(t.code,{children:`onRequest`}),` or `,(0,v.jsx)(t.code,{children:`onChangePassword`}),` is an
`,(0,v.jsx)(t.code,{children:`alert`}),`, and the button is `,(0,v.jsx)(t.code,{children:`aria-busy`}),` while it waits.`]}),`
`,(0,v.jsxs)(t.li,{children:[`The email for password managers is a `,(0,v.jsx)(t.code,{children:`hidden`}),` input: out of the tab order
and the accessibility tree.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),o(),s(),f()})))()}y();export{_ as default};