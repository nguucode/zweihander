// node --test scripts/flow-no-code.test.mjs: the no-code rule from project-flow AFTER-BUILD.md.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { codePaths } from './flow-no-code.mjs'

test('Markdown under .claude/, docs/, .changeset/ or at the root is no-code', () => {
  assert.deepEqual(
    codePaths([
      '.claude/skills/project-flow/AFTER-BUILD.md',
      'docs/agents/domain.md',
      '.changeset/flow-no-code.md',
      'README.md',
      'CLAUDE.md',
    ]),
    [],
  )
})

test('MDX is code, even under docs/', () => {
  assert.deepEqual(codePaths(['docs/Intro.mdx', 'src/components/Button.mdx']), ['docs/Intro.mdx', 'src/components/Button.mdx'])
})

test('Markdown elsewhere is code', () => {
  assert.deepEqual(codePaths(['src/components/notes.md', 'tokens/README.md']), ['src/components/notes.md', 'tokens/README.md'])
})

test('a script inside a skill is code', () => {
  assert.deepEqual(codePaths(['.claude/skills/x/SKILL.md', '.claude/skills/x/run.sh']), ['.claude/skills/x/run.sh'])
})

test('a mixed diff lists only the code paths', () => {
  assert.deepEqual(codePaths(['docs/a.md', 'package.json', 'scripts/x.mjs']), ['package.json', 'scripts/x.mjs'])
})
