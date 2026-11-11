import { Button } from '@/components/buttons/Button'
import { EmptyState } from '@/components/states/EmptyState'
import { PageHeader } from '../ui'

const title = (s: string) => s.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase())

/** Sections in the sitemap that the pitch does not demo. */
export function Placeholder({ section }: { section: string }) {
  return (
    <>
      <PageHeader title={title(section)} />
      <EmptyState
        title={`${title(section)} isn't in this demo`}
        description="The pitch covers Home, Reports, Leads, Customers, Listings, Open Homes, Offers and Vendor reports."
        action={<Button href="#/home">Go to Home</Button>}
      />
    </>
  )
}
