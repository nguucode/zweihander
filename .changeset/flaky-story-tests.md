---
---

Flaky story tests: Drawer `Long` waits for the panel to take focus before tabbing, ImportExport `Map Columns` waits for each Select list to finish closing, and the Playground site writes the URL at most every 200ms so WebKit's 100-per-10-seconds `replaceState` limit no longer throws while typing.
