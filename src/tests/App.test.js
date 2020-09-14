import React from 'react';
import "./config"
import { mount } from "enzyme"
import App from '../App';

describe('<App/>', () => {
  
  it('renders correctly', () => {
    const wrapper = mount(<App/>)
    expect(wrapper.type()).toEqual(App)
  })
  
})
