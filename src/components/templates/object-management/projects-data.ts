/* Sample data for the Projects template. Every name is made up. Replace it
   with your own source; the page only needs the shapes below. */

export type ProjectStatus = 'Active' | 'On hold' | 'Expired' | 'Inactive' | 'On grace period'
/** How the project is tracking against its plan; drives the Risk, Potential risk and On track tabs. */
export type ProjectHealth = 'on-track' | 'potential-risk' | 'risk'

export interface Person {
  name: string
  initials: string
}

export type ProjectActivity =
  | { type: 'created'; by: string; at: Date }
  | { type: 'status'; by: string; at: Date; from: ProjectStatus; to: ProjectStatus; note?: string }
  | { type: 'estimation'; by: string; at: Date; from: number; to: number }

export interface Project {
  id: string
  name: string
  /** Missing while nobody is assigned. */
  pm?: Person
  status: ProjectStatus
  health: ProjectHealth
  isArchived: boolean
  updatedAt: Date
  /** People on the project. */
  resources: number
  /** Both missing while the project is not scheduled. */
  start?: Date
  end?: Date
  /** In US dollars. */
  estimation: number
  /** Newest first. */
  activity: ProjectActivity[]
}

const people: Record<string, Person> = {
  ines: { name: 'Ines Okafor', initials: 'IO' },
  tomas: { name: 'Tomas Lindqvist', initials: 'TL' },
  mei: { name: 'Mei Takahara', initials: 'MT' },
  rafa: { name: 'Rafael Duarte', initials: 'RD' },
  priya: { name: 'Priya Raman', initials: 'PR' },
  noor: { name: 'Noor Haddad', initials: 'NH' },
}

// A bare date would parse as UTC midnight, the day before west of Greenwich.
const d = (iso: string) => new Date(iso.length === 10 ? `${iso}T00:00` : iso)

/** Created, then optionally a status change and an estimation change, newest first. */
function history(
  pm: string,
  created: string,
  change?: { at: string; from: ProjectStatus; to: ProjectStatus; note?: string },
  estimate?: { at: string; from: number; to: number },
): ProjectActivity[] {
  const by = people[pm]?.name ?? 'Admin'
  const items: ProjectActivity[] = [{ type: 'created', by, at: d(created) }]
  if (change) items.unshift({ type: 'status', by, at: d(change.at), from: change.from, to: change.to, note: change.note })
  if (estimate) items.unshift({ type: 'estimation', by, at: d(estimate.at), from: estimate.from, to: estimate.to })
  return items
}

type Row = [
  name: string,
  pm: string | null,
  status: ProjectStatus,
  health: ProjectHealth,
  isArchived: boolean,
  updatedAt: string,
  resources: number,
  timeline: [string, string] | null,
  estimation: number,
  activity: ProjectActivity[],
]

