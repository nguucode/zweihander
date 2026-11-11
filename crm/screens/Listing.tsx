import { useState, type ReactNode } from 'react'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Button } from '@/components/buttons/Button'
import { Checkbox } from '@/components/controls/Checkbox'
import { Switch } from '@/components/controls/Switch'
import { Table } from '@/components/data-display/Table'
import { TextInput } from '@/components/inputs/TextInput'
import { Select } from '@/components/inputs/Select'
import { Tabs } from '@/components/navigation/Tabs'
import { useToast } from '@/components/notifications/Toast'
import { ConfirmDialog } from '@/components/overlays/ConfirmDialog'
import { Modal } from '@/components/overlays/Modal'
import { EmptyState } from '@/components/states/EmptyState'
import { Icon } from '@/lib/icon'
import { Glyph } from '../icons'
import { ALBERT_ADVERTISED, comparables, fmt, listings, offers as initialOffers, priceLog, type Offer } from '../data'
import { PageHeader, Panel, Pill } from '../ui'

interface Detail {
  ref: string
  title: string
  facts: string
  status: ReactNode
  people: ReactNode
  buyers: number
  openHomes: number
}

const DETAILS: Record<string, Detail> = {
  '14-ruby': {
    ref: 'KV-S-1041',
    title: '14 Ruby Street, Northcote VIC 3070',
    facts: 'House · 3 bed · 2 bath · 1 car · 168 m² internal · 412 m² land',
    status: <><Pill tone="success" dot text="On market · 20 DOM" /><Pill text="Auction Sat 21/11/2026 11:00am" /><span className="muted small">in 10 days</span></>,
    people: <><span className="with-icon"><Avatar size="sm" initials="RA" /><Avatar size="sm" initials="TA" /><a href="#/customers/rachel">Vendors: Rachel &amp; Tom Ashdown</a></span><span className="with-icon"><Avatar size="sm" initials="LT" />Agent: Liam Tran</span></>,
    buyers: 48,
    openHomes: 5,
  },
  '5-27-albert': {
    ref: 'KV-S-1036',
    title: '5/27 Albert Street, Brunswick VIC 3056',
    facts: 'Apartment · 2 bed · 1 bath · 1 car · 78 m² internal · Strata (OC)',
    status: <><Pill tone="success" dot text="On market · 46 DOM" /><Pill text="Private sale · $640,000" /></>,
    people: <><span className="with-icon"><Avatar size="sm" initials="GH" />Vendors: Vendor (private)</span><span className="with-icon"><Avatar size="sm" initials="PR" />Agent: Priya Raman</span></>,
    buyers: 31,
    openHomes: 6,
  },
}

