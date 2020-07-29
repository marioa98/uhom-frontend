import React, {useState} from "react"
import { Form } from 'semantic-ui-react';
import {ContactDetails} from './ContactDetails';
import {PersonalDetails} from "./PersonalDetails"
import signinHandler from "../../../services/sessionHandlers/signinHandler"
import {useForm} from "react-hook-form";

export function SigninFormMaster(){
  const [step, setStep] = useState(1);
  const totalSteps = 2
  const [names, setNames] = useState('')
  const [surnames, setSurnames] = useState('')
  const [gender, setGender] = useState(0)
  const [email, setEmail] = useState('')
  const [email_confirmation, setEmailConfirmation] = useState('') 
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [birth_date, setBirthDate] = useState('')
  
  const values = {names, surnames, gender, email, email_confirmation, 
    password, password_confirmation, phone_number, birth_date}
  
  const setters = {setNames, setSurnames, setGender, setEmail,
    setEmailConfirmation, setPassword, setPasswordConfirmation, setPhoneNumber, setBirthDate}

  const nextStep = () => {
    setStep(step + 1)
  }
  
  const previousStep = () => setStep(step - 1)

  const { handleSubmit } = useForm();
  const submit = (data) => {
    console.log(data)
  }
  
  let handleForm = () => {
    switch(step){
      case 1:
        return(
          <PersonalDetails
            nextStep={nextStep}
            values={values}
            setters={setters}
          />
        )
      case 2:
        return(
          <ContactDetails
            previousStep={previousStep}
            values={values}
            setters={setters}
          />
        )
    }
  }

  return(
    <div>
      <div className="form-header">
        <h3>Paso {step} de {totalSteps} </h3>
      </div>
      <Form className="large basic-form" onSubmit={handleSubmit(submit)}>
        {handleForm()}
      </Form>
    </div>
  )
}