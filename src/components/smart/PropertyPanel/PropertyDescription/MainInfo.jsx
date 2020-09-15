import React from "react"
import { Header, Segment } from "semantic-ui-react"
import LikeButton from "../../Actions/LikeButton"

export default function MainInfo(props){

  const {price, fullAddress, likesInfo} = props

  return(
    <Segment padded>
      <Header
        as="h1"
        content={price}
        subheader={fullAddress}
      />
      {/* <LikeButton/> */}
    </Segment>
  )
}