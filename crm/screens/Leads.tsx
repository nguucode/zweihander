import { useState } from 'react'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Button } from '@/components/buttons/Button'
import { Table } from '@/components/data-display/Table'
import { Search } from '@/components/inputs/Search'
import { Menu } from '@/components/navigation/Menu'
import { Pagination } from '@/components/navigation/Pagination'
import { Tabs } from '@/components/navigation/Tabs'
import { useToast } from '@/components/notifications/Toast'
import { Stats } from '@/components/patterns/application-ui/Stats'
import { EmptyState } from '@/components/states/EmptyState'
import { Icon } from '@/lib/icon'
import { Glyph } from '../icons'
import { leads as initial, OWNERS, type Lead, type LeadStatus } from '../data'
import { PageHeader, Pill } from '../ui'

const TABS = ['All', 'New', 'Contacted', 'Qualified', 'Unassigned', 'Closed'] as const
const PAGE = 8
const tone = (s: LeadStatus) => (s === 'New' ? 'danger' : s === 'Qualified' ? 'success' : 'neutral')

export function Leads() {
  const toast = useToast()
  const [rows, setRows] = useState(initial)
  const [tab, setTab] = useState<string>('All')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [kind, setKind] = useState('All')
  const [selectedId, setSelectedId] = useState<string | null>(() => new URLSearchParams(location.hash.split('?')[1]).get('lead') ?? 'l2')

  const matches = (l: Lead, t: string) => t === 'All' || (t === 'Unassigned' ? !l.owner : l.status === t)
  const filtered = rows.filter(
    (l) =>
      matches(l, tab) &&
      (kind === 'All' || l.kind.toLowerCase().includes(kind.toLowerCase())) &&
      `${l.name} ${l.enquiry} ${l.message} ${l.source}`.toLowerCase().includes(query.toLowerCase()),
  )
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE))
  const visible = filtered.slice((page - 1) * PAGE, page * PAGE)
  const lead = rows.find((l) => l.id === selectedId)

  const assign = (id: string, owner: string) => {
    const first = owner.split(' ')[0]
    setRows((all) => all.map((l) => (l.id === id ? { ...l, owner: first, ownerInitials: owner.split(' ').map((w) => w[0]).join(''), status: l.status === 'New' ? 'Contacted' : l.status } : l)))
    toast.add({ title: `Assigned to ${owner}`, description: 'They get a push and an SMS. SLA clock keeps running.', variant: 'success' })
  }

  return (
    <>
      <PageHeader
        title="Leads"
        actions={<Button variant="secondary" appearance="ghost" startIcon={<Glyph name="filter" />} onClick={() => toast.add({ title: 'Routing rules', description: 'Suburb + enquiry type → agent. Clifton Hill has no rule yet.' })}>Routing rules</Button>}
      />

      <Stats
        className="kpis kpis-5"
        aria-label="Lead response"
        stats={[
          { label: 'New', value: rows.filter((l) => l.status === 'New').length, previous: 'since 5:00pm yesterday' },
          { label: 'Unassigned', value: rows.filter((l) => !l.owner).length, previous: <span className="text-warning">no routing rule matched</span> },
          { label: 'Median first response', value: '14 min', previous: <span className="text-success">target ≤ 30 min</span> },
          { label: 'Responded within 1h', value: '92%', previous: 'last 7 days' },
          { label: 'Enquiry → appraisal', value: '6', previous: 'last 30 days' },
        ]}
      />

      <div className={`leads-layout ${lead ? 'has-detail' : ''}`}>
        <section className="leads-main" aria-label="Lead list">
          <div className="toolbar">
            <Tabs
              appearance="pills"
              aria-label="Status"
              value={tab}
              onValueChange={(v) => { setTab(v); setPage(1) }}
              items={TABS.map((t) => ({ value: t, label: <span className="with-icon">{t} <Pill text={String(rows.filter((l) => matches(l, t)).length)} /></span> }))}
            />
            <div className="toolbar-end">
              <Search aria-label="Search leads" placeholder="Search" size="sm" value={query} onChange={(e) => { setQuery(e.target.value); setPage(1) }} />
              <Menu
                trigger={<Button variant="secondary" appearance="outlined" startIcon={<Glyph name="filter" />}>Lead: {kind}</Button>}
                items={[{ type: 'radio', label: 'Lead type', value: kind, onValueChange: (v) => { setKind(v); setPage(1) }, options: ['All', 'Buyer', 'Vendor', 'Landlord', 'Tenant'].map((v) => ({ value: v, label: v })) }]}
              />
              <Button variant="secondary" appearance="outlined" startIcon={<Glyph name="download" />} onClick={() => toast.add({ title: `Exported ${filtered.length} leads`, description: 'leads.csv' })}>Export</Button>
            </div>
          </div>

          <Table<Lead>
            caption="Leads"
            rows={visible}
            getRowId={(l) => l.id}
            emptyState={<EmptyState size="sm" title="No leads match" description="Clear the search or pick another tab." />}
            columns={[
              { key: 'name', header: 'Lead', width: '13rem', isRowHeader: true, cell: (l) => (
                <button type="button" className={`lead-cell ${l.id === selectedId ? 'is-selected' : ''}`} onClick={() => setSelectedId(l.id)} aria-pressed={l.id === selectedId}>
                  <Avatar initials={l.initials} />
                  <span><strong>{l.name}</strong><span className="muted small">{l.kind}</span></span>
                </button>
              ) },
              { key: 'status', header: 'Status', cell: (l) => <Pill dot tone={tone(l.status)} text={l.status} /> },
              { key: 'enquiry', header: 'Enquiry', width: '16rem', cell: (l) => <span className="clip"><span>{l.enquiry}</span><span className="muted small">{l.message}</span></span> },
              { key: 'source', header: 'Source', cell: (l) => l.source },
              { key: 'owner', header: 'Owner', cell: (l) => (l.owner ? <span className="with-icon"><Avatar size="sm" initials={l.ownerInitials} />{l.owner}</span> : <span className="with-icon muted"><span className="dashed-avatar" />Unassigned</span>) },
              { key: 'response', header: 'First response', cell: (l) => <span className="clip"><span className={l.responseTone ? `text-${l.responseTone}` : ''}>{l.response}</span><span className="muted small">{l.responseAt}</span></span> },
            ]}
          />
          <div className="row-split">
            <span className="muted small">Showing {visible.length} of {filtered.length}</span>
            <Pagination totalPages={pages} page={page} onPageChange={setPage} />
          </div>
        </section>

        {lead && (
          <aside className="lead-detail" aria-label={`Lead: ${lead.name}`}>
            <div className="row-split">
              <span className="muted small">{rows.indexOf(lead) + 1} of {rows.length}</span>
              <div className="button-row">
                <Button size="sm" variant="secondary" appearance="ghost" isIconOnly aria-label="Previous lead" disabled={rows.indexOf(lead) === 0} onClick={() => setSelectedId(rows[rows.indexOf(lead) - 1].id)}><Icon name="chevron-up" /></Button>
                <Button size="sm" variant="secondary" appearance="ghost" isIconOnly aria-label="Next lead" disabled={rows.indexOf(lead) === rows.length - 1} onClick={() => setSelectedId(rows[rows.indexOf(lead) + 1].id)}><Icon name="chevron-down" /></Button>
                <Button size="sm" variant="secondary" appearance="ghost" isIconOnly aria-label="Close" onClick={() => setSelectedId(null)}><Icon name="close" /></Button>
              </div>
            </div>
            <Avatar size="lg" initials={lead.initials} color="orange" />
            <h2>{lead.name}</h2>
            <p className="muted small">{lead.kind} · enquired via {lead.source.toLowerCase()}</p>
            <div className="tags">
              <Pill dot tone={tone(lead.status)} text={lead.status} />
              {!lead.owner && <Pill tone="warning" text="Unassigned" />}
              {lead.id === 'l2' && <Pill text="Outside patch" />}
            </div>
            {lead.email && <a className="with-icon small" href={`mailto:${lead.email}`}><Glyph name="mail" />{lead.email}</a>}
            {lead.phone && <a className="with-icon small" href={`tel:${lead.phone.replace(/\s/g, '')}`}><Glyph name="phone" />{lead.phone}</a>}
            {lead.responseTone === 'danger' && <div className="callout callout-danger callout-tight with-icon"><Glyph name="clock" />{lead.response} • First response target is 30 min</div>}

            <h3 className="section-title">Message</h3>
            <div className="quote">
              <p>{lead.message}</p>
              <span className="muted small">{lead.responseAt} · {lead.source}</span>
            </div>

            <h3 className="section-title with-icon"><Glyph name="spark" className="text-primary" /> Suggested next step</h3>
            <dl className="facts facts-rows">
              <div><dt>Intent</dt><dd>{lead.kind.split(' ·')[0]}</dd></div>
              <div><dt>Property</dt><dd>{lead.enquiry}</dd></div>
              <div><dt>Routing</dt><dd>{lead.owner ? `Matched → ${lead.owner}` : 'Outside patch, no rule matched'}</dd></div>
              <div><dt>Owner</dt><dd>{lead.owner ?? 'Sienna Marchetti · handles referrals'}</dd></div>
            </dl>

            <h3 className="section-title">Consent & checks</h3>
            <ul className="rows">
              <li className="with-icon"><Icon name="check" className="text-success" /> Email · Express consent, {lead.source.toLowerCase()}</li>
              <li className="with-icon"><Icon name="warning" className="text-warning" /> SMS · Not given. Email or call only</li>
              <li className="with-icon"><Icon name="warning" className="text-warning" /> Phone · Wash against DNCR before calling</li>
            </ul>

            <div className="lead-actions">
              <Button size="sm" variant="secondary" appearance="outlined" startIcon={<Glyph name="mail" />} onClick={() => toast.add({ title: `Reply to ${lead.name.split(' ')[0]}`, description: 'Email composer would open here.' })}>Reply</Button>
              <Button size="sm" variant="secondary" appearance="outlined" startIcon={<Icon name="calendar" />} onClick={() => toast.add({ title: 'Appraisal booking', description: 'Next free slot: Thu 12/11 4:00pm.', variant: 'info' })}>Book appraisal</Button>
              <Menu
                align="end"
                trigger={<Button size="sm" className="btn-navy" endIcon={<Icon name="chevron-down" />}>Assign to</Button>}
                items={OWNERS.map((o) => ({ label: o, onSelect: () => assign(lead.id, o) }))}
              />
            </div>
          </aside>
        )}
      </div>
    </>
  )
}
