import React, { useState } from "react";
import { Button, Menu } from "semantic-ui-react";
import LikesController from "../../../controllers/LikesController";
import { useUserContext } from "../../../UserContext";
import { useSessionInfo } from "../../../services/sessionInfo"
import SigninFirst from "../Modals/SigninFirst";

export default function LikeButton({ likesInfo, propertyId }){
  const {total_likes: totalLikes, currently_liked: currentlyLiked } = likesInfo
  const { isLogged } = useUserContext();
  const session = useSessionInfo();
  const [likesTotal, setTotal] = useState(totalLikes)
  const [isLiked, setLikeState] = useState(currentlyLiked)
  const [isOpen, setToggle] = useState(false)

  const openModal = () => setToggle(!isOpen)

  const handleLike = () => {
    if(isLogged) {
      LikesController.post(session.authorization, propertyId, session.id)
        .then(() => {
          updateTotalLikes();
          setLikeState(!isLiked)
        })
    }
    else openModal()
  }

  const updateTotalLikes = () => setTotal( () => isLiked ? likesTotal - 1 : likesTotal + 1)

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
          basic={!isLiked}
          label={{
            content: likesTotal,
            pointing: "left",
            color: "red"
          }}
          onClick={handleLike}
        />
      </Menu.Item>
    </>
  )
}