import React, { useContext } from "react"
import { Dropdown} from "semantic-ui-react";
import { useHistory } from "react-router-dom"
import "../../../assets/styles/General/icons.css"
import { logoutHandler } from "../../../services/sessionHandlers/authService";
import {getNames, useUserInfo} from "../../../services/userInfo"
import { useUserContext, useUserDispatch } from "../../../UserContext";

export function Avatar(){
  const user = useUserInfo();
  const dispatch = useUserDispatch();
  const history = useHistory();

  const logout = () => {
    const token = localStorage.getItem('token');
    logoutHandler(token, dispatch);
  }

  const goTo = section => {
    history.replace(`/user/${user.uuid}/${section}`)
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
          <Dropdown.Header content={`¡Hola, ${ user.names }! `}/>

          <Dropdown.Divider />
          
          <Dropdown.Item icon='user' text='Mi Perfil' onClick={() => goTo('my-profile')}/>
          <Dropdown.Item icon='heart' text='Mis Casas' onClick={() => goTo('my-likes')}/>
          
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