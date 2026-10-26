import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { expectAnatomy } from '../../../.storybook/blocks'
import { mediaRules } from '@/test/story-helpers'
import { Pagination, paginationItems } from './Pagination'

const meta = {
  title: 'Components/Navigation/Pagination',
  tags: ['beta'],
  component: Pagination,
  args: { totalPages: 10, defaultPage: 1, onPageChange: fn() },
  // These descriptions are the docs' API table and the Playground's props panel.
  argTypes: {
    totalPages: {
      description: 'How many pages there are. Below 1 counts as 1. Leave it out when `totalItems` is set: the count then comes from `totalItems` and `pageSize`.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    page: {
      description: 'The current page, 1-based, when you control it. Pair with `onPageChange`.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    defaultPage: {
      description: 'The page shown first, when Pagination keeps its own state.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '1' } },
    },
    onPageChange: {
      description: 'Called with the new page. Not called for the page already shown.',
      control: false,
      table: { type: { summary: '(page: number) => void' } },
    },
    siblingCount: {
      description: 'Pages shown either side of the current one.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '1' } },
    },
    boundaryCount: {
      description: 'Pages always shown at each end.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '1' } },
    },
    size: {
      description: '24px (`sm`) or 32px (`md`) controls, from the control tiers.',
      control: 'inline-radio',
      options: ['sm', 'md'],
      table: { type: { summary: "'sm' | 'md'" }, defaultValue: { summary: "'md'" } },
    },
    getHref: {
      description: 'Render links instead of buttons, for pages with their own URL: they can be opened in a new tab and shared.',
      control: false,
      table: { type: { summary: '(page: number) => string' } },
    },
    totalItems: {
      description: 'How many rows there are in all. Shows the summary ("21–40 of 340") and, without `totalPages`, sets the page count from `pageSize`.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    pageSize: {
      description: 'Rows per page, when you control it. Pair with `onPageSizeChange`.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    defaultPageSize: {
      description: 'Rows per page at first, when Pagination keeps its own state.',
      control: 'number',
      table: { type: { summary: 'number' }, defaultValue: { summary: '20' } },
    },
    pageSizeOptions: {
      description: 'The choices for a "Rows per page" select at the end. Without it there is no select.',
      control: 'object',
      table: { type: { summary: 'number[]' } },
    },
    onPageSizeChange: {
      description: 'Called with the new rows per page. The page then moves so the first row shown stays in view, through `onPageChange`.',
      control: false,
      table: { type: { summary: '(pageSize: number) => void' } },
    },
    'aria-label': {
      description: 'Names the `<nav>` landmark. Change it when a page has two paginations.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Pagination'" } },
    },
  },
  excludeStories: ['anatomyParts'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Pagination' })
    await expect(within(nav).getByRole('button', { name: 'Page 1' })).toHaveAttribute('aria-current', 'page')
    await expect(within(nav).getByRole('button', { name: 'Previous page' })).toBeDisabled()
    await userEvent.click(within(nav).getByRole('button', { name: 'Next page' }))
    await expect(args.onPageChange).toHaveBeenLastCalledWith(2)
    await expect(within(nav).getByRole('button', { name: 'Page 2' })).toHaveAttribute('aria-current', 'page')
    await userEvent.click(within(nav).getByRole('button', { name: 'Page 10' }))
    await expect(within(nav).getByRole('button', { name: 'Next page' })).toBeDisabled()
    // Native buttons: Enter and Space both activate.
    within(nav).getByRole('button', { name: 'Previous page' }).focus()
    await userEvent.keyboard('{Enter}')
    await expect(args.onPageChange).toHaveBeenLastCalledWith(9)
    await userEvent.keyboard(' ')
    await expect(args.onPageChange).toHaveBeenLastCalledWith(8)
  },
}

export const Middle: Story = { args: { defaultPage: 6, totalPages: 20 } }

