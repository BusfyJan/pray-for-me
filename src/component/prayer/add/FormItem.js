import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import CircularProgress from 'component/util/CircularProgress.js'
import PrayerIcon from 'component/prayer/Icon.js'
import PrayerTitle from 'component/prayer/Title.js'

class FormItem extends Component {
  state = {
    isLoading: false
  }

  onClick() {
    if (this.props.disabled) {
      return
    }

    this.setState({ isLoading: true })
    this.props
      .onClick()
      .then(() => {
        this.setState({ isLoading: false })
      })
      .catch(() => {
        this.setState({ isLoading: false })
      })
  }

  render() {
    const { type } = this.props
    return (
      <ListItem
        button
        onClick={() => {
          this.onClick()
        }}
      >
        <ListItemIcon>
          {this.state.isLoading ? (
            <CircularProgress size={24} thickness={7} />
          ) : (
            <PrayerIcon type={type} />
          )}
        </ListItemIcon>
        <ListItemText primary={<PrayerTitle type={type} />} />
      </ListItem>
    )
  }
}

FormItem.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default FormItem
