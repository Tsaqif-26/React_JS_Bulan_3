import { createContext, useState } from "react";

export const NotifContext = createContext()

export function NotifProvider({children}) {

    const [count, setCount] = useState(0)

    const addNotif = () => setCount((c) => c+ 1)
    const clearNotif = () => setCount(0)

    return (
        <NotifContext.Provider value={{count, addNotif, clearNotif}}>
            {children}
        </NotifContext.Provider>
    )
}