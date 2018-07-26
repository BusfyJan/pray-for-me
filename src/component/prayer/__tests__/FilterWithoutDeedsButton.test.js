import React from 'react'
import FilterWithoutDeedsButton from '../FilterWithoutDeedsButton'
import renderer from 'react-test-renderer'

const mockCallBack = jest.fn()

test('FilterWithoutDeedsButton render', () => {
  const component = renderer.create(
    <FilterWithoutDeedsButton active onClick={mockCallBack} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onClick()

  expect(mockCallBack).toBeCalled()
})
