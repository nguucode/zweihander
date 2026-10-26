---
"zweihander": patch
---

Add the Sign Up template (registry `sign-up-template`): full name, email, a new password with its rules ticked off as the reader types, an optional terms checkbox. `PasswordInput` takes `rules`, and the Auth Layout exports `AuthProviders`, the single sign-on buttons Sign In and Sign Up share. If you copied Sign In, copy `AuthLayout.tsx`, `AuthLayout.module.css`, `PasswordInput.tsx`, the new `PasswordInput.module.css`, `SignIn.tsx` and `SignIn.module.css` again (`npx shadcn@latest add …/r/auth-layout.json …/r/sign-in-template.json`); `SignInProvider` is still exported, as an alias of `AuthProvider`.
