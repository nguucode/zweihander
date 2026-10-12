/**
 * Asserts the component docs say only true things about the code.
 *
 *   node scripts/check-docs.mjs          check every MDX file
 *   node scripts/check-docs.mjs <file…>  check only these (used by the tests)
 *
 * 1. Every token an MDX page names must exist. A page names a token in a code
 *    span (`--primary`) or in a docs block prop (token="--primary"). Exists
 *    means some stylesheet under src/ declares it: tokens.css for the token
 *    layer, a component's CSS for the variables it exposes (`--field-border`).
 *    A renamed token otherwise leaves the docs pointing at nothing, and a
 *    SpecTable row silently shows no value. A page that names a token on
 *    purpose because it does NOT exist ("there is no `--radius-xs`") says so
 *    with an MDX comment, reason required, like a stylelint disable:
 *      {/* docs:check allow --radius-xs -- the page explains why it is absent *\/}
 * 2. A page that uses <DocTabs> has the three tabs, in order, and the sections
 *    each tab must carry (spec: component-docs, Q14). Pages not yet migrated
 *    are left alone until the lock-format ticket turns this on for all.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, relative } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const walk = (dir, ext) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    // The drive is exFAT: macOS writes an AppleDouble `._<name>` beside every file.
    if (e.name.startsWith('._') || e.name === 'node_modules') return []
    const path = join(dir, e.name)
    return e.isDirectory() ? walk(path, ext) : e.name.endsWith(ext) ? [path] : []
  })

const declared = new Set(
  walk(join(root, 'src'), '.css').flatMap((file) =>
    [...readFileSync(file, 'utf8').matchAll(/(--[a-zA-Z0-9-]+)\s*:/g)].map((m) => m[1]),
  ),
)

/** What each tab must contain: a heading by its text, or a block by its tag. */
export const REQUIRED = {
  overview: ['<Canvas', '## Resources'],
  specs: ['## Anatomy', '<Anatomy', '## Measurements', '## Color', '<SpecTable', '## States', '<States', '## API', '<ArgTypes'],
  guidelines: ['## When to use', '## When not to use', '<DoDont', '## Accessibility'],
}
const TABS = Object.keys(REQUIRED)

/** Token names a page mentions, with the line each is on. */
const tokenMentions = (source) => {
  const found = []
  source.split('\n').forEach((line, i) => {
    // `--name` or `--name: value` in a code span. Patterns such as `--text-<role>`
    // or `--shadow-*` name a family, not a token, and are skipped.
    for (const [, name] of line.matchAll(/`(--[a-zA-Z0-9-]+)(?::[^`]*)?`/g)) found.push([name, i + 1])
    // token="--x", token='--x', token: '--x', token={'--x'}
    for (const [, name] of line.matchAll(/\btoken\s*[=:]\s*\{?\s*["'](--[a-zA-Z0-9-]+)["']/g)) found.push([name, i + 1])
  })
  return found
}

/** The body of each <DocTab value="…"> on a page, in order. */
const tabsOf = (source) =>
  [...source.matchAll(/<DocTab\s+value=["']([a-z]+)["']\s*>([\s\S]*?)<\/DocTab>/g)].map(([, value, body]) => ({
    value,
    body,
  }))

export const checkFile = (file, source = readFileSync(file, 'utf8')) => {
  const errors = []
  const where = relative(root, file)
  const allowed = new Set()
  for (const [, names, reason] of source.matchAll(/docs:check allow ((?:--[a-zA-Z0-9-]+\s*)+)(?:--\s+(.*?))?\s*\*\//g)) {
    if (!reason?.trim()) errors.push(`${where}: "docs:check allow ${names.trim()}" needs a reason after " -- "`)
    for (const name of names.trim().split(/\s+/)) allowed.add(name)
  }
  for (const [name, line] of tokenMentions(source))
    if (!declared.has(name) && !allowed.has(name)) errors.push(`${where}:${line}: names ${name}, which no stylesheet in src/ declares`)

  if (/<DocTabs[\s>]/.test(source)) {
    const tabs = tabsOf(source)
    const order = tabs.map((t) => t.value).join(', ')
    if (order !== TABS.join(', '))
      errors.push(`${where}: <DocTabs> needs exactly the tabs ${TABS.join(', ')}, in that order; found ${order || 'none'}`)
    for (const { value, body } of tabs)
      for (const marker of REQUIRED[value] ?? [])
        if (!(marker.startsWith('#') ? new RegExp(`^${marker}\\s*$`, 'm').test(body) : body.includes(marker)))
          errors.push(`${where}: the ${value} tab is missing ${marker.startsWith('#') ? `"${marker}"` : `a ${marker}> block`}`)
  }
  return errors
}

const isMain = process.argv[1] === fileURLToPath(import.meta.url)
if (isMain) {
  const args = process.argv.slice(2)
  const files = args.length ? args.map((f) => join(process.cwd(), f)) : [...walk(join(root, 'src'), '.mdx'), ...walk(join(root, '.storybook'), '.mdx')]
  const errors = files.flatMap((f) => checkFile(f))
  if (errors.length) {
    console.error(errors.join('\n'))
    console.error(`\ndocs:check: ${errors.length} problem${errors.length === 1 ? '' : 's'}`)
    process.exit(1)
  }
  console.log(`docs:check: ${files.length} MDX files, all tokens exist, migrated pages complete`)
}
