const useLocalStoral = () =>{
    const setAuth = (auth)=>{
        localStorage.setItem('auth', auth)

    }

    const setToken = (token) =>{
        localStorage.setItem("token", token)
    }


    const getAuth = () =>{
        return localStorage.getItem("auth")
    }

    const getToken = () =>{
       return localStorage.getItem("token")
    }


    return {
        setAuth,
        setToken,
        getAuth,
        getToken
    }
}

export default useLocalStoral