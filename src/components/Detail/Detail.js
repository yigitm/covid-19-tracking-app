import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, Col } from 'react-bootstrap';
import Region from './Region';

const Detail = () => {
  const countries = useSelector((state) => state.countryReducers);
  const { id } = useParams();
  let filterCountry = [];
  let listRegion = [];
  let listDisplay = [];

  const check = () => {
    filterCountry.push(
      countries.filter(
        (item) => item.regions.region.length > 0 && item.id === id,
      ),
    );
    filterCountry = Object.entries(filterCountry);
    //console.log(filterCountry);
  };

  check();

  const filterRegions = () => {
    filterCountry[0][1].filter((item) => listRegion.push(item.regions));
    listRegion = Object.entries(listRegion);
  };
  filterRegions();

  const mapRegions = () => {
    listRegion.map((item) => (listDisplay = item[1].region));
  };
  mapRegions();
  console.log(listDisplay);

  return listDisplay.map(
    (region) =>
      region && (
        <Col
          key={region.id}
          className="w-100"
          className="col-6 col-md-2 col-lg-3"
        >
          <Card.Body>
            <div className="d-flex justify-content-between">
              <i className="fas fa-chart-pie fa-3x text-left" />
            </div>
            <Card.Title className="text-end">{region.name}</Card.Title>
            <Card.Text className="text-end">
              Total Cases: {region.today_confirmed}
            </Card.Text>
            <Card.Text className="text-end">
              New Cases: {region.today_new_confirmed}
            </Card.Text>
          </Card.Body>
        </Col>
      ),
  );
};

export default Detail;
