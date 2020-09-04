import React from "react";
import { mount } from "enzyme";
import Home from "../../../../components/views/Home";
import UserContextMock from "../../../__mocks__/utils/ContextMock";
import "../../../config";
import { response } from "../../../__mocks__/localStorage/data";
import { setLocalStorage } from "../../../../services/sessionHandlers/localStorageHandler";

describe("<Home/>", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(
      <UserContextMock>
        <Home/>
      </UserContextMock>
    )
  })
  
  it("should render without break", () => {
    expect(wrapper.find(".defaultHero")).toBeTruthy()
  })

  it("should display default welcome message", () => {
    expect(wrapper.find("p").text()).toEqual("Registrate y visita la casa de tus sueños.")
  })

  it("should display custom welcome message", async() => {
    const res = response();
    await setLocalStorage(res);

    const contextWrapper = mount(
      <UserContextMock>
        <Home/>
      </UserContextMock>
    )

    expect(contextWrapper.find("p").text()).toEqual(`Bienvenido ${res.data.names}.`)
  })

  it("should renders Link to /properties", () => {
    const propertiesLink = wrapper.find("a.btn-signin")

    expect(propertiesLink).toBeTruthy()
  })
})