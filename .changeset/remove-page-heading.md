---
"zweihander": minor
---

The Page Heading pattern is removed. The Projects template now renders its own `h1` with the open-project count, without the rule under it (the tabs below already draw one).

Breaking:

- The `page-heading` registry item is gone, and `projects-template` no longer depends on it. A page that installed it keeps its copy of `PageHeading.tsx`, which still works but gets no updates. To drop it, write the page's `h1`, description and buttons inline.
- Projects template users: copy `Projects.tsx` and `Projects.module.css` again (or re-run `npx shadcn@latest add https://ontheshore.biz/zweihander/r/projects-template.json`). The old copy imports `PageHeading`.
- The npm package never shipped `PageHeading`, so imports from `zweihander` are unaffected.
