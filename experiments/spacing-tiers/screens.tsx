import { useState } from 'react'
import { Icon } from '@/lib/icon'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Badge } from '@/components/atomic-elements/Badge'
import { Tag, type TagVariant } from '@/components/atomic-elements/Tag'
import { Button } from '@/components/buttons/Button'
import { Card } from '@/components/data-display/Card'
import { Table, type TableColumn } from '@/components/data-display/Table'
import { Search } from '@/components/inputs/Search'
import { Select } from '@/components/inputs/Select'
import { ProgressBar } from '@/components/loaders/ProgressBar'
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs'
import { Menu } from '@/components/navigation/Menu'
import { Pagination } from '@/components/navigation/Pagination'
import { NavSidebar as Sidebar, type NavSidebarEntry as SidebarEntry } from '@/components/patterns/application-ui/NavSidebar'
import { Tabs } from '@/components/navigation/Tabs'
import { Alert } from '@/components/notifications/Alert'
import { AppShell } from '@/components/templates/application-ui/AppShell'
import { TopBar as AppHeader } from '@/components/patterns/application-ui/TopBar'
import { TableFooter, TableToolbar, TableToolbarGroup } from '@/components/patterns/application-ui/DataTablePage'
import { Stats } from '@/components/patterns/application-ui/Stats'
import { costBreakdown, days, money, money2, pct, previous, products, totals, type Product, type ProductStatus } from './data'

const nav = (current: string): { items: SidebarEntry[]; current: string } => ({
  current,
  items: [
    { label: 'Home', href: '#home', icon: <Icon name="star" /> },
    {
      type: 'group',
      label: 'Store',
      items: [
        { label: 'Orders', href: '#orders', icon: <Icon name="file" />, badge: '12' },
        { label: 'Products', href: '#products', icon: <Icon name="menu" /> },
        { label: 'Customers', href: '#customers', icon: <Icon name="user" /> },
      ],
    },
    {
      type: 'group',
      label: 'Finance',
      items: [
        { label: 'Revenue and cost', href: '#finance', icon: <Icon name="calendar" /> },
        { label: 'Payouts', href: '#payouts', icon: <Icon name="info" /> },
      ],
    },
  ],
})

function Shell({ current, children }: { current: string; children: React.ReactNode }) {
  const n = nav(current)
  return (
    <AppShell
      sidebar={
        <Sidebar
          items={n.items}
          currentHref={n.current}
          header={
            <span className="lyBrand" data-spec="Brand">
              <span className="lyLogo" aria-hidden="true">
                K
              </span>
              <strong>Kiln &amp; Co.</strong>
            </span>
          }
        />
      }
      header={
        <AppHeader
          start={<Search aria-label="Search the store" placeholder="Search orders, products, customers" className="lyHeaderSearch" />}
          end={
            <>
              <Button variant="secondary" appearance="ghost" isIconOnly aria-label="Notifications">
                <Icon name="info" />
              </Button>
              <Avatar initials="LT" size="sm" imageAlt="Linh Tran" />
            </>
          }
        />
      }
    >
      {children}
    </AppShell>
  )
}

/* ================================================================ chart */

