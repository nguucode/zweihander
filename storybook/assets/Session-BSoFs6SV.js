import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./Session.stories-C7b-myAf.js";function g(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(t.h1,{id:`session`,children:`Session`}),`
`,(0,v.jsxs)(t.p,{children:[`The two ends of a session: `,(0,v.jsx)(t.strong,{children:`Session Timeout`}),`, the warning a minute
before an idle session ends, and `,(0,v.jsx)(t.strong,{children:`Signed Out`}),`, the page the reader lands
on after it ends, with the account they were signed in to and `,(0,v.jsx)(t.strong,{children:`Sign in
again`}),`. After Carbon's login pattern. Built on
`,(0,v.jsx)(t.a,{href:`?path=/docs/overlays-modal--docs`,children:`Modal`}),` (as an alert dialog), the `,(0,v.jsx)(t.strong,{children:`Auth
Layout`}),` (see `,(0,v.jsx)(t.a,{href:`?path=/docs/templates-auth-sign-in--docs#auth-layout`,children:`Sign In`}),`),
Button and Link.`]}),`
`,(0,v.jsx)(t.p,{children:`Neither part knows about sessions. The app tracks inactivity, opens the
warning, extends or ends the session from its buttons, and picks the
reason the signed-out page gives.`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/session.json
`})}),`
`,(0,v.jsx)(t.h2,{id:`session-timeout-warning`,children:`Session timeout warning`}),`
`,(0,v.jsxs)(t.p,{children:[`Open it `,(0,v.jsx)(t.code,{children:`countdown`}),` seconds (60 by default) before an idle session ends.
The time left counts down in the sentence. `,(0,v.jsx)(t.strong,{children:`Stay signed in`}),` has focus,
since that is what most readers want; it and Escape call `,(0,v.jsx)(t.code,{children:`onContinue`}),`,
where you extend the session and close the warning. `,(0,v.jsx)(t.strong,{children:`Sign out`}),` calls
`,(0,v.jsx)(t.code,{children:`onSignOut`}),`. At zero, `,(0,v.jsx)(t.code,{children:`onExpire`}),` (or `,(0,v.jsx)(t.code,{children:`onSignOut`}),` when you leave it out):
sign out and show Signed Out with reason `,(0,v.jsx)(t.code,{children:`inactive`}),`.`]}),`
`,(0,v.jsx)(o,{of:c}),`
`,(0,v.jsxs)(t.p,{children:[`Keep `,(0,v.jsx)(t.code,{children:`countdown`}),` at 20 seconds or more: WCAG 2.2.1 (Timing Adjustable)
asks for a warning and at least 20 seconds to extend with a simple action.
The countdown runs to a fixed end, so a background tab, whose timers the
browser slows down, still ends on time. Closing and reopening it starts
the count again.`]}),`
`,(0,v.jsx)(t.h2,{id:`signed-out`,children:`Signed out`}),`
`,(0,v.jsxs)(t.p,{children:[`The page after a session ends, with a title and a line for the `,(0,v.jsx)(t.code,{children:`reason`}),`:`]}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`signed-out`}),` (default): the reader pressed Sign out.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`inactive`}),`: the warning ran out.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`expired`}),`: the server ended the session, for example a token reached
its lifetime.`]}),`
`]}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(t.h3,{id:`remembered-account`,children:`Remembered account`}),`
`,(0,v.jsxs)(t.p,{children:[`Pass `,(0,v.jsx)(t.code,{children:`account`}),` (an email or a username, masked if you need to) to say which
account `,(0,v.jsx)(t.strong,{children:`Sign in again`}),` is for, and carry it in `,(0,v.jsx)(t.code,{children:`signInHref`}),` so the reader
only types a password: `,(0,v.jsx)(t.a,{href:`?path=/docs/templates-auth-progressive-sign-in--docs`,children:`Progressive Sign In`}),`
takes it as `,(0,v.jsx)(t.code,{children:`defaultEmail`}),`, which is also where its `,(0,v.jsx)(t.strong,{children:`Remember my email`}),`
comes back. `,(0,v.jsx)(t.code,{children:`otherAccountHref`}),` adds `,(0,v.jsx)(t.strong,{children:`Use another account`}),`. Leave
`,(0,v.jsx)(t.code,{children:`account`}),` out after a deliberate sign out on a shared computer.`]}),`
`,(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(t.h3,{id:`signed-out-1`,children:`Signed Out`}),`
`,(0,v.jsx)(a,{of:p}),`
`,(0,v.jsxs)(t.p,{children:[`Every other Auth Layout prop (`,(0,v.jsx)(t.code,{children:`brand`}),`, `,(0,v.jsx)(t.code,{children:`appearance`}),`, `,(0,v.jsx)(t.code,{children:`aside`}),`, `,(0,v.jsx)(t.code,{children:`footer`}),`) and
`,(0,v.jsx)(t.code,{children:`<div>`}),` attribute passes through.`]}),`
`,(0,v.jsx)(t.h3,{id:`session-timeout`,children:`Session Timeout`}),`
`,(0,v.jsx)(a,{of:m}),`
`,(0,v.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Session Timeout`}),` is a small (24rem) modal, never wider than the
screen. The buttons sit at the end of the footer, Stay signed in last.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Signed Out`}),` follows the Auth Layout: one 25rem column centred on the
canvas, in a card by default. A long account breaks anywhere instead of
pushing the page sideways at 320px.`]}),`
`]}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`The warning is an `,(0,v.jsx)(t.code,{children:`alertdialog`}),` named by its title and described by its
sentence, so a screen reader reads the time left once, when it opens.
The time is a `,(0,v.jsx)(t.code,{children:`timer`}),`, which is not a live region: it does not announce
every second.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Focus moves to `,(0,v.jsx)(t.strong,{children:`Stay signed in`}),` when the warning opens, and back to
where it was when it closes. Enter keeps the session; Escape does too.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Signed Out has one `,(0,v.jsx)(t.code,{children:`h1`}),`, the reason, inside `,(0,v.jsx)(t.code,{children:`main`}),`. `,(0,v.jsx)(t.strong,{children:`Sign in again`}),` is
the first control in the page, before Use another account.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),s(),f(),l()})))()}y();export{_ as default};