import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { signupValidations } from "../../../services/validations/validationSchemas"
import { Button, Form} from "semantic-ui-react";
import { TiHome } from "react-icons/ti";
import Cleave from "cleave.js/react";

import UsersController from "../../../controllers/UsersController";
import {disableButton} from "../../../services/validations/submitValidationHelper";
import loginHandler from "../../../services/sessionHandlers/authService"
import { UserContext } from "../../../App";

import "../../../assets/styles/General/divs.css";
import "../../../assets/styles/General/errors.css";

export function SigninForm(){
  
  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(signupValidations)
  });

  const { dispatch } = useContext(UserContext);

  const submit = (data, event) => {
    event.preventDefault();
    UsersController.create(data)
      .then(res => {
        if(res.status === 200){
          const loginData = {
            email: data.email,
            password: data.password
          }
          loginHandler(loginData, dispatch);
        }
      }).catch(err => console.log(err))
  }

  return(
    <Form className="large basic-form" onSubmit={handleSubmit(submit)}>
      <Form.Field required>
        <label> Nombre(s): </label>
        <div className="ui input">
          <input
            name="names"
            placeholder="Nombre(s)"
            ref={register}
          />
        </div>
        {errors.names && <p className="dark-error">{errors.names.message}</p> }
      </Form.Field>

      <Form.Field required>
        <label> Apellido(s): </label>
        <div className="ui input">
          <input
            name="surnames"
            placeholder="Apellido(s)"
            ref={register}
          />
        </div>
        {errors.surnames && <p className="dark-error">{errors.surnames.message}</p> }
      </Form.Field>

      <Form.Group widths="equal">
        <Form.Field required>
          <label> Email: </label>
          <div className="ui input">
            <input
              name="email"
              type="email"
              placeholder="Email"
              ref={register}
            />
          </div>
          {errors.email && <p className="dark-error">{errors.email.message}</p> }
        </Form.Field>
        
        <Form.Field required>
          <label> Celular: </label>
          <div className="ui input">
            <Controller
              name="phone_number"
              control={control}
              as={
                <Cleave
                  options={{
                    numericOnly: true,
                    blocks: [3,3,4],
                    delimiter: '-'
                  }}
                  placeholder="Celular"
                />
              }
            />
          </div>
          {errors.phone_number && <p className="dark-error">{errors.phone_number.message}</p> }
        </Form.Field>
      </Form.Group>

      <Form.Group widths="equal">

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

        <Form.Field required>
          <label> Confirmar contraseña: </label>
          <div className="ui input">
            <input
              name="password_confirmation"
              type="password"
              placeholder="Confirmar contraseña"
              ref={register}
            />
          </div>
          {errors.password_confirmation && <p className="dark-error">{errors.password_confirmation.message}</p> }
        </Form.Field>

        <div>
        </div>
      </Form.Group>
      <div className="fluid">
        <Button className="btn-login" type="submit" disabled={disableButton(errors)}>
          <TiHome/> Comenzar
        </Button>
      </div>
    </Form>
  )
}