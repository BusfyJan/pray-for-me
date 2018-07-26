import React from 'react'
import Button from '../add/Button'
import renderer from 'react-test-renderer'

const mockCallBack = jest.fn()

test('Button render', () => {
  const component = renderer.create(<Button onClick={mockCallBack} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onClick()

  expect(mockCallBack).toBeCalled()
})
