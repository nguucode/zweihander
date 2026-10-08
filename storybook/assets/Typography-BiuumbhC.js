import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-lUQ3_SCR.js";import{i as n,r}from"./react-CqF0aK3a.js";import{c as i,n as a,s as o}from"./blocks-BCmbfwq7.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./Typography.stories-CyyJghaj.js";function p(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{of:c}),`
`,(0,h.jsx)(t.h1,{id:`typography`,children:`Typography`}),`
`,(0,h.jsxs)(t.p,{children:[`Type is `,(0,h.jsx)(t.strong,{children:`role-based`}),`: you reach for `,(0,h.jsx)(t.code,{children:`--text-heading-lg`}),` or `,(0,h.jsx)(t.code,{children:`--text-body`}),`,
not a size. Each role carries its size, line height and weight together, so a
heading cannot end up at body weight or a body line height by omission.`]}),`
`,(0,h.jsx)(t.p,{children:`The alternative — a purely dimensional scale, where a name says how big and
never what it is for — is what this replaces. Each role is three variables
that belong together:`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-css`,children:`.heading {
  font-size: var(--text-heading-lg);
  line-height: var(--leading-heading-lg);
  font-weight: 700;
}
`})}),`
`,(0,h.jsx)(t.h2,{id:`the-typeface`,children:`The typeface`}),`
`,(0,h.jsx)(t.p,{children:`One face: the platform UI font. Nothing is downloaded, and text looks the
way the rest of the operating system does — San Francisco on Apple, Segoe UI
on Windows, Roboto on Android.`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-css`,children:`--font-sans: system-ui, -apple-system, 'Segoe UI', Roboto, …
--font-mono: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, …
`})}),`
`,(0,h.jsx)(t.p,{children:`Components read two role tokens rather than the face directly, so a
product can give headings or prose their own face without touching a
component:`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Role`}),(0,h.jsx)(t.th,{children:`Default`}),(0,h.jsx)(t.th,{children:`Read by`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--font-heading`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`var(--font-sans)`})}),(0,h.jsxs)(t.td,{children:[(0,h.jsx)(t.code,{children:`PageHeading`}),`, `,(0,h.jsx)(t.code,{children:`Modal`}),` and `,(0,h.jsx)(t.code,{children:`EmptyState`}),` titles`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--font-prose`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`var(--font-sans)`})}),(0,h.jsx)(t.td,{children:`long-form reading text; no component reads it yet`})]})]})]}),`
`,(0,h.jsx)(a,{of:l}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`There is nothing to load.`}),` To use a brand face instead, load it yourself
and point the tokens at it (see `,(0,h.jsx)(t.strong,{children:`Customization`}),`).`]}),`
`,(0,h.jsx)(t.h2,{id:`headings`,children:`Headings`}),`
`,(0,h.jsx)(t.p,{children:`Seven steps, all bold. The line height tightens as the size grows, which
is the thing a single ratio applied across a whole scale gets wrong.`}),`
`,(0,h.jsx)(a,{of:d}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Role`}),(0,h.jsx)(t.th,{children:`Size`}),(0,h.jsx)(t.th,{children:`Line height`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--text-heading-2xl`})}),(0,h.jsx)(t.td,{children:`2rem / 32px`}),(0,h.jsx)(t.td,{children:`36px`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--text-heading-xl`})}),(0,h.jsx)(t.td,{children:`1.75rem / 28px`}),(0,h.jsx)(t.td,{children:`32px`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--text-heading-lg`})}),(0,h.jsx)(t.td,{children:`1.5rem / 24px`}),(0,h.jsx)(t.td,{children:`28px`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--text-heading-md`})}),(0,h.jsx)(t.td,{children:`1.25rem / 20px`}),(0,h.jsx)(t.td,{children:`24px`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--text-heading-sm`})}),(0,h.jsx)(t.td,{children:`1rem / 16px`}),(0,h.jsx)(t.td,{children:`20px`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--text-heading-xs`})}),(0,h.jsx)(t.td,{children:`0.875rem / 14px`}),(0,h.jsx)(t.td,{children:`20px`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--text-heading-2xs`})}),(0,h.jsx)(t.td,{children:`0.75rem / 12px`}),(0,h.jsx)(t.td,{children:`16px`})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[`Note that headings go `,(0,h.jsx)(t.em,{children:`below`}),` body size: `,(0,h.jsx)(t.code,{children:`--text-heading-2xs`}),` is 12px. Those
bottom steps are for labels and section eyebrows — a heading role is about
the semantic weight of the text, not about being large.`]}),`
`,(0,h.jsx)(t.h2,{id:`body`,children:`Body`}),`
`,(0,h.jsxs)(t.p,{children:[`Four steps. `,(0,h.jsx)(t.code,{children:`--text-body`}),` is the default at 14px — one step down from the
16px a lot of interfaces start at, which is deliberate for dense product
UI and worth knowing before you reach for it in long-form content.`]}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Role`}),(0,h.jsx)(t.th,{children:`Size`}),(0,h.jsx)(t.th,{children:`Line height`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--text-body-lg`})}),(0,h.jsx)(t.td,{children:`1rem / 16px`}),(0,h.jsx)(t.td,{children:`24px`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--text-body`})}),(0,h.jsx)(t.td,{children:`0.875rem / 14px`}),(0,h.jsx)(t.td,{children:`20px`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--text-body-sm`})}),(0,h.jsx)(t.td,{children:`0.8125rem / 13px`}),(0,h.jsx)(t.td,{children:`16px`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`--text-body-xs`})}),(0,h.jsx)(t.td,{children:`0.625rem / 10px`}),(0,h.jsx)(t.td,{children:`14px`})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Every component uses these.`}),` Button, the field label, the input itself,
and the helper and error text are all `,(0,h.jsx)(t.code,{children:`--text-body`}),`; only the large Button
steps up to `,(0,h.jsx)(t.code,{children:`--text-body-lg`}),`.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`--text-body-xs`}),` is for dense metadata only — timestamps, badge counts,
table footnotes. No component reads it, and nothing a user has to read in
full or act on belongs at 10px.`]}),`
`,(0,h.jsx)(t.h2,{id:`weights`,children:`Weights`}),`
`,(0,h.jsx)(t.p,{children:`Four. Anything outside this set is not part of the system.`}),`
`,(0,h.jsx)(a,{of:s}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Weight`}),(0,h.jsx)(t.th,{children:`Value`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`regular`}),(0,h.jsx)(t.td,{children:`400`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`medium`}),(0,h.jsx)(t.td,{children:`500`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`semibold`}),(0,h.jsx)(t.td,{children:`600`})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:`bold`}),(0,h.jsx)(t.td,{children:`700`})]})]})]}),`
`,(0,h.jsxs)(t.p,{children:[`Weight is written directly rather than tokenised — there are four of them
and they are the same four everywhere, so a `,(0,h.jsx)(t.code,{children:`--font-weight-medium`}),`
indirection would buy nothing. Button is `,(0,h.jsx)(t.code,{children:`--text-body`}),` at `,(0,h.jsx)(t.code,{children:`font-weight: 500`}),`; the role supplies the size and line height, the rule supplies the
weight.`]}),`
`,(0,h.jsx)(t.p,{children:`With a system stack, the weight you ask for is not guaranteed to be a
drawn face: where one is missing the browser synthesises it, and
synthesised weights look noticeably worse. 400 and 500 are safe
everywhere; verify 600 on the platforms you support.`}),`
`,(0,h.jsx)(t.h2,{id:`scaling`,children:`Scaling`}),`
`,(0,h.jsxs)(t.p,{children:[`Every size above is `,(0,h.jsx)(t.code,{children:`calc(<base> * var(--scaling))`}),`, so the
`,(0,h.jsx)(t.a,{href:`?path=/docs/foundations-overview--docs`,children:(0,h.jsx)(t.code,{children:`scaling`})}),` setting moves type and
spacing together. Line heights are stored as `,(0,h.jsx)(t.em,{children:`ratios`}),` — `,(0,h.jsx)(t.code,{children:`calc(20 / 14)`}),`
rather than `,(0,h.jsx)(t.code,{children:`1.25rem`}),` — so they follow the font size instead of having to
be rescaled themselves.`]}),`
`,(0,h.jsx)(t.h2,{id:`what-is-not-here`,children:`What is not here`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`A metric role for large figures.`}),` Its sizes would be identical to three
of the heading steps; the real difference is tabular figures, which
`,(0,h.jsx)(t.code,{children:`font-variant-numeric: tabular-nums`}),` already covers. There is no stat
component yet, so it would be a role nothing reads.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`A code role.`}),` Same size as `,(0,h.jsx)(t.code,{children:`--text-body-sm`}),`, differing only by family.
`,(0,h.jsx)(t.code,{children:`var(--font-mono)`}),` covers it until a Code component exists.`]}),`
`,(0,h.jsx)(t.h2,{id:`customization`,children:`Customization`}),`
`,(0,h.jsx)(t.p,{children:`The family is a token like any other:`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-css`,children:`:root {
  --font-sans: 'Geist Variable', system-ui, sans-serif;
  --font-heading: 'Newsreader Variable', Georgia, serif; /* serif headings */
}
`})}),`
`,(0,h.jsxs)(t.p,{children:[`Every rule that reads `,(0,h.jsx)(t.code,{children:`var(--font-sans)`}),` picks it up with no component
change — which is all of them, because components set the family
explicitly rather than inheriting it from the page. Re-check the weights when you do — a real typeface
usually ships fewer weights than the four above, or different ones.`]}),`
`,(0,h.jsxs)(t.p,{children:[`To move the scale itself rather than the face, override the role tokens
directly — each is a `,(0,h.jsx)(t.code,{children:`--text-<role>`}),` and its `,(0,h.jsx)(t.code,{children:`--leading-<role>`}),` partner.`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),i(),u()})))()}g();export{m as default};