import type { FormEvent } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { Avatar } from '@/components/atomic-elements/Avatar'
import { Button } from '@/components/buttons/Button'
import { Checkbox } from '@/components/controls/Checkbox'
import { RadioGroup } from '@/components/controls/Radio'
import { Select } from '@/components/inputs/Select'
import { TextInput } from '@/components/inputs/TextInput'
import { Textarea } from '@/components/inputs/Textarea'
import { Modal } from '@/components/overlays/Modal'
import { FormActions, FormFullWidth, FormSection } from './FormLayouts'

const onSubmit = fn()
const submit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  onSubmit(Object.fromEntries(new FormData(e.currentTarget)))
}

const countries = ['Vietnam', 'Singapore', 'Japan', 'Germany', 'United States']

const personal = (
  <>
    <TextInput label="First name" name="firstName" autoComplete="given-name" isFullWidth defaultValue="Ava" />
    <TextInput label="Last name" name="lastName" autoComplete="family-name" isFullWidth defaultValue="Stone" />
    <FormFullWidth>
      <TextInput label="Email address" name="email" type="email" autoComplete="email" isFullWidth required defaultValue="ava.stone@example.com" />
    </FormFullWidth>
    <Select label="Country" name="country" options={countries} defaultValue="Vietnam" isFullWidth />
    <TextInput label="City" name="city" autoComplete="address-level2" isFullWidth />
  </>
)

const meta = {
  title: 'Patterns/Application UI/Form Layouts',
  component: FormSection,
  // Definition of done: a11y must pass as an error, ahead of the global switch in preview.tsx.
  parameters: { a11y: { test: 'error' }, layout: 'padded' },
  args: { title: 'Personal information', children: personal },
  argTypes: { children: { control: false }, footer: { control: false } },
  beforeEach: () => onSubmit.mockClear(),
} satisfies Meta<typeof FormSection>

export default meta
type Story = StoryObj<typeof meta>

/** A settings page: each section's title and description in a column beside its fields. */
export const SettingsSections: Story = {
  render: () => (
    <form aria-label="Account settings" onSubmit={submit} style={{ maxInlineSize: '64rem' }}>
      <FormSection title="Profile" description="This is shown on your public profile, so be careful what you share.">
        <TextInput label="Username" name="username" prefix="zweihander.app/" isFullWidth defaultValue="avastone" />
        <Textarea label="About" name="about" helperText="A few sentences about yourself." isFullWidth minRows={3} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <Avatar initials="AS" size="lg" aria-label="Ava Stone" />
          <Button type="button" variant="secondary" appearance="outlined" size="sm">
            Change photo
          </Button>
        </div>
      </FormSection>
      <FormSection title="Personal information" description="Use an address where you can receive mail." columns={2}>
        {personal}
      </FormSection>
      <FormSection title="Notifications" description="We will always tell you about important changes to your account.">
        <fieldset style={{ display: 'grid', gap: 'var(--space-3)', margin: 0, padding: 0, border: 0 }}>
          <legend style={{ marginBlockEnd: 'var(--space-3)', fontWeight: 500 }}>By email</legend>
          <Checkbox name="comments" label="Comments" helperText="When someone comments on your posting." defaultChecked />
          <Checkbox name="offers" label="Offers" helperText="When a candidate accepts or rejects an offer." />
        </fieldset>
        <RadioGroup
          label="Push notifications"
          name="push"
          defaultValue="mentions"
          options={[
            { value: 'everything', label: 'Everything' },
            { value: 'mentions', label: 'Only mentions' },
            { value: 'none', label: 'No push notifications' },
          ]}
        />
      </FormSection>
      <FormActions style={{ paddingBlockStart: 'var(--space-8)' }}>
        <Button type="button" variant="secondary" appearance="ghost">
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </FormActions>
    </form>
  ),
  play: async ({ canvas }) => {
    const form = canvas.getByRole('form', { name: 'Account settings' })
    await expect(within(form).getAllByRole('heading', { level: 2 }).map((h) => h.textContent)).toEqual(['Profile', 'Personal information', 'Notifications'])
    // Split: the section intro sits beside its fields at this width.
    const intro = canvas.getByRole('heading', { name: 'Profile' }).getBoundingClientRect()
    const field = canvas.getByRole('textbox', { name: 'Username' }).getBoundingClientRect()
    await expect(field.left).toBeGreaterThan(intro.right)
    await userEvent.type(canvas.getByRole('textbox', { name: 'City' }), 'Nha Trang')
    await userEvent.click(canvas.getByRole('button', { name: 'Save' }))
    await expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ username: 'avastone', city: 'Nha Trang', country: 'Vietnam', comments: 'on', push: 'mentions' }))
  },
}

