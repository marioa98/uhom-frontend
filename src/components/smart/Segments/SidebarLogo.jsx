import React from "react";
import { Image, Segment } from "semantic-ui-react";
import NamedYellowLogo from "../../../assets/images/logos/NamedYellowLogo.png"

export default function SidebarLogo(){
  return(
    <Segment
      basic
    >
      <Image
        src={NamedYellowLogo}
        size="tiny"
      />
    </Segment>
  )
}