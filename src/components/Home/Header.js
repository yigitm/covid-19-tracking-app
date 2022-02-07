import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { searchData, fetchData } from '../../redux/countries/countries';

const Header = () => {
  const totalCase = useSelector((state) => state.headerReducers.total);
  const dispatch = useDispatch();

  const handleSearch = (eTarget) => {
    eTarget.toString() !== ''
      ? dispatch(searchData(eTarget))
      : dispatch(fetchData);
  };

  return (
    <Row className="bg-red">
      <Col className="col-5 p-4 mx-auto">
        <i className="fas fa-globe-americas icon-header text-light m-5" />
      </Col>
      <Col className="col-5 p-4 ">
        <p className="text-light mt-5">
          <span className="font-header text-left">GLOBAL</span>
          <br />
          <span className="font-header"> {totalCase} cases</span>
        </p>
      </Col>
      <Col className="col-12 p-2 text-left font-big text-light text-break bg-red-bold">
        Covid-19 Stats
        <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      </Col>
    </Row>
  );
};
export default Header;
