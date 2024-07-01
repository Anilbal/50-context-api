import { createContext,useContext, useState } from "react";
export const UserContext=createContext({
    isLoggedIn:false,
    user:null,
    setUser:()=>{}
})

export const UserProvider=({children})=>{
    const [user, setUser] = useState(null);
  const isLoggedIn = !!user;
    return (
        <UserContext.Provider value={{isLoggedIn,user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default function useData(){
    return useContext(UserContext)
}