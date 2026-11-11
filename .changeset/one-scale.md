---
"zweihander": minor
---

One scale: the density mode and `--scaling` are gone. `Theme`'s `density` and `scaling` props now do nothing (they warn in development and are removed in the next release); `[data-density]`, `--density-*` and `--scaling` no longer exist in `tokens.css`, and the `DENSITIES`, `Density`, `SCALINGS` and `Scaling` exports are deprecated. Every token keeps its former Default value at 100%, so nothing moves on screen. Where a screen needs a tighter control, use that component's `size="sm"`; remove `density`, `scaling` and any `data-density` attribute from your app.
