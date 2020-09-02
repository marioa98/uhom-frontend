import React from "react";
import { Image, Segment } from "semantic-ui-react";
import NamedYellowLogo from "../../../assets/images/logos/NamedYellowLogo.png";
import "../../../assets/styles/General/segments.css";

export default function FormLogoHeader(props){
  const {message} = props

  return(
    <Segment 
      basic
      textAlign="center"
      className="form-logo-segment"
    >
      <Image 
        src={NamedYellowLogo} 
        size="small"
        centered
      />
      <h3>{message || ""}</h3>
    </Segment>
  )
}