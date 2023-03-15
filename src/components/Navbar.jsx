import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap'
 
function CustomNavbar() {
    
    return (
      <Navbar bg="dark" className="px-5 py-4" variant="dark" expand="md">
        <Navbar.Brand href="#">KJ Real Estate Agency Ltd.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Button className="ms-5" variant="warning">
              For Rent
            </Button>
            <Button className="ms-5" variant="warning">
              For Sale
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}
export default CustomNavbar;
