import React from 'react'

import {Col, Container, Image, Row} from 'react-bootstrap'
import Fade from 'react-reveal/Fade'

import Laptop from '../logos/laptop.png'


const Projects = () => {
  const handleClick = () => {
    window.open('https://rummiklub.netlify.app/')
  }
  return(
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col sm={12} md={4}>
          <Fade>
            <Image src={Laptop} onClick={handleClick}fluid/>
            <h5 className="text-center">Rummi-Klub</h5>
          </Fade>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects