import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Header = () => {
  const{users,logOut}= useAuth();
  return (
    <>
      <Navbar collapseOnSelect   expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">Infinity Hospital</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link}  to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
              <Nav.Link as={Link} to="/package">Health Package</Nav.Link>
             <div className="mt-2 me-2"><small style={{color:'white'}} >{users.displayName}</small></div>
              {users.email ? <Button variant="dark" onClick={logOut}>LogOut</Button> : <Nav.Link as={Link} to="/login">Login</Nav.Link> }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
