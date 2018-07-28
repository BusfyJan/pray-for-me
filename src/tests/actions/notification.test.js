import React from 'react'
import * as actions from 'actions/notification'

test('add', () => {
  it('should add notification', () => {
    const message = 'Hello notification'
    const expectedAction = {
      type: actions.ADD,
      message
    }
    expect(actions.add(message)).toEqual(expectedAction)
  })
})

test('pop', () => {
  it('should pop notification', () => {
    const expectedAction = {
      type: actions.POP
    }
    expect(actions.pop()).toEqual(expectedAction)
  })
})
