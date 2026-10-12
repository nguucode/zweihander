#!/bin/sh
# SessionStart: in a cloud container, point story tests at its one prebuilt
# Chromium (read by vite.config.ts). Elsewhere (the Mac, CI) it does nothing.
[ -x /opt/pw-browsers/chromium ] && [ -n "$CLAUDE_ENV_FILE" ] || exit 0
printf 'export PW_CHROMIUM_PATH=/opt/pw-browsers/chromium\nexport VITEST_BROWSERS=chromium\n' >> "$CLAUDE_ENV_FILE"
