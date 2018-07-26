import React, { Component, Fragment } from 'react'
import {
  isSupported as isPushSupported,
  isPermissionGranted as isPushPermissionGranted,
  canPermissionBeRequested as canPushPermissionBeRequested,
  requestPermission as requestPushPermission
} from 'module/push/permissions.js'
import {
  init as initPushToken,
  updateSettings as updatePushNotificationSettings
} from 'module/push/token.js'
import Button from 'component/push/Button.js'
import Info from 'component/push/Info.js'
import { notification as notificationActions } from 'actions/index.js'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

class PushSettings extends Component {
  state = {
    isWorking: false,
    isPushSupported: false,
    isPushEnabled: false,
    canPushBeRequested: false,
    isInfoVisible: false
  }

  componentWillMount() {
    this.refreshPushInfo()

    if (isPushPermissionGranted()) {
      this.initPushToken()
    }
  }

  refreshPushInfo() {
    this.setState({
      isPushSupported: isPushSupported(),
      isPushEnabled: isPushPermissionGranted(),
      canPushBeEnabled: canPushPermissionBeRequested()
    })
  }

  initPushToken() {
    this.setState({ isWorking: true }, () => {
      initPushToken()
        .then(() => {
          this.setState({ isWorking: false })
        })
        .catch(error => {
          this.setState({ isWorking: false })
          this.props.dispatch(
            notificationActions.add(
              <FormattedMessage
                id="container.pushSettings.initTokenFailed"
                defaultMessage="Initialization of push notifications failed"
              />
            )
          )
        })
    })
  }

  onInfoButtonClicked() {
    if (this.state.isWorking) {
      return
    }

    this.setState({ isInfoVisible: true })
  }

  onRequestPermissionsClicked() {
    this.setState({ isWorking: true, isInfoVisible: false }, () => {
      requestPushPermission()
        .then(() => {
          return updatePushNotificationSettings({
            notifyWhenNewPrayerRequestWasAdded: true,
            notifyWhenDeedWasAddedToMyPrayerRequest: true
          })
        })
        .then(() => {
          this.setState({ isWorking: false }, () => {
            this.refreshPushInfo()
            this.initPushToken()
          })
          this.props.dispatch(
            notificationActions.add(
              <FormattedMessage
                id="container.pushNotifications.enablingSucceeded"
                defaultMessage="Push notifications were successfully enabled"
              />
            )
          )
        })
        .catch(error => {
          this.setState({ isWorking: false }, () => {
            this.refreshPushInfo()
          })
          this.props.dispatch(
            notificationActions.add(
              <FormattedMessage
                id="container.pushNotifications.enablingFailed"
                defaultMessage="Push notifications were disabled"
              />
            )
          )
        })
    })
  }

  render() {
    if (!this.state.isPushSupported) {
      return null
    }

    return (
      <Fragment>
        <Button
          isWorking={this.state.isWorking}
          isPushEnabled={this.state.isPushEnabled}
          canPushBeEnabled={this.state.canPushBeEnabled}
          onClick={() => {
            this.onInfoButtonClicked()
          }}
        />
        <Info
          isVisible={this.state.isInfoVisible}
          isPushEnabled={this.state.isPushEnabled}
          canPushBeEnabled={this.state.canPushBeEnabled}
          onRequestPermissionClicked={() => {
            this.onRequestPermissionsClicked()
          }}
          onRequestClose={() => {
            this.setState({ isInfoVisible: false })
          }}
        />
      </Fragment>
    )
  }
}

PushSettings = connect(state => {
  return {}
})(PushSettings)

export default PushSettings
