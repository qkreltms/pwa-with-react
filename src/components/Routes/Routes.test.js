/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Routes from './Routes'
import Home from '../Home/Home'
import About from '../About/About'
import PostDetail from '../PostDetail/PostDetail'

// MemoryRouter는 url history를 메모리에 남김 => 테스트할 때 편함
test('Should render the Home component when visiting / ', () => {
  const component = mount(
    <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )
  expect(component.find(Home).length).toBe(1)
})

test('Should render the Home component when visiting /about ', () => {
  const component = mount(
    <MemoryRouter initialEntries={[ '/about' ]} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )
  expect(component.find(About).length).toBe(1)
})

test('Should render the Home component when visiting /post/:slug ', () => {
  const component = mount(
    <MemoryRouter initialEntries={[ '/post/s1' ]} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )
  expect(component.find(PostDetail).length).toBe(1)
})
