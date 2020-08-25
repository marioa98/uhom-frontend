import React, { useEffect, useState } from "react";
import { Container, Header, Message } from "semantic-ui-react";
import UsersController from "../../../controllers/UsersController";
import { useSessionInfo } from "../../../services/sessionInfo";
import getUser from "../../../services/UsersService";
import SetUserForm from "../Forms/SetUserForm";
import UserInfo from "./Info/UserInfo";

export default function ProfileInfo(){
  const [user, setUser] = useState({})
  const session = useSessionInfo();
  const [isUpdated, setUpdate] = useState(false);
  const [responseErrors, setErrors] = useState({});
  const [isEditable, setEditable] = useState(false)

  useEffect(() => {
    (async () => {
        const response = await getUser(session.id, session.authorization)
        if(response.data) setUser(response.data)
      }
    )();
  }, [])

  const handleEdition = () => setEditable(!isEditable)

  const updateUser = (data, event) => {
    UsersController.update(session.id, data, session.authorization)
      .then(() => {
        window.location.reload();
        setUpdate(true)
      })
      .catch(err => setErrors(err.response.data.details))
  }

  return(
    <Container textAlign="justified">
      <Header as="h1" textAlign="center">
        Información general
      </Header>
      <div>
        {
          isUpdated 
            ? <Message positive>
                <Message.Header>Actualización exitosa</Message.Header>
                <p>Tu información de perfil ha sido actualizada de forma exitosa</p>
              </Message>
            : ''
        }
      </div>

      {
        isEditable
          ? <SetUserForm 
              user={user} 
              responseErrors={responseErrors}
              submitionHandler={updateUser}
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