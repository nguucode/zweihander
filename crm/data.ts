// Sample data for the Houseura demo: a fictional Northcote (VIC) agency.
// Figures follow the Figma "03 · Sample Data" page; "today" is Wed 11/11/2026.

export const money = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 })
export const fmt = (n: number) => money.format(n)

export const ME = { name: 'Liam Tran', initials: 'LT', phone: '0491 570 110' }
export const AGENCY = 'Kestrel & Vine Property'

export interface Agent {
  initials: string
  name: string
  appraisals: number
  won: number
  gci: number
  target: number
  dom: number
}

export const agents: Agent[] = [
  { initials: 'LT', name: 'Liam Tran', appraisals: 13, won: 5, gci: 214700, target: 560000, dom: 33 },
  { initials: 'SM', name: 'Sienna Marchetti', appraisals: 7, won: 3, gci: 168300, target: 520000, dom: 31 },
  { initials: 'PR', name: 'Priya Raman', appraisals: 12, won: 4, gci: 156200, target: 470000, dom: 36 },
  { initials: 'JK', name: 'Josh Kellerman', appraisals: 6, won: 1, gci: 73200, target: 290000, dom: 44 },
]

export const forecast = [
  { month: 'Nov', underContract: 12268, onMarket: 19500, preMarket: 0, appraisal: 1400 },
  { month: 'Dec', underContract: 0, onMarket: 66800, preMarket: 13000, appraisal: 6200 },
  { month: 'Jan', underContract: 0, onMarket: 18500, preMarket: 3000, appraisal: 2500 },
  { month: 'Feb', underContract: 0, onMarket: 0, preMarket: 0, appraisal: 32000 },
  { month: 'Mar', underContract: 0, onMarket: 0, preMarket: 0, appraisal: 0 },
  { month: 'Apr', underContract: 0, onMarket: 0, preMarket: 0, appraisal: 0 },
  { month: 'May', underContract: 0, onMarket: 0, preMarket: 0, appraisal: 0 },
  { month: 'Jun', underContract: 0, onMarket: 0, preMarket: 0, appraisal: 0 },
]

export type Severity = 'danger' | 'warning' | 'neutral'
export interface ComplianceItem {
  id: string
  title: string
  detail: string
  due: string
  severity: Severity
  kind: 'reserve' | 'cdd' | 'unsubscribe' | 'disclosure'
  href: string
}

export const compliance: ComplianceItem[] = [
  { id: 'c1', kind: 'reserve', title: 'Reserve due · 14 Ruby St', detail: 'Reserve above advertised range — review price first', due: 'Sat 14/11 · 3d', severity: 'danger', href: '#/listings/14-ruby/price' },
  { id: 'c2', kind: 'cdd', title: 'CDD pending · Fiona Achterberg', detail: 'Blocks 9 Elm Grove launch (Fri 13/11)', due: 'Blocking', severity: 'danger', href: '#/listings' },
  { id: 'c3', kind: 'reserve', title: 'Reserve due · 112 Clarke St', detail: 'Fixed-date sale · EOI closes Tue 24/11', due: 'Tue 17/11', severity: 'warning', href: '#/listings' },
  { id: 'c4', kind: 'unsubscribe', title: 'Unsubscribe to action · Marcus Bell', detail: 'Requested 09/11 · 5 working days', due: 'Mon 16/11', severity: 'warning', href: '#/customers/rachel' },
  { id: 'c5', kind: 'reserve', title: 'Reserve due · 61 Gooch St', detail: 'Auction Sat 28/11', due: 'Sat 21/11', severity: 'neutral', href: '#/listings' },
  { id: 'c6', kind: 'disclosure', title: 'Sale price disclosure · 8/140 Station St', detail: 'Within 7 days of unconditional', due: 'Mon 23/11', severity: 'warning', href: '#/listings' },
  { id: 'c7', kind: 'cdd', title: 'CDD in progress · Harlow Nominees ATF Harlow Family Trust', detail: 'Buyer on 5/27 Albert St · 2 of 2 beneficial owners pending', due: 'Open', severity: 'warning', href: '#/listings/5-27-albert/offers' },
]

