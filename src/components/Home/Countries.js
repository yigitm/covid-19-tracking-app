import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Countries = () => {
  const countries = useSelector((state) => state.countryReducers);

  return countries.map((country, index) => (
    <Card className="w-50 gap-0 p-0 border-0">
      <Card.Body
        key={country.id}
        className={(index + 1) % 4 >= 2 ? 'bg-red' : 'bg-red-bold'}
      >
        <div className="d-flex justify-content-between">
          <i className="fas fa-chart-pie fa-10x text-left text-light" />
          <Link to={country.id}>
            <i className="far fa-arrow-alt-circle-right fa-5x text-light" />
          </Link>
        </div>
        <Card.Title className="text-end text-light">
          <p className="font-250">{country.name}</p>
        </Card.Title>
        <Card.Text className="text-end text-light font-200">
          Total Cases: {country.total}
        </Card.Text>
        <Card.Text className="text-end text-light font-200">
          New Cases: {country.newCase}
        </Card.Text>
      </Card.Body>
    </Card>
  ));
};
export default Countries;
