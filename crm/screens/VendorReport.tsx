import { useState } from 'react'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Button } from '@/components/buttons/Button'
import { BarChart } from '@/components/charts/BarChart'
import { Textarea } from '@/components/inputs/Textarea'
import { ProgressBar } from '@/components/loaders/ProgressBar'
import { useToast } from '@/components/notifications/Toast'
import { Stats } from '@/components/patterns/application-ui/Stats'
import { Icon } from '@/lib/icon'
import { Glyph } from '../icons'
import { AGENCY, feedback, ME, sources, weekly } from '../data'
import { PageHeader, Pill } from '../ui'

const UNVERIFIED = 'in line with the wider Melbourne market'
const DRAFT = `Buyer activity is steady but softening, ${UNVERIFIED}. 48 groups have inspected and 9 have requested the contract. 33 of the 41 buyers who gave price feedback placed the home at or below $1.50m. We received one written offer of $1,525,000 on 9 Nov, which was declined on your instruction. Your indicated reserve of $1,600,000 sits above the advertised range, so we'll update the Property Price Statement before the reserve is published by Saturday 14 Nov. As discussed this morning, let's lock in the reserve on Thursday.`

export function VendorReport() {
  const toast = useToast()
  const [text, setText] = useState(DRAFT)
  const [editing, setEditing] = useState(false)
  const [asVendor, setAsVendor] = useState(false)
  const [status, setStatus] = useState<'draft' | 'published'>('draft')
  const flagged = text.includes(UNVERIFIED)
  const [before, after] = flagged ? text.split(UNVERIFIED) : [text, '']

  return (
    <>
      <PageHeader
        breadcrumb={<><a href="#/vendor">Vendor Hub</a> / <a href="#/listings/14-ruby/price">14 Ruby Street</a> / Week 3</>}
        title={<span className="with-icon">Vendor report · Week 3 {status === 'draft' ? <Pill tone="warning" dot text="Draft — awaiting Liam's approval" /> : <Pill tone="success" dot text="Published to vendor portal" />}</span>}
        description={<span className="with-icon"><Glyph name="clock" /> Generated Wed 11/11/2026 7:10pm · Last viewed by Rachel 11/11 8:02pm (figures only)</span>}
        actions={
          <>
            <Button variant="secondary" appearance="outlined" startIcon={<Glyph name="eye" />} onClick={() => setAsVendor((v) => !v)} aria-pressed={asVendor}>
              {asVendor ? 'Back to editing' : 'Preview as vendor'}
            </Button>
            <Button variant="secondary" appearance="ghost" startIcon={<Glyph name="spark" />} disabled={status === 'published'} onClick={() => { setText(DRAFT); setEditing(false); toast.add({ title: 'Commentary regenerated', description: 'From OFI feedback, portal stats and the offers log.' }) }}>
              Regenerate
            </Button>
            <Button
              startIcon={<Icon name="check" />}
              disabled={status === 'published'}
              onClick={() => {
                if (flagged) {
                  toast.add({ title: "Can't publish yet", description: 'One claim in the commentary has no source. Edit it or add a source.', variant: 'warning' })
                  return
                }
                setStatus('published')
                setEditing(false)
                toast.add({ title: 'Report published', description: 'Rachel & Tom Ashdown notified by email.', variant: 'success' })
              }}
            >
              {status === 'published' ? 'Published' : 'Approve & publish'}
            </Button>
          </>
        }
      />

      <article className="report">
        <header className="report-band">
          <span className="with-icon"><Avatar initials="K&V" variant="solid" color="orange" /> <strong>{AGENCY}</strong></span>
          <span className="report-agent"><span><strong>{ME.name}</strong><br /><span className="small">{ME.phone}</span></span><Avatar initials={ME.initials} /></span>
        </header>

        <div className="report-body">
          <div>
            <h2 className="report-title">14 Ruby Street, Northcote</h2>
            <p className="muted small">Week 3 report · 05/11 – 11/11/2026 · Auction Sat 21/11 11:00am</p>
          </div>

          <Stats
            className="kpis kpis-surface"
            aria-label="Campaign figures"
            stats={[
              { label: 'Days on market', value: '20', previous: 'Days at current price 20' },
              { label: 'Portal views', value: '4,698', previous: '+1,148 this week' },
              { label: 'Enquiries', value: '41', previous: '+9 this week' },
              { label: 'Inspections', value: '48 groups', previous: '+16 this week' },
              { label: 'Contracts', value: '9', previous: 'requested' },
              { label: 'Bidders', value: '3', previous: 'pre-registered' },
            ]}
          />

          <section className="commentary">
            <div className="row-split">
              <h3 className="with-icon"><Glyph name="spark" className="text-primary" /> Agent's commentary {!asVendor && <Pill tone="danger" dot text="AI draft" />}</h3>
              {!asVendor && status === 'draft' && (
                <Button size="sm" variant="secondary" appearance="outlined" startIcon={<Icon name="edit" />} onClick={() => setEditing((e) => !e)}>
                  {editing ? 'Done' : 'Edit commentary'}
                </Button>
              )}
            </div>
            {editing ? (
              <Textarea label="Commentary" value={text} onChange={(e) => setText(e.target.value)} hasAutoSize isFullWidth />
            ) : (
              <p>
                {before}
                {flagged && <mark className={asVendor ? 'plain' : 'unverified'}>{UNVERIFIED}</mark>}
                {after}
              </p>
            )}
            {!asVendor && flagged && (
              <div className="callout callout-warning callout-row">
                <Icon name="warning" />
                <p>Unverified: "{UNVERIFIED}" is not backed by the listed sources. Add a market source or remove before publishing.</p>
                <Button size="sm" variant="secondary" appearance="outlined" onClick={() => setText((t) => t.replace(`, ${UNVERIFIED}`, ''))}>Remove claim</Button>
              </div>
            )}
            {!asVendor && <div className="tags"><span className="muted small">Sources</span><Pill text="OFI feedback (41)" /><Pill text="REA & Domain stats" /><Pill text="Offers log" /></div>}
          </section>

          <div className="grid grid-1-1-1 report-charts">
            <section>
              <BarChart title="Views & enquiries by week (enquiries ×100)" x="week" layout="grouped" height={220} data={weekly.map((w) => ({ ...w, enquiriesScaled: w.enquiries * 100 }))} series={[{ key: 'views', label: 'Views', color: 'chart-2' }, { key: 'enquiriesScaled', label: 'Enquiries ×100', color: 'chart-1' }]} />
            </section>
            <section>
              <BarChart title="Price feedback (41 of 48 groups)" x="bucket" height={240} data={feedback} series={[{ key: 'groups', label: 'Groups', color: 'chart-2' }]} />
              <p className="muted small with-icon"><span className="swatch" /> Advertised range $1.45–1.55m</p>
            </section>
            <section>
              <h3 className="with-icon"><Glyph name="megaphone" /> Where enquiries came from</h3>
              <ul className="sources">
                {sources.map((s) => (
                  <li key={s.label}>
                    <ProgressBar size="sm" value={s.share} label={s.label} showValueLabel variant="secondary" />
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="grid grid-1-1 report-foot">
            <section>
              <h3 className="with-icon"><Icon name="file" /> Offers</h3>
              <div className="row-split"><span><strong>Buyer A</strong> $1,525,000 <span className="muted small">09/11</span></span><Pill tone="danger" dot text="Declined" /></div>
              <p className="muted small">Buyer identities are never shown in vendor reports.</p>
            </section>
            <section>
              <h3 className="with-icon"><Icon name="calendar" /> Coming up</h3>
              <ul className="rows">
                <li className="row-split"><strong>Sat 14/11 11:00am</strong><span className="muted">Open home</span></li>
                <li className="row-split"><strong>Sat 21/11 10:30am</strong><span className="muted">Final inspection</span></li>
                <li className="row-split"><strong>Sat 21/11 11:00am</strong><span className="muted">Auction · on site</span></li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    </>
  )
}