export const Small: Story = {
  args: { size: 'sm', defaultPage: 4 },
  play: async ({ canvas }) => {
    const page = canvas.getByRole('button', { name: 'Page 4' })
    await expect(page.getBoundingClientRect().height).toBe(24)
    // 44px on coarse pointers. The runner's pointer is fine, so read the rule the media query applies.
    await expect(mediaRules('pointer: coarse', page).find((r) => r.style.blockSize)?.style.blockSize).toBe('var(--target-coarse)')
  },
}

export const FewPages: Story = {
  args: { totalPages: 4, defaultPage: 2 },
  play: async ({ canvas }) => {
    // No ellipsis when every page fits.
    await expect(canvas.getAllByRole('button', { name: /^Page / })).toHaveLength(4)
  },
}

/** Pages with their own URL: links, not buttons. */
export const Links: Story = {
  args: { defaultPage: 3, getHref: (p) => `#page-${p}` },
  play: async ({ args, canvas, canvasElement }) => {
    await expect(canvas.getByRole('link', { name: 'Page 4' })).toHaveAttribute('href', '#page-4')
    // Keep the test page where it is while links are clicked.
    canvasElement.addEventListener('click', (e) => e.preventDefault())
    // Clicking the page already shown does not report a change.
    ;(args.onPageChange as ReturnType<typeof fn>).mockClear()
    await userEvent.click(canvas.getByRole('link', { name: 'Page 3' }))
    await expect(args.onPageChange).not.toHaveBeenCalled()
    await expect(canvas.getByRole('link', { name: 'Page 3' })).toHaveAttribute('aria-current', 'page')
    // At the first page, Previous has nowhere to go: no href, aria-disabled.
    await userEvent.click(canvas.getByRole('link', { name: 'Page 1' }))
    const previous = canvas.getByRole('link', { name: 'Previous page' })
    await expect(previous).not.toHaveAttribute('href')
    await expect(previous).toHaveAttribute('aria-disabled', 'true')
  },
}

/** A table footer: the rows shown out of how many, the pages, and how many rows a page holds. */
export const WithSummary: Story = {
  args: { totalPages: undefined, totalItems: 340, pageSizeOptions: [10, 20, 50, 100], onPageSizeChange: fn() },
  play: async ({ args, canvas }) => {
    const nav = canvas.getByRole('navigation', { name: 'Pagination' })
    const status = within(nav).getByRole('status')
    await expect(status).toHaveTextContent('1–20 of 340')
    // 340 rows at 20 a page: 17 pages.
    await userEvent.click(within(nav).getByRole('button', { name: 'Page 17' }))
    // The last page holds the remainder.
    await expect(status).toHaveTextContent('321–340 of 340')
    await userEvent.click(within(nav).getByRole('button', { name: 'Previous page' }))
    await expect(status).toHaveTextContent('301–320 of 340')
    // The visible label is hidden from the tree: the combobox already carries the name.
    await expect(within(nav).getByText('Rows per page')).toHaveAttribute('aria-hidden', 'true')
    // 50 a page: row 301 is on page 7, so the reader stays where they were.
    await userEvent.click(within(nav).getByRole('combobox', { name: 'Rows per page' }))
    await userEvent.click(await within(document.body).findByRole('option', { name: '50' }))
    await waitFor(() => expect(within(document.body).queryByRole('listbox')).toBeNull())
    await expect(args.onPageSizeChange).toHaveBeenLastCalledWith(50)
    await expect(args.onPageChange).toHaveBeenLastCalledWith(7)
    await expect(status).toHaveTextContent('301–340 of 340')
    await expect(within(nav).queryByRole('button', { name: 'Page 8' })).not.toBeInTheDocument()
  },
}

/** Large counts are grouped for reading. No select without `pageSizeOptions`. */
export const SummaryLargeCount: Story = {
  tags: ['!dev'],
  args: { totalPages: undefined, totalItems: 12500, defaultPageSize: 50, defaultPage: 3 },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('status')).toHaveTextContent('101–150 of 12,500')
    await expect(canvas.queryByRole('combobox')).not.toBeInTheDocument()
  },
}

