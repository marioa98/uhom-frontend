import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';
import "../../../assets/styles/General/forms.css";

export class LoginForm extends Component{
  render(){
    return(
      <Form className="large basic-form">
        <Form.Field className="required">          
          <label>Correo electrónico:</label>
          <input type="email" placeholder="Correo electrónico"/>
        </Form.Field>

        <Form.Field 
          className="required"
        >
          <label>Contraseña:</label>
          <input type="password" placeholder="Contraseña"/>
        </Form.Field>
        
        <Button className="btn-login">
          Iniciar Sesión
        </Button>
      </Form>
    )
  }
}