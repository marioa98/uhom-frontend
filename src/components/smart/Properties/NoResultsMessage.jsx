import React from "react"
import { Header } from "semantic-ui-react"

export function NoResultsMessage(props){
  const {message} = props
  return(
    <Header as="h3" textAlign="center">
      {message}
    </Header>
  )
}