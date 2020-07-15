import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react'
import {TiArrowRightThick} from "react-icons/ti"
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

export class PersonalDetails extends Component{
  continue = (e) =>{
    e.preventDefault()
    this.props.nextStep()
  }

  render(){
    const {values} = this.props
    return(
      <div>
        <div className="form-header">
        <h3>Paso {this.props.currentStep} de {this.props.stepsTotal} </h3>
        </div>
        <Form className="large basic-form">
          <h3>Información del usuario</h3>
          <Form.Input
            className="required"
            label="Nombre(s):"
            placeholder="Nombre(s)"
            onChange={this.props.handleChange('names')}
            defaultValue={values.names}
          />
          <Form.Input
            required
            label="Apellido(s):"
            placeholder="Apellido(s)"
            onChange={this.props.handleChange('surnames')}
            defaultValue={values.surnames}
          />

          <Form.Field className="required" onChange={this.props.handleChange('birth_date')}>
            <label>Fecha de nacimiento:</label>
            <SemanticDatepicker
              pointing="top left"
              allowOnlyNumbers={true}
              format="YYYY-MM-DD"
              locale="es-ES"
              datePickerOnly={true}
              showToday={false}
            />
          </Form.Field>

          <Button className="btn-login" onClick={this.continue}>
            Siguiente <TiArrowRightThick/>
          </Button>
        </Form>
      </div>
    )
  }
}