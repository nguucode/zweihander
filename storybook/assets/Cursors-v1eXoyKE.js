import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,n as a,s as o}from"./blocks-BCmbfwq7.js";import{n as s,r as c,t as l}from"./Cursors.stories-B1Izp94g.js";function u(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{of:l}),`
`,(0,f.jsx)(t.h1,{id:`cursors`,children:`Cursors`}),`
`,(0,f.jsxs)(t.p,{children:[`Three tokens, and a convention that surprises most people: `,(0,f.jsxs)(t.strong,{children:[`buttons do
not get `,(0,f.jsx)(t.code,{children:`cursor: pointer`}),`. Links do.`]})]}),`
`,(0,f.jsx)(t.h2,{id:`the-convention`,children:`The convention`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`cursor: pointer`}),` means "this navigates" — it is the hand that appears
over a link. Browsers have never applied it to `,(0,f.jsx)(t.code,{children:`<button>`}),`, `,(0,f.jsx)(t.code,{children:`<select>`}),` or a
checkbox, and neither does this kit. Interactive elements that act on the
current page keep the regular arrow; only a link gets the hand. This is a
deliberate departure from the very common `,(0,f.jsx)(t.code,{children:`button { cursor: pointer }`}),`
reset.`]}),`
`,(0,f.jsxs)(t.p,{children:[`It is worth knowing the argument on the other side: a large body of
usability opinion holds that the hand cursor is now such a widespread
affordance for "clickable" that removing it costs more than the semantic
purity gains. If your product takes that view, this is a one-line change —
see `,(0,f.jsx)(t.strong,{children:`Customization`}),` below. The point of making it a token is that it is
one line, in one place, rather than a decision re-litigated per component.`]}),`
`,(0,f.jsx)(a,{of:s}),`
`,(0,f.jsx)(t.h2,{id:`--cursor-button`,children:(0,f.jsx)(t.code,{children:`--cursor-button`})}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`default`}),` — the regular arrow. Applied by Button.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Note this changes nothing visually today: a native `,(0,f.jsx)(t.code,{children:`<button>`}),` already
shows the arrow. `,(0,f.jsx)(t.strong,{children:`The token's job is not its current value; it is that
the value is reachable.`}),` Without it, switching the kit to `,(0,f.jsx)(t.code,{children:`pointer`}),` means
editing every component; with it, it is one declaration.`]}),`
`,(0,f.jsx)(t.h2,{id:`--cursor-link`,children:(0,f.jsx)(t.code,{children:`--cursor-link`})}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`pointer`}),` — the hand.`]}),`
`,(0,f.jsxs)(t.p,{children:[`This one exists because the convention above has a second half that is
easy to state and easy to get wrong. Button takes `,(0,f.jsx)(t.code,{children:`href`}),`, so it can
render as a real `,(0,f.jsx)(t.code,{children:`<a href>`}),` — and when it did, it inherited
`,(0,f.jsx)(t.code,{children:`--cursor-button`}),` and lost the hand that the browser gives every other
link on the page. A link styled as a button is still a link.`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-css`,children:`a[href].button {
  cursor: var(--cursor-link);
}
`})}),`
`,(0,f.jsxs)(t.p,{children:[`The `,(0,f.jsx)(t.code,{children:`a[href]`}),` part is doing real work. An `,(0,f.jsx)(t.code,{children:`<a>`}),` without `,(0,f.jsx)(t.code,{children:`href`}),` is not a
link and browsers do not give it the hand either, so matching on the
attribute rather than the element keeps the rule honest.`]}),`
`,(0,f.jsxs)(t.p,{children:[`The distinction the kit draws is navigation versus action, not
appearance: a `,(0,f.jsx)(t.code,{children:`<button>`}),` styled as a link would still act on the current
page, so it would keep the arrow.`]}),`
`,(0,f.jsxs)(t.table,{children:[(0,f.jsx)(t.thead,{children:(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.th,{}),(0,f.jsx)(t.th,{children:`Element`}),(0,f.jsx)(t.th,{children:`Cursor`})]})}),(0,f.jsxs)(t.tbody,{children:[(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`<Button>`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`<button>`})}),(0,f.jsx)(t.td,{children:`arrow`})]}),(0,f.jsxs)(t.tr,{children:[(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`<Button href="/x">`})}),(0,f.jsx)(t.td,{children:(0,f.jsx)(t.code,{children:`<a href>`})}),(0,f.jsx)(t.td,{children:`hand`})]})]})]}),`
`,(0,f.jsxs)(t.p,{children:[`The Button `,(0,f.jsx)(t.code,{children:`Href`}),` story asserts this, and compares against a bare
`,(0,f.jsx)(t.code,{children:`<a href>`}),` rather than the literal `,(0,f.jsx)(t.code,{children:`pointer`}),` — so overriding
`,(0,f.jsx)(t.code,{children:`--cursor-link`}),` moves the assertion with it instead of breaking it.`]}),`
`,(0,f.jsx)(t.h2,{id:`--cursor-disabled`,children:(0,f.jsx)(t.code,{children:`--cursor-disabled`})}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`not-allowed`}),` — used by TextInput, and `,(0,f.jsx)(t.strong,{children:`not`}),` by Button. That asymmetry
is not an oversight.`]}),`
`,(0,f.jsxs)(t.p,{children:[`A disabled `,(0,f.jsx)(t.code,{children:`<input>`}),` stays hit-testable, so a cursor set on it renders and
the user gets feedback on hover. Button's disabled state is
`,(0,f.jsx)(t.code,{children:`pointer-events: none`}),`, which makes the element untargetable; an
untargetable element is never hovered, so a cursor there would be dead
CSS. The `,(0,f.jsx)(t.code,{children:`pointer-events: none`}),` is not incidental — because Button
can render as an `,(0,f.jsx)(t.code,{children:`<a>`}),`, which ignores the `,(0,f.jsx)(t.code,{children:`disabled`}),` attribute entirely. Blocking pointer events is what actually disables it
in that case.`]}),`
`,(0,f.jsxs)(t.p,{children:[`So the token applies to the pattern where a control stays hoverable while
disabled — including a control deliberately wrapped so a tooltip can
explain `,(0,f.jsx)(t.em,{children:`why`}),`. That trade-off, between a disabled control you can
interrogate and one that is inert, is a real design choice, and the two
components here happen to sit on opposite sides of it.`]}),`
`,(0,f.jsx)(t.h2,{id:`adding-tokens`,children:`Adding tokens`}),`
`,(0,f.jsx)(t.p,{children:`A mature system ends up with a token per interactive component —
checkboxes, menu items, radios, switches, slider thumbs. This kit has
three, because it has two components and one of them can render as two
different things.`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.strong,{children:`Add a token when the component that needs it is built, not before.`}),` A
`,(0,f.jsx)(t.code,{children:`--cursor-slider-thumb`}),` with no Slider is a value nobody can verify and
that the eventual Slider may not want.`]}),`
`,(0,f.jsx)(t.h2,{id:`customization`,children:`Customization`}),`
`,(0,f.jsx)(t.p,{children:`All three are plain CSS keywords, not colors, so they override like any
other custom property:`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-css`,children:`:root {
  --cursor-button: pointer;
}
`})}),`
`,(0,f.jsxs)(t.p,{children:[`Load any override after Zweihänder's own stylesheet so the cascade picks it
up. Setting `,(0,f.jsx)(t.code,{children:`--cursor-button: pointer`}),` is the one-line version of adopting
the mainstream convention; it leaves `,(0,f.jsx)(t.code,{children:`--cursor-link`}),` alone, which is
already `,(0,f.jsx)(t.code,{children:`pointer`}),`, so the two simply converge.`]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),r(),i(),c()})))()}p();export{d as default};