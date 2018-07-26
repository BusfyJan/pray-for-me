import React from 'react'
import * as actions from '../prayer'
import * as types from '../prayer'

test('setOnlyMine', () => {
  it('should create an action to set only mine prayers filter', () => {
    const onlyMine = true
    const expectedAction = {
      type: types.SET_ONLY_MINE,
      onlyMine
    }
    expect(actions.setOnlyMine(onlyMine)).toEqual(expectedAction)
  })
})

test('setOnlyWithoutDeeds', () => {
  it('should create an action to set only withou deeds', () => {
    const withoutDeeds = true
    const expectedAction = {
      type: types.SET_ONLY_WITHOUT_DEEDS,
      withoutDeeds
    }
    expect(actions.setOnlyWithoutDeeds(withoutDeeds)).toEqual(expectedAction)
  })
})

test('setList', () => {
  it('should create an action to set list of deeds', () => {
    const list = {}
    const expectedAction = {
      type: types.SET_LIST,
      list
    }
    expect(actions.setList(list)).toEqual(expectedAction)
  })
})

test('addRefreshRequest', () => {
  it('should create an action to refresh list', () => {
    const expectedAction = {
      type: types.ADD_REFRESH_REQUEST
    }
    expect(actions.addRefreshRequest()).toEqual(expectedAction)
  })
})

test('popRefreshRequest', () => {
  it('should create an action popRefreshRequest', () => {
    const expectedAction = {
      type: types.POP_REFRESH_REQUEST
    }
    expect(actions.popRefreshRequest()).toEqual(expectedAction)
  })
})
