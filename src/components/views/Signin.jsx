import React from 'react';
import { Link, Redirect, withRouter} from 'react-router-dom';
import "../../assets/styles/General/backgrounds.css"
import "../../assets/styles/General/callouts.css"
import { SigninForm } from '../smart/Signin/SigninForm';
import { useUserContext } from '../../UserContext';

function Signin(){
  const { isLogged } = useUserContext();
  return(
    <>
      {
        isLogged
        ? <Redirect to="/properties"/>
        : <div className="dark-bg-solid">
            <h3>Registrate con nosotros</h3>
              <SigninForm/>
            <p className="general-callout">
              ¿Ya tienes cuenta con nosotros? <Link to="/login">Inicia sesión aquí.</Link>
            </p>
          </div>
      }
    </>
  )
}

export default withRouter(Signin)