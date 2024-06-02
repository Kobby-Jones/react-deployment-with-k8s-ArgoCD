import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from '../img/Dreamscape logo.png'
 
function CustomNavbar() {


  const [hover, setHover] = useState(false);

  const handleMouseEnter = () =>{
    setHover(true)
  }
  const handleMouseLeave = () =>{
    setHover(false)
  }

    return (
      <Navbar style={{backgroundColor:'#004AAD !important'}} className="px-5 fs-5 py-4 fixed-top" variant="dark" expand="md">
        <Navbar.Brand href="#home">
          <img
            src={`${logo}`}
            width="50"
            height="50"
            className="d-inline-block align-center rounded-circle"
            alt="Dreamscape"
          />
          <strong className='mx-4 brand-font text-uppercase'>Dreamscape Real Estate Ltd.</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="ms-auto me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="about" className="nav-link">
              About Us
            </NavLink>
            <NavDropdown onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} title = "Listing" show= {hover}>
              <NavDropdown.Item>
              <NavLink to="rent" className="nav-link text-dark">
                For Rent
            </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <NavLink to="sales" className="nav-link text-dark">
                For Sale
            </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="contact" className="nav-link">
              Contact Us
            </NavLink>
            <NavLink to="agents" className="nav-link">
              Agents
            </NavLink>
            <NavLink to="blog" className="nav-link">
                Blog
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}
export default CustomNavbar;
