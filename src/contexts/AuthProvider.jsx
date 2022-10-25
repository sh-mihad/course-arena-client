import React, { createContext } from 'react';

export const UserAuth = createContext();
const AuthProvider = ({children}) => {

    const test = {name:"test hello"}

    return (
        <UserAuth.Provider value={test}>
            {children}
        </UserAuth.Provider>
    );
};

export default AuthProvider;