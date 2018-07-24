import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MaterialButton from 'material-ui/Button'
import IconActive from 'material-ui-icons/VisibilityOff'
import IconInactive from 'material-ui-icons/Visibility'
import { blue } from 'material-ui/colors'

const MaterialButtonStyled = styled(MaterialButton)`
  && {
    background: ${blue[800]};
    &:hover {
      background: ${blue[700]};
    }
  }
`

class FilterWithoutDeedsButton extends Component {
  render() {
    const { onClick, active } = this.props

    return (
      <MaterialButtonStyled onClick={onClick} fab mini color="primary">
        {active ? <IconActive /> : <IconInactive />}
      </MaterialButtonStyled>
    )
  }
}

FilterWithoutDeedsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default FilterWithoutDeedsButton
