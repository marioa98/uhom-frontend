import React, { useState } from "react";
import { Button, Icon, Label, Menu } from "semantic-ui-react";
import { useUserContext } from "../../../UserContext";
import SigninFirst from "../Modals/SigninFirst";

export default function LikeButton({ likesInfo, propertyId }){

  // console.log(likesInfo)
  const {total_likes: totalLikes, currently_liked: currentlyLiked } = likesInfo
  const { isLogged } = useUserContext();
  const [isOpen, setToggle] = useState(false)
  const [likes, setLikes] = useState(totalLikes);

  const openModal = () => setToggle(!isOpen)

  const handleLike = () => {
    if(!isLogged) openModal()
    else{

    }
  }

  return(
    <>
      <div>
        <SigninFirst
          isOpen={isOpen}
          handleModal={openModal}
        />
      </div>
      <Menu.Item position="right">
        <Button
          color="red"
          icon="heart"
          basic={!currentlyLiked}
          label={{
            content: totalLikes,
            pointing: "left",
            color: "red"
          }}
          onClick={handleLike}
        />
      </Menu.Item>
    </>
  )
}