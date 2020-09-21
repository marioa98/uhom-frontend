import React from "react"
import { Tab } from "semantic-ui-react";
import UserLikes from "../../components/smart/UserProfile.jsx/Likes/UserLikes";
import ProfileInfo from "../../components/smart/UserProfile.jsx/ProfileInfo";

export const panes = [
  {
    menuItem: { key: 'my-likes', content: 'Mis Casas'},
    render: () => 
      <Tab.Pane>
        <UserLikes/>
      </Tab.Pane>
  },
  {
    menuItem: { key: 'info', content: 'Información'},
    render: () => 
      <Tab.Pane>
        <ProfileInfo/>
      </Tab.Pane>
  }
]