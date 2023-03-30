import { UserContext } from "../contexts/userContent";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ProtectDasboard = ({children}) => {
    const navigate = useNavigate()
    const {auth} = useContext(UserContext)
    console.log(auth)
    useEffect(()=>{
        if(auth === null){
            return navigate("/login")
        }
    })


    return (  
        children
    );
}
 
export default ProtectDasboard;



