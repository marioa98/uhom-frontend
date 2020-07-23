import React from 'react';
import SelectiveFilter from './types/SelectiveFilter'
import CaracteristicFilter from './types/CaracteristicFilter'
import Restart from './Restart'

const ShowCase = () => {
  return (
    <>
        
      <div className="filter-center">
         <Restart/>
        <CaracteristicFilter/>
        <SelectiveFilter/>
      </div>
     
      
      
    </>
  );
};

export default ShowCase;
