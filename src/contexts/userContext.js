import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({ children }) => {
    const [login, setLogin] = useState(false)

    return (
        <UserContext.Provider value={{login, setLogin}}>
            {children}
        </UserContext.Provider>
    )
}