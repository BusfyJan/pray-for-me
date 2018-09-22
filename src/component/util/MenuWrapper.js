import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { injectIntl, defineMessages } from 'react-intl';

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import SettingsIcon from '@material-ui/icons/Settings'
import CloseIcon from '@material-ui/icons/Close'
import MaterialButton from '@material-ui/core/Button'
import { blue } from '@material-ui/core/colors'

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

const StyledText = styled.span`
  font-size: 0.95em;
  font-weight: bold;
  padding-top: 5px;
`

const SwitchWrapper = styled.div`
  text-align: right;
  width: 100%;
`

const componentMessages = defineMessages({
    closeSettings: {
        id: "component.util.menuWrapper.closeSettings",
        defaultMessage: "Close settings"
    },
    openSettings: {
        id: "component.util.menuWrapper.openSettings",
        defaultMessage: "Open settings"
    }
});

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
        <ButtonWrapper
          variant="fab"
          mini
          color="primary"
          onClick={this.handleClick}
          aria-label={
              anchorEl
                ? this.props.intl.formatMessage({...componentMessages.closeSettings})
                : this.props.intl.formatMessage({...componentMessages.openSettings})
          }
        >
          {anchorEl ? <CloseIcon /> : <SettingsIcon />}
        </ButtonWrapper>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              marginTop: '40px',
              borderRadius: '10px'
            }
          }}
        >
          {items.map((item, index) => {
            return (
              <StyledMenuItem key={index}>
                <StyledText>{item.text}</StyledText>
                <SwitchWrapper>{item.children}</SwitchWrapper>
              </StyledMenuItem>
            )
          })}
        </Menu>
      </Fragment>
    )
  }
}

export default injectIntl(MenuWrapper)
