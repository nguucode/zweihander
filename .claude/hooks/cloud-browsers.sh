#!/bin/sh
# SessionStart: in a cloud container, point story tests at its one prebuilt
# Chromium (read by vite.config.ts), refresh origin/main (the clone's copy can
# be stale, which skews diffs and branch resets) and install dependencies when
# the fresh clone has none, so lint, tsc and the token checks run. Elsewhere
# (the Mac, CI) it does nothing.
[ -x /opt/pw-browsers/chromium ] || exit 0
[ -n "$CLAUDE_ENV_FILE" ] &&
  printf 'export PW_CHROMIUM_PATH=/opt/pw-browsers/chromium\nexport VITEST_BROWSERS=chromium\n' >> "$CLAUDE_ENV_FILE"
cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0
git fetch --quiet origin main >&2 || true
# stdout of a SessionStart hook lands in the session's context; keep npm's out.
# npm writes .package-lock.json last, so a half-finished install retries.
[ -f node_modules/.package-lock.json ] || npm ci --no-audit --no-fund >&2
