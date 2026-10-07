# Zweihänder

Project info (decisions, tickets, roadmap, research, Figma links) lives in the Obsidian vault, not in this repo:
@/Volumes/KAFKA/Vault/10-projects/zweihander/_context.md

- Before writing to the vault, read `/Volumes/KAFKA/Vault/CLAUDE.md` (frontmatter, `_context.md`, `_system/agent-log.md`). Design or front-end work also reads `/Volumes/KAFKA/Vault/_system/context/design-system.md`.
- Docs that ship with the code (README, Storybook MDX) stay in this repo. Do not copy them into the vault.
- Code is the token source: edit `tokens/*.json`, run `npm run tokens`, then sync to Figma. `npm run tokens:check` and `npm run registry:check` must pass.
- Dev: `npm run storybook` (6006), `npm run dev` (5173), `npm run lint`.
- Drive is exFAT: use `npm`, not `pnpm` (no hardlinks).
