import React, { createContext, useState, useEffect } from 'react';
import AuthService from '../services/AuthService';
export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [role, setRole] = useState('');

    useEffect(() => {
        AuthService.isAuthenticated().then((jsonData) => {
            console.log("...isAuthenticated() function...", jsonData)
            setIsAuth(jsonData.isAuthenticated);
            setUser(jsonData.user);
            setRole(jsonData.role);
            setIsLoaded(true)}) }, [])
            
    return (
        <React.Fragment>
            {isLoaded ?  (<AuthContext.Provider 
                    value={{
                         user, setUser, isAuth, setIsAuth ,role,setRole}}>
                        {children}
                    </AuthContext.Provider>) :
                    (<div className="text-center">Loading...</div>)
            }
        </React.Fragment>
    )
}