export function ListingPage({ id, tab = 'overview' }: { id: string; tab?: string }) {
  const toast = useToast()
  const listing = listings.find((l) => l.id === id)
  const detail = DETAILS[id] ?? (listing && {
    ref: `KV-S-${1000 + listings.indexOf(listing)}`,
    title: `${listing.street}, ${listing.suburb}`,
    facts: listing.method,
    status: <Pill tone="success" dot text={`${listing.stage}${listing.dom ? ` · ${listing.dom}` : ''}`} />,
    people: <span className="with-icon"><Avatar size="sm" initials={listing.agent} />Agent</span>,
    buyers: 12,
    openHomes: 2,
  })
  if (!detail) return <EmptyState title="Listing not found" action={<Button href="#/listings">Back to pipeline</Button>} />

  const offerCount = id === '5-27-albert' ? initialOffers.length : id === '14-ruby' ? 1 : 0
  const tabs = [
    ['overview', 'Overview'], ['details', 'Details'], ['media', 'Media'], ['copy', 'Copy'], ['price', 'Price & Disclosure'],
    ['authority', 'Authority & Docs'], ['campaign', 'Campaign & VPA'], ['portals', 'Portals'], ['buyers', `Buyers (${detail.buyers})`],
    ['open-homes', `Open Homes (${detail.openHomes})`], ['offers', `Offers (${offerCount})`],
  ]

  return (
    <>
      <PageHeader
        breadcrumb={<><a href="#/listings">Listings</a> / {detail.ref}</>}
        title={detail.title}
        description={detail.facts}
        actions={
          <>
            <Button variant="secondary" appearance="outlined" startIcon={<Icon name="edit" />} onClick={() => toast.add({ title: 'Edit listing is not part of the demo' })}>Edit listing</Button>
            <Button variant="secondary" appearance="outlined" startIcon={<Glyph name="mail" />} href="#/vendor">Share vendor report</Button>
          </>
        }
      >
        <div className="tags">{detail.status}</div>
        <div className="tags muted small">{detail.people}</div>
      </PageHeader>

      <Tabs
        aria-label="Listing sections"
        className="listing-tabs"
        size="sm"
        value={tab}
        onValueChange={(v) => (location.hash = v === 'open-homes' ? '#/open-homes' : `#/listings/${id}/${v}`)}
        items={tabs.map(([value, label]) => ({ value, label }))}
      />

      {tab === 'price' && id === '14-ruby' ? (
        <PriceDisclosure />
      ) : tab === 'offers' && id === '5-27-albert' ? (
        <Offers />
      ) : tab === 'overview' ? (
        <EmptyState
          title="Listing overview"
          description="The demo covers Price & Disclosure on 14 Ruby St and Offers on 5/27 Albert St."
          action={<Button href={id === '5-27-albert' ? '#/listings/5-27-albert/offers' : '#/listings/14-ruby/price'}>{id === '5-27-albert' ? 'Open Offers' : 'Open Price & Disclosure'}</Button>}
        />
      ) : (
        <EmptyState title={tabs.find(([v]) => v === tab)?.[1] ?? 'Section'} description="This section isn't part of the demo." />
      )}
    </>
  )
}

// ——— S4 · Price & Disclosure ———

