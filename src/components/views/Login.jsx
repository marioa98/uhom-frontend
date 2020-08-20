import React, {useContext} from 'react';
import "../../assets/styles/General/backgrounds.css"
import {LoginForm} from "../smart/Login/LoginForm";
import { Link, Redirect, withRouter} from 'react-router-dom';
import { UserContext } from "../../App";

function Login(){

  const { user } = useContext(UserContext);

  return(
    <>
    { user.isLogged
      ? <Redirect to="/properties"/>
      : <div className="dark-bg-solid">
        <h3>Inicia sesión en GoHome's</h3>
        <LoginForm/>
        <p className="general-callout">
          ¿Aún no tienes cuenta? <Link to="/signin">Registrate aquí.</Link>
        </p>
      </div>
    }
    </>
  )
}

export default withRouter(Login)