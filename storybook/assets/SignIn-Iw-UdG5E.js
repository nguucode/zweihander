import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,r as a,u as o}from"./blocks-CaB3w3bd.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./SignIn.stories-i1FzR0aE.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(t.h1,{id:`sign-in`,children:`Sign In`}),`
`,(0,g.jsxs)(t.p,{children:[`A sign-in page: the logo and the title, single sign-on buttons if you have
them, then email and password. After Tailwind UI's sign-in screens,
shadcn/ui's login blocks and Carbon's login pattern. Built on the `,(0,g.jsx)(t.strong,{children:`Auth
Layout`}),`, the frame the other auth screens (sign up, reset password,
multi-factor) share, and the kit's TextInput, Checkbox, Link, Alert and
Button.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/sign-in-template.json
`})}),`
`,(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`what-works`,children:`What works`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Single sign-on`}),`: a full-width button per provider, then an "or" line,
then the form. `,(0,g.jsx)(t.code,{children:`onProviderSelect`}),` gets the provider's `,(0,g.jsx)(t.code,{children:`id`}),`; send the
reader to your identity provider from there.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Email and password`}),`: Show reveals the password and turns into Hide;
sending the form hides it again, so the browser does not keep it as
plain text. The fields carry `,(0,g.jsx)(t.code,{children:`autocomplete="username"`}),` and
`,(0,g.jsx)(t.code,{children:`"current-password"`}),`, so password managers fill them.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Checks before sending`}),`: an empty field, or an email with no `,(0,g.jsx)(t.code,{children:`@`}),`, is
marked with a message saying what to do, and the first one gets focus.
Typing in a field clears its message. Valid values go to `,(0,g.jsx)(t.code,{children:`onSignIn`}),`.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Wrong credentials`}),`: `,(0,g.jsx)(t.code,{children:`onSignIn`}),` returns (or resolves to) a message. It
shows above the form and is announced, the password is cleared and
focused, the email kept. Say "The email or password is incorrect", not
which one: naming it tells an attacker which emails have accounts. If
`,(0,g.jsx)(t.code,{children:`onSignIn`}),` throws or rejects, the page says "Something went wrong. Try
again." instead.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Keep me signed in`}),`, `,(0,g.jsx)(t.strong,{children:`Forgot password?`}),` and `,(0,g.jsx)(t.strong,{children:`Sign up`}),` are links and a
checkbox; drop the checkbox with `,(0,g.jsx)(t.code,{children:`hasRememberMe={false}`}),` and the link
with no `,(0,g.jsx)(t.code,{children:`signUpHref`}),`.`]}),`
`]}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Card`}),` (default): the form in a card on the Theme's canvas. The most
common in business software; it reads as a step apart from the app.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Plain`}),`: the form straight on the canvas, for a quieter page or a canvas
that is already a colour or an image. Here also without single sign-on,
Keep me signed in or sign-up, as where accounts come by invitation.`]}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`With a panel`}),`: `,(0,g.jsx)(t.code,{children:`aside`}),` puts a panel beside the form from 64rem of the
page's width: a picture, a customer quote, what is new. The form keeps the
left half and lines up at its start.`]}),`
`,(0,g.jsx)(a,{of:s}),`
`,(0,g.jsx)(t.h2,{id:`make-it-yours`,children:`Make it yours`}),`
`,(0,g.jsxs)(t.p,{children:[`Replace `,(0,g.jsx)(t.code,{children:`onSignIn`}),` with a call to your API and return its error message;
on success, navigate away. `,(0,g.jsx)(t.code,{children:`providers`}),` takes `,(0,g.jsx)(t.code,{children:`{ id, label, icon }`}),`: the
label is the whole button text ("Continue with Google", "Sign in with
SSO"), the icon the provider's mark. The kit ships no brand marks.`]}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`title`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{children:`"Sign in to your account"`}),(0,g.jsxs)(t.td,{children:[`The page's `,(0,g.jsx)(t.code,{children:`h1`}),`.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`providers`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`{ id, label, icon? }[]`})}),(0,g.jsx)(t.td,{children:`none`}),(0,g.jsx)(t.td,{children:`Single sign-on and social buttons above the form.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`onProviderSelect`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`(id) => void`})}),(0,g.jsx)(t.td,{}),(0,g.jsx)(t.td,{children:`A provider's button was pressed.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`onSignIn`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`(values) => string | void | Promise<…>`})}),(0,g.jsx)(t.td,{}),(0,g.jsxs)(t.td,{children:[`Gets `,(0,g.jsx)(t.code,{children:`{ email, password, remember }`}),` once the fields pass. A returned message shows above the form; the button is busy while a promise is pending.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`hasRememberMe`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`boolean`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`true`})}),(0,g.jsx)(t.td,{children:`Shows "Keep me signed in".`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`forgotPasswordHref`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`string`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`"#forgot-password"`})}),(0,g.jsx)(t.td,{children:`Where "Forgot password?" goes.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`signUpHref`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`string`})}),(0,g.jsx)(t.td,{children:`none`}),(0,g.jsx)(t.td,{children:`Shows "No account? Sign up".`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`footer`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{}),(0,g.jsx)(t.td,{children:`Under the sign-up line, outside the card: legal links, "Ask your administrator".`})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`Every other Auth Layout prop below passes through; `,(0,g.jsx)(t.code,{children:`children`}),` is the
page's form.`]}),`
`,(0,g.jsx)(t.h2,{id:`auth-layout`,children:`Auth Layout`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`AuthLayout`}),` (in `,(0,g.jsx)(t.code,{children:`AuthLayout.tsx`}),`) is the frame: the logo, an `,(0,g.jsx)(t.code,{children:`h1`}),`, an
optional line under it, the form and a footer, in one column about 25rem
wide, centred on the canvas. Every auth screen uses it, so they line up
with each other. It owns no state. The same file exports `,(0,g.jsx)(t.code,{children:`AuthDivider`}),`,
the "or" line. The password field with Show / Hide is the kit's
`,(0,g.jsx)(t.a,{href:`?path=/docs/components-inputs-passwordinput--docs`,children:`Password Input`}),` (pass `,(0,g.jsx)(t.code,{children:`autoComplete="new-password"`}),` where the password is being chosen;
its button is named after a text `,(0,g.jsx)(t.code,{children:`label`}),`, "Show confirm password", so two
on one page differ).`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/auth-layout.json
`})}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Values`}),(0,g.jsx)(t.th,{children:`Default`}),(0,g.jsx)(t.th,{})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`brand`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{}),(0,g.jsx)(t.td,{children:`The logo, above the title.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`title`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{children:`required`}),(0,g.jsxs)(t.td,{children:[`The page's `,(0,g.jsx)(t.code,{children:`h1`}),`.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`description`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{}),(0,g.jsx)(t.td,{children:`A line under the title.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`appearance`})}),(0,g.jsxs)(t.td,{children:[(0,g.jsx)(t.code,{children:`card`}),`, `,(0,g.jsx)(t.code,{children:`plain`})]}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`card`})}),(0,g.jsxs)(t.td,{children:[`The form in a card, or straight on the canvas. Ignored with `,(0,g.jsx)(t.code,{children:`aside`}),`.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`aside`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{}),(0,g.jsx)(t.td,{children:`A panel beside the form from 64rem; hidden below.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`asideLabel`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`string`})}),(0,g.jsx)(t.td,{}),(0,g.jsx)(t.td,{children:`The panel's accessible name, when it says something.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`footer`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{}),(0,g.jsx)(t.td,{children:`Under the form, outside the card.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`children`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{children:`required`}),(0,g.jsx)(t.td,{children:`The form.`})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`Any other prop goes to the root, e.g. `,(0,g.jsx)(t.code,{children:`style`}),` to set its `,(0,g.jsx)(t.code,{children:`min-block-size`}),`
when the page is not the whole viewport.`]}),`
`,(0,g.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`The page fills the viewport and the column sits in its middle, both
ways. It is about 25rem wide; on a phone it takes the full width less
the page's padding. A long title with no spaces wraps; nothing scrolls
sideways.`}),`
`,(0,g.jsxs)(t.li,{children:[`With `,(0,g.jsx)(t.code,{children:`aside`}),`, from 64rem of the page's width the form and the panel
take half each and the heading lines up at the start. Below 64rem the
panel is hidden and the page is the centred column again, so put nothing
in the panel the reader needs. An `,(0,g.jsx)(t.code,{children:`<img>`}),` in it fills the panel.`]}),`
`,(0,g.jsx)(t.li,{children:`"Keep me signed in" and "Forgot password?" share a row while they fit;
the link drops under the checkbox when they do not.`}),`
`]}),`
`,(0,g.jsx)(a,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`The form is in a `,(0,g.jsx)(t.code,{children:`main`}),` landmark, and its one heading is the `,(0,g.jsx)(t.code,{children:`h1`}),`. The
panel is a `,(0,g.jsx)(t.code,{children:`complementary`}),` landmark after `,(0,g.jsx)(t.code,{children:`main`}),`, named by `,(0,g.jsx)(t.code,{children:`asideLabel`}),`;
a panel that is only a picture should hold an `,(0,g.jsx)(t.code,{children:`<img alt="">`}),`.`]}),`
`,(0,g.jsx)(t.li,{children:`The single sign-on buttons come before the form in reading and focus
order, as they do on screen.`}),`
`,(0,g.jsxs)(t.li,{children:[`Every field has a visible label. An invalid field has
`,(0,g.jsx)(t.code,{children:`aria-invalid="true"`}),` and its message as its description, and the first
invalid field gets focus.`]}),`
`,(0,g.jsxs)(t.li,{children:[`The message from `,(0,g.jsx)(t.code,{children:`onSignIn`}),` is an `,(0,g.jsx)(t.code,{children:`alert`}),`, so it is announced; focus
moves to the cleared password. The Sign in button is `,(0,g.jsx)(t.code,{children:`aria-busy`}),` while
it waits, and a second press sends nothing.`]}),`
`,(0,g.jsx)(t.li,{children:`The Show button is named "Show password", then "Hide password" (after
the field's label): its visible text is part of its name, as voice
control needs.`}),`
`,(0,g.jsx)(t.li,{children:`The single sign-on buttons are disabled while a sign-in is pending.`}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),o(),f()})))()}_();export{h as default};