// ——— Pipeline ———

export const STAGES = ['Pre-market', 'On market', 'Under offer', 'Under contract', 'Unconditional', 'Settled'] as const
export type Stage = (typeof STAGES)[number]

export interface Listing {
  id: string
  street: string
  suburb: string
  stage: Stage
  method: string
  dom?: string
  agent: string
  commission: number
  probability: number
  flag?: { text: string; tone: 'danger' | 'warning' | 'neutral' | 'success' }
  sold?: string
  /** Vendors still to pass AML/CTF customer due diligence. Blocks going On market. */
  cddPending?: string[]
}

export const listings: Listing[] = [
  { id: '9-elm', street: '9 Elm Grove', suburb: 'Thornbury VIC 3071', stage: 'Pre-market', method: 'Auction 05/12', dom: 'Pre-market', agent: 'LT', commission: 33725, probability: 0.8, flag: { text: 'CDD pending', tone: 'danger' }, cddPending: ['Fiona Achterberg'] },
  { id: '14-ruby', street: '14 Ruby Street', suburb: 'Northcote VIC 3070', stage: 'On market', method: 'Auction 21/11', dom: '20 DOM', agent: 'LT', commission: 30000, probability: 0.65, flag: { text: 'Reserve due · 3d', tone: 'danger' } },
  { id: '5-27-albert', street: '5/27 Albert Street', suburb: 'Brunswick VIC 3056', stage: 'On market', method: 'Private sale', dom: '46 DOM', agent: 'PR', commission: 12800, probability: 0.85, flag: { text: '2 live offers', tone: 'neutral' } },
  { id: '112-clarke', street: '112 Clarke Street', suburb: 'Northcote VIC 3070', stage: 'On market', method: 'EOI 24/11', dom: '34 DOM', agent: 'PR', commission: 20940, probability: 0.6, flag: { text: 'Reserve due 17/11', tone: 'warning' } },
  { id: '61-gooch', street: '61 Gooch Street', suburb: 'Thornbury VIC 3071', stage: 'On market', method: 'Auction 28/11', dom: '12 DOM', agent: 'PR', commission: 30780, probability: 0.65, flag: { text: 'Reserve due 21/11', tone: 'warning' } },
  { id: '19-woolton', street: '19 Woolton Avenue', suburb: 'Thornbury VIC 3071', stage: 'On market', method: 'Passed in → Private', dom: '33 DOM', agent: 'LT', commission: 26410, probability: 0.5, flag: { text: 'Manual', tone: 'neutral' } },
  { id: '2-8-cunningham', street: '2/8 Cunningham Street', suburb: 'Northcote VIC 3070', stage: 'On market', method: 'Private sale', dom: '41 DOM', agent: 'JK', commission: 15800, probability: 0.5, flag: { text: 'Price review suggested', tone: 'neutral' } },
  { id: '304-50-sydney', street: '304/50 Sydney Road', suburb: 'Brunswick VIC 3056', stage: 'On market', method: 'Private sale', dom: '25 DOM', agent: 'JK', commission: 9240, probability: 0.55 },
  { id: '8-140-station', street: '8/140 Station Street', suburb: 'Fairfield VIC 3078', stage: 'Under contract', method: 'Sold $587,000 · 02/11', dom: 'Day 49', agent: 'JK', commission: 12914, probability: 0.95, flag: { text: 'Finance due 16/11', tone: 'warning' }, sold: 'Sold $587,000 · 02/11' },
  { id: '27-hawthorn', street: '27 Hawthorn Grove', suburb: 'Hawthorn VIC 3122', stage: 'Settled', method: 'Sold $2,310,000', dom: 'Settled 30/10', agent: 'SM', commission: 41580, probability: 1, sold: 'Sold $2,310,000' },
]

// ——— Today ———

