import { Card, Form, Button} from "react-bootstrap";
const Login = () => {
    return ( 
        <>
            <div className="d-flex justify-content-center">
            <Card style={{ width: '600px' }} className="bg-opacity-10 shadow p-1 bg-secondary">
                <Card.Body>
                    <div className="d-flex justify-content-center">
                        <Card.Title><Form.Text className="text-muted fs-2">Login</Form.Text></Card.Title>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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