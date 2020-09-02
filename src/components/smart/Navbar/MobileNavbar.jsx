import React, { useState } from "react";
import { Container, Divider, Grid, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import { useUserContext } from "../../../UserContext";
import SidebarLogo from "../Segments/SidebarLogo";
import { Avatar } from "./Avatar";
import NavbarItems from "./NavbarItems";
import { SessionOptions } from "./SessionOptions";

export default function MobileNavbar(props){
  
  const { children } = props
  const [isOpen, setOpen] = useState(false);
  const { isLogged } = useUserContext();

  const handleSidebar = () => setOpen(!isOpen)

  return(
    <Grid columns={1} >
      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            onHide={() => setOpen(false)}
            vertical
            visible={isOpen}
          > 
            <SidebarLogo/>
            <Divider/>
            <NavbarItems
              isMobile={true}
              handleSidebar={handleSidebar}
            />
          </Sidebar>
          
          <Sidebar.Pusher dimmed={isOpen}>
            <Segment
              basic
              textAlign="center"
              className="navbar"
            >
              <Container>
                <Menu pointing size="large" text>
                  <Menu.Item onClick={handleSidebar}>
                    <Icon name="sidebar"/>
                  </Menu.Item>

                  <Menu.Item position="right">
                    { isLogged ? <Avatar/> : <SessionOptions/> }
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>
            
            {children}

          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    
    </Grid>
  )
}