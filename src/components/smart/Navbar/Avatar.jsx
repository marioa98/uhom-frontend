import React, { useContext } from "react"
import { Dropdown} from "semantic-ui-react";
import "../../../assets/styles/General/icons.css"
import {UserContext} from "../../../App"
import { logoutHandler } from "../../../services/sessionHandlers/authService";

export function Avatar(){
  const {dispatch} = useContext(UserContext)

  const logout = () => {
    const token = localStorage.getItem('token');
    logoutHandler(token, dispatch);
  }
  
  return(
    <div>
      <Dropdown
        className='icon'
        direction="left"
        pointing="top"
        icon={{name: 'user circle', color: "blue", size: "big"}}
      > 
        <Dropdown.Menu>
          <Dropdown.Item icon='user' text='Mi Perfil' />
          <Dropdown.Item icon='heart' text='Mis Casas' />
          <Dropdown.Divider />
          <Dropdown.Item icon='help circle' text='Centro de ayuda' />
          <Dropdown.Item icon='conversation' text="FAQ's" />
          <Dropdown.Divider />
          <Dropdown.Item 
            onClick={logout}
            icon={{name: 'sign out', color:"red"}} 
            text='Cerrar Sesión'
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}