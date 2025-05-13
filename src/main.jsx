import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AppUseContext} from './AppUseContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppUseContext />
  </StrictMode>,
)
