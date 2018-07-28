import React, { Component, Fragment } from 'react'
import NotificationSettings from 'component/push/NotificationSettings.js'
import {
  getSettings as getPushNotificationSettings,
  updateSettings as updatePushNotificationSettings
} from 'module/push/token.js'
import { connect } from 'react-redux'
import { notification as notificationActions } from 'actions/index.js'
import { FormattedMessage } from 'react-intl'
import CircularProgress from 'component/util/CircularProgress.js'
import Typography from 'material-ui/Typography'

class PushNotifications extends Component {
  state = {
    isLoading: false,
    data: null
  }

  componentWillMount() {
    this.setState({ isLoading: true }, () => {
      getPushNotificationSettings()
        .then(settings => {
          this.setState({
            isLoading: false,
            data: settings
          })
        })
        .catch(() => {
          this.setState({
            isLoading: false
          })
        })
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Fragment>
          <Typography component="div">
            <CircularProgress size={20} thickness={7} />
            &nbsp;&nbsp;
            <FormattedMessage
              id="container.pushNotifications.fetching"
              defaultMessage="Fetching push notification settings"
            />
          </Typography>
        </Fragment>
      )
    }

    if (!this.state.data) {
      return (
        <Typography>
          <FormattedMessage
            id="container.pushNotifications.failedToFetch"
            defaultMessage="Failed to retrieve push notification settings"
          />
        </Typography>
      )
    }

    return (
      <NotificationSettings
        notifyWhenNewPrayerRequestWasAdded={
          this.state.data.notifyWhenNewPrayerRequestWasAdded
        }
        notifyWhenDeedWasAddedToMyPrayerRequest={
          this.state.data.notifyWhenDeedWasAddedToMyPrayerRequest
        }
        onSubmit={data => {
          return updatePushNotificationSettings({
            notifyWhenNewPrayerRequestWasAdded:
              data.notifyWhenNewPrayerRequestWasAdded === true,
            notifyWhenDeedWasAddedToMyPrayerRequest:
              data.notifyWhenDeedWasAddedToMyPrayerRequest === true
          })
            .then(() => {
              this.props.dispatch(
                notificationActions.add(
                  <FormattedMessage
                    id="container.pushNotifications.updateSuccess"
                    defaultMessage="Settings were successfully updated"
                  />
                )
              )
              this.props.onSettingsUpdated()
            })
            .catch(() => {
              this.props.dispatch(
                notificationActions.add(
                  <FormattedMessage
                    id="container.pushNotifications.updatingFailed"
                    defaultMessage="Failed to update settings"
                  />
                )
              )
            })
        }}
      />
    )
  }
}

PushNotifications = connect(state => {
  return {}
})(PushNotifications)

export default PushNotifications
