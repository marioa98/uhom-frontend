import React from 'react';
import {Button, Form, Select} from 'semantic-ui-react';
import {TiArrowRightThick} from "react-icons/ti";
import {DateInput} from "semantic-ui-calendar-react";
import {genderOptions} from "../../../assets/resources/genders";
import { useForm } from "react-hook-form"

export function PersonalDetails(props){
  const {nextStep, setters, values} = props
  
  const { register } = useForm();

  const _continue = (e) => {
    e.preventDefault();
    nextStep();
  }

  return(
    <div>
      <h3>Información del usuario</h3>
      <Form.Group widths="equal">
        <Form.Field required>
          <label htmlFor="names">Nombres</label>
          <input 
            className="ui input"
            name="names"
            placeholder="Nombre(s)"
            onChange={(e) => setters.setNames(e.target.value)}
            defaultValue={values.names}
            ref={register}
          />
        </Form.Field>
        {/* <Form.Input
          name="names"
          label="Nombre(s):"
          required={true}
          placeholder="Nombre(s)"
          onChange={(e, data) => setters.setNames(data.value)}
          defaultValue={values.names}
          ref={register}
        /> */}
        <Form.Input
          name="surnames"
          label="Apellido(s):"
          required={true}
          placeholder="Apellido(s)"
          onChange={(e, data) => setters.setSurnames(data.value)}
          defaultValue={values.surnames}
          ref={register}
        />
      </Form.Group>
  
      <Form.Group widths="equal">
        <Form.Input required={true} label="Fecha de nacimiento:">
          <DateInput
            name="date"
            placeholder="Fecha de nacimiento"
            value={values.birth_date}
            onChange={(e, data) => {setters.setBirthDate(data.value)}}
            startMode="year"
            animation={null}
            popupPosition="top right"
            clearable={true}
            dateFormat="YYYY-MM-DD"
            closable={true}
            ref={register}
          />
        </Form.Input>
  
        <Form.Input 
          required={true}
          label="Género"
        >
          <Select 
            placeholder="Selecciona tu género" 
            options={genderOptions}
            value={values.gender}
            onChange={(e, data) => setters.setGender(data.value)}
            ref={register}
          />
        </Form.Input>
      </Form.Group>
  
      <div className="button-container">
        <Button className="btn-login" onClick={(e) => _continue(e)}>
          Siguiente <TiArrowRightThick/>
        </Button>
      </div>
    </div>
  )
}