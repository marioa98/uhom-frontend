import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import {ContactDetails} from './ContactDetails';
import {PersonalDetails} from "./PersonalDetails"

export class SigninFormMaster extends Component {
  state = {
    step: 1,
    stepsTotal: 2,
    names: '',
    surnames: '',
    email: '',
    email_confirmation: '',
    password_confirmation: '',
    password: '',
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

  handleChange = input => event => {
    this.setState({
      [input]: event.target.value
    })
  }

  handleForms = (step, values) => {
  }
  
  render() {
    const {step} = this.state
    const {stepsTotal} = this.state
    const {
      names,
      surnames,
      birth_date,
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
      email,
      email_confirmation,
      password,
      password_confirmation,
      phone_number
    }
    
    switch(step){
      case 1: 
        return <PersonalDetails
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          handleChange={this.handleChange}
          values={values}
          currentStep={step}
          stepsTotal={stepsTotal}
        />
      case 2:
        return <ContactDetails
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          handleChange={this.handleChange}
          values={values}
          currentStep={step}
          stepsTotal={stepsTotal}
        />
    }
  }
}