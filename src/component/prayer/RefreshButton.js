import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MaterialButton from 'material-ui/Button'
import IconRefresh from 'material-ui-icons/Loop'
import { green } from 'material-ui/colors'

import Rotating from 'component/util/Rotating.js'

const MaterialButtonStyled = styled(MaterialButton)`
  && {
    position: fixed !important;
    right: 7px;
    top: 7px;
    z-index: 2;
    background: ${green[400]};

    &:hover {
      background: ${green[500]};
    }
  }
`

class RefreshButton extends Component {
  render() {
    const { active, onClick } = this.props
    return (
      <MaterialButtonStyled
        onClick={() => {
          if (!active) {
            onClick()
          }
        }}
        fab
        mini
        color="primary"
      >
        {active ? (
          <Rotating>
            <IconRefresh />
          </Rotating>
        ) : (
          <IconRefresh />
        )}
      </MaterialButtonStyled>
    )
  }
}

RefreshButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default RefreshButton
