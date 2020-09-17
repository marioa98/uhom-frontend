import React, { useState } from "react";
import { Container, Header } from "semantic-ui-react";
import UsersController from "../../../controllers/UsersController";
import useUserInfo from "../../../services/hooks/usersHooks";
import { useSessionInfo } from "../../../services/sessionInfo";
import { cleanEmpties } from "../../../services/validations/dataFormater";
import SetUserForm from "../Forms/SetUserForm";
import UserInfo from "./Info/UserInfo";
import Loading from "../../views/Loading";
import { setLocalStorage } from "../../../services/sessionHandlers/localStorageHandler";

export default function ProfileInfo(){
  const session = useSessionInfo();
  const [responseErrors, setErrors] = useState({});
  const [isEditable, setEditable] = useState(false)
  const { user } = useUserInfo(`/users/${session.id}`, { 'Authorization': session.authorization })

  const handleEdition = () => setEditable(!isEditable)

  const updateUser = data => {
    const cleanData = cleanEmpties(data)
    UsersController.update(session.id, cleanData, session.authorization)
      .then( res => {
        setLocalStorage(res, session.authorization)
        window.location.reload();
      })
      .catch(err => setErrors(err.response.data.details))
  }

  if(!user) return <Loading />

  return(
    <Container textAlign="justified">
      <Header as="h1" textAlign="center">
        Información general
      </Header>

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
              notRequired={true}
            />
          : <UserInfo user={user} handleEdition={handleEdition} />
      }
    </Container>
  )
}