import React from 'react';
import SelectiveFilter from './types/SelectiveFilter'
import CaracteristicFilter from './types/CaracteristicFilter'
import '../../../assets/styles/General/showcase.css'
import Price from './types/Price '



const ShowCase = () => {
  return (
    <>
        
      <div className="filter-center">
        <Price/>
        <CaracteristicFilter/>
        <SelectiveFilter/>
        
      </div>
     
      
      
    </>
  );
};

export default ShowCase;
