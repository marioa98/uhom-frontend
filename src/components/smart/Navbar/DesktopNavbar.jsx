import React from "react";
import { Container, Menu, Segment } from "semantic-ui-react";
import { useUserContext } from "../../../UserContext";
import { Avatar } from "./Avatar";
import { SessionOptions } from "./SessionOptions";
import NavbarItems from "./NavbarItems";
import '../../../assets/styles/General/navbar.css';

export default function DesktopNavbar(){
  const { isLogged } = useUserContext();

  return(
    <Menu
      borderless
      // fixed="top"
      className="navbar"
    >
      <Container>
        <NavbarItems/>      
        <Menu.Item position="right">
          { isLogged ? <Avatar/> : <SessionOptions/> }
        </Menu.Item>
      </Container>
      
    </Menu>
  )
}