import { fireEvent } from 'storybook/test'

/* Example data for the chart stories: seeded, so tests and screenshots see the
   same numbers every run. Not shipped in the registry. */

function random(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const start = Date.UTC(2026, 9, 19, 9)

/** Mostly quiet, with spikes, like real request traffic. */
function buckets<T>(count: number, minutes: number, seed: number, row: (r: () => number, i: number) => T) {
  const r = random(seed)
  return Array.from({ length: count }, (_, i) => ({ time: new Date(start + i * minutes * 60_000), ...row(r, i) }))
}
const spiky = (r: () => number, high: number) => Math.round(r() < 0.18 ? high * (0.25 + r() * 0.75) : r() * high * 0.06)

export const requests = buckets(96, 15, 7, (r) => ({ requests: spiky(r, 250) }))

export const transfer = requests.map((d, i) => ({ time: d.time, bytes: d.requests * (14_000 + ((i * 7919) % 9000)) }))

export const statusCodes = buckets(32, 45, 21, (r, i) => {
  const total = spiky(r, 460)
  return {
    ok: Math.round(total * (0.72 + r() * 0.2)),
    redirect: Math.round(total * r() * 0.12),
    clientError: r() < 0.2 ? Math.round(total * r() * 0.4) : 0,
    serverError: i === 14 ? 6 : 0,
  }
})

export const traffic = buckets(24, 60, 61, (r, i) => {
  const busy = i > 8 && i < 18
  return { api: Math.round(40 + r() * 60 + (busy ? 80 : 0)), web: Math.round(20 + r() * 40 + (busy ? 50 : 0)) }
})

export const invoicesByDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
  const r = random(i + 5)
  return { day, thisWeek: Math.round(1800 + r() * 2200), lastWeek: Math.round(1600 + r() * 2000) }
})

export const countries = [
  { label: 'United States', value: 1850 },
  { label: 'Vietnam', value: 822 },
  { label: 'Belgium', value: 363 },
  { label: 'Germany', value: 140 },
  { label: 'China', value: 19 },
  { label: 'Korea, South', value: 19 },
  { label: 'Japan', value: 12 },
]

export const contentTypes = [
  { label: 'HTML', value: 1240 },
  { label: 'JavaScript', value: 860 },
  { label: 'CSS', value: 410 },
  { label: 'Images', value: 380 },
  { label: 'JSON', value: 260 },
]

export const formatBytes = (value: number) => {
  if (!value) return '0 B'
  const units = ['byte', 'kilobyte', 'megabyte', 'gigabyte'] as const
  const i = Math.min(3, Math.floor(Math.log10(value) / 3))
  return new Intl.NumberFormat(undefined, { style: 'unit', unit: units[i], unitDisplay: 'short', maximumFractionDigits: 2 }).format(value / 1000 ** i)
}

/** userEvent.hover sends no coordinates; the crosshair needs a real x. */
export const pointAtMiddle = (el: Element) => {
  const r = el.getBoundingClientRect()
  fireEvent.pointerMove(el, { clientX: r.left + r.width / 2, clientY: r.top + r.height / 2 })
}
