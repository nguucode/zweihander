import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Docs-only: the tokens name these faces, but the package never loads a
// font for its consumers.
import '../index.css'
import manifest from './manifest.json'
import { Playground, type Manifest } from './Playground'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* In development Storybook runs on its own port (npm run storybook). */}
    <Playground manifest={manifest as Manifest} storybookUrl={import.meta.env.DEV ? 'http://localhost:6006/' : undefined} />
  </StrictMode>,
)
