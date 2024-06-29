import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom"
import {  useContext, } from "react";
import { UserContext } from "../contexts/userContent";



const NavBar = () => {
  const {auth,} = useContext(UserContext)
  const navigate = useNavigate()


  const handleLogout = ()=>{
      localStorage.removeItem("auth")
      localStorage.removeItem("token")
      navigate("/")
      window.location.reload();

    }
    return ( 
        <>
        <Navbar bg="light" expand="lg">
          <Container >
            <Navbar.Brand as={Link}to="/" >MY BUDGET</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                {/* <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link> */}
              </Nav>
                {auth ? <Nav><Nav.Link onClick={handleLogout} >Log Out</Nav.Link></Nav> : <Nav><Nav.Link as={Link} to="/login">Login</Nav.Link><Nav.Link as={Link} to="/signup">Sign Up</Nav.Link></Nav>}
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    );
}
 
export default NavBar;