import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

const Header = () => {
  const totalCase = useSelector((state) => state.headerReducers.total);

  return (
    <Alert key="total" variant="success">
      <Alert.Heading className="p-5 text-center">
        Total Number of Cases:{totalCase}
      </Alert.Heading>
    </Alert>
  );
};
export default Header;
