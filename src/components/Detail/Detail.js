import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, Container } from 'react-bootstrap';
import Region from './Region';

const Detail = () => {
  const countries = useSelector((state) => state.countryReducers);
  const { id } = useParams();

  const check = () => {
    countries.map((item) => (item.regions ? true : false));
  };

  return (
    <Container fluid id={id}>
      {check && (
        <Card.Body className="w-100" className="col-12">
          <Card.Title className="text-end">No Region Avaliable</Card.Title>
        </Card.Body>
      )}
      {!check && <Region />}
    </Container>
  );
};

export default Detail;