export interface Action {
  id: string
  icon: 'warning' | 'shield' | 'spark' | 'phone' | 'mail'
  title: string
  tags: { text: string; tone: 'danger' | 'warning' | 'success' | 'neutral' }[]
  body: string
  why: string
  cta: string
  href?: string
  isPrimary?: boolean
  /** Compliance items cannot be snoozed past their deadline. */
  locked?: boolean
}

export const actions: Action[] = [
  { id: 'a1', icon: 'warning', title: 'Publish reserve — 14 Ruby St', tags: [{ text: 'Compliance', tone: 'danger' }, { text: 'Due Sat 14/11 · 3 days', tone: 'danger' }], body: "Due 11:00am Sat 14/11. Vendor's indicated $1,600,000 is above the advertised range — update the Property Price Statement first.", why: 'VIC underquoting rules: the reserve must be published 7 days before auction, and a reserve above the advertised range means the range has to move first.', cta: 'Review price', href: '#/listings/14-ruby/price', isPrimary: true, locked: true },
  { id: 'a2', icon: 'shield', title: 'Launch blocked — 9 Elm Grove', tags: [{ text: 'Compliance', tone: 'danger' }, { text: 'Launch Fri 13/11', tone: 'warning' }], body: "Fiona Achterberg's CDD is pending (PEP / sanctions screen not run). Listing can't go On market until both vendors are Verified.", why: 'AML/CTF tranche 2 (from 1 July 2026): every vendor must be Verified before a listing is marketed.', cta: 'Complete CDD', href: '#/listings?gate=9-elm', locked: true },
  { id: 'a3', icon: 'spark', title: 'Off-market first look — 9 Elm Grove', tags: [{ text: 'Buyer match', tone: 'success' }], body: '3 hot buyers match, incl. Rachel & Tom Ashdown (needs to sell 14 Ruby St first).', why: 'Three buyers with an active 4-bed Thornbury brief, all inspected in the last 30 days.', cta: 'Preview alert', href: '#/customers/rachel' },
  { id: 'a4', icon: 'phone', title: 'Follow up Whitcombe proposal', tags: [{ text: 'Appraisal', tone: 'neutral' }], body: 'Proposal for 46 Westgarth St opened 3 times, last 10/11 9:42pm. 2 competing agents interviewed.', why: 'Signals: proposal opened 3× (last 10/11 9:42pm) · 2 competing agents interviewed · est. $1.9–2.05m, commission 1.9%. Similar vendors converted 62% when called within 24h of a re-open. Automated suggestion — explained under our Privacy Policy (automated decisions).', cta: 'Call Graham' },
  { id: 'a5', icon: 'phone', title: 'Call Ethan & Grace Liu', tags: [{ text: 'Buyer', tone: 'neutral' }], body: 'Contract requested, bidder registered for 21/11, offer $1,525,000 declined on 10/11.', why: 'A declined bidder who registered for auction is the most likely buyer at 14 Ruby St.', cta: 'Call' },
  { id: 'a6', icon: 'mail', title: 'Unsubscribe to action — Marcus Bell', tags: [{ text: 'Compliance', tone: 'danger' }, { text: 'Due Mon 16/11', tone: 'warning' }], body: 'Requested 09/11 via SMS reply. Spam Act: action within 5 working days.', why: 'Spam Act 2003: an unsubscribe request must take effect within 5 working days.', cta: 'Action now', locked: true },
]

export const todayEvents = [
  { time: '9:30am', title: 'Vendor call — Rachel & Tom Ashdown', detail: 'Price feedback & reserve · 14 Ruby St' },
  { time: '11:00am', title: 'Floorplan & photo sign-off', detail: '9 Elm Grove, Thornbury' },
  { time: '2:00pm', title: 'Appraisal — 17 Hutton St, Thornbury', detail: 'Maria Kostopoulos · downsizer · AP-2204' },
  { time: '5:30pm', title: 'Twilight open home', detail: '14 Ruby St · 5:30–6:00pm' },
]

// ——— Listing: 14 Ruby St ———

