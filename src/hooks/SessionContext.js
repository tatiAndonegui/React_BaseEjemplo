import React, { createContext, useState, useContext } from 'react';

export const SessionContext = createContext();
export const SessionProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    return (
        <SessionContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
            {children}
        </SessionContext.Provider>
    );
};



export const useSession = () => {
    const context = useContext(SessionContext);
    if (context === undefined) {
        throw new Error('useSession debe ser usado dentro de un SessionProvider');
    }
    return context;
};