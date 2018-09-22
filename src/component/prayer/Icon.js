import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HealthIcon from '@material-ui/icons/Accessibility'
import MoneyIcon from '@material-ui/icons/AttachMoney'
import RelationshipsIcon from '@material-ui/icons/Favorite'
import TimeIcon from '@material-ui/icons/Watch'
import GuidanceIcon from '@material-ui/icons/Gesture'
import JoyIcon from '@material-ui/icons/InsertEmoticon'
import PeaceIcon from '@material-ui/icons/FilterVintage'
import MotivationIcon from '@material-ui/icons/Whatshot'
import SchoolAndJobIcon from '@material-ui/icons/School'
import {
  green,
  blue,
  red,
  yellow,
  orange,
  deepPurple,
  pink
} from '@material-ui/core/colors'

import prayers from 'constants/prayerTypes.js'

const Icon = ({ type }) => {
  let Icon = null
  let color = null

  if (type === prayers.GUIDANCE) {
    Icon = GuidanceIcon
    color = blue[500]
  }

  if (type === prayers.HEALTH) {
    Icon = HealthIcon
    color = pink[500]
  }

  if (type === prayers.JOY) {
    Icon = JoyIcon
    color = yellow[500]
  }

  if (type === prayers.MONEY) {
    Icon = MoneyIcon
    color = green[500]
  }

  if (type === prayers.PEACE) {
    Icon = PeaceIcon
    color = deepPurple[500]
  }

  if (type === prayers.RELATIONSHIPS) {
    Icon = RelationshipsIcon
    color = red[500]
  }

  if (type === prayers.TIME) {
    Icon = TimeIcon
    color = orange[500]
  }

  if (type === prayers.SCHOOL_AND_JOB) {
    Icon = SchoolAndJobIcon
    color = blue[500]
  }

  if (type === prayers.MOTIVATION) {
    Icon = MotivationIcon
    color = deepPurple[500]
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
