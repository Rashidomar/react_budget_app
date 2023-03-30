import { createContext, useState, useEffect } from 'react';
export const UserContext = createContext({})

const UserContextProvider = ({children})=>{

    const [userToken,setUserToken] = useState()
    const [auth, setAuth] = useState(false)

    useEffect(()=>{
        setUserToken(localStorage.getItem("token"));
        setAuth(localStorage.getItem("auth"));
    }, [])
    // console.log(userToken)


    return (
        <UserContext.Provider value={{userToken,setUserToken,auth, setAuth}}>
          {children}
        </UserContext.Provider>
      );
}

export default UserContextProvider 