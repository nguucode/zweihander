import { useState, type ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Badge } from '@/components/atomic-elements/Badge'
import { Button } from '@/components/buttons/Button'
import { Menu } from '@/components/navigation/Menu'
import { Popover } from '@/components/overlays/Popover'
import { Modal } from '@/components/overlays/Modal'
import { TextInput } from '@/components/inputs/TextInput'
import { Textarea } from '@/components/inputs/Textarea'
import { Select } from '@/components/inputs/Select'
import { CommandPalette } from '@/components/navigation/CommandPalette'
import { useToast } from '@/components/notifications/Toast'
import { NavSidebar, NavSidebarButton, type NavSidebarEntry } from '@/components/patterns/application-ui/NavSidebar'
import { TopBar } from '@/components/patterns/application-ui/TopBar'
import { AppShell } from '@/components/templates/application-ui/AppShell'
import { Glyph } from './icons'
import { ME, OWNERS } from './data'

const nav: NavSidebarEntry[] = [
  { type: 'group', label: 'Dashboard', items: [
    { label: 'Home', href: '#/home', icon: <Glyph name="home" /> },
    { label: 'Reports', href: '#/reports', icon: <Glyph name="chart" /> },
  ] },
  { type: 'group', label: 'Clients', items: [
    { label: 'Leads', href: '#/leads', icon: <Glyph name="lead" />, badge: 4 },
    { label: 'Customers', href: '#/customers', icon: <Glyph name="users" /> },
    { label: 'Marketing', href: '#/marketing', icon: <Glyph name="megaphone" /> },
  ] },
  { type: 'group', label: 'Sales', items: [
    { label: 'Appraisals', href: '#/appraisals', icon: <Glyph name="appraisal" /> },
    { label: 'Listings', href: '#/listings', icon: <Glyph name="listing" /> },
    { label: 'Open Homes', href: '#/open-homes', icon: <Glyph name="door" /> },
    { label: 'Offers', href: '#/offers', icon: <Glyph name="offer" /> },
    { label: 'Vendor', href: '#/vendor', icon: <Glyph name="vendor" /> },
  ] },
  { type: 'group', label: 'Rentals & Finance', items: [
    { label: 'Rentals', href: '#/rentals', icon: <Glyph name="key" /> },
    { label: 'Accounts', href: '#/accounts', icon: <Glyph name="wallet" /> },
  ] },
]

const go = (href: string) => () => (location.hash = href)

const searchItems = [
  { label: 'Pages', items: [
    { value: 'Home — Today', label: 'Home — Today', onSelect: go('#/home') },
    { value: 'Office overview', label: 'Office overview', onSelect: go('#/reports') },
    { value: 'Pipeline', label: 'Pipeline', onSelect: go('#/listings') },
    { value: 'Leads', label: 'Leads', onSelect: go('#/leads') },
    { value: 'Vendor report — 14 Ruby St', label: 'Vendor report — 14 Ruby St', onSelect: go('#/vendor') },
    { value: 'Open home check-in (mobile)', label: 'Open home check-in (mobile)', onSelect: go('#/open-homes') },
  ] },
  { label: 'Listings', items: [
    { value: '14 Ruby Street, Northcote', label: '14 Ruby Street, Northcote', onSelect: go('#/listings/14-ruby/price') },
    { value: '5/27 Albert Street, Brunswick', label: '5/27 Albert Street, Brunswick', onSelect: go('#/listings/5-27-albert/offers') },
    { value: '9 Elm Grove, Thornbury', label: '9 Elm Grove, Thornbury', onSelect: go('#/listings?gate=9-elm') },
  ] },
  { label: 'Contacts', items: [
    { value: 'Rachel Ashdown', label: 'Rachel Ashdown', onSelect: go('#/customers/rachel') },
    { value: 'Margaret & Ian Doyle', label: 'Margaret & Ian Doyle', onSelect: go('#/leads?lead=l2') },
  ] },
]

const brand = (
  <a href="#/home" className="brand" aria-label="Houseura home">
    <span className="brand-mark">H</span>ouseura
  </a>
)

