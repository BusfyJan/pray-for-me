import React from 'react'
import PropTypes from 'prop-types'
import Switch from 'material-ui/Switch'

const Switcher = ({ isChecked, switchClicked }) => (
  <Switch
    disableRipple
    checked={isChecked}
    onChange={switchClicked}
  />
)

Switcher.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  switchClicked: PropTypes.func.isRequired
}

export default Switcher;
