import React from "react"
import { Tab } from "semantic-ui-react";
import ProfileInfo from "../../components/smart/UserProfile.jsx/ProfileInfo";

export const panes = [
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
          <ProfileInfo/>
        </Tab.Pane>
      )
    }
  }
]