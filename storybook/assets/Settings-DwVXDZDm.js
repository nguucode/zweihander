import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,n as a,r as o,u as s}from"./blocks-CaB3w3bd.js";import{a as c,i as l,n as u,r as d,t as f}from"./Settings.stories-B5a5HVtS.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(t.h1,{id:`settings`,children:`Settings`}),`
`,(0,h.jsxs)(t.p,{children:[`The signed-in user's settings: a heading, a
`,(0,h.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-vertical-nav--docs`,children:`Vertical Nav`}),` of
sections beside the one shown, each section a form of
`,(0,h.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-form-layouts--docs`,children:`Form Sections`}),`
with a save bar at its end, and a danger zone last. After Tailwind UI's
settings screens and Polaris' settings page. Built from
`,(0,h.jsx)(t.a,{href:`?path=/docs/templates-application-ui-app-shell--docs`,children:`App Shell`}),` and the
kit's Text Input, Textarea,
`,(0,h.jsx)(t.a,{href:`?path=/docs/components-inputs-passwordinput--docs`,children:`Password Input`}),`,
Checkbox, Radio, Modal and Button. The data is made up.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://ontheshore.biz/zweihander/r/settings-template.json
`})}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`what-works`,children:`What works`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Nav`}),`: Profile, Account and Notifications. A link swaps the section in
place and becomes the current page. Every section stays mounted while
hidden, so a half-done edit survives a look at another section.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Save bar`}),`: at the end of each section's form, Discard and Save, with
a status line. It sticks to the bottom of the view while a long form
runs past the fold. Save stores what the form sends and says "Saved.";
Discard puts the fields back to what was last saved. Both are always
there: a disabled Save cannot say why it is disabled.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Account`}),`: change password asks for the current password, to prove
it is you, and a new one with its rules. Both are checked on send, focus
goes to the first one to fix, and the fields empty once it changes.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Read-only`}),`: the email is managed by the organisation's sign-in, so
it is a read-only field that says who can change it, not a disabled one:
it stays readable, focusable and sent with the form.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Danger zone`}),`: Delete account, last on the Account section and set
off by a rule, opens a `,(0,h.jsx)(t.a,{href:`?path=/docs/components-overlays-confirm-dialog--docs`,children:`Confirm Dialog`}),`
that waits until the username is typed. Cancel or Escape keeps everything.`]}),`
`]}),`
`,(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`make-it-yours`,children:`Make it yours`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`Settings`}),` keeps the saved values in state and hands each save to
`,(0,h.jsx)(t.code,{children:`onSave(section, values)`}),`, the form's fields by name. Call your API there,
and load your values in place of the samples. Add a section by adding it
to `,(0,h.jsx)(t.code,{children:`SECTIONS`}),` and a `,(0,h.jsx)(t.code,{children:`SectionForm`}),` for it; past seven or so sections, group
them in the nav.`]}),`
`,(0,h.jsxs)(t.p,{children:[`Settings are edited as forms with one Save per section, not field by
field with `,(0,h.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-inline-edit--docs`,children:`Inline Edit`}),`:
a reader changes several related values at once and expects to review them
before they apply. Inline edit suits a record read more than edited.
`,(0,h.jsx)(t.a,{href:`?path=/docs/patterns-application-ui-form-layouts--docs`,children:`Form Layouts' Settings Sections`}),`
shows the sections alone; this template is the whole page around them.`]}),`
`,(0,h.jsxs)(t.p,{children:[`The sample swaps sections in place. In an app with a router, give each nav
item its own URL (a `,(0,h.jsx)(t.code,{children:`render`}),` link), and render the section the URL names.`]}),`
`,(0,h.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsx)(a,{of:l}),`
`,(0,h.jsxs)(t.p,{children:[`Any other prop goes to the App Shell's root, e.g. `,(0,h.jsx)(t.code,{children:`style`}),` to set its
`,(0,h.jsx)(t.code,{children:`block-size`}),` when the page is not the whole viewport.`]}),`
`,(0,h.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`From 48rem of page width the nav is a column as wide as the app's
sidebar and stays in view while the section scrolls. Below that it
stacks above the section, every link still showing: a settings nav is a
handful of links, and folding it into a menu would hide where else to go.`}),`
`,(0,h.jsx)(t.li,{children:`Form Sections split (title and description beside the fields) from
48rem of their own width, and stack below.`}),`
`]}),`
`,(0,h.jsx)(o,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`One `,(0,h.jsx)(t.code,{children:`h1`}),`, "Settings"; each Form Section's title is an `,(0,h.jsx)(t.code,{children:`h2`}),`.`]}),`
`,(0,h.jsxs)(t.li,{children:[`The nav is a navigation landmark named "Settings", the shown section's
link `,(0,h.jsx)(t.code,{children:`aria-current="page"`}),`. Focus stays on the link; the section follows
it in reading order.`]}),`
`,(0,h.jsxs)(t.li,{children:[`Each section is a form named after it ("Profile", "Change password").
The save bar's status line is a `,(0,h.jsx)(t.code,{children:`status`}),` live region, so "Saved." is
announced without moving focus.`]}),`
`,(0,h.jsxs)(t.li,{children:[`A field that fails is marked `,(0,h.jsx)(t.code,{children:`aria-invalid`}),`, its message part of its
description, and gets focus.`]}),`
`,(0,h.jsxs)(t.li,{children:[`Delete account opens an `,(0,h.jsx)(t.code,{children:`alertdialog`}),` named "Delete your account?",
with focus in the field to type the username; the delete button stays
disabled until it matches. On close focus returns to the button.`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),s(),c()})))()}g();export{m as default};