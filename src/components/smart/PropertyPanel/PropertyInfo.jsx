import React from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import AppopinmentButton from "../Actions/AppoinmentButton";
import LikeButton from "../Actions/LikeButton";
import ExtraDescription from "./PropertyDescription/ExtraDescription";
import MainFeatures from "./PropertyDescription/MainFeatures";
import MainInfo from "./PropertyDescription/MainInfo";

export default function PropertyInfo({propertyInfo, propertyLocation}){
  
  const { 
    uuid,
    address, 
    bedrooms,
    bathrooms,
    extra_description,
    likes_info,
    price,
    square_meters
  } = propertyInfo

  const {city, state} = propertyLocation

  return(
    <Grid.Column width={6}>
      <Segment.Group>
        <MainInfo
          price={price}
          fullAddress={`${address}, ${city}, ${state}.`}
        />
        
        <Menu borderless secondary>
          <LikeButton
            likesInfo={likes_info}
            propertyId={uuid}
          />
        </Menu>

        <MainFeatures
          features={{bedrooms, bathrooms, square_meters}}
        />

        <ExtraDescription extraDescription={extra_description}/>

        <Segment>
          <AppopinmentButton address={address} price={price}/>
        </Segment>
      </Segment.Group>
    </Grid.Column>
  )
}