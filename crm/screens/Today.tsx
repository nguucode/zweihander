import { useState } from 'react'
import { Button } from '@/components/buttons/Button'
import { ProgressBar } from '@/components/loaders/ProgressBar'
import { Menu } from '@/components/navigation/Menu'
import { useToast } from '@/components/notifications/Toast'
import { Popover } from '@/components/overlays/Popover'
import { Textarea } from '@/components/inputs/Textarea'
import { Icon } from '@/lib/icon'
import { EmptyState } from '@/components/states/EmptyState'
import { Glyph, type GlyphName } from '../icons'
import { actions as allActions, todayEvents, ME } from '../data'
import { PageHeader, Panel, Pill } from '../ui'

const ICON: Record<string, GlyphName | 'warning'> = { warning: 'warning', shield: 'shield', spark: 'spark', phone: 'phone', mail: 'mail' }

export function Today() {
  const toast = useToast()
  const [items, setItems] = useState(allActions)
  const [whyOpen, setWhyOpen] = useState<string[]>(['a4'])
  const [approval, setApproval] = useState<'waiting' | 'approved'>('waiting')
  const [ask, setAsk] = useState('')

  const dismiss = (id: string, title: string, verb: string) => {
    const before = items
    setItems((all) => all.filter((a) => a.id !== id))
    toast.add({ title: `${verb}: ${title}`, action: { label: 'Undo', onClick: () => setItems(before) } })
  }

  return (
    <>
      <PageHeader
        title={`Good morning, ${ME.name.split(' ')[0]}`}
        description={`Wednesday 11 November 2026 · ${items.length} actions · 4 events today`}
        actions={
          <>
            <Popover
              title="Ask AI"
              description="Answers come from your listings, contacts and activity. Sources are shown."
              trigger={<Button variant="secondary" appearance="outlined" startIcon={<Glyph name="spark" />}>Ask AI</Button>}
            >
              <form
                className="form-stack"
                onSubmit={(e) => {
                  e.preventDefault()
                  toast.add({ title: 'AI answer (demo)', description: 'Rachel & Tom: reserve $1.6m sits 7–10% above OFI feedback median. Sources: OFI feedback, call 10/11.' })
                  setAsk('')
                }}
              >
                <Textarea label="Question" value={ask} onChange={(e) => setAsk(e.target.value)} placeholder="Which vendors haven't had a report this week?" />
                <Button type="submit" size="sm">Ask</Button>
              </form>
            </Popover>
            <Button variant="secondary" appearance="outlined" startIcon={<Icon name="plus" />} onClick={() => toast.add({ title: 'Task added', description: 'Due today, assigned to you.', variant: 'success' })}>
              New task
            </Button>
          </>
        }
      />

      <div className="grid grid-2-1">
        <Panel
          title="Morning brief"
          icon={<Glyph name="spark" className="text-primary" />}
          description="Sales and compliance in one list — compliance items cannot be snoozed past their deadline"
          actions={<Pill text="Ranked by deadline & impact" />}
        >
          {items.length === 0 ? (
            <EmptyState title="All clear" description="Nothing left in your brief. New items arrive as deadlines and signals come in." />
          ) : (
            <ul className="rows brief">
              {items.map((a) => {
                const icon = ICON[a.icon]
                const isWhy = whyOpen.includes(a.id)
                return (
                  <li key={a.id} className="brief-item">
                    <span className={`row-icon ${a.locked ? 'tone-danger' : a.icon === 'spark' ? 'tone-primary' : ''}`}>
                      {icon === 'warning' ? <Icon name="warning" /> : <Glyph name={icon} />}
                    </span>
                    <div className="row-main">
                      <div className="title-line">
                        <strong>{a.title}</strong>
                        {a.tags.map((t) => <Pill key={t.text} tone={t.tone} text={t.text} />)}
                      </div>
                      <p className="muted">{a.body}</p>
                      <button type="button" className="why" aria-expanded={isWhy} onClick={() => setWhyOpen((w) => (isWhy ? w.filter((x) => x !== a.id) : [...w, a.id]))}>
                        <Glyph name="spark" /> Why this?
                      </button>
                      {isWhy && (
                        <div className="why-box">
                          <strong>Why this suggestion</strong>
                          <p>{a.why}</p>
                        </div>
                      )}
                    </div>
                    <div className="brief-actions">
                      <Button
                        size="sm"
                        variant={a.isPrimary ? 'primary' : 'secondary'}
                        appearance={a.isPrimary ? 'contained' : 'outlined'}
                        href={a.href}
                        onClick={a.href ? undefined : () => dismiss(a.id, a.title, 'Done')}
                      >
                        {a.cta}
                      </Button>
                      {a.locked ? (
                        <span className="muted small with-icon"><Glyph name="lock" /> No snooze past deadline</span>
                      ) : (
                        <Menu
                          trigger={<Button size="sm" variant="secondary" appearance="ghost" startIcon={<Glyph name="clock" />}>Snooze</Button>}
                          items={['2 hours', 'Tomorrow 8am', 'Next week'].map((when) => ({ label: when, onSelect: () => dismiss(a.id, a.title, `Snoozed until ${when.toLowerCase()}`) }))}
                        />
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </Panel>

        <div className="stack">
          <Panel title="My year" icon={<Glyph name="chart" />} actions={<Pill tone="success" dot text="Ahead of pace" />}>
            <p className="big-figure">$214,700 <span className="muted small">of $560,000 GCI written</span></p>
            <ProgressBar value={38} label="38% done · pace marker 36% (FY elapsed)" size="sm" />
            <dl className="facts facts-3">
              <div><dt>On market</dt><dd><a href="#/listings">2</a></dd></div>
              <div><dt>Enquiries</dt><dd><a href="#/leads">4 new</a></dd></div>
              <div><dt>Appraisals</dt><dd>2 this week</dd></div>
            </dl>
          </Panel>

          <Panel title="Today" icon={<Icon name="calendar" />} actions={<Pill text="4 events" />}>
            <ol className="agenda">
              <li className="now" aria-label="Now 8:12am"><span>8:12am</span></li>
              {todayEvents.map((e) => (
                <li key={e.time}>
                  <span className="muted small">{e.time}</span>
                  <div>
                    <strong>{e.title}</strong>
                    <span className="muted small">{e.detail}</span>
                  </div>
                </li>
              ))}
            </ol>
          </Panel>

          <Panel title="Awaiting approval" icon={<Icon name="notifications" />} actions={approval === 'waiting' ? <Pill tone="warning" text="1" /> : undefined}>
            {approval === 'waiting' ? (
              <div className="approval">
                <strong className="with-icon"><Glyph name="megaphone" /> Buyer alert — 9 Elm Grove</strong>
                <span className="muted small">Off-market first look · scheduled Thu 12/11 7:30am</span>
                <div className="tags"><Pill tone="success" text="214 matched" /><Pill tone="warning" text="38 suppressed (consent)" /></div>
                <div className="button-row">
                  <Button className="btn-navy" startIcon={<Icon name="check" />} onClick={() => { setApproval('approved'); toast.add({ title: 'Buyer alert approved', description: 'Sends Thu 12/11 7:30am to 214 buyers.', variant: 'success' }) }}>Approve</Button>
                  <Button variant="secondary" appearance="outlined" href="#/customers/rachel">Review list</Button>
                </div>
              </div>
            ) : (
              <p className="muted with-icon"><Icon name="success-filled" className="text-success" /> Nothing waiting. Buyer alert scheduled.</p>
            )}
          </Panel>
        </div>
      </div>
    </>
  )
}
