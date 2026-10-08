import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,s as a}from"./blocks-BCmbfwq7.js";function o(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Getting Started/Introduction`}),`
`,(0,c.jsx)(t.h1,{id:`zweihänder`,children:`Zweihänder`}),`
`,(0,c.jsx)(t.p,{children:`A front-end UI kit for React, documented here in Storybook. Components are
plain elements styled with CSS Modules against a layer of CSS custom
properties. There is no CSS framework, no primitive library, and one
runtime dependency.`}),`
`,(0,c.jsxs)(`div`,{style:{border:`1px solid var(--destructive)`,borderRadius:`var(--radius-panel)`,padding:`var(--space-4)`,margin:`var(--space-6) 0`},children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Early stage — not production-ready.`}),` Two components exist (Button, Text
Input). No design review has happened beyond the contrast measurements in
these docs, and no Figma file has been applied, so the palettes are chosen
for contrast rather than designed. `,(0,c.jsxs)(t.strong,{children:[`Expect breaking changes on any `,(0,c.jsx)(t.code,{children:`0.x`}),`
version bump.`]})]}),(0,c.jsx)(t.p,{children:`Fine to read, install, or borrow the setup from. Not ready to build a real
product on top of yet.`})]}),`
`,(0,c.jsx)(t.h2,{id:`what-it-is`,children:`What it is`}),`
`,(0,c.jsx)(t.p,{children:`The whole kit resolves against one stylesheet of custom properties. A
component never holds a colour, a size or a radius — it reads a token:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`.button {
  background: var(--primary);
  border-radius: var(--radius-control);
  font-size: var(--text-body);
}
`})}),`
`,(0,c.jsx)(t.p,{children:`Three consequences follow, and most of these docs are about them:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Theming is scoping.`}),` `,(0,c.jsx)(t.code,{children:`<Theme accentColor="violet" appearance="dark">`}),`
redeclares tokens on a subtree; everything inside re-resolves. No
context, no re-render, no theme object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Rebranding is one file.`}),` Change what `,(0,c.jsx)(t.code,{children:`--primary`}),` means and every rule
reading it moves. No component is touched.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`There is no build step on your side.`}),` No config, no content scanning,
no plugin. It is a stylesheet.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-read-these-docs`,children:`How to read these docs`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`?path=/docs/foundations-overview--docs`,children:`Foundations`})}),` is the substance —
colour, type, spacing, radius, elevation, cursors, and the reasoning and
measurements behind each. Start with its Overview.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`?path=/docs/components-overview--docs`,children:`Components`})}),` is what exists so
far, plus the full category list of what does not.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`?path=/docs/patterns-overview--docs`,children:`Patterns`})}),` are whole sections
assembled from those components, starting with Application UI: copy one
into your app and edit it.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Each topic has a hand-written page rather than a generated blurb, and they
are written as reference docs — what a token is `,(0,c.jsx)(t.em,{children:`for`}),`, where its value came
from, what the known gotchas are, and how to override it.`]}),`
`,(0,c.jsx)(t.h2,{id:`next`,children:`Next`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`?path=/docs/getting-started-installation--docs`,children:`Installation`})}),` — two
ways to consume the kit, and which to pick.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}l();export{s as default};