import { useContext, createContext, useState } from "react";

const Appcntx= createContext()

export const AppProvider= ({children})=>{
    const [theme, setTheme]= useState("light")
    const [fontSize, setFontSize]= useState(16)

    const handleTheme= ()=>{ 
        setTheme((prev)=> (prev == "light"?"dark":"light"))    
    }
    return (
        <Appcntx.Provider value={{
            theme,
            handleTheme,
            fontSize,
            setFontSize
        }}>
            {children}
        </Appcntx.Provider>
    )
}

export const useAppContext = () =>useContext(Appcntx)