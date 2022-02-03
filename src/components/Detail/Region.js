import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Col } from 'react-bootstrap';
import { getRegion } from '../../redux/countries/countries';

const Regions = () => {
  const countries = useSelector((state) => state.countryReducers);
  const dispatch = useDispatch();

  //return console.log(dispatch(getRegion));

  /*return countries.map((region) => (
    <Col key={region.id} className="w-100" className="col-6 col-md-2 col-lg-3">
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
  ));*/
};

export default Regions;
