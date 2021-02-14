import React, { Fragment } from 'react';
import { Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import Request from './Request';
import Response from './Response';
import Table from './Tables';
import refresh from './icons8-refresh-24.png';
import plus from './icons8-plus-math-24.png';
import './App.css';

export default function App() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Button href="#home" variant="warning">New</Button>
        
        <Nav className="mr-auto">
          <Button href="#home" size="sm" variant="primary" className="button">Import</Button>
          <Button href="#features" size="sm" variant="primary" className="button">Runner</Button>
          {/* <Button href="#pricing" size="sm" variant="primary" className="button"></Button> */}
        </Nav>

        <Container className="justify-content-md-center">
          <Button variant="light"><img src={plus} alt="" height="20" width="20"/>My Workspace</Button>
        </Container>

        <Nav>
          <Button variant="warning" size="sm" style={{marginRight: '10px'}}><img src={refresh} alt="" height="20" width="20"/></Button>
          <Button variant="light">Upgrade</Button>
        </Nav>
      </Navbar>

      <Container fluid>
        <Row>
          <Col xs={6} md={4} style={{ borderRight: '1px solid black', height: '600px' }}><Table /></Col>
          <Col>
            <Row style={{ display: 'block', height: '300px', borderBottom: '1px solid black', marginLeft: '1px' }}><Request /></Row>
            <Row style={{ display: 'block' }}><Response /></Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
