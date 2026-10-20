// node --test scripts/ship-check.test.mjs: what ship:check does with the branch before a push.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { plan } from './ship-check.mjs'

test('a new branch, or one level with or ahead of its remote, pushes', () => {
  assert.equal(plan({ branch: 'x', remote: false, ahead: 0, behind: 0 }), 'push')
  assert.equal(plan({ branch: 'x', remote: true, ahead: 0, behind: 0 }), 'push')
  assert.equal(plan({ branch: 'x', remote: true, ahead: 2, behind: 0 }), 'push')
})

test('a branch behind its remote, with no local commits, fast-forwards first', () => {
  assert.equal(plan({ branch: 'x', remote: true, ahead: 0, behind: 1 }), 'pull')
})

test('a diverged branch stops with a reason', () => {
  assert.match(plan({ branch: 'x', remote: true, ahead: 1, behind: 1 }), /^x has diverged from origin\/x \(1 local, 1 remote/)
})

test('main never ships', () => {
  assert.match(plan({ branch: 'main', remote: true, ahead: 0, behind: 0 }), /^on main/)
})
