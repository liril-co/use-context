import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AppUseContext} from './AppUseContext.jsx'
import "./styles/styles.css"
import { AppProvider } from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <AppUseContext />
    </AppProvider>
  </StrictMode>,
)
