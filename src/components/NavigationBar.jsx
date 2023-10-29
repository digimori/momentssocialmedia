import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logoipsum-293.svg';
import css from '../components/css/NavigationBar.module.css';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div>
         <Navbar expand="md" className={css.Navigation} fixed="top">
      <Container fluid>
        <NavLink>
        <Navbar.Brand><img src={logo} alt="logo" height="45" /></Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 text-left"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className={css.NavLink}><i className="fas fa-home"></i>Home</NavLink>
            <NavLink to="/signin" className={css.NavLink}><i className='fas fa-sign-in-alt'></i>Sign In</NavLink>
            <NavLink to="/signup" className={css.NavLink}><i className='fas fa-user-plus'></i>Sign Up</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar