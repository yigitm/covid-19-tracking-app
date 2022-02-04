import React from 'react';
import { useSelector } from 'react-redux';
import { Alert, Col, Row } from 'react-bootstrap';

const Header = () => {
  const totalCase = useSelector((state) => state.headerReducers.total);

  return (
    <Row className="bg-red">
      <Col className="col-5 p-4"></Col>
      <Col className="col-5 p-4 text-start">Global Cases:{totalCase}</Col>
      <Col className="col-12 p-2 text-center">Covid-19 Stats</Col>
    </Row>
  );
};
export default Header;