export function Shell({ current, children }: { current: string; children: ReactNode }) {
  const toast = useToast()
  const [searchOpen, setSearchOpen] = useState(false)
  const [leadOpen, setLeadOpen] = useState(false)
  const [office, setOffice] = useState('Northcote Office')

  const header = (
    <>
      <Menu
        align="start"
        trigger={<NavSidebarButton appearance="switcher" icon={<Avatar size="xs" initials="NO" variant="solid" color="orange" />} label={office} end={<Icon name="chevrons-up-down" />} />}
        items={[
          { type: 'radio', label: 'Offices', value: office, onValueChange: setOffice, options: [
            { value: 'Northcote Office', label: 'Northcote Office' },
            { value: 'Brunswick Office', label: 'Brunswick Office' },
            { value: 'All offices', label: 'All offices (Group)' },
          ] },
        ]}
      />
      <NavSidebarButton icon={<Icon name="plus" />} label="Create lead" onClick={() => setLeadOpen(true)} />
      <NavSidebarButton icon={<Glyph name="offer" />} label="Log offer" onClick={go('#/listings/5-27-albert/offers')} />
      <NavSidebarButton icon={<Glyph name="bond" />} label="Lodge bond claim" onClick={() => toast.add({ title: 'Bond claims open in Rentals', description: 'Not part of this demo.', variant: 'info' })} />
    </>
  )

  const end = (
    <div className="topbar-end">
      <Popover title="About this demo" trigger={<Button variant="secondary" appearance="ghost" isIconOnly aria-label="About this demo"><Icon name="info" /></Button>}>
        Houseura is a fictional residential real-estate CRM. Every agency, person and sale is sample data. Built with the Zweihänder React kit.
      </Popover>
      <Button variant="secondary" appearance="ghost" isIconOnly aria-label="Settings" onClick={() => toast.add({ title: 'Settings are not part of the demo' })}>
        <Glyph name="settings" />
      </Button>
      <Popover
        title="Notifications"
        trigger={
          <Button variant="secondary" appearance="ghost" isIconOnly aria-label="Notifications, 27 unread" className="has-badge">
            <Icon name="notifications" />
            <Badge count={27} variant="primary" size="sm" isFloating />
          </Button>
        }
      >
        <ul className="plain-list">
          <li><a href="#/listings/14-ruby/price">Reserve for 14 Ruby St due in 3 days</a></li>
          <li><a href="#/leads?lead=l2">Margaret Doyle: first response overdue</a></li>
          <li><a href="#/vendor">Week 3 vendor report ready for approval</a></li>
        </ul>
      </Popover>
      <Menu
        align="end"
        trigger={<Button variant="secondary" appearance="ghost" isIconOnly aria-label={`Account: ${ME.name}`}><Avatar size="sm" initials={ME.initials} color="orange" /></Button>}
        items={[{ label: ME.name, disabled: true }, { type: 'separator' }, { label: 'Your profile' }, { label: 'Sign out' }]}
      />
    </div>
  )

  return (
    <>
      <AppShell
        layout="top-bar"
        topBarSurface="transparent"
        brand={brand}
        header={
          <TopBar end={end}>
            <NavSidebarButton appearance="field" icon={<Icon name="search" />} label="Search" className="topbar-search" onClick={() => setSearchOpen(true)} />
          </TopBar>
        }
        sidebar={
          <NavSidebar
            items={nav}
            currentHref={current}
            header={header}
            footer={<NavSidebarButton icon={<Icon name="danger" />} label="Report an issue" onClick={() => toast.add({ title: 'Thanks — issue form would open here' })} />}
          />
        }
      >
        <div className="page">{children}</div>
        <p className="sample-note">Sample data — fictional agency, people and sales</p>
      </AppShell>

      <CommandPalette open={searchOpen} onOpenChange={setSearchOpen} groups={searchItems} hotkey="k" placeholder="Search pages, listings, contacts…" />

      <Modal
        open={leadOpen}
        onOpenChange={setLeadOpen}
        title="Create lead"
        description="Routed by suburb and enquiry type. A lead with no matching rule goes to the principal."
        footer={
          <>
            <Button variant="secondary" appearance="outlined" onClick={() => setLeadOpen(false)}>Cancel</Button>
            <Button form="create-lead" type="submit">Create lead</Button>
          </>
        }
      >
        <form
          id="create-lead"
          className="form-stack"
          onSubmit={(e) => {
            e.preventDefault()
            const name = new FormData(e.currentTarget).get('name') || 'New lead'
            setLeadOpen(false)
            toast.add({ title: `Lead created: ${name}`, description: 'First response target is 30 min.', variant: 'success' })
          }}
        >
          <TextInput name="name" label="Name" required isFullWidth />
          <TextInput name="phone" label="Phone" type="tel" isFullWidth />
          <Select label="Owner" options={[{ value: '', label: 'Route automatically' }, ...OWNERS.map((o) => ({ value: o, label: o }))]} defaultValue="" />
          <Textarea name="message" label="Enquiry" />
        </form>
      </Modal>
    </>
  )
}
