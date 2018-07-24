import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/Menu/MenuItem'
import SettingsIcon from 'material-ui-icons/Settings'
import CloseIcon from 'material-ui-icons/Close'
import MaterialButton from 'material-ui/Button'
import { blue } from 'material-ui/colors'

const ButtonWrapper = styled(MaterialButton)`
  && {
    position: fixed !important;
    right: 10px;
    top: 10px;
    z-index: 2;
    background: ${blue[800]};

    &:hover {
      background: ${blue[700]};
    }
  }
`

const StyledMenuItem = styled(MenuItem)`
  && {
    background: white !important;
    &:hover {
      background: white;
    }
  }
`

class MenuWrapper extends Component {
  state = {
    anchorEl: null
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    const { items } = this.props
    return (
      <Fragment>
        <ButtonWrapper fab mini color="primary" onClick={this.handleClick}>
          {anchorEl ? <CloseIcon /> : <SettingsIcon />}
        </ButtonWrapper>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              marginTop: '40px',
              borderRadius: '40px'
            }
          }}
        >
          {items.map((item, index) => {
            return (
              <StyledMenuItem key={index} onClick={this.handleClose}>
                {item}
              </StyledMenuItem>
            )
          })}
        </Menu>
      </Fragment>
    )
  }
}

export default MenuWrapper
