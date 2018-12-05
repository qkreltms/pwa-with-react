/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import About from './About'
import toJson from 'enzyme-to-json'

test('About component should render as expected', () => {
  const component = shallow(<About />) // About Dom을 가져옴  
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