function PriceDisclosure() {
  const toast = useToast()
  const [advertised, setAdvertised] = useState<[number, number]>([1450000, 1550000])
  const [reviewOpen, setReviewOpen] = useState(false)
  const [draft, setDraft] = useState({ low: '1550000', high: '1650000' })
  const [checks, setChecks] = useState({ confirm: false, pps: false, portals: false })
  const [published, setPublished] = useState(false)
  const [ppsVersion, setPpsVersion] = useState(2)
  const [generating, setGenerating] = useState(false)
  const [log, setLog] = useState(priceLog)

  const reserve = 1600000
  const reviewed = reserve <= advertised[1]
  const range = (advertised[1] - advertised[0]) / advertised[0]
  const low = Number(draft.low)
  const high = Number(draft.high)
  const draftRange = (high - low) / low
  const draftError = !low || !high ? 'Enter both ends of the range' : high < low ? 'Upper end is below lower end' : draftRange > 0.1 ? `Range is ${(draftRange * 100).toFixed(1)}% — VIC allows 10% at most` : undefined
  const allChecked = checks.confirm && checks.pps && checks.portals
  const add = (text: string) => setLog((l) => [...l, { at: '11/11 now', text, by: 'Liam Tran', flagged: false }])

  return (
    <div className="grid grid-3-1">
      <div className="stack">
        {!reviewed && (
          <div className="callout callout-danger callout-row">
            <Icon name="warning" />
            <div>
              <strong>Reserve change requires a price review</strong>
              <p>Update the estimated selling price, Property Price Statement and all advertising before the reserve is published.</p>
            </div>
            <Button onClick={() => setReviewOpen(true)}>Start price review</Button>
          </div>
        )}

        <Panel title="Price" icon={<Glyph name="offer" />} actions={<Pill dot text="VIC rules · from 01/10/2026" />}>
          <dl className="price-rows">
            <div>
              <dt><strong>Estimated selling price</strong><span className="muted small">From Exclusive Sale Authority · 16/10/2026</span></dt>
              <dd className="price">{fmt(advertised[0])} – {fmt(advertised[1])}</dd>
              <dd />
            </div>
            <div>
              <dt><strong>Advertised price</strong><span className="muted small">Single figure or range ≤10%. "From", "offers above" and "+" not permitted in VIC.</span></dt>
              <dd className="price">{fmt(advertised[0])} – {fmt(advertised[1])}</dd>
              <dd className="tags"><Pill tone="success" text={`Range ${(range * 100).toFixed(1)}% ✓`} /><Pill tone="success" text="No qualifiers ✓" /></dd>
            </div>
            <div>
              <dt><strong>Indicative reserve (vendor)</strong><span className="muted small">Entered 10/11/2026 4:20pm by Liam Tran</span></dt>
              <dd className={`price ${reviewed ? '' : 'text-danger'}`}>{fmt(reserve)}</dd>
              <dd>{reviewed ? <Pill tone="success" text="Within advertised range" /> : <Pill tone="danger" text="Above advertised range" />}</dd>
            </div>
          </dl>
        </Panel>

        <div className="grid grid-1-1">
          <Panel title="Reserve publication" icon={<Glyph name="clock" />} actions={published ? <Pill tone="success" dot text="Published" /> : <Pill tone="warning" dot text="Not published" />}>
            <p className="big-figure text-danger">3 days <span className="muted small">left</span></p>
            <p className="muted small">Publish by 11:00am Sat 14/11/2026 — 7 full days before the auction. Auction cannot proceed if missed.</p>
            <div className="checklist">
              <Checkbox label="Vendor confirms reserve in writing" checked={checks.confirm} onCheckedChange={(v) => setChecks((c) => ({ ...c, confirm: v }))} disabled={published} />
              <Checkbox label="Property Price Statement updated" checked={checks.pps} onCheckedChange={(v) => setChecks((c) => ({ ...c, pps: v }))} disabled={published || !reviewed} helperText={!reviewed ? 'Needs the price review first' : undefined} />
              <Checkbox label="Portals & signboard updated" checked={checks.portals} onCheckedChange={(v) => setChecks((c) => ({ ...c, portals: v }))} disabled={published} />
            </div>
            <div className="button-row">
              <Button
                disabled={!allChecked || published}
                startIcon={<Glyph name="lock" />}
                variant={allChecked ? 'primary' : 'secondary'}
                onClick={() => {
                  setPublished(true)
                  add(`Reserve ${fmt(reserve)} published`)
                  toast.add({ title: 'Reserve published', description: 'Logged to the immutable price history.', variant: 'success' })
                }}
              >
                {published ? 'Reserve published' : 'Publish reserve'}
              </Button>
              {!allChecked && !published && <span className="muted small">Complete checklist first</span>}
            </div>
          </Panel>

          <Panel title="Property Price Statement" icon={<Icon name="file" />} description="3 comparable sales" actions={<Pill text={`v${ppsVersion} · issued ${ppsVersion === 2 ? '22/10/2026' : '11/11/2026'}`} />}>
            <ul className="rows">
              {comparables.map((c) => (
                <li key={c.address} className="row-split"><span>{c.address}</span><span className="muted small">{c.date}</span><strong>{fmt(c.price)}</strong></li>
              ))}
              <li className="row-split"><span className="muted">Suburb median (houses)</span><Pill tone="warning" dot text="Awaiting Cotality data" /></li>
            </ul>
            <div className="button-row">
              <Button
                className="btn-navy"
                isLoading={generating}
                startIcon={<Icon name="file" />}
                onClick={() => {
                  setGenerating(true)
                  setTimeout(() => {
                    setGenerating(false)
                    setPpsVersion((v) => v + 1)
                    add(`Property Price Statement v${ppsVersion + 1} generated`)
                    toast.add({ title: `PPS v${ppsVersion + 1} generated`, variant: 'success' })
                  }, 900)
                }}
              >
                Generate v{ppsVersion + 1}
              </Button>
            </div>
          </Panel>
        </div>

        <Panel title="Price history log" icon={<Glyph name="clock" />} actions={<span className="muted small with-icon"><Glyph name="lock" /> Immutable · audit trail</span>}>
          <ol className="log">
            {log.map((e, i) => (
              <li key={i} className={e.flagged ? 'flagged' : ''}>
                <span className="muted small">{e.at}</span>
                <span>{e.text}</span>
                <span className="muted small">{e.by}</span>
              </li>
            ))}
          </ol>
        </Panel>
      </div>

      <div className="stack">
        <Panel title="Campaign" icon={<Glyph name="chart" />} actions={<Pill text="Week 3" />}>
          <dl className="facts">
            <div><dt>Views</dt><dd>4,698</dd></div>
            <div><dt>Enquiries</dt><dd>41</dd></div>
            <div><dt>OFI groups</dt><dd>48</dd></div>
            <div><dt>Contracts</dt><dd>9</dd></div>
            <div><dt>Bidders</dt><dd>3</dd></div>
            <div><dt>Offers</dt><dd>1</dd></div>
          </dl>
        </Panel>
        <Panel title="Vendor-paid advertising" icon={<Glyph name="wallet" />}>
          <p className="big-figure">$9,050 incl. GST</p>
          <div className="tags"><Pill dot text="CampaignAgent Pay Later" /></div>
          <p className="muted small">Fee 6.9% = $624.45 · due at settlement or 6 months</p>
        </Panel>
        <Panel title="Vendor CDD (AML/CTF)" icon={<Glyph name="shield" />} actions={<Pill tone="success" dot text="Risk Low" />}>
          <ul className="rows">
            <li className="row-split"><span className="with-icon"><Icon name="check" className="text-success" />Rachel Ashdown</span><span className="muted small">Verified 21/10/2026</span></li>
            <li className="row-split"><span className="with-icon"><Icon name="check" className="text-success" />Tom Ashdown</span><span className="muted small">Verified 21/10/2026</span></li>
          </ul>
          <p className="muted small">PEP / Sanctions: Clear</p>
        </Panel>
      </div>

      <Modal
        open={reviewOpen}
        onOpenChange={setReviewOpen}
        title="Price review — 14 Ruby St"
        description="The reserve is $1,600,000. Move the estimated selling price and advertised range so the reserve sits inside it."
        footer={
          <>
            <Button variant="secondary" appearance="outlined" onClick={() => setReviewOpen(false)}>Cancel</Button>
            <Button
              disabled={!!draftError}
              onClick={() => {
                setAdvertised([low, high])
                setReviewOpen(false)
                add(`Price review: estimated & advertised price set — ${fmt(low)} – ${fmt(high)}`)
                toast.add({ title: 'Price updated', description: 'Portals, signboard and PPS are now out of date — tick them off in the checklist.', variant: 'success' })
              }}
            >
              Update price
            </Button>
          </>
        }
      >
        <div className="form-stack">
          <div className="grid grid-1-1">
            <TextInput label="Lower end" inputMode="numeric" prefix="$" value={draft.low} onChange={(e) => setDraft((d) => ({ ...d, low: e.target.value.replace(/\D/g, '') }))} />
            <TextInput label="Upper end" inputMode="numeric" prefix="$" value={draft.high} onChange={(e) => setDraft((d) => ({ ...d, high: e.target.value.replace(/\D/g, '') }))} validationState={draftError ? 'error' : undefined} helperText={draftError ?? `Range ${(draftRange * 100).toFixed(1)}%`} />
          </div>
          <Select label="Reason" defaultValue="reserve" options={[{ value: 'reserve', label: 'Vendor reserve above range' }, { value: 'offer', label: 'Written offer above range' }, { value: 'market', label: 'Market feedback' }]} />
        </div>
      </Modal>
    </div>
  )
}

