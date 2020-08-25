import React, { useEffect, useState } from "react";
import { Container, Header } from "semantic-ui-react";
import { useSessionInfo } from "../../../services/sessionInfo";
import getUser from "../../../services/UsersService";
import SetUserForm from "../Forms/SetUserForm";
import UserInfo from "./Info/UserInfo";

export default function ProfileInfo(){
  const [user, setUser] = useState({})
  const session = useSessionInfo();
  const [isEditable, setEditable] = useState(false)

  useEffect(() => {
    (async () => {
        const response = await getUser(session.id, session.authorization)
        if(response.data) setUser(response.data)
      }
    )();
  }, [])

  const handleEdition = () => setEditable(!isEditable)

  return(
    <Container textAlign="justified">
      <Header as="h1" textAlign="center">
        Información general
      </Header>

      {
        isEditable
          ? <SetUserForm 
              user={user} 
              handleEdition={handleEdition} 
              isCancelable={true}
              submitButtonMessage="Actualizar"
              iconName="edit"
            />
          : <UserInfo user={user} handleEdition={handleEdition} />
      }
    </Container>
  )
}