import faker from "faker"

const password = "Abcd1234";

export const validUser = {
  names: faker.name.firstName(),
  surnames: faker.name.lastName(),
  email: faker.internet.email(),
  password: password,
  password_confirmation: password,
  phone_number: faker.phone.phoneNumberFormat()
}