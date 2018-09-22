import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'

import CircularProgress from 'component/util/CircularProgress.js'
import DeedIcon from 'component/deed/Icon.js'
import DeedTitle from 'component/deed/Title.js'

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
            <DeedIcon type={type} />
          )}
        </ListItemIcon>
        <ListItemText primary={<DeedTitle type={type} />} />
      </ListItem>
    )
  }
}

FormItem.propTypes = {
  type: PropTypes.string.isRequired
}

export default FormItem
