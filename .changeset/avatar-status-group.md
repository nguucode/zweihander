---
"zweihander": patch
---

Avatar: add `status` (online, away, busy, offline) for a presence dot that joins the accessible name, with `statusLabel` to translate it, and `AvatarGroup` (from `zweihander/avatar`) to overlap a row of avatars with a "+n" past `max`. The avatar container no longer clips with `overflow: hidden`; the image and silhouette clip themselves, so the dot can sit on the corner.
