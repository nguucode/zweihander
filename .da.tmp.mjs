import { chromium } from 'playwright'
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'
const root = 'storybook-static', out = process.argv[2], mode = process.argv[3] ?? 'dark'
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' }
const port = mode === 'dark' ? 6020 : 6021
const srv = http.createServer((q, s) => { let p = path.join(root, decodeURIComponent(q.url.split('?')[0])); if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html'); if (!fs.existsSync(p)) { s.writeHead(404); return s.end() } s.writeHead(200, { 'content-type': types[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(s) }).listen(port)
const axe = fs.readFileSync('node_modules/axe-core/axe.min.js', 'utf8')
const index = JSON.parse(fs.readFileSync(path.join(root, 'index.json'), 'utf8'))
const ids = Object.values(index.entries).filter(e => e.type === 'story' && e.id.startsWith('components-')).map(e => e.id)
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' })
const ctx = await b.newContext({ viewport: { width: 1000, height: 800 }, reducedMotion: 'reduce' })
const p = await ctx.newPage()
const results = []
for (const id of ids) {
  try {
    await p.goto(`http://localhost:${port}/iframe.html?id=${id}&viewMode=story&globals=theme:${mode}`, { waitUntil: 'networkidle', timeout: 20000 })
    await p.waitForTimeout(700)
    await p.addScriptTag({ content: axe })
    const r = await p.evaluate(async () => {
      const res = await axe.run(document.querySelector('#storybook-root') ?? document, { runOnly: ['color-contrast', 'link-in-text-block'] })
      return { dark: document.documentElement.classList.contains('dark'), v: res.violations.flatMap(v => v.nodes.map(n => ({ rule: v.id, target: n.target.join(' '), html: n.html.slice(0, 140), data: n.any?.[0]?.data ? { fg: n.any[0].data.fgColor, bg: n.any[0].data.bgColor, ratio: n.any[0].data.contrastRatio, need: n.any[0].data.expectedContrastRatio } : null }))) }
    })
    results.push({ id, ...r })
  } catch (e) { results.push({ id, error: String(e).slice(0, 200) }) }
}
fs.writeFileSync(`${out}/audit-${mode}.json`, JSON.stringify(results, null, 1))
const bad = results.filter(r => r.v?.length)
console.log(mode, 'stories', results.length, 'darkClass', results.filter(r => r.dark).length, 'with violations', bad.length, 'errors', results.filter(r => r.error).length)
await b.close(); srv.close()
