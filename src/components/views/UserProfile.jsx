import React, { useContext, useState } from "react";
import { Redirect, useHistory, useParams, withRouter } from "react-router-dom";
import { UserContext } from "../../App";
import { useUserInfo } from "../../services/userInfo";
import { useUserContext } from "../../UserContext";
import ProfileHeader from "../smart/UserProfile.jsx/ProfileHeader";
import { ProfileOptions } from "../smart/UserProfile.jsx/ProfileOptions";

function getCurrentIndex(section){
  switch(section){
    case 'my-likes': return 0;
    case 'my-profile': return 1;
  }
}

function UserProfile(){
  const { isLogged } = useUserContext();
  const user = useUserInfo()
  const { user_uuid, section } = useParams();
  const history = useHistory();
  const [ activeIndex, setActiveIndex ] = useState(getCurrentIndex(section));

  const handleSectionChange = (e, data) => {
    const newIndex = data.activeIndex
    const newSection = data.panes[newIndex].pane.key
    
    if(newIndex !== activeIndex){
      setActiveIndex(newIndex);
      history.replace(`/user/${user_uuid}/${newSection}`)
    }
  }

  return(
    <>
      {
        isLogged && user.uuid === user_uuid ?
          <div>
            <ProfileHeader/>
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