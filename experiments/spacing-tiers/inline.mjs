// Folds dist/ into one HTML page body for an Artifact (no doctype/html/head:
// the publisher wraps it).
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const entry = process.argv[2] ?? 'index'
const title = { index: 'Spacing Tier Trial', density: 'Spacing Density Trial', catalog: 'Density Review' }[entry]
const base = path.join(import.meta.dirname, 'dist', entry)
const dir = path.join(base, 'assets')
const files = readdirSync(dir).filter((f) => !f.startsWith('._'))
const read = (ext) => files.filter((f) => f.endsWith(ext)).map((f) => readFileSync(path.join(dir, f), 'utf8')).join('\n')
const css = read('.css')
const js = read('.js')
  .replace(/<\/script/gi, '<\\/script')
  // A literal U+FFFD (some libraries write it raw) is refused on publish; the escape means the same in JS.
  .replace(/\uFFFD/g, '\\uFFFD')
const out = `<title>${title}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<style>${css}</style>
<div id="root"></div>
<script type="module">${js}</script>
`
writeFileSync(path.join(base, 'page.html'), out)
// Same page in a document of its own, to open from disk.
writeFileSync(
  path.join(base, 'preview.html'),
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></head><body style="margin:0">${out}</body></html>`,
)
console.log('wrote', out.length, 'bytes')
