import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MaterialButton from 'material-ui/Button'
import IconAdd from 'material-ui-icons/Add'

const MaterialButtonStyled = styled(MaterialButton)`
  position: fixed !important;
  right: 7px;
  bottom: 7px;
  z-index: 2;
`

const Button = ({ onClick }) => (
  <MaterialButtonStyled onClick={onClick} fab color="primary">
    <IconAdd />
  </MaterialButtonStyled>
)

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button
