import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MaterialButton from 'material-ui/Button'
import IconActive from 'material-ui-icons/Face'
import IconInactive from 'material-ui-icons/SupervisorAccount'
import { blue } from 'material-ui/colors'

const MaterialButtonStyled = styled(MaterialButton)`
  && {
    background: ${blue[400]};

    &:hover {
      background: ${blue[500]};
    }
  }
`

class FilterMineButton extends Component {
  render() {
    const { onClick, active } = this.props

    return (
      <MaterialButtonStyled onClick={onClick} fab mini color="primary">
        {active ? <IconActive /> : <IconInactive />}
      </MaterialButtonStyled>
    )
  }
}

FilterMineButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default FilterMineButton
