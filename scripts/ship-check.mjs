// npm run ship:check: run right before `git push`. Fetches origin, fast-forwards the branch when the
// remote has commits it lacks (the Visual baselines workflow commits to PR branches), then checks the
// changeset against a fresh origin/main. `npm run verify` covers the rest; it runs in the Test step.
import { execFileSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'

// What to do with the branch, given how far it is ahead of and behind its remote copy.
// Returns 'push' (nothing to pull), 'pull' (fast-forward first) or a one-line reason to stop.
export function plan({ branch, remote, ahead, behind }) {
  if (branch === 'main') return 'on main: ship from a branch'
  if (!remote || behind === 0) return 'push'
  if (ahead === 0) return 'pull'
  return `${branch} has diverged from origin/${branch} (${ahead} local, ${behind} remote commits): rebase or merge by hand`
}

const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim()

function fail(reason) {
  console.error(`ship:check: ${reason}`)
  process.exit(1)
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    git('fetch', 'origin')
  } catch {
    fail('git fetch origin failed')
  }
  const branch = git('branch', '--show-current')
  if (!branch) fail('detached HEAD: check out a branch')
  let remote = true
  try {
    git('rev-parse', '--verify', '--quiet', `origin/${branch}`)
  } catch {
    remote = false
  }
  const [ahead, behind] = remote
    ? git('rev-list', '--left-right', '--count', `HEAD...origin/${branch}`).split(/\s+/).map(Number)
    : [0, 0]
  const next = plan({ branch, remote, ahead, behind })
  if (next === 'pull') {
    try {
      git('merge', '--ff-only', `origin/${branch}`)
    } catch {
      fail(`fast-forward to origin/${branch} failed: commit or stash local changes first`)
    }
    console.log(`ship:check: pulled ${behind} commit(s) from origin/${branch}`)
  } else if (next !== 'push') fail(next)
  try {
    execFileSync('npx', ['changeset', 'status', '--since=origin/main'], { stdio: 'inherit' })
  } catch {
    fail('no changeset: add .changeset/<name>.md and `git add -A`')
  }
  console.log('ship:check: ready to push')
}
