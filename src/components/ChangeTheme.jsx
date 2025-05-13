import React from 'react'
import {useAppContext} from "../context/AppContext"
export const ChangeTheme = () => {
    const {theme, handleTheme}= useAppContext()

  return( 
    <>
    <button onClick={handleTheme}>Change Theme</button>
    <p>Theme changed to: {theme}</p>
    </>
  )
}
