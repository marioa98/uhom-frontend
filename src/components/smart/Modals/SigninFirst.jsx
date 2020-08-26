import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";
import "../../../assets/styles/General/buttons.css";

export default function SigninFirst(props){
  const { isOpen, handleModal } = props
  const history = useHistory();

  const signin = () => {
    history.push('/signin')
  }

  return(
    <Modal
      dimmer
      open={isOpen}
      size="tiny"
      onClose={() => handleModal()}
    >
      <Modal.Header> ¡Ups! Parece que aún no te has registrado </Modal.Header>
      <Modal.Content>
        <p>
          Registrate con nosotros para poder acceder a todas las funcionalidades.
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => handleModal()} icon>
          Cancelar
        </Button>

        <Button className="btn-login" onClick={() => signin()} icon>
          Registrarse
        </Button>
      </Modal.Actions>
    </Modal>
  )
}