/** No rows: "0 of 0", one page, both steps disabled. */
export const SummaryEmpty: Story = {
  tags: ['!dev'],
  args: { totalPages: undefined, totalItems: 0 },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('status')).toHaveTextContent('0 of 0')
    await expect(canvas.getByRole('button', { name: 'Previous page' })).toBeDisabled()
    await expect(canvas.getByRole('button', { name: 'Next page' })).toBeDisabled()
  },
}

/** `totalItems` wins over a `totalPages` that disagrees, so the summary never runs past the end. */
export const TotalItemsWins: Story = {
  tags: ['!dev'],
  args: { totalPages: 20, totalItems: 340, defaultPage: 20 },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Page 17' })).toHaveAttribute('aria-current', 'page')
    await expect(canvas.getByRole('status')).toHaveTextContent('321–340 of 340')
  },
}

/** The range logic: first and last page always, the current one with a sibling each side, and "…" only where it hides two or more pages. */
export const Ranges: Story = {
  play: async () => {
    await expect(paginationItems(1, 10)).toEqual([1, 2, 3, 4, 5, 'end-ellipsis', 10])
    await expect(paginationItems(5, 10)).toEqual([1, 'start-ellipsis', 4, 5, 6, 'end-ellipsis', 10])
    await expect(paginationItems(10, 10)).toEqual([1, 'start-ellipsis', 6, 7, 8, 9, 10])
    // A single hidden page is shown rather than replaced by "…".
    await expect(paginationItems(4, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
    await expect(paginationItems(1, 1)).toEqual([1])
    await expect(paginationItems(1, 0)).toEqual([])
  },
}

/** The parts the Specs tab numbers, each found by a selector inside the `Anatomy` story. */
export const anatomyParts = [
  { name: 'Summary', selector: '[role="status"]', description: 'The rows shown out of the total, "21–40 of 340". Only with `totalItems`; announced politely when it changes.' },
  { name: 'Previous', selector: 'li:first-child > button', description: 'Chevron. Disabled on the first page.' },
  { name: 'Page', selector: 'li:nth-child(2) > button', description: 'A square ghost control with the number, in tabular figures.' },
  { name: 'Ellipsis', selector: 'li > span[aria-hidden="true"]', description: '"…" where two or more pages are skipped. Decorative.' },
  { name: 'Current page', selector: '[aria-current="page"]', description: 'The only filled control.' },
  { name: 'Next', selector: 'li:last-child > button', description: 'Chevron. Disabled on the last page.' },
  { name: 'Rows per page', selector: '[role="combobox"]', description: 'A Select of `pageSizeOptions`. Only when they are passed.' },
]

/** Every part present: a page in the middle of a long list. */
export const Anatomy: Story = {
  tags: ['!dev'],
  args: { totalPages: undefined, totalItems: 400, defaultPage: 6, pageSizeOptions: [20, 50] },
  play: async ({ canvasElement }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts)
    await expect(found[4]).toHaveTextContent('6')
  },
}

const narrow = { inlineSize: '24rem' }

/** Guidelines, Do: the default range keeps the control short and its width steady. */
export const DoKeepItShort: Story = {
  args: { totalPages: 50, defaultPage: 25 },
  render: (args) => (
    <div style={narrow}>
      <Pagination {...args} />
    </div>
  ),
}

/** Guidelines, Don't: every page number at once wraps and buries the current page. */
export const DontShowEveryPage: Story = {
  tags: ['!dev'],
  args: { totalPages: 50, defaultPage: 25, siblingCount: 50 },
  render: (args) => (
    <div style={narrow}>
      <Pagination {...args} />
    </div>
  ),
}

/** Specs, States: two pages on the first, so Previous shows disabled; small enough for a States cell. */
export const StatesExample: Story = {
  tags: ['!dev'],
  args: { totalPages: 2, defaultPage: 1 },
}
