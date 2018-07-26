import React from 'react'
import Item from '../Item'
import renderer from 'react-test-renderer'

const mockCallBack = jest.fn()

test('Item render', () => {
  const component = renderer.create(
    <Item type="mass" count={5} onClick={mockCallBack} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onClick()

  expect(mockCallBack).toBeCalled()
})
