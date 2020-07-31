import * as Yup from "yup"

const requiredMessage = "⚠ Este campo es obligatorio"
const yupRequiredString = Yup.string().required(requiredMessage)
const yupRequiredEmail = yupRequiredString.email("⚠ Ingrese un email válido")
const yupRequiredPassword = yupRequiredString.min(8, "⚠ Contraseña mínimo de 8 caracteres")

export const signupValidations = Yup.object().shape({
  names: yupRequiredString,
  surnames: yupRequiredString,
  email: yupRequiredEmail,
  password: yupRequiredPassword
    .matches(/(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, "⚠ La contraseña debe incluir mayúsculas, minúsculas y números"),
  password_confirmation: yupRequiredPassword
    .oneOf([Yup.ref('password')], "⚠ La contraseña debe de coincidir"),
  phone_number: yupRequiredString
    .matches(/(\d{10}|\(?\d{3}\)?[-. ]\d{3}[-.]\d{4})/, "⚠ El número de télefono debe de seguir el siguiente formato: 555-555-5555")
})

export const loginValidations = Yup.object().shape({
  email: yupRequiredString,
  password: yupRequiredString
})