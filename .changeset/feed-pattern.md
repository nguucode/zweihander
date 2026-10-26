---
"zweihander": minor
---

Add the Feed pattern (`npx shadcn add .../r/feed.json`): a list of events, each a sentence of who did what and when, with an avatar or icon, an optional comment under it, a connecting line (`hasConnector`), an empty state and an optional comment box (`composer`). **Breaking for copied templates:** the Projects, Project Detail and Home templates now render their activity on it: if you copied them, add `feed` and copy `ProjectActivity.tsx`, `Projects.tsx`, `Projects.module.css`, `ProjectDetail.tsx`, `ProjectDetail.module.css`, `Home.tsx` and `Home.module.css` again, and delete `ProjectActivity.module.css`. A status change's note now shows in a bordered comment box instead of an italic quote.
