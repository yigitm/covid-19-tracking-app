import React from 'react';
import Nav from '../../components/Home/Nav';
import Header from '../Home/Header';
import Detail from './Detail';
import { Container, Row } from 'react-bootstrap';

const Regions = () => {
  return (
    <Container fluid className="bg-red-bold">
      <Nav />
      <Header />
      <Row>
        <Detail />
      </Row>
    </Container>
  );
};
export default Regions;