function RevenueChart() {
  const w = 760
  const h = 240
  const pad = { top: 8, right: 8, bottom: 24, left: 44 }
  const max = 9000
  const ticks = [0, 3000, 6000, 9000]
  const plotW = w - pad.left - pad.right
  const plotH = h - pad.top - pad.bottom
  const step = plotW / days.length
  const y = (v: number) => pad.top + plotH - (v / max) * plotH
  const barW = step * 0.56
  const line = days.map((d, i) => `${i ? 'L' : 'M'}${(pad.left + step * i + step / 2).toFixed(1)},${y(d.cost).toFixed(1)}`).join(' ')
  const fmt = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short' })
  return (
    <svg className="lyChart" viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Daily revenue and cost, last 30 days">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={pad.left} x2={w - pad.right} y1={y(t)} y2={y(t)} stroke="var(--border)" strokeDasharray={t ? '3 3' : undefined} />
          <text x={pad.left - 8} y={y(t) + 4} textAnchor="end">
            {t ? `$${t / 1000}k` : '$0'}
          </text>
        </g>
      ))}
      {days.map((d, i) => (
        <rect
          key={i}
          x={pad.left + step * i + (step - barW) / 2}
          y={y(d.revenue)}
          width={barW}
          height={plotH + pad.top - y(d.revenue)}
          rx={2}
          fill="var(--chart-revenue)"
          opacity={i === days.length - 1 ? 1 : 0.78}
        />
      ))}
      <path d={line} fill="none" stroke="var(--chart-cost)" strokeWidth={2.25} strokeLinejoin="round" />
      <circle cx={pad.left + step * (days.length - 1) + step / 2} cy={y(days[days.length - 1].cost)} r={4} fill="var(--chart-cost)" stroke="var(--card)" strokeWidth={2} />
      {[0, 7, 14, 21, 29].map((i) => (
        <text key={i} x={pad.left + step * i + step / 2} y={h - 6} textAnchor="middle">
          {fmt.format(days[i].date)}
        </text>
      ))}
    </svg>
  )
}

/* ============================================================ dashboard */

const profit = totals.revenue - totals.cost
const prevProfit = previous.revenue - previous.cost
const change = (now: number, before: number) => `${(Math.abs(now / before - 1) * 100).toFixed(1)}%`

const top = products
  .filter((p) => p.status === 'Active')
  .map((p) => ({ ...p, revenue: p.sold * p.price, profit: p.sold * (p.price - p.cost) }))
  .sort((a, b) => b.profit - a.profit)
  .slice(0, 5)

const topColumns: TableColumn<(typeof top)[number]>[] = [
  { key: 'name', header: 'Product', isRowHeader: true, cell: (p) => <ProductCell p={p} /> },
  { key: 'sold', header: 'Units sold', align: 'end' },
  { key: 'revenue', header: 'Revenue', align: 'end', cell: (p) => money.format(p.revenue) },
  { key: 'cost', header: 'Cost', align: 'end', cell: (p) => money.format(p.sold * p.cost) },
  { key: 'profit', header: 'Gross profit', align: 'end', cell: (p) => money.format(p.profit) },
  { key: 'margin', header: 'Margin', align: 'end', cell: (p) => pct(1 - p.cost / p.price) },
]

