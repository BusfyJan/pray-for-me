import React from 'react'
import FullCircularLoader from '../FullCircularLoader'
import renderer from 'react-test-renderer'

test('FullCircularLoader render', () => {
  const component = renderer.create(<FullCircularLoader />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
