import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import './crm.css'
import { ToastProvider } from '@/components/notifications/Toast'
import { Shell } from './Shell'
import { Overview } from './screens/Overview'
import { Today } from './screens/Today'
import { Pipeline } from './screens/Pipeline'
import { ListingPage } from './screens/Listing'
import { OpenHome } from './screens/OpenHome'
import { VendorReport } from './screens/VendorReport'
import { Contact } from './screens/Contact'
import { Leads } from './screens/Leads'
import { Placeholder } from './screens/Placeholder'

/** `#/listings/14-ruby/price?x=1` → path segments and query. Hash routing: the demo is static files on any host. */
function useRoute() {
  const read = () => {
    const [path, query = ''] = location.hash.replace(/^#\/?/, '').split('?')
    return { parts: path.split('/').filter(Boolean), query: new URLSearchParams(query) }
  }
  const [route, setRoute] = useState(read)
  useEffect(() => {
    const onChange = () => {
      setRoute(read())
      document.querySelector('main')?.scrollTo?.(0, 0)
    }
    addEventListener('hashchange', onChange)
    return () => removeEventListener('hashchange', onChange)
  }, [])
  return route
}

function App() {
  const { parts, query } = useRoute()
  const [section = 'home', id, tab] = parts

  // The open home is a phone screen: it brings its own frame, no shell.
  if (section === 'open-homes') return <OpenHome />

  const page = (() => {
    switch (section) {
      case 'home':
        return <Today />
      case 'reports':
        return <Overview />
      case 'listings':
        return id ? <ListingPage id={id} tab={tab} /> : <Pipeline key={query.get('gate') ?? ''} gate={query.get('gate')} />
      case 'vendor':
        return <VendorReport />
      case 'offers':
        return <ListingPage id="5-27-albert" tab="offers" />
      case 'customers':
        return <Contact />
      case 'leads':
        return <Leads />
      default:
        return <Placeholder section={section} />
    }
  })()

  // Customers/contacts share one nav entry; listing detail stays under Listings.
  return <Shell current={`#/${section}`}>{page}</Shell>
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider placement="bottom-right">
      <App />
    </ToastProvider>
  </StrictMode>,
)
