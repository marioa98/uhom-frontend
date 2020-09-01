import React from "react";
import { createMedia } from "@artsy/fresnel"
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import '../../../assets/styles/General/navbar.css';

export default function Navbar(props){
  const { children } = props

  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    }
  })

  return(
    <MediaContextProvider>
      <Media lessThan="tablet">
        <MobileNavbar>
          {children}
        </MobileNavbar>
      </Media>
      
      <Media greaterThan="mobile">
        <DesktopNavbar/>
        {children}
      </Media>

    </MediaContextProvider>
  )
}