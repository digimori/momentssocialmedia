import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logoipsum-293.svg';

const NavigationBar = () => {
  return (
    <div>
         <Navbar expand="md" className="bg-body-tertiary" data-bs-theme="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand><img src={logo} alt="logo" height="45" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 text-left"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><i className="fas fa-home"></i>Home</Nav.Link>
            <Nav.Link><i className='fas fa-sign-in-alt'></i>Sign In</Nav.Link>
            <Nav.Link><i className='fas fa-user-plus'></i>Sign Up</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar