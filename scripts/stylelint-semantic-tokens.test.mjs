import { test } from 'node:test'
import assert from 'node:assert/strict'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import stylelint from 'stylelint'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const lint = async (code) => {
  const { results } = await stylelint.lint({
    code,
    configBasedir: root,
    config: {
      plugins: ['./scripts/stylelint-semantic-tokens.mjs'],
      reportDescriptionlessDisables: true,
      rules: { 'zweihander/no-token-shadow': true },
    },
  })
  return results[0].warnings.map((w) => w.text)
}

test('declaring a token name in a component fails (PR #138: --radio-dot)', async () => {
  const warnings = await lint('.dot { --background: red; }')
  assert.equal(warnings.length, 1)
  assert.match(warnings[0], /--background/)
})

test('a primitive counts too', async () => {
  assert.equal((await lint('.a { --gray-50: red; }')).length, 1)
})

test('a local name no token uses passes', async () => {
  assert.deepEqual(await lint('.dot { --radio-dot: red; color: var(--radio-dot); }'), [])
})

test('reading a token is not declaring it', async () => {
  assert.deepEqual(await lint('.a { color: var(--background); }'), [])
})

test('an intended override passes with a reasoned disable comment', async () => {
  const code = `.card {
  /* stylelint-disable-next-line zweihander/no-token-shadow -- children sit on the card */
  --background: var(--card);
}`
  assert.deepEqual(await lint(code), [])
})

test('a disable comment without a reason still fails', async () => {
  const code = `.card {
  /* stylelint-disable-next-line zweihander/no-token-shadow */
  --background: var(--card);
}`
  assert.equal((await lint(code)).length, 1)
})
