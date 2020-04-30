import React from 'react'

import {Col, Container, Navbar, Row} from 'react-bootstrap'

import EmailLogo from '../logos/email.png'
import GitHubLogo from '../logos/github.svg'
import LinkedinLogo from '../logos/linkedin.svg'

const Footer = () =>{
  return(
    <Container fluid>
      <Row className="justify-content-md-center">
        <Navbar bg="light" variant="dark">
        <Col sm={4}>
          <Navbar.Brand href="https://github.com/KWMprojects" target="_blank" rel="noopener noreferrer">
            <img
              alt=""
              src={GitHubLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Col>
        <Col sm={4}>
          <Navbar.Brand href="https://www.linkedin.com/in/kevin-maguire-ii/" target="_blank" rel="noopener noreferrer">
            <img
              alt=""
              src={LinkedinLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Col>
        <Col sm={4}>
          <Navbar.Brand href="mailto:k.w.maguire.ii@gmail.com" target="_blank" rel="noopener noreferrer">
            <img
              alt=""
              src={EmailLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Col>
        </Navbar>
      </Row>
    </Container>
  )
}

export default Footer