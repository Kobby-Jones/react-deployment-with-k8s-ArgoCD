import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
 
function CustomNavbar() {

    return (
      <Navbar className="px-5 py-4 fixed-top" variant="dark" expand="md">
        <Navbar.Brand href="#">KJ Real Estate Agency Ltd.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="about" className="nav-link">
              About Us
            </NavLink>
            <NavLink to="contact" className="nav-link">
              Contact Us
            </NavLink>
            <NavLink to="rent" className="nav-link">
              <Button className="ms-5" variant="primary">
                For Rent
              </Button>
            </NavLink>
            <NavLink to="sales" className="nav-link">
              <Button className="ms-5" variant="primary">
                For Sale
              </Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}
export default CustomNavbar;
