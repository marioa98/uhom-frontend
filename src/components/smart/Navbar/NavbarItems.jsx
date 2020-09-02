import React from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function NavbarItems(props){
  const { isMobile, handleSidebar} = props
  const history = useHistory();

  const goTo = path => {
    const currentPath = window.location.pathname;
    if(currentPath !== path) history.push(path)
    if(isMobile) handleSidebar();
  }

  return(
    <>
      <Menu.Item as="a" onClick={() => goTo('/')}>
        Inicio
      </Menu.Item>

      <Menu.Item as="a" onClick={() => goTo('/properties')}>
        Propiedades
      </Menu.Item>

      <Menu.Item as="a" onClick={() => goTo('/resources')}>
        Recursos
      </Menu.Item>

      <Menu.Item as="a" onClick={() => goTo('/about-us')}>
        Conócenos
      </Menu.Item>
    </>
  )
}