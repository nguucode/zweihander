---
"zweihander": patch
---

Auth templates: the handler wrapper that turns a thrown error or rejected promise into "Something went wrong. Try again." now lives in AuthLayout as `attempt`, instead of a copy in each template. Behaviour and props are unchanged. Copy-source users: copy `AuthLayout.tsx` again together with `SignIn.tsx`, `SignUp.tsx`, `ForgotPassword.tsx`, `ResetPassword.tsx`, `ProgressiveSignIn.tsx` and `MFAChallenge.tsx` (the templates now import `attempt` from `./AuthLayout`).
