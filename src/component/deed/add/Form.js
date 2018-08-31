import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CancelIcon from '@material-ui/icons/Cancel'
import { red } from '@material-ui/core/colors'

import Item from 'component/deed/add/FormItem'

import deeds from 'constants/deedTypes.js'

const deedTypes = [deeds.PRAYER, deeds.MASS, deeds.GOOD_DEED]

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

  onItemClick(deedType) {
    this.setState({ isLoading: true })
    return this.props.onSubmit(deedType).then(() => {
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
    const { isOpen, onCancel } = this.props
    return (
      <Drawer anchor="bottom" open={isOpen} onClose={onCancel}>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <FormattedMessage
                  id="component.deed.add.form.title"
                  defaultMessage="What deed have you done for this request?"
                />
              }
            />
          </ListItem>
          <Divider />
          {deedTypes.map(deedType => {
            return (
              <Item
                key={deedType}
                type={deedType}
                disabled={this.state.isLoading}
                onClick={() => {
                  return this.onItemClick(deedType)
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
                  id="component.deed.add.form.cancel"
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
  onCancel: PropTypes.func,
  isOpen: PropTypes.bool.isRequired
}

export default Form
