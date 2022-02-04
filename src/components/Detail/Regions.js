import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Home/Nav';
import Detail from './Detail';
import { Container, Row } from 'react-bootstrap';

const Regions = () => {
  return (
    <Container fluid>
      <Nav />
      <Row>
        <Detail />
      </Row>
    </Container>
  );
};
export default Regions;
