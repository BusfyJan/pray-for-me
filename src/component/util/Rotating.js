import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

const animationKeyframe = keyframes`
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
`

const RotatingWrapper = styled.span`
  margin: 0px;
  padding: 0px;
  width: 24px;
  height: 24px;
  animation: ${animationKeyframe} 1s linear infinite;
`

const Rotating = ({ children }) => <RotatingWrapper>{children}</RotatingWrapper>

Rotating.propTypes = {
  children: PropTypes.node
}

export default Rotating
