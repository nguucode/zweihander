import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{l as i,r as a,s as o}from"./blocks-DsER1A51.js";import{i as s,n as c,r as l,t as u}from"./Shadows.stories-vAFrw-Th.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:l}),`
`,(0,p.jsx)(t.h1,{id:`shadows`,children:`Shadows`}),`
`,(0,p.jsx)(t.p,{children:`Elevation has two levels and an off switch, after Atlassian's elevation
model. Each resolves per appearance rather than being a fixed value.`}),`
`,(0,p.jsx)(a,{of:c}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`Token`}),(0,p.jsx)(t.th,{children:`Use for`}),(0,p.jsx)(t.th,{children:`Light`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--shadow-none`})}),(0,p.jsx)(t.td,{children:`Turning elevation off`}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`0 0 #0000`})})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--shadow-raised`})}),(0,p.jsx)(t.td,{children:`A surface that can be picked up and moved, such as a card being dragged`}),(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`0 1px 1px`}),` 25% over a 1px edge at 31%`]})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`--shadow-overlay`})}),(0,p.jsx)(t.td,{children:`Anything that floats above the page: menus, popovers, modals, toasts`}),(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`0 8px 12px`}),` 15% over a 1px edge at 31%`]})]})]})]}),`
`,(0,p.jsx)(t.p,{children:`Each level is two layers: a soft directional layer that says how far the
surface floats, over a 1px ambient edge that keeps its outline when the
surface behind it is the same colour.`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`A surface that stays put needs no shadow.`}),` It separates from the page
by its surface and its border. Controls are flat: buttons and fields
carry borders, not shadows. Card's `,(0,p.jsx)(t.code,{children:`elevated`}),` appearance is the one
resting surface on `,(0,p.jsx)(t.code,{children:`raised`}),`, and lifts to `,(0,p.jsx)(t.code,{children:`overlay`}),` on hover when
clickable.`]}),`
`,(0,p.jsxs)(t.p,{children:[`The seven step names from before (`,(0,p.jsx)(t.code,{children:`--shadow-2xs`}),` to `,(0,p.jsx)(t.code,{children:`--shadow-2xl`}),`) still
resolve: `,(0,p.jsx)(t.code,{children:`2xs`}),`, `,(0,p.jsx)(t.code,{children:`xs`}),` and `,(0,p.jsx)(t.code,{children:`sm`}),` read `,(0,p.jsx)(t.code,{children:`raised`}),`; `,(0,p.jsx)(t.code,{children:`md`}),`, `,(0,p.jsx)(t.code,{children:`lg`}),`, `,(0,p.jsx)(t.code,{children:`xl`}),` and `,(0,p.jsx)(t.code,{children:`2xl`}),`
read `,(0,p.jsx)(t.code,{children:`overlay`}),`. Use the two level names in new styles.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`--shadow-none`}),` exists so that turning elevation off is a token rather
than a literal. `,(0,p.jsx)(t.code,{children:`box-shadow: none`}),` also works, but it cannot be swapped by
a `,(0,p.jsx)(t.code,{children:`Theme`}),` and it breaks a transition between two shadow states — `,(0,p.jsx)(t.code,{children:`0 0 #0000`}),` interpolates, `,(0,p.jsx)(t.code,{children:`none`}),` does not.`]}),`
`,(0,p.jsx)(t.h2,{id:`dark-mode-is-derived-not-retyped`,children:`Dark mode is derived, not retyped`}),`
`,(0,p.jsxs)(t.p,{children:[`Only the light values are written down. The dark ones are `,(0,p.jsx)(t.strong,{children:`computed from
them`}),`: every alpha is multiplied by 4 and clamped at 0.6.`]}),`
`,(0,p.jsx)(a,{of:u}),`
`,(0,p.jsx)(t.p,{children:`A drop shadow works by darkening what is under it, and a dark page has
almost nothing left to darken. So the multiplier spends a small budget
well; it does not rescue dark mode.`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`In dark mode, surface lightness is the primary elevation signal and the
shadow is a secondary cue.`}),` In light mode it is the other way around. If
you are building a floating surface and it does not read as raised in dark
mode, reach for a lighter surface token, not a heavier shadow.`]}),`
`,(0,p.jsxs)(t.p,{children:[`Deriving rather than retyping means editing a level edits both modes, and
the `,(0,p.jsx)(t.code,{children:`Modes`}),` story asserts the two did not collapse into the same value.`]}),`
`,(0,p.jsx)(t.h2,{id:`a-note-on-rings-and-shadows`,children:`A note on rings and shadows`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`box-shadow`}),` is a single property, so a shadow and a focus ring drawn the
same way would overwrite each other — which is why systems that draw rings
with `,(0,p.jsx)(t.code,{children:`box-shadow`}),` need machinery to compose the two.`]}),`
`,(0,p.jsxs)(t.p,{children:[`The kit sidesteps it: focus is drawn with `,(0,p.jsx)(t.code,{children:`outline`}),`, which has its own
property and its own `,(0,p.jsx)(t.code,{children:`outline-offset`}),`, and current browsers follow
`,(0,p.jsx)(t.code,{children:`border-radius`}),` with it. An elevated surface can carry a shadow and a
focus ring at once, and neither needs to know about the other.`]}),`
`,(0,p.jsx)(t.h2,{id:`what-is-not-here`,children:`What is not here`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Inset shadows.`}),` For recessed wells and pressed states. They are a real
gap, but the kit has no recessed surface and no pressed treatment yet, so
they would be a step nothing reads. Add them as `,(0,p.jsx)(t.code,{children:`elevation-inset-*`}),` in `,(0,p.jsx)(t.code,{children:`tokens/semantic.json`}),` when
the first one lands; the alpha derivation applies unchanged.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Coloured shadows.`}),` A shadow tinted toward the accent instead of black.
Worth having, but it needs a real decision about which token it reads and
how it behaves in dark mode, not a mechanical port.`]}),`
`,(0,p.jsx)(t.h2,{id:`customization`,children:`Customization`}),`
`,(0,p.jsxs)(t.p,{children:[`The raw values are `,(0,p.jsx)(t.code,{children:`--elevation-raised`}),` and `,(0,p.jsx)(t.code,{children:`--elevation-overlay`}),` in
`,(0,p.jsx)(t.code,{children:`:root`}),` and `,(0,p.jsx)(t.code,{children:`.dark`}),`; the `,(0,p.jsx)(t.code,{children:`*`}),` block maps them onto `,(0,p.jsx)(t.code,{children:`--shadow-*`}),` and does not need to
change.`]}),`
`,(0,p.jsxs)(t.p,{children:[`Change a level by editing `,(0,p.jsx)(t.code,{children:`tokens/semantic.json`}),` and running `,(0,p.jsx)(t.code,{children:`npm run tokens`}),` — light and dark regenerate together. Overriding `,(0,p.jsx)(t.code,{children:`--shadow-overlay`}),`
directly on a `,(0,p.jsx)(t.code,{children:`Theme`}),` scope also works and skips the derivation, which is
the right tool for a one-off surface and the wrong one for changing the
scale.`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),r(),i(),s()})))()}m();export{f as default};