const rows: Row[] = [
  ['Harbor Lights', 'ines', 'Active', 'on-track', false, '2026-09-28T14:30', 11, ['2026-09-01', '2026-11-30'], 9600,
    history('ines', '2026-08-11T14:57', { at: '2026-08-16T11:37', from: 'On hold', to: 'Active', note: 'Budget approved; the team starts on the first of next month.' }, { at: '2026-08-18T16:14', from: 15000, to: 10500 })],
  ['Copperleaf CRM', 'tomas', 'Active', 'on-track', false, '2026-09-27T09:12', 6, ['2026-08-15', '2026-10-31'], 24000,
    history('tomas', '2026-07-30T10:02')],
  ['Northwind Portal', null, 'Active', 'potential-risk', false, '2026-09-26T17:45', 0, null, 12500,
    history('', '2026-09-20T08:20')],
  ['Saltmarsh Analytics', 'mei', 'Expired', 'risk', false, '2026-09-25T13:05', 9, ['2026-03-01', '2026-08-31'], 48000,
    history('mei', '2026-02-14T15:40', { at: '2026-09-01T09:00', from: 'Active', to: 'Expired', note: 'Contract ended before the last milestone; renewal under discussion.' })],
  ['Quillstone Billing', 'rafa', 'Active', 'potential-risk', false, '2026-09-25T10:30', 3, ['2026-09-10', '2026-12-15'], 7200,
    history('rafa', '2026-09-02T12:00', undefined, { at: '2026-09-12T10:30', from: 6000, to: 7200 })],
  ['Juniper Onboarding', null, 'Active', 'on-track', false, '2026-09-24T16:20', 6, ['2026-09-15', '2026-10-30'], 5400,
    history('', '2026-09-05T09:45')],
  ['Ember Mobile', 'priya', 'Inactive', 'on-track', false, '2026-09-23T11:11', 6, ['2026-05-01', '2026-07-31'], 31000,
    history('priya', '2026-04-18T13:30', { at: '2026-08-01T10:00', from: 'Active', to: 'Inactive' })],
  ['Driftwood Docs', null, 'On grace period', 'potential-risk', false, '2026-09-22T15:00', 0, ['2026-06-01', '2026-09-30'], 4800,
    history('', '2026-05-20T10:10', { at: '2026-09-15T14:00', from: 'Active', to: 'On grace period', note: 'Invoice overdue; work continues for 14 days.' })],
  ['Lanternfish Search', 'noor', 'On hold', 'risk', false, '2026-09-21T08:40', 4, ['2026-07-01', '2026-12-31'], 56000,
    history('noor', '2026-06-12T11:25', { at: '2026-09-21T08:40', from: 'Active', to: 'On hold', note: 'Waiting on the data contract with the vendor.' })],
  ['Bramble Payroll', 'ines', 'Active', 'on-track', false, '2026-09-20T12:00', 8, ['2026-08-01', '2026-11-15'], 18500,
    history('ines', '2026-07-22T16:45')],
  ['Cobalt Audit Log', 'tomas', 'On hold', 'potential-risk', false, '2026-09-19T10:05', 2, ['2026-09-01', '2026-10-15'], 3900,
    history('tomas', '2026-08-25T09:00', { at: '2026-09-19T10:05', from: 'Active', to: 'On hold', note: 'Paused until the security review is done.' })],
  ['Meridian SSO', 'mei', 'Active', 'on-track', false, '2026-09-18T14:22', 5, ['2026-09-05', '2026-10-20'], 11200,
    history('mei', '2026-08-30T13:15', undefined, { at: '2026-09-06T09:30', from: 9800, to: 11200 })],
  ['Foxglove Pricing', 'rafa', 'Expired', 'risk', true, '2026-08-30T09:00', 0, ['2026-03-15', '2026-06-30'], 6500,
    history('rafa', '2026-03-01T10:00', { at: '2026-07-01T09:00', from: 'Active', to: 'Expired' })],
  ['Tidewater Export', 'priya', 'Inactive', 'on-track', true, '2026-08-12T16:30', 0, ['2026-02-01', '2026-05-31'], 8800,
    history('priya', '2026-01-20T11:00', { at: '2026-06-01T09:00', from: 'Active', to: 'Inactive' })],
  ['Orchard Help Center', 'noor', 'On hold', 'risk', false, '2026-09-17T11:48', 3, null, 14000,
    history('noor', '2026-09-01T15:30', { at: '2026-09-17T11:48', from: 'Active', to: 'On hold', note: 'Scope changed; re-planning with the client.' })],
  ['Granite Referral', 'ines', 'Active', 'on-track', false, '2026-09-16T09:35', 4, ['2026-09-01', '2026-10-31'], 6300,
    history('ines', '2026-08-20T14:10')],
  ['Kestrel Reporting', 'tomas', 'Active', 'potential-risk', false, '2026-09-15T13:50', 7, ['2026-08-10', '2026-11-20'], 21000,
    history('tomas', '2026-08-01T10:40', undefined, { at: '2026-09-15T13:50', from: 17500, to: 21000 })],
  ['Willow Design Tokens', 'mei', 'On grace period', 'on-track', false, '2026-09-14T10:15', 2, ['2026-07-01', '2026-09-30'], 4200,
    history('mei', '2026-06-25T09:20', { at: '2026-09-10T12:00', from: 'Active', to: 'On grace period' })],
]

export const sampleProjects: Project[] = rows.map(
  ([name, pm, status, health, isArchived, updatedAt, resources, timeline, estimation, activity], i) => ({
    id: `p${i + 1}`,
    name,
    pm: pm ? people[pm] : undefined,
    status,
    health,
    isArchived,
    updatedAt: d(updatedAt),
    resources,
    start: timeline ? d(timeline[0]) : undefined,
    end: timeline ? d(timeline[1]) : undefined,
    estimation,
    activity,
  }),
)

export interface TeamMember {
  person: Person
  role: string
  /** Share of the person's week on this project, 0 to 100. */
  allocation: number
}

/** The people on Harbor Lights, for the Project Detail template. */
export const sampleTeam: TeamMember[] = [
  { person: people.ines, role: 'Project manager', allocation: 50 },
  { person: people.tomas, role: 'Tech lead', allocation: 100 },
  { person: people.mei, role: 'Product designer', allocation: 80 },
  { person: people.rafa, role: 'Front-end developer', allocation: 100 },
  { person: people.noor, role: 'QA engineer', allocation: 40 },
]
