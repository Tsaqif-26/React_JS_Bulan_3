import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

export function UserProvider({children}) {
    const [user, setUser] = useState({name: "" , email: "" , isLoggedIn: false})

    const login = () => setUser({name: "Qyoo", email:"kyo@gmail.com", isLoggedIn: true})
    const logout = () => setUser({name: "", email: "", isLoggedIn: false})
    const updateUser = (name,email) => setUser({...user, name,email})

    return (
        <div>
            <UserContext.Provider value={{user,login,logout,updateUser}}>
                {children}
            </UserContext.Provider>
        </div>
    )
}
    // Contoh Custom Hook

    export function useUserContext() {
        const context =  useContext(UserContext)
        if(!context) {
            throw new Error("Ada Error");
        }
        return context
    }
