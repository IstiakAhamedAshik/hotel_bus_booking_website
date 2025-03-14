'use client'
import { createContext } from "react";

export const AuthContext = createContext(({
    profile: null,
    status: 'unauthenticated',
    signOut: () => { }
}))

const AuthProvider = ({ children }) => {

   

    return <AuthContext.Provider value={{ }}>
        {children}
    </AuthContext.Provider>
}




export default AuthProvider
