import React from 'react'
import {AppProvider} from "./context/AppContext"
import {ChangeTheme} from './components/ChangeTheme'
export const AppUseContext = () => {
  return (
    <AppProvider>
        <ChangeTheme />
    </AppProvider>
  )
}

