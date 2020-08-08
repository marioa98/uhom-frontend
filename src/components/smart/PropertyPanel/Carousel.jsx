import React from "react";
import { Grid, Image } from "semantic-ui-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

export default function PropertyCarousel(props){
  const {images} = props
  const tmp_images = [1,2,3,4,5]

  return(
    <Grid.Column width={9}>
      <Carousel
        showArrows={true}
        showStatus={false}
        autoPlay={false}
        infiniteLoop={true}
        swipeable={true}
      >
        {
          images.map( image=> {
            const url = `${axios.defaults.baseURL}${image}`
            return <Image
              size="medium"
              fluid
              centered
              src={url}
            />
          })
        }
      </Carousel>
    </Grid.Column>
  )
}