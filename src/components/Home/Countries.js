import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Countries = () => {
  const countries = useSelector((state) => state.countryReducers);

  return countries.map((country, index) => (
    <Col key={country.id}>
      <Card className="w-100 gap-0 p-0 border-0">
        <Card.Body className={index % 2 === 0 ? 'bg-red' : 'bg-red-bold'}>
          <div className="d-flex justify-content-between">
            <i className="fas fa-chart-pie text-left text-light icon" />
            <Link to={country.id}>
              <i className="far fa-arrow-alt-circle-right icon text-light" />
            </Link>
          </div>
          <Card.Title className="text-end text-light">
            <p className="font-big">{country.name}</p>
          </Card.Title>
          <Card.Text className="text-end text-light font-small">
            Total Cases:
            {' '}
            {country.total}
          </Card.Text>
          <Card.Text className="text-end text-light font-small">
            New Cases:
            {' '}
            {country.newCase}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
};
export default Countries;
