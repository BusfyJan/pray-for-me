import { prayer as prayerActions } from 'actions/index.js'
const defaultState = {
  list: [],
  refreshRequests: [],
  onlyMine: false,
  withoutDeeds: false
}

const prayer = (state = defaultState, action) => {
  switch (action.type) {
    case prayerActions.SET_ONLY_MINE:
      return Object.assign({}, state, {
        onlyMine: action.onlyMine
      })
    case prayerActions.SET_ONLY_WITHOUT_DEEDS:
      return Object.assign({}, state, {
        withoutDeeds: action.withoutDeeds
      })
    case prayerActions.SET_LIST:
      return Object.assign({}, state, {
        list: action.list
      })

    case prayerActions.ADD_REFRESH_REQUEST:
      const refreshRequestsToAdd = state.refreshRequests.slice()
      refreshRequestsToAdd.push(true)

      return Object.assign({}, state, {
        refreshRequests: refreshRequestsToAdd
      })

    case prayerActions.POP_REFRESH_REQUEST:
      const refreshRequestsToRemove = state.refreshRequests.slice()
      refreshRequestsToRemove.shift()
      return Object.assign({}, state, {
        refreshRequests: refreshRequestsToRemove
      })
    default:
      return state
  }
}

export default prayer
