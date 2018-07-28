import React from 'react'
import * as types from 'actions/notification'

test('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      {
        notifications: []
      }
    ])
  })
})

test('reducers', () => {
  it('should add new notification', () => {
    expect(
      reducer([], {
        type: types.ADD,
        message: 'hello'
      })
    ).toEqual([
      {
        notification: ['hello']
      }
    ])
  })
})
test('reducers', () => {
  it('should add new notification', () => {
    expect(
      reducer(['hello'], {
        type: types.POP
      })
    ).toEqual([
      {
        notification: []
      }
    ])
  })
})
