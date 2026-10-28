/**
 * What the Playground's Specs and Guideline tabs show, read from a
 * component's MDX page: the SpecTables under Measurements and Color, the
 * Do/Don't pairs, and the When to use / When not to use prose.
 *
 * The MDX stays the one place these are written; this reads them the way
 * scripts/check-docs.mjs does (a docs block is found by its tag, its props
 * parsed as JavaScript literals), so the page and the Playground cannot
 * disagree. Anatomy parts come from the story file's `anatomyParts` export
 * instead, in build-playground-manifest.mjs.
 */
import { parseExpressionAt } from 'acorn'

/** A literal expression's value: strings, numbers, booleans, arrays and plain objects. */
function value(node) {
  switch (node.type) {
    case 'Literal':
      return node.value
    case 'TemplateLiteral':
      if (node.expressions.length) throw new Error('a template literal with ${} is not a literal')
      return node.quasis[0].value.cooked
    case 'ArrayExpression':
      return node.elements.map(value)
    case 'ObjectExpression':
      return Object.fromEntries(node.properties.map((p) => [p.key.name ?? p.key.value, value(p.value)]))
    default:
      throw new Error(`${node.type} is not a literal`)
  }
}

/** A JSX attribute's value in `block`: `name="…"` or `name={literal}`; undefined if absent. */
function attr(block, name) {
  const match = new RegExp(`\\s${name}=(["{])`).exec(block)
  if (!match) return undefined
  const start = match.index + match[0].length
  if (match[1] === '"') return block.slice(start, block.indexOf('"', start))
  return value(parseExpressionAt(block, start, { ecmaVersion: 'latest' }))
}

/** `## Heading` sections of the page, by heading text. */
function sections(source) {
  const heads = [...source.matchAll(/^## (.+)$/gm)]
  return Object.fromEntries(
    heads.map((h, i) => [h[1].trim(), source.slice(h.index + h[0].length, heads[i + 1]?.index ?? source.length)]),
  )
}

/** Every `<SpecTable … />` in a section, as { caption?, rows }. */
function tables(section = '') {
  return [...section.matchAll(/<SpecTable[\s\S]*?\/>/g)].map(([block]) => {
    const caption = attr(block, 'caption')
    return { ...(caption === undefined ? {} : { caption }), rows: attr(block, 'rows') }
  })
}

/** The prose of a section: its paragraphs and lists, without docs blocks or comments. */
function prose(section = '') {
  return section
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p && !p.startsWith('<') && !p.startsWith('{') && !p.startsWith('</'))
}

/**
 * The Do/Don't pairs of the page, as story export names and captions. A
 * pair's block ends on a line of its own (`/>`), after the nested <Story />s.
 */
function doDonts(source) {
  return [...source.matchAll(/<DoDont\b[\s\S]*?\n\/>/g)].map(([block]) => {
    const story = (side) => {
      const found = new RegExp(`\\s${side}=\\{<Story of=\\{\\w+\\.(\\w+)\\}`).exec(block)
      if (!found) throw new Error(`a <DoDont> has no ${side}={<Story of={…} />}`)
      return found[1]
    }
    return {
      do: { story: story('do'), caption: attr(block, 'doCaption') },
      dont: { story: story('dont'), caption: attr(block, 'dontCaption') },
    }
  })
}

/**
 * The Specs and Guideline data of one MDX page, or null for a page without
 * DocTabs (patterns, templates): those tabs are not written for it.
 */
export function readDocs(source) {
  if (!source.includes('<DocTabs')) return null
  const s = sections(source)
  return {
    measurements: tables(s.Measurements),
    color: tables(s.Color),
    whenToUse: prose(s['When to use']),
    whenNotToUse: prose(s['When not to use']),
    doDont: doDonts(source),
  }
}
