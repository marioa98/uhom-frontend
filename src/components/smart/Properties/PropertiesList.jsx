import React from 'react'
import { Grid } from 'semantic-ui-react'
import Paginator from '../Pagination/Paginator';
import PropertyCard from './PropertyCard';

export default function PropertiesList(props){
  const {properties, paginationProps} = props
  return(
    <Grid stackable columns={3} padded>
      <Paginator {...paginationProps}/>
      <Grid.Row centered>
        {
         properties.map(property => 
          <PropertyCard property_info={property}/>
         )
        }
      </Grid.Row>
      <Paginator {...paginationProps}/>
    </Grid>
  )
}