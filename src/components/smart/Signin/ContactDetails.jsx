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
        <div className="form-header">
          <h3>Paso {this.props.currentStep} de {this.props.stepsTotal} </h3>
        </div>

        <Form className="large basic-form">
          <h3>Información para comunicación</h3>

          <Form.Group widths="equal">
            <Form.Input
              type="email"
              className="required"
              label="e-mail:"
              placeholder="e-mail"
              onChange={this.props.handleChange('email')}
              defaultValue={values.email}
            />

            <Form.Input
              type="email"
              className="required"
              label="Confirmación del e-mail"
              placeholder="Confirmación del e-mail"
              onChange={this.props.handleChange('email_confirmation')}
              defaultValue={values.email_confirmation}
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Input
              type="password"
              className="required"
              label="Contraseña:"
              placeholder="Contraseña"
              onChange={this.props.handleChange('password')}
            />

            <Form.Input
              type="password"
              className="required"
              label="Confirmación de contraseña"
              placeholder="Confirmación de contraseña"
              onChange={this.props.handleChange('password_confirmation')}
            />
          </Form.Group>

          <Form.Input
            fluid
            className="required"
            label="Celular"
            placeholder="Celular"
            onChange={this.props.handleChange('phone_number')}
          />

          <Button className="btn-signin" onClick={this.back}>
            <TiArrowLeftThick/> Regresar
          </Button>

          <Button className="btn-login">
            Comenzar <TiHome/>
          </Button>
        </Form>
      </div>
    )
  }
}