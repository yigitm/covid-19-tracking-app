import React from 'react';
import { Card, Col } from 'react-bootstrap';

const noRegion = () => {
  return (
    <Col className="col-12 bg-red">
      <Card.Body className="d-flex justify-content-between">
        <i className="fas fa-chart-pie text-left text-light icon-header" />

        <Card.Title className="text-center font-big">
          <span className="font-region text-light">No Regions</span>
        </Card.Title>
      </Card.Body>
    </Col>
  );
};
export default noRegion;
