import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import App from './app/App'
import './index.css'

Pear.updates(() => Pear.reload())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
