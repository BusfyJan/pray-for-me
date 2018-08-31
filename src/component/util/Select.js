import React from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  iOSSwitchBase: {
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp
    })
  },

  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: 'solid 1px',
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border'])
  },
  iOSIcon: {
    width: 24,
    height: 24
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1]
  }
})

const Switcher = ({ isChecked, switchClicked, classes }) => (
  <Switch
    disableRipple
    checked={isChecked}
    onChange={switchClicked}
    classes={{
      bar: classes.iOSBar,
      icon: classes.iOSIcon,
      checked: classes.iOSChecked
    }}
  />
)

Switcher.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  switchClicked: PropTypes.func.isRequired
}

export default withStyles(styles)(Switcher)
