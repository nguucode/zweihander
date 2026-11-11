import { useState } from 'react'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Button } from '@/components/buttons/Button'
import { ToggleGroup } from '@/components/buttons/ButtonGroup'
import { ToggleButton } from '@/components/buttons/ToggleButton'
import { BarChart } from '@/components/charts/BarChart'
import { Table } from '@/components/data-display/Table'
import { ProgressBar } from '@/components/loaders/ProgressBar'
import { Stats } from '@/components/patterns/application-ui/Stats'
import { useToast } from '@/components/notifications/Toast'
import { Icon } from '@/lib/icon'
import { Glyph } from '../icons'
import { agents, compliance, fmt, forecast, type Agent } from '../data'
import { PageHeader, Panel, Pill } from '../ui'

const SCOPES = ['Agent', 'Team', 'Office', 'Group'] as const
const PACE = 0.36

/** Each scope is a slice of the office's figures; the demo scales them so the toggle visibly does something. */
const SCALE: Record<string, number> = { Agent: 0.35, Team: 0.62, Office: 1, Group: 2.4 }

export function Overview() {
  const toast = useToast()
  const [scope, setScope] = useState<string>('Office')
  const k = SCALE[scope]
  const written = Math.round(612400 * k)
  const totalTarget = agents.reduce((s, a) => s + a.target, 0)
  const office: Agent = {
    initials: '',
    name: 'Office',
    appraisals: agents.reduce((s, a) => s + a.appraisals, 0),
    won: agents.reduce((s, a) => s + a.won, 0),
    gci: agents.reduce((s, a) => s + a.gci, 0),
    target: totalTarget,
    dom: 34,
  }

  return (
    <>
      <PageHeader
        title="Office overview"
        description="FY27 to date · 01/07 – 11/11/2026 · 36% of financial year elapsed"
        actions={
          <>
            <ToggleGroup className="seg" value={[scope]} onValueChange={(v) => v[0] && setScope(v[0])} aria-label="Scope">
              {SCOPES.map((s) => (
                <ToggleButton key={s} value={s} variant="secondary" appearance="ghost" size="sm">{s}</ToggleButton>
              ))}
            </ToggleGroup>
            <Button variant="secondary" appearance="outlined" startIcon={<Icon name="calendar" />} onClick={() => toast.add({ title: 'Report scheduled', description: 'Every Monday 7:00am to the office principal.', variant: 'success' })}>
              Schedule report
            </Button>
            <Button variant="secondary" appearance="outlined" startIcon={<Glyph name="download" />} onClick={() => toast.add({ title: 'Export started', description: 'office-overview-FY27.csv' })}>
              Export
            </Button>
          </>
        }
      />

      <Stats
        aria-label="Key figures"
        className="kpis"
        stats={[
          { label: 'GCI written', value: fmt(written), previous: <span className="text-warning">33% · pace 36% — behind</span> },
          { label: 'GCI settled', value: fmt(Math.round(468900 * k)), previous: `FYTD · ${Math.round(24 * k)} sales` },
          { label: 'Weighted pipeline', value: fmt(Math.round(176272 * k)), previous: `Gross ${fmt(Math.round(301234 * k))} open` },
          { label: 'Appraisal → listing', value: '34.2%', previous: `${Math.round(13 * k)} of ${Math.round(38 * k)} appraisals` },
          { label: 'Auction clearance', value: '58.3%', previous: <span className="text-success">Melbourne 50.2% — ahead</span> },
          { label: 'Median DOM', value: '34 days', previous: <span className="text-success">39 national — faster</span> },
        ]}
      />

      <div className="grid grid-2-1">
        <Panel
          title="Weighted GCI forecast"
          icon={<Glyph name="chart" />}
          description="Expected commission × probability, by expected settlement month"
          actions={<Pill dot text={`Open pipeline ${fmt(Math.round(176272 * k))}`} />}
        >
          <BarChart
            title="Weighted GCI by month"
            x="month"
            height={300}
            format={(v) => `$${Math.round(v / 1000)}k`}
            data={forecast.map((r) => ({ ...r, underContract: r.underContract * k, onMarket: r.onMarket * k, preMarket: r.preMarket * k, appraisal: r.appraisal * k }))}
            series={[
              { key: 'underContract', label: 'Under contract', color: 'chart-2' },
              { key: 'onMarket', label: 'On market', color: 'chart-1' },
              { key: 'preMarket', label: 'Pre-market', color: 'chart-3' },
              { key: 'appraisal', label: 'Appraisal', color: 'neutral' },
            ]}
          />
          <p className="muted small">Pipeline covers Nov–Feb only. To hit pace the office needs ~$120k/month in new weighted listings from Mar.</p>
        </Panel>

        <Panel title="Compliance" icon={<Glyph name="shield" />} description="Deadlines from VIC price rules, AML/CTF and Spam Act" actions={<Pill tone="warning" text={`${compliance.length} open`} />}>
          <ul className="rows">
            {compliance.map((c) => (
              <li key={c.id}>
                <a className="row-link" href={c.href}>
                  <span className={`row-icon tone-${c.severity}`}>
                    {c.kind === 'cdd' ? <Glyph name="shield" /> : c.kind === 'unsubscribe' ? <Glyph name="mail" /> : c.kind === 'disclosure' ? <Icon name="calendar" /> : <Icon name="warning" />}
                  </span>
                  <span className="row-main">
                    <strong>{c.title}</strong>
                    <span className="muted small">{c.detail}</span>
                  </span>
                  <Pill tone={c.severity} text={c.due} />
                </a>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="grid grid-2-1-1">
        <Panel title="Agent performance" icon={<Glyph name="users" />} description="Select an agent to see their day">
          <Table<Agent>
            caption="Agent performance"
            rows={agents}
            getRowId={(a) => a.initials}
            defaultSort={{ key: 'gci', direction: 'descending' }}
            columns={[
              { key: 'name', header: 'Agent', isRowHeader: true, sortable: true, sortValue: (a) => a.name, cell: (a) => (
                <a href="#/home" className="with-icon"><Avatar size="sm" initials={a.initials} />{a.name}</a>
              ), footer: 'Office' },
              { key: 'appraisals', header: 'Appr.', align: 'end', sortable: true, sortValue: (a) => a.appraisals, cell: (a) => a.appraisals, footer: office.appraisals },
              { key: 'won', header: 'Won', align: 'end', sortable: true, sortValue: (a) => a.won, cell: (a) => a.won, footer: office.won },
              { key: 'conv', header: 'Conv.', align: 'end', sortable: true, sortValue: (a) => a.won / a.appraisals, cell: (a) => `${Math.round((a.won / a.appraisals) * 100)}%`, footer: `${((office.won / office.appraisals) * 100).toFixed(1)}%` },
              { key: 'gci', header: 'GCI written', align: 'end', sortable: true, sortValue: (a) => a.gci, cell: (a) => fmt(a.gci), footer: fmt(office.gci) },
              { key: 'target', header: '% of FY target', width: '11rem', sortable: true, sortValue: (a) => a.gci / a.target, cell: (a) => <TargetBar value={a.gci / a.target} />, footer: <TargetBar value={office.gci / office.target} /> },
              { key: 'dom', header: 'DOM', align: 'end', sortable: true, sortValue: (a) => a.dom, cell: (a) => a.dom, footer: office.dom },
            ]}
          />
        </Panel>

        <Panel title="Rentals" icon={<Glyph name="key" />} description="186 managements · Hannah O'Rourke" actions={<Button size="sm" variant="secondary" appearance="outlined" href="#/rentals">Open Rentals</Button>}>
          <dl className="facts">
            <div><dt>Rent roll</dt><dd>$5.42m p.a.</dd></div>
            <div><dt>Arrears</dt><dd>1.6% · 3 &gt; 7 days</dd></div>
            <div><dt>Vacancy</dt><dd>2.2% · national 2.3%</dd></div>
            <div><dt>Gains / losses</dt><dd>+11 / −4 FYTD</dd></div>
            <div><dt>Routine inspections</dt><dd className="text-warning">2 overdue</dd></div>
            <div><dt>Rental → sale signals</dt><dd><a href="#/leads?lead=l11">1 · Kevin Strand</a></dd></div>
          </dl>
        </Panel>

        <Panel title="Market context" icon={<Glyph name="chart" />} actions={<Pill text="Cotality HVI · 31/10/2026" />}>
          <dl className="facts facts-rows">
            <div><dt>Melbourne dwellings</dt><dd>−0.8% m/m · −7.6% y/y</dd></div>
            <div><dt>Melbourne house median</dt><dd>$906,067</dd></div>
            <div><dt>Clearance · Melbourne</dt><dd>50.2% (w/e 25/10)</dd></div>
            <div><dt>DOM · discount (national)</dt><dd>39 days · 4.7%</dd></div>
          </dl>
        </Panel>
      </div>
    </>
  )
}

function TargetBar({ value }: { value: number }) {
  const pct = Math.round(value * 100)
  return (
    <span className="target">
      <ProgressBar value={pct} size="sm" aria-label={`${pct}% of FY target`} variant={value >= PACE ? 'primary' : value >= PACE * 0.8 ? 'secondary' : 'destructive'} />
      <span>{pct}%</span>
    </span>
  )
}
