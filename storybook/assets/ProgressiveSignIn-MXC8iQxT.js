import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-CaB3w3bd.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./ProgressiveSignIn.stories-gjTawm1i.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(t.h1,{id:`progressive-sign-in`,children:`Progressive Sign In`}),`
`,(0,g.jsxs)(t.p,{children:[`A sign-in page that asks for the email first and only then decides how
the account signs in: accounts whose organization uses single sign-on go
to their identity provider, the rest are asked for a password. After
Carbon's login pattern. Built on the `,(0,g.jsx)(t.strong,{children:`Auth Layout`}),` (see
`,(0,g.jsx)(t.a,{href:`?path=/docs/templates-auth-sign-in--docs#auth-layout`,children:`Sign In`}),`), its
`,(0,g.jsx)(t.code,{children:`PasswordInput`}),` and `,(0,g.jsx)(t.code,{children:`AuthProviders`}),`, and the kit's TextInput, Checkbox,
Spinner, Link, Alert and Button.`]}),`
`,(0,g.jsxs)(t.p,{children:[`Use it when some of your customers sign in through their company's
identity provider (Okta, Entra ID, Google Workspace): they never see a
password field they cannot use. Where everyone signs in with a password,
use `,(0,g.jsx)(t.strong,{children:`Sign In`}),`, which asks for both at once.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/progressive-sign-in-template.json
`})}),`
`,(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`what-works`,children:`What works`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Step 1, the email`}),`: one field, `,(0,g.jsx)(t.strong,{children:`Remember my email`}),` and Continue. An
empty or malformed email is marked with a message and keeps focus. The
email, trimmed, goes to `,(0,g.jsx)(t.code,{children:`onContinue`}),`, which returns the route.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`The route is yours`}),`: `,(0,g.jsx)(t.code,{children:`onContinue`}),` looks the account up (by the
domain, say) and returns nothing for a password, `,(0,g.jsx)(t.code,{children:`{ sso: 'Okta' }`}),` for
single sign-on, or a message such as "This account is locked".`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Step 2, a password`}),`: "Signing in as …" with `,(0,g.jsx)(t.strong,{children:`Change`}),`, the password
with Show / Hide, Forgot password? and Sign in. Focus moves to the
password. The email is also in a hidden field, so a password manager
fills and saves the right account. `,(0,g.jsx)(t.code,{children:`onSignIn`}),` gets the email, Remember
my email and the password.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Step 2, single sign-on`}),`: the title says where the reader is going,
with a spinner and the email, while your redirect loads. `,(0,g.jsx)(t.strong,{children:`Use a
different email`}),` goes back; it cannot stop a redirect that is already
loading, so it is for when the provider does not answer.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Change`}),` and `,(0,g.jsx)(t.strong,{children:`Use a different email`}),` go back to step 1 with the email
filled in and focused.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Remember my email`}),`: the template does not store anything. Store the
email when `,(0,g.jsx)(t.code,{children:`rememberEmail`}),` is true and pass it back as `,(0,g.jsx)(t.code,{children:`defaultEmail`}),`;
the field then starts filled in and the box ticked.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Social buttons`}),`: `,(0,g.jsx)(t.code,{children:`providers`}),` puts them above the email on step 1, as
on Sign In. They are for consumer identities (Google, Microsoft), not a
company's single sign-on, which the email routes to.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`When it fails`}),`: `,(0,g.jsx)(t.code,{children:`onContinue`}),` and `,(0,g.jsx)(t.code,{children:`onSignIn`}),` return (or resolve to) a
message. It shows above the form and is announced; a wrong password is
cleared and focused. If they throw or reject, the page says "Something
went wrong. Try again."`]}),`
`]}),`
`,(0,g.jsx)(a,{of:l}),`
`,(0,g.jsx)(a,{of:s}),`
`,(0,g.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Card`}),` (default) and `,(0,g.jsx)(t.strong,{children:`plain`}),`, and `,(0,g.jsx)(t.strong,{children:`with a panel`}),` through `,(0,g.jsx)(t.code,{children:`aside`}),`,
exactly as on Sign In: they are the Auth Layout's.`]}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`make-it-yours`,children:`Make it yours`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`onContinue`}),` calls your API with the email, which answers with the
account's sign-in method; for single sign-on, start the redirect (to
your identity provider's authorize URL) and return `,(0,g.jsx)(t.code,{children:`{ sso }`}),` with its
name for the page to show. Answer the same for an email with no account
as for one with a password, so the page cannot be used to find out who
has an account: the wrong password message then covers both. After
`,(0,g.jsx)(t.code,{children:`onSignIn`}),` succeeds, navigate on, or show a second factor.`]}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`onContinue`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`(values) => string | void | { sso } | Promise<…>`})}),(0,g.jsx)(t.td,{}),(0,g.jsxs)(t.td,{children:[`Gets `,(0,g.jsx)(t.code,{children:`{ email, rememberEmail }`}),`. Nothing: the password step. `,(0,g.jsx)(t.code,{children:`{ sso: name }`}),`: the single sign-on step. A string: a message above the form.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`onSignIn`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`(values) => string | void | Promise<…>`})}),(0,g.jsx)(t.td,{}),(0,g.jsxs)(t.td,{children:[`Gets `,(0,g.jsx)(t.code,{children:`{ email, rememberEmail, password }`}),`. A returned message shows above the form.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`defaultEmail`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`string`})}),(0,g.jsx)(t.td,{}),(0,g.jsx)(t.td,{children:`A remembered email: fills the field and ticks Remember my email.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`hasRememberEmail`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`boolean`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`true`})}),(0,g.jsx)(t.td,{children:`Shows Remember my email.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`providers`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`{ id, label, icon? }[]`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`[]`})}),(0,g.jsx)(t.td,{children:`Social buttons above the email, with an "or" line.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`onProviderSelect`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`(id) => void`})}),(0,g.jsx)(t.td,{}),(0,g.jsxs)(t.td,{children:[`Called with the button's `,(0,g.jsx)(t.code,{children:`id`}),`.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`title`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`"Sign in to your account"`})}),(0,g.jsxs)(t.td,{children:[`The `,(0,g.jsx)(t.code,{children:`h1`}),` of the email and password steps.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`forgotPasswordHref`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`string`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`"#forgot-password"`})}),(0,g.jsx)(t.td,{children:`On the password step.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`signUpHref`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`string`})}),(0,g.jsx)(t.td,{}),(0,g.jsx)(t.td,{children:`Shows "No account? Sign up". Leave it out where accounts are by invitation.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`footer`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{}),(0,g.jsx)(t.td,{children:`Under the form, outside the card.`})]})]})]}),`
`,(0,g.jsx)(t.p,{children:`Every other Auth Layout prop passes through.`}),`
`,(0,g.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,g.jsxs)(t.p,{children:[`The Auth Layout's, as on `,(0,g.jsx)(t.a,{href:`?path=/docs/templates-auth-sign-in--docs#layout`,children:`Sign In`}),`.
A long email wraps, and Change drops under it; nothing scrolls sideways.`]}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`The form is in a `,(0,g.jsx)(t.code,{children:`main`}),` landmark, and its one heading is the `,(0,g.jsx)(t.code,{children:`h1`}),`.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Continue replaces the email with the next step, so focus moves on: to
the password, or to the new `,(0,g.jsx)(t.code,{children:`h1`}),` on the single sign-on step, where the
spinner's "Taking you to …" is a `,(0,g.jsx)(t.code,{children:`status`}),`. Change and Use a different
email put focus back in the email field.`]}),`
`,(0,g.jsx)(t.li,{children:`Change is named "Change email".`}),`
`,(0,g.jsxs)(t.li,{children:[`An invalid field has `,(0,g.jsx)(t.code,{children:`aria-invalid="true"`}),` and its message as its
description, and gets focus.`]}),`
`,(0,g.jsxs)(t.li,{children:[`The message from `,(0,g.jsx)(t.code,{children:`onContinue`}),` or `,(0,g.jsx)(t.code,{children:`onSignIn`}),` is an `,(0,g.jsx)(t.code,{children:`alert`}),`, and the button
is `,(0,g.jsx)(t.code,{children:`aria-busy`}),` while it waits.`]}),`
`,(0,g.jsxs)(t.li,{children:[`The email for password managers is a `,(0,g.jsx)(t.code,{children:`hidden`}),` input: out of the tab order
and the accessibility tree.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),o(),f()})))()}_();export{h as default};