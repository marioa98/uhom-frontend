import React from 'react';
import { mount } from "enzyme"
import App from '../App';
import "./config"

describe('<App/>', () => {
  
  it('renders correctly', () => {
    const wrapper = mount(<App/>)
    expect(wrapper.type()).toEqual(App)
  })
  
})
