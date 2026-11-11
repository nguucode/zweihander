import { useState } from 'react'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Tag } from '@/components/atomic-elements/Tag'
import { Button } from '@/components/buttons/Button'
import { Textarea } from '@/components/inputs/Textarea'
import { Select } from '@/components/inputs/Select'
import { Tabs } from '@/components/navigation/Tabs'
import { useToast } from '@/components/notifications/Toast'
import { Modal } from '@/components/overlays/Modal'
import { EmptyState } from '@/components/states/EmptyState'
import { Icon } from '@/lib/icon'
import { Glyph, type GlyphName } from '../icons'
import { timeline as initial, type TimelineItem, type TimelineKind } from '../data'
import { Panel, Pill } from '../ui'

const FILTERS = ['All', 'Calls', 'Emails & SMS', 'Notes', 'Documents', 'Offers'] as const
const KIND_ICON: Record<TimelineKind, GlyphName> = { Calls: 'phone', 'Emails & SMS': 'mail', Notes: 'home', Documents: 'shield', Offers: 'offer', Events: 'clock' }
const SUGGESTED = 'Hi Rachel, before 9 Elm Grove in Thornbury goes public on Friday, would you and Tom like a private look tomorrow?'

export function Contact() {
  const toast = useToast()
  const [filter, setFilter] = useState<string>('All')
  const [items, setItems] = useState<TimelineItem[]>(initial)
  const [noteOpen, setNoteOpen] = useState(false)
  const [sms, setSms] = useState(SUGGESTED)
  const [editingSms, setEditingSms] = useState(false)
  const [smsSent, setSmsSent] = useState(false)
  const [reqs, setReqs] = useState(['Thornbury', 'Northcote', 'House', '4+ bed', '$1.9m–$2.1m', 'Needs to sell first'])

  const log = (item: Omit<TimelineItem, 'id' | 'at'>) => setItems((all) => [{ ...item, id: crypto.randomUUID(), at: '11/11 now' }, ...all])
  const shown = items.filter((t) => filter === 'All' || t.kind === filter || (filter === 'Calls' && t.kind === 'Events'))

  return (
    <>
      <header className="page-header contact-header">
        <Avatar size="lg" initials="RA" />
        <div className="page-heading">
          <div className="breadcrumb"><a href="#/customers">Customers</a> / C-10231</div>
          <h1 className="with-icon">Rachel Ashdown <Tag variant="neutral" appearance="outlined" text="+ Tom Ashdown" startIcon={<Glyph name="users" />} /></h1>
          <div className="tags">
            <Pill tone="danger" dot text="Vendor" /><Pill dot text="Buyer" /><Pill dot text="Landlord" />
            <span className="muted small">Selling to upsize · Timeframe: 3 months · Hot</span>
          </div>
          <div className="tags muted small">
            <span className="with-icon"><Avatar size="sm" initials="LT" />Agent: Liam Tran</span>
            <span className="with-icon"><Avatar size="sm" initials="MC" />PM: Mia Castellano</span>
            <span className="with-icon"><Glyph name="phone" />0491 571 266</span>
          </div>
        </div>
        <div className="page-actions">
          <Button startIcon={<Glyph name="phone" />} onClick={() => { log({ kind: 'Calls', title: 'Call · outgoing', detail: 'Calling 0491 571 266… (demo)' }); toast.add({ title: 'Calling Rachel', description: 'Logged to the timeline.' }) }}>Call</Button>
          <Button variant="secondary" appearance="outlined" startIcon={<Glyph name="message" />} onClick={() => setEditingSms(true)}>SMS</Button>
          <Button variant="secondary" appearance="outlined" startIcon={<Glyph name="mail" />} onClick={() => toast.add({ title: 'Email composer would open here' })}>Email</Button>
          <Button variant="secondary" appearance="outlined" startIcon={<Icon name="edit" />} onClick={() => setNoteOpen(true)}>Log note</Button>
          <Button variant="secondary" appearance="ghost" startIcon={<Glyph name="key" />} href="#/rentals">Open in Rentals</Button>
        </div>
      </header>

      <div className="grid grid-1-2-1">
        <div className="stack">
          <Panel title="Compliance" icon={<Glyph name="shield" />} actions={<Pill tone="success" dot text="CDD Verified" />}>
            <ul className="rows">
              {[
                ['mail', 'Email', 'Express ✓', 'success', 'Appraisal request form · 14/09/2026'],
                ['message', 'SMS', 'Express ✓', 'success', 'Appraisal request form · 14/09/2026'],
                ['phone', 'Phone', 'DNCR washed', 'success', '01/11/2026 · not registered'],
                ['shield', 'AML/CTF CDD', 'Verified 21/10', 'success', 'VIC driver licence + passport · Risk Low · PEP clear'],
                ['listing', 'Collection notice', 'Sent', 'neutral', '14/09/2026'],
              ].map(([icon, label, status, tone, detail]) => (
                <li key={label} className="with-icon align-start">
                  <Glyph name={icon as GlyphName} />
                  <span><strong>{label}</strong> <span className={tone === 'success' ? 'text-success small' : 'small'}>{status}</span><br /><span className="muted small">{detail}</span></span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Properties & relationships" icon={<Glyph name="home" />}>
            <ul className="rows">
              <li><a href="#/listings/14-ruby/price"><strong>14 Ruby St, Northcote</strong></a><br /><span className="muted small">Vendor · On market · Auction 21/11</span><br /><Pill tone="danger" dot text="Sales" /></li>
              <li><strong>2/19 Herbert St, Northcote</strong><br /><span className="muted small">Landlord · Managed · $560 per week · Tenant Sam Doyle · Lease ends 28/02/2027</span><br /><Pill dot text="Rentals" /></li>
              <li><strong>Tom Ashdown</strong><br /><span className="muted small">Household · Vendor · Buyer</span><br /><Pill dot text="Household" /></li>
            </ul>
          </Panel>
        </div>

        <div className="stack">
          <div className="callout callout-neutral">
            <strong className="with-icon"><Glyph name="spark" className="text-primary" /> Summary</strong>
            <p>Rachel and Tom are selling 14 Ruby St to buy a 4-bed in Thornbury and need to sell first. Their reserve expectation ($1.6m) is 7–10% above the OFI feedback median. 9 Elm Grove matches their brief and launches Fri 13/11.</p>
            <p className="muted small">Why this? · Sources: OFI feedback, call 10/11, buyer requirements</p>
          </div>

          <Panel title="Timeline" icon={<Icon name="calendar" />}>
            <Tabs appearance="pills" size="sm" aria-label="Filter timeline" value={filter} onValueChange={setFilter} items={FILTERS.map((f) => ({ value: f, label: f }))} />
            {shown.length ? (
              <ol className="timeline">
                {shown.map((t) => (
                  <li key={t.id}>
                    <span className="row-icon"><Glyph name={KIND_ICON[t.kind]} /></span>
                    <div className="row-main"><strong>{t.title}</strong><span className="muted small">{t.detail}</span></div>
                    <span className="muted small">{t.at}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <EmptyState size="sm" title={`No ${filter.toLowerCase()} yet`} />
            )}
          </Panel>
        </div>

        <div className="stack">
          <Panel title="Buyer requirements" icon={<Glyph name="home" />}>
            <div className="tags">
              {reqs.map((r) => <Tag key={r} variant="neutral" text={r} hasRemoveButton onRemove={() => setReqs((all) => all.filter((x) => x !== r))} />)}
            </div>
            <h3 className="section-title">Live matches</h3>
            <div className="match is-hot">
              <div className="row-split"><strong>9 Elm Grove, Thornbury</strong><Pill tone="success" dot text="92% match" /></div>
              <span className="muted small">Pre-market · House 4/2/2 · $1.7–1.85m · launches Fri 13/11</span>
              <Button size="sm" className="btn-navy" startIcon={<Glyph name="spark" />} onClick={() => { log({ kind: 'Emails & SMS', title: 'Off-market first look sent', detail: '9 Elm Grove · private inspection offered' }); toast.add({ title: 'First look offered', variant: 'success' }) }}>Off-market first look</Button>
            </div>
            <div className="match">
              <strong>46 Westgarth St, Northcote</strong>
              <span className="muted small with-icon"><Glyph name="lock" /> Appraisal stage — not shareable (no authority)</span>
            </div>
          </Panel>

          <Panel title="Suggested action" icon={<Glyph name="spark" className="text-primary" />} description="SMS to Rachel · 0491 571 266" actions={smsSent ? <Pill tone="success" dot text="Sent" /> : <Pill tone="danger" dot text="AI draft" />}>
            {editingSms ? (
              <Textarea label="Message" value={sms} onChange={(e) => setSms(e.target.value)} hasAutoSize isFullWidth helperText={`${sms.length} / 160`} validationState={sms.length > 160 ? 'error' : undefined} />
            ) : (
              <p className="quote">{sms}</p>
            )}
            <p className="muted small with-icon"><Icon name="check" className="text-success" /> SMS consent: Express (14/09/2026)</p>
            <div className="button-row">
              <Button size="sm" variant="secondary" appearance="outlined" startIcon={<Icon name="edit" />} disabled={smsSent} onClick={() => setEditingSms((e) => !e)}>{editingSms ? 'Done' : 'Edit'}</Button>
              <Button size="sm" className="btn-navy" startIcon={<Glyph name="message" />} disabled={smsSent || sms.length > 160 || !sms.trim()} onClick={() => { setSmsSent(true); setEditingSms(false); log({ kind: 'Emails & SMS', title: 'SMS sent', detail: sms }); toast.add({ title: 'SMS sent to Rachel', variant: 'success' }) }}>Send</Button>
            </div>
          </Panel>
        </div>
      </div>

      <Modal open={noteOpen} onOpenChange={setNoteOpen} title="Log note" footer={<><Button variant="secondary" appearance="outlined" onClick={() => setNoteOpen(false)}>Cancel</Button><Button type="submit" form="note">Save note</Button></>}>
        <form
          id="note"
          className="form-stack"
          onSubmit={(e) => {
            e.preventDefault()
            const f = new FormData(e.currentTarget)
            const text = String(f.get('text') || '').trim()
            if (!text) return
            log({ kind: (f.get('kind') as TimelineKind) || 'Notes', title: 'Note', detail: text })
            setNoteOpen(false)
            setFilter('All')
            toast.add({ title: 'Note logged', variant: 'success' })
          }}
        >
          <Select name="kind" label="Type" defaultValue="Notes" options={[{ value: 'Notes', label: 'Note' }, { value: 'Calls', label: 'Call' }]} />
          <Textarea name="text" label="Note" required />
        </form>
      </Modal>
    </>
  )
}