export const comparables = [
  { address: '31 Bastings St · 3/1/1 · 398 m²', date: '18/09', price: 1470000 },
  { address: '8 Mitchell St · 3/2/1 · 430 m²', date: '03/10', price: 1535000 },
  { address: '57 Gladstone Ave · 3/2/0 · 371 m²', date: '24/10', price: 1410000 },
]

export const priceLog = [
  { at: '16/10 10:12am', text: 'Estimated selling price set — $1,450,000 – $1,550,000', by: 'Liam Tran', flagged: false },
  { at: '22/10 8:00am', text: 'Advertised price & PPS v1 published', by: 'Liam Tran', flagged: false },
  { at: '10/11 4:05pm', text: 'Written offer $1,525,000 rejected on vendor instruction → price review required', by: 'System', flagged: true },
  { at: '10/11 4:20pm', text: 'Indicative reserve $1,600,000 entered — above advertised range', by: 'Liam Tran', flagged: true },
]

// ——— Listing: 5/27 Albert St offers ———

export interface Offer {
  id: string
  buyer: string
  vendorLabel: string
  price: number
  deposit: string
  settlement: string
  conditions: string
  status: 'sent' | 'review' | 'rejected' | 'accepted'
  cddPending?: boolean
}

export const ALBERT_ADVERTISED = 640000
export const offers: Offer[] = [
  { id: 'OF-0413', buyer: 'Harlow Nominees ATF Harlow Family Trust', vendorLabel: 'Buyer B', price: 628000, deposit: '5%', settlement: '30 days', conditions: 'Unconditional', status: 'sent', cddPending: true },
  { id: 'OF-0412', buyer: 'Chloe Bergstrom', vendorLabel: 'Buyer A', price: 615000, deposit: '10%', settlement: '45 days', conditions: 'Subject to finance (14 days)', status: 'review' },
  { id: 'OF-0409', buyer: 'Buyer C', vendorLabel: 'Buyer C', price: 600000, deposit: '10%', settlement: '60 days', conditions: 'Subject to finance', status: 'rejected' },
]

// ——— Open home ———

export interface Attendee {
  id: string
  initials: string
  name: string
  status: string
  tags: { text: string; tone: 'neutral' | 'warning' | 'danger' }[]
  rating: number
  duplicate?: boolean
}

export const attendees: Attendee[] = [
  { id: 'o1', initials: 'PS', name: 'Priyanka & Arjun Sethi', status: 'New · 5:41pm', tags: [{ text: '$1.45–1.50m', tone: 'neutral' }, { text: 'Duplicate?', tone: 'warning' }], rating: 4, duplicate: true },
  { id: 'o2', initials: 'MB', name: 'Marcus Bell', status: 'Known · 5:38pm', tags: [{ text: 'No comment', tone: 'neutral' }, { text: 'Do not market', tone: 'danger' }], rating: 2 },
  { id: 'o3', initials: 'SD', name: 'Sophie Delacroix', status: 'Known · "Needs to sell first"', tags: [{ text: '$1.45–1.50m', tone: 'neutral' }], rating: 3 },
  { id: 'o4', initials: 'DC', name: 'Daniel Cho', status: 'New (QR) · SMS ×', tags: [{ text: 'Below $1.40m', tone: 'neutral' }], rating: 2 },
  { id: 'o5', initials: 'AR', name: 'Ava Romano & Jack Pearce', status: 'Known · 2nd visit', tags: [{ text: '$1.40–1.45m', tone: 'neutral' }], rating: 3 },
  { id: 'o6', initials: 'EL', name: 'Ethan & Grace Liu', status: 'Known · 3rd visit', tags: [{ text: '$1.50–1.55m', tone: 'neutral' }], rating: 5 },
  { id: 'o7', initials: 'HN', name: 'Helen Ng', status: 'Known · 5:33pm', tags: [{ text: '$1.45–1.50m', tone: 'neutral' }], rating: 3 },
]

export const PRICE_BUCKETS = ['<1.40', '1.40–1.45', '1.45–1.50', '1.50–1.55', '>1.55']

