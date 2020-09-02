import React from "react"
import { mount, shallow } from "enzyme";
import "../../../config";
import Hero from "../../../../components/dumb/Hero";

describe('<Hero />', () => {
  const wrapper = mount(<Hero>
      <p>
        My Hero
      </p>
    </Hero>)

  it('should render properly', () => {
    expect(wrapper.type()).toEqual(Hero);
  })

  it('should have hero prop with default value', () => {
    expect(wrapper.props().hero).toEqual('defaultHero');
  })

  it('should render hero prop with custom value', () => {
    wrapper.setProps({hero: 'housesHero'})
    expect(wrapper.props().hero).toEqual('housesHero')
  })
})