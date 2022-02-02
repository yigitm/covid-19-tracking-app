import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchData } from './redux/countries/countries';
import './App.css';
import Countries from './components/Countries';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData);
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Countries />
      </Row>
    </Container>
  );
};

export default App;
