import React from 'react'
import CircularProgress from '../CircularProgress'
import renderer from 'react-test-renderer'

test('CircularProgress render', () => {
  const component = renderer.create(
    <CircularProgress size={20} thickness={5} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
