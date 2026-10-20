/**
 * zweihander/semantic-tokens: a component reads semantic tokens only.
 *
 * Every `var(--name)` in a component stylesheet must be one of:
 *   - a token the build declares in src/tokens.css, minus the primitives
 *     (--gray-50 … --gray-950, --accent-solid-light …), which exist so the
 *     Theme can swap ramps and are never read by components directly;
 *   - a custom property the kit declares itself: in any stylesheet under
 *     src/, or as a '--name' string in a .ts/.tsx file (inline styles);
 *   - a runtime variable a dependency sets, listed in the `external` option.
 *
 * Anything else is a primitive (reported as such) or a name nothing sets,
 * usually a typo, which would silently fall back to the property's initial
 * value.
 *
 * zweihander/no-token-shadow: a component stylesheet never declares a name
 * src/tokens.css emits. A local `--radio-dot` once collided with a new
 * `--radio-dot` token and the dot silently changed colour (PR #138). An
 * intended restatement (a surface setting --background for what sits on it)
 * takes a `stylelint-disable-next-line zweihander/no-token-shadow -- <reason>`.
 * A separate rule so that comment leaves the var() check on the line alone.
 */
import { readFileSync, globSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import stylelint from 'stylelint'

const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions },
} = stylelint

const ruleName = 'zweihander/semantic-tokens'
const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const PRIMITIVE = [/^--gray-\d+$/, /^--accent-(solid|contrast|ring|text|subtle|subtle-text)-(light|dark)$/]
const isPrimitive = (name) => PRIMITIVE.some((re) => re.test(name))

const messages = ruleMessages(ruleName, {
  primitive: (name) => `Unexpected primitive "${name}". Read a semantic token instead, or add one to tokens/semantic.json.`,
  unknown: (name) => `Unknown custom property "${name}": not a token, not declared in src/, not in "external". A typo?`,
})

const DECLARED = /(--[A-Za-z0-9-]+)\s*:/g
const QUOTED = /['"`](--[A-Za-z0-9-]+)['"`]/g
const VAR = /var\(\s*(--[A-Za-z0-9-]+)/g

let tokens
function tokenNames() {
  tokens ??= new Set([...readFileSync(join(root, 'src/tokens.css'), 'utf8').matchAll(DECLARED)].map((m) => m[1]))
  return tokens
}

let known
function knownNames() {
  if (known) return known
  known = new Set([...tokenNames()].filter((name) => !isPrimitive(name)))
  for (const file of globSync('src/**/*.css', { cwd: root })) {
    if (file.endsWith('tokens.css')) continue
    for (const m of readFileSync(join(root, file), 'utf8').matchAll(DECLARED)) known.add(m[1])
  }
  for (const file of globSync('src/**/*.{ts,tsx}', { cwd: root }))
    for (const m of readFileSync(join(root, file), 'utf8').matchAll(QUOTED)) known.add(m[1])
  return known
}

const ruleFunction = (primary, secondary) => (cssRoot, result) => {
  const valid = validateOptions(
    result,
    ruleName,
    { actual: primary, possible: [true] },
    { actual: secondary, possible: { external: [(v) => typeof v === 'string'] }, optional: true },
  )
  if (!valid) return
  const external = new Set(secondary?.external ?? [])
  const names = knownNames()
  // The file being linted may not be saved yet (an editor buffer), so its own
  // declarations count too.
  const local = new Set()
  cssRoot.walkDecls((decl) => decl.prop.startsWith('--') && local.add(decl.prop))

  cssRoot.walkDecls((decl) => {
    for (const m of decl.value.matchAll(VAR)) {
      const name = m[1]
      const primitive = isPrimitive(name)
      if (!primitive && (names.has(name) || local.has(name) || external.has(name))) continue
      const index = decl.prop.length + (decl.raws.between?.length ?? 1) + m.index + m[0].indexOf('--')
      report({
        result,
        ruleName,
        node: decl,
        index,
        endIndex: index + name.length,
        message: primitive ? messages.primitive(name) : messages.unknown(name),
      })
    }
  })
}

ruleFunction.ruleName = ruleName
ruleFunction.messages = messages

const shadowName = 'zweihander/no-token-shadow'
const shadowMessages = ruleMessages(shadowName, {
  shadow: (name) => `"${name}" is a token in src/tokens.css. Rename the local property, or mark an intended override with a reasoned disable comment.`,
})

const shadowFunction = (primary) => (cssRoot, result) => {
  if (!validateOptions(result, shadowName, { actual: primary, possible: [true] })) return
  const names = tokenNames()
  cssRoot.walkDecls((decl) => {
    if (names.has(decl.prop))
      report({ result, ruleName: shadowName, node: decl, word: decl.prop, message: shadowMessages.shadow(decl.prop) })
  })
}

shadowFunction.ruleName = shadowName
shadowFunction.messages = shadowMessages

export default [createPlugin(ruleName, ruleFunction), createPlugin(shadowName, shadowFunction)]
