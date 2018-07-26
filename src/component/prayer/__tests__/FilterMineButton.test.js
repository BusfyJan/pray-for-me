import React from 'react'
import FilterMineButton from '../FilterMineButton'
import renderer from 'react-test-renderer'

const mockCallBack = jest.fn()

test('FilterMineButton render', () => {
  const component = renderer.create(
    <FilterMineButton active onClick={mockCallBack} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onClick()

  expect(mockCallBack).toBeCalled()
})
