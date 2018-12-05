/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'
import toJson from 'enzyme-to-json'
import Post from '../Post/Post'

test('About component should render as expected', () => {
  // 스냅 데이터로 test
  const posts = [{
    'title': 't1',
    'slug': 's1',
    'excerpt': 'e1',
    'content': 'c1'
  }]
  const component = shallow(<Home posts={posts} />)
  const tree = toJson(component)

  expect(component.find(Post).length).toBe(1)
  expect(tree).toMatchSnapshot()
})

test('About component should render as expected', () => {
  const component = shallow(<Home posts={[]} />)
  const tree = toJson(component)

  expect(component.find(Post).length).toBe(0)
  expect(tree).toMatchSnapshot()
})
