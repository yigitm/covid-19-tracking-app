import React from 'react';
import { useSelector } from 'react-redux';
import { Image, Col, Row } from 'react-bootstrap';

const Header = () => {
  const totalCase = useSelector((state) => state.headerReducers.total);

  return (
    <Row className="bg-red">
      <Col className="col-5 p-4 mx-auto">
        <i class="fas fa-globe-americas fa-10x text-light m-5"></i>
      </Col>
      <Col className="col-5 p-4 ">
        <p className="text-light mt-5">
          <span className="font-250 text-left">GLOBAL</span>
          <br />
          <span className="font-200"> {totalCase} cases</span>
        </p>
      </Col>
      <Col className="col-12 p-2 text-left font-250 text-light text-break bg-red-bold">
        Covid-19 Stats
      </Col>
    </Row>
  );
};
export default Header;
