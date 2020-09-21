import React from "react"
import { Header, Segment } from "semantic-ui-react"

export default function MainInfo({price, fullAddress}){
  return(
    <Segment padded>
      <Header
        as="h1"
        content={price}
        subheader={fullAddress}
      />
    </Segment>
  )
}