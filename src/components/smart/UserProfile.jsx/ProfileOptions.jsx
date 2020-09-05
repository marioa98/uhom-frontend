import React from "react";
import { Tab } from "semantic-ui-react";
import { panes } from "../../../assets/resources/userProfileOptions"

export function ProfileOptions(props){
  const { activeIndex, handleSectionChange } = props

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