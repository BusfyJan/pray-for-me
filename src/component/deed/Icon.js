import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MassIcon from '@material-ui/icons/Home'
import PrayerIcon from '@material-ui/icons/RecordVoiceOver'
import GoodDeedIcon from '@material-ui/icons/FormatPaint'
import { green, blue, red } from '@material-ui/core/colors'

import deeds from 'constants/deedTypes.js'

const Icon = ({ type }) => {
  let Icon = null
  let color = null

  if (type === deeds.PRAYER) {
    Icon = PrayerIcon
    color = red[500]
  }

  if (type === deeds.MASS) {
    Icon = MassIcon
    color = blue[500]
  }

  if (type === deeds.GOOD_DEED) {
    Icon = GoodDeedIcon
    color = green[500]
  }

  if (Icon === null) {
    throw new Error('Icon type ' + type + ' not supported!')
  }

  Icon = styled(Icon)`
    color: ${color};
  `

  return <Icon />
}

Icon.propTypes = {
  type: PropTypes.string.isRequired
}

export default Icon
