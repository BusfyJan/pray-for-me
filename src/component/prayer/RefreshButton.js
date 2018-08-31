import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MaterialButton from '@material-ui/core/Button'
import IconRefresh from '@material-ui/icons/Loop'
import { green } from '@material-ui/core/colors'

import Rotating from 'component/util/Rotating.js'

const MaterialButtonStyled = styled(MaterialButton)`
  && {
    position: fixed !important;
    right: 10px;
    top: 60px;
    z-index: 2;
    background: ${green[400]};

    &:hover {
      background: ${green[500]};
    }
  }
`

const RefreshButton = ({ active, onClick }) => (
  <MaterialButtonStyled
    onClick={() => {
      if (!active) {
        onClick()
      }
    }}
    variant="fab"
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

RefreshButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default RefreshButton
