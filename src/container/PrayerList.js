import React, { Component } from 'react'
import { getId as getUserId } from 'module/user/user.js'
import { close as closePrayer } from 'module/prayer.js'
import { add as addDeed } from 'module/deed.js'
import { connect } from 'react-redux'
import {
  notification as notificationActions,
  prayer as prayerActions
} from 'actions/index.js'
import { FormattedMessage } from 'react-intl'
import List from 'component/prayer/List.js'
import ResponseForm from 'component/deed/add/Form.js'

class PrayerList extends Component {
  constructor() {
    super()

    this.state = {
      prayerIdToResponseTo: null
    }
  }

  componentWillMount() {
    this.props.dispatch(prayerActions.addRefreshRequest())
  }

  onAddFormSubmit(deedType) {
    return addDeed(this.state.prayerIdToResponseTo, deedType)
      .then(() => {
        this.setState({ prayerIdToResponseTo: null })
        this.props.dispatch(
          notificationActions.add(
            <FormattedMessage
              id="container.prayerList.deedAddedSuccessfully"
              defaultMessage="Deed was successfully added to prayer"
            />
          )
        )
        this.props.dispatch(prayerActions.addRefreshRequest())
      })
      .catch(() => {
        this.setState({ prayerIdToResponseTo: null })
        this.props.dispatch(
          notificationActions.add(
            <FormattedMessage
              id="container.prayerList.deedAddingFailed"
              defaultMessage="Deed adding failed"
            />
          )
        )
      })
  }

  onPrayerClose(prayerId) {
    return closePrayer(prayerId)
      .then(() => {
        this.props.dispatch(
          notificationActions.add(
            <FormattedMessage
              id="container.prayerList.prayerClosedSuccessfully"
              defaultMessage="Prayer request was successfully closed"
            />
          )
        )
        this.props.dispatch(prayerActions.addRefreshRequest())
      })
      .catch(() => {
        this.props.dispatch(
          notificationActions.add(
            <FormattedMessage
              id="container.prayerList.prayerClosingFailed"
              defaultMessage="Prayer request closing failed"
            />
          )
        )
      })
  }

  render() {
    const userId = getUserId()
    return (
      <div>
        <List
          items={this.props.prayers
            .map(prayer => {
              prayer.isMine = userId === prayer.userId
              return prayer
            })
            .filter(prayer => {
              if (this.props.onlyMinePrayers && !prayer.isMine) {
                return false
              }

              if (this.props.withoutDeeds && prayer.deeds.length > 0) {
                return false
              }

              return true
            })}
          onItemResponseRequest={prayerId => {
            this.setState({
              prayerIdToResponseTo: prayerId
            })
          }}
          onItemCloseRequest={prayerId => {
            return this.onPrayerClose(prayerId)
          }}
        />
        <ResponseForm
          isOpen={this.state.prayerIdToResponseTo !== null}
          onCancel={() => {
            this.setState({ prayerIdToResponseTo: null })
          }}
          onSubmit={deedType => {
            return this.onAddFormSubmit(deedType)
          }}
        />
      </div>
    )
  }
}

PrayerList = connect(state => {
  return {
    prayers: state.prayer.list,
    onlyMinePrayers: state.prayer.onlyMine,
    withoutDeeds: state.prayer.withoutDeeds
  }
})(PrayerList)

export default PrayerList
