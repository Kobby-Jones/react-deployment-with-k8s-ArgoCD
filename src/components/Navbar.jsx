import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
 
function CustomNavbar() {
    
    return (
        <Navbar bg="dark" className='px-5' variant = "dark" expand = "md">
            <Navbar.Brand href="#">Brand Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id ="basic-navbar-nav">
                <Nav className='ms-auto' >
                    <Nav.Link href='#'>Home</Nav.Link>
                    <Nav.Link href='#'>About</Nav.Link>
                    <Nav.Link href='#'>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
       </Navbar>
    )
}
export default CustomNavbar;
