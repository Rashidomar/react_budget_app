import useLocalStoral from "./useLocalsotrage";

const useVerifyToken = () => {
  
  const {getToken} = useLocalStoral()
  const userToken = getToken()

  const checkTokenState = async () => {
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
  };

  return {
    checkTokenState,
  };
};

export default useVerifyToken;
