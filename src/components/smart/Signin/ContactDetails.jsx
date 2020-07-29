import React from 'react';
import {Button, Form} from 'semantic-ui-react';
import {TiArrowLeftThick, TiHome} from "react-icons/ti"

export function ContactDetails(props){
  const {previousStep, values, setters} = props

  let back = (e) => {
    e.preventDefault();
    previousStep();
  }
  
  return(
    <div>
      <h3>Información para comunicación</h3>
  
      <Form.Group widths="equal">
        <Form.Input
          name="email"
          type="email"
          required={true}
          label="e-mail:"
          placeholder="e-mail"
          onChange={(e, data) => setters.setEmail(data.value)}
          value={values.email}
        />
  
        <Form.Input
          type="email"
          name="email_confirmation"
          required={true}
          label="Confirmación del e-mail"
          placeholder="Confirmación del e-mail"
          onChange={(e, data) => setters.setEmailConfirmation(data.value)}
          value={values.email_confirmation}
        />
      </Form.Group>
  
      <Form.Group widths="equal">
        <Form.Input
          name="password"
          type="password"
          required={true}
          label="Contraseña:"
          placeholder="Contraseña"
          onChange={(e, data) => setters.setPassword(data.value)}
        />
  
        <Form.Input
          name="password_confirmation"
          type="password"
          required={true}
          label="Confirmación de contraseña"
          placeholder="Confirmación de contraseña"
          onChange={(e, data) => setters.setPasswordConfirmation(data.value)}
        />
      </Form.Group>
  
      <Form.Input
        name="phone_number"
        fluid
        required={true}
        label="Celular"
        placeholder="Celular"
        onChange={(e, data) => setters.setPhoneNumber(data.value)}
        value={values.phone_number}
      /> 
  
      <div className="button-container">
        <Button className="btn-signin" onClick={(e) => back(e)}>
          <TiArrowLeftThick/> Regresar
        </Button>
  
        <Button className="btn-login" type="submit">
          Comenzar <TiHome/>
        </Button>
      </div>
    </div>
  )
}