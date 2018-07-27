import React from 'react'
import * as actions from '../notification'
import * as types from '../notification'

test('add', () => {
  it('should add notification', () => {
    const message = 'Hello notification'
    const expectedAction = {
      type: types.ADD,
      message
    }
    expect(actions.add(message)).toEqual(expectedAction)
  })
})

test('pop', () => {
  it('should pop notification', () => {
    const expectedAction = {
      type: types.POP
    }
    expect(actions.pop()).toEqual(expectedAction)
  })
})
