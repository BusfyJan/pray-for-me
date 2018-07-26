import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { CircularProgress as MaterialCircularProgress } from 'material-ui/Progress'
import { blue } from 'material-ui/colors'

const MaterialCircularProgressStyled = styled(MaterialCircularProgress)`
  margin-right: 0px;
  color: ${props => (props.color ? props.color : blue[800])} !important;
`

const CircularProgress = ({ color, size, thickness }) => (
  <MaterialCircularProgressStyled
    color={color}
    size={size}
    thickness={thickness}
  />
)

CircularProgress.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired
}

CircularProgress.defaultProps = {
  color: blue[800]
}
export default CircularProgress
