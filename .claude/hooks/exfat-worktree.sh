#!/bin/sh
# SessionStart everywhere (Mac, cloud), and PreToolUse on Bash calls that
# mention git (argument `git`).
#
# The exFAT drive makes macOS write AppleDouble `._*` files into .git (e.g.
# ._pack-*.idx); git then prints "non-monotonic index" and some commands fail.
# Delete them from the shared git dir (~60 ms). Some cannot be deleted from the
# sandbox (._config, worktrees/*/._commondir): ignore that.
cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0
if [ "$1" = git ]; then grep -q git || exit 0; fi
d=$(git rev-parse --git-common-dir 2>/dev/null) && find "$d" -name '._*' -delete 2>/dev/null
[ "$1" = git ] && exit 0
# A new worktree has no node_modules: tsc still resolves from the parent
# checkout, vitest does not. stdout of a SessionStart hook lands in the
# session's context; keep npm's out. npm writes .package-lock.json last, so a
# half-finished install retries.
[ -f node_modules/.package-lock.json ] || npm ci --no-audit --no-fund >&2
exit 0
