import React, { useState } from 'react'
import { Grid, Header, Pagination } from 'semantic-ui-react'
import PropertyCard from './PropertyCard';

export default function PropertiesList(props){
  const {properties} = props
  return(
    <>
      <Grid.Row centered>
        {
         properties.map(property => 
          <PropertyCard property_info={property}/>
         )
        }
      </Grid.Row>
    </>
  )
}