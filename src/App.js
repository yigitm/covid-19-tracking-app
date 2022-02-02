import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchData } from './redux/countries/countries';
import { fetchHeaderData } from './redux/header/header';
import './App.css';
import Countries from './components/Countries';
import Header from './components/Header';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData);
    dispatch(fetchHeaderData);
  }, []);

  return (
    <Container fluid className="mt-5">
      <Header />
      <Row>
        <Countries />
      </Row>
    </Container>
  );
};

export default App;
