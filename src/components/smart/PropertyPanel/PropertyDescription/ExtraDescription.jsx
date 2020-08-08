import React from "react";
import { Header, List, Segment } from "semantic-ui-react";
import "../../../../assets/styles/General/segments.css";

export default function ExtraDescription(props){
  const {extraDescription} = props
  
  const textFormatted = text => {
    return text ? text.split("\n") : []
  }

  return(
    <Segment>
      <Header as="h3" textAlign="center">
        Descripción adicional
      </Header>
      <Segment className="scrollable">
        <List items={textFormatted(extraDescription)}/>
      </Segment>
    </Segment>
  )
}