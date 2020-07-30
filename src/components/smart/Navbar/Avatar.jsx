import React from "react"
import { Dropdown} from "semantic-ui-react";
import "../../../assets/styles/General/icons.css"

export function Avatar(){
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
          <Dropdown.Item icon={{name: 'sign out', color:"red"}} text='Cerrar Sesión' />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}