import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Docs-only: the tokens name these faces, but the package never loads a
// font for its consumers.
import '@fontsource-variable/inter'
import '@fontsource-variable/newsreader'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
