import React from 'react'

import {Nav, Navbar} from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" fixed="top">
        <Navbar.Brand href="#Home">
          Kevin Maguire
        </Navbar.Brand>
        <Nav className="mr-auto justify-content-end">
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Projects">Projects</Nav.Link>
          <Nav.Link href="#Timeline">Timeline</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )}

export default NavBar