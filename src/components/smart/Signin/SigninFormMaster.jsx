import React, { Children, Component } from 'react';
import { Form } from 'semantic-ui-react';
import {ContactDetails} from './ContactDetails';
import {PersonalDetails} from "./PersonalDetails"
import signinHandler from "../../../services/sessionHandlers/signinHandler"

export class SigninFormMaster extends Component {
  state = {
    step: 1,
    stepsTotal: 2,
    names: '',
    surnames: '',
    gender: 0,
    email: '',
    email_confirmation: '',
    password: '',
    password_confirmation: '',
    phone_number: '',
    birth_date: ''
  }

  nextStep = () => {
    const {
      step
    } = this.state
    this.setState({
      step: step + 1
    })
  }

  previousStep = () => {
    const {
      step
    } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => (event, data) => {
    this.setState({
      [input]: data.value
    })
  }

  handleForm = (values) => {
    const {step} = this.state
    switch(step){
      case 1:
        return <PersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
      case 2:
        return(
          <ContactDetails
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      }
    }
    
    render() {
      const {
        names,
        surnames,
        birth_date,
        gender,
        email,
        email_confirmation,
        password,
        password_confirmation,
        phone_number
      } = this.state
      
      const values = {
        names,
        surnames,
        birth_date,
        gender,
        email,
        email_confirmation,
        password,
        password_confirmation,
        phone_number
      }
    return(
      <div>
        <div className="form-header">
          <h3>Paso {this.state.step} de {this.state.stepsTotal} </h3>
        </div>
        <Form className="large basic-form" onSubmit={() => signinHandler(values)}>
          {this.handleForm(values)}
        </Form>
      </div>
    )
  }
}