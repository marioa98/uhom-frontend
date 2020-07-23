import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';
import "../../../assets/styles/General/forms.css";
import loginHandler from "../../../services/sessionHandlers/loginHandler";

export class LoginForm extends Component{

  state = {
    email: '',
    password: ''
  }

  handleChange = input => (event, data) => {
    this.setState({
      [input]: data.value
    })
  }

  render(){

    const {email, password} = this.state
    const values = {email, password}

    return(
      <Form className="large basic-form" onSubmit={() => loginHandler(values)}>
        <Form.Input
          name="email"
          required
          type="email"
          label="email"
          placeholder="email"
          onChange={this.handleChange('email')}
        />

        <Form.Input
          name="password"
          required
          type="password"
          label="password"
          placeholder="Contraseña"
          onChange={this.handleChange('password')}
        />
        
        <Button className="btn-login" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    )
  }
}