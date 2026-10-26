---
name: implement
description: "Implement a piece of work based on a spec or set of tickets, then test and ship it as a PR."
disable-model-invocation: true
---

Implement the work described by the user in the spec or tickets.

If the user passes a ticket reference, fetch it from the issue tracker and state its title before starting. If the reference is ambiguous, ask.

## Grill

Before writing code, call the Skill tool with "grilling" to settle scope, edge cases and the seams to test at. Stop once the open questions are answered.

## Implement

Work on a branch, never on `main`.

Call the Skill tool with "tdd" where possible, at pre-agreed seams.

Run typechecking regularly, single test files regularly, and the full test suite once at the end.

## Test

Add a changeset in `.changeset/<short-name>.md`: `---`, the package line (`"zweihander": patch|minor`) when `src/` or published files change, `---`, then one line on what changed. Tooling-only work gets an empty changeset (`---` twice, then the line). Stage everything with `git add -A`: `changeset status` ignores untracked files.

Run `npm run verify`. It runs what CI runs, except the `visual` project: its baselines are Linux-only, so CI checks it. Fix every failure and run it again until it passes.

Once it passes, call the Skill tool with "matt-code-review" to review the work. Fix what it finds, then run `npm run verify` again.

## Ship

1. Commit your work to the current branch.
2. Run `npm run ship:check`: it fetches origin, fast-forwards the branch when the remote is ahead (the Visual baselines workflow commits to PR branches), and checks the changeset against a fresh `origin/main`. If it stops, fix the one-line reason and run it again. Then push the branch and open a PR against `main`; call the Skill tool with "pr" to write the body. If the change is visual on purpose, say so in the PR and ask the user to add the `update screenshots` label.
3. Report the PR link. Do not merge: the user merges once CI is green.
