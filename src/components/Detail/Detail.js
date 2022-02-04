import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Listregion from './Listregion';
import Noregion from './Noregion';

const Detail = () => {
  const countries = useSelector((state) => state.countryReducers);
  const { id } = useParams();
  let filterCountry = [];
  let listRegion = [];
  let listDisplay = [];

  const checkRegion = () => {
    filterCountry.push(
      countries.filter(
        (item) => item.regions.region.length > 0 && item.id === id,
      ),
    );
    filterCountry = Object.entries(filterCountry);
  };

  const filterRegions = () => {
    filterCountry[0][1].filter((item) => listRegion.push(item.regions));
    listRegion = Object.entries(listRegion);
  };
  /* eslint-disable no-return-assign */
  const getRegions = () => {
    listRegion.map((item) => (listDisplay = item[1].region));
  };

  checkRegion();
  filterRegions();
  getRegions();

  return listDisplay.length > 0 ? (
    listDisplay.map((region, index) => Listregion(region, index))
  ) : (
    <Noregion />
  );
  /* eslint-disable no-return-assign */
};

export default Detail;
