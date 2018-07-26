import React from 'react'
import Select from '../Select'
import renderer from 'react-test-renderer'

const mockCallBack = jest.fn()

test('Select render', () => {
  const component = renderer.create(
    <Select isChecked switchClicked={mockCallBack} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
