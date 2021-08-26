import React from 'react'
import SayHello from '../index'
import { shallow } from 'enzyme'

describe("Say hello to me", () => {

  it("Should return hello sentence include my name", () => {
    const wrapper = shallow(<SayHello name="Poafs1"/>)
    expect(wrapper).toMatchSnapshot();
  })

})