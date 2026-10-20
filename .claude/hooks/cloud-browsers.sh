#!/bin/sh
# SessionStart: in a cloud container, point story tests at its one prebuilt
# Chromium (read by vite.config.ts), refresh origin/main (the clone's copy can
# be stale, which skews diffs and branch resets). exfat-worktree.sh installs
# dependencies. Elsewhere (the Mac, CI) it does nothing.
[ -x /opt/pw-browsers/chromium ] || exit 0
[ -n "$CLAUDE_ENV_FILE" ] &&
  printf 'export PW_CHROMIUM_PATH=/opt/pw-browsers/chromium\nexport VITEST_BROWSERS=chromium\n' >> "$CLAUDE_ENV_FILE"
cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0
# Bounded so a stalled proxy cannot eat the hook's budget before npm ci.
GIT_TERMINAL_PROMPT=0 timeout 60 git fetch --quiet origin +main:refs/remotes/origin/main >&2 ||
  echo 'cloud-browsers: git fetch origin main failed; origin/main may be stale' >&2
