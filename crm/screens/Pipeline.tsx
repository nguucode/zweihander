import { useState } from 'react'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Button } from '@/components/buttons/Button'
import { ToggleGroup } from '@/components/buttons/ButtonGroup'
import { ToggleButton } from '@/components/buttons/ToggleButton'
import { Table } from '@/components/data-display/Table'
import { TextInput } from '@/components/inputs/TextInput'
import { Menu } from '@/components/navigation/Menu'
import { useToast } from '@/components/notifications/Toast'
import { Drawer } from '@/components/overlays/Drawer'
import { Stats } from '@/components/patterns/application-ui/Stats'
import { EmptyState } from '@/components/states/EmptyState'
import { Icon } from '@/lib/icon'
import { Glyph } from '../icons'
import { fmt, listings as initial, STAGES, type Listing, type Stage } from '../data'
import { PageHeader, Pill } from '../ui'

const APPRAISALS = [
  { stage: 'Booked', items: ['17 Hutton St, Thornbury · Wed 2pm', '3 Mitchell St, Northcote · Fri'] },
  { stage: 'Proposal sent', items: ['46 Westgarth St, Northcote · opened 3×', '23 Fenwick St, Clifton Hill'] },
  { stage: 'Won', items: ['9 Elm Grove, Thornbury'] },
  { stage: 'Lost', items: [] as string[] },
]

const detailHref = (l: Listing) => (l.id === '14-ruby' ? '#/listings/14-ruby/price' : l.id === '5-27-albert' ? '#/listings/5-27-albert/offers' : `#/listings/${l.id}`)

