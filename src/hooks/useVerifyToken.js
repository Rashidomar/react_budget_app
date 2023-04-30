import useLocalStoral from "./useLocalsotrage";
import { useNavigate } from 'react-router-dom';

const useVerifyToken = () => {
  
  const navigate = useNavigate();
  const {getToken} = useLocalStoral()
  const userToken = getToken()

  const checkTokenState = async () => {
    try{
      const response = await fetch("http://localhost:5000/verifyToken", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bear ${userToken}`,
        },
      });
      const data = await response.json();
      console.log(data);
      return data;
    }catch(error){
      // navigate("/login");
      // window.location.reload();
      
    }
  
  };

  return {
    checkTokenState,
  };
};

export default useVerifyToken;
