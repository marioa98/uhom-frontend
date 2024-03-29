import React from "react";
import axios from "axios";
import ReactSlick from "react-slick";
import { Grid } from "semantic-ui-react";
import ReactImageMagnify from "react-image-magnify";
import { largeImage, smallImage } from "../../../assets/utils/carouselOptions";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function PropertyCarousel(props){
  const {images} = props
  const HINT_MESSAGE = "Click para hacer zoom";

  return(
    <Grid.Column width={9}>
      <ReactSlick
        dots
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {
          images.map((image, index) => {
            const url = `${axios.defaults.baseURL}${image}`
            const smImage = smallImage(url)
            const lgImage = largeImage(url)
            return(
              <div key={index}>
                <ReactImageMagnify
                  smallImage={{...smImage}}
                  largeImage={{...lgImage}}
                  lensStyle={{backgroundColor: 'rgba(0,0,0,.6)'}}
                  isHintEnabled
                  shouldHideHintAfterFirstActivation
                  enlargedImagePosition="over"
                  hintTextMouse={HINT_MESSAGE}
                  hintTextMouse={HINT_MESSAGE}
                />
              </div>
            )
          })
        }
      </ReactSlick>
      {/* <Carousel
        showArrows={true}
        showStatus={false}
        autoPlay={false}
        infiniteLoop={true}
        swipeable={true}
      >
        {
          images.map( (image, index) => {
            const url = `${axios.defaults.baseURL}${image}`
            return <ReactImageZoom
              width={500}
              height={400}
              scale={1.5}
              zoomWith={500}
              zoomPosition="original"
              img={url}
            />
          })
        }
      </Carousel> */}
    </Grid.Column>
  )
}