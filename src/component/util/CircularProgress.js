import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { CircularProgress as MaterialCircularProgress } from 'material-ui/Progress'
import { blue } from 'material-ui/colors'

class CircularProgress extends Component {
  render() {
    const { color, size, thickness } = this.props

    const MaterialCircularProgressStyled = styled(MaterialCircularProgress)`
      margin-right: 0px;
      color: ${color ? color : blue[800]} !important;
    `

    return <MaterialCircularProgressStyled size={size} thickness={thickness} />
  }
}

CircularProgress.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired
}

CircularProgress.defaultProps = {
  color: blue[800]
}
export default CircularProgress