// ——— S4b · Offers ———

const STATUS: Record<Offer['status'], { text: string; tone: 'neutral' | 'danger' | 'success' }> = {
  sent: { text: 'Sent to Vendor 10/11', tone: 'neutral' },
  review: { text: 'For Review', tone: 'neutral' },
  rejected: { text: 'Rejected 04/11', tone: 'danger' },
  accepted: { text: 'Accepted', tone: 'success' },
}

function Offers() {
  const toast = useToast()
  const [rows, setRows] = useState(initialOffers)
  const [selected, setSelected] = useState('OF-0413')
  const [vendorView, setVendorView] = useState(false)
  const [logOpen, setLogOpen] = useState(false)
  const [acceptOpen, setAcceptOpen] = useState(false)
  const [cddRequested, setCddRequested] = useState(false)
  const offer = rows.find((o) => o.id === selected)!
  const best = [...rows].filter((o) => o.status !== 'rejected').sort((a, b) => b.price - a.price)[0]
  const vs = (p: number) => `${(((p - ALBERT_ADVERTISED) / ALBERT_ADVERTISED) * 100).toFixed(1)}%`.replace('-', '−')
  const set = (id: string, status: Offer['status']) => setRows((all) => all.map((o) => (o.id === id ? { ...o, status } : o)))

  return (
    <div className="grid grid-3-1">
      <div className="stack">
        <Panel
          title={<>Offers <Pill text={`Advertised ${fmt(ALBERT_ADVERTISED)}`} /></>}
          actions={
            <div className="button-row">
              <Switch label="Vendor view" checked={vendorView} onCheckedChange={setVendorView} />
              <Button size="sm" variant="secondary" appearance="outlined" startIcon={<Icon name="plus" />} onClick={() => setLogOpen(true)}>Log offer</Button>
              <Button size="sm" className="btn-navy" startIcon={<Glyph name="mail" />} onClick={() => { set(selected, offer.status === 'rejected' ? 'rejected' : 'sent'); toast.add({ title: `${offer.id} sent to vendor`, description: 'Buyer identity hidden in the vendor copy.', variant: 'success' }) }}>Send to Vendor</Button>
            </div>
          }
        >
          <Table<Offer>
            caption="Offers on 5/27 Albert Street"
            rows={rows}
            getRowId={(o) => o.id}
            columns={[
              { key: 'id', header: 'Offer', isRowHeader: true, cell: (o) => (
                <label className="offer-pick">
                  <input type="radio" name="offer" checked={selected === o.id} onChange={() => setSelected(o.id)} />
                  {o.id}
                </label>
              ) },
              { key: 'buyer', header: 'Buyer', width: '14rem', cell: (o) => (vendorView ? o.vendorLabel : o.buyer) },
              { key: 'price', header: 'Price', align: 'end', cell: (o) => <strong>{fmt(o.price)}</strong> },
              { key: 'vs', header: 'vs advertised', align: 'end', cell: (o) => <span className="text-danger">{vs(o.price)}</span> },
              { key: 'deposit', header: 'Deposit', cell: (o) => o.deposit },
              { key: 'settlement', header: 'Settlement', cell: (o) => o.settlement },
              { key: 'conditions', header: 'Conditions', cell: (o) => o.conditions },
              { key: 'status', header: 'Status', cell: (o) => (
                <div className="stack-xs">
                  <Pill dot tone={STATUS[o.status].tone} text={STATUS[o.status].text} />
                  {o.cddPending && !vendorView && <Pill dot tone="warning" text={cddRequested ? 'Buyer CDD · docs requested' : 'Buyer CDD in progress'} />}
                </div>
              ) },
            ]}
          />
        </Panel>

        {offer.cddPending && (
          <div className="callout callout-warning callout-row">
            <Glyph name="shield" />
            <div>
              <strong>{offer.id} — Buyer CDD in progress</strong>
              <p>Harlow Nominees ATF Harlow Family Trust: 2 of 2 beneficial owners pending. Contract can be prepared, exchange is blocked until Verified.</p>
            </div>
            <Button variant="secondary" appearance="outlined" startIcon={<Icon name="file" />} disabled={cddRequested} onClick={() => { setCddRequested(true); toast.add({ title: 'Documents requested', description: 'Trust deed + ID for both beneficial owners.' }) }}>
              {cddRequested ? 'Requested' : 'Request documents'}
            </Button>
          </div>
        )}

        <div className="button-row">
          <Button startIcon={<Icon name="check" />} disabled={offer.status === 'accepted' || offer.status === 'rejected'} onClick={() => (offer.cddPending ? setAcceptOpen(true) : (set(offer.id, 'accepted'), toast.add({ title: `${offer.id} accepted`, variant: 'success' })))}>Accept</Button>
          <Button variant="secondary" appearance="outlined" startIcon={<Glyph name="clock" />} onClick={() => toast.add({ title: `${offer.id} deferred`, description: 'Buyer told the vendor will respond by Fri 13/11.' })}>Defer</Button>
          <Button variant="secondary" appearance="outlined" startIcon={<Icon name="file" />} onClick={() => toast.add({ title: 'Contract prepared', description: `${offer.id} · ready for vendor signature.`, variant: 'success' })}>Generate contract</Button>
          <Button variant="destructive" appearance="ghost" disabled={offer.status === 'rejected'} onClick={() => { set(offer.id, 'rejected'); toast.add({ title: `${offer.id} rejected`, action: { label: 'Undo', onClick: () => set(offer.id, offer.status) } }) }}>Reject</Button>
        </div>
      </div>

      <div className="stack">
        <Panel title="Best position" icon={<Glyph name="offer" />} actions={<Pill tone="danger" dot text={best.id} />}>
          <p className="big-figure">{fmt(best.price)}</p>
          <p className="muted small">{vs(best.price)} vs advertised (market discount 4.7% national) · {best.conditions} · {best.settlement} settlement · {best.deposit} deposit</p>
        </Panel>
        <Panel title="What the vendor sees" icon={<Glyph name="eye" />}>
          <ul className="rows">
            {[...rows].sort((a, b) => b.price - a.price).map((o) => (
              <li key={o.id} className="row-split"><span>{o.vendorLabel}</span><span>{fmt(o.price)} · {o.status === 'rejected' ? 'Rejected' : o.conditions.replace('Subject to finance (14 days)', 'Finance 14 days')}</span></li>
            ))}
          </ul>
        </Panel>
        <Panel title="Price log" icon={<Glyph name="clock" />}>
          <p className="muted small">04/11 — OF-0409 $600,000 rejected → price review logged (VIC). Advertised price confirmed at $640,000.</p>
        </Panel>
      </div>

      <ConfirmDialog
        open={acceptOpen}
        onOpenChange={setAcceptOpen}
        title={`Accept ${offer.id}?`}
        description="The buyer's CDD is still in progress. The contract can be signed, but exchange stays blocked until both beneficial owners are Verified."
        confirmLabel="Accept, hold exchange"
        onConfirm={() => {
          set(offer.id, 'accepted')
          toast.add({ title: `${offer.id} accepted`, description: 'Exchange held until buyer CDD is Verified.', variant: 'success' })
        }}
      />

      <Modal
        open={logOpen}
        onOpenChange={setLogOpen}
        title="Log offer"
        description="Written offers only. A verbal offer is a note."
        footer={<><Button variant="secondary" appearance="outlined" onClick={() => setLogOpen(false)}>Cancel</Button><Button type="submit" form="log-offer">Log offer</Button></>}
      >
        <form
          id="log-offer"
          className="form-stack"
          onSubmit={(e) => {
            e.preventDefault()
            const f = new FormData(e.currentTarget)
            const price = Number(String(f.get('price')).replace(/\D/g, ''))
            if (!price) return
            const id = `OF-04${14 + rows.length - 3}`
            setRows((all) => [...all, { id, buyer: String(f.get('buyer') || 'New buyer'), vendorLabel: `Buyer ${String.fromCharCode(65 + all.length)}`, price, deposit: '10%', settlement: '45 days', conditions: String(f.get('conditions')), status: 'review' }])
            setSelected(id)
            setLogOpen(false)
            toast.add({ title: `${id} logged`, variant: 'success' })
          }}
        >
          <TextInput name="buyer" label="Buyer" required isFullWidth />
          <TextInput name="price" label="Price" prefix="$" inputMode="numeric" required isFullWidth />
          <Select name="conditions" label="Conditions" defaultValue="Unconditional" options={['Unconditional', 'Subject to finance (14 days)', 'Subject to building & pest'].map((v) => ({ value: v, label: v }))} />
        </form>
      </Modal>
    </div>
  )
}