export function Dashboard() {
  return (
    <Shell current="#finance">
      <div className="lyPage" data-spec="Page (sections)">
        <header className="lyHeading">
          <Breadcrumbs items={[{ label: 'Finance', href: '#finance' }, { label: 'Revenue and cost' }]} size="sm" />
          <div className="lyHeadingRow">
            <div className="lyHeadingText">
              <h1>Revenue and cost</h1>
              <p>Sales against everything it cost to make them, for the last 30 days. Figures are before tax.</p>
            </div>
            <div className="lyHeadingActions">
              <Select aria-label="Period" defaultValue="30" options={[{ value: '30', label: 'Last 30 days' }, { value: '90', label: 'Last 90 days' }]} />
              <Button variant="secondary" appearance="outlined" startIcon={<Icon name="upload" />}>
                Export
              </Button>
            </div>
          </div>
        </header>
        <Stats
          stats={[
            { label: 'Revenue', value: money.format(totals.revenue), previous: `from ${money.format(previous.revenue)}`, change: { value: change(totals.revenue, previous.revenue), direction: 'up' } },
            { label: 'Total cost', value: money.format(totals.cost), previous: `from ${money.format(previous.cost)}`, change: { value: change(totals.cost, previous.cost), direction: 'up', isPositive: false } },
            { label: 'Gross profit', value: money.format(profit), previous: `from ${money.format(prevProfit)}`, change: { value: change(profit, prevProfit), direction: 'up' } },
            { label: 'Gross margin', value: pct(profit / totals.revenue), previous: `from ${pct(prevProfit / previous.revenue)}`, change: { value: `${((profit / totals.revenue - prevProfit / previous.revenue) * 100).toFixed(1)} pts`, direction: 'up' } },
          ]}
        />
        <div className="lySplit" data-spec="Card row">
          <Card appearance="outline">
            <div className="lyCardHead" data-spec="Card header">
              <div className="lyTitleBlock" data-spec="Title block">
                <h2>Daily revenue and cost</h2>
                <p>Revenue as bars, cost as a line. Weekends sell about a third more.</p>
              </div>
              <ul className="lyLegend" data-spec="Legend">
                <li>
                  <span className="lyKey" style={{ background: 'var(--chart-revenue)' }} />
                  Revenue
                </li>
                <li>
                  <span className="lyKey" style={{ background: 'var(--chart-cost)' }} />
                  Cost
                </li>
              </ul>
            </div>
            <RevenueChart />
          </Card>
          <Card appearance="outline">
            <div className="lyTitleBlock" data-spec="Title block">
              <h2>Where the cost went</h2>
              <p>Share of {money.format(totals.cost)} total cost.</p>
            </div>
            <ul className="lyBreakdown" data-spec="Breakdown list">
              {costBreakdown.map((c) => (
                <li key={c.label} className="lyBreakRow" data-spec="Breakdown row">
                  <div className="lyBreakLine" data-spec="Label and value">
                    <span>{c.label}</span>
                    <span>
                      {money.format(c.amount)} · {Math.round(c.share * 100)}%
                    </span>
                  </div>
                  <ProgressBar value={c.share * 100} size="sm" aria-label={`${c.label} share`} />
                </li>
              ))}
            </ul>
            <div className="lyTotal" data-spec="Total row">
              <span>Total cost</span>
              <span>{money.format(totals.cost)}</span>
            </div>
          </Card>
        </div>
        <Alert variant="warning" title="Shipping cost is up 18% on last month">
          Most of it is the new carrier rate for orders over 2 kg. Plates and platters are the heaviest items.
        </Alert>
        <section className="lySection" data-spec="Section">
          <div className="lyTitleBlock" data-spec="Title block">
            <h2>Most profitable products</h2>
            <p>Active products, by gross profit in the period.</p>
          </div>
          <Table columns={topColumns} rows={top} getRowId={(p) => p.id} caption="Most profitable products" />
        </section>
      </div>
    </Shell>
  )
}

/* ============================================================= products */

function ProductCell({ p }: { p: Product }) {
  return (
    <span className="lyProduct" data-spec="Product cell">
      <span className="lyThumb" aria-hidden="true" style={{ background: `oklch(var(--thumb-l) 0.05 ${p.hue})` }}>
        {p.sku.slice(0, 3)}
      </span>
      <span className="lyProductText" data-spec="Name and SKU">
        <strong>{p.name}</strong>
        <span>{p.sku}</span>
      </span>
    </span>
  )
}

const statusTone: Record<ProductStatus, TagVariant> = { Active: 'success', Draft: 'neutral', Archived: 'neutral' }

const productColumns: TableColumn<Product>[] = [
  { key: 'name', header: 'Product', sortable: true, isRowHeader: true, cell: (p) => <ProductCell p={p} /> },
  { key: 'category', header: 'Category', sortable: true },
  { key: 'status', header: 'Status', cell: (p) => <Tag size="sm" variant={statusTone[p.status]} text={p.status} /> },
  {
    key: 'stock',
    header: 'Inventory',
    sortable: true,
    cell: (p) =>
      p.status !== 'Active' ? (
        <span className="lyMuted">—</span>
      ) : (
        <span className="lyStock" data-spec="Stock">
          {p.stock} in stock
          {p.stock <= 12 && <Tag size="sm" variant="warning" text="Low" />}
        </span>
      ),
  },
  { key: 'price', header: 'Price', sortable: true, align: 'end', cell: (p) => money2.format(p.price) },
  { key: 'cost', header: 'Unit cost', sortable: true, align: 'end', cell: (p) => money2.format(p.cost) },
  { key: 'margin', header: 'Margin', align: 'end', sortValue: (p) => 1 - p.cost / p.price, cell: (p) => pct(1 - p.cost / p.price) },
]

const STATUSES: ('All' | ProductStatus)[] = ['All', 'Active', 'Draft', 'Archived']
// The catalogue is 48 products; the table shows page 1.
const CATALOGUE: Record<string, number> = { All: 48, Active: 39, Draft: 6, Archived: 3 }

