import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';
import {TiArrowLeftThick, TiHome} from "react-icons/ti"

export class ContactDetails extends Component{

  back = (e) => {
    e.preventDefault()
    this.props.previousStep()
  }

  render(){
    const {values} = this.props
    return(
      <div>
        <h3>Información para comunicación</h3>

        <Form.Group widths="equal">
          <Form.Input
            type="email"
            name="email"
            required={true}
            label="e-mail:"
            placeholder="e-mail"
            onChange={this.props.handleChange('email')}
            value={values.email}
          />

          <Form.Input
            type="email"
            name="email_confirmation"
            required={true}
            label="Confirmación del e-mail"
            placeholder="Confirmación del e-mail"
            onChange={this.props.handleChange('email_confirmation')}
            value={values.email_confirmation}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Input
            type="password"
            required={true}
            label="Contraseña:"
            placeholder="Contraseña"
            onChange={this.props.handleChange('password')}
          />

          <Form.Input
            type="password"
            required={true}
            label="Confirmación de contraseña"
            placeholder="Confirmación de contraseña"
            onChange={this.props.handleChange('password_confirmation')}
          />
        </Form.Group>

        <Form.Input
          fluid
          required={true}
          label="Celular"
          placeholder="Celular"
          onChange={this.props.handleChange('phone_number')}
          value={values.phone_number}
        /> 

        <div className="button-container">
          <Button className="btn-signin" onClick={this.back}>
            <TiArrowLeftThick/> Regresar
          </Button>

          <Button className="btn-login" type="submit">
            Comenzar <TiHome/>
          </Button>
        </div>
      </div>
    )
  }
}