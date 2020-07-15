import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import "../../../assets/styles/General/forms.css";

export class LoginForm extends Component{
  render(){
    return(
      <div className="ui large form basic-form">
        <div className="fields">
          <div className="required field">
            <label>Correo electrónico:</label>
            <input type="email" placeholder="Correo electrónico"/>
          </div>
        </div>
        
        <div className="fields">
          <div className=" required field">
            <label>Contraseña:</label>
            <input type="password" placeholder="Contraseña"/>
          </div>
        </div>

        <Button className="btn-login">
          Iniciar Sesión
        </Button>
      </div>
    )
  }
}