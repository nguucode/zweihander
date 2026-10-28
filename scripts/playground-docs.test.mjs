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

<States states={[{ label: 'Hover', pseudo: 'hover' }, { label: 'Focus', pseudo: 'focus-visible' }, { label: 'Again', pseudo: 'hover' }]} />

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
    hasSpecs: true,
    measurements: [
      { caption: 'sm', rows: [{ part: 'Container', property: 'Height', token: '--control-sm' }] },
      { rows: [{ part: 'Focus ring', property: 'Colour', token: '--ring' }] },
    ],
    color: [{ caption: 'primary', rows: [{ part: 'Label', property: 'Colour', token: '--primary-foreground' }] }],
    pseudo: ['hover', 'focus-visible'],
    intro: [],
    whenToUse: ['Use it for an action.', '- Save\n- Delete'],
    whenNotToUse: ['Not for navigation.'],
    doDont: [{ do: { story: 'DoOne', caption: 'One primary.' }, dont: { story: 'DontTwo', caption: '"Two" compete.' } }],
    sections: [],
  })
})

test('a pattern page: Guideline from its opening prose and sections, no Specs', () => {
  const pattern = `import X from './X'\n\n# Pattern\n\nThe frame around an app.\n\n\`\`\`sh\nnpx add it\n\`\`\`\n\n<Canvas of={S.Default} />\n\n## Layout\n\n- Sidebar\n- Page\n\n| a | b |\n\n## Props\n\nNot read.\n`
  assert.deepEqual(readDocs(pattern), {
    hasSpecs: false,
    intro: ['The frame around an app.'],
    sections: [{ title: 'Layout', blocks: ['- Sidebar\n- Page'] }],
    whenToUse: [],
    whenNotToUse: [],
    doDont: [],
  })
})

test('a page with no prose at all gives nothing', () => {
  assert.equal(readDocs('# Pattern\n\n<Canvas of={S.Default} />\n\n## Props\n'), null)
})

test('a row that is not a literal fails loudly', () => {
  assert.throws(() => readDocs('<DocTabs>\n## Measurements\n<SpecTable rows={rows} />'), /Identifier is not a literal/)
})
