# Zweihänder

Project info (decisions, tickets, roadmap, Figma links) lives in the Obsidian vault, not in this repo:
@/Volumes/KAFKA/Vault/10-projects/zweihander/_context.md

- Before writing to the vault, read `/Volumes/KAFKA/Vault/CLAUDE.md` (frontmatter, `_context.md`, `_system/agent-log.md`). Design or front-end work also reads `/Volumes/KAFKA/Vault/_system/context/design-system.md`.
- Docs that ship with the code (README, Storybook MDX) stay in this repo. Do not copy them into the vault.
- Code is the token source: edit `tokens/*.json`, run `npm run tokens`, then sync to Figma. `npm run tokens:check`, `npm run registry:check` and `npm run playground:check` must pass. Changed a story? Run `npm run playground:manifest` and commit `src/playground/manifest.json`.
- Dev: `npm run storybook` (6006), `npm run dev` (5173), `npm run lint`.
- Story tests in a cloud container (one prebuilt Chromium, no Firefox/WebKit): `PW_CHROMIUM_PATH=/opt/pw-browsers/chromium VITEST_BROWSERS=chromium npx vitest run --project=storybook <path>`. No hand-made config; CI sets neither and runs all three engines.
- Drive is exFAT: use `npm`, not `pnpm` (no hardlinks).
- Research (`/research`): save to `docs/research/YYYY-MM-DD-<topic>.md` in this repo, then copy it to the vault mirror `10-projects/zweihander/repo/docs/research/` (same place the `flow` mod copies repo Markdown; on the Mac `/flow:vault` does it) and add a line to `_context.md`.
- Skills: when a skill in `.claude/skills/` overlaps a built-in or plugin skill, use the one in `.claude/skills/` (`matt-code-review` for standards + spec review). The flow's bug-hunt step still uses the built-in `/code-review` on purpose.
- Workflow: every implementation (new work, fix, behaviour change) follows `.claude/skills/project-flow/` by default: `flow idea`, `flow fix` or `flow change`, with `zw-build` on top for components. After `to-tickets`, each ticket runs in its own thread. Skip it only when the user says so.

## Agent skills

### Issue tracker

Markdown files in the vault, `10-projects/zweihander/<feature>/issues/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five roles, written as the issue's `Status:` line. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context; `CONTEXT.md` and ADRs live in the vault. See `docs/agents/domain.md`.
