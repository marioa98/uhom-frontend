import React, { useState } from "react";
import { Redirect, useHistory, useParams, withRouter } from "react-router-dom";
import { useSessionInfo } from "../../services/sessionInfo";
import ProfileHeader from "../smart/UserProfile.jsx/ProfileHeader";
import { ProfileOptions } from "../smart/UserProfile.jsx/ProfileOptions";

function getCurrentIndex(section){
  switch(section){
    case 'my-likes': return 0;
    case 'my-profile': return 1;
  }
}

function UserProfile(){
  const session = useSessionInfo()
  const { user_uuid, section } = useParams();
  const history = useHistory();
  const [ activeIndex, setActiveIndex ] = useState(getCurrentIndex(section));

  const handleSectionChange = (e, data) => {
    const newIndex = data.activeIndex
    const newSection = data.panes[newIndex].pane.key
    
    if(newIndex !== activeIndex){
      setActiveIndex(newIndex);
      history.push(`/user/${session.id}/${newSection}`)
    }
  }

  const isAuthorized = () => session && session.id === user_uuid

  return(
    <>
      {
         isAuthorized() ?
          <div>
            <ProfileHeader header={`${session.names} ${session.surnames}`}/>
            <ProfileOptions
              activeIndex={activeIndex}
              handleSectionChange={handleSectionChange}
            />
          </div>

          : <Redirect to="/"/>
      }
    </>
  )
}

export default withRouter(UserProfile);