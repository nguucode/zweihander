'use client'

import { useRef, useState, type ComponentProps } from 'react'
import { Icon } from '@/lib/icon'
import { cn } from '@/lib/utils'
import { Avatar } from '../../atomic-elements/Avatar'
import { Button } from '../../buttons/Button'
import { LineChart } from '../../charts/LineChart'
import { Sparkline } from '../../charts/Sparkline'
import { Checkbox } from '../../controls/Checkbox'
import { Card } from '../../data-display/Card'
import { Select } from '../../inputs/Select'
import { ProgressBar } from '../../loaders/ProgressBar'
import { Link } from '../../navigation/Link'
import { Menu } from '../../navigation/Menu'
import { ActionPanel } from '../../patterns/application-ui/ActionPanel'
import { CardHeading } from '../../patterns/application-ui/CardHeading'
import { NavSidebar } from '../../patterns/application-ui/NavSidebar'
import { Stats, type Stat, type StatChange } from '../../patterns/application-ui/Stats'
import { TopBar } from '../../patterns/application-ui/TopBar'
import { EmptyState } from '../../states/EmptyState'
import { ActivityTimeline, money, type ActivityEvent } from '../object-management/ProjectActivity'
import { sampleProjects } from '../object-management/projects-data'
import { AppShell } from './AppShell'
import { PERIODS, sampleDays, sampleSetup, sampleTasks, sampleToday, type Period, type SetupStep, type Task } from './home-data'
import styles from './Home.module.css'

/** Who is signed in, in this sample. */
const ME = { name: 'Ines Okafor', initials: 'IO' }
const longDay = new Intl.DateTimeFormat('en', { weekday: 'long', day: 'numeric', month: 'long' })
const shortDay = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short' })
const count = new Intl.NumberFormat('en')

const greeting = (at: Date) => (at.getHours() < 12 ? 'Good morning' : at.getHours() < 18 ? 'Good afternoon' : 'Good evening')
const startOfDay = (at: Date) => new Date(at.getFullYear(), at.getMonth(), at.getDate()).getTime()

/** The change from one period's total to the one before, as Stats shows it; none when there is nothing to compare with. */
function change(now: number, before: number): StatChange | undefined {
  if (!before) return undefined
  const ratio = now / before - 1
  return { value: `${Math.abs(Math.round(ratio * 100))}%`, direction: ratio < 0 ? 'down' : 'up' }
}

/** The newest events across every project, each naming its project. */
const recentActivity: ActivityEvent[] = sampleProjects
  .flatMap((p) => p.activity.map((event) => ({ ...event, project: p.name })))
  .sort((a, b) => b.at.getTime() - a.at.getTime())
  .slice(0, 6)

export interface HomeProps extends Omit<ComponentProps<'div'>, 'children'> {
  /** Today, for the greeting and what is due. Defaults to the sample's day so the page holds still; pass `new Date()` in an app. */
  today?: Date
  /** The period the figures and the chart cover first. */
  defaultPeriod?: Period
  /** The signed-in user's tasks when the page opens; ticking them is local. Empty shows "Nothing due". */
  defaultTasks?: Task[]
  /** The setup guide's steps when the page opens. Hidden when empty or when every step is done. */
  defaultSetupSteps?: SetupStep[]
  /** Called when a task is ticked or unticked. Replace with a call to your API. */
  onTaskChange?: (id: string, isDone: boolean) => void
  /** Called with the step the setup guide's button does. Open your flow for it there. */
  onSetupStep?: (id: string) => void
}

/**
 * The home page: a greeting with a period to look at, the key figures for
 * it, a chart and the user's tasks in a grid of cards, recent activity
 * across projects in the aside, and a setup guide until the workspace is
 * set up. The state is local; swap the samples for your data layer when
 * you copy the page.
 */
