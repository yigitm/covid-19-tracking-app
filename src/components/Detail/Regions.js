import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Nav from '../Home/Nav';
import Header from '../Home/Header';
import Detail from './Detail';

const Regions = () => (
  <Container fluid className="bg-red-bold">
    <Nav />
    <Header />
    <Row>
      <Detail />
    </Row>
  </Container>
);
export default Regions;
