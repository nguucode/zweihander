'use client'

import { useState, type ComponentProps, type FormEvent, type ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { Avatar } from '../../atomic-elements/Avatar'
import { Button } from '../../buttons/Button'
import { Checkbox } from '../../controls/Checkbox'
import { RadioGroup } from '../../controls/Radio'
import { PasswordInput, defaultPasswordRules } from '../../inputs/PasswordInput'
import { TextInput } from '../../inputs/TextInput'
import { Textarea } from '../../inputs/Textarea'
import { Menu } from '../../navigation/Menu'
import { ConfirmDialog } from '../../overlays/ConfirmDialog'
import { FormFieldGroup, FormSection } from '../../patterns/application-ui/FormLayouts'
import { NavSidebar } from '../../patterns/application-ui/NavSidebar'
import { TopBar } from '../../patterns/application-ui/TopBar'
import { VerticalNav } from '../../patterns/application-ui/VerticalNav'
import { AppShell } from './AppShell'
import styles from './Settings.module.css'

export type SettingsSection = 'profile' | 'account' | 'notifications'
type Values = Record<string, string>
type OnSave = (section: SettingsSection, values: Values) => void

const SECTIONS: { id: SettingsSection; label: string }[] = [
  { id: 'profile', label: 'Profile' },
  { id: 'account', label: 'Account' },
  { id: 'notifications', label: 'Notifications' },
]

/** The signed-in user's settings as stored. Checkboxes are "on" when ticked, as a form sends them. */
const sampleValues: Record<'profile' | 'notifications', Values> = {
  profile: { name: 'Ines Okafor', email: 'ines@example.com', username: 'ines', about: '' },
  notifications: { comments: 'on', push: 'mentions' },
}

export interface SettingsProps extends Omit<ComponentProps<'div'>, 'children'> {
  /** The section shown first. */
  defaultSection?: SettingsSection
  /**
   * Called with a section's values when it is saved: the form's fields by
   * name. Account sends `currentPassword` and `newPassword`. Replace with a
   * call to your API.
   */
  onSave?: OnSave
  /** Called once the reader confirms Delete account. */
  onDeleteAccount?: () => void
}

/**
 * The settings page: a heading, a Vertical Nav of sections beside the
 * section shown (above it on a narrow screen), each section a form of
 * Form Sections with a save bar at its end that stays in view, and a
 * danger zone under Account. The values are local; swap them for your
 * data layer when you copy the page.
 */
export function Settings({ defaultSection = 'profile', onSave, onDeleteAccount, ...props }: SettingsProps) {
  const [section, setSection] = useState(defaultSection)
  const [saved, setSaved] = useState(sampleValues)
  const save: OnSave = (id, values) => {
    setSaved((s) => ({ ...s, [id]: values }))
    onSave?.(id, values)
  }

  const userMenu = (
    <div className={styles.account}>
      <Menu
        align="start"
        trigger={
          <Button variant="secondary" appearance="ghost" startIcon={<Avatar initials="IO" size="sm" />}>
            {saved.profile.name}
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
          className={styles.sidebar}
          footer={userMenu}
        />
      }
      header={<TopBar end={userMenu} />}
      {...props}
    >
      <div className={styles.page}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Settings</h1>
          <p className={styles.description}>Your profile, sign-in and the notifications you get.</p>
        </div>
        <div className={styles.body}>
          <VerticalNav
            aria-label="Settings"
            className={styles.nav}
            items={SECTIONS.map(({ id, label }) => ({ label, href: `#${id}` }))}
            currentHref={`#${section}`}
            // The sample swaps sections in place; with a router, give each
            // item a `render` link to its own URL instead.
            onClick={(e) => {
              const link = (e.target as HTMLElement).closest('a')
              if (!link) return
              e.preventDefault()
              setSection(link.hash.slice(1) as SettingsSection)
            }}
          />
          {/* Every section stays mounted, hidden when not shown, so a draft
              survives a look at another section. */}
          <div className={styles.panels}>
            <SectionForm id="profile" hidden={section !== 'profile'} saved={saved.profile} onSave={save}>
              {(v) => (
                <FormSection title="Profile" description="Shown to everyone in your workspace.">
                  <TextInput label="Full name" name="name" autoComplete="name" required isFullWidth defaultValue={v.name} />
                  <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    readOnly
                    isFullWidth
                    defaultValue={v.email}
                    helperText="Managed by your organisation's sign-in. Ask an admin to change it."
                  />
                  <TextInput label="Username" name="username" prefix="zweihander.app/" isFullWidth defaultValue={v.username} />
                  <Textarea label="About" name="about" helperText="A few sentences about yourself." minRows={3} isFullWidth defaultValue={v.about} />
                </FormSection>
              )}
            </SectionForm>
            <div hidden={section !== 'account'} className={styles.panel}>
              {/* Straight to onSave: a password is never kept in page state. */}
              <PasswordForm onSave={onSave} />
              <DangerZone username={saved.profile.username} onDeleteAccount={onDeleteAccount} />
            </div>
            <SectionForm id="notifications" hidden={section !== 'notifications'} saved={saved.notifications} onSave={save}>
              {(v) => (
                <FormSection title="Notifications" description="We always email you about sign-ins and billing.">
                  <FormFieldGroup legend="By email">
                    <Checkbox name="comments" label="Comments" helperText="When someone comments on your work." defaultChecked={v.comments === 'on'} />
                    <Checkbox name="mentions" label="Mentions" helperText="When someone mentions you." defaultChecked={v.mentions === 'on'} />
                  </FormFieldGroup>
                  <RadioGroup
                    label="Push notifications"
                    name="push"
                    defaultValue={v.push}
                    options={[
                      { value: 'everything', label: 'Everything' },
                      { value: 'mentions', label: 'Only mentions' },
                      { value: 'none', label: 'No push notifications' },
                    ]}
                  />
                </FormSection>
              )}
            </SectionForm>
          </div>
        </div>
      </div>
    </AppShell>
  )
}

const sectionLabel = (id: SettingsSection) => SECTIONS.find((s) => s.id === id)?.label

/**
 * One section's form. Discard remounts the fields from the saved values;
 * Save stores what the form sends.
 */
function SectionForm({
  id,
  hidden,
  saved,
  onSave,
  children,
}: {
  id: SettingsSection
  hidden: boolean
  saved: Values
  onSave: OnSave
  children: (values: Values) => ReactNode
}) {
  const [version, setVersion] = useState(0)
  const [status, setStatus] = useState('')
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSave(id, Object.fromEntries(new FormData(e.currentTarget)) as Values)
    // Remount from the new saved values: Base UI fields read their default once.
    setVersion((n) => n + 1)
    setStatus('Saved.')
  }
  return (
    <form aria-label={sectionLabel(id)} hidden={hidden} className={styles.panel} onSubmit={submit} onChange={() => setStatus('')}>
      <div key={version}>{children(saved)}</div>
      <SaveBar
        status={status}
        onDiscard={() => {
          setVersion((n) => n + 1)
          setStatus('Changes discarded.')
        }}
      />
    </form>
  )
}

