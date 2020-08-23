import { response } from "../__mocks__/localStorage/data"
import { clearLocalStorage, setLocalStorage, setSessionItem } from "../../services/sessionHandlers/localStorageHandler"

function getFromLocalStorage(item){
  return localStorage.getItem(item)
}

describe("setLocalStorage()", () => {
  const res = response();
  beforeAll(() => {
    setLocalStorage(res);
  })

  afterAll(() => clearLocalStorage())
  
  test("set session item correctly", () => {
    const sessionItem = JSON.parse(getFromLocalStorage('session'));
    const expected = setSessionItem(res.data, res.headers.authorization)
    expect(sessionItem).toEqual(JSON.parse(expected))
  })
})

describe("clearLocalStorage()", () => {
  beforeAll(() => {
    setLocalStorage(response());
  })

  test("clear localStorage correclty", () => {
    clearLocalStorage();
    const localStorageUser = getFromLocalStorage('user')
    const localStorageToken = getFromLocalStorage('token')

    expect(localStorageUser).toBe(null)
    expect(localStorageToken).toBe(null)
  })
})