import React from 'react';
import "../../assets/styles/General/backgrounds.css"
import {LoginForm} from "../smart/Login/LoginForm";
import { useHistory, withRouter} from 'react-router-dom';

function Login(){
  const history = useHistory();

  const goTo = (path) => history.push(path)

  return(
    <div className="dark-bg-solid">
      <div className="row">
        <h3>Inicia sesión en uhom</h3>
      </div>
      <div className="row">
        <LoginForm/>
      </div>
    </div>
  )
}

export default withRouter(Login)