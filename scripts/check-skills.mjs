/**
 * Asserts the agent skills point only at files that exist.
 *
 *   node scripts/check-skills.mjs          check .claude/skills/**.md and CLAUDE.md
 *   node scripts/check-skills.mjs <file…>  check only these
 *
 * 1. Every relative Markdown link resolves: [x](AFTER-BUILD.md),
 *    [x](../tdd/SKILL.md#red). URLs and #anchors are skipped, and so is
 *    anything in a code span or fence (examples of other repos' files).
 * 2. Every `.claude/skills/<path>` a file names exists, in code or not. A
 *    renamed or removed skill (zw-build) otherwise leaves agents reading a
 *    file that is not there. Placeholders (`<name>`) and globs (`*`) are
 *    not paths and are skipped.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, relative, resolve } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    // The drive is exFAT: macOS writes an AppleDouble `._<name>` beside every file.
    if (e.name.startsWith('._')) return []
    const path = join(dir, e.name)
    return e.isDirectory() ? walk(path) : e.name.endsWith('.md') ? [path] : []
  })

/** The source with fenced blocks and code spans blanked, so line numbers stay. */
const prose = (source) => {
  let fenced = false
  return source.split('\n').map((line) => {
    if (/^\s*(```|~~~)/.test(line)) {
      fenced = !fenced
      return ''
    }
    return fenced ? '' : line.replace(/`[^`]*`/g, (span) => ' '.repeat(span.length))
  })
}

export const checkFile = (file, source = readFileSync(file, 'utf8')) => {
  const errors = []
  const where = relative(root, file)
  prose(source).forEach((line, i) => {
    for (const [, target] of line.matchAll(/\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g)) {
      if (/^([a-z][a-z0-9+.-]*:|#|\/)/i.test(target)) continue
      const path = decodeURI(target.split('#')[0])
      if (!existsSync(resolve(dirname(file), path))) errors.push(`${where}:${i + 1}: links to ${target}, which does not exist`)
    }
  })
  source.split('\n').forEach((line, i) => {
    for (const [match] of line.matchAll(/\.claude\/skills\/[A-Za-z0-9_-][A-Za-z0-9_./-]*/g)) {
      const path = match.replace(/[.]+$/, '')
      if (!existsSync(join(root, path))) errors.push(`${where}:${i + 1}: names ${path}, which does not exist`)
    }
  })
  return errors
}

const isMain = process.argv[1] === fileURLToPath(import.meta.url)
if (isMain) {
  const args = process.argv.slice(2)
  const files = args.length ? args.map((f) => join(process.cwd(), f)) : [...walk(join(root, '.claude/skills')), join(root, 'CLAUDE.md')]
  const errors = files.flatMap((f) => checkFile(f))
  if (errors.length) {
    console.error(errors.join('\n'))
    console.error(`\nskills:check: ${errors.length} broken link${errors.length === 1 ? '' : 's'}`)
    process.exit(1)
  }
  console.log(`skills:check: ${files.length} Markdown files, every link and skill path exists`)
}
