# After the build step

Shared by `flow idea` (implement here, or one ticket), `flow fix` and `flow change`. Runs without stopping (see the two halves in [SKILL.md](SKILL.md)).

Review and QA cover every commit since the flow (or ticket branch) started, not only the uncommitted diff: `implement` commits as it goes.

| Step | Skill | Required | Does |
| --- | --- | --- | --- |
| artifact | Artifact tool | optional | Change touches UI: publish an Artifact showing each new or changed screen in its states (default, empty, loading, error) and link it in the thread. No UI: one checklist line, skip. |
| review-bugs | `code-review` (built-in) | yes | Hunt logic, security and performance bugs. `matt-code-review` (standards + spec) already ran inside `implement`. |
| review-lean | ponytail-review | yes | Hunt code that should not exist. |
| review-security | `security-review` (built-in) | optional | Security pass on the change. |
| qa-run | `run` (built-in) | yes | Run the real thing (Storybook for components) and check: each acceptance criterion (ticket or spec), the bug is gone (fix), or the change works. Report pass/fail only, fix nothing here. |
| qa-a11y | `a11y-enforcer:a11y-check` | optional | WCAG check when there is UI. |
| debt | ponytail-debt | yes | Ledger of `shortcut:` comments in the change. |
| ship | none | yes | See below. |

## Loops

A review, QA or CI finding sends the work back to the build step to fix, then down the table again. Up to 3 loops; the 4th needs the user's yes (`ask_decision`).

## Ship

1. Work on the thread's branch, never the default branch; never force-push.
2. Before pushing, run what CI runs (`npm run tokens:check`, `npm run registry:check`, `npm run lint`, `npx tsc -b`, Storybook tests for touched components) and add a changeset in `.changeset/` (an empty one when nothing ships).
3. Open a draft PR and watch it. Fix small CI failures in place; larger ones go back to the build step.
4. When CI is green, mark the PR ready and ask the user to merge it (`ask_decision`: merge now, or wait). Also ask when a conflict cannot be resolved cleanly.
5. After merge: mirror repo Markdown to the vault (see [SKILL.md](SKILL.md#vault)), then the thread's closing step (ticket threads: [TICKET-THREAD.md](TICKET-THREAD.md)).

## A bug from an earlier PR

From the second ticket on, if the failure traces to an already-merged PR (`git log`, `git blame`):

- Small, and this ticket needs it: fix it in this PR as its own commit `fix: … from #<n>`, with a regression test, noted in the PR body.
- Large or separable: pause, get a `flow fix` thread started through the coordinator, ship that first, then merge main into this branch and continue.
- Ask the user before reverting a merged PR or when the fix changes a decision in the spec.
