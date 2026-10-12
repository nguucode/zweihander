// node --test scripts/check-docs.test.mjs: the cases docs:check exists for.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { checkFile } from './check-docs.mjs'

const file = new URL('../src/components/Fixture.mdx', import.meta.url).pathname

const page = ({ overview = '', specs = '', guidelines = '', tabs = ['overview', 'specs', 'guidelines'] } = {}) => {
  const body = { overview, specs, guidelines }
  return `<DocTabs>\n${tabs.map((t) => `<DocTab value="${t}">\n\n${body[t] ?? ''}\n\n</DocTab>`).join('\n')}\n</DocTabs>\n`
}
const complete = {
  overview: '<Canvas of={S.Default} />\n\n## Resources\n',
  specs:
    '## Anatomy\n\n<Anatomy parts={[]} />\n\n## Measurements\n\n<SpecTable rows={[]} />\n\n## Color\n\n## States\n\n<States states={[]} />\n\n## API\n\n<ArgTypes of={S} />\n',
  guidelines: '## When to use\n\n## When not to use\n\n<DoDont />\n\n## Accessibility\n',
}

test('a token that exists passes, in a code span or a block prop', () => {
  assert.deepEqual(checkFile(file, 'Uses `--primary` and `--radius: 0.25rem`.\n<SpecTable rows={[{ token: \'--control-md\' }]} />'), [])
})

test('a token that does not exist fails, with its line', () => {
  const errors = checkFile(file, 'line one\nUses `--primray`.\n<SpecTable rows={[{ token: "--nope" }]} />')
  assert.equal(errors.length, 2)
  assert.match(errors[0], /Fixture\.mdx:2: names --primray/)
  assert.match(errors[1], /Fixture\.mdx:3: names --nope/)
})

test('a family pattern is not a token', () => {
  assert.deepEqual(checkFile(file, '`--text-<role>` and `--shadow-*`'), [])
})

test('an allow comment needs a reason', () => {
  assert.deepEqual(checkFile(file, '{/* docs:check allow --radius-xs -- explained below */}\nThere is no `--radius-xs`.'), [])
  assert.match(checkFile(file, '{/* docs:check allow --radius-xs */}\nThere is no `--radius-xs`.')[0], /needs a reason/)
})

test('a page outside a component category is not checked for tabs', () => {
  assert.deepEqual(checkFile(file, '# Button\n\n## Props\n'), [])
})

test('a component page in a category must use DocTabs', () => {
  const component = new URL('../src/components/buttons/Fixture.mdx', import.meta.url).pathname
  assert.match(checkFile(component, '# Button\n\n## Props\n')[0], /buttons\/Fixture\.mdx: a component docs page needs <DocTabs>/)
  assert.deepEqual(checkFile(component, page(complete)), [])
})

test('category overviews, patterns and templates keep their own format', () => {
  for (const path of ['buttons/Overview.mdx', 'patterns/application-ui/Fixture.mdx', 'templates/Overview.mdx', 'Overview.mdx'])
    assert.deepEqual(checkFile(new URL(`../src/components/${path}`, import.meta.url).pathname, '# Page\n'), [], path)
})

test('a complete migrated page passes', () => {
  assert.deepEqual(checkFile(file, page(complete)), [])
})

test('a missing or misordered tab fails', () => {
  assert.match(checkFile(file, page({ ...complete, tabs: ['overview', 'specs'] }))[0], /exactly the tabs overview, specs, guidelines/)
  assert.match(checkFile(file, page({ ...complete, tabs: ['specs', 'overview', 'guidelines'] }))[0], /found specs, overview, guidelines/)
})

test('a missing section fails, naming the tab', () => {
  const errors = checkFile(file, page({ ...complete, guidelines: '## When to use\n\n<DoDont />\n' }))
  assert.deepEqual(errors.map((e) => e.replace(/^.*?: /, '')), [
    'the guidelines tab is missing "## When not to use"',
    'the guidelines tab is missing "## Accessibility"',
  ])
  assert.match(checkFile(file, page({ ...complete, specs: complete.specs.replace('<States states={[]} />', '') }))[0], /specs tab is missing a <States> block/)
})

