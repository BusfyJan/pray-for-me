import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'

const CircularProgressStyled = styled(CircularProgress)`
  position: absolute;
  top: 47%;
  left: 47%;
`

const FullCircularLoader = () => <CircularProgressStyled thickness={7} />

export default FullCircularLoader
