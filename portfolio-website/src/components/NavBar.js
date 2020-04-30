import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Kevin W. Maguire
          </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Projects">Projects</Nav.Link>
        </Nav>
      </Navbar>
      </div>
  )}

export default NavBar