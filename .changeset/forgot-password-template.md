---
"zweihander": patch
---

Add the Forgot Password and Reset Password templates (registry `forgot-password-template`): the email, then "Check your email" with Resend link and Use a different email; and the page the link opens, a new password with its rules, then "Password changed". The resend button with its cooldown is now `ResendButton` (registry `resend-button`), shared with OTP Input, whose props and behaviour are unchanged; if you copied OTP Input, add `resend-button` too. `PasswordInput` exports `defaultPasswordRules`, and the Auth Layout exports `focusTitle`.
