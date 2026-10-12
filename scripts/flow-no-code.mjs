/**
 * Is this branch a no-code change? (project-flow AFTER-BUILD.md)
 *
 *   npm run flow:no-code
 *
 * Exit 0: every changed path is Markdown under .claude/, docs/, .changeset/
 * or at the root, so review-bugs and qa-run are skipped. Exit 1: prints the
 * paths that make it code. Covers commits since the merge base with
 * origin/main plus uncommitted and untracked files, renames as delete + add.
 */
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const isNoCode = (path) =>
  path.endsWith('.md') && (/^(\.claude|docs|\.changeset)\//.test(path) || !path.includes('/'))

export const codePaths = (paths) => paths.filter((p) => !isNoCode(p))

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const git = (...args) => execFileSync('git', ['-c', 'core.quotePath=false', ...args], { encoding: 'utf8' }).split('\n').filter(Boolean)
  const [base] = git('merge-base', 'origin/main', 'HEAD')
  const paths = [
    ...new Set([...git('diff', '--name-only', '--no-renames', base), ...git('ls-files', '--others', '--exclude-standard')]),
  ]
  const code = codePaths(paths)
  if (code.length) {
    console.log(`Code change (review-bugs and qa-run run). Not no-code:\n${code.map((p) => `  ${p}`).join('\n')}`)
    process.exit(1)
  }
  console.log(`No-code change (${paths.length} Markdown files): review-bugs, qa-run: skipped, no-code change`)
}
