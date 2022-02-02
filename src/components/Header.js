import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';

const Header = () => {
  const totalCase = useSelector((state) => state.headerReducers);

  return totalCase.map((covid) => (
    <Alert variant="success">
      <Alert.Heading className="p-5 text-center">
        Total Number of Cases:{covid.total}
      </Alert.Heading>
    </Alert>
  ));
};
export default Header;
