---
"zweihander": minor
---

Fields follow Atlassian's box sizing: a field is one step taller than a button. TextInput, Textarea, Search, NumberInput, PasswordInput, Select, Combobox, DatePicker, DateRangePicker and OTPInput are 40px at `size="md"` (were 32) and 32px at `size="sm"` (were 24); there is no 24px field any more. Both sizes use 14/20 text, a 16px icon, 6px inline padding and no resting shadow. Field labels and helper text are 12/16 (labels weight 600), 4px from the box. New token `--control-lg` (40px). In a toolbar, where a field sits in a row with buttons or tabs, pass `size="sm"` so the row is 32px; Pagination's rows-per-page select and InlineEdit's input are always `sm`. The `popupInset` export of `InputField` is removed.