/**
 * The actions at the end of a section, stuck to the bottom of the view
 * while the form runs past it, so Save is in reach on a long form. Both
 * buttons are always there: a disabled Save cannot say why.
 */
function SaveBar({ status, onDiscard, saveLabel = 'Save' }: { status: string; onDiscard: () => void; saveLabel?: string }) {
  return (
    <div className={styles.saveBar}>
      <p role="status" className={styles.status}>
        {status}
      </p>
      <div className={styles.actions}>
        <Button type="button" variant="secondary" appearance="ghost" onClick={onDiscard}>
          Discard
        </Button>
        <Button type="submit">{saveLabel}</Button>
      </div>
    </div>
  )
}

/** Change password: the current one, to prove it is you, then the new one with its rules. */
function PasswordForm({ onSave }: { onSave?: OnSave }) {
  const [version, setVersion] = useState(0)
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState<{ current?: string; next?: string }>({})
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const currentPassword = String(data.get('currentPassword') ?? '')
    const newPassword = String(data.get('newPassword') ?? '')
    const found = {
      current: currentPassword ? undefined : 'Enter your current password.',
      next: defaultPasswordRules.every((r) => r.test(newPassword)) ? undefined : 'Choose a password that meets every rule.',
    }
    setErrors(found)
    if (found.current || found.next) {
      setStatus('')
      // Focus the first field to fix, as the sign-up form does.
      form.querySelector<HTMLInputElement>(found.current ? '[name="currentPassword"]' : '[name="newPassword"]')?.focus()
      return
    }
    onSave?.('account', { currentPassword, newPassword })
    setVersion((n) => n + 1)
    setStatus('Password changed.')
  }
  return (
    <form aria-label="Change password" className={styles.panel} onSubmit={submit} onChange={() => setStatus('')} noValidate>
      <FormSection key={version} title="Password" description="Use a password you do not use anywhere else.">
        <PasswordInput
          label="Current password"
          name="currentPassword"
          isFullWidth
          validationState={errors.current ? 'error' : 'default'}
          helperText={errors.current}
        />
        <PasswordInput
          label="New password"
          name="newPassword"
          autoComplete="new-password"
          rules={defaultPasswordRules}
          isFullWidth
          validationState={errors.next ? 'error' : 'default'}
          helperText={errors.next}
        />
      </FormSection>
      <SaveBar
        status={status}
        saveLabel="Change password"
        onDiscard={() => {
          setVersion((n) => n + 1)
          setErrors({})
          setStatus('')
        }}
      />
    </form>
  )
}

/** What cannot be undone, last on the page and confirmed by typing the username. */
function DangerZone({ username, onDeleteAccount }: { username: string; onDeleteAccount?: () => void }) {
  return (
    <FormSection
      className={styles.danger}
      title="Delete account"
      description="Your profile, projects and files are deleted for good. This cannot be undone."
    >
      <div>
        <ConfirmDialog
          title="Delete your account?"
          description="Your profile, projects and files are deleted for good. You cannot undo this."
          confirmLabel="Delete account"
          confirmText={username}
          onConfirm={() => onDeleteAccount?.()}
          trigger={
            <Button variant="destructive" appearance="outlined">
              Delete account
            </Button>
          }
        />
      </div>
    </FormSection>
  )
}
