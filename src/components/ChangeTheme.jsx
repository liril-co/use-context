import React, { useEffect } from 'react'
import {useAppContext} from "../context/AppContext"
export const ChangeTheme = () => {
    const {theme, handleTheme}= useAppContext()

    useEffect(()=>{
        document.body.className= theme;
    }, [theme])
  return( 
    <>
    <button onClick={handleTheme}>Change Theme</button>
    <p>Theme changed to: {theme}</p>
    </>
  )
}
