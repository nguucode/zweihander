import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Pagination, paginationItems } from './Pagination'

const meta = {
  title: 'Components/Navigation/Pagination',
  tags: ['beta'],
  component: Pagination,
  args: { totalPages: 10, defaultPage: 1, onPageChange: fn() },
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'md'] }, getHref: { control: false } },
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
  },
}

export const Middle: Story = { args: { defaultPage: 6, totalPages: 20 } }

export const Small: Story = { args: { size: 'sm', defaultPage: 4 } }

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
