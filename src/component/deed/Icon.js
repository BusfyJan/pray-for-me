import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MassIcon from 'material-ui-icons/Home'
import PrayerIcon from 'material-ui-icons/RecordVoiceOver'
import GoodDeedIcon from 'material-ui-icons/FormatPaint'
import { green, blue, red } from 'material-ui/colors'

class Icon extends Component {
  render() {
    const { type } = this.props
    let Icon = null
    let color = null

    if (type === 'prayer') {
      Icon = PrayerIcon
      color = red[500]
    }

    if (type === 'mass') {
      Icon = MassIcon
      color = blue[500]
    }

    if (type === 'goodDeed') {
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
}

Icon.propTypes = {
  type: PropTypes.string.isRequired
}

export default Icon
