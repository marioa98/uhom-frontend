import faker from "faker"
import { objectWithEmpties, validObject } from "../../../__mocks__/defaults/objectDefaults";
import { cleanEmpties, useCRLF } from "../../../../services/validations/dataFormater";
import { testedHook } from "../../../__mocks__/TestComponent";

describe("cleanEmpties()", () => {
  it("should return an object with empty values removed", () => {
    const response = cleanEmpties(objectWithEmpties);
    expect(response).toEqual(validObject)
  })

  it("should return same object", () => {
    const response = cleanEmpties(validObject);
    expect(response).toEqual(validObject);
  })
})

describe("useCRLF()", () => {
  let response;
  const defaultMessage = faker.lorem.sentence();
  const currentValue = faker.lorem.sentence();

  it("should return currentValue splited by CRLF", () => {
    testedHook(() => { response = useCRLF(currentValue, defaultMessage) })
    expect(response).toEqual(currentValue.split("\n"));
  })

  it("should return defaultMessage when currentValue is null", () => {
    testedHook(() => { response = useCRLF(null, defaultMessage) })
    expect(response.length).toEqual(1)
    expect(response).toEqual([defaultMessage])
  })

  it("should return defaultMessage when currentValue is undefined", () => {
    testedHook(() => { response = useCRLF(undefined, defaultMessage) })
    expect(response.length).toEqual(1)
    expect(response).toEqual([defaultMessage])
  })

  it("should return defaultMessage when currentValue is empty string", () => {
    testedHook(() => { response = useCRLF("", defaultMessage) })
    expect(response.length).toEqual(1)
    expect(response).toEqual([defaultMessage])
  })

})