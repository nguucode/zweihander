---
"zweihander": patch
---

Form Layouts: add `FormFieldGroup`, a `<fieldset>` with a legend, an optional description and its own one or two columns, for related fields inside a `FormSection`. Copy `FormLayouts.tsx` and `FormLayouts.module.css` again to get it (the file now starts with `'use client'`). Select now dims when a disabled `<fieldset>` around it disables it, as Text Input already did.
