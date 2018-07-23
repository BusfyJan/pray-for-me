import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HealthIcon from 'material-ui-icons/Accessibility'
import MoneyIcon from 'material-ui-icons/AttachMoney'
import RelationshipsIcon from 'material-ui-icons/Favorite'
import TimeIcon from 'material-ui-icons/Watch'
import GuidanceIcon from 'material-ui-icons/Gesture'
import JoyIcon from 'material-ui-icons/InsertEmoticon'
import PeaceIcon from 'material-ui-icons/FilterVintage'
import MotivationIcon from 'material-ui-icons/Whatshot'
import SchoolAndJobIcon from 'material-ui-icons/School'
import {
  green,
  blue,
  red,
  yellow,
  orange,
  deepPurple,
  pink
} from 'material-ui/colors'

class Icon extends Component {
  render() {
    const { type } = this.props
    let Icon = null
    let color = null

    if (type === 'guidance') {
      Icon = GuidanceIcon
      color = blue[500]
    }

    if (type === 'health') {
      Icon = HealthIcon
      color = pink[500]
    }

    if (type === 'joy') {
      Icon = JoyIcon
      color = yellow[500]
    }

    if (type === 'money') {
      Icon = MoneyIcon
      color = green[500]
    }

    if (type === 'peace') {
      Icon = PeaceIcon
      color = deepPurple[500]
    }

    if (type === 'relationships') {
      Icon = RelationshipsIcon
      color = red[500]
    }

    if (type === 'time') {
      Icon = TimeIcon
      color = orange[500]
    }

    if (type === 'schoolAndJob') {
      Icon = SchoolAndJobIcon
      color = blue[500]
    }

    if (type === 'motivation') {
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
}

Icon.propTypes = {
  type: PropTypes.string.isRequired
}

export default Icon
