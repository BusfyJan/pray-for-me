import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MaterialButton from 'material-ui/Button'
import IconNotificationsNone from 'material-ui-icons/NotificationsNone'
import IconNotificationsActive from 'material-ui-icons/NotificationsActive'
import IconNotificationsOff from 'material-ui-icons/NotificationsOff'
import IconLoading from 'material-ui-icons/Cached'

import Rotating from 'component/util/Rotating.js'

const MaterialButtonStyled = styled(MaterialButton)`
  position: fixed !important;
  left: 7px;
  bottom: 7px;
  z-index: 2;
`

class Button extends Component {
  getButtonIcon() {
    if (this.props.isWorking) {
      return (
        <Rotating>
          <IconLoading />
        </Rotating>
      )
    }

    if (this.props.isPushEnabled) {
      return <IconNotificationsActive />
    }

    if (this.props.canPushBeEnabled) {
      return <IconNotificationsNone />
    }

    return <IconNotificationsOff />
  }

  render() {
    return (
      <MaterialButtonStyled
        onClick={() => {
          this.props.onClick()
        }}
        fab
        mini
        color="accent"
      >
        {this.getButtonIcon()}
      </MaterialButtonStyled>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isPushEnabled: PropTypes.bool,
  canPushBeEnabled: PropTypes.bool,
  isWorking: PropTypes.bool
}

Button.defaultProps = {
  isPushEnabled: false,
  canPushBeEnabled: false,
  isWorking: false
}

export default Button
