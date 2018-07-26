import React from 'react'
import Icon from '../Icon'
import renderer from 'react-test-renderer'

test('Icon render', () => {
  const component = renderer.create(<Icon type="guidance" />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
