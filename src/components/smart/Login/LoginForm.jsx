import React from 'react';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers";
import {Button, Form} from 'semantic-ui-react';

import { loginValidations } from "../../../services/validations/validationSchemas"
import loginHandler from "../../../services/sessionHandlers/authService";
import {disableButton} from "../../../services/validations/submitValidationHelper";
import { UserContext } from "../../../App";

import "../../../assets/styles/General/forms.css";
import "../../../assets/styles/General/divs.css";
import "../../../assets/styles/General/errors.css"

export function LoginForm(){
  const { dispatch } = React.useContext(UserContext);
  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(loginValidations)
  })

  const submit = (data, event) => {
    event.preventDefault();
    loginHandler(data, dispatch);
  }

  return(
    <Form className="large basic-form" onSubmit={handleSubmit(submit)}>
      <Form.Field required>
        <label>Email:</label>
        <div className="ui input">
          <input
            name="email"
            placeholder="Email"
            ref={register}
          />
        </div>
        {errors.email && <p className="dark-error">{errors.email.message}</p>}
      </Form.Field>

      <Form.Field required>
        <label> Contraseña: </label>
        <div className="ui input">
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            ref={register}
          />
        </div>
        {errors.password && <p className="dark-error">{errors.password.message}</p> }
      </Form.Field>
      
      <div className="fluid">
        <Button className="btn-login" type="submit" disabled={disableButton(errors)}>
          Iniciar Sesión
        </Button>
      </div>
    </Form>
  )
}