import React, { Component, Fragment } from 'react'
import RequestButton from 'component/prayer/add/Button.js'
import RequestForm from 'component/prayer/add/Form.js'
import { add as addPrayer } from 'module/prayer.js'
import { connect } from 'react-redux'
import {
  notification as notificationActions,
  prayer as prayerActions
} from 'actions/index.js'
import { FormattedMessage } from 'react-intl'

class PrayerCreator extends Component {
  state = {
    isRequestFormOpen: false
  }

  onAddFormSubmit(prayerType) {
    return addPrayer(prayerType)
      .then(() => {
        this.setState({ isRequestFormOpen: false })
        this.props.dispatch(
          notificationActions.add(
            <FormattedMessage
              id="container.prayerCreator.prayerAddedSuccessfully"
              defaultMessage="Prayer request was successfully created"
            />
          )
        )
        this.props.dispatch(prayerActions.addRefreshRequest())
      })
      .catch(() => {
        this.setState({ isRequestFormOpen: false })
        this.props.dispatch(
          notificationActions.add(
            <FormattedMessage
              id="container.prayerCreator.prayerAddingFailed"
              defaultMessage="Prayer request creation failed"
            />
          )
        )
      })
  }

  render() {
    return (
      <Fragment>
        <RequestButton
          onClick={() => {
            this.setState({ isRequestFormOpen: true })
          }}
        />
        <RequestForm
          isOpen={this.state.isRequestFormOpen}
          onSubmit={prayerType => {
            return this.onAddFormSubmit(prayerType)
          }}
          onCancel={() => {
            this.setState({ isRequestFormOpen: false })
          }}
        />
      </Fragment>
    )
  }
}

PrayerCreator = connect(state => {
  return {}
})(PrayerCreator)

export default PrayerCreator
