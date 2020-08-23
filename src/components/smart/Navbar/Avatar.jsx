import React from "react"
import { Dropdown} from "semantic-ui-react";
import { useHistory } from "react-router-dom"
import "../../../assets/styles/General/icons.css"
import { logoutHandler } from "../../../services/sessionHandlers/authService";
import { useSessionInfo } from "../../../services/sessionInfo"
import { useUserDispatch } from "../../../UserContext";

export function Avatar(){
  const session = useSessionInfo();
  const dispatch = useUserDispatch();
  const history = useHistory();

  const logout = () => {
    logoutHandler(session.authorization, dispatch);
  }

  const goTo = section => {
    history.replace(`/user/${session.id}/${section}`)
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
          <Dropdown.Header content={`¡Hola, ${ session.names }! `}/>

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