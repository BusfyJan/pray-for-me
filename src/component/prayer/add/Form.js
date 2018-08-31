import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CancelIcon from '@material-ui/icons/Cancel'
import { red } from '@material-ui/core/colors'

import Item from 'component/prayer/add/FormItem.js'

import prayers from 'constants/prayerTypes.js'

const prayerTypes = [
  prayers.GUIDANCE,
  prayers.HEALTH,
  prayers.JOY,
  prayers.MONEY,
  prayers.PEACE,
  prayers.RELATIONSHIPS,
  prayers.TIME,
  prayers.SCHOOL_AND_JOB,
  prayers.MOTIVATION
]

const CancelIconStyled = styled(CancelIcon)`
  && {
    color: ${red[500]};
    margin-right: 0px;
  }
`

class Form extends Component {
  state = {
    isLoading: false
  }

  onItemClick(prayerType) {
    this.setState({ isLoading: true })
    return this.props.onSubmit(prayerType).then(() => {
      this.setState({
        isLoading: false
      }).catch(() => {
        this.setState({
          isLoading: true
        })
      })
    })
  }

  render() {
    const { onCancel, isOpen } = this.props
    return (
      <Drawer anchor="bottom" open={isOpen} onClose={onCancel}>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <FormattedMessage
                  id="component.prayer.add.form.title"
                  defaultMessage="What do you need others to pray about?"
                />
              }
            />
          </ListItem>
          <Divider />
          {prayerTypes.map(prayerType => {
            return (
              <Item
                key={prayerType}
                type={prayerType}
                disabled={this.state.isLoading}
                onClick={() => {
                  return this.onItemClick(prayerType)
                }}
              />
            )
          })}
          <Divider />
          <ListItem button onClick={onCancel}>
            <ListItemIcon>
              <CancelIconStyled />
            </ListItemIcon>
            <ListItemText
              primary={
                <FormattedMessage
                  id="component.prayer.add.form.cancel"
                  defaultMessage="cancel"
                />
              }
            />
          </ListItem>
        </List>
      </Drawer>
    )
  }
}

Form.propTypes = {
  onCancel: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Form
