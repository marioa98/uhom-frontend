import { response } from "../__mocks__/localStorage/data"
import { clearLocalStorage, setLocalStorage } from "../../services/sessionHandlers/localStorageHandler"

function getFromLocalStorage(item){
  return localStorage.getItem(item)
}

describe("setLocalStorage()", () => {
  const res = response();
  beforeAll(() => {
    setLocalStorage(res);
  })
  
  test("set user data correctly", () => {
    const localStorageUser = JSON.parse(getFromLocalStorage('user'));
    expect(localStorageUser).toEqual(res.data)
  })

  test("set user bearer token correclty", () => {
    const localStorageToken = getFromLocalStorage('token')
    expect(localStorageToken).toEqual(res.headers.authorization)
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