import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import SnackbarMaterial from '@material-ui/core/Snackbar'
import { notification as notificationActions } from 'actions/index.js'
import CancelIcon from '@material-ui/icons/Cancel'

class NotificationDisplayer extends Component {
  onClose = () => {
    this.props.dispatch(notificationActions.pop())
  }

  render() {
    if (this.props.notifications.length === 0) {
      return null
    }
    return (
      <Fragment>
        <SnackbarMaterial
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          open={true}
          onClose={this.onClose}
          autoHideDuration={5000}
          SnackbarContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={this.props.notifications[0]}
          action={<CancelIcon onClick={this.onClose} />}
        />
      </Fragment>
    )
  }
}

NotificationDisplayer = connect(state => {
  return {
    notifications: state.notification.notifications
  }
})(NotificationDisplayer)

export default NotificationDisplayer
