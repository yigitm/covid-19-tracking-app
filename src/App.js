import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchData } from './redux/countries/countries';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData);
  }, []);

  const countries = useSelector((state) => state.countryReducers);

  return <Container></Container>;
};

export default App;