export function Home({
  today = sampleToday,
  defaultPeriod = '30d',
  defaultTasks = sampleTasks,
  defaultSetupSteps = sampleSetup,
  onTaskChange,
  onSetupStep,
  ...props
}: HomeProps) {
  const [period, setPeriod] = useState(defaultPeriod)
  const [tasks, setTasks] = useState(defaultTasks)
  const [setup, setSetup] = useState(defaultSetupSteps)
  const titleRef = useRef<HTMLHeadingElement>(null)

  const { label: periodLabel, days } = PERIODS.find((p) => p.value === period) ?? PERIODS[1]
  const current = sampleDays.slice(-days)
  const before = sampleDays.slice(-2 * days, -days)
  const sum = (rows: typeof current, key: 'hours' | 'invoiced') => rows.reduce((total, row) => total + row[key], 0)
  const hours = { now: sum(current, 'hours'), before: sum(before, 'hours') }
  const invoiced = { now: sum(current, 'invoiced'), before: sum(before, 'invoiced') }
  const active = sampleProjects.filter((p) => p.status === 'Active' && !p.isArchived)
  const atRisk = active.filter((p) => p.health === 'risk' || p.health === 'potential-risk').length

  const stats: Stat[] = [
    {
      label: 'Hours logged',
      value: count.format(hours.now),
      previous: `from ${count.format(hours.before)}`,
      change: change(hours.now, hours.before),
      chart: <Sparkline data={current.map((d) => d.hours)} />,
    },
    {
      label: 'Invoiced',
      value: money.format(invoiced.now),
      previous: `from ${money.format(invoiced.before)}`,
      change: change(invoiced.now, invoiced.before),
      chart: <Sparkline data={current.map((d) => d.invoiced)} color="chart-2" />,
    },
    // A count as it stands now: the period does not apply to it.
    { label: 'Active projects', value: active.length, previous: `${atRisk} at risk`, href: '#projects', linkLabel: 'View projects' },
  ]

  const nextStep = setup.find((s) => !s.isDone)
  const doneSteps = setup.filter((s) => s.isDone).length
  const openTasks = tasks.filter((t) => !t.isDone).length
  const todayStart = startOfDay(today)

  const account = (
    <div className={styles.account}>
      <Menu
        align="start"
        trigger={
          <Button variant="secondary" appearance="ghost" startIcon={<Avatar initials={ME.initials} size="sm" />}>
            {ME.name}
          </Button>
        }
        items={[{ label: 'Your profile' }, { label: 'Settings' }, { type: 'separator' }, { label: 'Sign out' }]}
      />
    </div>
  )

  return (
    <AppShell
      brand={<strong className={styles.brand}>Zweihänder</strong>}
      sidebar={
        <NavSidebar
          items={[
            { label: 'Dashboard', href: '#dashboard', icon: <Icon name="star" /> },
            { label: 'Projects', href: '#projects', icon: <Icon name="file" /> },
            { label: 'Team', href: '#team', icon: <Icon name="user" /> },
            { label: 'Calendar', href: '#calendar', icon: <Icon name="calendar" /> },
          ]}
          currentHref="#dashboard"
          className={styles.sidebar}
          footer={account}
        />
      }
      header={<TopBar end={account} />}
      aside={
        // The aside is the landmark named "Recent activity"; the timeline inside it takes no name of its own.
        <div className={styles.asideSection}>
          <h2 className={styles.sectionTitle}>Recent activity</h2>
          <ActivityTimeline events={recentActivity} />
        </div>
      }
      asideLabel="Recent activity"
      {...props}
    >
      <div className={styles.page}>
        <div className={styles.header}>
          <div className={styles.heading}>
            {/* Focusable from code only: it takes focus when the setup guide it sat above goes away. */}
            <h1 ref={titleRef} tabIndex={-1} className={styles.title}>
              {greeting(today)}, {ME.name.split(' ')[0]}
            </h1>
            <p className={styles.description}>
              <time dateTime={today.toLocaleDateString('en-CA') /* YYYY-MM-DD, in local time */}>{longDay.format(today)}</time>
            </p>
          </div>
          <Select
            label="Period"
            options={PERIODS.map(({ value, label }) => ({ value, label }))}
            value={period}
            onValueChange={(next) => next && setPeriod(next as Period)}
          />
        </div>

        {nextStep && (
          <ActionPanel
            title="Finish setting up"
            description={
              <div className={styles.setup}>
                <ProgressBar value={doneSteps} max={setup.length} label={`${doneSteps} of ${setup.length} steps done`} />
                <ol className={styles.steps}>
                  {setup.map((step) => (
                    <li key={step.id} className={cn(styles.step, step.isDone && styles.stepDone)}>
                      <Icon name={step.isDone ? 'success-filled' : 'minus'} aria-hidden="true" />
                      {step.label}
                      {step.isDone && <span className={styles.srOnly}> (done)</span>}
                    </li>
                  ))}
                </ol>
              </div>
            }
            actionPlacement="end"
            action={
              <Button
                onClick={() => {
                  // The sample marks the step done; an app opens the flow for it and marks it done when that finishes.
                  const next = setup.map((s) => (s.id === nextStep.id ? { ...s, isDone: true } : s))
                  setSetup(next)
                  onSetupStep?.(nextStep.id)
                  // The guide goes once the last step is done: focus moves to the page's heading, not to the body.
                  if (next.every((s) => s.isDone)) requestAnimationFrame(() => titleRef.current?.focus())
                }}
              >
                {nextStep.action}
              </Button>
            }
          />
        )}

        <Stats stats={stats} aria-label={`Key figures, ${periodLabel.toLowerCase()}`} />

        <div className={styles.grid}>
          <Card appearance="outline" className={styles.card}>
            <CardHeading
              title="Hours logged"
              description={periodLabel}
              actions={
                <Link href="#timesheets" size="sm" underline="hover">
                  Timesheets
                </Link>
              }
            />
            <LineChart title="Hours per day" data={current} x="date" series={[{ key: 'hours', label: 'Hours' }]} height={220} />
          </Card>

          <Card appearance="outline" className={styles.card}>
            <CardHeading title="Your tasks" description={openTasks === 1 ? '1 open' : `${openTasks} open`} />
            {tasks.length ? (
              <ul className={styles.tasks} aria-label="Your tasks">
                {tasks.map((task) => {
                  const due = startOfDay(task.due)
                  const isOverdue = !task.isDone && due < todayStart
                  const when = task.isDone ? 'Done' : isOverdue ? 'Overdue' : due === todayStart ? 'Due today' : `Due ${shortDay.format(task.due)}`
                  return (
                    <li key={task.id} className={cn(task.isDone && styles.taskDone)}>
                      <Checkbox
                        label={task.title}
                        helperText={
                          <>
                            {task.project} ·{' '}
                            <span className={cn(isOverdue && styles.overdue)}>{when}</span>
                          </>
                        }
                        checked={task.isDone}
                        onCheckedChange={(isDone) => {
                          setTasks((all) => all.map((t) => (t.id === task.id ? { ...t, isDone } : t)))
                          onTaskChange?.(task.id, isDone)
                        }}
                      />
                    </li>
                  )
                })}
              </ul>
            ) : (
              <EmptyState size="sm" headingLevel={3} title="Nothing due" description="Tasks assigned to you show here." />
            )}
          </Card>
        </div>
      </div>
    </AppShell>
  )
}
