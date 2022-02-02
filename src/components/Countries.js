import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const Countries = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <h1>Loading...</h1>
    </div>
  );
};
export default Countries;
