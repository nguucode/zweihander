---
"zweihander": patch
---

Text Input: add `startAddon` and `endAddon`, filled segments joined to the edge of the box for a fixed part of the value ("https://", ".com", "USD") or an attached action, and export `TextInputButton`, a button sized to the field for `prefix`, `suffix` or an add-on. The button is disabled with the field and stays enabled when the field is read-only. Non-breaking. The field icon buttons shared with Search, Combobox and Date Picker now show the disabled cursor and no hover when disabled. Copy-source users: copy `TextInput.tsx` and `InputField.module.css` again.