/** One section on a card, fields two to a row, the actions in the card's bottom band. */
export const StackedInCard: Story = {
  render: () => (
    <form aria-label="Personal information" onSubmit={submit} style={{ maxInlineSize: '40rem' }}>
      <FormSection
        layout="stacked"
        isCard
        columns={2}
        title="Personal information"
        description="Use an address where you can receive mail."
        footer={
          <FormActions>
            <Button type="button" variant="secondary" appearance="ghost">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </FormActions>
        }
      >
        {personal}
      </FormSection>
    </form>
  ),
  play: async ({ canvas }) => {
    const first = canvas.getByRole('textbox', { name: 'First name' }).getBoundingClientRect()
    const last = canvas.getByRole('textbox', { name: 'Last name' }).getBoundingClientRect()
    const email = canvas.getByRole('textbox', { name: /Email address/ }).getBoundingClientRect()
    // Two to a row; the email field spans both.
    await expect(Math.abs(first.top - last.top)).toBeLessThan(2)
    await expect(email.width).toBeGreaterThan(first.width * 1.8)
    await userEvent.click(canvas.getByRole('button', { name: 'Save' }))
    await expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ firstName: 'Ava', email: 'ava.stone@example.com' }))
  },
}

/** A short form in a Modal: the submit button lives in the footer and names the form it submits. */
export const InModal: Story = {
  render: () => (
    <Modal
      trigger={<Button>Invite member</Button>}
      title="Invite a member"
      description="They get an email with a link to join the workspace."
      footer={
        <FormActions>
          <Button type="button" variant="secondary" appearance="ghost" data-close>
            Cancel
          </Button>
          <Button type="submit" form="invite">
            Send invite
          </Button>
        </FormActions>
      }
    >
      <form id="invite" aria-label="Invite a member" onSubmit={submit} style={{ display: 'grid', gap: 'var(--space-4)' }}>
        <TextInput label="Email address" name="email" type="email" isFullWidth required />
        <Select label="Role" name="role" options={['Viewer', 'Editor', 'Admin']} defaultValue="Editor" isFullWidth />
      </form>
    </Modal>
  ),
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Invite member' }))
    const dialog = within(await within(document.body).findByRole('dialog', { name: 'Invite a member' }))
    await userEvent.type(dialog.getByRole('textbox', { name: /Email address/ }), 'leo@example.com')
    await userEvent.click(dialog.getByRole('button', { name: 'Send invite' }))
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ email: 'leo@example.com', role: 'Editor' }))
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(within(document.body).queryByRole('dialog')).toBeNull())
  },
}

/** A split section stacks by itself when its container is narrow. */
export const Narrow: Story = {
  args: { title: 'Personal information', description: 'Use an address where you can receive mail.', columns: 2 },
  decorators: [(Story) => <div style={{ inlineSize: 360 }}>{Story()}</div>],
  play: async ({ canvas }) => {
    const intro = canvas.getByRole('heading', { name: 'Personal information' }).getBoundingClientRect()
    const first = canvas.getByRole('textbox', { name: 'First name' }).getBoundingClientRect()
    const last = canvas.getByRole('textbox', { name: 'Last name' }).getBoundingClientRect()
    await expect(first.top).toBeGreaterThan(intro.bottom)
    await expect(last.top).toBeGreaterThan(first.bottom)
  },
}
