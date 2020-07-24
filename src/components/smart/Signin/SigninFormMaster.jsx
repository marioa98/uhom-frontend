import React, {useState} from "react"
import { Form } from 'semantic-ui-react';
import {ContactDetails} from './ContactDetails';
import {PersonalDetails} from "./PersonalDetails"
import signinHandler from "../../../services/sessionHandlers/signinHandler"

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
  
  const setters = {setNames, setSurnames, setGender, setEmail, setEmail,
    setEmailConfirmation, setPassword, setPasswordConfirmation, setPhoneNumber, setBirthDate}

  let nextStep = () => {
    console.log(values)
    console.log(setters)
    setStep(step + 1)
  }
  let previousStep = () => setStep(step - 1)

  let handleChange = (setInput) => (event, data) =>{
    console.log(data.value)
  }

  
  let handleForm = () => {
    switch(step){
      case 1:
        return(
          <PersonalDetails
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            setters={setters}
          />
        )
      case 2:
        return(
          <ContactDetails
            previousStep={previousStep}
            handleChange={handleChange}
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
      <Form className="large basic-form" onSubmit={() => signinHandler(values)}>
        {handleForm()}
      </Form>
    </div>
  )
}

// import React, { Children, Component } from 'react';

// export class SigninFormMaster extends Component {
//   state = {
//     step: 1,
//     stepsTotal: 2,
//     names: '',
//     surnames: '',
//     gender: 0,
//     email: '',
//     email_confirmation: '',
//     password: '',
//     password_confirmation: '',
//     phone_number: '',
//     birth_date: ''
//   }

//   nextStep = () => {
//     const {
//       step
//     } = this.state
//     this.setState({
//       step: step + 1
//     })
//   }

//   previousStep = () => {
//     const {
//       step
//     } = this.state
//     this.setState({
//       step: step - 1
//     })
//   }

//   handleChange = input => (event, data) => {
//     this.setState({
//       [input]: data.value
//     })
//   }

//   handleForm = (values) => {
//     const {step} = this.state
//     switch(step){
//       case 1:
//         return <PersonalDetails
//             nextStep={this.nextStep}
//             handleChange={this.handleChange}
//             values={values}
//           />
//       case 2:
//         return(
//           <ContactDetails
//             previousStep={this.previousStep}
//             handleChange={this.handleChange}
//             values={values}
//           />
//         )
//       }
//     }
    
//     render() {
//       const {
//         names,
//         surnames,
//         birth_date,
//         gender,
//         email,
//         email_confirmation,
//         password,
//         password_confirmation,
//         phone_number
//       } = this.state
      
//       const values = {
//         names,
//         surnames,
//         birth_date,
//         gender,
//         email,
//         email_confirmation,
//         password,
//         password_confirmation,
//         phone_number
//       }
//     return(
//       <div>
//         <div className="form-header">
//           <h3>Paso {this.state.step} de {this.state.stepsTotal} </h3>
//         </div>
//         <Form className="large basic-form" onSubmit={() => signinHandler(values)}>
//           {this.handleForm(values)}
//         </Form>
//       </div>
//     )
//   }
// }