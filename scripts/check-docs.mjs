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
 * 2. Every component page (src/components/<category>/<Name>.mdx) uses
 *    <DocTabs>, so the format cannot drift back to one long page. Patterns,
 *    templates and the Overview pages are not component docs and keep theirs.
 * 3. A page that uses <DocTabs> has the three tabs, in order, and the sections
 *    each tab must carry (spec: component-docs, Q14).
 * 4. Every story a page names (`<Canvas of={ButtonStories.Default} />`, or any
 *    other `ButtonStories.X`) is exported by the stories file it imports. A
 *    renamed story otherwise breaks the page only when someone opens it.
 * 5. Every token a <SpecTable> lists is one the component's CSS reads with
 *    var(). The component's CSS is every stylesheet reached from the page's
 *    relative and `@/` imports and the <Name>.tsx beside it, following imports
 *    (a page that reaches no stylesheet is skipped). A row
 *    otherwise documents a token the component does not use, and its value
 *    column shows a number the component never renders.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { existsSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve, sep } from 'node:path'

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

/** Relative and `@/` targets of `from` and `import` in a script. */
const IMPORT = /(?:from|import)\s+['"]((?:\.{1,2}|@)\/[^'"]+)['"]/g

/** The file an import names, trying the extensions TypeScript would. */
const resolveImport = (from, spec) => {
  const base = spec.startsWith('@/') ? join(root, 'src', spec.slice(2)) : resolve(dirname(from), spec)
  return [base, `${base}.tsx`, `${base}.ts`, join(base, 'index.tsx'), join(base, 'index.ts')].find((f) => existsSync(f) && statSync(f).isFile())
}

/** Every stylesheet these scripts import, directly or through other scripts. */
const stylesheetsFrom = (entries) => {
  const seen = new Set()
  const visit = (file) => {
    if (!file || seen.has(file)) return
    seen.add(file)
    if (file.endsWith('.css')) return
    for (const [, spec] of readFileSync(file, 'utf8').matchAll(IMPORT))
      if (!/\.(stories|test)$/.test(spec)) visit(resolveImport(file, spec))
  }
  entries.forEach(visit)
  return [...seen].filter((f) => f.endsWith('.css'))
}

const lineAt = (source, index) => source.slice(0, index).split('\n').length

/** Rule 4: `NS.Story` for every `import * as NS from '….stories'`. */
const storyErrors = (file, where, source) => {
  const errors = []
  for (const [, ns, spec] of source.matchAll(/import\s+\*\s+as\s+(\w+)\s+from\s+['"]([^'"]+\.stories)['"]/g)) {
    const stories = resolveImport(file, spec)
    if (!stories) {
      errors.push(`${where}: ${spec}: no such stories file`)
      continue
    }
    const exported = new Set(['default', ...[...readFileSync(stories, 'utf8').matchAll(/export\s+(?:const|let|function)\s+(\w+)/g)].map((m) => m[1])])
    for (const m of source.matchAll(new RegExp(`\\b${ns}\\.(\\w+)`, 'g')))
      if (!exported.has(m[1])) errors.push(`${where}:${lineAt(source, m.index)}: ${ns}.${m[1]} is not exported by ${spec}`)
  }
  return errors
}

/** Rule 5: SpecTable tokens the component's stylesheets read. */
const specTableErrors = (file, where, source) => {
  const rows = [...source.matchAll(/<SpecTable[\s\S]*?\/>/g)].flatMap((block) =>
    [...block[0].matchAll(/\btoken\s*[=:]\s*\{?\s*["'](--[a-zA-Z0-9-]+)["']/g)].map((m) => [m[1], block.index + m.index]),
  )
  if (!rows.length) return []
  const entries = [...source.matchAll(IMPORT)]
    .map(([, spec]) => spec)
    .filter((spec) => !/\.stories$/.test(spec) && !spec.includes('.storybook'))
    .map((spec) => resolveImport(file, spec))
  entries.push(resolveImport(file, `./${file.split(sep).pop().replace(/\.mdx$/, '')}`))
  const stylesheets = stylesheetsFrom(entries.filter(Boolean))
  // A page with no component beside it or imported (a fixture, a guide) has nothing to check against.
  if (!stylesheets.length) return []
  const read = new Set(stylesheets.flatMap((css) => [...readFileSync(css, 'utf8').matchAll(/var\(\s*(--[a-zA-Z0-9-]+)/g)].map((m) => m[1])))
  return rows
    .filter(([token]) => !read.has(token))
    .map(([token, index]) => `${where}:${lineAt(source, index)}: SpecTable names ${token}, which the component's CSS never reads`)
}

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

/** src/components/<category>/<Name>.mdx, minus the categories that are not components. */
const isComponentPage = (where) => {
  const m = where.split(sep).join('/').match(/^src\/components\/([^/]+)\/([^/]+)\.mdx$/)
  return !!m && !['patterns', 'templates'].includes(m[1]) && m[2] !== 'Overview'
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

  errors.push(...storyErrors(file, where, source), ...specTableErrors(file, where, source))

  const hasTabs = /<DocTabs[\s>]/.test(source)
  if (!hasTabs && isComponentPage(where))
    errors.push(`${where}: a component docs page needs <DocTabs> with the overview, specs and guidelines tabs (see .storybook/blocks/DocBlocks.mdx)`)
  if (hasTabs) {
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
  const files = args.length ? args.map((f) => resolve(f)) : [...walk(join(root, 'src'), '.mdx'), ...walk(join(root, '.storybook'), '.mdx')]
  const errors = files.flatMap((f) => checkFile(f))
  if (errors.length) {
    console.error(errors.join('\n'))
    console.error(`\ndocs:check: ${errors.length} problem${errors.length === 1 ? '' : 's'}`)
    process.exit(1)
  }
  console.log(`docs:check: ${files.length} MDX files, all tokens and stories exist, every SpecTable token is read by its component, every component page has its three tabs`)
}
