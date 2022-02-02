import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchData } from './redux/countries/countries';
import './App.css';
import Countries from './components/Countries';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData);
  }, []);

  return (
    <Container fluid className="mt-5">
      <Countries />
    </Container>
  );
};

export default App;
