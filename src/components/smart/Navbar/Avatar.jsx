import React, { useContext } from "react"
import { Dropdown} from "semantic-ui-react";
import "../../../assets/styles/General/icons.css"
import {UserContext} from "../../../App";
import { logoutHandler } from "../../../services/sessionHandlers/authService";
import {getNames} from "../../../services/userInfo"
import {useHistory} from "react-router-dom"

export function Avatar(){
  const { user, dispatch } = useContext(UserContext)
  const history = useHistory();


  const logout = () => {
    const token = localStorage.getItem('token');
    logoutHandler(token, dispatch);
  }

  const goTo = section => {
    history.replace(`/user/${user.user.uuid}/${section}`)
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
          <Dropdown.Header content={`¡Hola, ${getNames()}!`}/>

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