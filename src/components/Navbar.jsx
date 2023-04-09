import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
 
function CustomNavbar() {
    
    return (
      <Navbar bg="dark" className="px-5 py-4" variant="dark" expand="md">
        <Navbar.Brand href="#">KJ Real Estate Agency Ltd.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="about" className="nav-link">
              About Us
            </Link>
            <Link to="contact" className="nav-link">
              Contact Us
            </Link>
            <Link to="rent" className="nav-link">
              <Button className="ms-5" variant="warning">
                For Rent
              </Button>
            </Link>
            <Link to="sales" className="nav-link">
              <Button className="ms-5" variant="warning">
                For Sale
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}
export default CustomNavbar;
