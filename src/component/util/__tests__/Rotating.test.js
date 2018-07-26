import React from 'react'
import Rotating from '../Rotating'
import renderer from 'react-test-renderer'

test('Rotating render', () => {
  const component = renderer.create(<Rotating>Iam rotated</Rotating>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
