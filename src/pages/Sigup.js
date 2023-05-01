import { Card, Form, Button} from "react-bootstrap";
import { useRef, useContext, useState } from "react";
import { UserContext } from "../contexts/userContent";
import { useNavigate } from "react-router-dom";
import { SIGNUP } from "../config/api_route";



const Signup = () => {
    const [validated, setValidated] = useState(false);
    const {auth, userToken} = useContext(UserContext)
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    if(auth && userToken){
        navigate("/dashboard")
    }

    const handleSignup = (e)=>{
        const form = e.currentTarget;
        console.log(form.checkValidity())
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
        }else{
        e.preventDefault()
        const username = usernameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const formData = {
            username:username,
            email:email,
            password:password
        }
        console.log(formData)
        fetch(SIGNUP.ROUTE, 
            {method: SIGNUP.METHOD,headers: SIGNUP.HEADER, body: JSON.stringify(formData)})
            .then((response)=>{   
            return response.json()
                }).then(data=>{
                    if(data.Message === "Successful"){
                        navigate("/login")
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
                        <Card.Title><Form.Text className="text-muted fs-2">Sign Up</Form.Text></Card.Title>
                    </div>
                    <Form noValidate validated={validated} onSubmit={handleSignup} >
                        <Form.Group className="mb-3" controlId="formBasicUsernamme">
                            <Form.Label>Username</Form.Label>
                            <Form.Control ref={usernameRef} type="text" placeholder="Enter username" required/>
                            <Form.Control.Feedback type="invalid">Please provide an username.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                            <Form.Control.Feedback type="invalid">Please provide an username.</Form.Control.Feedback>
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                            <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
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
 
export default Signup;