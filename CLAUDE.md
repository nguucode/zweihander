# Zweihänder

Project info (decisions, tickets, roadmap, Figma links) lives in the Obsidian vault, not in this repo:
@/Volumes/KAFKA/Vault/10-projects/zweihander/_context.md

- Before writing to the vault, read `/Volumes/KAFKA/Vault/CLAUDE.md` (frontmatter, `_context.md`, `_system/agent-log.md`). Design or front-end work also reads `/Volumes/KAFKA/Vault/_system/context/design-system.md`.
- Docs that ship with the code (README, Storybook MDX) stay in this repo. Do not copy them into the vault.
- Code is the token source: edit `tokens/*.json`, run `npm run tokens`, then sync to Figma. `npm run tokens:check` and `npm run registry:check` must pass.
- Dev: `npm run storybook` (6006), `npm run dev` (5173), `npm run lint`.
- Drive is exFAT: use `npm`, not `pnpm` (no hardlinks).
- Research (`/research`): save to `docs/research/YYYY-MM-DD-<topic>.md` in this repo, then copy a version into the vault at `10-projects/zweihander/research/` (vault rules apply: frontmatter, a line in `_context.md`).
- Skills: when a skill in `.claude/skills/` overlaps a built-in or plugin skill, use the one in `.claude/skills/`. Review a diff with `/matt-code-review`, not the built-in `/code-review` or `/ponytail-review`.

## Agent skills

### Issue tracker

Markdown files in the vault, `10-projects/zweihander/<feature>/issues/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five roles, written as the issue's `Status:` line. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context; `CONTEXT.md` and ADRs live in the vault. See `docs/agents/domain.md`.
