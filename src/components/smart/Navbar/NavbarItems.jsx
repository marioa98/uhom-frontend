import React from "react";
import { Menu } from "semantic-ui-react";
import useNavigation from "../../../services/hooks/historyNavigation";

export default function NavbarItems(props){
  const { isMobile, handleSidebar} = props
  const naviagate = useNavigation();

  const goTo = path => {
    naviagate(path);
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