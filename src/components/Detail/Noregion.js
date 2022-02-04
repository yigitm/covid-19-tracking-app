import React from 'react';
import { Card, Col } from 'react-bootstrap';

const noRegion = () => {
  return (
    <Col className="w-100" className="col-6 col-md-2 col-lg-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <i className="fas fa-chart-pie fa-3x text-left" />
        </div>
        <Card.Title className="text-end">No Regions</Card.Title>
      </Card.Body>
    </Col>
  );
};
export default noRegion;
