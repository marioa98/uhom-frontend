import faker from "faker"

export function response(){
  const bearerToken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMiIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTU5ODA1MDI3OSwiZXhwIjoxNTk4MTM2Njc5LCJqdGkiOiJlNThiNGNmMC03M2JhLTRjMTAtYjNjNi0wYTRiNDQ1MWM4ZjkifQ.R0m_bohYLCEURlRJ8qzUAX-_D5U7cOLAEpUhObQ5Z30"

  return {
    "headers": {
      "authorization": bearerToken
    },
    "data": getUserData()
  }
}

export function sessionItem(user, token) {
  
}

function getUserData(){
  return {
    "uuid": "a54a48d7-1503-440d-a855-f190dceefd60",
    "names": faker.name.firstName(),
    "surnames": faker.name.lastName(),
    "email": faker.internet.email(),
    "phone_number": faker.phone.phoneNumberFormat(),
    "role": "user"
  }
}

