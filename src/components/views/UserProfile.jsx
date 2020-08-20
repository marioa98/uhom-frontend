import React, { useContext, useState } from "react";
import { useHistory, useParams, withRouter } from "react-router-dom";
import ProfileHeader from "../smart/UserProfile.jsx/ProfileHeader";
import { ProfileOptions } from "../smart/UserProfile.jsx/ProfileOptions";

function getCurrentIndex(section){
  switch(section){
    case 'my-likes': return 0;
    case 'my-profile': return 1;
  }
}

function UserProfile(props){
  const { user_uuid, section } = useParams();
  const history = useHistory();
  const [ activeIndex, setActiveIndex ] = useState(getCurrentIndex(section));

  const handleSectionChange = (e, data) => {
    const newIndex = data.activeIndex
    const newSection = data.panes[newIndex].pane.key
    
    if(newIndex !== activeIndex){
      setActiveIndex(newIndex);
      history.push(`/user/${user_uuid}/${newSection}`)
    }
  }

  return(
    <>
      <ProfileHeader/>
      <ProfileOptions
        activeIndex={activeIndex}
        handleSectionChange={handleSectionChange}
      />
    </>
  )
}

export default withRouter(UserProfile);