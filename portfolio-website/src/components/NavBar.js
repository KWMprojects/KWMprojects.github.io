import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import logo from '../Images/transparent-logo.png'

const NavBar = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="100"
            height="40"
            className="d-inline-block align-top"
            alt="KWM Projects Logo"
          /></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Projects">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      </div>
  )}

export default NavBar