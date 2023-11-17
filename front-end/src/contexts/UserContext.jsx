import { createContext,useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({"employeeRole":' '});


const loginUser = (userData) => {
    setUser(userData)
}

const logoutUser = () => {
    setUser(null)
}

return(
    <UserContext.Provider value={{user,loginUser,logoutUser}}>
        {children}
    </UserContext.Provider>
)

}