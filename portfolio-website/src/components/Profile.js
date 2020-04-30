import React from 'react'

import {Container, Row, Col, Image} from 'react-bootstrap'
import Fade from 'react-reveal/Fade'

import BootstrapLogo from "../logos/bootstrap.png"
import DjangoLogo from "../logos/django.png"
import GitHubLogo from '../logos/github.png'
import GitLogo from '../logos/git.png'
import NodeLogo from "../logos/node.png"
import Pdf from "../resume/Resume_Kevin_Maguire.pdf"
import Pic from "../Images/IMG_20190731_095920.jpg"
import PostgreSQLLogo from "../logos/postgresql.png"
import PythonLogo from "../logos/python.png"
import ReactLogo from "../logos/react.png"
import TripleLogo from "../logos/triple-logo.png"
import VSCodeLogo from '../logos/vscode.png'

const Profile = () => {
  return(
    <Container fluid>
      <Row>
        <Col sm={12} md={6}>
        <Fade left>
          <Image src={Pic} fluid/>
          <h3 className="text-center">Kevin W.Maguire</h3>
            <p>I'm a full-stack software developer in the Greater Boston Area who recently graduated from Code Platoon. 
            My projects have focused on web development and web applications. 
            I am looking for opportunities and open to new specialties in CS.  
            <a href={Pdf} target="_blank" rel="noopener noreferrer"> Let's get started!</a></p>
        </Fade>
        </Col>
        <Col sm= {12} md={6}>
        <Fade right>
          <h2 className="text-center">Technologies</h2>
      <Row>
        <Col sm={6} md={12}>
          <Image src={TripleLogo} fluid />
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4}>
          <Image src={BootstrapLogo} fluid />
        </Col>
        <Col sm={6} md={4}>
          <Image src={ReactLogo} fluid />
        </Col>
        <Col sm={6} md={4}>
          <Image src={NodeLogo} fluid />
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4}>
          <Image src={PostgreSQLLogo} fluid />
        </Col>
        <Col sm={6} md={4}>
          <Image src={PythonLogo} fluid />
        </Col>
        <Col sm={6} md={4}>
          <Image src={DjangoLogo} fluid />
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={4}>
          <Image src={GitLogo} fluid />
        </Col>
        <Col sm={6} md={4}>
          <Image src={GitHubLogo} fluid />
        </Col>
        <Col sm={6} md={4}>
          <Image src={VSCodeLogo} fluid />
        </Col>
      </Row>
      </Fade>
      </Col>
      </Row>
    </Container>
  )
}

export default Profile