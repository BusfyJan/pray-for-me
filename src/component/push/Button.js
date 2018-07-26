import React from 'react'
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

const getButtonIcon = (isWorking, isPushEnabled, canPushBeEnabled) => {
  if (isWorking) {
    return (
      <Rotating>
        <IconLoading />
      </Rotating>
    )
  }

  if (isPushEnabled) {
    return <IconNotificationsActive />
  }

  if (canPushBeEnabled) {
    return <IconNotificationsNone />
  }

  return <IconNotificationsOff />
}

const Button = ({ isWorking, isPushEnabled, canPushBeEnabled }) => (
  <MaterialButtonStyled
    onClick={() => {
      this.props.onClick()
    }}
    fab
    mini
    color="accent"
  >
    {getButtonIcon(isWorking, isPushEnabled, canPushBeEnabled)}
  </MaterialButtonStyled>
)

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
