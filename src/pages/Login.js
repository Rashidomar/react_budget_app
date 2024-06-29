import { Card, Form, Button} from "react-bootstrap";
import { useRef, useContext } from "react";
import { UserContext } from "../contexts/userContent";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../config/api_route";
import useLocalStoral from "../hooks/useLocalsotrage";
import { useState } from "react";

const Login = () => {
    const [validated, setValidated] = useState(false);
    const {auth, userToken} = useContext(UserContext)
    const {setToken, setAuth} = useLocalStoral()
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    if(auth && userToken){
        navigate("/dashboard")
    }
    
    const handleLogin = (e)=>{
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
        }else{
            e.preventDefault();
            const email = emailRef.current.value
            const password = passwordRef.current.value
            const formData = {
                email:email,
                password:password
            }
            console.log(formData)
            fetch(LOGIN.ROUTE,{ 
                method: LOGIN.METHOD, 
                headers: LOGIN.HEADER, 
                body: JSON.stringify(formData)})
                .then((response)=> {   
                return response.json()
            }).then(data=>{
                console.log(data)
                if(data.Message === "Successful"){
                    setAuth(true)
                    setToken(data.token)
                    navigate("/dashboard")
                    window.location.reload();
                }
    
            })
        }

    }
    return ( 
        <>
            <div className="d-flex justify-content-center">
            <Card style={{ width: '600px' }} className="bg-opacity-10 shadow p-1 bg-secondary">
                <Card.Body>
                    <div className="d-flex justify-content-center">
                        <Card.Title><Form.Text className="text-muted fs-2">Login</Form.Text></Card.Title>
                    </div>
                    <Form noValidate validated={validated} onSubmit={handleLogin} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" ref={emailRef} placeholder="Enter email"  required />
                            <Form.Control.Feedback type="invalid">
                                Please provide an email.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className="d-flex justify-content-center mt-1">
                            <Button variant="outline-primary" type="submit">Submit</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>              
            </div>
        </> 
    );
}
 
export default Login;