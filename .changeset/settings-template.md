---
"zweihander": patch
---

Add the Settings template (registry `settings-template`): a Vertical Nav of sections beside the one shown, stacked above it on a narrow page, Form Sections with a sticky save bar, change password, and a Delete account danger zone. Password Input is now a kit component, `import { PasswordInput } from 'zweihander/password-input'` (registry `password-input`); it was a file of the auth templates, which now import it from `inputs/`.
