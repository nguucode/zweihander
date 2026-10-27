import { createRoot, type Root } from 'react-dom/client'
import { act, type ComponentType } from 'react'
import { composeStories, setProjectAnnotations } from '@storybook/react-vite'
import { afterEach, describe, expect, test } from 'vitest'
import { page } from 'vitest/browser'
import { within } from 'storybook/test'
import preview from '../.storybook/preview'

/* Visual regression: one story per component, light and dark, compared
   pixel by pixel against a baseline in __screenshots__/.

   Baselines are only valid from the machine that made them, so they are
   made on the CI runner (Linux, Chromium), never on a Mac: label the PR
   `update screenshots` and the Visual baselines workflow commits them.

   The story is the one that shows the most variants and states at once.
   Overlays get their open state through args, since a closed popup is only
   its trigger. Stories render without their play function, unless `play`
   is set: a toast only exists once something has called for it. */
const STORIES: Record<string, { story: string; args?: Record<string, unknown>; play?: true }> = {
  'atomic-elements/Avatar': { story: 'Colors' },
  'atomic-elements/Badge': { story: 'Variants' },
  'atomic-elements/Divider': { story: 'Sizes' },
  'atomic-elements/Kbd': { story: 'Sizes' },
  'atomic-elements/Tag': { story: 'Matrix' },
  'buttons/Button': { story: 'Matrix' },
  'buttons/ToggleButton': { story: 'Matrix' },
  'charts/BarChart': { story: 'Stacked' },
  'charts/ChartLegend': { story: 'Toggles' },
  'charts/LineChart': { story: 'MultiSeries' },
  'charts/PieChart': { story: 'Default' },
  'charts/Sparkline': { story: 'Default' },
  'controls/Checkbox': { story: 'Variants' },
  'controls/ColorPicker': { story: 'Panel' },
  'controls/Radio': { story: 'Variants' },
  'controls/Rating': { story: 'Sizes' },
  'controls/Slider': { story: 'Range' },
  'controls/Switch': { story: 'Variants' },
  'data-display/Accordion': { story: 'Default' },
  'data-display/Calendar': { story: 'Range' },
  'data-display/Card': { story: 'Appearances' },
  'data-display/Carousel': { story: 'Default' },
  'data-display/Collapse': { story: 'Open' },
  'data-display/ColumnChooser': { story: 'Open' },
  'data-display/Table': { story: 'Selectable' },
  'inputs/Combobox': { story: 'Sizes' },
  'inputs/DatePicker': { story: 'Default' },
  'inputs/DateRangePicker': { story: 'Default' },
  'inputs/Field': { story: 'Validation' },
  'inputs/FileUploader': { story: 'WithStatus' },
  'inputs/NumberInput': { story: 'Sizes' },
  'inputs/OTPInput': { story: 'Sizes' },
  'inputs/PasswordInput': { story: 'Sizes' },
  'inputs/Search': { story: 'Sizes' },
  'inputs/Select': { story: 'Sizes' },
  'inputs/TextInput': { story: 'Sizes' },
  'inputs/Textarea': { story: 'Sizes' },
  'loaders/ProgressBar': { story: 'Variants' },
  'loaders/Skeleton': { story: 'Appearances' },
  'loaders/Spinner': { story: 'Variants' },
  'navigation/Breadcrumbs': { story: 'Default' },
  'navigation/Link': { story: 'Variants' },
  'navigation/CommandPalette': { story: 'Default', args: { defaultOpen: true } },
  'navigation/Menu': { story: 'Default', args: { defaultOpen: true } },
  'navigation/Menubar': { story: 'Open' },
  'navigation/ContextMenu': { story: 'Open' },
  'navigation/Pagination': { story: 'WithSummary' },
  'navigation/Stepper': { story: 'Default' },
  'navigation/Tabs': { story: 'Default' },
  'notifications/Alert': { story: 'Variants' },
  'notifications/InlineAlert': { story: 'Variants' },
  'notifications/Toast': { story: 'Variants', play: true },
  'overlays/Drawer': { story: 'Default', args: { defaultOpen: true } },
  'overlays/ConfirmDialog': { story: 'TypeToConfirm', args: { defaultOpen: true } },
  'overlays/Modal': { story: 'Default', args: { defaultOpen: true } },
  'overlays/Popover': { story: 'Open' },
  'overlays/Tooltip': { story: 'LongContent' },
  'patterns/application-ui/NavSidebar': { story: 'Default' },
  'patterns/application-ui/TopBar': { story: 'WithNavigation' },
  'patterns/application-ui/AppContent': { story: 'Flat' },
  'templates/application-ui/AppShell': { story: 'WithSidebar' },
  'templates/application-ui/Settings': { story: 'Default' },
  'templates/application-ui/Home': { story: 'Default' },
  'patterns/application-ui/DataTablePage': { story: 'ToolbarAndPagination' },
  'patterns/application-ui/DescriptionList': { story: 'Columns' },
  'patterns/application-ui/FormLayouts': { story: 'SettingsSections' },
  'patterns/application-ui/Stats': { story: 'WithTrend' },
  'patterns/application-ui/CardHeading': { story: 'WithIconAndRule' },
  'patterns/application-ui/FilterBar': { story: 'Default' },
  'patterns/application-ui/SavedViews': { story: 'Default' },
  'patterns/application-ui/TableChartSwitch': { story: 'Default' },
  'patterns/application-ui/InlineEdit': { story: 'Default' },
  'patterns/application-ui/Session': { story: 'Inactive' },
  'patterns/application-ui/VerticalNav': { story: 'Grouped' },
  'patterns/application-ui/ActionPanel': { story: 'Danger' },
  'patterns/application-ui/Feed': { story: 'WithComments' },
  'patterns/application-ui/ListContainer': { story: 'Appearances' },
  'patterns/application-ui/StackedList': { story: 'LinkedWithActions' },
  'patterns/application-ui/GridList': { story: 'WithCover' },
  'patterns/application-ui/MediaObject': { story: 'Variants' },
  'patterns/application-ui/ImportExport': { story: 'Export', args: { defaultOpen: true } },
  'patterns/application-ui/NotificationCenter': { story: 'WithTabs' },
  'states/EmptyState': { story: 'Default' },
  'states/ErrorState': { story: 'Default' },
  'states/SuccessState': { story: 'Default' },
  'templates/auth/ForgotPassword': { story: 'Default' },
  'templates/auth/MFAChallenge': { story: 'Default' },
  'templates/auth/ProgressiveSignIn': { story: 'Default' },
  'templates/auth/ResetPassword': { story: 'Default' },
  'templates/auth/SignIn': { story: 'Default' },
  'templates/auth/SignUp': { story: 'Default' },
  'templates/object-management/ProjectDetail': { story: 'Default' },
  'templates/object-management/Projects': { story: 'Default' },
}

