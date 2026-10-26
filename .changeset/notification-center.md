---
"zweihander": patch
---

Add the Notification Center pattern (registry only): `NotificationCenter`, a bell for the Top Bar with the unread count that opens the notifications in a Popover, and `NotificationPanel`, the inside on its own, with Mark all as read, your header actions, optional All and Unread tabs and an empty state. Feed items take two new optional fields, `href` (the sentence links, the row is the target) and `isUnread` (a dot named "Unread"); Feed now depends on Badge, so copy-source users re-add `feed.json` to get them. Install with `npx shadcn@latest add https://ontheshore.biz/zweihander/r/notification-center.json`.
