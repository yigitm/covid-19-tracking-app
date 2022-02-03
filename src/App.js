import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData, getRegion } from './redux/countries/countries';
import { fetchHeaderData } from './redux/header/header';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData);
    dispatch(fetchHeaderData);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
};

export default App;
