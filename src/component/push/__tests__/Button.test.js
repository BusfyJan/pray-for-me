import React from 'react'
import Button from '../Button'
import renderer from 'react-test-renderer'

const mockCallBack = jest.fn()

test('Button render', () => {
  const component = renderer.create(
    <Button isPushEnabled onClick={mockCallBack} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
