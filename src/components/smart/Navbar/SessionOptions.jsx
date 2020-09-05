import React from 'react';
import "../../../assets/styles/General/buttons.css";
import {Button} from "semantic-ui-react";
import useNavigation from '../../../services/hooks/historyNavigation';

export function SessionOptions(){

  const goTo = useNavigation();

  return(
    <div>
      <Button.Group size="small">
        <Button className="btn-signin" onClick={() => goTo('/signin')}>
          Registrarse
        </Button>
        <Button.Or text="o"/>
        <Button className="btn-login" onClick={() => goTo("/login")}>
          Iniciar sesión
        </Button>
      </Button.Group>
    </div>
  )
}