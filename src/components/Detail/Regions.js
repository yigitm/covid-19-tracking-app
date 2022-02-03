import React from 'react';
import { useParams } from 'react-router-dom';

const Regions = () => {
  const { id } = useParams();
  return <h1 id={id}>Regions</h1>;
};

export default Regions;
