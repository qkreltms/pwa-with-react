/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Post from './Post'
import toJson from 'enzyme-to-json'

test('Post component should render as expected', () => {
  const component = shallow(<Post />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
