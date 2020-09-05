import React, { useEffect } from "react"
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { notRequiredValidations, signupValidations, validationsAfterSubmit } from "../../../services/validations/validationSchemas"
import { Button, Divider, Form, Icon } from "semantic-ui-react";
import Cleave from "cleave.js/react";
import "../../../assets/styles/General/divs.css";
import "../../../assets/styles/General/errors.css";

export default function SetUserForm(props){
  
  const {
    user,
    handleEdition,
    submitionHandler,
    responseErrors,
    extraClasses,
    isCancelable,
    iconName,
    submitButtonMessage,
    notRequired
  } = props

  const setResolver = () => notRequired ? notRequiredValidations : signupValidations

  const { register, handleSubmit, errors, control, setError } = useForm({
    resolver: yupResolver(setResolver())
  });

  useEffect(() => {
    if(responseErrors){
      validationsAfterSubmit(responseErrors)
        .forEach(({name, type, message}) => setError(name, {type, message}))
    }
  }, [responseErrors])

  const setValue = (userField) => user && user[`${userField}`] ? user[`${userField}`] : null

  const requiredField = () => notRequired ? "" : "required"

  return(
    <>
      <Form className={`large ${extraClasses || ''}`} onSubmit={ handleSubmit(submitionHandler)}>
        <Form.Field className={requiredField()}>
          <label> Nombre(s): </label>
          <div className="ui input">
            <input
              name="names"
              placeholder="Nombre(s)"
              ref={register}
              defaultValue={setValue('names')}
            />
          </div>
          {errors.names && <p className="dark-error">{errors.names.message}</p> }
        </Form.Field>

        <Form.Field className={requiredField()}>
          <label> Apellido(s): </label>
          <div className="ui input">
            <input
              name="surnames"
              placeholder="Apellido(s)"
              ref={register}
              defaultValue={setValue('surnames')}
            />
          </div>
          {errors.surnames && <p className="dark-error">{errors.surnames.message}</p> }
        </Form.Field>

        <Form.Group widths="equal">
          <Form.Field className={requiredField()}>
            <label> Email: </label>
            <div className="ui input">
              <input
                name="email"
                type="email"
                placeholder="Email"
                ref={register}
                defaultValue={setValue('email')}
              />
            </div>
            {errors.email && <p className="dark-error">{errors.email.message}</p> }
          </Form.Field>
          
          <Form.Field className={requiredField()}>
            <label> Celular: </label>
            <div className="ui input">
              <Controller
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
                defaultValue={setValue('phone_number')}
                name="phone_number"
                control={control}
              />
            </div>
            {errors.phone_number && <p className="dark-error">{errors.phone_number.message}</p> }
          </Form.Field>
        </Form.Group>

        <Form.Group widths="equal">

          <Form.Field className={requiredField()}>
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

          <Form.Field className={requiredField()}>
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
          <Button className="btn-login" type="submit" icon>
            <Icon name={iconName}/> {submitButtonMessage}
          </Button>
          {
            isCancelable ? 
              <>
                <Divider hidden/>
                <Button onClick={handleEdition} className="btn-signin" icon>
                  <Icon name="undo"/> Regresar
                </Button>
              </>
            : ''
          }
        </div>
      </Form>
    </>
  )
}