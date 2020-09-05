import React from "react";
import axios from "axios"
import { Card, Grid } from "semantic-ui-react";
import "../../../assets/styles/General/cards.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useNavigation from "../../../services/hooks/historyNavigation";

export default function PropertyCard(props){
  const {uuid, images,address, price, location, bathrooms, bedrooms, square_meters} 
    = props.property_info
  const {city, state} = location

  const goTo = useNavigation();

  const imgUri = `${axios.defaults.baseURL}${images[0]}`
  return(
    <Grid.Column style={{paddingTop: "16px"}}>
      <Card centered fluid id={uuid}>
        <Card.Content
          style={{
            height: "350px",
            backgroundImage: `url(${imgUri})`,
            backgroundSize: "cover"
          }}
        />
        <Card.Content>
          <Card.Header>
            {price}
          </Card.Header>
          <Card.Meta>
            <span>
              | {square_meters} mts<sup>2</sup> | {bedrooms} Recámara(s) | {bathrooms} Baño(s) |
            </span>
          </Card.Meta>
          <Card.Description>
            {address}, {city}, {state}.
          </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="center">
          <Link onClick={() => goTo(`/property/${uuid}`)}>
            Ver más...
          </Link>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}