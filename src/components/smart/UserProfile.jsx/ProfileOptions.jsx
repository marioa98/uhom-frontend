import React from "react";
import { Tab } from "semantic-ui-react";

export function ProfileOptions(props){
  const { activeIndex, handleSectionChange } = props
  const panes = [
    {
      menuItem: 'Mis Casas',
      pane: {
        key: 'my-likes',
        content:(
          <Tab.Pane>Mis Casas</Tab.Pane>
        )
      }
    },
    {
      menuItem: 'Mi Perfil',
      pane: {
        key: 'my-profile',
        content:(
          <Tab.Pane>Mi Perfil</Tab.Pane>
        )
      }
    }
  ]

  return(
    <Tab 
      menu={{secondary: true, pointing: true}}
      panes={panes}
      activeIndex={activeIndex}
      onTabChange={handleSectionChange}
      renderActiveOnly={false}
    />
  )
}