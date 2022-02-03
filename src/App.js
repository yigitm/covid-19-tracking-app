import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/countries/countries';
import { fetchHeaderData } from './redux/header/header';
import Home from './components/Home/Home';
import Regions from './components/Detail/Regions';

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
      <Route path="/:id" element={<Regions />} />
    </Routes>
  );
};

export default App;
