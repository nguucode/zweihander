---
"zweihander": patch
---

Stepper: add `appearance="bullets"`, which shows only the current step's label ("Step 3 of 4: Invite") over a row of dots, for a phone, a narrow dialog or a longer flow. The default (`circles`) is unchanged. A step with `status: 'error'` at the `current` index now keeps `aria-current="step"`.
