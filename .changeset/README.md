# Changesets

Every PR that changes `src/` adds one: `npx changeset`. PRs that only touch docs, tests or tooling add `npx changeset --empty`. Write it for people using the library: what changed and what they have to change in their code. Before 1.0, breaking changes bump `minor`, everything else `patch`.
