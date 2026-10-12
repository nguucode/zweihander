// node --test scripts/check-skills.test.mjs: the cases skills:check exists for.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { checkFile } from './check-skills.mjs'

// A file inside a real skill folder, so relative links resolve against it.
const file = new URL('../.claude/skills/project-flow/Fixture.md', import.meta.url).pathname

test('a relative link to a file that exists passes, with or without an anchor', () => {
  assert.deepEqual(checkFile(file, 'See [SKILL.md](SKILL.md), [vault](SKILL.md#vault) and [part](components/pattern.md).'), [])
  assert.deepEqual(checkFile(file, 'Up and over: [tdd](../tdd/SKILL.md), [here](./AFTER-BUILD.md).'), [])
})

test('a relative link to a missing file fails, with its line', () => {
  const errors = checkFile(file, 'line one\nSee [gone](GONE.md) and [also](../nope/SKILL.md#x).')
  assert.equal(errors.length, 2)
  assert.match(errors[0], /Fixture\.md:2: links to GONE\.md/)
  assert.match(errors[1], /Fixture\.md:2: links to \.\.\/nope\/SKILL\.md/)
})

test('URLs, anchors and links inside code are not checked', () => {
  assert.deepEqual(checkFile(file, '[a](https://x.dev/y.md) [b](#top) [c](mailto:a@b.c) `[d](gone.md)`'), [])
  assert.deepEqual(checkFile(file, '```md\n- [Ordering](./src/ordering/GLOSSARY.md)\n```\n'), [])
})

test('a .claude/skills path must exist', () => {
  assert.deepEqual(checkFile(file, 'Read `.claude/skills/implement/SKILL.md` and `.claude/skills/project-flow/`.'), [])
  const errors = checkFile(file, 'Read `.claude/skills/zw-build/SKILL.md`.\nAnd .claude/skills/project-flow/GONE.md.')
  assert.equal(errors.length, 2)
  assert.match(errors[0], /Fixture\.md:1: names \.claude\/skills\/zw-build\/SKILL\.md/)
  assert.match(errors[1], /Fixture\.md:2: names \.claude\/skills\/project-flow\/GONE\.md/)
})

test('a placeholder or glob in a .claude/skills path is not a path', () => {
  assert.deepEqual(checkFile(file, '`.claude/skills/<name>/SKILL.md` and `.claude/skills/*/SKILL.md`'), [])
})
