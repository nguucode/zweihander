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
Baselines cover only stories under `src/components/**`; a change that touches none of them (the Playground, `.storybook/`, docs) skips the compare and never gets the label.

**Playground QA (qa-run).** The Storybook manager does not pass `theme-*` params to the story, and `npm run dev` (5173) cannot show the preview iframe's content. Open the story iframe directly instead: `http://localhost:6006/iframe.html?id=site-playground--default&viewMode=story&theme-accent=<value>&...`, reload once, and check at desktop width and below 1024px (the left column becomes a drawer there), plus 390px for the screenshot.

## Loops

A review, QA or CI finding sends the work back to the build step to fix, then down the table again. Up to 3 loops; the 4th needs the user's yes (`ask_decision`).

## Ship

1. Work on the thread's branch, never the default branch; never force-push.
2. Before pushing, run what CI runs (`npm run tokens:check`, `npm run registry:check`, `npm run lint`, `npx tsc -b`, Storybook tests for touched components) and add a changeset in `.changeset/` (an empty one when nothing ships). Component work also passes [COMPONENTS.md](COMPONENTS.md) gates 4 and 5 and pastes its PR checklist.
3. Open a draft PR and watch it. GitHub rejects a review request to the PR's own author, so when the PR is opened as the user, skip the reviewer request (the assignee is enough). Fix small CI failures in place; larger ones go back to the build step.
4. The PR stays draft until CI is green, every acceptance criterion is met (checked by qa-run, or by the review steps for a no-code change), no follow-up commit is planned and the `update screenshots` label is gone (the baselines job removes it when it finishes). Only then mark it ready and turn on auto-merge (GitHub MCP `enable_pr_auto_merge`, method `squash`) for every PR, `update screenshots` ones included. Tell the user in one line it is ready and merges itself once CI is green. The `main` ruleset requires the `check` job, so GitHub merges only on green. GitHub refuses auto-merge on a PR whose checks already passed (clean status), which is the usual case here: then squash-merge it directly (`merge_pull_request`, `merge_method: squash`). Any other failure: say why and leave the merge to the user. If a commit becomes needed after that (other than a merge of `main`, see [Merge conflicts](#merge-conflicts)), turn auto-merge off (`disable_pr_auto_merge`) and convert the PR back to draft first, and say so in the thread. Wait for the merge event. Resolve conflicts with `main` yourself ([Merge conflicts](#merge-conflicts)).
   **UI changes wait for the user's review on localhost** (user, 2026-10-13). A UI change is one the artifact step counts as UI (it changes what a screen, component, story or docs page looks like or does). For it, the ship step stops at a ready PR with auto-merge off:
   1. `list_devices`, then `start_rc_session` on the user's Mac, folder `/Volumes/KAFKA/Code/zweihander`, with `instructions`: `git fetch origin <branch>` and check it out, `npm ci` if `node_modules` is missing or `package-lock.json` changed, run `npm run storybook`, and report the localhost URL back.
   2. Reply in the thread with the localhost links to each changed story or docs page and what to look at (states, widths, light and dark).
   3. Merge (`merge_pull_request`, squash) only after the user approves in the thread. Asked for changes: back to the build step, then repeat from 1. Stop the Remote Control session after the merge.
   A non-UI change keeps auto-merge as above.
5. After merge: mirror repo Markdown to the vault (see [SKILL.md](SKILL.md#vault)), write the retro notes, then the thread's closing step. Ticket threads skip the mirror and send their retro notes to the map thread instead ([TICKET-THREAD.md](TICKET-THREAD.md)).

### Merge conflicts

A conflict with `main` is the thread's to fix, not the user's. Read the PR (`pull_request_read`, method `get`): `mergeable_state: dirty` (or `mergeable: false`) means a conflict; `mergeable: null` means GitHub is still computing, so read again. Check:

- before marking ready, and right before `merge_pull_request`;
- on a merge-conflict notice, a failed merge, or any PR event or check-in while waiting for the merge (a sibling PR merging first is the usual cause, and no notice may come).

Resolve it:

1. `git fetch origin main`, then `git merge origin/main` into the branch. The merge commit keeps the PR history and open reviews intact, so rebase, amend and force-push stay off the table.
2. Resolve each file by keeping both sides' intent: `main`'s change plus this PR's. Regenerate generated files with their script instead of hand-merging: for `package-lock.json` take `main`'s version (`git checkout --theirs package-lock.json`), then `npm install`; tokens output `npm run tokens`; `src/playground/manifest.json` `npm run playground:manifest`.
3. Rerun the ship step 2 checks, commit the merge (`Merge origin/main into <branch>`), push, and let CI rerun. This push keeps auto-merge on and the PR ready: GitHub merges once the new CI is green. If the PR was not yet ready, continue the ship step where it stopped.
4. Ask the user (`ask_decision`) only when the two sides conflict on product behaviour or a decision in the spec, so keeping both is impossible and picking one changes what users see. Say which PR's change wins under each option. Everything else (imports, adjacent edits, lists, docs, changesets, generated files) is resolved without asking.

Record it as one checklist line (`merged main, resolved conflicts in <files>`); no reply unless the user had to decide.

## A bug from an earlier PR

From the second ticket on, if the failure traces to an already-merged PR (`git log`, `git blame`):

- Small, and this ticket needs it: fix it in this PR as its own commit `fix: … from #<n>`, with a regression test, noted in the PR body.
- Large or separable: pause, get a `flow fix` thread started through the coordinator, ship that first, then merge main into this branch and continue.
- Ask the user before reverting a merged PR or when the fix changes a decision in the spec.
