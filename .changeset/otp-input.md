---
"zweihander": patch
---

Add OTP Input (`zweihander/otp-input`): a one-time code entered one character per cell, on Base UI OTP Field. Typing moves to the next cell, paste fills them all, `onValueComplete` fires when the code is full. Optional `groupSize` adds a dash between groups, and `onResend` adds a resend button that waits `resendCooldown` seconds with a countdown.
