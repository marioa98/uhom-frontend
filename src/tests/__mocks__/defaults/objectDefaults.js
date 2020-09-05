import faker from "faker";

const fakerLorem = faker.lorem.sentence()


export const objectWithEmpties = {
  foo: fakerLorem,
  nullable: null,
  undefinable: undefined,
  empty: "",
  bar: fakerLorem
}

export const validObject = {
  foo: fakerLorem,
  bar: fakerLorem
}