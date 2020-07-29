import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { signupValidations } from "../../../services/validations/validationSchemas"
import { Button, Form} from "semantic-ui-react";
import { TiHome } from "react-icons/ti";
import "../../../assets/styles/General/divs.css";
import "../../../assets/styles/General/errors.css"

export function SigninForm(){
  const user = {
    names: '',
    surnames: '',
    email: '',
    phone_number: '',
    password: '',
    password_confirmation: '',
  }
  const [form, setState] = useState(user)
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signupValidations)
  });

  const updateUser = e => {
    const target = e.target
    setState({
      ...form,
      [target.name]: target.value
    })
  }

  const onSubmit = data => console.log(data)

  return(
    <Form className="large basic-form" onSubmit={handleSubmit(onSubmit)}>
      <Form.Field required>
        <label> Nombre(s): </label>
        <div className="ui input">
          <input
            name="names"
            placeholder="Nombre(s)"
            onChange={updateUser}
            ref={register}
          />
        </div>
      </Form.Field>
      {errors.names && <p className="dark-error">{errors.names.message}</p> }

      <Form.Field required>
        <label> Apellido(s): </label>
        <div className="ui input">
          <input
            name="surnames"
            placeholder="Apellido(s)"
            onChange={updateUser}
            ref={register}
          />
        </div>
      </Form.Field>
      {errors.surnames && <p className="dark-error">{errors.surnames.message}</p> }

      <Form.Group widths="equal">
        <Form.Field required>
          <label> Email: </label>
          <div className="ui input">
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={updateUser}
              ref={register}
            />
          </div>
        </Form.Field>
        {errors.email && <p className="dark-error">{errors.email.message}</p> }
        
        <Form.Field required>
          <label> Celular: </label>
          <div className="ui input">
            <input
              name="phone_number"
              type="text"
              placeholder="Celular"
              onChange={updateUser}
              ref={register}
            />
          </div>
        </Form.Field>
        {errors.phone_number && <p className="dark-error">{errors.phone_number.message}</p> }
      </Form.Group>

      <Form.Group widths="equal">

        <Form.Field required>
          <label> Contraseña: </label>
          <div className="ui input">
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={updateUser}
              ref={register}
            />
          </div>
        </Form.Field>

        <Form.Field required>
          <label> Confirmar contraseña: </label>
          <div className="ui input">
            <input
              name="password_confirmation"
              type="password"
              placeholder="Confirmar contraseña"
              onChange={updateUser}
              ref={register}
            />
          </div>
        </Form.Field>

        <div>
          {errors.password && <p className="dark-error">{errors.password.message}</p> }
          {errors.password_confirmation && <p className="dark-error">{errors.password_confirmation.message}</p> }
        </div>
      </Form.Group>

      <div className="fluid">
        <Button className="btn-login" type="submit">
          <TiHome/> Comenzar
        </Button>
      </div>
    </Form>
  )
}