test('a heading only counts as a whole line', () => {
  const errors = checkFile(file, page({ ...complete, guidelines: complete.guidelines.replace('## When to use', '## When to use it sparingly') }))
  assert.match(errors[0], /missing "## When to use"/)
})

test("DocTabs keeps its tab in a URL parameter Storybook's manager does not read", async () => {
  // Storybook reads ?tab= as an addon tab id and hides the canvas when no
  // addon has it: a link to ?tab=specs opened on a blank page.
  const { readFile } = await import('node:fs/promises')
  const read = (path) => readFile(new URL(path, import.meta.url), 'utf8')
  const param = (await read('../.storybook/blocks/DocTabs.tsx')).match(/const PARAM = '([^']+)'/)?.[1]
  assert.ok(param, 'DocTabs.tsx declares const PARAM')
  const manager = (await read('../node_modules/storybook/dist/manager/runtime.js')) + (await read('../node_modules/storybook/dist/manager-api/index.js'))
  const reserved = new Set([...manager.matchAll(/getQueryParam\("(\w+)"\)/g)].map((m) => m[1]))
  for (const key of manager.match(/LAYOUT_QUERY_PARAM_KEYS = \[([^\]]*)\]/)?.[1].match(/\w+/g) ?? []) reserved.add(key)
  for (const key of ['path', 'viewMode', 'id', 'args', 'globals']) reserved.add(key)
  assert.ok(reserved.has('tab'), 'the scan still finds what Storybook reads')
  assert.ok(!reserved.has(param), `?${param}= is Storybook's own parameter`)
})

// A page beside real code, so the story and CSS lookups read the files they would in CI.
const buttonPage = new URL('../src/components/buttons/Fixture.mdx', import.meta.url).pathname
const withButton = (body) => `import { Button } from './Button'\nimport * as ButtonStories from './Button.stories'\n\n${body}\n`
// The fixture is a component page without tabs; these tests are about the other rules.
const check = (source) => checkFile(buttonPage, source).filter((e) => !e.includes('<DocTabs>'))

test('a story the stories file exports passes, as does its default export', () => {
  assert.deepEqual(check(withButton('<Canvas of={ButtonStories.Default} />\n<Story of={ButtonStories.Loading} />\n{ButtonStories.default.title}')), [])
})

test('a story the stories file does not export fails, with its line', () => {
  const errors = check(withButton('<Canvas of={ButtonStories.Default} />\n<Story of={ButtonStories.Gone} />'))
  assert.equal(errors.length, 1)
  assert.match(errors[0], /buttons\/Fixture\.mdx:5: ButtonStories\.Gone is not exported by \.\/Button\.stories/)
})

test('a stories import that points at no file fails', () => {
  assert.match(check("import * as S from './Nope.stories'\n")[0], /\.\/Nope\.stories: no such stories file/)
})

test("a SpecTable token the component's CSS reads passes, through its imports", () => {
  // Button.tsx imports Button.module.css, which reads both.
  assert.deepEqual(check(withButton("<SpecTable rows={[{ token: '--control-md' }, { token: '--primary' }]} />")), [])
})

test("a SpecTable token the component's CSS never reads fails, with its line", () => {
  const errors = check(withButton("<SpecTable\n  rows={[\n    { token: '--control-md' },\n    { token: '--sidebar-width' },\n  ]}\n/>"))
  assert.equal(errors.length, 1)
  assert.match(errors[0], /buttons\/Fixture\.mdx:7: SpecTable names --sidebar-width, which the component's CSS never reads/)
})

test('the command line takes relative and absolute paths', async () => {
  const { execFileSync } = await import('node:child_process')
  const script = new URL('./check-docs.mjs', import.meta.url).pathname
  const page = new URL('../src/components/buttons/Button.mdx', import.meta.url).pathname
  for (const arg of [page, 'src/components/buttons/Button.mdx'])
    assert.match(execFileSync('node', [script, arg], { cwd: new URL('..', import.meta.url).pathname, encoding: 'utf8' }), /1 MDX files/, arg)
})
