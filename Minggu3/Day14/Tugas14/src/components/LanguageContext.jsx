import { createContext, useState } from "react";

export const LanguageContext = createContext()

export function LanguageProvider({children}) {

    const [language, setLanguage] = useState('English')

    const toggleLanguage = () => 
        setLanguage((prev) => (prev === 'English' ? 'Indonesia' : 'English'))

    return(
        <div style={{
        textAlign: "center",
        marginTop: "60px",
        backgroundColor: "#222",
        color: "#fff",
        padding: "40px",
        borderRadius: "12px",
        width: "350px",
        margin: "50px auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)"}}>
            
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
        </div>
    )
}