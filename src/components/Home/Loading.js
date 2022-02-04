import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, []);

  return (
    visible && (
      <div className="w-100 h-100 m-auto loading">
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="grow" size="md" />
          <Spinner animation="grow" size="md" />
          <Spinner animation="grow" size="md" />
          <h1 className="">Loading...</h1>
        </div>
      </div>
    )
  );
};
export default Loading;