export function Pipeline({ gate }: { gate: string | null }) {
  const toast = useToast()
  const [rows, setRows] = useState(initial)
  const [kind, setKind] = useState('campaign')
  const [view, setView] = useState('board')
  const [method, setMethod] = useState('All')
  const [dragging, setDragging] = useState<string | null>(null)
  const [over, setOver] = useState<Stage | null>(null)
  // Deep link from Today: "Complete CDD" opens the gate for 9 Elm Grove (the page is keyed by it).
  const [pending, setPending] = useState<{ id: string; to: Stage } | null>(gate ? { id: gate, to: 'On market' } : null)

  const shown = rows.filter((l) => method === 'All' || l.method.startsWith(method))
  const weighted = (ls: Listing[]) => ls.reduce((s, l) => s + l.commission * l.probability, 0)
  const gross = (ls: Listing[]) => ls.reduce((s, l) => s + l.commission, 0)
  const open = rows.filter((l) => l.stage !== 'Settled')

  const move = (id: string, to: Stage) => {
    const l = rows.find((r) => r.id === id)
    if (!l || l.stage === to) return
    // AML/CTF gate: a listing with unverified vendors cannot be marketed.
    if (to !== 'Pre-market' && l.cddPending?.length) {
      setPending({ id, to })
      return
    }
    setRows((all) => all.map((r) => (r.id === id ? { ...r, stage: to } : r)))
    toast.add({ title: `${l.street} → ${to}`, action: { label: 'Undo', onClick: () => setRows((all) => all.map((r) => (r.id === id ? { ...r, stage: l.stage } : r))) } })
  }

  return (
    <>
      <PageHeader
        title="Pipeline"
        description="Office · 11 listings · 5 appraisals"
        actions={
          <>
            <ToggleGroup className="seg" value={[kind]} onValueChange={(v) => v[0] && setKind(v[0])} aria-label="Pipeline">
              <ToggleButton value="listing" variant="secondary" appearance="ghost" size="sm">Listing pipeline</ToggleButton>
              <ToggleButton value="campaign" variant="secondary" appearance="ghost" size="sm">Campaign pipeline</ToggleButton>
            </ToggleGroup>
            <ToggleGroup className="seg" value={[view]} onValueChange={(v) => v[0] && setView(v[0])} aria-label="View">
              <ToggleButton value="board" variant="secondary" appearance="ghost" size="sm" startIcon={<Glyph name="board" />}>Board</ToggleButton>
              <ToggleButton value="list" variant="secondary" appearance="ghost" size="sm" startIcon={<Glyph name="list" />}>List</ToggleButton>
              <ToggleButton value="map" variant="secondary" appearance="ghost" size="sm" startIcon={<Glyph name="pin" />}>Map</ToggleButton>
            </ToggleGroup>
            <Menu
              trigger={<Button variant="secondary" appearance="outlined" startIcon={<Glyph name="filter" />}>Method: {method}</Button>}
              items={[{ type: 'radio', label: 'Sale method', value: method, onValueChange: setMethod, options: ['All', 'Auction', 'Private sale', 'EOI'].map((m) => ({ value: m, label: m })) }]}
            />
            <Button startIcon={<Icon name="plus" />} onClick={() => toast.add({ title: 'Appraisal booked', description: 'Added to Booked in the listing pipeline.', variant: 'success' })}>New appraisal</Button>
          </>
        }
      />

      <Stats
        className="kpis kpis-4"
        aria-label="Pipeline totals"
        stats={[
          { label: 'Open pipeline (weighted)', value: fmt(weighted(open) + 47885), previous: `Gross ${fmt(gross(open) + 98000)}` },
          { label: 'Campaigns (weighted)', value: fmt(weighted(open)), previous: `${open.length} listings` },
          { label: 'Appraisals (weighted)', value: fmt(47885), previous: '5 appraisals' },
          { label: 'Settled this FY', value: fmt(41580), previous: '1 sale · commission' },
        ]}
      />

      <p className="muted small with-icon"><Icon name="edit" /> “Manual” = agent-edited probability · weighted = commission × probability · drag a card or use its menu to move it</p>

      {kind === 'listing' ? (
        <div className="board" role="list" aria-label="Listing pipeline">
          {APPRAISALS.map((col) => (
            <section key={col.stage} className="column" role="listitem" aria-label={col.stage}>
              <header><strong>{col.stage}</strong> <Pill text={String(col.items.length)} /></header>
              {col.items.length ? col.items.map((t) => <div key={t} className="deal"><strong>{t.split(' · ')[0]}</strong><span className="muted small">{t.split(' · ')[1] ?? 'Appraisal'}</span></div>) : <div className="drop-hint">Nothing here</div>}
            </section>
          ))}
        </div>
      ) : view === 'map' ? (
        <EmptyState title="Map view" description="Listings plotted by suburb. Not part of this demo — switch to Board or List." />
      ) : view === 'list' ? (
        <Table<Listing>
          caption="Campaign pipeline"
          rows={shown}
          getRowId={(l) => l.id}
          defaultSort={{ key: 'weighted', direction: 'descending' }}
          columns={[
            { key: 'street', header: 'Listing', isRowHeader: true, sortable: true, sortValue: (l) => l.street, cell: (l) => <a href={detailHref(l)}>{l.street}</a> },
            { key: 'suburb', header: 'Suburb', cell: (l) => l.suburb },
            { key: 'stage', header: 'Stage', sortable: true, sortValue: (l) => STAGES.indexOf(l.stage), cell: (l) => l.stage },
            { key: 'method', header: 'Method', cell: (l) => l.method },
            { key: 'agent', header: 'Agent', cell: (l) => <Avatar size="sm" initials={l.agent} /> },
            { key: 'commission', header: 'Gross', align: 'end', sortable: true, sortValue: (l) => l.commission, cell: (l) => fmt(l.commission) },
            { key: 'weighted', header: 'Weighted', align: 'end', sortable: true, sortValue: (l) => l.commission * l.probability, cell: (l) => fmt(l.commission * l.probability) },
            { key: 'flag', header: 'Flag', cell: (l) => (l.flag ? <Pill dot tone={l.flag.tone} text={l.flag.text} /> : null) },
          ]}
        />
      ) : (
        <div className="board" aria-label="Campaign pipeline">
          {STAGES.map((stage) => {
            const col = shown.filter((l) => l.stage === stage)
            return (
              <section
                key={stage}
                aria-label={stage}
                className={`column ${over === stage ? 'is-over' : ''}`}
                onDragOver={(e) => {
                  e.preventDefault()
                  setOver(stage)
                }}
                onDragLeave={() => setOver((o) => (o === stage ? null : o))}
                onDrop={(e) => {
                  e.preventDefault()
                  setOver(null)
                  if (dragging) move(dragging, stage)
                  setDragging(null)
                }}
              >
                <header>
                  <div><strong>{stage}</strong> <Pill text={String(col.length)} /></div>
                  <span className="muted small">Gross {fmt(gross(col))} · <strong>Weighted {stage === 'Settled' ? '—' : fmt(weighted(col))}</strong></span>
                </header>
                {col.length === 0 && <div className="drop-hint">Drag a listing here</div>}
                {col.map((l) => (
                  <article
                    key={l.id}
                    className={`deal ${dragging === l.id ? 'is-dragging' : ''}`}
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.effectAllowed = 'move'
                      setDragging(l.id)
                    }}
                    onDragEnd={() => setDragging(null)}
                  >
                    <div className="deal-head">
                      <a href={detailHref(l)} className="deal-title">{l.street}</a>
                      <Menu
                        align="end"
                        trigger={<Button size="sm" variant="secondary" appearance="ghost" isIconOnly aria-label={`Move ${l.street}`}><Icon name="more" /></Button>}
                        items={[{ type: 'group', label: 'Move to', items: STAGES.filter((s) => s !== l.stage).map((s) => ({ label: s, onSelect: () => move(l.id, s) })) }]}
                      />
                    </div>
                    <span className="muted small">{l.suburb}</span>
                    <div className="tags">
                      {l.sold ? <Pill tone="success" text={l.sold} /> : <Pill text={l.method} />}
                      {l.dom && <span className="muted small">{l.dom}</span>}
                    </div>
                    <span className="small with-icon">
                      <Avatar size="sm" initials={l.agent} />
                      {l.stage === 'Settled' ? `Commission ${fmt(l.commission)}` : `${fmt(l.commission)} × ${Math.round(l.probability * 100)}% = ${fmt(l.commission * l.probability)}`}
                    </span>
                    {l.flag && <span><Pill dot tone={l.flag.tone} text={l.flag.text} /></span>}
                  </article>
                ))}
              </section>
            )
          })}
        </div>
      )}

      <CddGate
        listing={pending ? rows.find((r) => r.id === pending.id) : undefined}
        to={pending?.to ?? 'On market'}
        onClose={() => setPending(null)}
        onVerified={(id) => setRows((all) => all.map((r) => (r.id === id ? { ...r, cddPending: [], flag: undefined } : r)))}
        onMove={(id, to) => {
          setRows((all) => all.map((r) => (r.id === id ? { ...r, stage: to, cddPending: [], flag: undefined } : r)))
          setPending(null)
          toast.add({ title: `Moved to ${to}`, description: 'Launch Fri 13/11. Portals go live at 7:00am.', variant: 'success' })
        }}
      />
    </>
  )
}

