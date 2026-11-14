import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{l as i,r as a,s as o}from"./blocks-DsER1A51.js";import{n as s,r as c,t as l}from"./DarkMode.stories-BBop-5sc.js";function u(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{of:l}),`
`,(0,f.jsx)(t.h1,{id:`dark-mode`,children:`Dark mode`}),`
`,(0,f.jsxs)(t.p,{children:[`Dark mode is `,(0,f.jsx)(t.strong,{children:`a class, not a media query.`}),` `,(0,f.jsx)(t.code,{children:`tokens.css`}),` declares the
light values on `,(0,f.jsx)(t.code,{children:`:root, .light`}),` and the dark values on `,(0,f.jsx)(t.code,{children:`.dark`}),`, and
every rule in the kit reads those variables, so the class is the only
switch there is. The same scopes set `,(0,f.jsx)(t.code,{children:`color-scheme`}),`, so the UI the browser
draws itself (scrollbars, date and select popups, autofill) switches with
them.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Nothing is automatic about it. Adding `,(0,f.jsx)(t.code,{children:`class="dark"`}),` to `,(0,f.jsx)(t.code,{children:`<html>`}),` is what
switches the document; without that, a device set to dark mode gets the
light theme. That is the trade — see `,(0,f.jsx)(t.strong,{children:`Following the system`}),` below.`]}),`
`,(0,f.jsx)(a,{of:s}),`
`,(0,f.jsx)(t.h2,{id:`components-dont-know-about-it`,children:`Components don't know about it`}),`
`,(0,f.jsxs)(t.p,{children:[`No component stylesheet — `,(0,f.jsx)(t.code,{children:`Button.module.css`}),`, `,(0,f.jsx)(t.code,{children:`InputField.module.css`}),` or any other — mentions `,(0,f.jsx)(t.code,{children:`.dark`}),`.
They write `,(0,f.jsx)(t.code,{children:`background: var(--color-background-brand-bold)`}),`, and it is the variable that
changes; the rule is identical in both modes.`]}),`
`,(0,f.jsxs)(t.p,{children:[`This is the main reason to reach for a token rather than a literal. A
hard-coded `,(0,f.jsx)(t.code,{children:`#0a0a0a`}),` is near-black in both modes and needs a `,(0,f.jsx)(t.code,{children:`.dark`}),`
override beside it to survive a theme switch; `,(0,f.jsx)(t.code,{children:`var(--color-background-brand-bold)`}),` needs
nothing. Every theme conditional in a codebase is a place a value was
hardcoded and then patched.`]}),`
`,(0,f.jsx)(t.h2,{id:`dark-is-not-an-inversion`,children:`Dark is not an inversion`}),`
`,(0,f.jsx)(t.p,{children:`Flipping lightness would produce the wrong result in three places, and the
palette deliberately doesn't:`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsxs)(t.strong,{children:[(0,f.jsx)(t.code,{children:`--color-surface`}),` is gray-950, not black.`]}),` A pure-black page makes
the halation around light text worse and leaves no room to sit a surface
`,(0,f.jsx)(t.em,{children:`below`}),` the page level.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Surfaces go up, not down.`}),` `,(0,f.jsx)(t.code,{children:`--color-surface-raised`}),` and
`,(0,f.jsx)(t.code,{children:`--color-surface-overlay`}),` are a step `,(0,f.jsx)(t.em,{children:`lighter`}),` than the page in dark
mode (gray-900 on gray-950), as they are in light mode (white on
gray-50). Elevation in dark mode is carried by lightness, because a drop shadow
has almost nothing left to darken (see
`,(0,f.jsx)(t.a,{href:`?path=/docs/foundations-shadows--docs`,children:`Shadows`}),`).`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`Strong fills become light, so their labels become dark.`}),`
`,(0,f.jsx)(t.code,{children:`--color-background-brand-bold`}),` goes from the accent's 600 step to its
400, and `,(0,f.jsx)(t.code,{children:`--color-text-brand-inverse`}),` turns near-black with it.
`,(0,f.jsx)(t.code,{children:`--color-background-danger-bold`}),` does the same, red-600 to red-400 —
which is exactly where the palette's one contrast bug lived: keeping the
near-white `,(0,f.jsx)(t.code,{children:`--color-text-danger-inverse`}),` on the lightened red measured
2.77:1. It is now neutral-900 at 6.19:1. Lightening a fill without
flipping its `,(0,f.jsx)(t.code,{children:`-inverse`}),` label is the single easiest dark-mode mistake to
make.`]}),`
`]}),`
`,(0,f.jsxs)(t.p,{children:[`Full measurements for both modes are in
`,(0,f.jsx)(t.a,{href:`?path=/docs/foundations-colors--docs`,children:`Color → Contrast`}),`.`]}),`
`,(0,f.jsx)(t.h2,{id:`alpha-for-edges`,children:`Alpha for edges`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`--color-border`}),` and `,(0,f.jsx)(t.code,{children:`--color-border-input`}),` are opaque gray-200 and
gray-300 in light, and `,(0,f.jsx)(t.code,{children:`white / 10%`}),` and `,(0,f.jsx)(t.code,{children:`white / 18%`}),` in dark;
`,(0,f.jsx)(t.code,{children:`--color-background-selected`}),` is `,(0,f.jsx)(t.code,{children:`white / 10%`}),` in dark too. An opaque dark
border would have to be re-chosen for every surface it sits on; a
translucent white edge lightens whatever is underneath, so the same token
reads correctly on `,(0,f.jsx)(t.code,{children:`--color-surface`}),` and on a lifted
`,(0,f.jsx)(t.code,{children:`--color-surface-raised`}),`. `,(0,f.jsx)(t.code,{children:`--color-interaction-hovered`}),` and
`,(0,f.jsx)(t.code,{children:`--color-blanket`}),` are translucent in both modes for the same reason.`]}),`
`,(0,f.jsx)(t.h2,{id:`scoping`,children:`Scoping`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`Theme`}),` switches an appearance for a subtree rather than the document —
a dark footer on a light page, a light popover inside a dark shell. See
`,(0,f.jsx)(t.a,{href:`?path=/docs/foundations-overview--docs`,children:`Overview → Nesting`}),` for how the
nesting resolves and the one caveat that comes with it.`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`<Theme appearance="dark">
  <Footer />
</Theme>
`})}),`
`,(0,f.jsx)(t.h2,{id:`following-the-system`,children:`Following the system`}),`
`,(0,f.jsxs)(t.p,{children:[`The kit ships no `,(0,f.jsx)(t.code,{children:`prefers-color-scheme`}),` handling, because the choice
between "follow the OS" and "remember what the user picked" belongs to the
app, not the component library. The usual shape:`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`const media = window.matchMedia('(prefers-color-scheme: dark)')
const stored = localStorage.getItem('theme') // 'light' | 'dark' | null
const dark = stored ? stored === 'dark' : media.matches
document.documentElement.classList.toggle('dark', dark)
`})}),`
`,(0,f.jsxs)(t.p,{children:[`Two things worth getting right. Run it `,(0,f.jsx)(t.strong,{children:`before first paint`}),` — in a
blocking inline script in `,(0,f.jsx)(t.code,{children:`<head>`}),`, not in a `,(0,f.jsx)(t.code,{children:`useEffect`}),` — or the page
renders light and flips, which is the flash every themed site has had at
some point. And keep listening to `,(0,f.jsx)(t.code,{children:`media`}),` afterwards so a user changing
their OS setting mid-session is followed, unless they have made an
explicit choice.`]}),`
`,(0,f.jsxs)(t.p,{children:[`In this Storybook, the `,(0,f.jsx)(t.strong,{children:`Theme`}),` toolbar control does the class toggle for
you; there is no persistence and no system detection.`]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),r(),i(),c()})))()}p();export{d as default};