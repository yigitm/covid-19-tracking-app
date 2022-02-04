import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Countries = () => {
  const countries = useSelector((state) => state.countryReducers);

  return countries.map((country, index) => (
    <Col
      key={country.id}
      className="w-100"
      className="col-6 col-md-2 col-lg-3"
      className={(index + 1) % 4 >= 2 ? 'bg-red' : 'bg-red-bold'}
    >
      <Card.Body>
        <div className="d-flex justify-content-between">
          <i className="fas fa-chart-pie fa-3x text-left text-light" />
          <Link to={country.id}>
            <i className="far fa-arrow-alt-circle-right fa-2x text-light" />
          </Link>
        </div>
        <Card.Title className="text-end text-light">{country.name}</Card.Title>
        <Card.Text className="text-end text-light">
          Total Cases: {country.total}
        </Card.Text>
        <Card.Text className="text-end text-light">
          New Cases: {country.newCase}
        </Card.Text>
      </Card.Body>
    </Col>
  ));
};
export default Countries;
