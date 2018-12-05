/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'
import toJson from 'enzyme-to-json'

test('About component should render as expected', () => {
  const component = shallow(<Header />) // Header Dom을 가져옴
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
