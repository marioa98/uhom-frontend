import React from "react";
import { Image, Segment } from "semantic-ui-react";

import "../../../assets/styles/General/segments.css"

export default function ProfileHeader(props){
  const { user } = props

  return(
    <Segment 
      className="profile-segment"
      padded="very"
      size="massive"
      basic
      textAlign="center"
    >
      <Image
        avatar
        src="https://en.gravatar.com/userimage/191265949/d6b5b62c51acb05d460a4b6f39610410.png?size=100"
        size="small"
        verticalAlign="middle"
      />
      <h3>
        {`${user.names} ${user.surnames}`}
      </h3>
    </Segment>
  )
}