import React from "react";
import { Tab } from "semantic-ui-react";
import ProfileInfo from "./ProfileInfo";

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
      menuItem: 'Información',
      pane: {
        key: 'info',
        content:(
          <Tab.Pane>
            <ProfileInfo />
          </Tab.Pane>
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