const modules = import.meta.glob<Parameters<typeof composeStories>[0]>('./components/**/*.stories.tsx', {
  eager: true,
})
const name = (path: string) => path.replace('./components/', '').replace('.stories.tsx', '')

let root: Root | undefined
afterEach(() => {
  act(() => root?.unmount())
  root = undefined
  document.body.replaceChildren()
})

test('every component has a visual story', () => {
  expect(Object.keys(modules).map(name).sort()).toEqual(Object.keys(STORIES).sort())
})

setProjectAnnotations(preview)
// Lets act() wait for React to finish rendering, as a test renderer would.
Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true })

for (const theme of ['light', 'dark'] as const) {
  describe(theme, () => {
    for (const [path, mod] of Object.entries(modules)) {
      const entry = STORIES[name(path)]
      if (!entry) continue
      // The theme decorator reads the toolbar global, so dark is a global here too.
      const Story = (composeStories(mod, { initialGlobals: { theme } }) as Record<
        string,
        ComponentType & { load: () => Promise<void>; play?: (context: { canvasElement: HTMLElement; canvas: ReturnType<typeof within> }) => Promise<void> }
      >)[
        entry.story
      ]

      test(name(path), async () => {
        await Story.load()
        const container = document.createElement('div')
        container.style.padding = '16px'
        document.body.append(container)
        root = createRoot(container)
        await act(async () => root!.render(<Story {...entry.args} />))
        if (entry.play) await Story.play!({ canvasElement: container, canvas: within(container) })
        await document.fonts.ready
        // Charts draw in on mount, and the screenshot's animations option does not
        // stop CSS animations here: wait for the finite ones so every run sees the
        // finished frame. Infinite ones (spinner, shimmer) never finish; skip them.
        await Promise.all(
          document
            .getAnimations()
            .filter((a) => a.effect?.getTiming().iterations !== Infinity)
            .map((a) => a.finished.catch(() => undefined)),
        )

        await expect
          .element(page.elementLocator(document.body))
          .toMatchScreenshot(`${name(path).replaceAll('/', '-')}-${theme}`, {
            screenshotOptions: { animations: 'disabled' },
          })
      })
    }
  })
}
