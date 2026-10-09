# Domain Docs

Single-context. Domain docs live in the vault, not the repo.

## Before exploring, read these

- **`/Volumes/KAFKA/Vault/10-projects/zweihander/CONTEXT.md`**: glossary (Foundation, Component, Category, Pattern, Registry…).
- **`/Volumes/KAFKA/Vault/10-projects/zweihander/_context.md`**: current state, decisions, roadmap.
- **`/Volumes/KAFKA/Vault/10-projects/zweihander/adr/`**: ADRs touching the area you work in. Older decisions also live as resolved issues in `/Volumes/KAFKA/Vault/10-projects/zweihander/v1-plan/issues/` (e.g. `02-primitive-library-decision.md`).
- Design or front-end work: `/Volumes/KAFKA/Vault/_system/context/design-system.md`.

If any of these don't exist, **proceed silently**. `/domain-modeling` creates them lazily, in Vietnamese, following `/Volumes/KAFKA/Vault/CLAUDE.md`.

## Use the glossary's vocabulary

When your output names a domain concept (issue title, refactor proposal, test name), use the term as defined in `CONTEXT.md`. Don't drift to synonyms it avoids. A missing concept is either invented language (reconsider) or a real gap (note it for `/domain-modeling`).

## Flag ADR conflicts

If your output contradicts an existing ADR or decision, surface it explicitly:

> _Contradicts ADR-0007 (…), but worth reopening because…_
