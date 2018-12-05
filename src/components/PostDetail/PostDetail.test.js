/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import PostDetail from './PostDetail'
import toJson from 'enzyme-to-json'

test('About component should render as expected', () => {
  const component = shallow(<PostDetail />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
