/**
 * Builds the Playground's item list from the story files.
 *
 *   node scripts/build-playground-manifest.mjs          write src/playground/manifest.json
 *   node scripts/build-playground-manifest.mjs --check  fail if a story file breaks or the file is stale
 *
 * storybook/index.json has ids and tags but no argTypes, so the Playground
 * cannot build a props panel from it. This script runs each story file for
 * real (Vite SSR: TS, JSX, CSS modules, `@/` imports) and asks Storybook's own
 * portable-stories API for the argTypes, so the panel offers the same controls
 * the Storybook Controls panel does: explicit `argTypes`, plus what
 * react-docgen infers from the component's props and JSDoc.
 *
 * Story order and ids come from Storybook's indexer (csf-tools), not from the
 * module's export order, which a bundler is free to change.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve as resolvePath } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import { builtinHandlers, builtinResolvers, makeFsImporter, parse as parseDocgen, utils } from 'react-docgen'
import { loadCsf } from 'storybook/internal/csf-tools'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = join(root, 'src')
const OUTPUT = 'src/playground/manifest.json'

/** Root of a story title -> manifest kind. Other roots (Foundations, Getting Started) are not items. */
const KINDS = { Components: 'component', Patterns: 'pattern', Templates: 'template' }
const STATUSES = ['stable', 'beta', 'experimental', 'deprecated']
/** Controls the Playground can render. Everything else (object, file, color, date, none) is left out. */
const CONTROLS = new Set(['select', 'radio', 'inline-radio', 'boolean', 'text', 'number'])

// --- react-docgen, the way @storybook/react-vite runs it -------------------
// Same resolver and handlers as Storybook's react-docgen Vite plugin, so a
// prop the Controls panel infers is a prop the manifest infers. Storybook's
// plugin itself is not a public export.

const EXTENSIONS = ['', '.tsx', '.ts', '.jsx', '.js', '/index.tsx', '/index.ts']
function lookupModule(spec, basedir) {
  // Packages are not followed: their prop types are not ours to document.
  const base = spec.startsWith('@/') ? join(src, spec.slice(2)) : spec.startsWith('.') ? resolvePath(basedir, spec) : null
  const hit = base && EXTENSIONS.map((ext) => base + ext).find((p) => existsSync(p) && statSync(p).isFile())
  if (hit) return hit
  throw Object.assign(new Error(`not resolved: ${spec}`), { code: 'MODULE_NOT_FOUND' })
}
const fsImporter = makeFsImporter(lookupModule)
const resolver = new builtinResolvers.FindExportedDefinitionsResolver()
/** The local name to hang __docgenInfo on, and the file that declares it (re-exports are skipped). */
const actualName = (doc, def) => {
  doc.set('definedInFile', def.hub.file.opts.filename)
  const id = def.isFunctionDeclaration() || def.isClassDeclaration() ? def.get('id') : def.parentPath?.isVariableDeclarator() ? def.parentPath.get('id') : null
  if (id?.node) doc.set('actualName', utils.getNameOrValue(id))
}
const handlers = [...Object.values(builtinHandlers), actualName]

const docgenPlugin = {
  name: 'playground-manifest:react-docgen',
  enforce: 'pre',
  transform(code, id) {
    if (!id.startsWith(src) || !/\.[jt]sx?$/.test(id) || id.includes('.stories.')) return
    let docs
    try {
      docs = parseDocgen(code, { resolver, handlers, importer: fsImporter, filename: id })
    } catch {
      return // no component in this file
    }
    const tail = docs
      .filter((d) => d.actualName && d.definedInFile === id)
      .map(({ actualName: name, definedInFile: _file, ...info }) => `;${name}.__docgenInfo=${JSON.stringify(info)}`)
      .join('')
    return tail ? code + tail : undefined
  },
}

// --- reading the stories ----------------------------------------------------

function storyFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = join(dir, e.name)
    if (e.isDirectory()) return storyFiles(full)
    // `._*`: macOS AppleDouble files on the exFAT drive.
    return /\.stories\.[jt]sx?$/.test(e.name) && !e.name.startsWith('._') ? [full] : []
  })
}

const isPrimitive = (v) => v === null || ['string', 'number', 'boolean'].includes(typeof v)

/** A docgen default ("'md'", "false", "2") as a JSON value, or undefined if it is an expression. */
function literal(summary) {
  if (summary == null) return undefined
  const s = String(summary).trim()
  if (/^(['"`]).*\1$/s.test(s)) return s.slice(1, -1)
  if (s === 'true' || s === 'false') return s === 'true'
  if (s !== '' && !Number.isNaN(Number(s))) return Number(s)
  return undefined
}

/**
 * Props that change nothing a visitor can see, or that freeze the item.
 * Plumbing (className, id, name, aria-*) has no visible effect. A controlled
 * prop with an uncontrolled twin (`open` / `defaultOpen`, `isCollapsed` /
 * `defaultCollapsed`) pins the state with no handler to change it, so only
 * the `default…` twin is offered.
 */
const PLUMBING = new Set(['className', 'id', 'name', 'autoFocus'])
function isHidden(name, all) {
  if (PLUMBING.has(name) || name.startsWith('aria-')) return true
  const bare = name.replace(/^is(?=[A-Z])/, '')
  return all.has(`default${bare[0].toUpperCase()}${bare.slice(1)}`)
}

/** One editable prop, or null if the Playground cannot offer a control for it. */
function toProp(name, argType, args, all, untyped) {
  if (isHidden(name, all)) return null
  const control = argType.control
  if (!control || control.disable) return null
  const type = typeof control === 'string' ? control : control.type
  // react-docgen could not read the prop's type (a union of prop objects,
  // a type from a package), so Storybook falls back to a JSON editor.
  if (type === 'object' && !argType.type?.name) untyped.push(name)
  if (!CONTROLS.has(type)) return null

  const prop = { name, control: type }
  if (['select', 'radio', 'inline-radio'].includes(type)) {
    const options = argType.options
    // Options mapped to elements or objects cannot travel in a URL.
    if (!Array.isArray(options) || !options.length || !options.every(isPrimitive)) return null
    prop.options = options
  }
  if (type === 'number') for (const k of ['min', 'max', 'step']) if (typeof control[k] === 'number') prop[k] = control[k]

  const value = name in args ? args[name] : literal(argType.table?.defaultValue?.summary)
  if (value !== undefined && isPrimitive(value) && (!prop.options || prop.options.includes(value))) prop.default = value

  const description = typeof argType.description === 'string' ? argType.description.trim() : ''
  if (description) prop.description = description
  return prop
}

const server = await createServer({
  root,
  configFile: false,
  logLevel: 'error',
  appType: 'custom',
  server: { middlewareMode: true, hmr: false, ws: false },
  resolve: { alias: { '@': src } },
  plugins: [docgenPlugin],
})

const items = []
const errors = []
const noProps = []
const untypedProps = []
try {
  const { composeStory } = await server.ssrLoadModule('@storybook/react')

  for (const file of storyFiles(src)) {
    const rel = relative(root, file)
    try {
      const csf = loadCsf(readFileSync(file, 'utf8'), { fileName: rel, makeTitle: (t) => t }).parse()
      const title = csf.meta.title
      if (!title) throw new Error('meta has no title')
      const [rootTitle, ...rest] = title.split('/')
      const kind = KINDS[rootTitle]
      if (!kind) continue
      if (rest.length < 2) throw new Error(`title "${title}" needs a Category: <root>/<Category>/<Name>`)

      const mod = await server.ssrLoadModule(file)
      // Storybook's tags rules (meta, then story, `!tag` removes): a story
      // without `dev` is hidden from the sidebar, e.g. a Do/Don't "Don't".
      const story = csf.indexInputs
        .filter((s) => s.subtype === 'story')
        .map((s) => ({ id: s.__id, exportName: s.exportName, composed: composeStory(mod[s.exportName], mod.default, {}, undefined, s.exportName) }))
        .find((s) => s.composed.tags.includes('dev'))
      if (!story) throw new Error('every story is tagged !dev, so there is nothing to show')

      const tags = story.composed.tags
      const status = STATUSES.find((t) => tags.includes(t))
      if (!status) throw new Error(`no status tag (one of ${STATUSES.join(', ')})`)

      // A story whose render takes no args shows fixed content: controls
      // would change nothing, so the item has no props.
      const render = mod[story.exportName]?.render ?? mod.default.render
      const usesArgs = !(typeof render === 'function' && render.length === 0)

      const { args, argTypes } = story.composed
      const all = new Set(Object.keys(argTypes))
      const untyped = []
      const props = usesArgs
        ? Object.entries(argTypes)
            .map(([name, argType]) => toProp(name, argType, args, all, untyped))
            .filter(Boolean)
        : []
      if (untyped.length) untypedProps.push(`${title}: ${untyped.join(', ')}`)
      if (!props.length) noProps.push(usesArgs ? title : `${title} (first story renders fixed content)`)

      items.push({
        kind,
        id: csf.meta.id ?? story.id.split('--')[0],
        name: rest.at(-1),
        category: rest[0],
        status,
        storyId: story.id,
        props,
      })
    } catch (e) {
      errors.push(`${rel}: ${e.message.split('\n')[0]}`)
    }
  }
} finally {
  await server.close()
}

if (errors.length) {
  console.error(`Playground manifest: ${errors.length} story file(s) failed:\n${errors.map((e) => `  ${e}`).join('\n')}`)
  process.exit(1)
}

// House rule: a component that offers size md uses it as the default
// (COMPONENTS.md, section 2, which lists the same exceptions). Divider's size
// is a line weight, where 1px is the norm, so it keeps sm. Link has no default:
// it inherits the surrounding text size.
const SIZE_EXCEPTIONS = new Set(['components-atomic-elements-divider', 'components-navigation-link'])
const offSize = items.filter((i) => {
  const size = i.props.find((p) => p.name === 'size')
  return size?.options?.includes('md') && size.default !== 'md' && !SIZE_EXCEPTIONS.has(i.id)
})
if (offSize.length) {
  console.error(`size default must be 'md' when md exists:\n${offSize.map((i) => `  ${i.id}`).join('\n')}`)
  process.exit(1)
}

const order = Object.values(KINDS)
items.sort((a, b) => order.indexOf(a.kind) - order.indexOf(b.kind) || a.category.localeCompare(b.category) || a.name.localeCompare(b.name))
const content = JSON.stringify({ items }, null, 2) + '\n'

const count = (k) => items.filter((i) => i.kind === k).length
const summary = `${count('component')} components, ${count('pattern')} patterns, ${count('template')} templates`

const full = join(root, OUTPUT)
const current = existsSync(full) ? readFileSync(full, 'utf8') : null
if (process.argv.includes('--check')) {
  if (current !== content) {
    console.error(`stale: ${OUTPUT}\n\nThe stories changed since the manifest was built. Run: npm run playground:manifest`)
    process.exit(1)
  }
  console.log(`up to date — ${summary}`)
} else {
  if (current !== content) {
    mkdirSync(dirname(full), { recursive: true })
    writeFileSync(full, content)
    console.log(`wrote  ${OUTPUT}`)
  }
  console.log(`${summary}. No editable props (${noProps.length}):\n${noProps.map((n) => `  ${n}`).join('\n')}`)
  if (untypedProps.length)
    console.log(
      `\nProps left out because react-docgen could not read their type; an explicit argTypes control brings them back:\n${untypedProps.map((n) => `  ${n}`).join('\n')}`,
    )
}
