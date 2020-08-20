import React from 'react';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers";
import {Button, Form, Message} from 'semantic-ui-react';

import { loginValidations } from "../../../services/validations/validationSchemas"
import loginHandler from "../../../services/sessionHandlers/authService";
import { UserContext } from "../../../App";

import "../../../assets/styles/General/forms.css";
import "../../../assets/styles/General/divs.css";
import "../../../assets/styles/General/errors.css";

export function LoginForm(){
  const { dispatch } = React.useContext(UserContext);
  const {register, handleSubmit, errors, setError} = useForm({
    resolver: yupResolver(loginValidations)
  })

  const submit = async (data, event) => {
    const response = await loginHandler(data, dispatch)
    if( response && response.status === 401) await setError("invalidKeys", {
      type: "serverResponse",
      message: "La combinación de email y contraseña es incorrecta"
    })
  }

  return(
    <Form className="large basic-form" onSubmit={handleSubmit(submit)}>
      {
        errors.invalidKeys && <p className="dark-error fluid-error">{errors.invalidKeys.message}</p>
      }
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
        <Button className="btn-login" type="submit">
          Iniciar Sesión
        </Button>
      </div>
    </Form>
  )
}