import React from "react"
import { Grid, Header } from "semantic-ui-react"

export function NoResultsMessage(props){
  return(
    <Grid.Row centered>
      <Header as="h3">
        No se encuentraron propiedades con las características especificadas.
      </Header>
    </Grid.Row>
  )
}