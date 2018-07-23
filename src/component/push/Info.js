import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

import PushNotifications from 'container/PushNotifications.js'

const ButtonStyled = styled(Button)`
  float: right;
`

class Info extends Component {
  getInfoText() {
    if (!this.props.isPushEnabled && !this.props.canPushBeEnabled) {
      return (
        <Typography>
          <FormattedMessage
            id="component.push.info.notificationsManuallyDisabled"
            defaultMessage="Notifications are manually disabled. You can enable them in browser settings"
          />
        </Typography>
      )
    }

    if (!this.props.isPushEnabled && this.props.canPushBeEnabled) {
      return (
        <Typography>
          <FormattedMessage
            id="component.push.info.notificationsDisabled"
            defaultMessage="Notifications are disabled. You can enable them by clicking the button"
          />
          <br />
          <br />
          <ButtonStyled
            raised
            color="primary"
            onClick={() => {
              this.props.onRequestPermissionClicked()
            }}
          >
            <FormattedMessage
              id="component.push.info.enableNotifications"
              defaultMessage="Enable notifications"
            />
          </ButtonStyled>
        </Typography>
      )
    }

    return (
      <PushNotifications
        onSettingsUpdated={() => {
          this.props.onRequestClose()
        }}
      />
    )
  }

  render() {
    return (
      <Dialog
        open={this.props.isVisible}
        onClose={() => {
          this.props.onRequestClose()
        }}
      >
        <DialogTitle>
          <FormattedMessage
            id="component.push.info.title"
            defaultMessage="Notifications settings"
          />
        </DialogTitle>
        <Divider />
        <DialogContent>{this.getInfoText()}</DialogContent>
      </Dialog>
    )
  }
}

Info.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  isPushEnabled: PropTypes.bool.isRequired,
  canPushBeEnabled: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onRequestPermissionClicked: PropTypes.func.isRequired
}

export default Info