export function ProductsPage() {
  const [tab, setTab] = useState<string>('All')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const active = products.filter((p) => p.status === 'Active')
  const low = active.filter((p) => p.stock <= 12)
  const avgMargin = active.reduce((s, p) => s + (1 - p.cost / p.price), 0) / active.length
  const stockValue = active.reduce((s, p) => s + p.stock * p.cost, 0)
  const categories = [...new Set(products.map((p) => p.category))]
  const filtered = products.filter(
    (p) => (category === 'all' || p.category === category) && (!query || p.name.toLowerCase().includes(query.toLowerCase())),
  )
  const rowsFor = (s: string) => filtered.filter((p) => s === 'All' || p.status === s)
  const table = (rows: Product[]) => (
    <Table columns={productColumns} rows={rows} getRowId={(p) => p.id} caption={`${tab} products`} isSelectable />
  )

  return (
    <Shell current="#products">
      <div className="lyPage" data-spec="Page (sections)">
        <header className="lyHeading">
          <Breadcrumbs items={[{ label: 'Store', href: '#store' }, { label: 'Products' }]} size="sm" />
          <div className="lyHeadingRow">
            <div className="lyHeadingText">
              <h1>
                Products <Badge count={CATALOGUE.All} variant="secondary" />
              </h1>
              <p>Prices, unit costs and stock for everything the shop sells.</p>
            </div>
            <div className="lyHeadingActions">
              <Button variant="secondary" appearance="outlined" startIcon={<Icon name="upload" />}>
                Import CSV
              </Button>
              <Button startIcon={<Icon name="plus" />}>Add product</Button>
            </div>
          </div>
        </header>
        <dl className="lySummary" data-spec="Summary row" style={{ margin: 0 }}>
          {[
            { label: 'Active products', value: String(CATALOGUE.Active), note: `of ${CATALOGUE.All}` },
            { label: 'Low stock', value: String(low.length), note: '12 or fewer left' },
            { label: 'Average margin', value: pct(avgMargin), note: 'active products' },
            { label: 'Stock value at cost', value: money.format(stockValue), note: '' },
          ].map((s) => (
            <Card key={s.label} size="sm" appearance="outline">
              <div className="lyMini" data-spec="Label and figure">
                <dt>{s.label}</dt>
                <dd>
                  {s.value} {s.note && <small>{s.note}</small>}
                </dd>
              </div>
            </Card>
          ))}
        </dl>
        <div className="lyBody" data-spec="Table block">
          <TableToolbar>
            <TableToolbarGroup>
              <Menu
                trigger={
                  <Button variant="secondary" appearance="outlined" endIcon={<Icon name="chevron-down" />}>
                    {category === 'all' ? 'All categories' : category}
                  </Button>
                }
                items={[
                  {
                    type: 'radio',
                    label: 'Category',
                    value: category,
                    onValueChange: setCategory,
                    options: [{ value: 'all', label: 'All categories' }, ...categories.map((c) => ({ value: c, label: c }))],
                  },
                ]}
              />
              <Search aria-label="Search products" placeholder="Search by name" value={query} onChange={(e) => setQuery(e.target.value)} style={{ flex: '1 1 14rem' }} />
            </TableToolbarGroup>
            <Button variant="secondary" appearance="outlined" startIcon={<Icon name="file" />}>
              Export
            </Button>
          </TableToolbar>
          <Tabs
            aria-label="Product status"
            value={tab}
            onValueChange={setTab}
            items={STATUSES.map((s) => ({
              value: s,
              label: (
                <>
                  {s} <Badge count={CATALOGUE[s]} size="sm" variant="secondary" />
                </>
              ),
              content: table(rowsFor(s)),
            }))}
          />
          <TableFooter summary={`Showing 1–${rowsFor(tab).length} of ${CATALOGUE[tab]} products`}>
            <Pagination totalPages={5} defaultPage={1} size="sm" />
          </TableFooter>
        </div>
      </div>
    </Shell>
  )
}
