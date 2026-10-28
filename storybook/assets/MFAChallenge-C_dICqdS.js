import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-CaB3w3bd.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./MFAChallenge.stories-DH_gXHKM.js";function h(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(t.h1,{id:`mfa-challenge`,children:`MFA Challenge`}),`
`,(0,_.jsxs)(t.p,{children:[`The second step of signing in: the reader enters a one-time code from
their authenticator app, or the one sent to their phone or email. `,(0,_.jsx)(t.strong,{children:`Try
another way`}),` switches method, and a `,(0,_.jsx)(t.strong,{children:`backup code`}),` gets them in when
none is at hand. After Carbon's login pattern and shadcn's Input OTP.
Built on the `,(0,_.jsx)(t.strong,{children:`Auth Layout`}),` (see
`,(0,_.jsx)(t.a,{href:`?path=/docs/templates-auth-sign-in--docs#auth-layout`,children:`Sign In`}),`), `,(0,_.jsx)(t.strong,{children:`OTP
Input`}),` with its Resend code, and the kit's TextInput, Checkbox, Link,
Alert and Button.`]}),`
`,(0,_.jsxs)(t.p,{children:[`Show it after the password, from `,(0,_.jsx)(t.strong,{children:`Sign In`}),` or `,(0,_.jsx)(t.strong,{children:`Progressive Sign In`}),`,
when the account has a second factor. Setting one up (the QR code, the
first backup codes) is a separate screen.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/mfa-challenge-template.json
`})}),`
`,(0,_.jsx)(a,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`what-works`,children:`What works`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`The code`}),`: six cells by default (`,(0,_.jsx)(t.code,{children:`codeLength`}),`). Typing or pasting the
last digit sends the form; `,(0,_.jsx)(t.strong,{children:`Verify`}),` does too, and with cells empty it
marks the field and says what is missing. `,(0,_.jsx)(t.code,{children:`onVerify`}),` gets the method's
`,(0,_.jsx)(t.code,{children:`id`}),`, the code and `,(0,_.jsx)(t.strong,{children:`Remember this device`}),`.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Where the code went`}),`: the line under the title follows the method.
An authenticator app: "Enter the 6-digit code from your authenticator
app." A text message or an email: "We sent a 6-digit code to •••• 4821",
with the destination as you pass it (mask it yourself), and `,(0,_.jsx)(t.strong,{children:`Resend
code`}),` under the cells, counting down from `,(0,_.jsx)(t.code,{children:`resendCooldown`}),` seconds,
calling `,(0,_.jsx)(t.code,{children:`onResend`}),` and saying the new code went out.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Try another way`}),`, when the account has more than one method: the
other methods ("Authenticator app", "Text message to •••• 4821", "Email
to a•••@example.com") and `,(0,_.jsx)(t.strong,{children:`Back`}),`. Picking one calls `,(0,_.jsx)(t.code,{children:`onMethodSelect`}),`,
where you send its code, then shows its code step. A resend still on its
way when the reader moves on is ignored.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Use a backup code`}),`: a plain text field, since backup codes are longer
and often have letters and a dash. `,(0,_.jsx)(t.code,{children:`onVerify`}),` gets it as method
`,(0,_.jsx)(t.code,{children:`'backup'`}),`, trimmed. `,(0,_.jsx)(t.strong,{children:`Use a verification code instead`}),` goes back.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Remember this device for 30 days`}),`: the template stores nothing. When
`,(0,_.jsx)(t.code,{children:`rememberDevice`}),` is true, set your trusted-device cookie for
`,(0,_.jsx)(t.code,{children:`rememberDeviceDays`}),`, and skip this page next time.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`When it fails`}),`: every handler returns (or resolves to) a message. It
shows above the form and is announced; a wrong code is cleared and the
first cell focused. If a handler throws or rejects, the page says
"Something went wrong. Try again."`]}),`
`]}),`
`,(0,_.jsx)(a,{of:d}),`
`,(0,_.jsx)(a,{of:p}),`
`,(0,_.jsx)(a,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Card`}),` (default) and `,(0,_.jsx)(t.strong,{children:`plain`}),`, and `,(0,_.jsx)(t.strong,{children:`with a panel`}),` through `,(0,_.jsx)(t.code,{children:`aside`}),`,
exactly as on Sign In: they are the Auth Layout's. With one method and
`,(0,_.jsx)(t.code,{children:`hasBackupCode={false}`}),`, there are no other ways in to offer.`]}),`
`,(0,_.jsx)(a,{of:l}),`
`,(0,_.jsx)(t.h2,{id:`make-it-yours`,children:`Make it yours`}),`
`,(0,_.jsxs)(t.p,{children:[`Pass the account's methods in the order you want, the default (the one
the reader set up first, or used last) first. Rate-limit `,(0,_.jsx)(t.code,{children:`onVerify`}),`,
`,(0,_.jsx)(t.code,{children:`onResend`}),` and `,(0,_.jsx)(t.code,{children:`onMethodSelect`}),` on the server and return the message
("Too many attempts. Try again in 15 minutes."): the page shows it as it
is. After `,(0,_.jsx)(t.code,{children:`onVerify`}),` succeeds, navigate on.`]}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Prop`}),(0,_.jsx)(t.th,{children:`Values`}),(0,_.jsx)(t.th,{children:`Default`}),(0,_.jsx)(t.th,{})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`methods`})}),(0,_.jsxs)(t.td,{children:[(0,_.jsx)(t.code,{children:`{ id, kind: 'app' }`}),` or `,(0,_.jsx)(t.code,{children:`{ id, kind: 'sms' | 'email', destination }`}),`, in an array`]}),(0,_.jsx)(t.td,{}),(0,_.jsx)(t.td,{children:`The account's second factors; the first shows first.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`onVerify`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`(values) => string | void | Promise<…>`})}),(0,_.jsx)(t.td,{}),(0,_.jsxs)(t.td,{children:[`Gets `,(0,_.jsx)(t.code,{children:`{ method, code, rememberDevice }`}),`; `,(0,_.jsx)(t.code,{children:`method`}),` is an `,(0,_.jsx)(t.code,{children:`id`}),` or `,(0,_.jsx)(t.code,{children:`'backup'`}),`. A returned message shows above the form.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`onResend`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`(method) => string | void | Promise<…>`})}),(0,_.jsx)(t.td,{}),(0,_.jsxs)(t.td,{children:[`Resend code, for `,(0,_.jsx)(t.code,{children:`sms`}),` and `,(0,_.jsx)(t.code,{children:`email`}),`.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`onMethodSelect`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`(method) => string | void | Promise<…>`})}),(0,_.jsx)(t.td,{}),(0,_.jsx)(t.td,{children:`A method picked under Try another way. A returned message keeps the list.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`codeLength`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`number`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`6`})}),(0,_.jsx)(t.td,{children:`Digits in a code.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`resendCooldown`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`number`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`30`})}),(0,_.jsx)(t.td,{children:`Seconds before Resend code is allowed.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`hasRememberDevice`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`boolean`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`true`})}),(0,_.jsx)(t.td,{children:`Shows Remember this device.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`rememberDeviceDays`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`number`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`30`})}),(0,_.jsx)(t.td,{children:`The days in its label.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`hasBackupCode`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`boolean`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`true`})}),(0,_.jsx)(t.td,{children:`Shows Use a backup code.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`signInHref`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`string`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`"#sign-in"`})}),(0,_.jsx)(t.td,{children:`Back to sign in, under the form.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`footer`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`ReactNode`})}),(0,_.jsx)(t.td,{}),(0,_.jsx)(t.td,{children:`Under Back to sign in, outside the card.`})]})]})]}),`
`,(0,_.jsx)(t.p,{children:`Every other Auth Layout prop passes through.`}),`
`,(0,_.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,_.jsxs)(t.p,{children:[`The Auth Layout's, as on `,(0,_.jsx)(t.a,{href:`?path=/docs/templates-auth-sign-in--docs#layout`,children:`Sign In`}),`.
On a phone the six cells fit the column, and Try another way and Use a
backup code wrap onto two lines when they must.`]}),`
`,(0,_.jsx)(a,{of:s}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`The form is in a `,(0,_.jsx)(t.code,{children:`main`}),` landmark, and its one heading is the `,(0,_.jsx)(t.code,{children:`h1`}),`.`]}),`
`,(0,_.jsxs)(t.li,{children:[`The cells are a group named "Verification code"; the first cell has
`,(0,_.jsx)(t.code,{children:`autocomplete="one-time-code"`}),`, so the phone offers a code from a text
message.`]}),`
`,(0,_.jsxs)(t.li,{children:[`An incomplete code marks the cells `,(0,_.jsx)(t.code,{children:`aria-invalid="true"`}),`, describes the
group with the message and focuses the first cell; an empty backup code
does the same on its field.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Each step replaces the last, so focus moves on: to the first cell, to
the backup code field, or to the new `,(0,_.jsx)(t.code,{children:`h1`}),` on the list of methods.`]}),`
`,(0,_.jsxs)(t.li,{children:[`A message from a handler is an `,(0,_.jsx)(t.code,{children:`alert`}),`, the "new code sent" note a
`,(0,_.jsx)(t.code,{children:`status`}),`, and Verify is `,(0,_.jsx)(t.code,{children:`aria-busy`}),` while it waits.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),o(),c()})))()}v();export{g as default};