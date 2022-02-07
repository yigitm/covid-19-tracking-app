import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row, Form } from 'react-bootstrap';
import { searchData, fetchData } from '../../redux/countries/countries';

const Header = () => {
  const totalCase = useSelector((state) => state.headerReducers.total);
  const dispatch = useDispatch();
  /* eslint-disable no-unused-expressions */
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
          <span className="font-header">
            {' '}
            {totalCase}
            {' '}
            cases
          </span>
        </p>
      </Col>
      <Col className="col-12 d-flex justify-content-between align-items-center p-2 text-light bg-red-bold">
        <p className="font-big w-50">Covid-19 Stats</p>
        <Form.Control
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search..."
          className="w-50"
        />
      </Col>
    </Row>
    /* eslint-disable no-unused-expressions */
  );
};
export default Header;
