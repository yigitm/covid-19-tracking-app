import React from 'react';
import { Card } from 'react-bootstrap';
import { useEffect } from 'react';

const Listregion = (region, index) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    /* eslint-disable react/destructuring-assignment */
    <Card key={region.id} className="p-0 gap-0 border-0">
      <div className={index % 2 === 0 ? 'bg-red' : 'bg-red-bold'}>
        <div className="d-flex justify-content-between p-5">
          <i className="fas fa-chart-pie text-light icon-header" />
          <div>
            <p className="text-light font-region-list">{region.name}</p>
            <p className="text-light font-region-list-sm">
              Total Cases: {region.today_confirmed}
            </p>
            <p className="text-light font-region-list-sm">
              New Cases: {region.today_new_confirmed}
            </p>
          </div>
        </div>
      </div>
    </Card>
    /* eslint-disable react/destructuring-assignment */
  );
};
export default Listregion;
