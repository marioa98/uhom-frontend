import React from "react";
import { Header, List, Segment } from "semantic-ui-react";
import "../../../../assets/styles/General/segments.css";
import { useCRLF } from "../../../../services/validations/dataFormater";

export default function ExtraDescription(props){
  const {extraDescription} = props
  const defaultDescription = "Esta propiedad no tiene descripción adicional";

  const items = useCRLF(extraDescription, defaultDescription);

  return(
    <Segment>
      <Header as="h3" textAlign="center">
        Descripción adicional
      </Header>
      <Segment className="scrollable">
        <List items={items}/>
      </Segment>
    </Segment>
  )
}