import React from 'react';
import "../../../assets/styles/buttons.css";
import {Button} from "semantic-ui-react";
import {useHistory} from 'react-router-dom';

export function SessionOptions(){
  const history = useHistory();

  const goTo = (path) => {
    history.push(path)
  }

  return(
    <div>
      <Button.Group size="small">
        <Button className="btn-signin">
          Sign in
        </Button>
        <Button.Or/>
        <Button className="btn-login" onClick={() => goTo("/login")}>
          Login
        </Button>
      </Button.Group>
    </div>
  )
}