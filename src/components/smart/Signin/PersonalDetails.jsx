import React, {Component} from 'react';
import {Button, Form, Select} from 'semantic-ui-react';
import {TiArrowRightThick} from "react-icons/ti";
import {DateInput} from "semantic-ui-calendar-react";
import {genderOptions} from "../../../assets/resources/genders";

export class PersonalDetails extends Component{
  continue = (e) =>{
    e.preventDefault()
    this.props.nextStep()
  }

  render(){
    const {values} = this.props
    const {setters} = this.props
    console.log(setters)
    return(
      <div>
        <h3>Información del usuario</h3>
        <Form.Group widths="equal">
          <Form.Input
            name="names"
            label="Nombre(s):"
            required={true}
            placeholder="Nombre(s)"
            onChange={this.props.handleChange('names')}
            defaultValue={values.names}
          />
          <Form.Input
            name="surnames"
            label="Apellido(s):"
            required={true}
            placeholder="Apellido(s)"
            onChange={this.props.handleChange('surnames')}
            defaultValue={values.surnames}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Input required={true} label="Fecha de nacimiento:">
            <DateInput
              name="date"
              placeholder="Fecha de nacimiento"
              value={values.birth_date}
              onChange={this.props.handleChange('birth_date')}
              startMode="year"
              animation={null}
              popupPosition="top right"
              clearable={true}
              dateFormat="YYYY-MM-DD"
              closable={true}
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
              onChange={this.props.handleChange('gender')}
            />
          </Form.Input>
        </Form.Group>

        <div className="button-container">
          <Button className="btn-login" onClick={this.continue}>
            Siguiente <TiArrowRightThick/>
          </Button>
        </div>
      </div>
    )
  }
}