// ——— Vendor report ———

export const weekly = [
  { week: 'Wk 1', views: 2100, enquiries: 19 },
  { week: 'Wk 2', views: 1450, enquiries: 13 },
  { week: 'Wk 3', views: 1148, enquiries: 9 },
]
export const feedback = [
  { bucket: '<1.40', groups: 7 },
  { bucket: '1.40–1.45', groups: 12 },
  { bucket: '1.45–1.50', groups: 14 },
  { bucket: '1.50–1.55', groups: 6 },
  { bucket: '>1.55', groups: 2 },
]
export const sources = [
  { label: 'realestate.com.au', share: 58 },
  { label: 'Domain', share: 22 },
  { label: 'Signboard', share: 9 },
  { label: 'Database / e-alert', share: 7 },
  { label: 'Referral', share: 4 },
]

// ——— Contact 360 ———

export type TimelineKind = 'Calls' | 'Emails & SMS' | 'Notes' | 'Documents' | 'Offers' | 'Events'
export interface TimelineItem {
  id: string
  kind: TimelineKind
  title: string
  detail: string
  at: string
}

export const timeline: TimelineItem[] = [
  { id: 't1', kind: 'Events', title: 'Vendor call — scheduled', detail: 'Price feedback & reserve · with Tom', at: '11/11 9:30am' },
  { id: 't2', kind: 'Calls', title: 'Call · 12 min', detail: 'AI summary: "Wants $1.6m reserve; open to reviewing after Saturday\'s open home."', at: '10/11 4:12pm' },
  { id: 't3', kind: 'Offers', title: 'Offer received — $1,525,000', detail: 'Buyer A · declined 10/11 on vendor instruction', at: '09/11 3:40pm' },
  { id: 't4', kind: 'Documents', title: 'CDD verified', detail: 'Rachel & Tom · Low risk', at: '21/10' },
  { id: 't5', kind: 'Documents', title: 'Exclusive Sale Authority e-signed', detail: 'Estimated selling price $1,450,000 – $1,550,000', at: '16/10' },
  { id: 't6', kind: 'Notes', title: 'Appraisal at 14 Ruby St', detail: 'AI notes attached · comparables: Bastings, Mitchell, Gladstone', at: '02/10' },
  { id: 't7', kind: 'Emails & SMS', title: 'Appraisal request (website)', detail: 'Express consent captured · collection notice sent', at: '14/09' },
]

// ——— Leads ———

export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Closed'
export interface Lead {
  id: string
  initials: string
  name: string
  kind: string
  status: LeadStatus
  enquiry: string
  message: string
  source: string
  owner?: string
  ownerInitials?: string
  response: string
  responseTone?: 'danger' | 'warning'
  responseAt: string
  email?: string
  phone?: string
}

