import { useState } from 'react'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Button } from '@/components/buttons/Button'
import { BarChart } from '@/components/charts/BarChart'
import { Rating } from '@/components/controls/Rating'
import { Switch } from '@/components/controls/Switch'
import { TextInput } from '@/components/inputs/TextInput'
import { Select } from '@/components/inputs/Select'
import { useToast } from '@/components/notifications/Toast'
import { Drawer } from '@/components/overlays/Drawer'
import { Modal } from '@/components/overlays/Modal'
import { Icon } from '@/lib/icon'
import { Glyph } from '../icons'
import { attendees as initial, PRICE_BUCKETS, type Attendee } from '../data'
import { Pill } from '../ui'

const BUCKET_TAG: Record<string, string> = { '<1.40': 'Below $1.40m', '1.40–1.45': '$1.40–1.45m', '1.45–1.50': '$1.45–1.50m', '1.50–1.55': '$1.50–1.55m', '>1.55': 'Above $1.55m' }

/** S5 / S5b: the agent's phone at the open home. Its own page, framed like a phone on wide screens. */
export function OpenHome() {
  const toast = useToast()
  const [people, setPeople] = useState(initial)
  const [ended, setEnded] = useState(false)
  const [offline, setOffline] = useState(true)
  const [queued, setQueued] = useState(3)
  const [checkIn, setCheckIn] = useState(false)
  const [qr, setQr] = useState(false)
  const [sent, setSent] = useState(false)

  const known = people.filter((p) => p.status.startsWith('Known')).length
  const feedback = PRICE_BUCKETS.map((b) => ({ bucket: b, groups: people.filter((p) => p.tags.some((t) => t.text === BUCKET_TAG[b])).length }))
  const priced = feedback.reduce((s, f) => s + f.groups, 0)
  const doNotMarket = people.filter((p) => p.tags.some((t) => t.text === 'Do not market'))
  const noSms = people.filter((p) => p.status.includes('SMS ×') || p.name === 'Sophie Delacroix')
  const sms = people.filter((p) => !doNotMarket.includes(p) && !noSms.includes(p))

  return (
    <div className="phone-stage">
      <a href="#/home" className="phone-back muted small with-icon"><Icon name="chevron-left" /> Back to desktop</a>
      <div className="phone" aria-label="Open home app (mobile)">
        <div className="phone-status"><span>5:42</span><span>4G 100%</span></div>
        <header className="phone-bar">
          <Button variant="secondary" appearance="ghost" isIconOnly aria-label="Back" href="#/listings/14-ruby/price"><Glyph name="arrowLeft" /></Button>
          <h1>Open home</h1>
          {!ended && <Button size="sm" variant="secondary" appearance="outlined" startIcon={<Glyph name="qr" />} onClick={() => setQr(true)}>Show QR</Button>}
        </header>

        <div className="phone-body">
          {offline && !ended && (
            <button
              type="button"
              className="offline"
              onClick={() => {
                setOffline(false)
                toast.add({ title: `${queued} check-ins synced`, variant: 'success' })
                setQueued(0)
              }}
            >
              <Glyph name="wifiOff" /> No connection — {queued} check-ins queued, will sync <span className="small">(tap to reconnect)</span>
            </button>
          )}

          <section className="phone-section">
            {ended ? <Pill tone="success" dot text="Open home ended · 5:30–6:02pm" /> : null}
            <h2>14 Ruby St, Northcote</h2>
            {!ended && <p className="muted">Twilight open home · 5:30–6:00pm</p>}
            {!ended && <Pill tone="danger" dot text="Live · 12 min" />}
          </section>

          <dl className="phone-kpis">
            <div><dt>groups</dt><dd>{people.length}</dd></div>
            {ended ? (
              <>
                <div><dt>price feedback</dt><dd>{priced}</dd></div>
                <div><dt>median</dt><dd>$1.45–1.50m</dd></div>
              </>
            ) : (
              <>
                <div><dt>known</dt><dd>{known}</dd></div>
                <div><dt>new</dt><dd>{people.length - known}</dd></div>
              </>
            )}
          </dl>

          {!ended ? (
            <section className="phone-section">
              <div className="row-split"><h3>Attendees</h3><span className="muted small">Latest first</span></div>
              <ul className="attendees">
                {people.map((p) => (
                  <li key={p.id}>
                    <Avatar initials={p.initials} size="sm" />
                    <div className="row-main">
                      <strong>{p.name}</strong>
                      <span className="muted small">{p.status}</span>
                      <div className="tags">{p.tags.map((t) => <Pill key={t.text} tone={t.tone} dot={t.tone !== 'neutral'} text={t.text} />)}</div>
                    </div>
                    <div className="attendee-end">
                      <Rating size="sm" value={p.rating} aria-label={`Interest, ${p.name}`} onValueChange={(v) => setPeople((all) => all.map((x) => (x.id === p.id ? { ...x, rating: v } : x)))} />
                      {p.duplicate && (
                        <Button size="sm" variant="secondary" appearance="outlined" onClick={() => {
                          setPeople((all) => all.map((x) => (x.id === p.id ? { ...x, duplicate: false, status: 'Known · merged with Arjun Sethi', tags: x.tags.filter((t) => t.text !== 'Duplicate?') } : x)))
                          toast.add({ title: 'Merged with existing contact', description: 'Arjun Sethi · enquiry 14 Ruby St, today 7:48am.', variant: 'success' })
                        }}>Merge</Button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <>
              <section className="phone-section">
                <BarChart title="Price feedback (tonight)" x="bucket" height={180} data={feedback} series={[{ key: 'groups', label: 'Groups', color: 'chart-2' }]} />
                <p className="muted small with-icon"><span className="swatch" /> Advertised range $1.45–1.55m</p>
              </section>
              <section className="phone-section">
                <h3>Follow-ups</h3>
                <ul className="rows">
                  <li className="with-icon align-start"><Glyph name="message" /><span><strong>SMS · {sms.length}</strong><br /><span className="muted small">{sms.map((p) => p.name).join(' · ')}</span></span></li>
                  <li className="with-icon align-start"><Glyph name="mail" /><span><strong>Email · {noSms.length}</strong><br /><span className="muted small">{noSms.map((p) => p.name).join(', ')} — no SMS consent</span></span></li>
                  <li className="with-icon align-start text-danger"><Icon name="warning" /><span><strong>Excluded · {doNotMarket.length}</strong><br /><span className="small">{doNotMarket.map((p) => p.name).join(', ')} — do not market</span></span></li>
                </ul>
              </section>
            </>
          )}
        </div>

        <footer className="phone-footer">
          {!ended ? (
            <>
              <Button variant="secondary" appearance="outlined" isFullWidth startIcon={<Icon name="plus" />} onClick={() => setCheckIn(true)}>Check in</Button>
              <Button isFullWidth onClick={() => setEnded(true)}>End open home</Button>
            </>
          ) : (
            <div className="stack">
              <Button isFullWidth startIcon={<Glyph name="message" />} disabled={sent} onClick={() => { setSent(true); toast.add({ title: 'Follow-ups sent', description: `${sms.length} SMS · ${noSms.length} email · ${doNotMarket.length} excluded`, variant: 'success' }) }}>{sent ? 'Follow-ups sent' : 'Send follow-ups'}</Button>
              <Button variant="secondary" appearance="outlined" isFullWidth startIcon={<Icon name="file" />} href="#/vendor">Add to vendor report</Button>
            </div>
          )}
        </footer>
      </div>

      <Drawer open={qr} onOpenChange={setQr} side="bottom" title="Self check-in" description="Buyers scan to check in on their own phone. Consent is asked on the form.">
        <div className="qr" aria-label="QR code (sample)"><Glyph name="qr" /></div>
      </Drawer>

      <Modal open={checkIn} onOpenChange={setCheckIn} title="Check in" footer={<><Button variant="secondary" appearance="outlined" onClick={() => setCheckIn(false)}>Cancel</Button><Button type="submit" form="check-in">Check in</Button></>}>
        <form
          id="check-in"
          className="form-stack"
          onSubmit={(e) => {
            e.preventDefault()
            const f = new FormData(e.currentTarget)
            const name = String(f.get('name') || '').trim()
            if (!name) return
            const bucket = String(f.get('bucket'))
            const consent = f.get('consent') === 'on'
            const person: Attendee = {
              id: crypto.randomUUID(),
              initials: name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase(),
              name,
              status: `New · 5:4${people.length % 10}pm${consent ? '' : ' · SMS ×'}`,
              tags: bucket ? [{ text: BUCKET_TAG[bucket], tone: 'neutral' }] : [{ text: 'No comment', tone: 'neutral' }],
              rating: 3,
            }
            setPeople((all) => [person, ...all])
            if (offline) setQueued((q) => q + 1)
            setCheckIn(false)
            toast.add({ title: `${name} checked in`, description: offline ? 'Queued — will sync.' : undefined, variant: 'success' })
          }}
        >
          <TextInput name="name" label="Name" required isFullWidth autoComplete="off" />
          <TextInput name="phone" label="Mobile" type="tel" isFullWidth />
          <Select name="bucket" label="Price feedback" defaultValue="" options={[{ value: '', label: 'No comment' }, ...PRICE_BUCKETS.map((b) => ({ value: b, label: BUCKET_TAG[b] }))]} />
          <Switch name="consent" label="OK to SMS (express consent)" />
        </form>
      </Modal>
    </div>
  )
}
