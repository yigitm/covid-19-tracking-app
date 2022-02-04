import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => (
  <div className="d-flex justify-content-center">
    <Spinner animation="grow" />
    <Spinner animation="grow" />
    <Spinner animation="grow" />
    <h1>Loading...</h1>
  </div>
);
export default Loading;
