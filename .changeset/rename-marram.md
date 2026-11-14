---
"marram": minor
---

Zweihänder is now **Marram**, a design system by ontheshore. New name, new logo (`public/logo.svg`, `public/favicon.svg`).

What you have to change:

- **npm:** the package is now `marram`. Replace `zweihander` with `marram` in `package.json` and in imports (`import { Button } from 'marram/button'`). The old `zweihander` package stays at 0.7.0 and gets no more releases.
- **Registry (`npx shadcn add`):** files now land in `components/marram/` and `styles/marram-tokens.css` instead of `components/zweihander/` and `styles/zweihander-tokens.css`. Re-add the items you use, then delete the old folder and the old tokens file and update imports. Registry URLs are unchanged for now.
- **Stylelint:** the rule names are now `marram/semantic-tokens` and `marram/no-token-shadow`; update any `stylelint-disable` comments that name them.
