import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Col } from 'react-bootstrap';
import Loading from './Loading';

const Countries = () => {
  const countries = useSelector((state) => state.countryReducers);

  return countries.map((country) => (
    <Col key={country.id} className="w-100" className="col">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <i class="fas fa-chart-pie fa-3x text-left" />
          <i class="far fa-arrow-alt-circle-right fa-2x" />
        </div>
        <Card.Title className="text-end">{country.name}</Card.Title>
        <Card.Text className="text-end">Total Cases: {country.total}</Card.Text>
        <Card.Text className="text-end">New Cases: {country.newCase}</Card.Text>
      </Card.Body>
    </Col>
  ));
};
export default Countries;
