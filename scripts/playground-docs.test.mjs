// node --test scripts/playground-docs.test.mjs: what the Playground reads from an MDX page.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readDocs } from './playground-docs.mjs'

const page = `
<DocTabs>
<DocTab value="specs">

## Measurements

<SpecTable
  caption="sm"
  rows={[
    { part: 'Container', property: 'Height', token: '--control-sm' },
  ]}
/>

<SpecTable rows={[{ part: 'Focus ring', property: 'Colour', token: '--ring' }]} />

## Color

<SpecTable caption="primary" rows={[{ part: 'Label', property: 'Colour', token: '--primary-foreground' }]} />

## States

<SpecTable caption="not read" rows={[]} />

</DocTab>
<DocTab value="guidelines">

## When to use

Use it for an action.

- Save
- Delete

<DoDont
  do={<Story of={XStories.DoOne} />}
  doCaption="One primary."
  dont={<Story of={XStories.DontTwo} />}
  dontCaption={'"Two" compete.'}
/>

## When not to use

Not for navigation.

</DocTab>
</DocTabs>
`

test('reads the tables, prose and Do/Don’t pairs', () => {
  assert.deepEqual(readDocs(page), {
    measurements: [
      { caption: 'sm', rows: [{ part: 'Container', property: 'Height', token: '--control-sm' }] },
      { rows: [{ part: 'Focus ring', property: 'Colour', token: '--ring' }] },
    ],
    color: [{ caption: 'primary', rows: [{ part: 'Label', property: 'Colour', token: '--primary-foreground' }] }],
    whenToUse: ['Use it for an action.', '- Save\n- Delete'],
    whenNotToUse: ['Not for navigation.'],
    doDont: [{ do: { story: 'DoOne', caption: 'One primary.' }, dont: { story: 'DontTwo', caption: '"Two" compete.' } }],
  })
})

test('a page without DocTabs has nothing for the tabs', () => {
  assert.equal(readDocs('# Pattern\n\n## Layout\n'), null)
})

test('a row that is not a literal fails loudly', () => {
  assert.throws(() => readDocs('<DocTabs>\n## Measurements\n<SpecTable rows={rows} />'), /Identifier is not a literal/)
})
