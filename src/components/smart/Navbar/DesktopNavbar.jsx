import React from "react";
import { Container, Image, Menu } from "semantic-ui-react";
import { useUserContext } from "../../../UserContext";
import { Avatar } from "./Avatar";
import { SessionOptions } from "./SessionOptions";
import NavbarItems from "./NavbarItems";
import YellowLogo from "../../../assets/images/logos/YellowLogo.png";
import '../../../assets/styles/General/navbar.css';
import { Link } from "react-router-dom";

export default function DesktopNavbar(){
  const { isLogged } = useUserContext();

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
        <Menu.Item position="right">
          { isLogged ? <Avatar/> : <SessionOptions/> }
        </Menu.Item>
      </Container>
      
    </Menu>
  )
}