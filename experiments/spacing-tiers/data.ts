// Example data for a made-up ceramics shop. Deterministic, so the
// screenshots and the spacing counts do not change between builds.

let seed = 7
const rand = () => {
  seed = (seed * 16807) % 2147483647
  return (seed - 1) / 2147483646
}

export interface Day {
  date: Date
  revenue: number
  cost: number
}

const start = new Date(2026, 8, 19)
export const days: Day[] = Array.from({ length: 30 }, (_, i) => {
  const date = new Date(start)
  date.setDate(start.getDate() + i)
  const weekend = date.getDay() === 0 || date.getDay() === 6
  const trend = 1 + i * 0.012
  const revenue = Math.round((3300 + rand() * 1500 + (weekend ? 1100 : 0)) * trend)
  const cost = Math.round(revenue * (0.5 + rand() * 0.12))
  return { date, revenue, cost }
})

export const totals = days.reduce((t, d) => ({ revenue: t.revenue + d.revenue, cost: t.cost + d.cost }), { revenue: 0, cost: 0 })
export const previous = { revenue: Math.round(totals.revenue / 1.124), cost: Math.round(totals.cost / 1.061) }

export const costBreakdown = [
  { label: 'Cost of goods', share: 0.56 },
  { label: 'Ads and promotion', share: 0.17 },
  { label: 'Shipping', share: 0.14 },
  { label: 'Refunds', share: 0.08 },
  { label: 'Payment fees', share: 0.05 },
].map((c) => ({ ...c, amount: Math.round(totals.cost * c.share) }))

export type ProductStatus = 'Active' | 'Draft' | 'Archived'
export interface Product {
  id: string
  name: string
  sku: string
  category: string
  status: ProductStatus
  stock: number
  price: number
  cost: number
  sold: number
  updated: Date
  hue: number
}

const p = (
  name: string,
  sku: string,
  category: string,
  status: ProductStatus,
  stock: number,
  price: number,
  cost: number,
  sold: number,
  day: number,
  hue: number,
): Product => ({ id: sku, name, sku, category, status, stock, price, cost, sold, updated: new Date(2026, 9, day), hue })

export const products: Product[] = [
  p('Ash glaze mug, 350 ml', 'MUG-ASH-350', 'Mugs', 'Active', 214, 32, 11.4, 412, 18, 60),
  p('Speckled dinner plate', 'PLT-SPK-27', 'Plates', 'Active', 96, 38, 14.2, 268, 17, 85),
  p('Celadon rice bowl', 'BWL-CEL-12', 'Bowls', 'Active', 8, 26, 9.1, 331, 18, 160),
  p('Tall bud vase, iron red', 'VAS-IRN-20', 'Vases', 'Active', 41, 54, 19.8, 97, 15, 30),
  p('Pour-over set, matte black', 'POR-BLK-02', 'Coffee', 'Active', 3, 88, 36.5, 74, 19, 270),
  p('Serving platter, oval', 'PLT-OVL-40', 'Plates', 'Draft', 0, 72, 28.0, 0, 16, 90),
  p('Espresso cup pair', 'CUP-ESP-2P', 'Mugs', 'Active', 158, 30, 10.6, 189, 12, 40),
  p('Salt cellar with lid', 'ACC-SLT-01', 'Accessories', 'Active', 63, 18, 5.9, 143, 11, 110),
  p('Noodle bowl, shino', 'BWL-SHI-18', 'Bowls', 'Active', 12, 34, 13.7, 156, 14, 50),
  p('Holiday mug, 2025', 'MUG-HOL-25', 'Mugs', 'Archived', 0, 28, 10.2, 0, 2, 15),
]

export const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
export const money2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })
export const pct = (n: number) => `${(n * 100).toFixed(1)}%`
