import React from "react";
import { Container, Image, Menu } from "semantic-ui-react";
import NavbarItems from "./NavbarItems";
import YellowLogo from "../../../assets/images/logos/YellowLogo.png";
import '../../../assets/styles/General/navbar.css';
import { Link } from "react-router-dom";
import NavbarRightItems from "./NavbarRightItems";

export default function DesktopNavbar(){
  return(
    <Menu
      borderless
      className="navbar"
    >
      <Container>
        <Menu.Item position="left">
          <Link to="/">
            <Image
              src={YellowLogo}
              size="mini"
            />
          </Link>
        </Menu.Item>
        <NavbarItems/>      
        <NavbarRightItems/>
      </Container>
      
    </Menu>
  )
}