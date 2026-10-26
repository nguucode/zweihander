/* Sample data for the Home template. Every name is made up, and the numbers
   are seeded so tests and screenshots see the same page every run. Replace
   it with your own source; the page only needs the shapes below. */

// A bare date would parse as UTC midnight, the day before west of Greenwich.
const d = (iso: string) => new Date(`${iso}T00:00`)

/** "Today" in the sample, so the greeting, due dates and periods hold still. Pass `new Date()` in an app. */
export const sampleToday = new Date('2026-10-01T09:00')

export type Period = '7d' | '30d' | '90d'
export const PERIODS: { value: Period; label: string; days: number }[] = [
  { value: '7d', label: 'Last 7 days', days: 7 },
  { value: '30d', label: 'Last 30 days', days: 30 },
  { value: '90d', label: 'Last 90 days', days: 90 },
]

// A type, not an interface, so a row passes as a chart's data row.
export type DayTotals = {
  date: Date
  /** Hours the team logged that day. */
  hours: number
  /** Invoiced that day, in US dollars. */
  invoiced: number
}

/** One row a day for the 180 days up to the sample's today: twice the longest period, so each has a previous one to compare with. */
export const sampleDays: DayTotals[] = (() => {
  let seed = 32
  const r = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646
  return Array.from({ length: 180 }, (_, i) => {
    const date = new Date(sampleToday.getFullYear(), sampleToday.getMonth(), sampleToday.getDate() - 179 + i)
    const isWeekend = date.getDay() === 0 || date.getDay() === 6
    // A slow climb, so the latest period reads as growth.
    const trend = 1 + i / 400
    return {
      date,
      hours: isWeekend ? Math.round(r() * 6) : Math.round((48 + r() * 24) * trend),
      invoiced: isWeekend || r() < 0.55 ? 0 : Math.round((1500 + r() * 6000) * trend),
    }
  })
})()

export interface Task {
  id: string
  title: string
  /** The project it belongs to, shown under the title. */
  project: string
  due: Date
  isDone: boolean
}

/** The signed-in user's open work, soonest due first. */
export const sampleTasks: Task[] = [
  { id: 't1', title: 'Approve the Saltmarsh renewal quote', project: 'Saltmarsh Analytics', due: d('2026-09-29'), isDone: false },
  { id: 't2', title: 'Review the Harbor Lights sprint plan', project: 'Harbor Lights', due: d('2026-10-01'), isDone: false },
  { id: 't3', title: 'Send the Driftwood invoice reminder', project: 'Driftwood Docs', due: d('2026-10-02'), isDone: false },
  { id: 't4', title: 'Sign off the Granite Referral launch', project: 'Granite Referral', due: d('2026-10-06'), isDone: false },
]

export interface SetupStep {
  id: string
  /** What the step is, as the guide lists it. */
  label: string
  /** The button that does it, while it is the next step. */
  action: string
  isDone: boolean
}

/** Getting a new workspace ready; the guide shows until every step is done. */
export const sampleSetup: SetupStep[] = [
  { id: 'workspace', label: 'Name your workspace', action: 'Name workspace', isDone: true },
  { id: 'project', label: 'Create your first project', action: 'Create project', isDone: true },
  { id: 'team', label: 'Invite your team', action: 'Invite team', isDone: false },
  { id: 'calendar', label: 'Connect your calendar', action: 'Connect calendar', isDone: false },
]
