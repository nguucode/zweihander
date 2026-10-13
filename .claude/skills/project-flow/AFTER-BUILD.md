# After the build step

Shared by `flow idea` (implement here, or one ticket), `flow fix` and `flow change`. Runs without stopping (see the two halves in [SKILL.md](SKILL.md)).

Review and QA cover every commit since the flow (or ticket branch) started, not only the uncommitted diff: `implement` commits as it goes. Every review gets an explicit target; called without one, a review can read an old or partial diff, or stop to ask. `matt-code-review` (here or at the end of `implement`) gets the fixed point `origin/main` plus the path of the ticket, spec or bug report. The other reviews get the PR number once a PR exists, else `origin/main...HEAD`.

**No-code change.** Run `npm run flow:no-code`; do not judge the diff by eye. Exit 0 means no-code: every changed path (commits since the merge base with `origin/main`, plus uncommitted and untracked files) ends in `.md` (not `.mdx`, which Storybook renders) and sits under `.claude/`, `docs/` or `.changeset/`, or is a root `*.md` (`README.md`, `CLAUDE.md`). Exit 1 means code, and it prints the paths that make it so (`src/`, `scripts/`, `tokens/`, config, a `.sh` or `.py` inside a skill). A no-code change skips review-bugs and qa-run, recorded as one checklist line (`review-bugs, qa-run: skipped, no-code change`); every other step still runs. This is the rule, not the agent's call: a mixed diff never skips.

| Step | Skill | Required | Does |
| --- | --- | --- | --- |
| artifact | Artifact tool | optional | Change touches UI: publish an Artifact showing each new or changed screen in its states (default, empty, loading, error) and link it in the thread. No UI: one checklist line, skip. |
| review-spec | `matt-code-review` | yes, unless `implement` ran it | Standards + spec against the ticket, spec or bug report. For `flow idea` and ticket threads it already ran at the end of `implement`: skip with one checklist line. `flow fix` and `flow change` have no `implement`, so it runs here. |
| review-bugs | `code-review` (built-in) | yes, unless no-code | Hunt logic, security and performance bugs. |
| review-lean | ponytail-review | yes | Hunt code that should not exist. |
| review-security | `security-review` (built-in) | optional | Security pass on the change. |
| qa-run | `run` (built-in) | yes, unless no-code | Run the real thing (Storybook for components) and check: each acceptance criterion (ticket or spec), the bug is gone (fix), or the change works. Open the full Storybook URL (manager, not the iframe) with the path and params under test, reload it once, and check at desktop width and at 390px; attach the 390px screenshot in the thread. Report pass/fail per criterion only, fix nothing here. |
| qa-a11y | `a11y-enforcer:a11y-check` | optional | WCAG check when there is UI. |
| debt | ponytail-debt | yes | Ledger of `shortcut:` comments in the change. |
| ship | none | yes | See below. |
| retro notes | none | yes | After merge, write one to three raw friction notes from this thread (see [Retro batches](SKILL.md#retro-batches)). The retro itself runs once per batch, not here. |

**Visual impact (qa-run).** Local visual tests always fail against the CI baselines (other fonts and Chromium build), so a red run says nothing. Instead run `npx vitest --project visual run` on the base commit and again on the change, keeping a copy of `.vitest-attachments/` from each, and compare the two sets of actual images. Identical: no `update screenshots` label. Different: the label is needed, and the diff shows what changed.

## Loops

A review, QA or CI finding sends the work back to the build step to fix, then down the table again. Up to 3 loops; the 4th needs the user's yes (`ask_decision`).

## Ship

1. Work on the thread's branch, never the default branch; never force-push.
2. Before pushing, run what CI runs (`npm run tokens:check`, `npm run registry:check`, `npm run lint`, `npx tsc -b`, Storybook tests for touched components) and add a changeset in `.changeset/` (an empty one when nothing ships). Component work also passes [COMPONENTS.md](COMPONENTS.md) gates 4 and 5 and pastes its PR checklist.
3. Open a draft PR and watch it. Fix small CI failures in place; larger ones go back to the build step.
4. The PR stays draft until CI is green, every acceptance criterion is met (checked by qa-run, or by the review steps for a no-code change), no follow-up commit is planned and the `update screenshots` label is gone (the baselines job removes it when it finishes). Only then mark it ready and turn on auto-merge (GitHub MCP `enable_pr_auto_merge`, method `squash`) for every PR, `update screenshots` ones included. Tell the user in one line it is ready and merges itself once CI is green. The `main` ruleset requires the `check` job, so GitHub merges only on green. GitHub refuses auto-merge on a PR whose checks already passed (clean status), which is the usual case here: then squash-merge it directly (`merge_pull_request`, method `squash`). Any other failure: say why and leave the merge to the user. If a commit becomes needed after that, turn auto-merge off (`disable_pr_auto_merge`) and convert the PR back to draft first, and say so in the thread. Wait for the merge event. Ask when a conflict cannot be resolved cleanly.
5. After merge: mirror repo Markdown to the vault (see [SKILL.md](SKILL.md#vault)), write the retro notes, then the thread's closing step. Ticket threads skip the mirror and send their retro notes to the map thread instead ([TICKET-THREAD.md](TICKET-THREAD.md)).

## A bug from an earlier PR

From the second ticket on, if the failure traces to an already-merged PR (`git log`, `git blame`):

- Small, and this ticket needs it: fix it in this PR as its own commit `fix: … from #<n>`, with a regression test, noted in the PR body.
- Large or separable: pause, get a `flow fix` thread started through the coordinator, ship that first, then merge main into this branch and continue.
- Ask the user before reverting a merged PR or when the fix changes a decision in the spec.
