import React from 'react'
import * as types from 'actions/prayer'

test('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      {
        list: [],
        refreshRequests: [],
        onlyMine: false,
        withoutDeeds: false
      }
    ])
  })
})

test('reducers', () => {
  it('should set filter value', () => {
    expect(
      reducer([], {
        type: types.SET_ONLY_MINE,
        onlyMine: true
      })
    ).toEqual([
      {
        list: [],
        refreshRequests: [],
        onlyMine: true,
        withoutDeeds: false
      }
    ])
  })
})

test('reducers', () => {
  it('should set filter SET_ONLY_WITHOUT_DEEDS', () => {
    expect(
      reducer([], {
        type: types.SET_ONLY_WITHOUT_DEEDS,
        withoutDeeds: true
      })
    ).toEqual([
      {
        list: [],
        refreshRequests: [],
        onlyMine: false,
        withoutDeeds: true
      }
    ])
  })
})

test('reducers', () => {
  it('should set filter SET_LIST', () => {
    expect(
      reducer([], {
        type: types.SET_LIST,
        list: [1, 2, 3, 4, 5]
      })
    ).toEqual([
      {
        list: [1, 2, 3, 4, 5],
        refreshRequests: [],
        onlyMine: false,
        withoutDeeds: false
      }
    ])
  })
})
