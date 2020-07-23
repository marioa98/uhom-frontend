import * as Yup from "yup"

const requiredMessage = "Este campo es obligatorio"
const yupRequiredString = Yup.string().required(requiredMessage)
const yupRequiredEmail = yupRequiredString.email("Ingrese un email válido")
const yupRequiredPassword = yupRequiredString.min(8, "Contraseña mínimo de 8 caracteres")

export const signupSchema = Yup.object().shape({
  names: yupRequiredString,
  surnames: yupRequiredString,
  email: yupRequiredEmail,
  email_confirmation: yupRequiredEmail,
  password: yupRequiredPassword
})