export const leads: Lead[] = [
  { id: 'l1', initials: 'NB', name: 'Noah Brennan', kind: 'Landlord prospect', status: 'New', enquiry: 'General · Brunswick', message: 'Do you manage investment properties in Brunswick? I have a 2-bed apartment coming off lease in January.', source: 'Web chat', response: 'Overdue 18h 02m', responseTone: 'danger', responseAt: 'Tue 2:10pm', email: 'noah.brennan@example.com', phone: '0491 577 108' },
  { id: 'l2', initials: 'MD', name: 'Margaret & Ian Doyle', kind: 'Vendor prospect', status: 'New', enquiry: '23 Fenwick St, Clifton Hill', message: 'We are thinking of selling 23 Fenwick St, Clifton Hill in spring and would like an idea of value. 3 bed Victorian, renovated 2019.', source: 'Website form', response: 'Overdue 11h 32m', responseTone: 'danger', responseAt: 'Tue 8:40pm', email: 'margaret.doyle@example.com', phone: '0491 577 214' },
  { id: 'l3', initials: 'HN', name: 'Helen Ng', kind: 'Buyer', status: 'New', enquiry: '112 Clarke St, Northcote · EOI 24/11', message: 'Could you send the EOI form and the contract of sale?', source: 'Domain', owner: 'Priya', ownerInitials: 'PR', response: 'Overdue 27 min', responseTone: 'danger', responseAt: 'Today 7:15am', email: 'helen.ng@example.com', phone: '0491 577 331' },
  { id: 'l4', initials: 'AS', name: 'Arjun Sethi', kind: 'Buyer · possible duplicate', status: 'New', enquiry: '14 Ruby St, Northcote · Auction 21/11', message: 'Is the vendor open to pre-auction offers? We can move quickly.', source: 'realestate.com.au', owner: 'Liam', ownerInitials: 'LT', response: '6 min left', responseTone: 'warning', responseAt: 'Today 7:48am', email: 'arjun.sethi@example.com', phone: '0491 577 402' },
  { id: 'l5', initials: 'TK', name: 'Tim Kowalski', kind: 'Buyer', status: 'Contacted', enquiry: '5/27 Albert St, Brunswick', message: 'Is the car space on title or allocated?', source: 'Domain', owner: 'Priya', ownerInitials: 'PR', response: '8 min', responseAt: 'Tue 6:12pm' },
  { id: 'l6', initials: 'LH', name: 'Leila Haddad', kind: 'Tenant', status: 'Contacted', enquiry: '33 Arthurton Rd, Northcote · $780 pw', message: 'Available to inspect Saturday morning?', source: 'realestate.com.au', owner: 'Mia', ownerInitials: 'MC', response: '6 min', responseAt: 'Tue 4:30pm' },
  { id: 'l7', initials: 'GO', name: 'Grace Okafor', kind: 'Buyer', status: 'Contacted', enquiry: '61 Gooch St, Thornbury · Auction 28/11', message: 'Is there a price guide for the auction?', source: 'realestate.com.au', owner: 'Priya', ownerInitials: 'PR', response: '11 min', responseAt: 'Tue 10:20am' },
  { id: 'l8', initials: 'RB', name: 'Rosa Bianchi', kind: 'Buyer', status: 'Contacted', enquiry: '2/8 Cunningham St, Northcote', message: 'Would the vendor consider $760k?', source: 'realestate.com.au', owner: 'Josh', ownerInitials: 'JK', response: '41 min · Late', responseTone: 'warning', responseAt: 'Mon 1:05pm' },
  { id: 'l9', initials: 'OP', name: 'Olivia Park', kind: 'First home buyer · our tenant', status: 'Qualified', enquiry: '5/27 Albert St, Brunswick', message: 'Could I see it this week? I rent with you at 4/12 Lygon St.', source: 'Property alert', owner: 'Priya', ownerInitials: 'PR', response: '15 min', responseAt: 'Tue 11:02am' },
  { id: 'l10', initials: 'GL', name: 'George & Mei Lam', kind: 'Buyer', status: 'Qualified', enquiry: '19 Woolton Ave, Thornbury', message: 'Still available after the auction?', source: 'Signboard SMS', owner: 'Liam', ownerInitials: 'LT', response: '22 min', responseAt: 'Mon 6:45pm' },
  { id: 'l11', initials: 'KS', name: 'Kevin Strand', kind: 'Landlord · rental → sale signal', status: 'Qualified', enquiry: '2/19 Herbert St, Northcote', message: 'Thinking about selling when the lease ends. What would it fetch?', source: 'Phone', owner: 'Liam', ownerInitials: 'LT', response: '4 min', responseAt: 'Mon 9:10am' },
  { id: 'l12', initials: 'WB', name: 'Will Bauer', kind: 'Buyer', status: 'Closed', enquiry: '27 Hawthorn Grove, Hawthorn', message: 'Missed out — please keep me posted on similar homes.', source: 'Domain', owner: 'Sienna', ownerInitials: 'SM', response: '9 min', responseAt: 'Fri 3:30pm' },
]

export const OWNERS = ['Liam Tran', 'Sienna Marchetti', 'Priya Raman', 'Josh Kellerman', 'Mia Castellano']