function CddGate({ listing, to, onClose, onVerified, onMove }: {
  listing?: Listing
  to: Stage
  onClose: () => void
  onVerified: (id: string) => void
  onMove: (id: string, to: Stage) => void
}) {
  const toast = useToast()
  const [screening, setScreening] = useState(false)
  const blocked = !!listing?.cddPending?.length

  return (
    <Drawer
      open={!!listing}
      onOpenChange={(o) => !o && onClose()}
      size="md"
      title={`Move to ${to}`}
      description={listing ? `${listing.street}, ${listing.suburb} · ${listing.method}` : undefined}
      footer={
        <div className="drawer-footer">
          <span className="muted small with-icon"><Glyph name="lock" /> Override: Principal only</span>
          <Button variant="secondary" appearance="outlined" onClick={onClose}>Cancel</Button>
          <Button disabled={blocked} onClick={() => listing && onMove(listing.id, to)}>Move to {to}</Button>
        </div>
      }
    >
      {listing && (
        <div className="stack">
          <div className="tags"><Pill text={listing.stage} /> <Icon name="chevron-right" /> <Pill tone="danger" dot text={to} /></div>
          {blocked ? (
            <div className="callout callout-danger">
              <strong className="with-icon"><Glyph name="shield" /> Vendor CDD incomplete</strong>
              <p>A listing can only go On market once every vendor is Verified under the agency AML/CTF program.</p>
              <ul className="rows">
                <li className="with-icon"><Icon name="check" className="text-success" /><span><strong>Daniel Achterberg</strong><br /><span className="muted small">Verified 06/11/2026 · Risk Low</span></span></li>
                {listing.cddPending!.map((name) => (
                  <li key={name} className="with-icon"><Icon name="warning" className="text-danger" /><span><strong>{name}</strong><br /><span className="text-danger small">Pending — ID uploaded, PEP / sanctions screen not run</span></span></li>
                ))}
              </ul>
              <div className="button-row">
                <Button
                  className="btn-navy"
                  isLoading={screening}
                  startIcon={<Glyph name="shield" />}
                  onClick={() => {
                    setScreening(true)
                    setTimeout(() => {
                      setScreening(false)
                      onVerified(listing.id)
                      toast.add({ title: 'Screening clear', description: 'Fiona Achterberg verified · Risk Low · PEP / sanctions clear.', variant: 'success' })
                    }, 1200)
                  }}
                >
                  Run screening
                </Button>
                <Button variant="secondary" appearance="outlined" startIcon={<Icon name="file" />} onClick={() => toast.add({ title: 'ID request sent', description: 'SMS + email to Fiona Achterberg.' })}>Request ID</Button>
              </div>
            </div>
          ) : (
            <div className="callout callout-success">
              <strong className="with-icon"><Icon name="success-filled" /> All vendors verified</strong>
              <p>Daniel and Fiona Achterberg · Risk Low. Ready to go {to}.</p>
            </div>
          )}

          <h3 className="section-title">Required to go On market</h3>
          <TextInput label="Launch date" type="date" defaultValue="2026-11-13" isFullWidth />
          <TextInput label="Advertised price" defaultValue="$1,700,000 – $1,850,000" suffix={<Pill tone="success" text="Range 8.8% ✓" />} isFullWidth />
          <TextInput label="Estimated selling price" defaultValue="$1,700,000 – $1,850,000" suffix={<Pill tone="success" text="Matches authority ✓" />} isFullWidth />
          <TextInput label="Portals" defaultValue="realestate.com.au Premiere · Domain Platinum" isFullWidth />
          <TextInput label="Authority" defaultValue="Exclusive Sale Authority · e-signed 04/11/2026" suffix={<Pill tone="success" text="Signed" />} readOnly isFullWidth />
        </div>
      )}
    </Drawer>
  )
}
