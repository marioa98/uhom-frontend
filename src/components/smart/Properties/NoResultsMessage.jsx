import React from "react"
import { Grid, Header } from "semantic-ui-react"

export function NoResultsMessage(props){
  return(
    <Header as="h3" textAlign="center">
      No se encuentraron propiedades con las características especificadas.
    </Header>
  )
}