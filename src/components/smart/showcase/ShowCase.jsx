import React from 'react';
import SelectiveFilter from './types/SelectiveFilter'
import CaracteristicFilter from './types/CaracteristicFilter'
import '../../../assets/styles/General/showcase.css'


const ShowCase = ({ getProperties }) => {
  return (
    <>
      <div className="filter-center">
        <CaracteristicFilter getProperties={getProperties}/>
        {/* <SelectiveFilter/> */}
      </div>
    </>
  );
};

export default ShowCase;
